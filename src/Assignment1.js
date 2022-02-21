import './App.css';
import { Posts } from './components/post/Post.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/header/Header.js';
import { Main } from './components/main/Main.js';
import { Footer } from './components/footer/Footer.js';
const Assignment1 = (props) => {
  return (
    <>
      <div className="container">
        {/* // NaviGation Bar Section // */}

        <Header blogname="Crypto Mythologies" />

        {/* Navigation section ends */}
        {/* Post Area Starts */}

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