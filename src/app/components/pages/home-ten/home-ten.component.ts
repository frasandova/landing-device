import { Component, HostListener } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-home-ten',
  templateUrl: './home-ten.component.html',
  styleUrl: './home-ten.component.css'
})
export class HomeTenComponent {
  // Features
  features =[
    {
      featureBox: "feature-box text-center xs-mb-30 feature-box-gradient center-feature white-color border-radius-25",
      icon: "fa fa-paper-plane font-40px",
      title: "Retina Ready",
      desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      featureBox: "feature-box text-center xs-mb-30 feature-box-gradient-six center-feature white-color border-radius-25",
      icon: "fa fa-pencil font-40px",
      title: "Easy Interface",
      desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      featureBox: "feature-box text-center xs-mb-30 feature-box-gradient center-feature white-color border-radius-25",
      icon: "fa fa-headphones font-40px",
      title: "Fast Support",
      desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    }
  ]

  // Video Popup
	isOpen = false;
  openPopup(): void {
      this.isOpen = true;
  }
  closePopup(): void {
      this.isOpen = false;
  }

  // Funfacts
  funFacts =[
    {
      icon: "fa fa-code dark-color font-50px",
      number: 8885,
      desc: "Lines of Code",
      displayedNumber: 0
    },
    {
      icon: "fa fa-trophy dark-color font-50px",
      number: 92,
      desc: "Awards",
      displayedNumber: 0
    },
    {
      icon: "fa fa-coffee dark-color font-50px",
      number: 1099,
      desc: "Cups of Coffee",
      displayedNumber: 0
    },
    {
      icon: "fa fa-anchor dark-color font-50px",
      number: 576,
      desc: "Projects Won",
      displayedNumber: 0
    }
  ]

  ngOnInit(): void {
    this.startCounters();
  }

  startCounters(): void {
    this.funFacts.forEach(fact => {
      this.animateCounter(fact);
    });
  }

  animateCounter(fact: any): void {
    const duration = 4000; 
    const intervalTime = 50; 
    const increment = fact.number / (duration / intervalTime);

    const interval = setInterval(() => {
      fact.displayedNumber += increment;
      if (fact.displayedNumber >= fact.number) {
        fact.displayedNumber = fact.number;
        clearInterval(interval); 
      }
    }, intervalTime);
  }

  // Owl Slider Team
    customOptionsTwo: OwlOptions = {
      loop: true,
      dots: true,
      margin: 30,
      nav: false,
      autoplay: true,
      autoplaySpeed: 2000,
      navSpeed: 2000,
      items: 3,
      navText: ['', ''],
      responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
        }
      }
    };
  
    slideStoreTwo: { title: string; subtitle: string; image: string; index: number }[] = [
      {
        title: "Web Designer",
        subtitle: "Tom Bills",
        image: "team-1.jpg",
        index: 0
      },
      {
        title: "CEO of Becki Agency",
        subtitle: "Sara Adams",
        image: "team-2.jpg",
        index: 1
      },
      {
        title: "Photographer",
        subtitle: "Enzo William",
        image: "team-3.jpg",
        index: 2
      }
    ];
  
    socialLinks = [
      { iconOuter: "facebook", iconInner: ['icofont icofont-social-facebook'] },
      { iconOuter: "twitter", iconInner: ['icofont icofont-social-twitter'] },
      { iconOuter: "pinterest", iconInner: ['icofont icofont-social-pinterest'] },
    ];

  //Features

  leftServices = [
    {
      title: "Retina Ready",
      desc: "Nunc pharetra ullamcorper enim eget interdum. Morbi vitae pulvinar lacus. Suspendisse pulvinar tempus hendrerit. Suspendisse quam felis.",
    },
    {
      title: "Awesome Design",
      desc: "Nunc pharetra ullamcorper enim eget interdum. Morbi vitae pulvinar lacus. Suspendisse pulvinar tempus hendrerit. Suspendisse quam felis.",
    },
    {
      title: "Minimal Style",
      desc: "Nunc pharetra ullamcorper enim eget interdum. Morbi vitae pulvinar lacus. Suspendisse pulvinar tempus hendrerit. Suspendisse quam felis.",
    }
  ]

  rightServices = [
    {
      title: "Top Quality",
      desc: "Nunc pharetra ullamcorper enim eget interdum. Morbi vitae pulvinar lacus. Suspendisse pulvinar tempus hendrerit. Suspendisse quam felis.",
    },
    {
      title: "Best Performance",
      desc: "Nunc pharetra ullamcorper enim eget interdum. Morbi vitae pulvinar lacus. Suspendisse pulvinar tempus hendrerit. Suspendisse quam felis.",
    },{
      title: "Fast Support",
      desc: "Nunc pharetra ullamcorper enim eget interdum. Morbi vitae pulvinar lacus. Suspendisse pulvinar tempus hendrerit. Suspendisse quam felis.",
    }
  ]  

  // Skills
    skills = [
      { name: 'HTML', level: 90 },
      { name: 'CSS', level: 80 },
      { name: 'JavaScript', level: 85 },
      { name: 'Angular', level: 75 },
      { name: 'TypeScript', level: 70 }
    ];
  
    isScrolled = false;
  
    @HostListener('window:scroll', [])
    onScroll(): void {
      const skillsSection = document.querySelector('.skill');
      
      // Add a null check for skillsSection
      if (skillsSection) {
        const position = skillsSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
  
        // Check if the section is in view
        if (position < windowHeight) {
          this.isScrolled = true;
        }
      }
    }
  
  // Portfolio
  portfolios = [
    {
      img: "1.jpg",
      title: "Fode ",
      subTitle: "Branding, Mockup"
    },
    {
      img: "2.jpg",
      title: "Daniel and Denise",
      subTitle: "Branding, UI/UX"
    },
    {
      img: "3.jpg",
      title: "Sydney Design",
      subTitle: "Design, Stationery"
    },
    {
      img: "4.jpg",
      title: "Glasses",
      subTitle: "Branding, UI/UX"
    },
    {
      img: "5.jpg",
      title: "The Bijou Factory",
      subTitle: "Branding, Mockup"
    },
    {
      img: "6.jpg",
      title: "Calender",
      subTitle: "Design, Branding"
    },
    {
      img: "7.jpg",
      title: "Flyer",
      subTitle: "Branding, Stationery"
    },
    {
      img: "8.jpg",
      title: "Hand Watch",
      subTitle: "Design, UI/UX"
    }
  ]

  // Pricing
  pricing = [
    {
      title: "Basic Plan",
      subTitle: "An affordable option for end-to-end hiring at small companies.",
      currency: "$",
      amount: 9.99,
      btnClass: "btn btn-dark btn-md btn-default btn-circle",
      btnText: "Get Started",
      features: [
        'Mobile-Optimized Website',
        'Powerful Website Metrics',
        'Free Custom Domain',
        '24/7 Customer Support',
        'Fully Integrated E-Commerce',
        'Sell Unlimited Products &amp; Accept Donations',
        'No CMS items',
        'No site search',
        'No CMS API access',
        'No content editors'
      ]
    },

    {
      title: "Standard Plan",
      subTitle: "An affordable option for end-to-end hiring at small companies.",
      currency: "$",
      amount: 16.99,
      btnClass: "btn btn-dark btn-md btn-default btn-circle",
      btnText: "Get Started",
      features: [
        'Mobile-Optimized Website',
        'Powerful Website Metrics',
        'Free Custom Domain',
        '24/7 Customer Support',
        'Fully Integrated E-Commerce',
        'Sell Unlimited Products &amp; Accept Donations',
        'No CMS items',
        'No site search',
        'No CMS API access',
        'No content editors'
      ]
    },

    {
      title: "Extended Plan",
      subTitle: "An affordable option for end-to-end hiring at small companies.",
      currency: "$",
      amount: 24.99,
      btnClass: "btn btn-dark btn-md btn-default btn-circle",
      btnText: "Get Started",
      features: [
        'Mobile-Optimized Website',
        'Powerful Website Metrics',
        'Free Custom Domain',
        '24/7 Customer Support',
        'Fully Integrated E-Commerce',
        'Sell Unlimited Products &amp; Accept Donations',
        'No CMS items',
        'No site search',
        'No CMS API access',
        'No content editors'
      ]
    }
  ]; 
  
  // Owl Testimonial
  customOptionsThree: OwlOptions = {
    loop: true,
    dots: true,
    margin:30,
    nav:true,
    autoplay:true,
    autoplaySpeed: 2000,
    navSpeed: 2000,
    items: 3,
    navText: ['<i class="icofont icofont-arrow-left"></i>', '<i class="icofont icofont-arrow-right"></i>'],
    responsive:{
      0:{
          items:1,
      },
      600:{
          items:2,
      },
      1000:{
          items:3,
      }
    }
  }

  slideStoreThree = [
    {
      title: "Anne McAdams",
      subTitle: "CEO / Founder",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales nec nulla ac aliquet. Duis vel nunc eget.",
      image: "assets/images/team/avatar-1.jpg",
    },

    {
      title: "Jared Kane",
      subTitle: "CEO / Founder",
      description: "Quisque hendrerit turpis sit amet tortor condimentum, nec commodo lorem condimentum. Sed id diam efficitur, mattis tellus ac, malesuada purus. In ultrices nisl sed eleifend consequat.",
      image: "assets/images/team/avatar-2.jpg",
    },

    {
      title: "Nani Wale",
      subTitle: "CEO / Founder",
      description: "Quisque hendrerit turpis sit amet tortor condimentum, nec commodo lorem condimentum. Sed id diam efficitur, mattis tellus ac, malesuada purus. In ultrices nisl sed eleifend consequat.",
      image: "assets/images/team/avatar-3.jpg",
    },

    {
      title: "John Doe",
      subTitle: "CEO / Founder",
      description: "Quisque hendrerit turpis sit amet tortor condimentum, nec commodo lorem condimentum. Sed id diam efficitur, mattis tellus ac, malesuada purus. In ultrices nisl sed eleifend consequat.",
      image: "assets/images/team/avatar-4.jpg",
    }

  ]

  // Owl Brand Logos
  customOptionsFour: OwlOptions = {
    loop: true,
    dots: false,
    margin:0,
    nav:false,
    autoplay:true,
    autoplaySpeed: 2000,
    navSpeed: 2000,
    items: 6,
    responsive:{
      0:{
          items:1,
      },
      600:{
          items:2,
      },
      1000:{
          items:6,
      }
    }
  }

  slideStoreFour = [
    {
      image: "assets/images/clients/1.png",
    },

    {
      image: "assets/images/clients/2.png",
    },

    {
      image: "assets/images/clients/3.png",
    },

    {
      image: "assets/images/clients/4.png",
    },

    {
      image: "assets/images/clients/5.png",
    },

    {
      image: "assets/images/clients/6.png",
    }

  ]

  // Contact Form
  formData = {
    user_name: '',
    user_email: '',
    message: ''
  };

  // EmailJS service configuration
  private serviceId = 'contact-form';  // Replace with your EmailJS Service ID
  private templateId = 'contact-form-becki';  // Replace with your EmailJS Template ID
  private publicKey = 'gObMl0a3V0Jib9k5c';  // Replace with your EmailJS Public Key

  // Method to send email on form submission
  public sendEmail(event: Event): void {
    event.preventDefault();

    // Send email using EmailJS
    emailjs.sendForm(this.serviceId, this.templateId, event.target as HTMLFormElement, this.publicKey)
      .then(
        (response: EmailJSResponseStatus) => {
          alert('Message sent successfully. Thank you, we will get back to you soon!');
          this.resetForm();
        },
        (error: EmailJSResponseStatus) => {
          console.error('Failed to send message. Error:', error.text);
          alert('Failed to send the message. Please try again later.');
        }
      );
  }

  // Method to reset the form after submission
  private resetForm(): void {
    this.formData = {
      user_name: '',
      user_email: '',
      message: ''
    };
  }

  socialMedia = [
    {
      iconClass: "fb",
      icon:"icofont icofont-social-facebook"
    },
    {
      iconClass: "tw",
      icon:"icofont icofont-social-twitter"
    },
    {
      iconClass: "be",
      icon:"icofont icofont-social-behance"
    },
    {
      iconClass: "in",
      icon:"icofont icofont-social-linkedin"
    },
    {
      iconClass: "yt",
      icon:"icofont icofont-social-youtube"
    },
    {
      iconClass: "ins",
      icon:"icofont icofont-social-instagram"
    }
  ]
}
