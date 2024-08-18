import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export const BtnStart = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/editorcv');
  };
  return (
    <div className="home-action-btn">
      <button className="btn-start" onClick={handleNavigate}>
        {t('home.button')}
      </button>
    </div>
  );
};
