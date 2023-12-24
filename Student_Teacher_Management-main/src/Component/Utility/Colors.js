import React from "react";
import Navbar from "../Navbar/Navbar";
import './Colors.css'


export default function Colors(){
    return(<div>
        <Navbar/>
        <h3>Color Utilities</h3>
        <div class="container-fluid content">Bootstrap's default utility classes can be found on the official Bootstrap Documentation page. The custom utilities below were created to extend this theme past the default utility classes built into Bootstrap's framework.</div>
        <div class="row utilitycolorconent container-fluid">

                        <div class="col-lg-4">

                            <div class="card shadow mb-4">
                                <div class="card-header py-3">
                                    <h6 class="m-0 font-weight-bold text-primary">Contextual Colors</h6>
                                </div>
                                <div class="card-body">
                                <div class="text-muted">This text is muted.</div>
  <div class="text-primary">This text is important.</div>
  <div class="text-success">This text indicates success.</div>
  <div class="text-info">This text represents some information.</div>
  <div class="text-warning">This text represents a warning.</div>
  <div class="text-danger">This text represents danger.</div>
  <div class="text-secondary">Secondary text.</div>
  <div class="text-dark">This text is dark grey.</div>
  <div class="text-body">Default body color (often black).</div>
  <div class="text-light">This text is light grey (on white background).</div>
  <div class="text-white">This text is white (on white background).</div>
                                </div>
                            </div>

                      
                            <div class="card shadow mb-4">
                                <div class="card-header py-3">
                                    <h6 class="m-0 font-weight-bold text-primary">Custom Font Size Utilities</h6>
                                </div>
                                <div class="card-body">
                                    <div class="text-xs">text-xs</div>
                                    <div class="text-lg mb-0">.text-lg</div>
                                </div>
                            </div>

                        </div>

                        <div class="col-lg-4">

                          
                            <div class="card shadow mb-4">
                                <div class="card-header py-3">
                                    <h6 class="m-0 font-weight-bold text-primary text-center">Custom Background Utilities
                                    </h6>
                                </div>
                                <div class="card-body">
                                    <div class="px-3 py-5 bg-primary text-white text-center">bg-primary</div>
                                    <div class="px-3 py-5 bg-secondary text-white text-center">bg-secondary</div>
                                    <div class="px-3 py-5 bg-success text-white text-center">bg-success</div>
                                    <div class="px-3 py-5 bg-info text-white text-center">bg-info</div>
                                    <div class="px-3 py-5 bg-warning text-white text-center">bg-warning</div>
                                    <div class="px-3 py-5 bg-danger text-white text-center">bg-danger</div>
                                    <div class="px-3 py-5 bg-light text-center">bg-light</div>
                                    <div class="px-3 py-5 bg-dark text-white text-center">bg-dark</div>

                                </div>
                            </div>

                        </div>

                     
                        <div class="col-lg-4">
                     
                            <div class="card shadow mb-4">
                                <div class="card-header py-3">
                                    <h6 class="m-0 font-weight-bold text-primary">Custom Grayscale Background Utilities
                                    </h6>
                                </div>
                                <div class="card-body">
                                    <div class="p-3 bg-gray-100">bg-gray-100</div>
                                    <div class="p-3 bg-gray-200">bg-gray-200</div>
                                    <div class="p-3 bg-gray-300">bg-gray-300</div>
                                    <div class="p-3 bg-gray-400">bg-gray-400</div>
                                    <div class="p-3 bg-gray-500">bg-gray-500</div>
                                    <div class="p-3 bg-gray-600">bg-gray-600</div>
                                    <div class="p-3 bg-gray-700">bg-gray-700</div>
                                    <div class="p-3 bg-gray-800">bg-gray-800</div>
                                    <div class="p-3 bg-gray-900">bg-gray-900</div>
                                </div>
                            </div> 
                        </div>

                    </div>
        
        
        </div>);
}