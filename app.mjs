import {EMAIL, SMARTPATH_URL, PROCEDURES_URL, TENURE_EMAIL, questions, outcomes, directoryIds, permissionLabels, resolvePath} from './data.mjs';

const $ = s => document.querySelector(s);
const esc = value => String(value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const arrow = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>';
const check = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m5 12 4 4L19 6"/></svg>';
let history = [];
try { history = JSON.parse(sessionStorage.getItem('wse-title-path-20261112') || '[]'); resolvePath(history); } catch { history = []; }
let current = resolvePath(history);
let toastTimer;
function save() { try {sessionStorage.setItem('wse-title-path-20261112', JSON.stringify(history));} catch {} }
function focusHeading() { requestAnimationFrame(() => $('#step-title')?.focus({preventScroll:true})); }
function notify(message) { $('#toast').textContent=message; $('#toast').classList.add('show'); clearTimeout(toastTimer); toastTimer=setTimeout(()=>$('#toast').classList.remove('show'),3500); }
function criteriaSection(rank) {
  return `<section class="criteria-block" aria-label="Criteria"><h3>Criteria</h3>${rank.criteria.map(text=>`<p>${esc(text)}</p>`).join('')}</section>`;
}
function sourceNote(rank) {
  return rank.sourceNote?`<div class="result-note"><span aria-hidden="true">i</span><p>${esc(rank.sourceNote)}</p></div>`:'';
}
function procedureList(steps) {
  if(steps.length===1) return `<p class="procedure-single">${esc(steps[0])}</p>`;
  return steps.length?`<ol class="procedure-list">${steps.map(text=>`<li>${esc(text)}</li>`).join('')}</ol>`:'';
}
function appointmentNextStep(rank, includeAlternative=false) {
  const resources=rank.resources?.length?`<div class="procedure-resources">${rank.resources.map(resource=>`<a href="${esc(resource.url)}" target="_blank" rel="noopener noreferrer">${esc(resource.label)} <span aria-hidden="true">↗</span></a>`).join('')}</div>`:'';
  const steps=rank.procedures.length?`<h4>Dossier and review</h4>${procedureList(rank.procedures)}`:'';
  const alternative=includeAlternative&&rank.alternativePathway?`<section class="alternate-pathway" aria-label="Incoming or outgoing tenure-track faculty"><h4>${esc(rank.alternativePathway.heading)}</h4>${rank.alternativePathway.criteria.map(text=>`<p>${esc(text)}</p>`).join('')}${procedureList(rank.alternativePathway.procedures)}</section>`:'';
  return `<section class="appointment-next-step" aria-label="Next steps"><h3>Next steps</h3><p>${esc(rank.nextStep).replaceAll('SmartPath', `<a href="${SMARTPATH_URL}" target="_blank" rel="noopener noreferrer">SmartPath</a>`)}</p>${resources}${steps}${sourceNote(rank)}${alternative}<p class="next-step-contact">Direct questions to: ${esc(rank.contactName)}<br><a href="mailto:${esc(rank.email)}">${esc(rank.email)}</a></p><a class="full-procedures-link" href="${PROCEDURES_URL}" target="_blank" rel="noopener noreferrer">View full policies and procedures <span aria-hidden="true">↗</span></a></section>`;
}
function permissionGrid(rank) {
  if(!rank.permissions) return `<h3 class="section-caption">Appointment guidance</h3><p class="dialog-detail">${esc(rank.detail)}</p>`;
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
    $('#decision-card').innerHTML=`<div class="card-topline"><span class="result-check">${check}</span><span>${current.kind==='title'?'Your recommendation':'Appointment guidance'}</span><span class="complete-label">Path complete</span></div><div class="result-body"><p class="eyebrow">${esc(current.group)}</p><h2 id="step-title" tabindex="-1">${esc(current.title)}</h2><p class="result-lead">${esc(current.recommendation || (current.kind==='title'?'Based on your answers, this title seems like the best fit.':'Review the criteria and next steps for this appointment.'))}</p>${criteriaSection(current)}${current.permissions?'<h3 class="section-caption">Privileges at a glance</h3>':''}${permissionGrid(current)}${current.permissions?`<p class="dialog-detail">${esc(current.detail)}</p>`:''}${appointmentNextStep(current)}<div class="result-tools"><button class="button primary" data-copy>Copy recommendation ${arrow}</button><button class="button secondary" data-print>Print / save PDF</button></div></div><div class="card-actions"><button class="back-button" data-back><span aria-hidden="true">←</span> Review previous answer</button><button class="reset-button" data-reset>Start a new decision <span aria-hidden="true">↺</span></button></div>`;
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
  const privileges=current.permissions?`\n\nPrivileges at a glance\n${current.permissions.map((value,i)=>`${permissionLabels[i]}: ${value}`).join('\n')}`:'';
  return `Whiting School of Engineering\nFaculty title recommendation\n\n${current.title}\n\nCriteria\n${current.criteria.join('\n')}${privileges}\n\n${current.detail}\n\nNext steps\n${current.nextStep}${current.nextStep.includes('SmartPath')?'\n'+SMARTPATH_URL:''}\n${current.procedures.map((text,i)=>(current.procedures.length>1?`${i+1}. `:'')+text).join('\n')}\n${current.resources.map(resource=>`${resource.label}: ${resource.url}`).join('\n')}${current.sourceNote?'\n'+current.sourceNote:''}\n\nDirect questions to: ${current.contactName} ${current.email}\nFull policies and procedures: ${PROCEDURES_URL}\n\nDecision path\n${history.map((item,i)=>`${i+1}. ${questions[item.id].title}\n   ${questions[item.id].options[item.choice].label}`).join('\n')}\n\nFor tenure track help, contact Sheri Green: ${TENURE_EMAIL}\nSource: Decision Tree for Choosing Titles (revised outline uploaded November 12, 2026).`;
}
async function copyRecommendation() {
  const content=summaryText();
  try { await navigator.clipboard.writeText(content); notify('Recommendation and decision path copied.'); }
  catch { const input=document.createElement('textarea');input.value=content;input.style.position='fixed';input.style.opacity='0';document.body.append(input);input.select();const copied=document.execCommand('copy');input.remove();notify(copied?'Recommendation and decision path copied.':'Use Print / save PDF to keep this recommendation.'); }
}
const ranks=directoryIds.map(id=>outcomes[id]);
for(const group of [...new Set(ranks.map(r=>r.group))]) {const option=document.createElement('option');option.value=group;option.textContent=group;$('#group-filter').append(option);}
function renderDirectory() {
  const search=$('#title-search').value.trim().toLowerCase();
  const group=$('#group-filter').value;
  const matching=ranks.filter(r=>(!group||r.group===group)&&`${r.title} ${r.group} ${r.criteria.join(' ')}`.toLowerCase().includes(search));
  $('#directory-count').textContent=`${matching.length} ${matching.length===1?'title':'titles'}`;
  $('#directory-list').innerHTML=matching.length?matching.map(r=>`<article class="directory-card" aria-labelledby="directory-title-${r.id}"><span class="directory-category">${esc(r.group)}</span><h3 id="directory-title-${r.id}">${esc(r.title)}</h3><h4 class="directory-criteria-heading">Criteria</h4>${r.criteria.map(text=>`<p class="directory-criteria">${esc(text)}</p>`).join('')}<button type="button" class="directory-review" data-rank="${r.id}" aria-label="View privileges and next steps for ${esc(r.title)}">View privileges ${arrow}</button></article>`).join(''):'<div class="no-results"><h3>No matching titles</h3><p>Try a different title or choose another appointment pathway.</p><button class="button secondary" id="clear-filters">Clear filters</button></div>';
  $('#directory-list').querySelectorAll('[data-rank]').forEach(button=>button.addEventListener('click',()=>openRank(Number(button.dataset.rank))));
  $('#clear-filters')?.addEventListener('click',()=>{$('#title-search').value='';$('#group-filter').value='';renderDirectory();$('#title-search').focus();});
}
function openRank(id) {
  const rank=outcomes[id];
  $('#dialog-content').innerHTML=`<p class="directory-category">${esc(rank.group)}</p><h2 id="dialog-title">${esc(rank.title)}</h2>${criteriaSection(rank)}<h3 class="section-caption">Privileges at a glance</h3>${permissionGrid(rank)}<p class="dialog-detail">${esc(rank.detail)}</p>${appointmentNextStep(rank,true)}`;
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
