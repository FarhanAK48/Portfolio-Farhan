import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-journey',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.scss']
})
export class JourneyComponent implements OnInit {

  constructor() {
    this.applyAnimation = true; 

 }

applyAnimation = false;
timelineItems = [
  {
    date: 'July 2025 – Present',
    title: 'Software Engineer',
    company: 'One Machine Software',
    location: 'Lahore, Pakistan',
    type: 'On-site',
    status: 'Current',
    contributions: [
      'Specialized in frontend for 3+ production apps',
      'Contributed to full-stack (APIs, DB design)',
      'Optimized UX performance by 35%',
    ],
    techStack: ['Angular', 'React js', 'Node.js','Tooljet'],
    image: '../../../assets/Zakriya.jpeg'
  },
  {
    date: 'Jan 2023 – June 2025',
    title: 'Software Engineer',
    company: 'BolTech Solutions',
    location: 'Lahore, Pakistan',
    type: 'On-site',
    status: 'Current',
    contributions: [
      'Specialized in frontend for 3+ production apps',
      'Contributed to full-stack (APIs, DB design)',
      'Optimized UX performance by 35%',
    ],
    techStack: ['Angular', 'Ionic', 'React js', 'Node.js'],
    image: '../../../assets/Zakriya.jpeg'
  },
  {
    date: 'Aug 2022 - Dec 2022',
    title: 'Software Engineer Intern',
    company: 'BolTech Solutions',
    location: 'Lahore, Pakistan',
    type: 'On-site',
    status: 'Internship',
    contributions: [
      'Applied JavaScript concepts in a training project',
      'Developed real-time features for a client project using Angular.js',
      'Learned Git workflows through collaborative development',
    ],
    techStack: ['JavaScript', 'TypeScript', 'Angular', 'Tailwind', 'Git'],
    image: '../../../assets/Zakriya.jpeg'
  },
  {
    date: '2017 – 2021',
    title: 'Bachelor of Science in Information Technology',
    company: 'Ghazi University DG Khan',
    location: 'Dera Ghazi Khan, Pakistan',
    type: 'Education',
    status: 'Graduate',
    contributions: [
      'Graduated with 3.20 CGPA',
      'Built koolkids as capstone project',
    ],
    techStack: ['Algorithms', 'OOP', 'DBMS', 'Networking'],
    image: '../../../assets/uni.jpg'
  },
  {
    date: '2015 – 2017',
    title: 'FSc Pre-Engineering',
    company: 'Zakriya science higher secondary school Karim dad Qureshi',
    location: 'Muzaffargarh, Pakistan',
    type: 'Education',
    status: 'Completed',
    contributions: [
      'Scored 80% in Mathematics',
      'Developed strong analytical skills through calculus',
      'Wrote technical notes on scientific concepts',
    ],
    techStack: ['Calculus', 'Physics', 'Chemistry'],
    image: '../../../assets/college.jpg'
  },
  {
    date: '2013 – 2015',
    title: 'Matriculation',
    company: 'Faiz e Aam public school karim dad qureshi',
    location: 'Muzaffargarh, Pakistan',
    type: 'Education',
    status: 'Completed',
    contributions: [
      'Achieved good marks in core subjects',
      'Won school science competition',
      'Class representative for 2 years',
    ],
    techStack: ['Algebra', 'Biology', 'Chemistry'],
    image: '../../../assets/school.jpg'
  }
];

showButton = false;

@HostListener('window:scroll', [])
onWindowScroll() {
  this.showButton = window.pageYOffset > 300; 
}

scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' }); 
}
  ngOnInit(): void {
  }

}
