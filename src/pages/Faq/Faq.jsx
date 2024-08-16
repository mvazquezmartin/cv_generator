import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import { useTranslation } from 'react-i18next';
import './Faq.css';
import { BtnStart } from '@/pages/Home/BtnStart';

export const Faq = () => {
  const { t } = useTranslation();
  return (
    <>
      <Header showBtn={true} />
      <div className="faq-container">
        <div className="faq-section">
          <h1 className="faq-title">{t('FAQ.firstQ.title')}</h1>
          <h2 className="faq-subtitle">{t('FAQ.firstQ.subtitle1')}</h2>
          <p>{t('FAQ.firstQ.answer1')}</p>
          <h2 className="faq-subtitle">{t('FAQ.firstQ.subtitle2')}</h2>
          <p>{t('FAQ.firstQ.answer2')}</p>
          <h2 className="faq-subtitle">{t('FAQ.firstQ.subtitle3')}</h2>
          <p>{t('FAQ.firstQ.answer3')}</p>
        </div>

        <div className="faq-section">
          <h1 className="faq-title">{t('FAQ.secondQ.title')}</h1>
          <h2 className="faq-subtitle">{t('FAQ.secondQ.subtitle1')}</h2>
          <p>{t('FAQ.secondQ.answer1')}</p>
          <h2 className="faq-subtitle">{t('FAQ.secondQ.subtitle2')}</h2>
          <p>{t('FAQ.secondQ.answer2')}</p>
          <h2 className="faq-subtitle">{t('FAQ.secondQ.subtitle3')}</h2>
          <p>{t('FAQ.secondQ.answer3')}</p>
        </div>

        <div className="faq-section">
          <h1 className="faq-title">{t('FAQ.thirdQ.title')}</h1>
          <h2 className="faq-subtitle">{t('FAQ.thirdQ.subtitle1')}</h2>
          <p>{t('FAQ.thirdQ.answer1')}</p>
          <h2 className="faq-subtitle">{t('FAQ.thirdQ.subtitle2')}</h2>
          <p>{t('FAQ.thirdQ.answer2')}</p>
          <h2 className="faq-subtitle">{t('FAQ.thirdQ.subtitle3')}</h2>
          <p>{t('FAQ.thirdQ.answer3')}</p>
        </div>
        <BtnStart />
      </div>
      <Footer showBg={false} />
    </>
  );
};
