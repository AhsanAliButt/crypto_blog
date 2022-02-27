import './App.css';
import { Posts } from './components/post/Posts.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import { Header } from './components/header/Header.js';
import { Main } from './components/main/Main.js';
import { Footer } from './components/footer/Footer.js';
// import { img,intro,names } from './components/variables/variables.js';
// import { NavBar } from './components/navbar/navBar.js'
const Assignment1 = (props) => {

  return (
    <>
    {/* Main Container Starts */}
    {/* <NavBar /> */}
      <div className="container-fluid">
        {/* // NaviGation Bar Section // */}

        {/* <NavBar /> */}

        {/* // NaviGation Bar Section // */}
        <div className="container mt-4">
        {/* // NaviGation Bar Section // */}

        {/* <NavBar /> */}

        {/* // NaviGation Bar Section // */}

        {/* Header Section Starts */}

        <Header blogname="Crypto Mythologies" />

        {/* Header ends */}

        {/* Post Area Starts */}
        </div>
        
        <Posts />

        {/* Post Area ends */}

        {/* Main Area Starts */}
         
        <Main />

        {/* Footer Starts */}
        
        <Footer />
        
        {/* Footer Ends */}

        {/* Main Container Ends */}
        </div>
    </>

  );
}
export default Assignment1;