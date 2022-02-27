import './postStyle.js';
import Post from './Post.js';
import cardData from "../variables/variables.js"

export function Posts() {
  
  return (

  
    <div class="row row-cols-1 row-cols-md-3 g-4 my-5">
      
      {cardData.map((item, index) => {
        return (
          <Post data={item} />
        )
      })}
    </div>

  )
}