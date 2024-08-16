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
            company: 'Another company',
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
            company: 'Another company',
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
      FAQ: {
        firstQ: {
          title: 'Why Use the Harvard College Bullet Point Resume Template?',
          subtitle1: 'The Standard of Excellence',
          answer1:
            'The Harvard College Bullet Point Resume template was designed by experts at Harvard University, one of the world’s most prestigious educational institutions. It’s specifically created to highlight the best of your experience, skills, and accomplishments in a clear and concise manner, meeting the highest expectations of employers.',
          subtitle2: 'Clarity and Organization',
          answer2:
            'This format focuses on clarity and the organization of information. The key points of your work experience and skills are presented in bullet-point format, making it easy for recruiters and employers to quickly identify your most important qualities. This structure is particularly useful for those with diverse experience who need to show their value directly and effectively.',
          subtitle3: 'Achievement-Oriented',
          answer3:
            'The template emphasizes your accomplishments in each role, rather than daily tasks. This results-oriented approach is crucial in competitive selection processes, where highlighting your achievements can make the difference between being hired or not.',
        },
        secondQ: {
          title: 'Advantages of Using the Template',
          subtitle1: 'Professionalism and Simplicity',
          answer1:
            'The template combines a clean, professional design with a simplified approach, allowing your information to be presented effectively without unnecessary distractions. It’s ideal for both those with extensive experience and those just starting their careers who need to highlight key skills and achievements.',
          subtitle2: 'Adaptability',
          answer2:
            'Although based on a proven design, this template is flexible enough to be customized to the needs of different industries and experience levels. You can easily adapt it to fit positions in technology, finance, marketing, education, and more.',
          subtitle3: 'Efficiency in the Hiring Process',
          answer3:
            'Since many employers are familiar with this format, using it can streamline the selection process. The standardized structure makes it easier to quickly review and compare candidates, which can give you a competitive edge.',
        },
        thirdQ: {
          title: 'When Should You Use This Template?',
          subtitle1: 'Applications in Traditional Industries',
          answer1:
            'This format is particularly well-suited for industries like finance, consulting, and law, where clarity, conciseness, and a focus on achievements are highly valued. If you’re applying for roles in these sectors, this template can help you stand out.',
          subtitle2: 'Highly Competitive Selection Processes',
          answer2:
            'In situations where you face intense competition for a position, using a well-structured resume that focuses on specific achievements can be a decisive factor. This template is designed to showcase your potential in such contexts.',
          subtitle3: 'If You Need to Highlight Specific Achievements',
          answer3:
            'If your experience includes standout achievements that set you apart from other candidates, this format is ideal. It allows you to draw attention to those achievements without losing clarity in the overall presentation of your resume.',
        },
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
      FAQ: {
        firstQ: {
          title:
            '¿Por qué usar la plantilla Harvard College Bullet Point Resume?',
          subtitle1: 'El estándar de excelencia',
          answer1:
            'La plantilla Harvard College Bullet Point Resume ha sido diseñada por expertos en la Universidad de Harvard, una de las instituciones educativas más prestigiosas del mundo. Está específicamente creada para destacar lo mejor de tu experiencia, habilidades y logros de manera clara y concisa, cumpliendo con las expectativas más altas de los empleadores.',
          subtitle2: 'Claridad y organización',
          answer2:
            'Este formato se centra en la claridad y la organización de la información. Los puntos clave de tu experiencia laboral y habilidades están presentados en formato de viñetas, lo que facilita a los reclutadores y empleadores identificar rápidamente tus cualidades más importantes. Esta estructura es especialmente útil para aquellos con experiencia diversa que necesitan mostrar su valor de manera directa y efectiva.',
          subtitle3: 'Enfocado en logros',
          answer3:
            'La plantilla enfatiza tus logros en cada posición que has ocupado, más que en las tareas cotidianas. Este enfoque orientado a resultados es crucial en procesos de selección competitivos, donde destacar tus logros puede ser la diferencia entre ser contratado o no.',
        },
        secondQ: {
          title: 'Ventajas de usar la plantilla',
          subtitle1: 'Profesionalismo y simplicidad',
          answer1:
            'La plantilla combina un diseño limpio y profesional con un enfoque simplificado, permitiendo que tu información se presente de manera efectiva sin distracciones innecesarias. Es ideal tanto para quienes tienen amplia experiencia como para aquellos que recién comienzan su carrera y necesitan destacar habilidades y logros clave.',
          subtitle2: 'Adaptabilidad',
          answer2:
            'Aunque está basada en un diseño probado, esta plantilla es lo suficientemente flexible como para ser personalizada según las necesidades de diferentes industrias y niveles de experiencia. Puedes adaptarla fácilmente para ajustarse a posiciones en tecnología, finanzas, marketing, educación, y más.',
          subtitle3: 'Eficiencia en el proceso de contratación',
          answer3:
            'Dado que muchos empleadores están familiarizados con este formato, su uso puede agilizar el proceso de selección. La estructura estandarizada facilita la revisión rápida y la comparación de candidatos, lo que puede darte una ventaja competitiva.',
        },
        thirdQ: {
          title: '¿Cuándo deberías usar esta plantilla?',
          subtitle1: 'Aplicaciones en industrias tradicionales',
          answer1:
            'Este formato es especialmente adecuado para industrias como finanzas, consultoría, y derecho, donde se valora la claridad, la concisión y un enfoque orientado a los logros. Si estás aplicando a roles en estos sectores, esta plantilla puede ayudarte a destacar.',
          subtitle2: 'Procesos de selección altamente competitivos',
          answer2:
            'En situaciones donde te enfrentas a una competencia intensa por un puesto, el uso de un CV bien estructurado y enfocado en logros específicos puede ser un factor decisivo. Esta plantilla está diseñada para resaltar tu potencial en esos contextos.',
          subtitle3: 'Si necesitas destacar logros específicos',
          answer3:
            'Si tu experiencia incluye logros destacados que te diferencian de otros candidatos, este formato es ideal. Te permite enfocar la atención en esos logros sin perder la claridad en la presentación general de tu CV.',
        },
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
