import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Loader } from './loader';
import { Menu } from './menu';
import { Logo } from './logo';
import { Offices } from './offices';
import { Values } from './values';
import { Overlay } from './overlay';
import { fetchOffices, fetchValues, toggleLoader } from '../actions/actions';
import { API as api } from '../constants'
import '../styles/style.scss';

function App() {
  const monochrome = useSelector(state => state.gigReducer.monochrome),
        dispatch = useDispatch();
  
  useEffect(() => {
    const urls = [ api.VALUES, api.OFFICES ];

    Promise.all(urls.map(url => 
      fetch(url, { 
        headers: 
          { 'token': api.TOKEN }
      })
      .then(res => res.json())
      .then(result => result))

    ).then(([values, offices]) => {
        
        dispatch(fetchOffices(offices));
        dispatch(fetchValues(values));
        dispatch(toggleLoader());
    })
    .catch(err => console.log(err));

  }, []);

  return (
      <div className={monochrome ? "app app--monochrome" : "app"}>
        <Loader />
        <Menu />
        <Values />
        <Logo />
        <Offices />
        <Overlay />
      </div>  
  );
}

export default App;
