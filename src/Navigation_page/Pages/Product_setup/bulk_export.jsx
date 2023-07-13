import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import logo from '../../../assest/bulkExp.png'
import '../../CSS/BulkExp.css'

export default function BulkExport() {
  return (
    <>

    <div className=' Bulkexp'>
        <div className='page-header'>
            <h1 className='page-title'>
                <span><img src={logo} alt="logo" /></span>
                <span>Products Bulk Export</span> 
            </h1>
        </div>

        <div className='card'>
            <div className='card-body'>
                <div className='step'>
                    <div className='divstep'><h4>Step1</h4>
                        <p>Select Data Type</p></div>
                    <div className='divstep'><h4>Step2</h4>
                    <p>Select Data Range and Export</p></div>
                </div>
                
                <div className="dropdown ">
                <div>Type</div>
                <button className="btn dropdown-toggle " data-bs-toggle="dropdown" type="button" >
                     All Data
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a className="dropdown-item" href="#">All Data</a></li>
                <li><a className="dropdown-item" href="#">Data Wise</a></li>

                </ul>
                </div>
               
           

                    <div class="d-grid gap-2 d-md-flex justify-content-md-end m-5">
                    <button class="btn btn1 me-md-2" type="button">Clear</button>
                    <button class="btn btn2 " type="button">Export</button>
                    </div>
                 </div>
         </div> 
    </div>
    </>
  )
}
