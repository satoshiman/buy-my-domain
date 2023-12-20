const domain = [
  {
    domain: "coinvlog.com",
    price: "$5,199",
    description: "Coin Vlog, suitable for Crypto Vloger",
  },
  {
    domain: "coinomic.com",
    price: "$5,599",
    description: "Coin, Cryptocurrency, Tokenomics",
  },
  { domain: "nft20.app", price: "TBD", description: "NFT2.0, Application" },
  { domain: "nft2.info", price: "TBD", description: "NFT2.0, News" },
  {
    domain: "doginals.meme",
    price: "TBD",
    description: "Doge Coin Ordinals, Meme coin",
  },
  {
    domain: "sathub.xyz",
    price: "TBD",
    description: "Bitcoin Sats, Bitcoin, Bitcoin Ordinals",
  },
];
function App() {
  const host = window.location.host;

  return (
    <div className="container-lg">
      <div className="row align-items-center">
        <div className="col-lg-6 text-center">
          <a href="https://vuong.live" target="_blank">
            <img
              src="vuong.jpg"
              className="logo rounded-5 mb-4 scale-anim"
              alt="Vuong logo"
            />
          </a>

          <h2 className="fw-bold">Buy my domain</h2>

          <h1 className="fw-bold text-uppercase py-5 text-primary">
            <span className="text-white">[</span> {host}{" "}
            <span className="text-white">]</span>
          </h1>

          <p className="lead">
            Contact me{" "}
            <a href="https://t.me/vuongmike" target="_blank" className="">
              @vuongmike
            </a>{" "}
            for more information
          </p>

          <p className="text-secondary">
            I am eager to collaborate in jointly developing the product. Here is
            my{" "}
            <a href="https://vuong.live" target="_blank" className="">
              profile
            </a>
            .
          </p>
        </div>
        <div className="col-lg-6">
          <h2 className="fw-bold mb-4 text-center mt-5 mt-lg-0">
            Available domain list
          </h2>
          <div class="list-group">
            {domain.map((item, idx) => (
              <div
                key={idx}
                class={`list-group-item list-group-item-action py-3 flex-column align-items-start pointer ${
                  host === item.domain ? "active" : ""
                }`}
              >
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1 fw-bold">
                    <a href={`https://${item.domain}`} target="_blank">
                      {item.domain}
                    </a>
                  </h5>
                  <small>{item.price}</small>
                </div>
                <p class="mb-1 text-secondary">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
