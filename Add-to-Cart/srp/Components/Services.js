import Carddata from './Carddata.json';
import Cards from './Card';

export default function Services() {



    return (
        <section>
        <div className="container px-4 px-lg-5 mt-5">

         <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-5 justify-content-center">
            {Carddata.map((value, index) => {
              return (
                <Cards
                  key={index}
                  img={value.img}
                  Item={value.Item}
                  Brand={value.Brand}
                  Price={value.Price}
                  Ratings={value.Rating}
                  id={value.id}
                  Visilibilty={value.Visible}
                />
              );
            })}
          </div>
        </div>
      </section>
    );
  }

