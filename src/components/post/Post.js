import ReactReadMoreReadLess from 'react-read-more-read-less';
const Post = (props) => {
    return (
        //         <div className="col-lg-4 col-md-6 col-sm-12 col2 text-start m-0 p-sm-0 p-1 mt-2">
        //             <div className="card h-100 m-2">
        //                 <div className="card-body m-0 p-0">
        //                     <img src={props.coinimg} className="i1" alt="..." />
        //                     <h5 className="card-title m-2 p-0">{props.coinname}</h5>
        //                     <p className="card-text m-2 p-2"> <ReactReadMoreReadLess ReadMoreclassName="readMoreclassName" charLimit={100} readMoreText='Read More' readLessText="ReadLess" readMoreStyle={{ color: "blue", cursor: "pointer" }} readLessStyle={{ color: "red", curson: 'pointer' }}>{props.coinintro}</ReactReadMoreReadLess></p>
        //                     <p className="card-text m-2 p-2"><small className="text-muted">Last updated 3 mins ago</small></p>
        //                 </div>
        //             </div>
        //         </div>
        //     )
        // }
        <div className="col-sm-12 col-md-6 col-lg-3 text-start col2 p-0 m-0 p-4 mt-4">
            <div className="card">
                <img src={props.coinimg} className="card-img-top i1" alt="..." />
                <div className="card-body bg-light">
                    <h5 className="card-title">{props.coinname}</h5>
                    <h5 className="card-title">{"current-price"} <button className="btn btn-danger ms-2"> Buy Now </button></h5>
                    <p className="card-text fw-bold"><ReactReadMoreReadLess ReadMoreclassName="readMoreclassName" charLimit={100} readMoreText='Read More' readLessText="ReadLess" readMoreStyle={{ color: "blue", cursor: "pointer" }} readLessStyle={{ color: "red", curson: 'pointer' }}>{props.coinintro}</ReactReadMoreReadLess></p>
                </div>
            </div>
        </div>
    )
}

export default Post;