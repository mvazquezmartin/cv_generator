import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainLayout } from './pages/Home/MainLayout';
import '@/style/App.css';
import { CVBuilder } from './pages/CreateCV/CVBuilder';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/editorcv" element={<CVBuilder />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
