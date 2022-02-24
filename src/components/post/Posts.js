import './postStyle.js';
import Post from './Post.js';
import { img,names,intro } from "../variables/variables.js";
export function Posts(){
    return(
        <div className="row mt-5">
          {/* U can post By following Method */}
          {/* <Posts coinname={"Name"} coinintro={intro.name} img = {img.nameimg}/> */}
        {/* You can find all Coin names Names intros and imgs in variable.js file */}

          <Post coinname={names.shiba} coinintro={intro.shiba} coinimg={img.shibaimg}/>
          <Post coinname={names.gala} coinintro={intro.gala} coinimg={img.galaimg}/>
          <Post coinname={names.shiba} coinintro={intro.shiba} coinimg={img.shibaimg}/>
          
        </div>
    )
}