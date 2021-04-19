import { useSelector, useDispatch } from 'react-redux';
import { toggleMenu, changeLang, toggleRotate, toggleMonochrome, randomiseColours, resetColours } from '../../actions/actions';
import { Defaults as defaultValues, Labels as labels } from '../../constants';

export const Menu = () => {       
  const monochrome = useSelector(state => state.gigReducer.monochrome),
        lang = useSelector(state => state.gigReducer.lang),
        menuOpen = useSelector(state => state.gigReducer.menuOpen),
        random = useSelector(state => state.gigReducer.random),
        dispatch = useDispatch();

  return (
      <div className={menuOpen ? "menu menu--open" : "menu"}>
        <div className="menu__header">
          <button href="#" onClick={() => dispatch(toggleMenu())} className="menu__hamburger">
            <span className="menu__bars">
                <span className="menu__bar"></span>
                <span className="menu__bar"></span>
                <span className="menu__bar"></span>
                <span className="menu__bar"></span>
              </span>
          </button>
        </div>
        <div className="menu__nav">
          <div className="menu__group">
            <label htmlFor="menu-lang" className="menu__label">
              {labels[lang].LANGUAGE}
            </label>            
            <select id="menu-lang" 
              className="menu__lang-dropdown" 
              value={lang}
              onChange={(e) => dispatch(changeLang(e.target.value))}>
                { defaultValues.AVAILABLE_LANG.map((lang, index) => (
                  <option value={lang} key={index}>{lang}</option>
                ))}
              </select>
          </div>
          <div className="menu__group">
            { !random && 
                <button className="menu__button"
                    onClick={() => dispatch(randomiseColours())}>{labels[lang].RANDOMISE}</button>
            }
            { random && 
                <button className="menu__button menu__button--secondary"
                    onClick={() => dispatch(resetColours())}>{labels[lang].RESET}</button>
            }
          </div>
          <div className="menu__group menu__group--row">
            <label htmlFor="menu-lang" className="menu__label">
              {labels[lang].MONOCHROME}
            </label>            
            <label className="menu__switch">
              <input type="checkbox" checked={monochrome} onChange={() => dispatch(toggleMonochrome())} />
              <span className="menu__slider"></span>
            </label>
          </div>
          <div className="menu__group">
            <button className="menu__button"
                    onClick={() => dispatch(toggleRotate())}>{labels[lang].ROTATE}</button>
          </div>
        </div>
      </div>
  )
}