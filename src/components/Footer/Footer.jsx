import { useTranslation } from 'react-i18next';
import { SVG_githubIcon } from '@/assets/svg';
import './footer.css';
import { useNavigate } from 'react-router-dom';

export const Footer = ({ showBg = true }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/faq');
  };
  return (
    <footer>
      {showBg && (
        <>
          <div className="bg-absolute"></div>
          <div className="faq" onClick={handleNavigate}>
            {t('FAQ.firstQ.title')}
          </div>
        </>
      )}
      <div className="footerby">
        <p>
          {t('footer.by')}
          <a href="https://github.com/mvazquezmartin" target="_blank">
            M. Vazquez Martin
          </a>
        </p>
        <div className="github-container">
          <a
            href="https://github.com/mvazquezmartin/cv_generator"
            target="_blank"
          >
            <SVG_githubIcon />
          </a>
        </div>
      </div>
    </footer>
  );
};
