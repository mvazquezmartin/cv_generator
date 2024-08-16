import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { v4 as uuidv4 } from 'uuid';

const resources = {
  en: {
    translation: {
      header: { btnDownload: 'Download', preview: 'Preview', reset: 'Reset' },
      home: {
        title: {
          first: 'The simplest way to build a',
          second: 'Professional CV',
        },
        description:
          'Quickly build a customizable CV with our easy-to-use editing features, inspired by the Harvard College Bullet Point Resume Template.',
        button: 'Get Started',
      },
      footer: {
        by: 'Made with ♡ by ',
      },
      cv: {
        experience: 'PROFESSIONAL EXPERIENCE',

        education: 'EDUCATION',
        skills: 'ADDITIONAL SKILLS',
      },
      cv_builder: {
        defaultCompany: 'Company or project name',
        defaultLocation: 'Location',
        defaultPosition: 'Position or project URL',
        defaultStartDate: 'Start Date',
        defaultEndDate: 'End Date',
        defaultTask1: '- Press Enter to create',
        defaultTask2: '- a new field',
        defaultInstitution: 'New Institution',
        defaultEducationLocation: 'New Location',
        defaultTitle: 'New Title',
        defaultDate: 'New Date',
        defaultSkill: '- New Skill',
      },
      CV_TEMPLATE: {
        name: 'M. Vazquez Martin',
        position: 'FullStack MERN Developer',
        contact: {
          location: 'Rosario, Santa Fe, Argentina',
          linkedin: 'linkedin.com/in/matiasvazquezmartin/',
          portfolio: 'mvazquezmartin.up.railway.app/',
          phone: '+54 341 12 34 56',
          email: 'matias.vazquezmartin@gmail.com',
        },
        description:
          'With over 5 years of experience as a Software Developer, I have led BackEnd projects at Mercado Libre. Thanks to my management, a 40% optimization in product delivery times was achieved, a 25% increase in web page performance, and the consolidation of a centralized platform.',
        experiences: [
          {
            id: uuidv4(),
            company: 'Mercado Libre',
            location: 'Buenos Aires, Argentina',
            position: 'Lead BackEnd Architect',
            startDate: 'October 2020',
            endDate: 'Present',
            tasks: [
              "- Developed a unified platform of components and tools for the company's various products to technically converge and accelerate product delivery.",
              '- Implemented CI/CD practices to improve software delivery efficiency, reducing errors and delivery times, lowering deployment times by over 80%.',
              '- Led the web performance improvement of products by mentoring with best practices, creating DataDog dashboards, and designing strategies.',
              '- Built the cookie management tool across all products to comply with user consent laws.',
              '- Provided pioneering solutions such as using Ship/Show/Ask as a work strategy on GitHub, using Rust to speed up compilations, parallelizing CI jobs to save time and costs, and exploring AWS solutions for better scalability.',
            ],
          },
          {
            id: uuidv4(),
            company: 'Otra empresa',
            location: 'Rosario, Argentina',
            position: 'FullStack Developer',
            startDate: 'August 2017',
            endDate: 'September 2020',
            tasks: [
              '- Use action verbs: Optimize, Improve, Develop, Implement, Design, Facilitate, Integrate',
              "- Show numbers, as they grab the reader's attention",
              "- If you don't have professional experience, show and explain in detail a project you have worked on, using the same action verbs.",
            ],
          },
          {
            id: uuidv4(),
            company: 'Otra empresa',
            location: 'Rosario, Argentina',
            position: 'FrontEnd Developer',
            startDate: 'January 2015',
            endDate: 'July 2017',
            tasks: [
              '- The more distant the job, the less important to highlight the points',
              '- They can be shorter phrases but use them wisely',
            ],
          },
        ],
        education: [
          {
            id: uuidv4(),
            institution: 'CoderHouse',
            location: 'Argentina',
            title: 'FullStack Dev',
            date: 'September 2022',
          },
          {
            id: uuidv4(),
            institution: 'ISEC N55',
            location: 'Rosario, Argentina',
            title: 'Higher Technician in Informatics',
            date: 'November 2018',
          },
        ],
        skills: [
          '- JavaScript, TypeScript, Astro, ReactJS, NodeJS, Express, SQL, NoSql, Git.',
          '- Native Spanish, fluent English.',
        ],
      },
    },
  },

  es: {
    translation: {
      header: {
        btnDownload: 'Descargar',
        preview: 'Previsualizar',
        reset: 'Reiniciar',
      },
      home: {
        title: {
          first: 'La manera más fácil de construir un',
          second: 'CV profesional',
        },
        description:
          'Construye rápidamente un CV a medida con nuestras funciones de edición fáciles de usar, inspiradas en la plantilla Harvard College Bullet Point Resume.',
        button: 'Empieza ahora',
      },
      footer: {
        by: 'Hecho con ♡ por ',
      },
      cvBuilder: {},
      cv: {
        experience: 'EXPERIENCIA PROFESIONAL',
        education: 'EDUCACIÓN',
        skills: 'HABILIDADES ADICIONALES',
      },
      cv_builder: {
        defaultCompany: 'Empresa o nombre del proyecto',
        defaultLocation: 'Localidad',
        defaultPosition: 'Puesto o URL del proyecto',
        defaultStartDate: 'Fecha de inicio',
        defaultEndDate: 'Fecha final',
        defaultTask1: '- Presiona Enter para',
        defaultTask2: '- Crear un nuevo campo',
        defaultInstitution: 'Nueva Institución',
        defaultEducationLocation: 'Nueva Ubicación',
        defaultTitle: 'Nuevo Título',
        defaultDate: 'Nueva Fecha',
        defaultSkill: '- Nueva habilidad',
      },
      CV_TEMPLATE: {
        name: 'M. Vazquez Martin',
        position: 'Desarrollador FullStack MERN',
        contact: {
          location: 'Rosario, Santa Fe, Argentina',
          linkedin: 'linkedin.com/in/matiasvazquezmartin/',
          portfolio: 'mvazquezmartin.up.railway.app/',
          phone: '+54 341 12 34 56',
          email: 'matias.vazquezmartin@gmail.com',
        },
        description:
          'Con más de 5 años de trayectoria como Desarrollador de Software, he liderado proyectos de BackEnd en Mercado Libre. Gracias a mi gestión, se logró una optimización del 40% en los tiempos de entrega de productos, un incremento del 25% en el rendimiento de las páginas web y la consolidación de una plataforma centralizada.',
        experiences: [
          {
            id: uuidv4(),
            company: 'Mercado Libre',
            location: 'Buenos Aires, Argentina',
            position: 'Arquitecto Principal de BackEnd',
            startDate: 'Octubre 2020',
            endDate: 'Presente',
            tasks: [
              '- Desarrollé una plataforma unificada de componentes y herramientas para los diferentes productos de la empresa para converger técnicamente y acelerar la entrega de producto.',
              '- Implementar prácticas de CI/CD para mejorar la eficiencia en la entrega de software, reduciendo errores y tiempos de entrega bajando los tiempos de despliegue más de un 80%.',
              '- Lideré la mejora del rendimiento web de productos mentorizando con mejores prácticas, creando dashboards de DataDog y diseñando estrategias.',
              '- Construí la herramienta de gestión de cookies de forma transversal para todos los productos para cumplir con  las leyes de consentimiento de permisos de los usuarios.',
              '- Aporté soluciones pioneras como usar Ship/Show/Ask como estrategia de trabajo en GitHub, el uso de Rust para acelerar las compilaciones, paralelizar trabajos en CI para el ahorro de tiempo y costes además de explorar soluciones en AWS para una mejorar escalabilidad.',
            ],
          },
          {
            id: uuidv4(),
            company: 'Otra empresa',
            location: 'Rosario, Argentina',
            position: 'Desarrollador FullStack',
            startDate: 'Agosto 2017',
            endDate: 'Septiembre 2020',
            tasks: [
              '- Usa verbos de acción: Optimizar, Mejorar, Desarrollar, Implementar, Diseñar, Facilitar, Integrar',
              '- Muestra números, ya que llaman mucho la atención de la persona que está leyendo',
              '- Si no tienes experiencia profesional, muestra y explica con todo lujo de detalles algún proyecto en el que hayas trabajado, usando los mismos verbos de acción.',
            ],
          },
          {
            id: uuidv4(),
            company: 'Otra empresa',
            location: 'Rosario, Argentina',
            position: 'Desarrollador FrontEnd',
            startDate: 'Enero 2015',
            endDate: 'Julio 2017',
            tasks: [
              '- Cuanto más lejano es el trabajo, menos importante destacar los puntos',
              '- Pueden ser frases más cortas pero úsalas sabiamente',
            ],
          },
        ],
        education: [
          {
            id: uuidv4(),
            institution: 'CoderHouse',
            location: 'Argentina',
            title: 'FullStack Dev',
            date: 'Septiembre 2022',
          },
          {
            id: uuidv4(),
            institution: 'ISEC N55',
            location: 'Rosario, Argentina',
            title: 'Técnico superior en informática',
            date: 'Noviembre 2018',
          },
        ],
        skills: [
          '- JavaScript, TypeScript, Astro, ReactJS, NodeJS, Express, SQL, NoSql, Git.',
          '- Ingles fluido, Español nativo.',
        ],
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
