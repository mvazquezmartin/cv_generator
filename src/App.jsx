import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainLayout } from '@/pages/Home/MainLayout';
import { CVBuilder } from '@/pages/CreateCV/CVBuilder';
import { PDFPreview } from '@/pages/PreViewCV/PDFView';
import { CVProvider } from '@/context/CVContext';
import { ScrollToTop } from '@/utils/ScrollTop';
import { Faq } from '@/pages/Faq/Faq';
import '@/style/App.css';

function App() {
  return (
    <CVProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/editorcv" element={<CVBuilder />} />
          <Route path="/pdfpreview" element={<PDFPreview />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
      </BrowserRouter>
    </CVProvider>
  );
}

export default App;
