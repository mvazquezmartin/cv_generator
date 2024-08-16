import { createContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const CVContext = createContext();

export const CVProvider = ({ children }) => {
  const { i18n, t } = useTranslation();
  const [cvData, setCvData] = useState(() => {
    const savedData = localStorage.getItem('cvData');
    return savedData
      ? JSON.parse(savedData)
      : t('CV_TEMPLATE', { returnObjects: true });
  });

  useEffect(() => {
    const cleanUpEmptyTasks = (data) => {
      return {
        ...data,
        experiences: data.experiences.map((experience) => ({
          ...experience,
          tasks: experience.tasks.filter((task) => task.trim() !== ''),
        })),
      };
    };

    const cleanedData = cleanUpEmptyTasks(cvData);
    localStorage.setItem('cvData', JSON.stringify(cleanedData));
  }, [cvData]);

  useEffect(() => {
    if (!localStorage.getItem('cvData')) {
      const updatedCvData = t('CV_TEMPLATE', { returnObjects: true });
      setCvData(updatedCvData);
    }
  }, [i18n.language]);

  const resetCvData = () => {
    const defaultData = t('CV_TEMPLATE', { returnObjects: true });
    setCvData(defaultData);
    localStorage.setItem('cvData', JSON.stringify(defaultData));
  };

  const value = {
    cvData,
    setCvData,
    resetCvData,
    changeLanguage: i18n.changeLanguage,
  };

  return <CVContext.Provider value={value}>{children}</CVContext.Provider>;
};
