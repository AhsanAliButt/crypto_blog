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
      <div className="row mt-2">
        <div className="col col1 text-start">
          <h1>Welcome to<br></br> {props.blogname}</h1>
          
        </div>
        <div className="col col1 text-start">
          <h1>Welcome to<br></br> {props.blogname}</h1>
          
        </div>
      </div>
    </div>
    </>

  );
}
export default Assignment1;