import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../../CSS/BulkImp.css'
import icon from '../../../assest/bulkImp.png'
import { CloudArrowUp } from 'react-bootstrap-icons';
export default function BulkImport() {
  return (
   <>
   <div className='Bulkimp'>
    <div className='page-header'>
        <h1 className='page-title'>
            <span><img src={icon} alt="logo" /></span>
            <span>Bulk  Import</span>
        </h1>
    </div>
    <div className='card'>
    
        <div className='col-12'>
                
                <h2 class="title">Instructions : </h2>
                <p> 1. Download the format file and fill it with proper data.</p>
                <p>2. You can download the example file to understand how the data must be filled.</p>
                <p>3. Once you have downloaded and filled the format file upload it in the form below and submit.</p>
                <p> 4. After uploading products you need to edit them and set product s images and choices.</p>
                <p class="mb-0"> 5. You can get category and sub-category id from their list please input the right ids.</p>
                 
        </div>  

        
    </div>
    <div className='col-md-12'>
        <form action="" className='product-form'>
            <div className='card'>
                <div className='card-body'>
                        <h5 className='header'>Do not have the template?<a href="#">Download Here</a></h5>
                        <div className='form-group'>
                            <label className='drag--area mx-auto cursor-pointer'>
                                <span className='cloud'><CloudArrowUp/></span>
                                <div>Click here to import the .xlsx file here</div>
                                <div><input type="file"  /></div>
                            </label>
                        </div>
                        <div className='col-12 d-flex justify-content-end'>
                            <button type='reset' className='btn btn1 p-3 m-3'>Reset</button>
                            <button type='submit' className='btn btn2 p-3 m-3'>Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        </div> 
   </div>
   </>
  )
}
