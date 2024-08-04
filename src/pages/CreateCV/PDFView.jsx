import { PDFViewer } from '@react-pdf/renderer';
import { useNavigate } from 'react-router-dom';
import { PDFDocument } from '@/pages/CreateCV/CVDesign';
import { SVG_arrowBack } from '@/assets/svg';

const PDFPreview = () => {
  const navigate = useNavigate();
  const documentData = JSON.parse(localStorage.getItem('cvData')) || {};

  if (!documentData) {
    return <div>No hay datos para mostrar.</div>;
  }

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <>
      <div
        className="backarrow"
        onClick={handleBackClick}
        style={{ cursor: 'pointer' }}
      >
        <SVG_arrowBack />
      </div>
      <PDFViewer width="100%" height="600">
        <PDFDocument {...documentData} />
      </PDFViewer>
    </>
  );
};

export default PDFPreview;
