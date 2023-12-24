import React,{useEffect, useState} from "react";
import {useNavigate,Link,useParams, } from "react-router-dom";
import { useFormik } from 'formik';
import toast,{ Toaster } from 'react-hot-toast';
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";
import './Page.css'


export default function Addbookpage(){
    const navigate=useNavigate();
    var {id} = useParams();

    const formik = useFormik({
        initialValues : {
            name :'',
            category:'',
            price: '',
            quantity: '',
            author: '',
        },
        enableReinitialize: true,
        validate :(values) => {
            let errors = {};
            if (!values.name) {
                errors.name = toast.error("Book name Required...!");
            }else if (!values.category) {
                errors.category = toast.error("Mention in Which Category Book Placed");
            }else if (!values.price) {
                errors.price = toast.error("Mention Book Price, or enter 0");
            } else if (!values.quantity) {
                errors.quantity = toast.error("Mention Quantities of books or mention Zero");
            }else if (!values.author) {
                errors.author = toast.error("Mention Author name");
            }
            return errors

        },
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit : async values => {
                fetch("https://64a506e800c3559aa9beef5d.mockapi.io/books", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json"
                    },
                    body: JSON.stringify(values)
                  })
                    .then((data) => data.json())
                    .then((res) => {
                        console.log(res);
                        toast.success("New Book added Successfully...");
                        setTimeout(()=>{
                            navigate('/admin');
                        },3000);
                      });
        }
      })

    return(
        <><div> 
            
            <div className="loginscreen">
            <Toaster position='top-center' reverseOrder={false}></Toaster>

    <div
      class="jumbotron1 p-3"
    >
      <h6 class="display-6 text-center">Add Books</h6>
      <hr></hr>
      <div className="textfields">
      <form className='py-1' onSubmit={formik.handleSubmit}>
      <Grid container spacing={1} item={true} sx={{justify: "Center" }}>
          <Grid
            className="Cardslist"
            xs={12}
            sm={12}
            md={6}
            lg={6}
          ><div style={{margin:"2%"}}>
           <div style={{marginBottom:"3%"}} className="text-start"><label>Book Name</label></div>
                      <div> <TextField
                      id="name"
                      label="Name"
                      variant="outlined"
                      sx={{ width: "100%", display: "flex", color: "black"}}
                      {...formik.getFieldProps('name')} 
                    />
                    </div>
                    </div></Grid>
          <Grid
            className="Cardslist"
            xs={12}
            sm={12}
            md={6}
            lg={6}
          ><div style={{margin:"2%"}}>
           <div style={{marginBottom:"3%"}}className="text-start"><label>Book Category</label></div>
                      <div> <TextField
                      id="category"
                      label="Category"
                      variant="outlined"
                      sx={{ width: "100%", display: "flex", color: "black"}}
                      {...formik.getFieldProps('category')} 
                    />
                    </div>
                    </div></Grid>
          </Grid>
         <Grid container spacing={1} item={true} sx={{justify: "Center" }}>
          <Grid
            className="Cardslist"
            xs={12}
            sm={12}
            md={6}
            lg={6}
          >
            
            <div style={{margin:"2%"}}>
           <div style={{marginBottom:"3%"}} className="text-start"><label>Author</label></div>
                      <div> <TextField
                      id="author"
                      label="Author"
                      variant="outlined"
                      sx={{ width: "100%", display: "flex", color: "black"}}
                      {...formik.getFieldProps('author')} 
                    />
                    </div>
                    </div>
            
            </Grid>
          <Grid
            className="Cardslist"
            xs={12}
            sm={12}
            md={6}
            lg={6}
          >
                  <div style={{margin:"2%"}}>
           <div style={{marginBottom:"3%"}} className="text-start"><label>Stocks Available</label></div>
                      <div> <TextField
                      id="quantity"
                      label="Quantity"
                      variant="outlined"
                      sx={{ width: "100%", display: "flex", color: "black"}}
                      {...formik.getFieldProps('quantity')} 
                    />
                    </div>
                    </div>  </Grid>
          </Grid> 
          <div style={{display:"flex",justifyContent:"center"}}>
          <Grid container spacing={1} item={true} sx={{justify: "Center",width: '75%' }}>
          <Grid
            className="Cardslist"
            xs={12}
            sm={12}
            md={12}
            lg={12}
          >
                     <div style={{margin:"2%"}}>
          <div style={{margin:"2%",marginBottom:"3%"}}className="text-start"><label>Book Price in Rs. Per month</label></div>
                      <div> <TextField
                      id="price"
                      label="Price"
                      variant="outlined"
                      sx={{ width: "100%", display: "flex", color: "black"}}
                      {...formik.getFieldProps('price')} 
                    />
                    </div>
                    </div>
                    </Grid>
          </Grid> 
              </div>
              <div style={{display:"flex",justifyContent:"center"}}><button className="createproductbutton" style={{border:"none",color:"white",backgroundColor:"blueviolet",padding:"5px",margin:"10px",borderRadius:"5px",fontSize:"22px",fontWeight:"500"}} type='submit'><span>Create New Book</span></button></div>
          </form>
      </div>
    </div>
  </div>
            
            </div></>
       );
}