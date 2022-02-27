import ReactReadMoreReadLess from 'react-read-more-read-less';
// import cardData from "../variables/variables.js"
const Post = (props) => {
    // {cardData.map((item,index)=>{
    //     return(
    //         <Post data={data} />
    //     )
    // })}    
    return (
        

        // <div className="col-sm-12 col-md-6 col-lg-3 text-start col2 p-0 m-0 p-4 mt-4">
        //     <div className="card">
        //         <img src={props.coinimg} className="card-img-top i1" alt="..." />
        //         <div className="card-body bg-light">
        //             <h5 className="card-title">{props.coinname}</h5>
        //             <h5 className="card-title">{"current-price"} <button className="btn btn-danger ms-2"> Buy Now </button></h5>
        //             <p className="card-text fw-bold"><ReactReadMoreReadLess ReadMoreclassName="readMoreclassName" charLimit={100} readMoreText='Read More' readLessText="ReadLess" readMoreStyle={{ color: "blue", cursor: "pointer" }} readLessStyle={{ color: "red", curson: 'pointer' }}>{props.coinintro}</ReactReadMoreReadLess></p>
        //         </div>
        //     </div>
        // </div>
        <div className="col-sm-12 col-md-6 col-lg-3 text-start col2 p-0 m-0 p-4 mt-4">
            <div className="card">
                <img src={props.data.image} className="card-img-top i1" alt="..." />
                <div className="card-body bg-light">
                    <h5 className="card-title">{props.data.name}</h5>
                    <h5 className="card-title">{props.data.price} <button className="btn btn-danger ms-2"> Buy Now </button></h5>
                    <p className="card-text fw-bold"><ReactReadMoreReadLess ReadMoreclassName="readMoreclassName" charLimit={100} readMoreText='Read More' readLessText="ReadLess" readMoreStyle={{ color: "blue", cursor: "pointer" }} readLessStyle={{ color: "red", curson: 'pointer' }}>{props.data.disc}</ReactReadMoreReadLess></p>
                </div>
            </div>
        </div>
        // <div className="col-sm-12 col-md-6 col-lg-3 text-start col2 p-0 m-0 p-4 mt-4">
        //     <div className="card">
        //         <img src={item.image} className="card-img-top i1" alt="..." />
        //         <div className="card-body bg-light">
        //             <h5 className="card-title">{item.name}</h5>
        //             <h5 className="card-title">{item.price} <button className="btn btn-danger ms-2"> Buy Now </button></h5>
        //             <p className="card-text fw-bold"><ReactReadMoreReadLess ReadMoreclassName="readMoreclassName" charLimit={100} readMoreText='Read More' readLessText="ReadLess" readMoreStyle={{ color: "blue", cursor: "pointer" }} readLessStyle={{ color: "red", curson: 'pointer' }}>{item.disc}</ReactReadMoreReadLess></p>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Post;