import {EMAIL, questions, outcomes, permissionLabels, resolvePath} from './data.mjs';

const $ = s => document.querySelector(s);
const SMARTPATH_URL = 'https://engineering-jhu.mntnpass.com/mps';
const esc = value => String(value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const arrow = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>';
const check = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m5 12 4 4L19 6"/></svg>';
let history = [];
try { history = JSON.parse(sessionStorage.getItem('wse-title-path-v3') || '[]'); resolvePath(history); } catch { history = []; }
let current = resolvePath(history);
let toastTimer;
function save() { try {sessionStorage.setItem('wse-title-path-v3', JSON.stringify(history));} catch {} }
function focusHeading() { requestAnimationFrame(() => $('#step-title')?.focus({preventScroll:true})); }
function notify(message) { $('#toast').textContent=message; $('#toast').classList.add('show'); clearTimeout(toastTimer); toastTimer=setTimeout(()=>$('#toast').classList.remove('show'),3500); }
function appointmentNextStep(rank) {
  return `<section class="appointment-next-step" aria-label="Appointment next step"><h3>Next step</h3><p>${esc(rank.nextStep).replaceAll('SmartPath', `<a href="${SMARTPATH_URL}">SmartPath</a>`)}</p><p>Direct questions to: <a href="mailto:${EMAIL}">${esc(rank.contactName)}</a><br><a href="mailto:${EMAIL}">${EMAIL}</a></p></section>`;
}
function permissionGrid(rank) {
  const appointmentScope = rank.group === 'Lecturer track' ? '<p class="privilege-scope">For part-time or short-term appointments only.</p>' : '';
  return `${appointmentScope}<div class="permission-grid">${rank.permissions.map((p,i)=>`<div class="permission-item"><span class="permission-label">${permissionLabels[i]}</span><strong class="${p==='Not permitted'?'restricted':p.includes('case')||p.includes('qualification')?'conditional':''}">${p==='Not permitted'?'<span aria-hidden="true">—</span>':check}${esc(p)}</strong></div>`).join('')}</div>`;
}
function render(focus=false) {
  current=resolvePath(history); save();
  const isQuestion=!!current.options;
  $('#decision-card').classList.toggle('is-result',!isQuestion);
  if(isQuestion) {
    $('#decision-card').innerHTML=`<div class="card-topline"><span class="step-marker">${String(history.length+1).padStart(2,'0')}</span><span>${esc(current.section)}</span><span class="live-label"><span></span> Decision in progress</span></div><div class="question-body"><p class="eyebrow question-eyebrow">QUESTION ${String(history.length+1).padStart(2,'0')}</p><h2 id="step-title" tabindex="-1">${esc(current.title)}</h2>${current.context?`<p class="question-context">${esc(current.context)}</p>`:''}<fieldset class="answer-options ${current.options.length>2?'four-options':''}"><legend class="sr-only">Choose an answer to continue</legend>${current.options.map((o,i)=>`<button type="button" class="answer-card" data-choice="${i}"><span class="answer-symbol" aria-hidden="true">${current.options.length===2?(i===0?check:'<span>−</span>'):'<span>'+String.fromCharCode(65+i)+'</span>'}</span><span>${esc(o.label)}</span>${arrow}</button>`).join('')}</fieldset><p class="choice-hint">Choose the answer that best describes the proposed appointment.</p></div><div class="card-actions"><button class="back-button" ${history.length?'':'disabled'} data-back><span aria-hidden="true">←</span> Previous question</button><button class="reset-button" ${history.length?'':'disabled'} data-reset>Start over <span aria-hidden="true">↺</span></button></div>`;
  } else {
    $('#decision-card').innerHTML=`<div class="card-topline"><span class="result-check">${check}</span><span>${current.contact?'Faculty Affairs consultation':'Your recommendation'}</span><span class="complete-label">Path complete</span></div><div class="result-body"><p class="eyebrow">${esc(current.group)}</p><h2 id="step-title" tabindex="-1">${esc(current.title)}</h2><p class="result-lead">${current.contact?'A conversation can help clarify the appropriate next step.':'Based on your answers, this title seems like the best fit.'}</p>${current.contact?`<p class="result-detail contact-detail">${esc(current.detail)}</p><a class="button primary email-button" href="mailto:${EMAIL}">Email Faculty Affairs ${arrow}</a><a class="email-address" href="mailto:${EMAIL}">${EMAIL}</a>`:`<h3 class="section-caption">Privileges at a glance</h3>${permissionGrid(current)}${current.note?`<div class="result-note"><span aria-hidden="true">i</span><p>${esc(current.note)}</p></div>`:''}${appointmentNextStep(current)}<div class="result-tools"><button class="button primary" data-copy>Copy recommendation ${arrow}</button><button class="button secondary" data-print>Print / save PDF</button></div>`}</div><div class="card-actions"><button class="back-button" data-back><span aria-hidden="true">←</span> Review previous answer</button><button class="reset-button" data-reset>Start a new decision <span aria-hidden="true">↺</span></button></div>`;
  }
  $('#decision-card').querySelectorAll('[data-choice]').forEach(button=>button.addEventListener('click',()=>{history.push({id:current.id,choice:Number(button.dataset.choice)});render(true);}));
  $('#decision-card').querySelector('[data-back]')?.addEventListener('click',()=>{history.pop();render(true);});
  $('#decision-card').querySelector('[data-reset]')?.addEventListener('click',()=>{history=[];render(true);});
  $('#decision-card').querySelector('[data-copy]')?.addEventListener('click',copyRecommendation);
  $('#decision-card').querySelector('[data-print]')?.addEventListener('click',()=>window.print());
  renderHistory();
  if(focus) focusHeading();
}
function renderHistory() {
  $('#answer-count').textContent=`${history.length} ${history.length===1?'answer':'answers'}`;
  $('#path-content').innerHTML=history.length?`<ol class="history-list">${history.map((item,i)=>`<li><button class="history-item" data-edit="${i}" aria-label="Revisit question ${i+1}: ${esc(questions[item.id].short)}"><span class="history-dot">${check}</span><span class="history-text"><span>${esc(questions[item.id].short)}</span><strong>${esc(questions[item.id].options[item.choice].label)}</strong></span><span class="edit-label">Edit</span></button></li>`).join('')}</ol>${!current.options?'<div class="history-done">'+check+' Recommendation reached</div>':''}`:`<div class="path-empty"><div class="path-illustration" aria-hidden="true"><span></span><i></i><span></span><i></i><span></span></div><h3>Your answers will appear here.</h3><p>Work through the questions to build a clear picture of the appointment.</p></div><div class="path-preview"><span class="eyebrow">HOW IT WORKS</span><ol><li><span>1</span>Consider the appointment</li><li><span>2</span>Follow the relevant criteria</li><li><span>3</span>Review the suggested title</li></ol></div>`;
  $('#path-content').querySelectorAll('[data-edit]').forEach(button=>button.addEventListener('click',()=>{history=history.slice(0,Number(button.dataset.edit));render(true);$('#decision-card').scrollIntoView({behavior:'smooth',block:'nearest'});}));
}
function summaryText() {
  return `Whiting School of Engineering\nFaculty title recommendation\n\n${current.title}\n${current.contact?'': 'This title seems like the best fit based on the supplied decision outline.\n'}${current.detail}\n${current.note||''}${current.contact?'':`\n\n${current.nextStep}\nDirect questions to: ${current.contactName} ${EMAIL}`}\n\nDecision path\n${history.map((item,i)=>`${i+1}. ${questions[item.id].title}\n   ${questions[item.id].options[item.choice].label}`).join('\n')}\n\nOffice of Faculty Affairs: ${EMAIL}\nSource: Decision Tree for Choosing Titles (supplied outline). Excludes tenured and tenure-track faculty.`;
}
async function copyRecommendation() {
  const content=summaryText();
  try { await navigator.clipboard.writeText(content); notify('Recommendation and decision path copied.'); }
  catch { const input=document.createElement('textarea');input.value=content;input.style.position='fixed';input.style.opacity='0';document.body.append(input);input.select();const copied=document.execCommand('copy');input.remove();notify(copied?'Recommendation and decision path copied.':'Use Print / save PDF to keep this recommendation.'); }
}
const ranks=Object.values(outcomes).filter(o=>!o.contact);
for(const group of [...new Set(ranks.map(r=>r.group))]) {const option=document.createElement('option');option.value=group;option.textContent=group;$('#group-filter').append(option);}
function renderDirectory() {
  const search=$('#title-search').value.trim().toLowerCase();
  const group=$('#group-filter').value;
  const matching=ranks.filter(r=>(!group||r.group===group)&&`${r.title} ${r.group}`.toLowerCase().includes(search));
  $('#directory-count').textContent=`${matching.length} ${matching.length===1?'title':'titles'}`;
  $('#directory-list').innerHTML=matching.length?matching.map(r=>`<button class="directory-card" data-rank="${r.id}"><span class="directory-category">${esc(r.group)}</span><h3>${esc(r.title)}</h3><span class="directory-review">View privileges ${arrow}</span></button>`).join(''):'<div class="no-results"><h3>No matching titles</h3><p>Try a different title or choose another appointment pathway.</p><button class="button secondary" id="clear-filters">Clear filters</button></div>';
  $('#directory-list').querySelectorAll('[data-rank]').forEach(button=>button.addEventListener('click',()=>openRank(Number(button.dataset.rank))));
  $('#clear-filters')?.addEventListener('click',()=>{$('#title-search').value='';$('#group-filter').value='';renderDirectory();$('#title-search').focus();});
}
function openRank(id) {
  const rank=outcomes[id];
  $('#dialog-content').innerHTML=`<p class="directory-category">${esc(rank.group)}</p><h2 id="dialog-title">${esc(rank.title)}</h2><h3 class="section-caption">Privileges at a glance</h3>${permissionGrid(rank)}<p class="dialog-detail">${esc(rank.detail)}</p>${rank.note?`<div class="result-note"><span aria-hidden="true">i</span><p>${esc(rank.note)}</p></div>`:''}${appointmentNextStep(rank)}`;
  $('#title-dialog').showModal();
}
$('#close-dialog').addEventListener('click',()=>$('#title-dialog').close());
$('#title-dialog').addEventListener('click',event=>{if(event.target===$('#title-dialog')){const rect=event.target.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)event.target.close();}});
$('#title-search').addEventListener('input',renderDirectory);
$('#group-filter').addEventListener('change',renderDirectory);
function switchView() {
  const directory=location.hash==='#directory';
  $('#guide-view').hidden=directory;$('#directory-view').hidden=!directory;
  document.querySelectorAll('[data-view]').forEach(link=>{const selected=link.dataset.view===(directory?'directory':'guide');link.classList.toggle('active',selected);if(selected)link.setAttribute('aria-current','page');else link.removeAttribute('aria-current');});
}
window.addEventListener('hashchange',switchView);
render();renderDirectory();switchView();
