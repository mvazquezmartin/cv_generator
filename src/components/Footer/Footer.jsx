import { useTranslation } from 'react-i18next';
import { SVG_githubIcon } from '@/assets/svg';
import './footer.css';

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer>
      <p>
        {t('footer.by')}
        <a href="https://github.com/mvazquezmartin" target="_blank">
          M. Vazquez Martin
        </a>
      </p>
      <div className="github-container">
        <SVG_githubIcon />
      </div>
    </footer>
  );
};
