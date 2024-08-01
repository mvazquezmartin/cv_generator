import { useTranslation } from 'react-i18next';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import './mainLayout.css';

export const MainLayout = ({ showBtn }) => {
  const { t } = useTranslation();
  return (
    <>
      <Header showBtn={showBtn} />
      <div className="main-container">
        <main>
          <div className="home-title">
            <h1>{t('home.title')}</h1>
            <h2>{t('home.description')}</h2>
          </div>
          <div className="home-action-btn">
            <button className="btn-start">{t('home.button')}</button>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};
