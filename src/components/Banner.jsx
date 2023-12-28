import { useDispatch, useSelector } from 'react-redux';
import { addSearch, fetchJobs } from '../store/actionCreator';
import { Link } from "react-router-dom";
import thunk from 'redux-thunk';

export default function Banner() {
  const { companies } = useSelector((state) => state.company);
  const { search } = useSelector((state) => state.job);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(
      addSearch({
        ...search,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSearch = (event) => {
    event.preventDefault();
    dispatch(fetchJobs(search));
  };
  return (
    <>
      <form onSubmit={handleSearch} className="form d-flex justify-content-center my-3">
        <input type="text" className="form-control mx-1 w-25" name="keyword" onChange={handleChange} value={search.keyword} placeholder="berdasarkan nama pekerjaan" />
        <select className="form-select w-25" name="companyId" onChange={handleChange} value={search.companyId}>
          <option value="" disabled>
            cari berdasarkan perusahaan
          </option>
          {companies.map((company) => {
            return (
              <option key={company.id} value={company.id}>
                {company.name}
              </option>
            );
          })}
        </select>
        <button className="btn btn-primary" style={{ width: '90px', height: '40px' }}>
        Cari
        </button>
      </form>
    </>
  );
}
