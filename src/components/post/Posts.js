import './postStyle.js';
import Post from './Post.js';
import cardData from "../variables/variables.js"
// import { img, names, intro } from "../variables/variables.js";
export function Posts() {
  //   {cardData.map((item,index)=>{
  //     return(
  //         <Post data={item} />
  //     )
  // })}
  return (

    //  <div className="row mt-5">
    <div class="row row-cols-1 row-cols-md-3 g-4 my-5">
      {/* U can post By following Method */}
      {/* <Posts coinname={"Name"} coinintro={intro.name} img = {img.name}/> */}
      {/* You can find all Coin names Names intros and imgs in variable.js file */}

      {/* <Post coinname={names.gala} coinintro={intro.gala} coinimg={img.gala}/>
          <Post coinname={names.sand} coinintro={intro.sand} coinimg={img.sand}/>
          <Post coinname={names.sys} coinintro={intro.sys} coinimg={img.sys}/>
          <Post coinname={names.ethereum} coinintro={intro.ethereum} coinimg={img.ethereum}/>
          <Post coinname={names.sand} coinintro={intro.sand} coinimg={img.sand}/> */}
      {cardData.map((item, index) => {
        return (
          <Post data={item} />
        )
      })}
    </div>

  )
}