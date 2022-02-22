export const Main=()=>{
    return(
        <div className="border border-1 border-danger d-flex flex-row justify-content-between mt-3">
          <div className="row main1 text-start p-0 m-0">
            <div className="col">
              <h1 className="fnt"> Welcome to Future</h1><hr></hr>
              <br></br>
              <p className="bf">Fed is Going to announce interest Rates</p>
            </div>
          </div>
          <div className="row side1 m-0 mt-5">
              <div className="col text-start bg1 p-3">
              <h5 className="fw-bold fst-italic mt-2">About</h5><br></br>
              <p className="fw-bold text-wrap"> In 2009, the first decentralized cryptocurrency, bitcoin, was created by presumably pseudonymous developer Satoshi Nakamoto. It used SHA-256, a cryptographic hash function, in its proof-of-work scheme.</p>
            </div>
            <div className="row side1 mt-3 ms-2">
              <div className="col text-start bg1">
                <h5 className="fw-bold fst-italic mt-2">Archives</h5><br></br>
                <br></br>
                <ul className="list-unstyled">
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
    )
}