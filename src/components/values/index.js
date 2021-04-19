import { useSelector } from 'react-redux';
import { Labels as labels } from '../../constants'

export const Values = () => {    
  const values = useSelector(state => state.gigReducer.values),
        lang = useSelector(state => state.gigReducer.lang),
        rotate = useSelector(state => state.gigReducer.rotate),
        random = useSelector(state => state.gigReducer.random);

  return (
      <div className={rotate ? "values values--rotate" : "values"}>
        {
          Object.keys(values).length !== 0 && values[lang].map(value => (
            <div className={random ? "values__card values__card--random" : "values__card"} key={value.id}>
              <div className="values__text">
                <h2 className="values__title">{value.title}</h2>
                <p className="values__description">{value.description}</p>
              </div>
              <a href="#" className="values__cta">
                { labels[lang].FIND_OUT_MORE}
              </a>
              <a href="#" className="values__overlay-link">
                { labels[lang].FIND_OUT_MORE}
                </a>
            </div>
          ))
        }
      </div>
  )
}