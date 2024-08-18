import { createContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';

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

  const handleNameChange = (field, value) => {
    setCvData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleContactChange = (field, value) => {
    setCvData((prevData) => ({
      ...prevData,
      contact: {
        ...prevData.contact,
        [field]: value,
      },
    }));
  };

  const handleDescriptionChange = (description) => {
    setCvData((prevData) => ({
      ...prevData,
      description,
    }));
  };

  const addExperience = () => {
    setCvData((prevData) => ({
      ...prevData,
      experiences: [
        ...prevData.experiences,
        {
          id: uuidv4(),
          company: t('cv_builder.defaultCompany'),
          location: t('cv_builder.defaultLocation'),
          position: t('cv_builder.defaultPosition'),
          startDate: t('cv_builder.defaultStartDate'),
          endDate: t('cv_builder.defaultEndDate'),
          tasks: [t('cv_builder.defaultTask1'), t('cv_builder.defaultTask2')],
        },
      ],
    }));
  };

  const removeExperience = (id) => {
    setCvData((prevData) => ({
      ...prevData,
      experiences: prevData.experiences.filter(
        (experience) => experience.id !== id
      ),
    }));
  };

  const addTask = (experienceIndex) => {
    setCvData((prevData) => {
      const newExperiences = [...prevData.experiences];
      newExperiences[experienceIndex].tasks.push('- ');
      return {
        ...prevData,
        experiences: newExperiences,
      };
    });
  };

  const removeTask = (experienceIndex, taskIndex) => {
    setCvData((prevData) => {
      const newExperiences = [...prevData.experiences];
      newExperiences[experienceIndex].tasks = newExperiences[
        experienceIndex
      ].tasks.filter((task, index) => index !== taskIndex);
      return {
        ...prevData,
        experiences: newExperiences,
      };
    });
  };

  const addEducation = () => {
    setCvData((prevData) => ({
      ...prevData,
      education: [
        ...prevData.education,
        {
          id: uuidv4(),
          institution: t('cv_builder.defaultInstitution'),
          location: t('cv_builder.defaultEducationLocation'),
          title: t('cv_builder.defaultTitle'),
          date: t('cv_builder.defaultDate'),
        },
      ],
    }));
  };

  const removeEducation = (id) => {
    setCvData((prevData) => ({
      ...prevData,
      education: prevData.education.filter((education) => education.id !== id),
    }));
  };

  const addSkill = () => {
    setCvData((prevData) => ({
      ...prevData,
      skills: [...prevData.skills, t('cv_builder.defaultSkill')],
    }));
  };

  const removeSkill = (index) => {
    setCvData((prevData) => ({
      ...prevData,
      skills: prevData.skills.filter((_, skillIndex) => skillIndex !== index),
    }));
  };

  const value = {
    cvData,
    setCvData,
    resetCvData,
    handleNameChange,
    handleContactChange,
    handleDescriptionChange,
    addExperience,
    removeExperience,
    addTask,
    removeTask,
    addEducation,
    removeEducation,
    addSkill,
    removeSkill,
    changeLanguage: i18n.changeLanguage,
  };

  return <CVContext.Provider value={value}>{children}</CVContext.Provider>;
};
