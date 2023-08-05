import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {  MenuApp } from 'react-bootstrap-icons';
import './subCategoryUpdate.css'
export default function SubCtegoryUpdate() {
  return (
    <div className='SubUpdate'>
      
      <div className='row'>
                    <h4 className=' head'>
                        <span ><MenuApp/></span>
                        <span > Sub Category Setup</span></h4>
                </div>
            
            <div className='row'>
                {/* cardbody */}
                    <div className='card'>
                        <div className='card-body'>           
                            <form class="row g-3">
                                       
                                        <div className="col-md-6">

                                            <label htmlFor="inputEmail4" className="form-label">Sub Category Name (EN)</label>
                                            <input type="email" className="form-control" id="inputEmail4" placeholder="New Sub Category" />
                                        </div>
                                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                    <button className="btn btn-2 btn-lg me-md-2 " type="button">Reset</button>
                                    <button className="btn btn-1 btn-lg " type="button">Submit</button>
                                    </div>
                            </form>
                        </div>
                    </div>
                 </div>
    </div>
  )
}
