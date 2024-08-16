import { useTranslation } from 'react-i18next';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import { useNavigate } from 'react-router-dom';
import screenshot from '/Screenshot.png';
import './mainLayout.css';
import { BtnStart } from '@/pages/Home/BtnStart';

export const MainLayout = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header showBtn={true} />
      <div className="main-container">
        <main>
          <div className="home-title">
            <h1>
              <span>{t('home.title.first')}</span>
              <span>{t('home.title.second')}</span>
            </h1>
            <p>{t('home.description')}</p>
          </div>
          {/* <div className="home-action-btn">
            <button className="btn-start" onClick={handleNavigate}>
              {t('home.button')}
            </button>
          </div> */}
          <BtnStart />
          <div className="screenshot-container">
            <img src={screenshot} alt="screenshot from website" />
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};
