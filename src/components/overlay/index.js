import { useSelector, useDispatch } from 'react-redux';
import { toggleMenu } from '../../actions/actions';

export const Overlay = () => {       
  const menuOpen = useSelector(state => state.gigReducer.menuOpen),
        dispatch = useDispatch();

  return <div className={menuOpen ? "overlay overlay--show" : "overlay"}
              onClick={() => dispatch(toggleMenu())}></div>
}