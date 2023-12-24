export default function Header() {
    return (
      <header>
        <div id="carouselExample" className="container carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://assetscdn1.paytm.com/images/catalog/view_item/784753/1617186512494.jpg?imwidth=480&impolicy=hq"
                className="d-block w-100" style={{"height":"500px"}}
              ></img>
            </div>
            <div className="carousel-item">
              <img src="https://hungamadeal.co.in/wp-content/uploads/2017/04/Screenshot_2017-04-09-13-09-48-43201.jpg" className="d-block w-100" style={{"height":"500px"}}></img>
            </div>
            <div className="carousel-item">
              <img src="https://img.freepik.com/free-psd/summer-sale-70-discount_23-2148476960.jpg" className="d-block w-100" style={{"height":"500px"}}></img>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </header>
    );
  }
  // <header className="bg-dark py-5">
  //         <div className="container px-4 px-lg-5 my-5">
  //             <div className="text-center text-white">
  //                 <h1 className="display-4 fw-bolder">Shop in style</h1>
  //                 <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
  //             </div>
  //         </div>
  //     </header>