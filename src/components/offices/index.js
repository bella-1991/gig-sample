import { useSelector } from 'react-redux';

export const Offices = () => {    
  const offices = useSelector(state => state.gigReducer.offices),
        rotate = useSelector(state => state.gigReducer.rotate),
        random = useSelector(state => state.gigReducer.random);

  return (
      <div className={rotate ? "offices offices--rotate" : "offices"}>
        {
          offices.length && offices.map(office => (
            <div className={random ? "offices__card offices__card--random" : "offices__card"} key={office.id}>
              <h3 className="offices__country">{office.country}</h3>
              <address className="offices__address">{office.address}</address>
            </div>
          ))
        }
      </div>
  )
}