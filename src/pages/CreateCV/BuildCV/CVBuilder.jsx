import { useContext } from 'react';
import { CVContext } from '@/context/CVContext';
import { Header } from '@/components/Header/Header';
import { NameSection } from '@/pages/CreateCV/BuildCV/NameSection/NameSection';
import { ContactSection } from '@/pages/CreateCV/BuildCV/ContactSection/ContactSection';
import { DescriptionSection } from '@/pages/CreateCV/BuildCV/DescriptionSection/DescriptionSection';
import { ExperienceSection } from '@/pages/CreateCV/BuildCV/ExperienceSection/ExperienceSection';
import { EducationSection } from '@/pages/CreateCV/BuildCV/EducationSection/EducationSection';
import { SkillsSection } from '@/pages/CreateCV/BuildCV/SkillsSection/SkillsSection';
import './CVBuilder.css';

export const CVBuilder = () => {
  const { cvData } = useContext(CVContext);

  return (
    <>
      <Header
        showBtn={false}
        name={cvData.name}
        contact={cvData.contact}
        description={cvData.description}
        experiences={cvData.experiences}
        education={cvData.education}
        skills={cvData.skills}
        fixed={true}
      />
      <div className="cv-builder-container">
        <div className="cv-builder">
          <NameSection cvData={cvData} />
          <ContactSection cvData={cvData} />
          <div className="divider-line"></div>
          <DescriptionSection cvData={cvData} />
          <ExperienceSection cvData={cvData} />
          <EducationSection cvData={cvData} />
          <SkillsSection cvData={cvData} />
        </div>
      </div>
    </>
  );
};
