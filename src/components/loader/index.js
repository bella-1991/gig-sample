import { useSelector } from 'react-redux';

export const Loader = () => {       
  const loading = useSelector(state => state.gigReducer.loading);

  return (
    <div className={loading ? "loader" : "loader close"}>
      <div className="loader__spinner-container">
          <div className="spinner"></div>
      </div>
    </div>
  )
}