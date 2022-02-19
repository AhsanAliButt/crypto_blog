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
            <br></br>
            <p className='g1'>Cryptocurrency is stored in digital wallets. Cryptocurrency received its name because it uses encryption to verify transactions.Cryptocurrencies such as bitcoin and Ethereum were designed as a way to make payments without relying on traditional modes such as currency notes, debit cards, credit cards or checks. The bitcoin white paper, which set off the cryptocurrency revolution, envisions an electronic payment system that allows “any two willing parties to transact directly with each other without the need for a trusted third party,” cutting governments and banks out of the financial loop. The website Pymnts claims, “Blockchain IS the future of the payments industry,” a reference to the computational technology that undergirds cryptocurrencies.
</p>
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
                <p className="card-text m-2 p-2">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>

          </div>
          <div className=" col col2 text-start m-0 p-0">
            <div className="card h-100 ms-4">
              <div className="card-body m-0 p-0">
                <img src="http://coinlive.me/wp-content/uploads/2021/09/Evaluation-of-the-Gala-Games-platform-GALA-coin-Latest-information.jpg" className="i1" alt="..." />

                <h5 className="card-title m-2 p-2">Gala Metaverse</h5>
                <p className="card-text m-2 p-2">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
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
              <h5>About</h5>
            </div>

          </div>
        </div>
      </div>
    </>

  );
}
export default Assignment1;