import { LanguageHandler } from '../LanguageHandler/LanguageHandler';
import { SVG_downloadIcon } from '@/assets/svg';
import { useTranslation } from 'react-i18next';
import { PDFDocument } from '@/pages/CreateCV/CVDesign';
import './header.css';
import { PDFDownloadLink } from '@react-pdf/renderer';

export const Header = ({ showBtn, name, contact, experiences }) => {
  const { t } = useTranslation();
  return (
    <header>
      <div className="header-flex">
        <div className="logo-header">
          <a href="/">INICIO</a>
        </div>
        <div className="language-download">
          {showBtn ? (
            <LanguageHandler />
          ) : (
            <PDFDownloadLink
              document={
                <PDFDocument
                  name={name}
                  contact={contact}
                  experiences={experiences}
                />
              }
              fileName={`cv_${name.split(' ').join('_')}.pdf`}
            >
              <button className="btn-download">
                <SVG_downloadIcon />
                {t('header.btnDownload')}
              </button>
            </PDFDownloadLink>
          )}
        </div>
      </div>
    </header>
  );
};
