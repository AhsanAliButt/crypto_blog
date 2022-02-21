import './App.css';
import { Posts } from './components/post/Post.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/header/Header.js';
const Assignment1 = (props) => {
  return (
    <>
      <div className="container">
        {/* // NaviGation Bar Section // */}

        <Header />
         
        {/* Navigation section ends */}
        {/* Post Area Starts */}

        <Posts />

        {/* Post Area ends */}
        <div className="d-flex flex-row justify-content-between ">
          <div className="row mt-3 main1 text-start">
            <div className="col">
              <h1 className="fnt"> Welcome to Future</h1><hr></hr>
              <br></br>
              <p className="bf">Fed is Going to announce interest Rates</p>
            </div>
          </div>
          <div className="row mt-3 side1 bg-light">
            <div className="col text-start bg1">
              <h5 className="fw-bold fst-italic mt-2">About</h5><br></br>
              <p className='fw-bold'> In 2009, the first decentralized cryptocurrency, bitcoin, was created by presumably pseudonymous developer Satoshi Nakamoto. It used SHA-256, a cryptographic hash function, in its proof-of-work scheme.</p>
            </div>
            <div className="row side1 mt-5 p-0">
              <div className="col text-start bg1">
                <h5 className="fw-bold fst-italic mt-2">Archives</h5><br></br>
                <br></br>
                <ul className="list-unstyled ms-3">
                  <li><a href="/" className="link-primary">January 2010</a></li>
                  <li><a href="/" className="link-primary">January 2011</a></li>

                  <li><a href="/" className="link-primary">January 2012</a></li>
                  <li><a href="/" className="link-primary">January 2013</a></li>

                  <li><a href="/" className="link-primary">January 2014</a></li>
                  <li><a href="/" className="link-primary">January 2015</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Starts */}
        <footer>
          <div className="row p-0 border border-dark border-1 mt-2">
            <div className="col p-0">
              its footer
            </div>

          </div>
        </footer>
      </div>
    </>

  );
}
export default Assignment1;