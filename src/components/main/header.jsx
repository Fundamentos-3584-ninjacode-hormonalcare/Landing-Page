import { useTranslation } from 'react-i18next';
import ParticlesBg from "particles-bg";

export const Header = () => {
  const { t } = useTranslation();

  return (
    <header id='header'>
      <div className='intro'>
        <div className="particles-container">
          <ParticlesBg type="circle" bg={{zIndex: 1, position:"absolute", top:0, left:0, width:"100%", height:"100%"}} num={8} />
        </div><div className='overlay'>
          <div className='container'>
            <div className='mastermind-header'>
              <div className='mastermind-content'>
                <h1>
                  {t('Header.title')}
                  <span></span>
                </h1>
                <p>{t('Header.paragraph')}</p>
                <div className='mastermind-buttons'>
                  <a
                    href='#features'
                    className='btn btn-custom btn-lg page-scroll'
                  >
                    {t('Header.buttonText')}
                  </a>
                  {/* <a
                    href='#'
                    className='btn btn-custom btn-lg page-scroll'
                  >
                    {t('Header.buttonTryWeb')}
                  </a>
                  <a
                    href='#'
                    className='btn btn-custom btn-lg page-scroll'
                  >
                    {t('Header.buttonTryMobile')}
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
