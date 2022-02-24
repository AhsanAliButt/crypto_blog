import './postStyle.js';
import ReactReadMoreReadLess from 'react-read-more-read-less';
export function Posts(props){
    return(
        <div className="row mt-5">
          <div className="col-4 col2 text-start m-0 p-1 mt-2">

            <div className="card h-100 m-2">
              <div className="card-body m-0 p-0">
                <img src="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Crypto_News_Shiba_Inu_Coin_Ethereum_Hack.png" className="i1" alt="..." />

                <h5 className="card-title m-2 p-0">{"props.coinname"}</h5>
                <p className="card-text m-2 p-2"> <ReactReadMoreReadLess ReadMoreClassName="readMoreClassName" charLimit={100} readMoreText='Read More' readLessText="ReadLess" readMoreStyle={{color:"blue",cursor:"pointer"}} readLessStyle={{color:"red",curson:'pointer'}}>{"props.coinintro"}</ReactReadMoreReadLess></p>
                <p className="card-text m-2 p-2"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>

          </div>
          <div className=" col-4 col2 text-start m-0 p-1 mt-2">
            <div className="card h-100 m-2">
              <div className="card-body m-0 p-0">
                <img src="http://coinlive.me/wp-content/uploads/2021/09/Evaluation-of-the-Gala-Games-platform-GALA-coin-Latest-information.jpg" className="i1" alt="..." />

                <h5 className="card-title m-2 p-0">Gala Metaverse</h5>
                <p className="card-text m-2 p-2"><ReactReadMoreReadLess ReadMoreClassName="readMoreClassName" charLimit={150} readMoreText='Read More' readLessText="ReadLess" readMoreStyle={{color:"blue",cursor:"pointer"}} readLessStyle={{color:"red",curson:'pointer'}}>The GALA tokens are the digital utility tokens of the Gala Games Ecosystem that operates on the Ethereum blockchain and conforms to the ERC-20 standard. More specifically, the non-refundable utility token is cryptographically secured and used as a medium of exchange between participants in the ecosystem.</ReactReadMoreReadLess></p>
                <p className="card-text m-2 p-2"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>

          </div>
          <div className=" col-4 col2 text-start m-0 p-1 mt-2">
            <div className="card h-100 m-2">
              <div className="card-body m-0 p-0">
                <img src="http://coinlive.me/wp-content/uploads/2021/09/Evaluation-of-the-Gala-Games-platform-GALA-coin-Latest-information.jpg" className="i1" alt="..." />

                <h5 className="card-title m-2 p-2">Gala Metaverse</h5>
                <p className="card-text m-2 p-2"><ReactReadMoreReadLess ReadMoreClassName="readMoreClassName" charLimit={150} readMoreText='Read More' readLessText="ReadLess" readMoreStyle={{color:"blue",cursor:"pointer"}} readLessStyle={{color:"red",curson:'pointer'}}>The GALA tokens are the digital utility tokens of the Gala Games Ecosystem that operates on the Ethereum blockchain and conforms to the ERC-20 standard. More specifically, the non-refundable utility token is cryptographically secured and used as a medium of exchange between participants in the ecosystem.</ReactReadMoreReadLess></p>
                <p className="card-text m-2 p-2"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>

          </div>
        </div>
    )
}