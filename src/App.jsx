import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainLayout } from './pages/Home/MainLayout';
import '@/style/App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout showBtn={true} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
