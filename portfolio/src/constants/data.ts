export const PERSONAL_INFO = {
  name: 'Yoganandhan S',
  title: 'Full Stack Developer',
  location: 'Coimbatore, India',
  email: 'kumaryoga2006@gmail.com',
  phone: '+91 9486277215',
  linkedin: 'https://linkedin.com/in/yoganandhan-s-b2a92933a',
  github: 'https://github.com/kumaryoga2006-hub',
  roles: [
    'Full Stack Developer',
    'React & Django Engineer',
    'Cyber Security Enthusiast',
    'Backend Architect',
  ],
  bio: 'Building scalable, secure, and stunning web experiences.',
};

export const ABOUT = {
  summary: `I'm a passionate Full Stack Developer and Cybersecurity Enthusiast currently pursuing my B.E. in Computer Science Engineering at KK Institute of Technology, Coimbatore. With a strong foundation in React, Django, and secure coding practices, I build scalable and secure web applications. I'm actively involved in competitive programming, national-level innovation challenges, and open-source contributions.`,
  education: {
    degree: 'B.E. Computer Science Engineering',
    institution: 'KK Institute of Technology',
    location: 'Coimbatore, India',
    expectedGraduation: '2028',
  },
  quickFacts: [
    { icon: '🎓', label: '2nd Year CSE Student' },
    { icon: '📍', label: 'Coimbatore, India' },
    { icon: '🔐', label: 'Security-first mindset' },
    { icon: '🤝', label: 'Class Representative' },
  ],
  languages: [
    { name: 'Tamil', level: 'Native' },
    { name: 'English', level: 'Fluent' },
    { name: 'Telugu', level: 'Basic' },
  ],
};

export const SKILLS = {
  categories: {
    languages: {
      title: 'Languages',
      skills: [
        { name: 'Python', icon: 'SiPython', proficiency: 90 },
        { name: 'C', icon: 'SiC', proficiency: 85 },
        { name: 'C++', icon: 'SiCplusplus', proficiency: 80 },
        { name: 'JavaScript', icon: 'SiJavascript', proficiency: 88 },
      ],
    },
    frontend: {
      title: 'Frontend',
      skills: [
        { name: 'React JS', icon: 'SiReact', proficiency: 92 },
        { name: 'HTML5', icon: 'SiHtml5', proficiency: 95 },
        { name: 'CSS3', icon: 'SiCss3', proficiency: 90 },
        { name: 'Responsive Design', icon: 'SiTailwindcss', proficiency: 88 },
        { name: 'UI/UX', icon: 'SiFigma', proficiency: 75 },
      ],
    },
    backend: {
      title: 'Backend & APIs',
      skills: [
        { name: 'Django', icon: 'SiDjango', proficiency: 85 },
        { name: 'REST APIs', icon: 'SiOpenapi', proficiency: 88 },
        { name: 'Microservices', icon: 'SiKubernetes', proficiency: 70 },
        { name: 'API Integration', icon: 'SiPostman', proficiency: 85 },
      ],
    },
    cloud: {
      title: 'Cloud & DevOps',
      skills: [
        { name: 'Cloud Computing', icon: 'SiAmazonaws', proficiency: 75 },
        { name: 'Git', icon: 'SiGit', proficiency: 90 },
        { name: 'Version Control', icon: 'SiGithub', proficiency: 90 },
        { name: 'Linux', icon: 'SiLinux', proficiency: 78 },
      ],
    },
    cybersecurity: {
      title: 'Cybersecurity',
      skills: [
        { name: 'Secure Coding', icon: 'SiOpensecurity', proficiency: 82 },
        { name: 'OWASP', icon: 'SiOwasp', proficiency: 78 },
        { name: 'Vulnerability Assessment', icon: 'SiMetasploit', proficiency: 75 },
        { name: 'Web Security', icon: 'SiBurpsuite', proficiency: 80 },
      ],
    },
    tools: {
      title: 'Tools & Soft Skills',
      skills: [
        { name: 'Git', icon: 'SiGit', proficiency: 90 },
        { name: 'Agile', icon: 'SiJira', proficiency: 85 },
        { name: 'Code Reviews', icon: 'SiGithub', proficiency: 88 },
        { name: 'Team Collaboration', icon: 'Slack', proficiency: 92 },
      ],
    },
  },
};

export const PROJECTS = [
  {
    id: 1,
    name: 'EYIC Food Saver',
    tags: ['Django', 'REST API', 'Python', 'UN SDG2'],
    description: 'Backend system to reduce food waste and optimize food distribution. Real-time inventory tracking, data pipelines, secure coding practices.',
    longDescription: 'Developed a comprehensive backend system for the Zero Hunger Initiative (UN SDG2). Implemented real-time inventory tracking, automated data pipelines, and secure API endpoints. The system helps optimize food distribution to reduce waste and ensure food reaches those in need.',
    techStack: ['Django', 'Python', 'REST API', 'PostgreSQL', 'Docker'],
    accentColor: '#00d4ff',
    links: {
      github: '#',
      live: '#',
    },
  },
  {
    id: 2,
    name: 'EYRC Krishi Self Balancer Bot',
    tags: ['Python', 'PID Control', 'Robotics', 'Embedded Systems'],
    description: 'Software module for a self-balancing agricultural robot. Real-time sensor processing, motor control, communication protocols.',
    longDescription: 'Developed the software module for a self-balancing agricultural robot as part of the e-Yantra Robotics Competition. Implemented PID control algorithms, real-time sensor data processing, and motor control systems. The robot is designed for agricultural applications with autonomous navigation capabilities.',
    techStack: ['Python', 'C++', 'ROS', 'PID Control', 'Embedded C'],
    accentColor: '#6c63ff',
    links: {
      github: '#',
      live: '#',
    },
  },
  {
    id: 3,
    name: 'PALS INNOWAH 2026',
    tags: ['Innovation', 'Software Engineering', 'National Level'],
    description: 'Finalist in IIT Madras national innovation challenge. Developed a technically robust software engineering solution.',
    longDescription: 'Reached the finals of the prestigious PALS INNOWAH 2026 innovation challenge hosted by IIT Madras. Developed a technically robust software engineering solution addressing real-world problems. The project demonstrated strong problem-solving skills and innovative thinking in software architecture.',
    techStack: ['React', 'Node.js', 'Python', 'Machine Learning'],
    accentColor: '#ff6584',
    links: {
      github: '#',
      live: '#',
    },
  },
  {
    id: 4,
    name: 'College Canteen Website',
    tags: ['React JS', 'Django', 'REST API', 'Full Stack'],
    description: 'Full-featured canteen management system with real-time menu, ordering, inventory tracking, and mobile-friendly UI.',
    longDescription: 'Built a comprehensive full-stack canteen management system for the college. Features include real-time menu updates, online ordering with payment integration, inventory tracking, and a mobile-friendly responsive UI. The system streamlines canteen operations and improves the user experience for students and staff.',
    techStack: ['React', 'Django', 'REST API', 'PostgreSQL', 'Tailwind CSS'],
    accentColor: '#4ecdc4',
    links: {
      github: '#',
      live: '#',
    },
  },
];

export const ACHIEVEMENTS = [
  {
    id: 1,
    year: '2026',
    title: 'PALS INNOWAH 2026 — Finalist',
    institution: 'IIT Madras',
    icon: '🏆',
    description: 'National innovation challenge finalist',
  },
  {
    id: 2,
    year: '2024',
    title: 'e-Yantra Robotics Competition',
    institution: 'IIT Bombay',
    icon: '🤖',
    description: 'Krishi Bot Software Module Developer',
  },
  {
    id: 3,
    year: '2024-2025',
    title: 'EYIC Food Saver',
    institution: 'e-Yantra Ideas Competition',
    icon: '🍽️',
    description: 'Zero Hunger Initiative Project',
  },
  {
    id: 4,
    year: '2024-Present',
    title: 'Class Representative',
    institution: 'KK Institute of Technology',
    icon: '👨‍💼',
    description: 'CSE Department Leadership Role',
  },
  {
    id: 5,
    year: 'Ongoing',
    title: 'Competitive Programming',
    institution: 'Various Platforms',
    icon: '💻',
    description: 'Active in competitive programming & full stack development',
  },
  {
    id: 6,
    year: 'Ongoing',
    title: 'Continuous Learning',
    institution: 'Self-driven',
    icon: '☁️',
    description: 'Cybersecurity, Cloud Computing, Modern Web Technologies',
  },
];

export const STATS = {
  projects: '4+',
  finalist: '1 National Finalist',
  competitions: '2+ Competition Participations',
  coding: '2 Years of Coding',
};

export const CONTACT_INFO = [
  { icon: '📧', label: 'Email', value: 'kumaryoga2006@gmail.com', link: 'mailto:kumaryoga2006@gmail.com' },
  { icon: '📞', label: 'Phone', value: '+91 9486277215', link: 'tel:+919486277215' },
  { icon: '📍', label: 'Location', value: 'Coimbatore, India', link: null },
  { icon: '🔗', label: 'LinkedIn', value: 'linkedin.com/in/yoganandhan-s-b2a92933a', link: 'https://linkedin.com/in/yoganandhan-s-b2a92933a' },
  { icon: '💻', label: 'GitHub', value: 'github.com/kumaryoga2006-hub', link: 'https://github.com/kumaryoga2006-hub' },
];

export const NAV_LINKS = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
];

export const SOCIAL_LINKS = [
  { name: 'GitHub', icon: 'Github', href: 'https://github.com/kumaryoga2006-hub' },
  { name: 'LinkedIn', icon: 'Linkedin', href: 'https://linkedin.com/in/yoganandhan-s-b2a92933a' },
];
