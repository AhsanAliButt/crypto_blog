import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ReactReadMoreReadLess from 'react-read-more-read-less';
const Assignment1 = (props) => {
  return (
    <>
      {/* // NaviGation Bar Section // */}
      <div className="container">
        <div className="row">
          <div className="col col1 text-start">
            <div className="card bg-dark text-white">
  <img src="https://phantom-marca.unidadeditorial.es/7c4ccd41cb946352fe6e15a6c32773a1/crop/0x0/2041x1150/resize/1320/f/jpg/assets/multimedia/imagenes/2022/01/07/16415655339687.jpg" className="card-img image1" alt="..."/>
  <div className="card-img-overlay">
    <h1 className="card-title">Welcome to<br></br> {props.blogname}</h1><br></br>
    <p className="card-text g1"><ReactReadMoreReadLess readMoreClassName="readMoreClassName" charLimit={200} readMoretext="Read More +" readLesstext="Read Less -">
    Cryptocurrency is stored in digital wallets. Cryptocurrency received its name because it uses encryption to verify transactions.Cryptocurrencies such as bitcoin and Ethereum were designed as a way to make payments without relying on traditional modes such as currency notes, debit cards, credit cards or checks. The bitcoin white paper, which set off the cryptocurrency revolution, envisions an electronic payment system that allows “any two willing parties to transact directly with each other without the need for a trusted third party,” cutting governments and banks out of the financial loop. The website Pymnts claims, “Blockchain IS the future of the payments industry,” a reference to the computational technology that undergirds cryptocurrencies.
    </ReactReadMoreReadLess>
            </p>
  </div>
</div>
          </div>
        </div>
        {/* Navigation section ends */}
        {/* Post Area Starts */}
        <div className="row mt-2">
          <div className="col col2 text-start m-0 p-0">

            <div className="card h-100 m-0 me-4">
              <div className="card-body m-0 p-0">
                <img src="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Crypto_News_Shiba_Inu_Coin_Ethereum_Hack.png" className="i1" alt="..." />

                <h5 className="card-title m-2 p-2">Shiba inu</h5>
                <p className="card-text m-2 p-2">.Shiba Inu is an Ethereum-based altcoin that features the Shiba Inu hunting dog as its mascot. ... Shiba Inu was created in August 2020 by an individual or group called Ryoshi. Shiba Inu's price peaked more than tenfold on Oct. 29, 2021, giving it a market capitalization of $41 billion.</p>
                <p className="card-text m-2 p-2"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>

          </div>
          <div className=" col col2 text-start m-0 p-0">
            <div className="card h-100 ms-4">
              <div className="card-body m-0 p-0">
                <img src="http://coinlive.me/wp-content/uploads/2021/09/Evaluation-of-the-Gala-Games-platform-GALA-coin-Latest-information.jpg" className="i1" alt="..." />

                <h5 className="card-title m-2 p-2">Gala Metaverse</h5>
                <p className="card-text m-2 p-2">The GALA tokens are the digital utility tokens of the Gala Games Ecosystem that operates on the Ethereum blockchain and conforms to the ERC-20 standard. More specifically, the non-refundable utility token is cryptographically secured and used as a medium of exchange between participants in the ecosystem.</p>
                <p className="card-text m-2 p-2"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>

          </div>
        </div>
        {/* Post Area ends */}
        <div className="d-flex flex-row justify-content-between ">
          <div className="row mt-3 main1 text-start">
            <div className="col">
              <h1 className="fnt"> Welcome to Future</h1><hr></hr>
              <br></br>
              <p className="bf">Fed is Going to announce interest Rates</p>
            </div>
          </div>
          <div className="row mt-3 side1 bg-light">
            <div className="col text-start bg1">
              <h5 className="fw-bold fst-italic mt-2">About</h5><br></br>
              <p className='fw-bold'> In 2009, the first decentralized cryptocurrency, bitcoin, was created by presumably pseudonymous developer Satoshi Nakamoto. It used SHA-256, a cryptographic hash function, in its proof-of-work scheme.</p>
            </div>
            <div className="row side1 mt-5 p-0">
              <div className="col text-start bg1">
                <h5 className="fw-bold fst-italic mt-2">Archives</h5><br></br>
                <br></br>
                <ul className="list-unstyled ms-3">
                  <li><a href="/" className="link-primary">January 2010</a></li>
                  <li><a href="/" className="link-primary">January 2011</a></li>

                  <li><a href="/" className="link-primary">January 2012</a></li>
                  <li><a href="/" className="link-primary">January 2013</a></li>

                  <li><a href="/" className="link-primary">January 2014</a></li>
                  <li><a href="/" className="link-primary">January 2015</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Starts */}
        <footer>
          <div className="row p-0 border border-dark border-1 mt-2">
            <div className="col p-0">
              its footer
            </div>
          
          </div>
        </footer>
      </div>
    </>

  );
}
export default Assignment1;