document.addEventListener('DOMContentLoaded', function() {
  // Language switching functionality
  const translations = {
    es: {
      "nav.home": "Inicio",
      "nav.about": "Sobre mí",
      "nav.projects": "Proyectos",
      "nav.skills": "Habilidades",
      "nav.contact": "Contacto",
      "hero.title": "Miguel Ángel González Peña",
      "hero.subtitle": "Comunicador, desarrollador de Videojuegos y Tecnólogo en Gestión de Redes de Datos",
      "hero.cta": "Descubre más",
      "typed.1": "Desarrollador de videojuegos",
      "typed.2": "Desarrollador de aplicaciones",
      "typed.3": "Editor audiovisual",
      "typed.4": "Creativo",
      "about.title": "Sobre mí",
      "about.description": "Soy Miguel Ángel González Peña, desarrollador de videojuegos con formación en Comunicación en Entretenimiento Digital. Combino habilidades en programación (C++, Python, C# con Unity, Java), diseño gráfico (Adobe Suite), animación, edición audiovisual, web y me apasiona la Inteligencia Artificial. Además, tengo experiencia trabajando con motores como Unity y Unreal Engine.",
      "projects.title": "Proyectos",
      "projects.rhythm.title": 'Proyecto Destacado: "Al ritmo de las leyendas"',
      "projects.rhythm.description": 'Juego musical en 2D para móviles donde interpretas a César, un niño de Amagá, enfrentándose a leyendas y mitos del Suroeste mediante música típica. Desarrollé un motor de niveles similar a Guitar Hero y el proyecto fue reconocido con el "Premio Huellas 2023".',
      "projects.rhythm.video": "Video - Al ritmo de las leyendas",
      "projects.haunted.title": "Haunted Blind",
      "projects.haunted.description": "Haunted Blind es un juego diseñado para personas con discapacidad visual, donde el objetivo es escapar de un lugar abandonado. El proyecto ofrece una experiencia de terror inmersiva mientras el jugador explora mapas creados por la comunidad.",
      "projects.haunted.contribution": "Mi contribución: conecté la base de datos y desarrollé la página web para campañas creadas por usuarios.",
      "projects.haunted.video": "Video - Haunted Blind",
      "skills.title": "Habilidades",
      "contact.title": "Contacto",
      "contact.whatsapp": "Contáctame por WhatsApp",
      "contact.cv": "Ver mi CV (PDF)",
      "contact.email": "Copiar Email",
      "contact.email.copied": "Email copiado",
      "contact.email.error": "Error al copiar el email",
      "footer.copyright": "© 2025 Miguel Ángel González Peña. Todos los derechos reservados.",
    },
    en: {
      "nav.home": "Home",
      "nav.about": "About",
      "nav.projects": "Projects",
      "nav.skills": "Skills",
      "nav.contact": "Contact",
      "hero.title": "Miguel Ángel González Peña",
      "hero.subtitle": "Communicator, Video Game Developer & Data Networks Technology Specialist",
      "hero.cta": "Learn More",
      "typed.1": "Video Game Developer",
      "typed.2": "App Developer",
      "typed.3": "Audiovisual Editor",
      "typed.4": "Creative",
      "about.title": "About Me",
      "about.description": "I am Miguel Ángel González Peña, a passionate video game developer with an educational background in Digital Entertainment Communication. I combine skills in programming (C++, Python, C#, Java), graphic design (Adobe Suite), animation, audiovisual editing, web development, and I'm enthusiastic about Artificial Intelligence. I also have experience working with game engines like Unity and Unreal Engine.",
      "projects.title": "Projects",
      "projects.rhythm.title": 'Featured Project: "The Rhythm of Legends"',
      "projects.rhythm.description": 'A 2D musical game for mobile devices where you play as César, a boy from Amagá, Antioquia, facing legends and myths from the Southwestern region using traditional music. I developed a level engine similar to Guitar Hero, and the project was recognized with the "Premio Huellas 2023".',
      "projects.rhythm.video": "Video - The Rhythm of Legends",
      "projects.haunted.title": "Haunted Blind",
      "projects.haunted.description": "Haunted Blind is a game designed for people with visual disabilities, where the goal is to escape from an abandoned place. The project offers an immersive horror experience while the player explores maps created by the community.",
      "projects.haunted.contribution": "My contribution: connected the database and developed the web page for user-created campaigns.",
      "projects.haunted.video": "Video - Haunted Blind",
      "skills.title": "Skills",
      "contact.title": "Contact",
      "contact.whatsapp": "Contact Me on WhatsApp",
      "contact.cv": "View my CV (PDF)",
      "contact.email": "Copy Email",
      "contact.email.copied": "Email copied",
      "contact.email.error": "Error copying email",
      "footer.copyright": "© 2025 Miguel Ángel González Peña. All rights reserved.",
    }
  };

  let currentLanguage = 'es';
  
  // Language switcher buttons
  const esBtn = document.getElementById('es-btn');
  const enBtn = document.getElementById('en-btn');
  
  // Update language
  function setLanguage(lang) {
    currentLanguage = lang;
    document.documentElement.lang = lang;
    
    // Update language buttons
    esBtn.classList.toggle('active', lang === 'es');
    enBtn.classList.toggle('active', lang === 'en');
    
    // Update CV link
    const cvLink = document.getElementById('cv-link');
    cvLink.href = `cv/${lang === 'es' ? 'CVSP.pdf' : 'CVENG.pdf'}`;
    
    // Update all elements with data-lang-key attribute
    document.querySelectorAll('[data-lang-key]').forEach(element => {
      const key = element.getAttribute('data-lang-key');
      if (translations[lang][key]) {
        element.textContent = translations[lang][key];
      }
    });
    
    // Update typed.js
    if (typedInstance) {
      typedInstance.destroy();
      initTyped();
    }
  }
  
  // Language switcher event listeners
  esBtn.addEventListener('click', () => setLanguage('es'));
  enBtn.addEventListener('click', () => setLanguage('en'));
  
  // Initialize Typed.js
  let typedInstance;
  function initTyped() {
    typedInstance = new Typed('#typed-element', {
      strings: [
        translations[currentLanguage]['typed.1'],
        translations[currentLanguage]['typed.2'],
        translations[currentLanguage]['typed.3'],
        translations[currentLanguage]['typed.4']
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true
    });
  }
  initTyped();
  
  // Header scroll effect
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  // Mobile menu functionality
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const closeMenuBtn = document.getElementById('close-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuLinks = mobileMenu.querySelectorAll('a');
  
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('active');
  });
  
  closeMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
  });
  
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
    });
  });
  
  // Smooth scroll for "Learn More" button
  const learnMoreBtn = document.getElementById('learn-more-btn');
  learnMoreBtn.addEventListener('click', () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  });
  
  // Project slider functionality
  const sliderTrack = document.getElementById('slider-track');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;
  
  function updateSlider() {
    sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
  }
  
  prevBtn.addEventListener('click', () => {
    currentSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
    updateSlider();
  });
  
  nextBtn.addEventListener('click', () => {
    currentSlide = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
    updateSlider();
  });
  
  // Auto-advance slides
  setInterval(() => {
    currentSlide = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
    updateSlider();
  }, 5000);
  
  // Skills section - floating logos
  const skillsContainer = document.getElementById('skills-container');
  const logos = [
    { src: "images/logos/adobeAE.png", alt: "Adobe After Effects" },
    { src: "images/logos/adobeAI.png", alt: "Adobe Illustrator" },
    { src: "images/logos/adobePhotoshop.png", alt: "Adobe Photoshop" },
    { src: "images/logos/adobePremiere.png", alt: "Adobe Premiere" },
    { src: "images/logos/adobeAudition.png", alt: "Adobe Audition" },
    { src: "images/logos/cpp.png", alt: "C++" },
    { src: "images/logos/csharp.png", alt: "C#" },
    { src: "images/logos/java.png", alt: "Java" },
    { src: "images/logos/python.png", alt: "Python" },
    { src: "images/logos/unity.png", alt: "Unity" },
    { src: "images/logos/unreal.png", alt: "Unreal Engine" },
    { src: "images/logos/html.png", alt: "HTML" },
    { src: "images/logos/css.png", alt: "CSS" }
  ];
  
  // Create logo elements
  const logoElements = [];
  logos.forEach(logo => {
    const logoItem = document.createElement('div');
    logoItem.className = 'logo-item';
    logoItem.style.left = `${Math.random() * (skillsContainer.clientWidth - 80)}px`;
    logoItem.style.top = `${Math.random() * (skillsContainer.clientHeight - 80)}px`;
    
    const img = document.createElement('img');
    img.src = logo.src;
    img.alt = logo.alt;
    img.loading = 'lazy';
    
    logoItem.appendChild(img);
    skillsContainer.appendChild(logoItem);
    
    logoElements.push({
      element: logoItem,
      x: parseFloat(logoItem.style.left),
      y: parseFloat(logoItem.style.top),
      vx: (Math.random() * 0.5 + 0.2) * (Math.random() < 0.5 ? -1 : 1),
      vy: (Math.random() * 0.5 + 0.2) * (Math.random() < 0.5 ? -1 : 1)
    });
  });
  
  // Animate logos
  function animateLogos() {
    const containerWidth = skillsContainer.clientWidth;
    const containerHeight = skillsContainer.clientHeight;
    
    logoElements.forEach(logo => {
      // Update position
      logo.x += logo.vx;
      logo.y += logo.vy;
      
      // Bounce off walls
      if (logo.x <= 0 || logo.x >= containerWidth - 80) {
        logo.vx = -logo.vx;
      }
      if (logo.y <= 0 || logo.y >= containerHeight - 80) {
        logo.vy = -logo.vy;
      }
      
      // Apply position
      logo.element.style.left = `${logo.x}px`;
      logo.element.style.top = `${logo.y}px`;
    });
    
    requestAnimationFrame(animateLogos);
  }
  
  animateLogos();
  
  // Background effects - particles and stars
  const particlesCanvas = document.getElementById('particles-canvas');
  const starsCanvas = document.getElementById('stars-canvas');
  const particlesCtx = particlesCanvas.getContext('2d');
  const starsCtx = starsCanvas.getContext('2d');
  
  // Set canvas dimensions
  function setCanvasDimensions() {
    particlesCanvas.width = window.innerWidth;
    particlesCanvas.height = window.innerHeight;
    starsCanvas.width = window.innerWidth;
    starsCanvas.height = window.innerHeight;
  }
  
  setCanvasDimensions();
  window.addEventListener('resize', setCanvasDimensions);
  
  // Create particles
  const colors = ["#ff004c", "#00ffff", "#00ff00", "#ff00ff", "#ffffff"];
  const particles = Array.from({ length: 150 }, () => ({
    x: Math.random() * particlesCanvas.width,
    y: Math.random() * particlesCanvas.height,
    radius: Math.random() * 2 + 1,
    speedY: Math.random() * 0.8 + 0.2,
    color: colors[Math.floor(Math.random() * colors.length)]
  }));
  
  // Create stars
  const stars = Array.from({ length: 100 }, () => ({
    x: Math.random() * starsCanvas.width,
    y: Math.random() * starsCanvas.height,
    radius: Math.random() * 1.5 + 0.5,
    speed: Math.random() * 0.5 + 0.2
  }));
  
  // Draw particles
  function drawParticles() {
    particlesCtx.clearRect(0, 0, particlesCanvas.width, particlesCanvas.height);
    
    particles.forEach(p => {
      particlesCtx.beginPath();
      particlesCtx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      particlesCtx.fillStyle = p.color;
      particlesCtx.shadowColor = p.color;
      particlesCtx.shadowBlur = 12;
      particlesCtx.fill();
      
      p.y += p.speedY;
      if (p.y > particlesCanvas.height) {
        p.y = 0;
        p.x = Math.random() * particlesCanvas.width;
      }
    });
    
    requestAnimationFrame(drawParticles);
  }
  
  // Draw stars
  function drawStars() {
    starsCtx.clearRect(0, 0, starsCanvas.width, starsCanvas.height);
    starsCtx.fillStyle = "#ffffff33";
    
    stars.forEach(star => {
      starsCtx.beginPath();
      starsCtx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      starsCtx.fill();
      
      star.y += star.speed;
      if (star.y > starsCanvas.height) star.y = 0;
    });
    
    requestAnimationFrame(drawStars);
  }
  
  drawParticles();
  drawStars();
  
  // Copy email functionality
  const copyEmailBtn = document.getElementById('copy-email-btn');
  const emailTooltip = document.getElementById('email-tooltip');
  
  copyEmailBtn.addEventListener('click', () => {
    const email = "gonzalezmiguel2000@gmail.com";
    navigator.clipboard.writeText(email)
      .then(() => {
        emailTooltip.classList.add('visible');
        setTimeout(() => {
          emailTooltip.classList.remove('visible');
        }, 2000);
      })
      .catch(() => {
        alert(translations[currentLanguage]['contact.email.error']);
      });
  });
  
  // Intersection Observer for fade-in animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('appear');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });
});