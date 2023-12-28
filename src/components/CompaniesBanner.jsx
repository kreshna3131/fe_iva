import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCompanies } from '../store/actionCreator';
import Loading from './Loading';
import { Link } from "react-router-dom";
import thunk from 'redux-thunk';

export default function CompaniesBanner() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { companies } = useSelector((state) => state.company);

  useEffect(() => {
    setLoading(true);
    dispatch(fetchCompanies()).finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <div className="row justify-content-center gap-3 p-5">
        <h3 className="text-center mb-5">Perusahaan yang bekerjasama dengan kami</h3>
        {companies.map((company) => {
          return (
            <div className="col-2 text-center">
              <img src={company.companyLogo} alt={company.name + '_logo'} style={{ maxHeight: '80px', maxWidth: '200px' }} />
            </div>
          );
        })}
      </div>
    </>
  );
}
