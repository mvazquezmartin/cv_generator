import { useTranslation } from 'react-i18next';
import { SVG_USAFlag, SVG_ArgentinaFlag } from '@/assets/svg';
import './language.css';

export const LanguageHandler = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lgn) => {
    i18n.changeLanguage(lgn);
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
