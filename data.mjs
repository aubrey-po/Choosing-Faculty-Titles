// Generated from the revised Word outline updated November 24, 2026.
export const EMAIL = 'wseacademicappta@jhu.edu';
export const CONTACT_NAME = 'Office of Faculty Affairs';
export const APPOINTMENT_NEXT_STEP = 'Start an appointment request in SmartPath.';
export const SMARTPATH_URL = 'https://engineering-jhu.mntnpass.com/mps';
export const PROCEDURES_URL = 'https://engineering.jhu.edu/aptc/policies-and-procedures/';
export const TENURE_EMAIL = 'wsetenureactions@jh.edu';
export const questions = {
  "1": {
    "id": 1,
    "section": "Incoming or outgoing faculty",
    "title": "Is this a temporary appointment for an incoming or outgoing tenure track faculty member?",
    "short": "Temporary incoming/outgoing tenure-track appointment",
    "options": [
      {
        "label": "Yes — Professor",
        "next": 2
      },
      {
        "label": "Yes — Associate Professor",
        "next": 3
      },
      {
        "label": "Yes — Assistant Professor",
        "next": 4
      },
      {
        "label": "No",
        "next": 5
      }
    ],
    "context": "For a temporary appointment for an incoming or outgoing tenure-track faculty member, choose the rank of their tenure-track appointment."
  },
  "5": {
    "id": 5,
    "section": "Visiting and courtesy appointments",
    "title": "Is this a visiting or courtesy appointment?",
    "short": "Visiting or courtesy appointment",
    "options": [
      {
        "label": "Yes",
        "next": 6
      },
      {
        "label": "No",
        "next": 20
      }
    ]
  },
  "6": {
    "id": 6,
    "section": "Visiting and courtesy appointments",
    "title": "Do they already have a primary appointment at JHU?",
    "short": "Primary appointment at JHU",
    "options": [
      {
        "label": "Yes",
        "next": 7
      },
      {
        "label": "No",
        "next": 10
      }
    ]
  },
  "7": {
    "id": 7,
    "section": "JHU secondary appointment",
    "title": "Is their current primary appointment in APL or HLTCOE?",
    "short": "Primary appointment in APL or HLTCOE",
    "options": [
      {
        "label": "Yes",
        "next": 8
      },
      {
        "label": "No",
        "next": 9
      }
    ]
  },
  "10": {
    "id": 10,
    "section": "Visiting appointment",
    "title": "Will this be a visiting appointment?",
    "short": "Visiting appointment",
    "options": [
      {
        "label": "Yes",
        "next": 11
      },
      {
        "label": "No",
        "next": 19
      }
    ]
  },
  "11": {
    "id": 11,
    "section": "Visiting appointment",
    "title": "Do they hold the title Professor, Associate Professor, or Assistant Professor (or the equivalent international rank) at another institution?",
    "short": "Professorial title at home institution",
    "options": [
      {
        "label": "Professor",
        "next": 12
      },
      {
        "label": "Associate Professor",
        "next": 13
      },
      {
        "label": "Assistant Professor",
        "next": 14
      },
      {
        "label": "None of these titles",
        "next": 15
      }
    ],
    "context": "Include a formally equivalent international rank."
  },
  "15": {
    "id": 15,
    "section": "Visiting appointment",
    "title": "Will the role in WSE be a student or a postdoc?",
    "short": "WSE role is a student or postdoc",
    "options": [
      {
        "label": "Yes",
        "next": 16
      },
      {
        "label": "No",
        "next": 17
      }
    ]
  },
  "17": {
    "id": 17,
    "section": "Visiting appointment",
    "title": "Do they have an engineering degree and a primary appointment elsewhere?",
    "short": "Engineering degree and primary appointment elsewhere",
    "options": [
      {
        "label": "Yes",
        "next": 18
      },
      {
        "label": "No",
        "next": 45
      }
    ]
  },
  "20": {
    "id": 20,
    "section": "Appointment profile",
    "title": "Choose the best fit below:",
    "short": "Primary appointment activities or qualifications",
    "options": [
      {
        "label": "The faculty member will be largely engaged in educational activities, i.e., at least 50% of their JHU compensation will be for teaching activities",
        "next": 22,
        "short": "Teaching activities (at least 50% of compensation)"
      },
      {
        "label": "The faculty member will be largely engaged in research activities, i.e., at least 50% of their JHU compensation will be for research activities",
        "next": 33,
        "short": "Research activities (at least 50% of compensation)"
      },
      {
        "label": "The faculty member has a strong external reputation and leadership experience in their current/prior professional careers in non-academic settings",
        "next": 21,
        "short": "Non-academic reputation and leadership"
      },
      {
        "label": "The faculty member is of the caliber of members of the National Academic of Sciences or National Academy of Engineering",
        "next": 44,
        "short": "National Academy caliber"
      },
      {
        "label": "None of these",
        "next": 45,
        "short": "None of these"
      }
    ],
    "optionLayout": "criteria"
  },
  "22": {
    "id": 22,
    "section": "Teaching appointment",
    "title": "Will they be compensated at 75% or more of their FTE?",
    "short": "Compensation at 75% or more of FTE",
    "options": [
      {
        "label": "Yes",
        "next": 23
      },
      {
        "label": "No",
        "next": 30
      }
    ],
    "context": "FTE means full-time equivalent."
  },
  "23": {
    "id": 23,
    "section": "Teaching appointment",
    "title": "Is this a multi-year appointment?",
    "short": "Multi-year appointment",
    "options": [
      {
        "label": "Yes",
        "next": 25
      },
      {
        "label": "No",
        "next": 30
      }
    ]
  },
  "25": {
    "id": 25,
    "section": "Teaching Professor track",
    "title": "Choose the best fit:",
    "short": "Teaching experience and impact",
    "options": [
      {
        "label": "The faculty member has at least 10 years of excellent independent teaching experience and impact outside of their home institution",
        "next": 26,
        "short": "10+ years and impact outside home institution"
      },
      {
        "label": "The faculty member has at least 5 years of excellent independent teaching experience and impact in the home institution or beyond",
        "next": 27,
        "short": "5+ years and impact within or beyond home institution"
      },
      {
        "label": "The faculty member has some teaching experience or the equivalent",
        "next": 28,
        "short": "Some teaching experience or equivalent"
      },
      {
        "label": "None of these",
        "next": 45,
        "short": "None of these"
      }
    ],
    "optionLayout": "criteria",
    "context": "The Teaching Professor track seems like the best fit."
  },
  "30": {
    "id": 30,
    "section": "Lecturer track",
    "title": "Choose the best fit:",
    "short": "Teaching qualifications and experience",
    "options": [
      {
        "label": "The faculty member has taught with excellence for a period of not less than three years, or held a position at another institution with relative responsibility and seniority",
        "next": 31,
        "short": "3+ years of excellent teaching or comparable seniority"
      },
      {
        "label": "The faculty member is qualified in the relevant field and will be able to demonstrate experience in effective teaching in that field",
        "next": 32,
        "short": "Field qualifications and effective teaching experience"
      },
      {
        "label": "None of these",
        "next": 45,
        "short": "None of these"
      }
    ],
    "optionLayout": "criteria",
    "context": "The Lecturer track seems like the best fit."
  },
  "33": {
    "id": 33,
    "section": "Research appointment",
    "title": "Are they expected to have an independent research program in which they are named investigator now or in the near future?",
    "short": "Independent research program as a named investigator",
    "options": [
      {
        "label": "Yes",
        "next": 35
      },
      {
        "label": "No",
        "next": 40
      }
    ]
  },
  "35": {
    "id": 35,
    "section": "Research Professor track",
    "title": "Choose the best fit:",
    "short": "Research impact and independence",
    "options": [
      {
        "label": "The candidate has demonstrated leadership and significant impact in their field and/or holds a strong professional reputation beyond the university",
        "next": 36,
        "short": "Leadership, field impact or reputation beyond the university"
      },
      {
        "label": "The candidate has built an externally recognized research program with a demonstrable impact in their field",
        "next": 37,
        "short": "Externally recognized research program with impact"
      },
      {
        "label": "The candidate has demonstrated strong research potential as they begin to establish an independent research program",
        "next": 38,
        "short": "Strong research potential and an emerging independent program"
      },
      {
        "label": "None of these",
        "next": 45,
        "short": "None of these"
      }
    ],
    "optionLayout": "criteria",
    "context": "The Research Professor track seems like the best fit."
  },
  "40": {
    "id": 40,
    "section": "Research Scientist/Engineer track",
    "title": "Choose the best fit:",
    "short": "Research experience and responsibility",
    "options": [
      {
        "label": "The candidate has a high level of experience, responsibility, and proficiency in the discharge of duties, independence in the conduct of work, ability to manage a substantial portion of a research project, and ability to supervise the work of less senior members of the research team",
        "next": 41,
        "short": "High experience, independence and research team leadership"
      },
      {
        "label": "The candidate has an intermediate level of experience, responsibility, and proficiency in the discharge of duties, independence in the conduct of work, ability to contribute to a substantial portion of a research project, and ability to supervise the work of less senior members of the research team",
        "next": 42,
        "short": "Intermediate experience, independence and team supervision"
      },
      {
        "label": "The candidate has entry-level skills concomitant with the needs of the research team they will work with",
        "next": 43,
        "short": "Entry-level skills meeting the research team’s needs"
      },
      {
        "label": "None of these",
        "next": 45,
        "short": "None of these"
      }
    ],
    "optionLayout": "criteria",
    "context": "The Research Scientist/Engineer track seems like the best fit."
  }
};
export const outcomes = {
  "2": {
    "id": 2,
    "title": "Research Professor",
    "group": "Temporary incoming/outgoing tenure-track appointment",
    "kind": "title",
    "criteria": [
      "This is a temporary appointment for an incoming or outgoing tenure-track faculty member at the Professor rank."
    ],
    "permissions": [
      "May supervise",
      "May supervise",
      "May supervise",
      "May serve as PI"
    ],
    "detail": "",
    "privilegeNotes": [],
    "procedures": [
      "The dossier includes a department request and CV. No faculty vote is required. Please note in SmartPath that this appointment is for a tenure track faculty member."
    ],
    "resources": [],
    "nextStep": "Start an appointment request in SmartPath.",
    "contactName": "Office of Faculty Affairs",
    "email": "wseacademicappta@jhu.edu",
    "directory": false,
    "recommendation": "This is the correct title for this appointment."
  },
  "3": {
    "id": 3,
    "title": "Associate Research Professor",
    "group": "Temporary incoming/outgoing tenure-track appointment",
    "kind": "title",
    "criteria": [
      "This is a temporary appointment for an incoming or outgoing tenure-track faculty member at the Associate Professor rank."
    ],
    "permissions": [
      "May supervise",
      "May supervise",
      "May supervise",
      "May serve as PI"
    ],
    "detail": "",
    "privilegeNotes": [],
    "procedures": [
      "The dossier includes a department request and CV. No faculty vote is required. Please note in SmartPath that this appointment is for a tenure track faculty member."
    ],
    "resources": [],
    "nextStep": "Start an appointment request in SmartPath.",
    "contactName": "Office of Faculty Affairs",
    "email": "wseacademicappta@jhu.edu",
    "directory": false,
    "recommendation": "This is the correct title for this appointment."
  },
  "4": {
    "id": 4,
    "title": "Assistant Research Professor",
    "group": "Temporary incoming/outgoing tenure-track appointment",
    "kind": "title",
    "criteria": [
      "This is a temporary appointment for an incoming or outgoing tenure-track faculty member at the Assistant Professor rank."
    ],
    "permissions": [
      "May supervise",
      "May supervise",
      "May supervise",
      "May serve as PI"
    ],
    "detail": "",
    "privilegeNotes": [],
    "procedures": [
      "The dossier includes a department request and CV. No faculty vote is required. Please note in SmartPath that this appointment is for a tenure track faculty member."
    ],
    "resources": [],
    "nextStep": "Start an appointment request in SmartPath.",
    "contactName": "Office of Faculty Affairs",
    "email": "wseacademicappta@jhu.edu",
    "directory": false,
    "recommendation": "This is the correct title for this appointment."
  },
  "8": {
    "id": 8,
    "title": "JHU secondary appointment for APL or HLTCOE scientists",
    "group": "JHU secondary appointment",
    "kind": "guidance",
    "guidanceOnly": true,
    "criteria": [
      "The candidate has a primary JHU appointment in APL or HLTCOE."
    ],
    "detail": "APL and HLTCOE scientists are eligible for secondary appointments on the research professor track. If the department/institute wishes to grant a secondary appointment on the Research Professor track: Review the criteria, dossier requirements, and submission procedures for the appropriate title in the “Title directory” tab. If the secondary appointment title is the same as the primary appointment title: The department/institute manages secondary appointments directly but must notify the Office of Faculty Affairs of the secondary appointment by sending an email to wseacademicappta@jhu.edu",
    "guidanceParagraphs": [
      "APL and HLTCOE scientists are eligible for secondary appointments on the research professor track. If the department/institute wishes to grant a secondary appointment on the Research Professor track: Review the criteria, dossier requirements, and submission procedures for the appropriate title in the “Title directory” tab.",
      "If the secondary appointment title is the same as the primary appointment title: The department/institute manages secondary appointments directly but must notify the Office of Faculty Affairs of the secondary appointment by sending an email to wseacademicappta@jhu.edu"
    ],
    "procedures": [],
    "resources": [],
    "nextStep": "Review the appropriate research professor title in the Title directory, or notify Faculty Affairs of a secondary appointment matching the primary title.",
    "actions": [
      {
        "label": "Open Title directory",
        "url": "#directory"
      },
      {
        "label": "email wseacademicappta@jhu.edu",
        "url": "mailto:wseacademicappta@jhu.edu"
      }
    ],
    "contactName": "Office of Faculty Affairs",
    "email": "wseacademicappta@jhu.edu"
  },
  "9": {
    "id": 9,
    "title": "Notify Faculty Affairs of the secondary appointment",
    "group": "JHU secondary appointment",
    "kind": "guidance",
    "guidanceOnly": true,
    "criteria": [
      "The candidate has a primary JHU appointment outside APL or HLTCOE. The secondary appointment title must match the primary title."
    ],
    "detail": "The secondary appointment title must be the same as the primary appointment title: The department/institute manages secondary appointments directly but must notify the Office of Faculty Affairs of the secondary appointment by sending an email to wseacademicappta@jhu.edu",
    "procedures": [],
    "resources": [],
    "nextStep": "The department/institute manages the secondary appointment directly and must notify Faculty Affairs by email.",
    "actionLabel": "email wseacademicappta@jhu.edu",
    "actionUrl": "mailto:wseacademicappta@jhu.edu",
    "contactName": "Office of Faculty Affairs",
    "email": "wseacademicappta@jhu.edu"
  },
  "12": {
    "id": 12,
    "title": "Visiting Professor",
    "group": "Visiting appointment",
    "kind": "title",
    "criteria": [
      "This title is conferred upon full-time or part-time faculty who hold an active full-time or emeritus faculty appointment as professor (or a formally equivalent title) at an outside institution, and are associated with the institution in residence for a limited period. The visiting title must be at the same level of seniority as the title at their home institution."
    ],
    "permissions": [
      "May co-advise",
      "Co-advise · case by case",
      "Co-supervise · case by case",
      "Not permitted"
    ],
    "detail": "Visiting Professors may co-advise master’s theses. They may co-advise doctoral theses and co-supervise postdoctoral fellows on a case-by-case basis. Visiting professors cannot serve as principal investigators on grants.",
    "privilegeNotes": [],
    "procedures": [
      "The dossier includes a department request and CV.",
      "All tenured faculty must vote.\n\n*If there are fewer than three faculty in the unit at the required rank(s), a standing committee including faculty from other units may vote. A standing A&P committee should include at least three faculty members. When possible, the standing A&P committee should include at least one faculty member from the candidate’s unit at or above the aspirational rank within the track. If there are no willing faculty from the candidate’s unit at or above the aspirational rank within the track, the committee may include a faculty member from the unit at the next highest rank within the track",
      "If the faculty vote in favor of the appointment, the Department or Unit Head/Director writes a letter to the Dean, including: 1) a tally of the department/unit’s vote (e.g., 12 in favor and none opposed); 2) a statement on professionalism; and 3) a summary of the candidate’s qualifications. Faculty who oppose the majority decision must jointly write and sign a minority memo, describing the grounds for the minority opinion, to accompany the department/unit’s letter."
    ],
    "resources": [],
    "nextStep": "Start an appointment request in SmartPath.",
    "contactName": "Office of Faculty Affairs",
    "email": "wseacademicappta@jhu.edu",
    "directory": true
  },
  "13": {
    "id": 13,
    "title": "Visiting Associate Professor",
    "group": "Visiting appointment",
    "kind": "title",
    "criteria": [
      "This title is conferred upon full-time or part-time faculty who hold an active full-time or emeritus faculty appointment as associate professor (or a formally equivalent title) at an outside institution, and are associated with the institution in residence for a limited period. The visiting title must be at the same level of seniority as the title at their home institution."
    ],
    "permissions": [
      "May co-advise",
      "Co-advise · case by case",
      "Co-supervise · case by case",
      "Not permitted"
    ],
    "detail": "Visiting Associate Professors may co-advise master’s theses. They may co-advise doctoral theses and co-supervise postdoctoral fellows on a case-by-case basis. Visiting professors cannot serve as principal investigators on grants.",
    "privilegeNotes": [],
    "procedures": [
      "The dossier includes a department request and CV.",
      "All tenured faculty must vote.\n\n*If there are fewer than three faculty in the unit at the required rank(s), a standing committee including faculty from other units may vote. A standing A&P committee should include at least three faculty members. When possible, the standing A&P committee should include at least one faculty member from the candidate’s unit at or above the aspirational rank within the track. If there are no willing faculty from the candidate’s unit at or above the aspirational rank within the track, the committee may include a faculty member from the unit at the next highest rank within the track",
      "If the faculty vote in favor of the appointment, the Department or Unit Head/Director writes a letter to the Dean, including: 1) a tally of the department/unit’s vote (e.g., 12 in favor and none opposed); 2) a statement on professionalism; and 3) a summary of the candidate’s qualifications. Faculty who oppose the majority decision must jointly write and sign a minority memo, describing the grounds for the minority opinion, to accompany the department/unit’s letter."
    ],
    "resources": [],
    "nextStep": "Start an appointment request in SmartPath.",
    "contactName": "Office of Faculty Affairs",
    "email": "wseacademicappta@jhu.edu",
    "directory": true
  },
  "14": {
    "id": 14,
    "title": "Visiting Assistant Professor",
    "group": "Visiting appointment",
    "kind": "title",
    "criteria": [
      "This title is conferred upon full-time or part-time faculty who hold an active full-time or emeritus faculty appointment as assistant professor (or a formally equivalent title) at an outside institution, and are associated with the institution in residence for a limited period. The visiting title must be at the same level of seniority as the title at their home institution."
    ],
    "permissions": [
      "May co-advise",
      "Co-advise · case by case",
      "Co-supervise · case by case",
      "Not permitted"
    ],
    "detail": "Visiting Assistant Professors may co-advise master’s theses. They may co-advise doctoral theses and co-supervise postdoctoral fellows on a case-by-case basis. Visiting professors cannot serve as principal investigators on grants.",
    "privilegeNotes": [],
    "procedures": [
      "The dossier includes a department request and CV.",
      "All tenured faculty must vote.\n\n*If there are fewer than three faculty in the unit at the required rank(s), a standing committee including faculty from other units may vote. A standing A&P committee should include at least three faculty members. When possible, the standing A&P committee should include at least one faculty member from the candidate’s unit at or above the aspirational rank within the track. If there are no willing faculty from the candidate’s unit at or above the aspirational rank within the track, the committee may include a faculty member from the unit at the next highest rank within the track",
      "If the faculty vote in favor of the appointment, the Department or Unit Head/Director writes a letter to the Dean, including: 1) a tally of the department/unit’s vote (e.g., 12 in favor and none opposed); 2) a statement on professionalism; and 3) a summary of the candidate’s qualifications. Faculty who oppose the majority decision must jointly write and sign a minority memo, describing the grounds for the minority opinion, to accompany the department/unit’s letter."
    ],
    "resources": [],
    "nextStep": "Start an appointment request in SmartPath.",
    "contactName": "Office of Faculty Affairs",
    "email": "wseacademicappta@jhu.edu",
    "directory": true
  },
  "16": {
    "id": 16,
    "title": "Contact GELL",
    "group": "Student or postdoctoral appointment",
    "kind": "contact",
    "contactOnly": true,
    "criteria": [
      "A visiting appointment is under consideration and the proposed WSE role is a student or postdoc."
    ],
    "detail": "Contact GELL at wsepostdocappts@jhu.edu",
    "procedures": [],
    "resources": [],
    "nextStep": "Contact GELL for the appropriate student or postdoctoral appointment process.",
    "contactName": "GELL",
    "email": "wsepostdocappts@jhu.edu"
  },
  "18": {
    "id": 18,
    "title": "Visiting Scholar",
    "group": "Visiting appointment",
    "kind": "title",
    "criteria": [
      "This title is conferred upon full-time or part-time faculty who are engaged in scholarly work on campus for a limited period."
    ],
    "permissions": [
      "Not permitted",
      "Not permitted",
      "Not permitted",
      "Not permitted"
    ],
    "detail": "Visiting scholars cannot supervise master’s or doctoral theses or supervise postdoctoral fellows. They cannot serve as principal investigators on grants.",
    "privilegeNotes": [],
    "procedures": [
      "The dossier includes a department request and CV. No faculty vote is required.",
      "The Department or Unit Head/Director writes a letter to the Dean, including: 1) a statement on professionalism; and 2) a summary of the candidate’s qualifications."
    ],
    "resources": [],
    "nextStep": "Start an appointment request in SmartPath.",
    "contactName": "Office of Faculty Affairs",
    "email": "wseacademicappta@jhu.edu",
    "directory": true
  },
  "19": {
    "id": 19,
    "title": "Whiting Fellow",
    "group": "Courtesy appointment",
    "kind": "title",
    "criteria": [
      "This title is a courtesy title conferred upon non-JHU affiliates with appropriate qualifications and with whom a department wishes to maintain scholarly contact by participating in colloquia, research discussions, etc."
    ],
    "permissions": [
      "Not permitted",
      "Not permitted",
      "Not permitted",
      "Not permitted"
    ],
    "detail": "Whiting Fellows cannot supervise master’s or doctoral theses or supervise postdoctoral fellows. They cannot serve as principal investigators on grants.",
    "privilegeNotes": [],
    "procedures": [
      "The dossier includes a department request and CV. No faculty vote is required.",
      "The Department or Unit Head/Director writes a letter to the Dean, including: 1) a statement on professionalism; and 2) a summary of the candidate’s qualifications."
    ],
    "resources": [],
    "nextStep": "Start an appointment request in SmartPath.",
    "contactName": "Office of Faculty Affairs",
    "email": "wseacademicappta@jhu.edu",
    "directory": true
  },
  "21": {
    "id": 21,
    "title": "Professor of the Practice",
    "group": "Professor of the Practice",
    "kind": "title",
    "criteria": [
      "The title of professor of the practice is conferred upon full-time or part-time faculty who have a strong and positive external reputation and leadership experience in their current/prior professional careers in non-academic settings that have given them regional, national, or international stature. Teaching experience at the college/university level is desirable but not required."
    ],
    "permissions": [
      "May supervise",
      "Supervise case by case",
      "Supervise · case by case",
      "May serve as PI"
    ],
    "detail": "Professors of the practice may supervise master’s and doctoral theses and serve as principal investigator on grants. They may advise doctoral students and supervise postdoctoral fellows on a case-by-case basis.",
    "privilegeNotes": [],
    "procedures": [
      "The Department or Unit Head/Director solicits enough referees, using the template provided by the APT Council, to obtain a minimum of three external evaluations. These evaluators should be external to the candidate’s department/unit and must have sufficient expertise to judge the candidate in a rigorous, fair, and impartial way. Academic referees should generally be individuals based at leading departments or institutions, or from equivalent leadership positions in industry or government when appropriate.",
      "All full-time professorial track faculty at the full professor rank are required to vote.\n\n*If there are fewer than three faculty in the unit at the required rank(s), a standing committee including faculty from other units may vote. A standing A&P committee should include at least three faculty members. When possible, the standing A&P committee should include at least one faculty member from the candidate’s unit at or above the aspirational rank within the track. If there are no willing faculty from the candidate’s unit at or above the aspirational rank within the track, the committee may include a faculty member from the unit at the next highest rank within the track",
      "If the faculty vote in favor of the appointment, the Department or Unit Head/Director writes a letter to the Dean, including: 1) a tally of the department/unit’s vote (e.g., 12 in favor and none opposed); 2) a statement on professionalism; 3) a summary of referee feedback; and 4) a summary of the candidate’s qualifications. Faculty who oppose the majority decision must jointly write and sign a minority memo, describing the grounds for the minority opinion, to accompany the department/unit’s letter."
    ],
    "resources": [
      {
        "label": "Dossier checklist",
        "url": "https://engineering.jhu.edu/aptc/wp-content/uploads/2026/09/Professor-of-the-Practice-Dossier-Checklist.pdf"
      },
      {
        "label": "Letter to referees",
        "url": "https://engineering.jhu.edu/aptc/wp-content/uploads/2026/10/Letter-to-Referees_Appointment-as-Professor-of-the-Practice-2.docx"
      }
    ],
    "nextStep": "Start an appointment request in SmartPath.",
    "contactName": "Office of Faculty Affairs",
    "email": "wseacademicappta@jhu.edu",
    "directory": true
  },
  "26": {
    "id": 26,
    "title": "Full Teaching Professor",
    "group": "Teaching Professor track",
    "kind": "title",
    "criteria": [
      "The title of teaching professor is conferred upon full-time faculty who, in addition to meeting the qualifications of the associate teaching professor rank, have achieved recognition and impact beyond their home institution. Full teaching professors typically have at least 10 years of excellent independent teaching experience."
    ],
    "permissions": [
      "May supervise",
      "May co-advise",
      "May co-supervise",
      "Teaching or research grants"
    ],
    "detail": "Full Teaching Professors may supervise master’s theses, co-advise doctoral theses, co-supervise postdoctoral fellows, and serve as principal investigator on teaching or research grants.",
    "privilegeNotes": [],
    "procedures": [
      "The Department or Unit Head/Director solicits enough referees, using the template provided by the APT Council, to obtain a minimum of four external evaluations. These evaluators should be external to the candidate’s department/unit and must have sufficient expertise to judge the candidate in a rigorous, fair, and impartial way. Academic referees should generally be individuals based at leading departments or institutions, or from equivalent leadership positions in industry or government when appropriate.",
      "All full-time professorial track faculty at the full professor rank are required to vote.\n\n*If there are fewer than three faculty in the unit at the required rank(s), a standing committee including faculty from other units may vote. A standing A&P committee should include at least three faculty members. When possible, the standing A&P committee should include at least one faculty member from the candidate’s unit at or above the aspirational rank within the track. If there are no willing faculty from the candidate’s unit at or above the aspirational rank within the track, the committee may include a faculty member from the unit at the next highest rank within the track",
      "If the faculty vote in favor of the appointment, the Department or Unit Head/Director writes a letter to the Dean, including: 1) a tally of the department/unit’s vote (e.g., 12 in favor and none opposed); 2) a statement on professionalism; 3) a summary of referee feedback; and 4) a summary of the candidate’s qualifications. Faculty who oppose the majority decision must jointly write and sign a minority memo, describing the grounds for the minority opinion, to accompany the department/unit’s letter."
    ],
    "resources": [
      {
        "label": "Dossier checklist",
        "url": "https://engineering.jhu.edu/aptc/wp-content/uploads/2026/09/Teaching-Professor-Dossier-Checklist.pdf"
      },
      {
        "label": "Letter to referees",
        "url": "https://engineering.jhu.edu/aptc/wp-content/uploads/2026/10/Letter-to-Referees_Appointment-as-Teaching-Professor.docx"
      }
    ],
    "nextStep": "Start an appointment request in SmartPath.",
    "contactName": "Office of Faculty Affairs",
    "email": "wseacademicappta@jhu.edu",
    "directory": true
  },
  "27": {
    "id": 27,
    "title": "Associate Teaching Professor",
    "group": "Teaching Professor track",
    "kind": "title",
    "criteria": [
      "The title of associate teaching professor is conferred upon full-time faculty who have demonstrated sustained excellence in teaching, mentoring, and educational leadership within a university, together with a clear trajectory of continued growth. Candidates typically have at least five years of excellent independent teaching experience."
    ],
    "permissions": [
      "May supervise",
      "May co-advise",
      "May co-supervise",
      "Teaching or research grants"
    ],
    "detail": "Associate Teaching Professors may supervise master’s theses, co-advise doctoral theses, co-supervise postdoctoral fellows, and serve as principal investigator on teaching or research grants.",
    "privilegeNotes": [],
    "procedures": [
      "The Department or Unit Head/Director solicits enough referees, using the template provided by the APT Council, to obtain a minimum of three external evaluations. These evaluators should be external to the candidate’s department/unit and must have sufficient expertise to judge the candidate in a rigorous, fair, and impartial way. Academic referees should generally be individuals based at leading departments or institutions, or from equivalent leadership positions in industry or government when appropriate.",
      "All full-time professorial track faculty at the full or associate professor rank are required to vote.\n\n*If there are fewer than three faculty in the unit at the required rank(s), a standing committee including faculty from other units may vote. A standing A&P committee should include at least three faculty members. When possible, the standing A&P committee should include at least one faculty member from the candidate’s unit at or above the aspirational rank within the track. If there are no willing faculty from the candidate’s unit at or above the aspirational rank within the track, the committee may include a faculty member from the unit at the next highest rank within the track"
    ],
    "resources": [
      {
        "label": "Dossier checklist",
        "url": "https://engineering.jhu.edu/aptc/wp-content/uploads/2026/09/Teaching-Professor-Dossier-Checklist.pdf"
      },
      {
        "label": "Letter to referees",
        "url": "https://engineering.jhu.edu/aptc/wp-content/uploads/2026/10/Letter-to-Referees_Appointment-as-Associate-Teaching-Professor.docx"
      }
    ],
    "nextStep": "Start an appointment request in SmartPath.",
    "contactName": "Office of Faculty Affairs",
    "email": "wseacademicappta@jhu.edu",
    "directory": true
  },
  "28": {
    "id": 28,
    "title": "Assistant Teaching Professor",
    "group": "Teaching Professor track",
    "kind": "title",
    "criteria": [
      "The title of assistant teaching professor is conferred upon full-time faculty who demonstrate strong potential to become exceptional teachers, mentors, and educational innovators."
    ],
    "permissions": [
      "May supervise",
      "May co-advise",
      "May co-supervise",
      "Teaching or research grants"
    ],
    "detail": "Assistant teaching professors may supervise master’s theses, co-advise doctoral theses, co-supervise postdoctoral fellows, and serve as principal investigator on teaching or research grants.",
    "privilegeNotes": [],
    "procedures": [
      "The dossier includes a department request, CV, external evaluations, correspondence with referees, and teaching dossier.",
      "The Department or Unit Head/Director solicits enough referees to obtain a minimum of three external evaluations. There is no standard template letter. These evaluators should be external to the candidate’s department or unit and must have sufficient expertise to judge the candidate in a rigorous, fair, and impartial way. Academic referees should generally be individuals based at leading departments or institutions, or from equivalent leadership positions in industry or government when appropriate.",
      "All full-time professorial track faculty are required to vote.\n\n*If there are fewer than three faculty in the unit at the required rank(s), a standing committee including faculty from other units may vote. A standing A&P committee should include at least three faculty members. When possible, the standing A&P committee should include at least one faculty member from the candidate’s unit at or above the aspirational rank within the track. If there are no willing faculty from the candidate’s unit at or above the aspirational rank within the track, the committee may include a faculty member from the unit at the next highest rank within the track",
      "If the faculty vote in favor of the appointment, the Department or Unit Head/Director writes a letter to the Dean, including: 1) a tally of the department/unit’s vote (e.g., 12 in favor and none opposed); 2) a statement on professionalism; and 3) a summary of the candidate’s qualifications. Faculty who oppose the appointment must jointly write and sign a minority memo to accompany the department/unit’s report."
    ],
    "resources": [],
    "nextStep": "Start an appointment request in SmartPath.",
    "contactName": "Office of Faculty Affairs",
    "email": "wseacademicappta@jhu.edu",
    "directory": true
  },
  "31": {
    "id": 31,
    "title": "Senior Lecturer",
    "group": "Lecturer track",
    "kind": "title",
    "criteria": [
      "The title of senior lecturer is conferred upon part-time or short-term faculty who have taught with excellence for a period of not less than three years or whose position at another institution is one of appropriate responsibility and seniority."
    ],
    "permissions": [
      "Co-advise · case by case",
      "Not permitted",
      "Not permitted",
      "Not permitted"
    ],
    "detail": "Senior lecturers can co-advise master’s theses on a case-by-case basis. They cannot supervise doctoral theses, supervise postdoctoral fellows, or serve as principal investigator on grants.",
    "privilegeNotes": [],
    "procedures": [
      "The dossier includes a department request, CV, and teaching dossier. No faculty vote is required."
    ],
    "resources": [],
    "nextStep": "Start an appointment request in SmartPath.",
    "contactName": "Office of Faculty Affairs",
    "email": "wseacademicappta@jhu.edu",
    "directory": true
  },
  "32": {
    "id": 32,
    "title": "Lecturer",
    "group": "Lecturer track",
    "kind": "title",
    "criteria": [
      "The title of lecturer is conferred upon part-time or short-term faculty with qualifications in the relevant field who demonstrate experience in effective teaching."
    ],
    "permissions": [
      "Co-advise · case by case",
      "Not permitted",
      "Not permitted",
      "Not permitted"
    ],
    "detail": "Lecturers may co-advise master’s theses on a case-by-case basis. They cannot supervise doctoral theses, supervise postdoctoral fellows, or serve as principal investigator on grants.",
    "privilegeNotes": [],
    "procedures": [
      "The dossier includes a department request, CV, and teaching dossier. No faculty vote is required."
    ],
    "resources": [],
    "nextStep": "Start an appointment request in SmartPath.",
    "contactName": "Office of Faculty Affairs",
    "email": "wseacademicappta@jhu.edu",
    "directory": true
  },
  "36": {
    "id": 36,
    "title": "Research Professor",
    "group": "Research Professor track",
    "kind": "title",
    "criteria": [
      "This title of research professor is conferred upon full-time or part-time faculty who have demonstrated leadership and significant impact in their field or who hold a strong professional reputation beyond the university. Research professors should be able to fully support themselves on funded research for which they serve as principal investigator or co-principal investigator. The appointment to full research professor is not terminal, and faculty may continue in this rank with sufficient research funding."
    ],
    "permissions": [
      "May supervise",
      "May supervise",
      "May supervise",
      "May serve as PI"
    ],
    "detail": "Research Professors may supervise master’s and doctoral theses, supervise postdoctoral fellows, and serve as principal investigator on grants. Teaching may be undertaken when appropriate, but teaching should not be a primary source of support for anyone on the research professor track.",
    "privilegeNotes": [
      "Teaching may be undertaken when appropriate, but teaching should not be a primary source of support for anyone on the research professor track."
    ],
    "procedures": [
      "The Department or Unit Head/Director solicits enough referees, using the template provided by the APT Council, to obtain a minimum of four external evaluations. These evaluators should be external to the candidate’s department/unit and must have sufficient expertise to judge the candidate in a rigorous, fair, and impartial way. Academic referees should generally be individuals based at leading departments or institutions, or from equivalent leadership positions in industry or government when appropriate.",
      "All full-time professorial track faculty at the full professor rank are required to vote.\n\n*If there are fewer than three faculty in the unit at the required rank(s), a standing committee including faculty from other units may vote. A standing A&P committee should include at least three faculty members. When possible, the standing A&P committee should include at least one faculty member from the candidate’s unit at or above the aspirational rank within the track. If there are no willing faculty from the candidate’s unit at or above the aspirational rank within the track, the committee may include a faculty member from the unit at the next highest rank within the track",
      "If the faculty vote in favor of the appointment, the Department or Unit Head/Director writes a letter to the Dean, including: 1) a tally of the department/unit’s vote (e.g., 12 in favor and none opposed); 2) a statement on professionalism; 3) a summary of referee feedback; and 4) a summary of the candidate’s qualifications. Faculty who oppose the majority decision must jointly write and sign a minority memo, describing the grounds for the minority opinion, to accompany the department/unit’s letter."
    ],
    "resources": [
      {
        "label": "Dossier checklist",
        "url": "https://engineering.jhu.edu/aptc/wp-content/uploads/2026/09/Research-Professor-Dossier-Checklist.pdf"
      },
      {
        "label": "Letter to referees",
        "url": "https://engineering.jhu.edu/aptc/wp-content/uploads/2026/10/Letter-to-Referees_Appointment-as-Full-Research-Professor.docx"
      }
    ],
    "nextStep": "Start an appointment request in SmartPath.",
    "contactName": "Office of Faculty Affairs",
    "email": "wseacademicappta@jhu.edu",
    "directory": true,
    "alternativePathway": {
      "heading": "Temporary incoming or outgoing tenure-track appointments",
      "criteria": [],
      "procedures": [
        "If this is a temporary appointment for an incoming or outgoing tenure track faculty member: The dossier includes a department request and CV. No faculty vote is required. Please note in SmartPath that this appointment is for a tenure track faculty member."
      ]
    }
  },
  "37": {
    "id": 37,
    "title": "Associate Research Professor",
    "group": "Research Professor track",
    "kind": "title",
    "criteria": [
      "This title of associate research professor is conferred upon full-time or part-time faculty who have built an externally recognized research program with a demonstrable impact in their field. Associate research professors must demonstrate success in securing and leading their own funded research as a principal investigator or co-principal investigator."
    ],
    "permissions": [
      "May supervise",
      "May supervise",
      "May supervise",
      "May serve as PI"
    ],
    "detail": "Associate Research Professors may supervise master’s and doctoral theses, supervise postdoctoral fellows, and serve as principal investigator on grants. They may teach when appropriate, but teaching should not be a primary source of support for anyone on the research professor track.",
    "privilegeNotes": [
      "They may teach when appropriate, but teaching should not be a primary source of support for anyone on the research professor track."
    ],
    "procedures": [
      "The Department or Unit Head/Director solicits enough referees, using the template provided by the APT Council, to obtain a minimum of three external evaluations. These evaluators should be external to the candidate’s department/unit and must have sufficient expertise to judge the candidate in a rigorous, fair, and impartial way. Academic referees should generally be individuals based at leading departments or institutions, or from equivalent leadership positions in industry or government when appropriate.",
      "All full-time professorial track faculty at the full and associate professor rank are required to vote.\n\n*If there are fewer than three faculty in the unit at the required rank(s), a standing committee including faculty from other units may vote. A standing A&P committee should include at least three faculty members. When possible, the standing A&P committee should include at least one faculty member from the candidate’s unit at or above the aspirational rank within the track. If there are no willing faculty from the candidate’s unit at or above the aspirational rank within the track, the committee may include a faculty member from the unit at the next highest rank within the track",
      "If the faculty vote in favor of the appointment, the Department or Unit Head/Director writes a letter of the Dean, including: 1) a tally of the department/unit’s vote (e.g., 12 in favor and none opposed); 2) a statement on professionalism; 3) a summary of referee feedback; and 4) a summary of the candidate’s qualifications. Faculty who oppose the majority decision must jointly write and sign a minority memo, describing the grounds for the minority opinion, to accompany the department’s letter."
    ],
    "resources": [
      {
        "label": "Dossier checklist",
        "url": "https://engineering.jhu.edu/aptc/wp-content/uploads/2026/09/Research-Professor-Dossier-Checklist.pdf"
      },
      {
        "label": "Letter to referees",
        "url": "https://engineering.jhu.edu/aptc/wp-content/uploads/2026/10/Letter-to-Referees_Appointment-as-Associate-Research-Professor.docx"
      }
    ],
    "nextStep": "Start an appointment request in SmartPath.",
    "contactName": "Office of Faculty Affairs",
    "email": "wseacademicappta@jhu.edu",
    "directory": true,
    "alternativePathway": {
      "heading": "Temporary incoming or outgoing tenure-track appointments",
      "criteria": [],
      "procedures": [
        "If this is a temporary appointment for an incoming or outgoing tenure track faculty member: The dossier includes a department request and CV. No faculty vote is required. Please note in SmartPath that this appointment is for a tenure track faculty member."
      ]
    }
  },
  "38": {
    "id": 38,
    "title": "Assistant Research Professor",
    "group": "Research Professor track",
    "kind": "title",
    "criteria": [
      "This title is conferred upon full-time or part-time faculty who demonstrate strong research potential and are beginning to establish an independent research program. Assistant research professors may be supported by other scholars’ grants initially but should be expected to begin to submit research proposals as a named investigator."
    ],
    "permissions": [
      "May supervise",
      "May supervise",
      "May supervise",
      "May serve as PI"
    ],
    "detail": "Assistant Research Professors may supervise master’s and doctoral theses, supervise postdoctoral fellows, and serve as principal investigator on grants. They may teach when appropriate, but teaching should not be a primary source of support for anyone on the research professor track.",
    "privilegeNotes": [
      "They may teach when appropriate, but teaching should not be a primary source of support for anyone on the research professor track."
    ],
    "procedures": [
      "The dossier includes a department request, CV, external evaluations, correspondence with referees, and research statement.",
      "The Department or Unit Head/Director solicits enough referees to obtain a minimum of three external evaluations. There is no standard template letter. At least one, and preferably more, of these evaluators should be external to the candidate’s current and previous department(s) and must have sufficient expertise to judge the candidate in a rigorous, fair, and impartial way. Academic referees should generally be individuals based at leading departments or institutions, or from equivalent leadership positions in industry or government when appropriate.",
      "All full-time professorial track faculty are required to vote.\n\n*If there are fewer than three faculty in the unit at the required rank(s), a standing committee including faculty from other units may vote. A standing A&P committee should include at least three faculty members. When possible, the standing A&P committee should include at least one faculty member from the candidate’s unit at or above the aspirational rank within the track. If there are no willing faculty from the candidate’s unit at or above the aspirational rank within the track, the committee may include a faculty member from the unit at the next highest rank within the track",
      "If the faculty vote in favor of the appointment, the Department or Unit Head/Director writes a letter to the Dean, including: 1) a tally of the department/unit’s vote (e.g., 12 in favor and none opposed); 2) a statement on professionalism; 3) a summary of the candidate’s qualifications. Faculty who oppose the majority decision must jointly write and sign a minority memo, describing the grounds for the minority opinion, to accompany the department/unit’s letter."
    ],
    "resources": [],
    "nextStep": "Start an appointment request in SmartPath.",
    "contactName": "Office of Faculty Affairs",
    "email": "wseacademicappta@jhu.edu",
    "directory": true,
    "alternativePathway": {
      "heading": "Temporary incoming or outgoing tenure-track appointments",
      "criteria": [],
      "procedures": [
        "If this is a temporary appointment for an incoming or outgoing tenure track faculty member: The dossier includes a department request and CV. No faculty vote is required. Please note in SmartPath that this appointment is for a tenure track faculty member."
      ]
    }
  },
  "41": {
    "id": 41,
    "title": "Senior Research Engineer/Scientist",
    "group": "Research Scientist/Engineer track",
    "kind": "title",
    "criteria": [
      "This title is conferred upon full-time or part-time faculty with a high level of experience, responsibility, and proficiency in the discharge of duties; independence in the conduct of work; the ability to manage a substantial portion of a research project; and the ability to supervise the work of less senior members of the research team. They are not expected to have an independent research program."
    ],
    "permissions": [
      "Co-advise · case by case",
      "Co-advise · case by case",
      "May supervise",
      "May serve as PI"
    ],
    "detail": "Senior research scientists/engineers may co-advise master’s theses or doctoral theses on a case-by-case basis. They can supervise postdoctoral fellows and serve as principal investigators on grants. Senior research scientists/engineers may teach, but teaching should not be a primary source of support for anyone on the research scientist/engineer track.",
    "privilegeNotes": [
      "Senior research scientists/engineers may teach, but teaching should not be a primary source of support for anyone on the research scientist/engineer track."
    ],
    "procedures": [
      "The dossier includes a department request and CV. No faculty vote is required.",
      "The Department or Unit Head/Director writes a letter to the Dean, including: 1) a statement on professionalism; and 2) a summary of the candidate’s qualifications."
    ],
    "resources": [],
    "nextStep": "Start an appointment request in SmartPath.",
    "contactName": "Office of Faculty Affairs",
    "email": "wseacademicappta@jhu.edu",
    "directory": true
  },
  "42": {
    "id": 42,
    "title": "Associate Research Engineer/Scientist",
    "group": "Research Scientist/Engineer track",
    "kind": "title",
    "criteria": [
      "This title is conferred upon full-time or part-time faculty with an intermediate level of experience, responsibility, and proficiency in the discharge of duties; independence in the conduct of work; the ability to contribute to a substantial portion of a research project; and the ability to supervise the work of less senior members of the research team. They are not expected to have an independent research program."
    ],
    "permissions": [
      "Co-advise · case by case",
      "Co-advise · case by case",
      "May supervise",
      "May serve as PI"
    ],
    "detail": "Associate research scientists/engineers may co-advise master’s theses or doctoral theses on a case-by-case basis. They can supervise postdoctoral fellows and serve as principal investigators on grants. Associate research scientists/engineers may teach, but teaching should not be a primary source of support for anyone on the research scientist/engineer track.",
    "privilegeNotes": [
      "Associate research scientists/engineers may teach, but teaching should not be a primary source of support for anyone on the research scientist/engineer track."
    ],
    "procedures": [
      "The dossier includes a department request and CV. No faculty vote is required.",
      "The Department or Unit Head/Director writes a letter to the Dean, including: 1) a statement on professionalism; and 2) a summary of the candidate’s qualifications."
    ],
    "resources": [],
    "nextStep": "Start an appointment request in SmartPath.",
    "contactName": "Office of Faculty Affairs",
    "email": "wseacademicappta@jhu.edu",
    "directory": true
  },
  "43": {
    "id": 43,
    "title": "Assistant Research Engineer/Scientist",
    "group": "Research Scientist/Engineer track",
    "kind": "title",
    "criteria": [
      "This title is conferred upon full-time or part-time entry-level faculty with skills concomitant with the needs of the research team they will work with. They are not expected to develop an independent research program."
    ],
    "permissions": [
      "Co-advise · case by case",
      "Co-advise · case by case",
      "May supervise",
      "May serve as PI"
    ],
    "detail": "Assistant research scientists/engineers may co-advise master’s theses or doctoral theses on a case-by-case basis. They can supervise postdoctoral fellows and serve as principal investigators on grants. Assistant research scientists/engineers may teach, but teaching should not be a primary source of support for anyone on the research scientist/engineer track.",
    "privilegeNotes": [
      "Assistant research scientists/engineers may teach, but teaching should not be a primary source of support for anyone on the research scientist/engineer track."
    ],
    "procedures": [
      "The dossier includes a department request and CV. No faculty vote is required.",
      "The Department or Unit Head/Director writes a letter to the Dean, including: 1) a statement on professionalism; and 2) a summary of the candidate’s qualifications."
    ],
    "resources": [],
    "nextStep": "Start an appointment request in SmartPath.",
    "contactName": "Office of Faculty Affairs",
    "email": "wseacademicappta@jhu.edu",
    "directory": true
  },
  "44": {
    "id": 44,
    "title": "Homewood Professor",
    "group": "Distinguished appointment",
    "kind": "title",
    "criteria": [
      "This title is conferred upon full-time or part-time faculty of the caliber of members of the National Academy of Sciences or National Academy of Engineering."
    ],
    "permissions": [
      "May supervise",
      "May supervise",
      "May supervise",
      "May serve as PI"
    ],
    "detail": "Homewood Professors may supervise master’s or doctoral theses and postdoctoral fellows. They can serve as principal investigators on grants.",
    "privilegeNotes": [],
    "procedures": [
      "The dossier includes a department request and CV. There is no standard template letter.",
      "The Department or Unit Head/Director solicits enough referees to obtain a minimum of three external evaluations. There is no standard template letter. These evaluators should be external to the candidate’s department/unit and must have sufficient expertise to judge the candidate in a rigorous, fair, and impartial way. Academic referees should generally be individuals based at leading departments or institutions, or from equivalent leadership positions in industry or government when appropriate.",
      "All full-time professorial track faculty are required to vote.\n\n*If there are fewer than three faculty in the unit at the required rank(s), a standing committee including faculty from other units may vote. A standing A&P committee should include at least three faculty members. When possible, the standing A&P committee should include at least one faculty member from the candidate’s unit at or above the aspirational rank within the track. If there are no willing faculty from the candidate’s unit at or above the aspirational rank within the track, the committee may include a faculty member from the unit at the next highest rank within the track",
      "If the faculty vote in favor of the appointment, the Department or Unit Head/Director writes a letter to the Dean, including: 1) a tally of the department/unit’s vote (e.g., 12 in favor and none opposed); 2) a statement on professionalism; and 3) a summary of the candidate’s qualifications. Faculty who oppose the majority decision must jointly write and sign a minority memo, describing the grounds for the minority opinion, to accompany the department/unit’s letter."
    ],
    "resources": [],
    "nextStep": "Start an appointment request in SmartPath.",
    "contactName": "Office of Faculty Affairs",
    "email": "wseacademicappta@jhu.edu",
    "directory": true
  },
  "45": {
    "id": 45,
    "title": "Connect with Faculty Affairs",
    "group": "Appointment review",
    "kind": "contact",
    "contactSummaryOnly": true,
    "criteria": [
      "The answers along this decision path do not establish an appropriate faculty title. Review the selected criteria with the Office of Faculty Affairs."
    ],
    "detail": "Contact the Office of Faculty Affairs at wseacademicappta@jhu.edu.",
    "procedures": [],
    "resources": [],
    "nextStep": "Discuss the proposed appointment with the Office of Faculty Affairs.",
    "contactName": "Office of Faculty Affairs",
    "email": "wseacademicappta@jhu.edu"
  }
};
export const directoryIds = [36,37,38,12,13,14,18,19,21,26,27,28,31,32,41,42,43,44];
export const permissionLabels = ['Master’s theses supervision','Doctoral theses supervision','Postdoctoral fellows supervision','Principal investigator'];
export const routingNotes = ["Per user clarification on November 17, the visiting student/postdoc check precedes the engineering-degree check: step 11 No goes to 15, and step 15 No goes to 17.","The some-teaching-experience choice at step 25 omits a destination in the document; it leads to Assistant Teaching Professor at step 28, whose criterion matches that choice."];
export function resolvePath(history) {
  if (!Array.isArray(history)) throw new Error('Invalid decision path');
  let id = 1;
  for (const item of history) {
    if (id !== item.id || !Number.isInteger(item.choice) || !questions[id]?.options[item.choice]) throw new Error('Invalid decision path');
    id = questions[id].options[item.choice].next;
  }
  return questions[id] || outcomes[id];
}
