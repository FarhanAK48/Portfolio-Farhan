import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  sectionIndex: any;
  sideProjectsIndex:any;
  // projects = [
  //   {
  //     name: 'YoderLay',
  //     description:
  //       'This is an Ionic application named Yoderlay, designed to provide a seamless online service for individuals facing issues with everyday essentials such as electrical systems, ovens, refrigerators, plumbing, and more. The application enables users to report faults or request assistance, and it assigns the task to a nearby mechanic.',
  //     technologies: ['Ionic, CSS'],
  //     link: 'project1-link',
  //     photos: [


  //       "../../../assets/yoderlay/5.png",
  //       "../../../assets/yoderlay/6.png",
  //       "../../../assets/yoderlay/7.png",
  //       "../../../assets/yoderlay/8.png",
  //       "../../../assets/yoderlay/3.png",
  //       "../../../assets/yoderlay/4.png",
  //     ]
  //   },
  //   {
  //     name: 'Thurrock Training Consultancy',
  //     description:
  //       'This is an Angular application named Thurrock Training Consultancy, designed to assist students who aspire to study abroad in countries such as the UK, USA, Canada, Australia, and more.',
  //     technologies: ['Angular', 'Tailwind CSS', 'Laravel'],
  //     link: 'project2-link',
  //   },
  //   {
  //     name: 'Ok Stack',
  //     description:
  //       'This is an Angular application named OK Stack, developed to monitor servers, provide detailed information about server performance, and track errors along with their respective purposes.',
  //     technologies: ['Angular', 'Tailwind CSS', 'Node.js'],
  //     link: 'project3-link',
  //     photos: [
  //       "../../../assets/Ok-Stack/1.png",
  //       "../../../assets/Ok-Stack/10.png",
  //       "../../../assets/Ok-Stack/2.png",
  //       "../../../assets/Ok-Stack/3.png",
  //       "../../../assets/Ok-Stack/4.png",
  //       "../../../assets/Ok-Stack/5.png",
  //       "../../../assets/Ok-Stack/6.png",
  //       "../../../assets/Ok-Stack/7.png",
  //       "../../../assets/Ok-Stack/8.png",
  //       "../../../assets/Ok-Stack/9.png",
  //     ]
  //   },
  //   {
  //     name: 'Salon Service',
  //     description:
  //       'A modern salon service app built with Ionic that allows users to browse, book, and manage a wide range of grooming and beauty services — from haircuts and shaving to massages and facials — all in one place',
  //     technologies: ['Ionic', 'CSS',],
  //     link: 'project4-link',
  //     photos: [
  //       "../../../assets/Salon-service/1.png",
  //       "../../../assets/Salon-service/2.png",
  //       "../../../assets/Salon-service/3.png",
  //       "../../../assets/Salon-service/4.png",
  //       "../../../assets/Salon-service/5.png",
  //       "../../../assets/Salon-service/6.png",
  //       "../../../assets/Salon-service/7.png",
  //       "../../../assets/Salon-service/8.png",
  //     ]
  //   },
  // ];
  project = [
    {
      title: 'Zero Balance DataPrep',
      description:
        'This is a part of application in which authenticarion will done by parent app and select patient name and also upload patient files and on data came from backend and we show that record in table.',
      img: '../../../assets/dataprep.png'
    },
    {
      title: 'Thurrock Training Consultancy',
      description:
        'A Study Abroad app helping students find study visas and plan their future. Built with Angular and Laravel, featuring authentication, responsive UI, core modules, and smooth API integration.',
      img: '../../../assets/TTC_-removebg-preview.png'
    },
    {
      title: 'Yoderlay',
      description:
        'Improved UI/UX for a home service booking app (AC, fridge, motor repair) by fixing layout, spacing, and flow issues using Ionic and Tailwind CSS. Enhanced responsiveness and component consistency.',
      img: '../../../assets/yoderlay-removebg-preview.png'

    },
    {
      title: 'Salon Service',
      description:
        'Designed a mobile-friendly UI with intuitive and responsive screens for user authentication (login, registration, and password recovery), location selection using geolocation services, and service listings with clear navigation and user interaction flows.',

      img: '../../../assets/salon-removebg-preview.png'
    },
    {
      title: 'Popout',
      description:
        'Contributed to a custom relationship-building app focused on meaningful connections. Worked on key features like user onboarding, profile setup, and interaction flows using Ionic and Tailwind CSS, ensuring a smooth and engaging user experience.',

      img: '../../../assets/popout.png'
    },
    {
      title: 'Ok Stack',
      description:
        'Worked on an ongoing server tracking project, implementing authentication, onboarding, and route guards. Modified the sidenav and contributed to multiple Angular components. Integrated seamlessly with a .NET 5 backend.',
      img: '../../../assets/ok-stack-removebg-preview.png'

    },

    // Add more items here
  ];

  sideProjects = [
    {
      title: 'Pharmacy App',
      description:
        'Built a role-based Pharmacy App with a dashboard, product catalog, and cart. Users can filter and add products to the cart, while admins manage products. Cart supports item removal and real-time price updates',
      img: '../../../assets/pharmacy.png'
    },
    {
      title: 'React Fundamental',
      description:
        "Completed a React Fundamentals project covering core concepts including components, hooks (useState, useEffect), routing, state management with Redux and Context API and also Api integration.",
      img: '../../../assets/react-basics.png'

    },
    {
      title: 'Inventory Management',
      description:
        "Developed an Inventory Management system using Node.js, featuring product tracking, stock updates, and CRUD operations with role-based access control to manage user permissions efficiently.",
      img: '../../../assets/inv.jpeg'

    },

    // Add more items here
  ];

  sideProjectDetail = [
    {
      image: '../../../assets/pharmacy.png',
      projectName: 'Pharmacy System',
      start: 'Mar 2025',
      end: 'Apr 2025',
      about: 'Developed a role-based web app with a dashboard, product management, and cart functionality. Admins can add, update, or delete products, while users can filter items and manage their cart with real-time total price updatess.',
      techStack: [
        'React Js',
        'Tailwind CSS',
        'Localhost',
        'Git',
        'Github',
      ],
      repo:'https://github.com/FarhanAK48/Pharmacy-rjs'
    },
    {
      image: '../../../assets/react-basics.png',
      projectName: 'React Fundamentals',
      start: 'Jan 2025',
      end: 'Feb 2025',
      about: 'Developed a web application demonstrating core React concepts including Hooks, Context API, Redux, Routing, and more, to build scalable and state-managed components.',
      techStack: [
        'React Js',
        'Hooks',
        'Redux',
        'Tailwind CSS',
        'Localhost',
        'Git',
        'Github',
      ],
      repo:'https://github.com/FarhanAK48/react-core-concepts'

    },
    {
      image: '../../../assets/inv.jpeg',
      projectName: 'Inventory Management',
      start: 'june 2024',
      end: 'Aug 2024',
      about:
        "Developed an Inventory Management system using Node.js, featuring product tracking, stock updates, and CRUD operations with role-based access control to manage user permissions efficiently.",
      techStack: [
        'Node Js',
        'Express',
        'Sequlize',
        'Jwt',
        'Git',
        'Github',
      ],
      repo:'https://github.com/FarhanAK48/inventory-management'

    },
  ]
  timeline = [
    { title: 'Take a Break', detail: 'Step outside...', color: 'border-blue-500' },
    { title: 'Relax Your Mind', detail: 'Try some light meditation...', color: 'border-green-500' },
    { title: 'Get Inspired', detail: 'Look at creative work...', color: 'border-purple-500' }
  ];


  projectDetails: any = [
     {
      image: '../../../assets/dataprep.png',
      projectName: 'Zero Balance DataPrep',
      company: 'One Machine Software ',
      start: 'Aug 2025',
      end: 'Oct 2025',
      about: 'This is a part of application in which authenticarion will done by parent app and select patient name and also upload patient files and on data came from backend and we show that record in table.',
      techStack: [
        'React',
        'Redux',        
        'Tailwind Css',
        'Node.js',        
        'MySQL',
        'Git',
        'Github',

      ],
      role: 'Full-Stack Developer',
      features: [
        'Authentication with parent app parameters',        
        'Design Entire Application',
        'Select and Check valid files are selected or not',
        'Start polling when files are processing req gone after 2 seconds',
        'When process completed show data in table',
        'Responsive design for all device types'
      ]
    },
    {
      image: '../../../assets/TTC_-removebg-preview.png',
      projectName: 'Thurrock Training Consultancy',
      company: '@BolTech Solutions',
      start: 'May 2023',
      end: 'Jan 2024',
      about: 'A Study Abroad app helping students find study visas and plan their future. Built with Angular and Laravel, featuring authentication, responsive UI, core modules, and smooth API integration.',
      techStack: [
        'Angular',
        'TypeScript',
        'Angular Material',
        'SCSS',
        'Laravell',
        'Stripe API',
        'MySQL',
        'Git',
        'Github',

      ],
      role: 'Front-End Developer',
      features: [
        'Secure authentication (Email/Password, Google, Apple Sign-In)',
        'Multi-role dashboard system (Student/Admin)',
        'Role-based authorization and permissions',
        'Design multiple sections(Students, Enrollments, Organisations)',
        'Add Notes against multiple sections',
        'Apply filters against sections',
        'Add GeoLocation in sections',
        'Responsive design for all device types'
      ]
    },
    {
      image: '../../../assets/yoderlay-removebg-preview.png',
      projectName: 'Yoderlay',
      company: '@BolTech Solutions',
      start: 'Feb 2024',
      end: 'Apr 2024',
      about: 'Improved UI/UX for a home service booking app (AC, fridge, motor repair) by fixing layout, spacing, and flow issues using Ionic and Tailwind CSS. Enhanced responsiveness and component consistency.',
      techStack: [
        'Ionic',
        'TypeScript',
        'Capacitor',
        'SCSS',
        '.Net',
        'MySQL',
        'Git',
        'Github',

      ],
      role: 'Front-End Developer',
      features: [
        'UI fixes',
        'Implemented Onboarding section',
        'API integration',
        'Modifications across multiple sections',
        'Added location support',
        'Responsive design for all device types'
      ]
    },
    {
      image: '../../../assets/salon-removebg-preview.png',
      projectName: 'Salon Service',
      company: '@BolTech Solutions',
      start: 'May 2024',
      end: 'July 2024',
      about: 'Designed a mobile-friendly UI with intuitive and responsive screens for user authentication (login, registration, and password recovery), location selection using geolocation services, and service listings with clear navigation and user interaction flows',
      techStack: [
        'Ionic',
        'TypeScript',
        'Capacitor',
        'SCSS',
        'Git',
        'Github',

      ],
      role: 'Front-End Developer',
      features: [
        'Implemented entire app UI from scratch',
        'Integrated Ionic library',
        'Authentication system',
        'Dashboard page',
        'Multiple screens',
        'Used Swiper for carousels',
        'Responsive design for all device types'
      ]
    },
    {
      image: '../../../assets/popout.png',
      projectName: 'Popout',
      company: '@BolTech Solutions',
      start: 'Aug 2024',
      end: 'feb 2025',
      about: 'Contributed to a custom relationship-building app focused on meaningful connections. Worked on key features like user onboarding, profile setup, and interaction flows using Ionic and Tailwind CSS, ensuring a smooth and engaging user experience.',
      techStack: [
        'Ionic',
        'TypeScript',
        'Capacitor',
        'SCSS',
        '.Net',
        'Git',
        'Github',

      ],
      role: 'Front-End Developer',
      features: [
        'Authentication system',
        'Integrated Ionic library',
        'Dashboard page',
        'Designed multiple screens',
        'REST API integrations',
        'Fetch place details using geolocation',
        'Integrated OneSignal for notifications',
        'Integrated RevenueCat for in-app purchases and subscriptions',
        'Responsive design for all device types'
      ]
    },
    {
      image: '../../../assets/ok-stack-removebg-preview.png',
      projectName: 'Ok Stack',
      company: '@BolTech Solutions',
      start: 'March 2025',
      end: 'Present',
      about: 'Worked on an ongoing server tracking project, implementing authentication, onboarding, and route guards. Modified the sidenav and contributed to multiple Angular components. Integrated seamlessly with a .NET 5 backend',
      techStack: [
        'Angular',
        'TypeScript',
        'Tailwind Css',
        '.Net',
        'Git',
        'Github',

      ],
      role: 'Front-End Developer',
      features: [
        'Implemented onboarding sections',
        'Authentication system',
        'Authorization',
        'Dashboard page',
        'Design Multiple screens',
        'Integrated REST APIs',
        'Modifications in sidenav',
        'Responsive design for all device types'
      ]
    },
  ]
  // images = false;
  // showImage = false;
  // showpictures = false;
  selectedProject: any;
  isModalOpen = false;
  isPopupOpen = false;

  // showImages: any[] = new Array(9).fill(false);
  constructor(
    private router: Router,
    private renderer: Renderer2) {
    this.applyAnimation = true;
  }
  applyAnimation = false;
  showButton = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showButton = window.pageYOffset > 300;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to top
  }

  ngOnInit(): void {

  }



  // loadImages() {
  //   this.showImages = new Array(9).fill(false);

  //   for (let i = 0; i < this.showImages.length; i += 2) {
  //     setTimeout(() => {
  //       for (let j = i; j < i + 2 && j < this.showImages.length; j++) {
  //         this.showImages[j] = true;
  //       }
  //     }, i * 500);
  //   }
  // }

  // viewDetail(value: any) {
  //   this.selectedProject = value;
  //   this.loadImages();

  //   this.images = true;
  //   // setTimeout(() => this.showImage = true, 200);
  //   // setTimeout(() => this.showpictures = true, 500);

  // }



  openModal(index: any) {
    this.sectionIndex = index;
    this.isModalOpen = true;
    this.renderer.addClass(document.body, 'overflow-hidden'); // Lock scroll
  }

  closeModal() {
    this.isModalOpen = false;
    this.renderer.removeClass(document.body, 'overflow-hidden'); // Restore scroll
  }



  openPopup(index:any) {
    this.sideProjectsIndex = index
    this.isPopupOpen = true;
    document.body.classList.add('overflow-hidden'); // Prevent background scroll
  }

  closePopup() {
    this.isPopupOpen = false;
    this.renderer.removeClass(document.body, 'overflow-hidden'); // Restore scroll
  }

  clickOut(){
    this.isPopupOpen = false;

  }
}
