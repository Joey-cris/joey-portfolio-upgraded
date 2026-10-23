/* =====================================================================
   EDIT THIS FILE. Anything left "" is hidden automatically — no dead links.
   ===================================================================== */
const ME = {
  name: "Joey C. Galolo", initials: "JG",
  email: "joeygalolo07@gmail.com", phone: "09934813088",
  location: "Southern Leyte, Philippines",          // change to your town/city if you prefer
  github: "",                                        // TODO: https://github.com/<your-username>
  linkedin: "",                                      // TODO: https://www.linkedin.com/in/<your-handle>
  cv: "cv/Joey-Galolo-CV.pdf",                       // button auto-hides if this file 404s once deployed
  whatsapp: "https://wa.me/639934813088",            // from your phone number
  messenger: "",                                     // TODO: https://m.me/<your-facebook-username>
  formEndpoint: "",                                  // TODO: Formspree URL, e.g. https://formspree.io/f/xxxxxxxx
  lookingFor: "Web development · IT · Multimedia roles",
  availability: "Open to opportunities",
  updated: "October 2026",
  whyHire: "I build clean, working web systems and I document real events with a camera — one person who can ship the feature and tell the story.",
};

const FRONTEND = ["HTML", "CSS", "JavaScript", "React.js"];
const BACKEND = ["PHP", "Java", "Spring Boot", "REST API", "MySQL"];
const TOOLS = ["Git", "QGIS", "Android Studio"];
const TECH = [...FRONTEND, ...BACKEND, ...TOOLS];   // used by the marquee
const CREATIVE = ["Photography", "Photojournalism", "Photo Editing", "Visual Storytelling", "Multimedia Documentation", "Logo Design", "Digital Marketing"];
const SOFT = ["Critical Thinking", "Team Collaboration", "Flexibility", "Time Management", "Fast Learner", "Problem-solving", "Attention to Detail"];

const SKILLS = [
  { t: "Frontend", items: FRONTEND, c: "acc" },
  { t: "Backend", items: BACKEND, c: "acc" },
  { t: "Tools", items: TOOLS, c: "acc" },
  { t: "Creative & Multimedia", items: CREATIVE, c: "ink" },
  { t: "Soft Skills", items: SOFT, c: "mute" },
  { t: "Currently learning", items: ["Spring Boot", "Android Studio"], c: "learn" },
];

const EDUCATION = [
  { degree: "Bachelor of Science in Information Technology", school: "Southern Leyte State University", campus: "Tomas Oppus", year: "Graduated 2026",
    honors: [] /* e.g. "Dean's Lister", "Best Thesis" */ },
];

/* img = filename (no extension) in src/assets/projects/. Fill role/problem/solution/result for a real case study.
   shots = extra screenshot base names (must also be listed in assets.js under "projects").
   "View Project" opens a detail window, so it never dead-ends. link/gh buttons show only when filled. */
const PROJECTS = [
  { img: "attendance", title: "Attendance Management System", cat: "Web Application", desc: "Web-based attendance management system developed as an IT project.", tech: ["PHP", "MySQL", "JavaScript"],
    role: "", problem: "", solution: "", result: "", shots: [], link: "", gh: "" },
  { img: "van", title: "Van Management System", cat: "Web Application", desc: "Management system designed to organize and manage van-related information and operations.", tech: ["PHP", "MySQL", "CSS"],
    role: "", problem: "", solution: "", result: "", shots: [], link: "", gh: "" },
  { img: "payroll", title: "Payroll & Compensation System", cat: "Full Stack", desc: "A full-stack payroll and compensation management system.", tech: ["React.js", "Java", "Spring Boot", "MySQL"],
    role: "", problem: "", solution: "", result: "", shots: [], link: "", gh: "" },
];

/* Photojournalism context — shown only when filled */
const PUBLICATION = { name: "", role: "Photojournalist", events: [] /* e.g. "Intramurals", "Graduation" */ };

/* Captions for src/assets/photos/<file>. A photo shows its caption once "event" is filled. */
const PHOTO_INFO = {
  "Event Coverage.jpg":     { event: "", date: "", place: "", desc: "" },
  "photo1.png":             { event: "", date: "", place: "", desc: "" },
  "photo2.jpg":             { event: "", date: "", place: "", desc: "" },
  "photo3.jpg":             { event: "", date: "", place: "", desc: "" },
  "photo.jpg":              { event: "", date: "", place: "", desc: "" },
  "Visual Storytelling.jpg":{ event: "", date: "", place: "", desc: "" },
};

/* Real quotes only. Section hides while empty. */
const TESTIMONIALS = [
  // { quote: "…", name: "Full Name", role: "Supervisor, Armada Logics Inc." },
];

const CERTS = [
  { file: "ojt-armada", title: "On-the-Job Training – Certificate of Completion", org: "Armada Logics", date: "Jan 19 – Apr 10, 2026 · 600 hours" },
  { file: "java-armada", title: "Java Programming Course (Java Fundamentals to Spring MVC)", org: "Armada Logics", date: "Feb 24 – Mar 18, 2026 · 240 hours" },
  { file: "logo-design", title: "Developing Designs for a Logo", org: "TESDA Online Program", date: "September 14, 2026" },
  { file: "digital-marketing", title: "Introduction to Digital Marketing", org: "TESDA Online Program", date: "August 24, 2026" },
  { file: "ai-scam-awareness", title: "AI Ready ASEAN – Digital Literacy & Scam Awareness", org: "ASEAN Foundation · SmartCT", date: "September 22, 2026" },
  { file: "qgis", title: "QGIS Training Program", org: "SLSU TO, San Isidro, Southern Leyte", date: "October 21, 2025" },
];

const WORK_CATS = { photography: "Photography", it: "IT", web: "Web Development", internship: "Internship" };

const HOBBIES = [
  { scene: "chess", title: "Chess", text: "Planning a few moves ahead, and staying calm when the position gets tight." },
  { scene: "edit", title: "Photo & video editing", text: "Cutting footage and grading photos until the story reads clearly." },
  { scene: "game", title: "Online games", text: "Team and competitive matches that sharpen focus and quick decisions." },
  { scene: "pc", title: "Computers", text: "Building, tweaking, and troubleshooting. I'm happiest with a keyboard in hand." },
  { scene: "doc", title: "Documentaries", text: "Watching real stories for how they're framed, paced, and told." },
  { scene: "frame", title: "Portrait & landscape photography", text: "Faces for character, horizons for calm. One frame at a time." },
];

/* "What I Do" — drawn from your internships, projects and publication work. Edit freely. */
const SERVICES = [
  { icon: "code", title: "Web Development", text: "Responsive websites and web applications built with HTML, CSS, JavaScript, PHP and React.js.", tags: ["Frontend", "Responsive UI"] },
  { icon: "layers", title: "Backend & APIs", text: "REST APIs and backend applications using Java, Spring Boot and MySQL.", tags: ["Spring Boot", "MySQL"] },
  { icon: "briefcase", title: "Systems & Data Work", text: "Management systems (attendance, payroll, van operations), plus data encoding and documentation for office work.", tags: ["Full-stack", "Documentation"] },
  { icon: "camera", title: "Photo & Multimedia", text: "Event photography, photo editing, logo design and visual storytelling for a school publication.", tags: ["Photojournalism", "Design"] },
];