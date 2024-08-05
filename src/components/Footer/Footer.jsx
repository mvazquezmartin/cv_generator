import { useTranslation } from 'react-i18next';
import { SVG_githubIcon } from '@/assets/svg';
import './footer.css';

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer>
      <div className="bg-absolute"></div>
      <div></div>
      <div className="footerby">
        <p>
          {t('footer.by')}
          <a href="https://github.com/mvazquezmartin" target="_blank">
            M. Vazquez Martin
          </a>
        </p>
        <div className="github-container">
          <a href="https://github.com/mvazquezmartin/cv_generator" target='_blank'>
            <SVG_githubIcon />
          </a>
        </div>
      </div>
    </footer>
  );
};
