const skills = {
  cloud: {
    title: "Cloud Computing",
    label: "Technical Foundation",
    summary:
      "Cloud platforms, architecture concepts and managed services for scalable and resilient solutions.",
    image: "assets/img/cloudcomputing.jpg",
    description:
      "My cloud path combines formal study, certification preparation and hands-on projects across AWS and Azure. I focus on understanding how services fit together to solve business needs, rather than treating cloud products as isolated tools.",
    architecture:
      "Cloud knowledge supports decisions about scalability, availability, cost, security and managed services. It helps me evaluate trade-offs and communicate why a particular architecture fits a given context.",
    experience: [
      "AWS and Azure learning projects involving serverless, containers and AI services.",
      "B2B support for connectivity, firewall, cloud phone and Microsoft licensing services.",
      "Portfolio projects that connect cloud concepts with practical user needs.",
    ],
    learning: [
      "AWS Certified Cloud Practitioner (CLF-C02).",
      "Microsoft Certified: Azure Fundamentals (AZ-900).",
      "Postgraduate Degree in Cloud Computing.",
      "AWS re/Start learning program and Azure AZ-204 labs.",
    ],
  },
  security: {
    title: "Cybersecurity & Networks",
    label: "Security by Design",
    summary:
      "Operational security, network visibility and risk awareness developed through SOC and NOC environments.",
    image: "assets/img/security.jpg",
    description:
      "My security background was built through years of monitoring telecommunications environments, investigating suspicious activity and supporting operational continuity. Network operations later expanded that perspective to availability, latency and service quality.",
    architecture:
      "Security and networking experience helps me consider identity, traffic flows, monitoring, resilience and operational risk early in a solution instead of treating them as afterthoughts.",
    experience: [
      "SOC monitoring of IDS alerts, abnormal traffic, malware and web attacks.",
      "NOC monitoring of connectivity, latency, availability and service quality.",
      "Revenue assurance audits across voice, data, SMS, CRM, HLR and AAA platforms.",
      "Incident documentation, escalation and operational process improvement.",
    ],
    learning: [
      "Fortinet NSE 1, NSE 2 and NSE 3.",
      "Cybercrime and cybersecurity postgraduate studies.",
      "Ethical hacking, forensic investigation and intrusion detection training.",
      "TCP/IP, MPLS, BGP, OSPF, IS-IS and network security courses.",
    ],
  },
  devops: {
    title: "DevOps & Automation",
    label: "Reliable Delivery",
    summary:
      "Automation, collaboration and delivery practices that connect development with operations.",
    image: "assets/img/devops.webp",
    description:
      "I approach DevOps as both a technical discipline and a collaboration model. My learning covers Linux, Git, containers, CI/CD, infrastructure concepts and programming foundations, supported by experience in operational environments.",
    architecture:
      "Architecture is only useful when teams can deploy, observe and improve it. DevOps thinking helps connect design decisions with repeatable delivery, maintainability and operational ownership.",
    experience: [
      "Version control and deployment workflows for independent web projects.",
      "Operational monitoring and incident escalation in NOC environments.",
      "Scrum Master experience coordinating an internal system initiative.",
      "Python and JavaScript used for learning, prototypes and automation.",
    ],
    learning: [
      "DevOps Career Program covering Kubernetes, CI/CD and infrastructure as code.",
      "Linux administration and command-line training.",
      "Git, GitHub, Docker and Azure DevOps learning labs.",
      "Python, JavaScript, HTML, CSS, SQL and programming logic.",
    ],
  },
  leadership: {
    title: "Leadership & Delivery",
    label: "People and Execution",
    summary:
      "Clear communication, inclusive collaboration and shared responsibility for delivering outcomes.",
    image: "assets/img/leadership.jpg",
    description:
      "My leadership experience comes from coordinating collaborative work, documenting processes, teaching others and connecting people with a shared goal. I value clarity, psychological safety and practical follow-through.",
    architecture:
      "Solutions Architects work across technical and non-technical groups. Leadership and communication help uncover requirements, explain trade-offs, manage expectations and keep decisions aligned with business outcomes.",
    experience: [
      "Acted as Scrum Master for an internal system improvement initiative.",
      "Created procedures and documentation to improve operational consistency.",
      "Supported customers and technical teams across different countries and contexts.",
      "Teaching, mentoring and volunteer leadership experience.",
    ],
    learning: [
      "Inclusive leadership and unconscious bias training.",
      "Intercultural management and diversity studies.",
      "Scrum fundamentals and advanced Scrum learning.",
      "Professional development, resilience and effective one-on-one communication.",
    ],
  },
  marketing: {
    title: "Business & Marketing",
    label: "Customer Value",
    summary:
      "Understanding audiences, communicating value and connecting technical work to business goals.",
    image: "assets/img/marketingdigital.jpg",
    description:
      "Marketing study has strengthened my ability to think from the customer's perspective. It complements my technical background by helping me frame problems around value, trust, communication and measurable outcomes.",
    architecture:
      "A technically elegant system can still fail if it does not solve the right problem. Business and marketing awareness help clarify the audience, desired outcome and value proposition behind a solution.",
    experience: [
      "Built websites for consulting, photography and service businesses.",
      "Translated service offerings into clear information structures and calls to action.",
      "Worked directly with B2B customers and operational service needs.",
    ],
    learning: [
      "Digital marketing and social media training.",
      "V4 marketing methodology program.",
      "Entrepreneurship and small-business learning.",
      "User-focused content and conversion-oriented web design practice.",
    ],
  },
  pedagogy: {
    title: "Pedagogy & Knowledge Sharing",
    label: "Clarity and Enablement",
    summary:
      "Teaching, documentation and communication practices that make complex knowledge more accessible.",
    image: "assets/img/pedagogia.webp",
    description:
      "Teaching has been a recurring part of my journey. My experience in classrooms, tutoring, documentation and professional support has taught me to adapt explanations to different audiences and learning needs.",
    architecture:
      "Architecture requires more than creating diagrams. It requires helping teams understand a solution, documenting decisions and enabling others to operate and improve what has been designed.",
    experience: [
      "Worked as a science teacher and provided academic tutoring.",
      "Created operational procedures and technical documentation.",
      "Supported customer understanding during technical service interactions.",
      "Developed structured study materials for cloud and AI topics.",
    ],
    learning: [
      "Pedagogy degree studies.",
      "Corporate education and literacy coursework.",
      "Workshops in mathematics, language and learning support.",
      "Ongoing practice creating accessible technical learning content.",
    ],
  },
};

function setSkillText(id, value) {
  document.getElementById(id).textContent = value;
}

function fillSkillList(id, items) {
  const list = document.getElementById(id);

  items.forEach((value) => {
    const item = document.createElement("li");
    const icon = document.createElement("i");
    icon.className = "bi bi-check-circle";
    item.append(icon, document.createTextNode(value));
    list.appendChild(item);
  });
}

function renderSkill(skill) {
  document.title = `${skill.title} - Kyska Harrington`;
  document
    .getElementById("skill-meta-description")
    .setAttribute("content", skill.summary);

  setSkillText("skill-title", skill.title);
  setSkillText("skill-summary", skill.summary);
  setSkillText("skill-breadcrumb", skill.title);
  setSkillText("skill-label", skill.label);
  setSkillText("skill-heading", skill.title);
  setSkillText("skill-description", skill.description);
  setSkillText("skill-architecture", skill.architecture);

  const image = document.getElementById("skill-image");
  image.src = skill.image;
  image.alt = skill.title;

  fillSkillList("skill-experience", skill.experience);
  fillSkillList("skill-learning", skill.learning);
}

function showSkillNotFound() {
  document.getElementById("skill-content").classList.add("d-none");
  document.getElementById("skill-not-found").classList.remove("d-none");
  setSkillText("skill-title", "Skill Not Found");
  setSkillText(
    "skill-summary",
    "The requested knowledge area is unavailable. Return to the skills page to continue browsing.",
  );
}

const skillId = new URLSearchParams(window.location.search).get("skill");
const selectedSkill = skills[skillId];

if (selectedSkill) {
  renderSkill(selectedSkill);
} else {
  showSkillNotFound();
}
