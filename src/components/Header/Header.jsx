import { LanguageHandler } from '../LanguageHandler/LanguageHandler';
import {
  SVG_downloadIcon,
  SVG_logo,
  SVG_preview,
  SVG_reset,
} from '@/assets/svg';
import { useTranslation } from 'react-i18next';
import { PDFDocument } from '@/pages/CreateCV/CVDesign';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { useNavigate } from 'react-router-dom';
import './header.css';
import { useContext } from 'react';
import { CVContext } from '@/context/CVContext';

export const Header = ({
  showBtn,
  name,
  contact,
  description,
  experiences,
  education,
  skills,
  fixed,
}) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const handlePreviewClick = () => {
    navigate('/pdfpreview');
  };
  const { resetCvData } = useContext(CVContext);
  return (
    <header className={fixed ? 'header-fixed' : ''}>
      <div className="header-flex">
        <div className="logo-header">
          <a href="/">
            <SVG_logo />
          </a>
        </div>
        <div className="language-download">
          {showBtn ? (
            <LanguageHandler />
          ) : (
            <div className="btn-header-container">
              <button onClick={resetCvData} className="btn-reset">
                <SVG_reset />
                {t('header.reset')}
              </button>
              <button onClick={handlePreviewClick} className="btn-preview">
                <SVG_preview /> {t('header.preview')}
              </button>
              <PDFDownloadLink
                document={
                  <PDFDocument
                    name={name}
                    contact={contact}
                    description={description}
                    experiences={experiences}
                    education={education}
                    skills={skills}
                  />
                }
                fileName={`cv_${name.split(' ').join('_')}.pdf`}
              >
                <button className="btn-download">
                  <SVG_downloadIcon />
                  {t('header.btnDownload')}
                </button>
              </PDFDownloadLink>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
