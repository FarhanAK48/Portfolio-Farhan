import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() {
      this.applyAnimation = true; 
      this.allTechnologies = [...this.technologies, ...this.technologies];
  
   }

  applyAnimation = false;

;
roles = ['Software Engineer', 'Angular Specialist','React Enthusiast', 'Mobile App Developer', 'Node js Enthusiast'];
cards = [
  {
    title: 'Web Development',
    description: 'Crafting responsive, dynamic, and scalable websites using modern web technologies.',
    image: 'https://cdn-icons-png.flaticon.com/512/919/919827.png',
    alt: 'Web Development'
  },
  {
    title: 'Mobile Solutions',
    description: 'Developing cross-platform mobile apps for seamless user experiences on iOS and Android.',
    image: 'https://cdn-icons-png.flaticon.com/512/888/888879.png',
    alt: 'Mobile Solutions'
  },
  {
    title: 'Design & UX',
    description: 'Focusing on clean design and intuitive user interfaces to enhance engagement.',
    image: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    alt: 'Design & UX'
  },
  {
    title: 'Performance',
    description: 'Optimizing web and mobile applications for speed, responsiveness, and reliability.',
    image: 'https://cdn-icons-png.flaticon.com/512/8832/8832171.png',
    alt: 'Performance'
  }
];
technologies = [
  { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'Bootstrap', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg' },
  { name: 'Tailwind CSS', logo: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' },
  { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Angular', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
  { name: 'Ionic', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Ionic_Logo.svg' },
  { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'SQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' }
];
 bulletPoints = [
  "Contributed significantly to various projects leveraging JavaScript and modern frameworks.",
  "Collaborated with cross-functional teams to design and implement high-quality software.",
  "Optimized performance and stayed ahead of industry trends.",
  "Solved complex problems and adapted to evolving technologies."
];
experience = [
  {
    img: 'https://via.placeholder.com/150',
    info: [
      { icon: 'https://img.icons8.com/ios-filled/20/user.png', text: 'Full Stack Developer' },
      { icon: 'https://img.icons8.com/ios-filled/20/company.png', text: 'Tech Company XYZ' },
      { icon: 'https://img.icons8.com/ios-filled/20/calendar.png', text: 'Jan 2022 – Present' },
      { icon: 'https://img.icons8.com/ios-filled/20/skills.png', text: 'Angular · Node.js · SQL · Ionic' }
    ]
  },
 
];
skills: string[] = [
  'Web/Android App Development',
  'JavaScript',
  'TypeScript',
  'Tailwind CSS',
  'MERN Stack',
  'React.js',
  'Material UI',
  'React Native',
  'Next.js',
  'Next UI',
  'GitHub',
  'Git',
  'OAuth',
  'Azure Cosmos DB'
];
educationList = [
  {
    img:'../../../assets/Ghazi University.jpg',
    title: 'Bachelor of Science in Information Technology',
    institution: 'Ghazi University Dera Ghazi Khan',
    year: '2017 – 2021',
    details: 'Graduated with distinction. Focused on software engineering, algorithms, and web development.'
  },
  {
    img:'../../../assets/Zakriya.jpeg',
    title: 'FSC Pre-Engineering',
    institution: 'Zakriya Higher Secondary School Karim Dad Qureshi',
    year: '2015 – 2017',
    details: 'Specialized in Science with Mathematics. Participated in coding and robotics clubs.'
  },
  {
    img:'../../../assets/faiz-aam.jpeg',
    title: 'Matriculation',
    institution: 'Faiz e Aam Science College',
    year: '2013 – 2015',
    details: 'Specialized in Science with Mathematics. '
  }
];
experiences = [
    {
      role: 'Software Engineer',
      company: 'Boltech Solutions',
      location: 'Lahore, Pakistan, On-site Full-time',
      duration: 'Aug 2022 - Present',
      logo: '../../../assets/boltech_solutions_logo.jpeg',
      bulletPoints: [
        "Contributed significantly to various projects leveraging JavaScript and modern frameworks.",
        'Collaborated with cross-functional teams to design and implement high-quality software.',
        'Optimized performance and stayed ahead of industry trends.',
        'Solved complex problems and adapted to evolving technologies.'
  
      ],
      skills: [
        'Angular',
        'Ionic',
        'Node.js',
        'Express',
        'TypeScript',
        'Tailwind CSS',
        'Bootstrap',
        'Git',
        'Sql',
        'PostgreSQL'
      ]
    },
    {
      role: 'Software Engineer',
      company: 'One Machine Software',
      location: 'Lahore, Pakistan, On-site Full-time',
      duration: 'July 2025 - Present',
      logo: '../../../assets/one_machine_software_logo.jpg',
      bulletPoints: [
        'Developing scalable web applications using Angular, React , Node.js  and Tooljet.',
        'Collaborating on API design and system architecture improvements.',
        'Ensuring code quality and maintaining reusable components.'
      ],
      skills: [
        'Angular',
        'ReactJs',
        'Tooljet',
        'SQL',
        'TypeScript',
        'Bootstrap',
        'Git',
        'Agile'
      ]
    }
  ];
  activeCardIndex = -1;
activeIndex: number | null = null;
displayedText = '';
currentRoleIndex = 0;
isDeleting = false;
speed = 150;

allTechnologies:any = [];
scrollPosition: number = 0;
animationFrameId: number | null = null;
showButton = false;

@HostListener('window:scroll', [])
onWindowScroll() {
  this.showButton = window.pageYOffset > 300; 
}

scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

ngOnInit() {
  this.startAnimation()
  this.typeEffect();
}
toggle(index: number): void {
  this.activeIndex = this.activeIndex === index ? -1 : index;
}
  toggleCard(index: number) {
    this.activeCardIndex = this.activeCardIndex === index ? -1 : index; // toggle same, or open new
  }
typeEffect() {
  const fullText = this.roles[this.currentRoleIndex];
  this.displayedText = this.isDeleting
    ? fullText.substring(0, this.displayedText.length - 1)
    : fullText.substring(0, this.displayedText.length + 1);
    console.log('***',this.displayedText)
  let typingSpeed = this.isDeleting ? 60 : this.speed;
console.log('TS***',typingSpeed)
  if (!this.isDeleting && this.displayedText === fullText) {
    typingSpeed = 1000;
    this.isDeleting = true;
    console.log('AAA')
  } else if (this.isDeleting && this.displayedText === '') {
    this.isDeleting = false;
    this.currentRoleIndex = (this.currentRoleIndex + 1) % this.roles.length;
    typingSpeed = 300;
    console.log('ABA')

  }

  setTimeout(() => this.typeEffect(), typingSpeed);
}

ngOnDestroy(): void {
  if (this.animationFrameId !== null) {
    cancelAnimationFrame(this.animationFrameId);
  }
}

// startAnimation(): void {
//   const animationSpeed = 0.5; 
//   const scroll = () => {
//     this.scrollPosition += animationSpeed;
    
//     // Reset position when we've scrolled through the first set
//     if (this.scrollPosition >= this.technologies.length * 140) {
//       this.scrollPosition = 0;
//     }
    
//     this.animationFrameId = requestAnimationFrame(scroll);
//   };
  
//   this.animationFrameId = requestAnimationFrame(scroll);
// }
startAnimation(): void {
  const animationSpeed = 0.5;
  const itemWidth = 200;
  const singleSetWidth = this.technologies.length * itemWidth;
  
  const scroll = () => {
    this.scrollPosition += animationSpeed;
    
    // Reset when we've scrolled through one set
    // Since we have 3 identical sets, the reset is invisible
    if (this.scrollPosition >= singleSetWidth) {
      this.scrollPosition = 0;
    }
    
    this.animationFrameId = requestAnimationFrame(scroll);
  };
  
  this.animationFrameId = requestAnimationFrame(scroll);
}

stopAnimation(): void {
  if (this.animationFrameId) {
    cancelAnimationFrame(this.animationFrameId);
    this.animationFrameId = null;
  }
}

// Optional: Pause animation on hover
onMouseEnter(): void {
  this.stopAnimation();
}

onMouseLeave(): void {
  this.startAnimation();
}
}
