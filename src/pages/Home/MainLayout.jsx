import { useTranslation } from 'react-i18next';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import screenshot from '/Screenshot.png';
import { BtnStart } from '@/pages/Home/BtnStart';
import './mainLayout.css';

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
