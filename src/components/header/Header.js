import ReactReadMoreReadLess from 'react-read-more-read-less';
export const Header=(props)=>{
    return(
        <div className="row">
          <div className="col col1 text-start">
            <div className="card bg-dark text-white">
              <img src="https://phantom-marca.unidadeditorial.es/7c4ccd41cb946352fe6e15a6c32773a1/crop/0x0/2041x1150/resize/1320/f/jpg/assets/multimedia/imagenes/2022/01/07/16415655339687.jpg" className="card-img image1" alt="..." />
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
    )
}