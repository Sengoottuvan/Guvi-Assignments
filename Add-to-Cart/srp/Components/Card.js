import { useState } from "react";
import Carddata from "./Carddata.json";
import "./Card.css";
import ShowDescription from "./ShowItem";

//Cards
export default function Cards() {

  // const showRating = (num) => {
  //   return Array(num)
  //     .fill(0)
  //     .map(()=>  <i class="fa-solid fa-star" style={{"color":"yellow"}}></i>);
  // };
  
  const [productData, setProductData] = useState(Carddata);
  const [totalitems, settotalitems] = useState([]);
  
  
  const updateCart = (Price,id) => {
    settotalitems([...totalitems, { id, Price, }]);
    console.log(totalitems);
    let index = productData.findIndex((obj) => obj.id === id);
    let tempData = productData;
    tempData[index].Visible = false;
    setProductData([...tempData]);
  };
  
  const removeCart = (id) => {
    settotalitems(totalitems.filter((value) => value.id !== id));
    let index = productData.findIndex((obj) => obj.id === id);
    let tempData = productData;
    tempData[index].Visible = true;
    setProductData([...tempData]);
  };
  const ClearCart=(event)=>{
     event.target.CartValue="";
  };

  return (
    <section>
        <div className="container px-4 px-lg-5 mt-5">
<div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-5 justify-content-center">
     {Carddata.map((value,index)=>{
      let {Price,id,Visible}=value;
  const showRating = (num) => {
    return Array(num)
      .fill(0)
      .map(()=>  <i class="fa-solid fa-star" style={{"color":"yellow"}}></i>);
  };
  
    return(
    <div key={value.id} className="col mb-5">
   <div className="card h-100">
     {/* <!-- Product image--> */}
     <img className="card-img-top product-img img-fluid" src={value.img} style={{"height":"250px"}}></img>
     <div className="card-body p-2">
       <div>
         <h5 className="fw-bolder  text-center">{value.Item}</h5>
         <sub style={{ "line-height": "0","textAlign":"justify"}}>{value.Brand}</sub>
         <div className="text-center">{showRating(Number(value.Rating))}
</div>
         <br></br>
         <p className="fw-bolder text-center">$ : {value.Price}</p>
       </div>
     </div>
     <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
       <div className="text-center">
         {Visible==true ?(<button className="btn btn-outline-dark mt-auto" onClick={() => updateCart(Price,id)} href="#">
           Add to Cart
         </button>):(<button id="RemoveButton" className="btn btn-outline-dark mt-auto" onClick={() => removeCart(id)} href="#">
           Remove from Cart
         </button>)} 
     
       </div>
     </div>
   </div>
 </div>
  );
})}

 <div className='summary-box shadow-sm'>
    <form>
        <h5  className='summary-title text-center'>Items in Cart<hr/>       
        </h5>
        <p className="text-center" name="CartValue"><ShowDescription totalitems={totalitems}></ShowDescription></p>
        <button className="btn btn-outline-dark mt-auto" onclick={ClearCart} variant='success mt-2'>Checkout Product</button>
        </form>
    </div>
    </div>
</div>
    </section>
  );
}