import { Link } from 'react-router-dom';
import thunk from 'redux-thunk';

export default function JobCard({ job }) {
  return (
    <>
      <Link to={`/job/${job.id}`} style={{ textDecoration: 'none' }}>
        <div className="rounded-3 ps-1 me-4" style={{ backgroundColor: '#4b0082' }}>
          <div className="card text-start mb-3 shadow border" style={{ width: '18rem' }}>
            <div className="card-body">
              <img src={job.Company.companyLogo} alt="logo" style={({ maxWidth: '100px' }, { height: '50px' })} className="rounded" />
              <h4 className="card-title text-primary mt-2">{job.title}</h4>
              <p className="fs-5">{job.Company.name}</p>
              <p>{job.Company.location}</p>
              <p>{job.createdAt}</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
