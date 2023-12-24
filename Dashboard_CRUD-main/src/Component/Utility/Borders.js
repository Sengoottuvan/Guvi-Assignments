import React from "react";
import Navbar from "../Navbar/Navbar";
import './Colors.css';

export default function Borders(){
    return(
    <div>
        <Navbar/>
        <h3>Borders</h3>
        <div>
        <div class="row utilitiyborders container-fluid">

<div class="col-lg-6">
   <div class="text-center"><h4>Border  Colors</h4></div>

    <div class="card mb-4 py-3 text-center border border-primary">
        <div class="card-body">
        border-primary
        </div>
    </div>

    <div class="card mb-4 py-3 text-center  border border-secondary">
        <div class="card-body">
            border-secondary
        </div>
    </div>

    <div class="card mb-4 py-3 text-center  border border-success">
        <div class="card-body">
            border-success
        </div>
    </div>

    <div class="card mb-4 py-3 text-center border border-danger">
        <div class="card-body">
            border-danger
        </div>
    </div>

    <div class="card mb-4 py-3 text-center border border-warning">
        <div class="card-body">
        border-warning
        </div>
    </div>

    <div class="card mb-4 py-3 text-center border border-info">
        <div class="card-body">
        border-info
        </div>
    </div>

    <div class="card mb-4 py-3 text-center border border-light">
        <div class="card-body">
        border-light
        </div>
    </div>
    <div class="card mb-4 py-3 text-center border border-dark">
        <div class="card-body">
        border-dark
        </div>
    </div>
    <div class="card mb-4 py-3 text-center border border-white">
        <div class="card-body">
        border-white
        </div>
    </div>

</div>

<div class="col-lg-6">
<div class="text-center"><h4>Border Width</h4></div>
    <div class="card mb-4 py-3 text-center border border-1">
        <div class="card-body">
        border-1
        </div>
    </div>

    <div class="card mb-4 py-3 text-center border border-2">
        <div class="card-body">
        border2
        </div>
    </div>

    <div class="card mb-4 py-3 text-center border border-3">
        <div class="card-body">
       border-3
        </div>
    </div>

    <div class="card mb-4 py-3 text-center border border-4">
        <div class="card-body">
       border-4
        </div>
    </div>

    <div class="card mb-4 py-3 text-center border border-5">
        <div class="card-body">
            border-5
        </div>
    </div>

</div>

</div>
        </div>
        
    </div>);

}
