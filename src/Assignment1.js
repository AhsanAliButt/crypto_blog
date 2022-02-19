import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
const Assignment1 = (props) => {
  return (
    <>
      {/* // NaviGation Bar Section // */}
      <div className="container">
        <div className="row">
          <div className="col col1 text-start">
            <h1>Welcome to<br></br> {props.blogname}</h1>

          </div>
        </div>
        {/* Navigation section ends */}
        {/* Post Area Starts */}
        <div className="row mt-2">
          <div className="col col2 text-start m-0 p-0">

            <div className="card h-100 m-0 me-4">
              <div className="card-body m-0 p-0">
                <img src="https://thumbs.dreamstime.com/b/rainbow-love-heart-background-red-wood-60045149.jpg" className="i1" alt="..." />

                <h5 className="card-title m-2 p-2">Card title</h5>
                <p className="card-text m-2 p-2">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>

          </div>
          <div className=" col col2 text-start m-0 p-0">
          <div className="card h-100 ms-4">
              <div className="card-body m-0 p-0">
                <img src="https://thumbs.dreamstime.com/b/rainbow-love-heart-background-red-wood-60045149.jpg" className="i1" alt="..." />

                <h5 className="card-title m-2 p-2">Card title</h5>
                <p className="card-text m-2 p-2">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>

          </div>
        </div>
        {/* Post Area ends */}
        <div className="d-flex flex-row justify-content-between ">
        <div className="row mt-3 main1 text-start">
          <div className="col">
          <h1 className="fnt"> Welcome to Future</h1><hr></hr>
          <br></br><h1>Fed is Going to announce interest Rates</h1>
        </div>
        </div>
        <div className="row mt-3 side1 bg-light">
          <div className="col text-start bg1">
            <h5>About</h5>
          </div>
          
        </div>
        </div>
        </div>
    </>

  );
}
export default Assignment1;