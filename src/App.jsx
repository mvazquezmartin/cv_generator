import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainLayout } from './pages/Home/MainLayout';
import '@/style/App.css';
import { CVBuilder } from './pages/CreateCV/CVBuilder';
import PDFPreview from '@/pages/CreateCV/PDFView';
import { CVProvider } from '@/context/CVContext';

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
