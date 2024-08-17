import { PDFViewer } from '@react-pdf/renderer';
import { useNavigate } from 'react-router-dom';
import { PDFDocument } from '@/components/CVDesign/CVDesign';
import { SVG_arrowBack } from '@/assets/svg';
import './PDFView.css';

export const PDFPreview = () => {
  const navigate = useNavigate();
  const documentData = JSON.parse(localStorage.getItem('cvData')) || {};

  if (!documentData) {
    return <div>No hay datos para mostrar.</div>;
  }

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div
      style={{ height: '100vh', width: '100%' }}
      className="preview-container"
    >
      <div
        className="backarrow"
        onClick={handleBackClick}
        style={{ cursor: 'pointer' }}
      >
        <SVG_arrowBack />
      </div>
      <PDFViewer width="100%" height="100%" showToolbar={false}>
        <PDFDocument {...documentData} />
      </PDFViewer>
    </div>
  );
};


