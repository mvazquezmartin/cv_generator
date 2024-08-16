import { useContext } from 'react';
import { CVContext } from '@/context/CVContext';
import { Header } from '@/components/Header/Header';
import { NameSection } from '@/pages/CreateCV/NameSection/NameSection';
import { ContactSection } from '@/pages/CreateCV/ContactSection/ContactSection';
import { DescriptionSection } from '@/pages/CreateCV/DescriptionSection/DescriptionSection';
import { ExperienceSection } from '@/pages/CreateCV/ExperienceSection/ExperienceSection';
import { EducationSection } from '@/pages/CreateCV/EducationSection/EducationSection';
import { SkillsSection } from '@/pages/CreateCV/SkillsSection/SkillsSection';
import './CVBuilder.css';

export const CVBuilder = () => {
  const { cvData } = useContext(CVContext);

  return (
    <>
      <Header showBtn={false} fixed={true} cvData={cvData} />
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
