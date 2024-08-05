import { LanguageHandler } from '../LanguageHandler/LanguageHandler';
import { SVG_downloadIcon, SVG_preview } from '@/assets/svg';
import { useTranslation } from 'react-i18next';
import { PDFDocument } from '@/pages/CreateCV/CVDesign';
import { PDFDownloadLink } from '@react-pdf/renderer';
import './header.css';
import { useNavigate } from 'react-router-dom';

export const Header = ({
  showBtn,
  name,
  contact,
  description,
  experiences,
  education,
  skills,
}) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const handlePreviewClick = () => {
    navigate('/pdfpreview');
  };
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
            <div className="btn-header-container">
              <button onClick={handlePreviewClick} className="btn-preview">
                <SVG_preview /> {t('cvBuilder.preview')}
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
