import { createContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const DEFAULT_CV_DATA = {
  name: 'M. Vazquez Martin',
  contact: {
    location: 'Rosario, Santa Fe, Argentina',
    linkedin: 'linkedin.com/in/matiasvazquezmartin/',
    portfolio: 'mvazquezmartin.up.railway.app/',
    phone: '+54 341 12 34 56',
    email: 'mvazquezmartin@gmail.com',
  },
  description: '',
  experiences: [
    { id: uuidv4(), title: 'Trabajo 1', tasks: ['función 1', 'función 2'] },
    { id: uuidv4(), title: 'Trabajo 2', tasks: ['función 3', 'función 4'] },
  ],
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
