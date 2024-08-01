import { LanguageHandler } from '../LanguageHandler/LanguageHandler';
import { SVG_downloadIcon } from '@/assets/svg';
import './header.css';

export const Header = ({ showBtn }) => {
  return (
    <header>
      <div className="header-flex">
        <div className="logo-header"></div>
        <div className="language-download">
          {showBtn ? (
            <LanguageHandler />
          ) : (
            <button>
              <SVG_downloadIcon />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
