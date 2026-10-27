export const EMAIL = 'wseacademicappta@jhu.edu';
export const CONTACT_NAME = 'Kirstin Brooks-Robinson';
export const APPOINTMENT_NEXT_STEP = 'Start an appointment request in SmartPath.';
const yesNo = (yes, no) => [{label:'Yes', next:yes}, {label:'No', next:no}];
const question = (id, section, title, yes, no, short, context) => ({id, section, title, options:yesNo(yes,no), short, context});
export const questions = {
  1: question(1,'Appointment profile','Are they visiting from another institution for a limited time period?',6,2,'Visiting from another institution'),
  2: question(2,'Appointment profile','Are they of the caliber of members of the National Academy of Sciences or National Academy of Engineering?',3,4,'National Academy caliber'),
  4: question(4,'Appointment profile','Is this a courtesy appointment without pay?',5,11,'Courtesy appointment without pay'),
  6: {id:6, section:'Visiting appointment', title:'What faculty title do they hold at their home institution?', short:'Title at home institution', options:[{label:'Professor',next:7},{label:'Associate Professor',next:8},{label:'Assistant Professor',next:9},{label:'None of these titles',next:10}]},
  11: question(11,'Professional experience','Is this person coming from industry with a strong and positive external reputation and leadership experience in their current/prior professional career that has given them regional, national, or international stature?',12,13,'Industry experience, external reputation and leadership'),
  13: question(13,'Primary responsibility','Will the primary responsibility be teaching?',14,29,'Teaching is the primary responsibility'),
  14: question(14,'Teaching appointment','Will the FTE be 75% or higher?',15,25,'FTE of 75% or higher','FTE means full-time equivalent.'),
  15: question(15,'Teaching appointment','Will their appointment be one year or longer?',17,25,'Appointment of at least one year'),
  17: question(17,'Teaching Professor track','Do they have at least 10 years of excellent independent teaching experience and impact outside of their home institution?',18,19,'10+ years and impact outside home institution','The Teaching Professor track seems like the best fit. Select a rank based on experience and impact.'),
  19: question(19,'Teaching Professor track','Do they have at least 5 years of excellent independent teaching experience and impact in the home institution or beyond?',20,21,'5+ years and impact within or beyond home institution'),
  21: question(21,'Teaching experience','Do they have some teaching experience or the equivalent?',22,23,'Some teaching experience or equivalent'),
  25: question(25,'Lecturer track','Have they taught with excellence for a period of not less than three years, or held a position at another institution with relative responsibility and seniority?',26,27,'3+ years of excellent teaching or comparable seniority','The Lecturer track seems like the best fit. Select a rank based on teaching experience.'),
  27: question(27,'Lecturer track','Are they qualified in the relevant field and will they be able to demonstrate experience in effective teaching in that field?',28,23,'Field qualifications and effective teaching experience'),
  29: question(29,'Primary responsibility','Will the primary responsibility be research?',30,43,'Research is the primary responsibility'),
  30: question(30,'Research appointment','Are they expected to have an independent research program in which they are a named investigator now or in the near future?',32,38,'Independent research program as a named investigator'),
  32: question(32,'Research Professor track','Have they demonstrated leadership and significant impact in their field and/or do they hold a strong professional reputation beyond the university?',33,34,'Leadership, significant impact or reputation beyond the university','The Research Professor track seems like the best fit. Select a rank based on research impact.'),
  34: question(34,'Research Professor track','Have they built an externally recognized research program with a demonstrable impact in their field?',35,36,'Externally recognized research program with impact'),
  38: question(38,'Research Scientist/Engineer track','Do they have a high level of experience, responsibility, and proficiency in the discharge of duties, independence in the conduct of work, ability to manage a substantial portion of a research project, and ability to supervise the work of less senior members of the research team?',39,40,'High experience, independence and research team leadership','The Research Scientist/Engineer track seems like the best fit. Consider the level of research responsibility.'),
  40: question(40,'Research Scientist/Engineer track','Do they have an intermediate level of experience, responsibility, and proficiency in the discharge of duties, independence in the conduct of work, ability to contribute to a substantial portion of a research project, and ability to supervise the work of less senior members of the research team?',41,42,'Intermediate experience, independence and team supervision')
};
const unrestricted = ['May supervise','May supervise','May supervise','May serve as PI'];
const prohibited = ['Not permitted','Not permitted','Not permitted','Not permitted'];
const visiting = ['May co-advise','Co-advise · case by case','Co-supervise · case by case','Not permitted'];
const teaching = ['May supervise','May co-advise','May co-supervise','Teaching or research grants'];
const lecturer = ['Co-advise · case by case','Not permitted','Not permitted','Not permitted'];
const engineer = ['Co-advise · case by case','Co-advise · case by case','May supervise','May serve as PI'];
const rank = (id,title,group,permissions,detail,note='') => ({id,title,group,permissions,detail,note,nextStep:APPOINTMENT_NEXT_STEP,contactName:CONTACT_NAME});
const visitingDetail = 'May co-advise master’s theses. May co-advise doctoral theses and co-supervise postdoctoral fellows on a case-by-case basis. Cannot serve as principal investigators on grants.';
const teachingDetail = 'May supervise master’s theses, co-advise doctoral theses, co-supervise postdoctoral fellows, and serve as principal investigator on teaching or research grants.';
const lecturerDetail = 'May co-advise master’s theses on a case-by-case basis. Cannot supervise doctoral theses, supervise postdoctoral fellows, or serve as principal investigator on grants.';
const researchDetail = 'May supervise master’s and doctoral theses, supervise postdoctoral fellows, and serve as principal investigator on grants.';
const researchNote = 'Teaching may be undertaken when appropriate, but teaching should not be a primary source of support for anyone on the research professor track.';
const engineerDetail = 'May co-advise master’s or doctoral theses on a case-by-case basis. May supervise postdoctoral fellows and serve as principal investigators on grants.';
const engineerNote = 'May teach, but teaching should not be a primary source of support for anyone on the research scientist/engineer track.';
export const outcomes = {
  3:rank(3,'Homewood Professor','Distinguished appointment',unrestricted,'May supervise master’s or doctoral theses and postdoctoral fellows. May serve as principal investigators on grants.'),
  5:rank(5,'Whiting Fellow','Courtesy appointment',prohibited,'Cannot supervise master’s or doctoral theses or supervise postdoctoral fellows. Cannot serve as principal investigators on grants.'),
  7:rank(7,'Visiting Professor','Visiting appointment',visiting,visitingDetail),
  8:rank(8,'Visiting Associate Professor','Visiting appointment',visiting,visitingDetail),
  9:rank(9,'Visiting Assistant Professor','Visiting appointment',visiting,visitingDetail),
  10:rank(10,'Visiting Scholar','Visiting appointment',prohibited,'Cannot supervise master’s or doctoral theses or supervise postdoctoral fellows. Cannot serve as principal investigators on grants.'),
  12:rank(12,'Professor of the Practice','Professor of the Practice',['May supervise','Supervise case by case','Supervise · case by case','May serve as PI'],'Professors of the Practice may supervise master’s and doctoral theses and serve as principal investigator on grants. They may advise doctoral students and supervise postdoctoral fellows on a case-by-case basis.'),
  18:rank(18,'Full Teaching Professor','Teaching Professor track',teaching,teachingDetail),
  20:rank(20,'Associate Teaching Professor','Teaching Professor track',teaching,teachingDetail),
  22:rank(22,'Assistant Teaching Professor','Teaching Professor track',teaching,teachingDetail),
  23:{id:23,title:'Connect with Faculty Affairs',group:'Teaching qualifications',contact:true,detail:'They may not be qualified for a teaching position. Please contact the Office of Faculty Affairs to discuss the appointment.'},
  26:rank(26,'Senior Lecturer','Lecturer track',lecturer,lecturerDetail),
  28:rank(28,'Lecturer','Lecturer track',lecturer,lecturerDetail),
  33:rank(33,'Research Professor','Research Professor track',unrestricted,researchDetail,researchNote),
  35:rank(35,'Associate Research Professor','Research Professor track',unrestricted,researchDetail,researchNote),
  36:rank(36,'Assistant Research Professor','Research Professor track',unrestricted,researchDetail,researchNote),
  39:rank(39,'Senior Research Engineer/Scientist','Research Scientist/Engineer track',engineer,engineerDetail,engineerNote),
  41:rank(41,'Associate Research Engineer/Scientist','Research Scientist/Engineer track',engineer,engineerDetail,engineerNote),
  42:rank(42,'Assistant Research Engineer/Scientist','Research Scientist/Engineer track',engineer,engineerDetail,engineerNote),
  43:{id:43,title:'Connect with Faculty Affairs',group:'Appointment review',contact:true,detail:'If their primary responsibilities aren’t teaching or research, this may not be a faculty position. Contact the Office of Faculty Affairs to discuss the appropriate appointment.'}
};
export const permissionLabels = ['Master’s theses','Doctoral theses','Postdoctoral fellows','Principal investigator'];
export function resolvePath(history) {
  let id = 1;
  for (const item of history) {
    if (id !== item.id || !questions[id]?.options[item.choice]) throw new Error('Invalid decision path');
    id = questions[id].options[item.choice].next;
  }
  return questions[id] || outcomes[id];
}
