import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobById } from '../store/actionCreator';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import { dateFormat } from '../helpers';
import thunk from 'redux-thunk';

export default function DetailPage() {
  const [loading, setLoading] = useState(false);
  const { job } = useSelector((state) => state.job);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    dispatch(fetchJobById(id)).finally(() => {
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <>
        <div className="container-fluid pb-4" style={{ minHeight: '100vh' }}>
          <div className="container">
            <div>
              <img
                src="https://img.freepik.com/free-photo/we-are-hiring-digital-collage_23-2149667063.jpg?w=1380&t=st=1696657834~exp=1696658434~hmac=9069a835888f1d724154a69b8e12d750e2ff5bb788a5d2db19acd93468eb4661"
                alt="banner_image"
                style={{ maxHeight: '40vh', minWidth: '100%' }}
              />
            </div>
            <div className="rounded-bottom bg-white shadow p-5">
              <div className="mb-3">
                <img src={job.Company.companyLogo} alt={job.Company.name + '_logo'} style={{ maxHeight: '100px', maxWidth: '200px' }} />
              </div>
              <div className="row">
                <div className="col-6">
                  <h3 className="fs-2 mb-4">{job.title}</h3>
                  <h5 className="fs-4">{job.Company.name}</h5>
                  <p className="fs-5 mb-3">{job.Company.location}</p>
                  <div className="d-flex gap-3">
                    <div>
                      <p className="mb-0">Tanggal Publikasi</p>
                      <p className="fs-5">{job.createdAt}</p>
                    </div>
                    <div>
                      <p className="mb-0">Oleh</p>
                      <p className="fs-5">{job.User.email}</p>
                    </div>
                  </div>
                </div>
                <div className="col-6 text-end mt-auto mb-3">
                <Link to="/upload">
                  <button className="btn btn-primary col-4">Lamar Lowongan</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="card border-0 shadow p-5 my-3">
              <h5 className="">Gaji </h5>
              <p className="mb-4 fs-5">{job.salary}</p>
              <div className="my-4">
                <h5>Deskripsi Pekerjaan</h5>
                <p className="lh-lg text" style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                  {job.description}
                </p>
              </div>
              <div>
                <h5 className="mb-3">Persyaratan Skill</h5>
                <ul className="ps-5">
                  {job.Skills.map((skill) => {
                    return (
                      <li className="mb-3">
                        {skill.name} - ( {skill.level} )
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="card border-0 shadow p-5">
              <div className="mb-4">
                <h5 className="mb-3">Tentang Perusahaan</h5>
                <p>{job.Company.description}</p>
                <p style={{ textAlign: 'justify', textJustify: 'inter-word' }}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, sed. Ipsum nemo quae repudiandae laborum ad enim laudantium neque quasi aliquid. Consectetur possimus debitis libero quaerat molestiae, provident nemo
                  quibusdam nesciunt minima illum quos tenetur dolor ad cupiditate ratione cum, doloribus maiores qui reprehenderit accusamus reiciendis vitae. Quibusdam perspiciatis deleniti facilis eius, sequi aspernatur molestias
                  accusamus temporibus! Dolorem delectus incidunt ratione voluptas doloremque deleniti enim veritatis doloribus commodi facere corporis exercitationem quidem quas mollitia quae, voluptatum adipisci similique facilis
                  consequuntur, sint in. Harum distinctio aperiam laborum ipsam rem neque. Laboriosam quam eligendi fuga accusantium itaque suscipit praesentium deleniti odio quasi.
                </p>
              </div>
              <div className="d-flex gap-3">
                <div>
                  <img src={job.Company.companyLogo} alt={job.Company.name + '_logo'} style={{ maxHeight: '80px', maxWidth: '150px' }} />
                </div>
                <div>
                  <div className="fs-6 fw-bold">{job.Company.name}</div>
                  <div>{job.Company.location}</div>
                  <div>{job.Company.email}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
