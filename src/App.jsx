import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainLayout } from '@/pages/Home/MainLayout';
import { CVBuilder } from '@/pages/CreateCV/BuildCV/CVBuilder';
import PDFPreview from '@/pages/PreViewCV/PDFView';
import { CVProvider } from '@/context/CVContext';
import '@/style/App.css';

function App() {
  return (
    <CVProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/editorcv" element={<CVBuilder />} />
          <Route path="/pdfpreview" element={<PDFPreview />} />
        </Routes>
      </BrowserRouter>
    </CVProvider>
  );
}

export default App;
