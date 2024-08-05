import { createContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const DEFAULT_CV_DATA = {
  name: 'M. Vazquez Martin',
  position: 'Desarrollador FullStack MERM',
  contact: {
    location: 'Rosario, Santa Fe, Argentina',
    linkedin: 'linkedin.com/in/matiasvazquezmartin/',
    portfolio: 'mvazquezmartin.up.railway.app/',
    phone: '+54 341 12 34 56',
    email: 'mvazquezmartin@gmail.com',
  },
  description:
    'Más de 15 años de experiencia como Desarrollador de Software. Lideré el desarrollo FrontEnd en Adevinta, logrando un 40% de mejora en la entrega de productos, un 25% en rendimiento web y una plataforma unificada. Como Divulgador, tengo el canal de programación más visto de Twitch en español.',
  experiences: [
    {
      id: uuidv4(),
      company: 'Empresa 1',
      location: 'Rosario, Argentina',
      position: 'Desarrollador',
      startDate: 'Agosto 2017',
      endDate: 'Septiembre 2020',
      tasks: ['- función 1', '- función 2'],
    },
    {
      id: uuidv4(),
      company: 'Empresa 2',
      location: 'Buenos Aires, Argentina',
      position: 'Ingeniero de Software',
      startDate: 'Octubre 2020',
      endDate: 'Presente',
      tasks: ['- función 3', '- función 4'],
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
  skills: ['- Ingles Fluido', '- Frontend & Backend technologies'],
};

export const CVContext = createContext();

export const CVProvider = ({ children }) => {
  const [cvData, setCvData] = useState(DEFAULT_CV_DATA);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('cvData'));
    if (savedData) {
      setCvData(savedData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cvData', JSON.stringify(cvData));
  }, [cvData]);

  const value = {
    cvData,
    setCvData,
  };

  return <CVContext.Provider value={value}>{children}</CVContext.Provider>;
};
