import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {  MenuApp, Pencil, Search, Trash } from 'react-bootstrap-icons';
import del from '..//../../assest/del.png'
import cat1 from '..//../../assest/cat1.png'
import '../../CSS/Categories.css'
export default function Categories() {
  return (
   <>
      

            <div className=' categories col-md-11'>

                <div className='row'>
                    <h1 className='col-3 fs-7 head'><span><MenuApp/></span><span>Category Setup</span></h1>
                </div>
           
            <div className='row'>
                {/* cardbody */}
                    <div className='card'>
                        <div className='card-body'>
                                    <div className='del'><img className='img' src={del} alt="del" /></div>           
                            <form class="row g-3">
                                       
                                        <div className="col-md-6">

                                            <label htmlFor="inputEmail4" className="form-label">Category Name(EN)</label>
                                            <input type="email" className="form-control" id="inputEmail4" placeholder="EX:Size" />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="inputPassword4" className="form-label">Categroy Image</label>
                                            <small className="text-danger">* ( Ratio3:1 )</small>
                                            <input type="file" className="form-control" id="inputPassword4" />
                                        </div>
                                        

                                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                    <button className="btn btn-secondary btn-lg me-md-2 " type="button">reset</button>
                                    <button className="btn btn-success btn-lg " type="button">Submit</button>
                                    </div>
                            </form>
                        </div>
                    </div>
                 </div>

                <div className='col-12'>
                    <div className="card">
                        <div className='card-header border-0'>
                            <div className='card--header'>
                                <h5 className='card-title'> Category details</h5>
                           <form>
                            <div className='input-group'> <input type="search" className='form-control' aria-label='Search' placeholder='search by name'/>
                            <span className='tio-input-search '><Search/></span>
                            <div class="input-group-append">
                                <button type="submit" class="input-group-text" fdprocessedid="maarpr"> Search</button>
                                </div>
                            </div>
                           </form>
                           </div>
                        </div>
                        <div className='table-responsive datatable-custom'>
                            <table className='table table-borderless table-thead-bordered table-nowrap table-align-middle card-table'>
                            
                                        <tr className='cat-head'>
                                        <th>SL</th>
                                        <th>Category image</th>
                                        <th>Name</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                        </tr>
                                      
                           
                                <tr>
                                    <td>1</td>
                                    <td><img src={cat1} alt="cat1"  className='cat1'/></td>
                                    <td> Breakfast</td>
                                    <td className='text-center'><div class="form-check form-switch"><input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked/></div></td>
                                    <td >
                                    <button className='icon1'><Pencil/></button> <button className='icon2'><Trash/></button>
                                    </td>
                                </tr>
                               
                            
                            </table>
                        </div>
                        
                    </div>
                    
                </div>
        </div>
      


   </>
 
  )
}

