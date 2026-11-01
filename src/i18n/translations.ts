export const translations = {
  es: {
    header: {
      nav: [
        { label: 'Sobre mí', id: 'about' },
        { label: 'Proyectos', id: 'projects' },
        { label: 'Skills', id: 'skills' },
        { label: 'Experiencia', id: 'experience' },
        { label: 'Formación', id: 'education' },
        { label: 'Contacto', id: 'contact' },
      ],
      cv: 'CV',
      menu: 'Abrir menú',
    },
    hero: {
      greeting: 'Hola, soy',
      name: 'Brian',
      title1: 'Desarrollador',
      title2: '.NET',
      subtitle:
        'Especializado en .NET Core y C#. Desarrollo sistemas escalables y de alto rendimiento, con foco en APIs REST, asincronía y gestión de bases de datos en SQL Server.',
      downloadCV: 'Descargar CV',
      viewProjects: 'Ver proyectos',
    },
    about: {
      heading: 'Sobre mí',
      headline: 'FullStack .NET para sistemas de alto rendimiento',
      p1: 'Soy desarrollador Full Stack con especialización en .NET Core y experiencia en sistemas escalables y de alto rendimiento. Actualmente trabajo en',
      p1company: 'Traditum',
      p1end:
        ', donde desarrollo APIs y lógica de negocio con ASP.NET Core y C#, sobre sistemas productivos en los que aplico mejoras de performance, mantenimiento evolutivo e integraciones complejas.',
      p2: 'Mi fuerte es el backend con C#, asincronía (async/await), LINQ y gestión de bases de datos en SQL Server. Conozco arquitecturas modernas, APIs REST, patrones de diseño y desarrollo fullstack con React, y estoy familiarizado con entornos cloud y bases de datos relacionales y NoSQL. Desarrollo soluciones end-to-end, desde el diseño hasta la implementación en producción.',
      stats: [
        { value: '+2', label: 'Años de experiencia' },
        { value: '.NET', label: 'Especialización' },
        { value: 'B2', label: 'Nivel de inglés' },
      ],
    },
    projects: {
      heading: 'Proyectos',
      subtitle: 'Soluciones end-to-end, del diseño a producción',
      demo: 'Demo',
      code: 'Código',
      items: [
        {
          name: 'Sistema de reservas',
          description: 'Aplicación fullstack tipo SaaS con arquitectura serverless, en desarrollo desde enero de 2026.',
          impact: 'Diseño orientado a escalabilidad y experiencia de usuario.',
          highlights: [
            'Arquitectura serverless con Next.js y Supabase.',
            'Implementación de lógica de disponibilidad y validación de turnos.',
            'Integración con servicios externos (WhatsApp).',
            'Gestión de base de datos PostgreSQL.',
          ],
        },
      ],
    },
    skills: {
      heading: 'Skills',
      subtitle: 'Stack técnico y competencias profesionales',
      groups: [
        {
          label: 'Backend',
          subLabel: 'APIs y lógica de negocio',
          skills: ['.NET Core', 'ASP.NET Core', 'C#', 'Entity Framework Core', 'LINQ', 'APIs REST'],
        },
        {
          label: 'Bases de datos',
          subLabel: 'Relacionales y NoSQL',
          skills: ['SQL Server', 'T-SQL', 'Optimización de queries', 'Índices', 'MongoDB', 'PostgreSQL', 'MySQL'],
        },
        {
          label: 'Frontend',
          subLabel: 'Interfaces y experiencia de usuario',
          skills: ['Razor', 'ASP.NET', 'HTML', 'CSS', 'JavaScript', 'jQuery', 'React'],
        },
        {
          label: 'Herramientas',
          subLabel: 'Forma de trabajo',
          skills: ['AWS (conceptos de serverless)', 'Git', 'Azure DevOps', 'Postman', 'Scrum', 'Jira'],
        },
      ],
    },
    experience: {
      heading: 'Experiencia',
      subtitle: 'Trayectoria profesional como desarrollador Full-Stack .NET',
      items: [
        {
          role: 'Desarrollador Full-Stack (.NET + React)',
          company: 'Traditum S.A',
          year: 'Nov 2024 – Actualidad',
          highlights: [
            'Desarrollo backend con ASP.NET Core y C#, implementando APIs y lógica de negocio.',
            'Optimización de consultas SQL Server y mejora de performance en procesos críticos.',
            'Desarrollo de interfaces dinámicas con React.',
            'Integración de sistemas y mantenimiento evolutivo de aplicaciones productivas.',
            'Trabajo bajo metodologías ágiles (Scrum) con Azure DevOps.',
          ],
        },
        {
          role: 'Desarrollador Full-Stack',
          company: 'Proyectos Personales',
          year: '2024 – Actualidad',
          highlights: [
            'Desarrollo de interfaces modernas con React, Next.js, TailwindCSS, Vite y TypeScript.',
            'Consumo de APIs con Axios y Fetch, y manejo de estado con Hooks y Context API.',
            'Integración de rutas, formularios dinámicos, validaciones, dashboards y visualizaciones.',
            'Desarrollo backend con Node.js y Express, con manejo de sesiones y cookies.',
          ],
        },
      ],
    },
    education: {
      heading: 'Formación',
      subtitle: 'Estudios e idiomas',
      languagesLabel: 'Idiomas',
      items: [
        { title: 'AI Engineer', institution: 'Scrimba', year: '2026 – Actualidad' },
        {
          title: 'DevOps con Docker',
          year: 'En curso',
          note: 'Contenedores, imágenes, volúmenes y logs.',
        },
        {
          title: 'AWS',
          year: 'En curso',
          note: 'EC2, RDS, S3 y Lambda. En proceso de obtención del certificado.',
        },
        { title: 'Analista de Sistemas', institution: 'IESXXI', year: '2023 – 2026' },
        {
          title: 'Desarrollo Web con React',
          institution: 'CoderHouse',
          year: 'Mar 2022 – Oct 2022',
          note: 'Programa intensivo de más de 600 horas: HTML, CSS, JavaScript, React, Git y Firebase.',
        },
      ],
      languages: [
        { name: 'Español', level: 'Nativo' },
        { name: 'Inglés', level: 'B2' },
      ],
    },
    contact: {
      heading: 'Hablemos',
      subtitle: '¿Tenés un proyecto o una oportunidad laboral? Escribime y lo conversamos.',
      viewProfile: 'Ver perfil',
      viewProjects: 'Ver proyectos',
    },
    footer: {
      thanks: 'Gracias por visitar mi portfolio.',
      backToTop: 'Volver arriba',
      copyright: '© 2026 Brian. Todos los derechos reservados.',
    },
  },

  en: {
    header: {
      nav: [
        { label: 'About', id: 'about' },
        { label: 'Projects', id: 'projects' },
        { label: 'Skills', id: 'skills' },
        { label: 'Experience', id: 'experience' },
        { label: 'Education', id: 'education' },
        { label: 'Contact', id: 'contact' },
      ],
      cv: 'CV',
      menu: 'Open menu',
    },
    hero: {
      greeting: "Hi, I'm",
      name: 'Brian',
      title1: '.NET',
      title2: 'Developer',
      subtitle:
        'Specialized in .NET Core and C#. I build scalable, high-performance systems, focused on REST APIs, asynchronous programming and SQL Server database management.',
      downloadCV: 'Download CV',
      viewProjects: 'View projects',
    },
    about: {
      heading: 'About me',
      headline: 'FullStack .NET for high-performance systems',
      p1: "I'm a Full Stack developer specialized in .NET Core, with experience in scalable, high-performance systems. I currently work at",
      p1company: 'Traditum',
      p1end:
        ', where I build APIs and business logic with ASP.NET Core and C# on production systems, delivering performance improvements, ongoing maintenance and complex integrations.',
      p2: 'My strength is backend work with C#, asynchronous programming (async/await), LINQ and SQL Server database management. I know modern architectures, REST APIs, design patterns and fullstack development with React, and I am familiar with cloud environments and relational and NoSQL databases. I deliver end-to-end solutions, from design to production.',
      stats: [
        { value: '+2', label: 'Years of experience' },
        { value: '.NET', label: 'Specialization' },
        { value: 'B2', label: 'English level' },
      ],
    },
    projects: {
      heading: 'Projects',
      subtitle: 'End-to-end solutions, from design to production',
      demo: 'Demo',
      code: 'Code',
      items: [
        {
          name: 'Booking System',
          description: 'SaaS-style fullstack application with a serverless architecture, in development since January 2026.',
          impact: 'Designed for scalability and user experience.',
          highlights: [
            'Serverless architecture with Next.js and Supabase.',
            'Availability logic and appointment validation.',
            'Integration with external services (WhatsApp).',
            'PostgreSQL database management.',
          ],
        },
      ],
    },
    skills: {
      heading: 'Skills',
      subtitle: 'Technical stack and professional competencies',
      groups: [
        {
          label: 'Backend',
          subLabel: 'APIs and business logic',
          skills: ['.NET Core', 'ASP.NET Core', 'C#', 'Entity Framework Core', 'LINQ', 'REST APIs'],
        },
        {
          label: 'Databases',
          subLabel: 'Relational and NoSQL',
          skills: ['SQL Server', 'T-SQL', 'Query optimization', 'Indexes', 'MongoDB', 'PostgreSQL', 'MySQL'],
        },
        {
          label: 'Frontend',
          subLabel: 'Interfaces and user experience',
          skills: ['Razor', 'ASP.NET', 'HTML', 'CSS', 'JavaScript', 'jQuery', 'React'],
        },
        {
          label: 'Tools',
          subLabel: 'How I work',
          skills: ['AWS (serverless concepts)', 'Git', 'Azure DevOps', 'Postman', 'Scrum', 'Jira'],
        },
      ],
    },
    experience: {
      heading: 'Experience',
      subtitle: 'Professional journey as a Full-Stack .NET developer',
      items: [
        {
          role: 'Full-Stack Developer (.NET + React)',
          company: 'Traditum S.A',
          year: 'Nov 2024 – Present',
          highlights: [
            'Backend development with ASP.NET Core and C#, implementing APIs and business logic.',
            'SQL Server query optimization and performance improvements in critical processes.',
            'Development of dynamic interfaces with React.',
            'System integration and ongoing maintenance of production applications.',
            'Agile work (Scrum) with Azure DevOps.',
          ],
        },
        {
          role: 'Full-Stack Developer',
          company: 'Personal Projects',
          year: '2024 – Present',
          highlights: [
            'Development of modern interfaces with React, Next.js, TailwindCSS, Vite and TypeScript.',
            'API consumption with Axios and Fetch, and state management with Hooks and Context API.',
            'Integration of routing, dynamic forms, validations, dashboards and data visualizations.',
            'Backend development with Node.js and Express, including session and cookie handling.',
          ],
        },
      ],
    },
    education: {
      heading: 'Education',
      subtitle: 'Studies and languages',
      languagesLabel: 'Languages',
      items: [
        { title: 'AI Engineer', institution: 'Scrimba', year: '2026 – Present' },
        {
          title: 'DevOps with Docker',
          year: 'In progress',
          note: 'Containers, images, volumes and logs.',
        },
        {
          title: 'AWS',
          year: 'In progress',
          note: 'EC2, RDS, S3 and Lambda. Currently working toward the certification.',
        },
        { title: 'Systems Analyst', institution: 'IESXXI', year: '2023 – 2026' },
        {
          title: 'Web Development with React',
          institution: 'CoderHouse',
          year: 'Mar 2022 – Oct 2022',
          note: 'Intensive program of over 600 hours: HTML, CSS, JavaScript, React, Git and Firebase.',
        },
      ],
      languages: [
        { name: 'Spanish', level: 'Native' },
        { name: 'English', level: 'B2' },
      ],
    },
    contact: {
      heading: "Let's talk",
      subtitle: 'Have a project or a job opportunity? Write to me and we can discuss it.',
      viewProfile: 'View profile',
      viewProjects: 'View projects',
    },
    footer: {
      thanks: 'Thanks for visiting my portfolio.',
      backToTop: 'Back to top',
      copyright: '© 2026 Brian. All rights reserved.',
    },
  },
} as const;

export type Translations = typeof translations;
