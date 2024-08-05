import { useTranslation } from 'react-i18next';
import { SVG_USAFlag, SVG_ArgentinaFlag } from '@/assets/svg';
import './language.css';
import { useContext } from 'react';
import { CVContext } from '@/context/CVContext';

export const LanguageHandler = () => {
  const { i18n } = useTranslation();
  const { resetCvData } = useContext(CVContext);

  const changeLanguage = (lgn) => {
    i18n.changeLanguage(lgn);
    resetCvData();
  };

  return (
    <div className="language-handler">
      <button className="dropdown-toggle">
        {i18n.language === 'en' ? <SVG_USAFlag /> : <SVG_ArgentinaFlag />}
      </button>
      <div className="dropdown-menu">
        <button onClick={() => changeLanguage('en')}>
          <SVG_USAFlag />
          ENG
        </button>
        <button onClick={() => changeLanguage('es')}>
          <SVG_ArgentinaFlag />
          ESP
        </button>
      </div>
    </div>
  );
};
