import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../../CSS/Limited.css'
import logo from '../../../assest/limited.png'
import sorry from '../../../assest/sorry.svg'

export default function LimitedStock() {
  return (
    <>
            <div className='Limitedstock'>
                <div className='page-header'>
                    <h1 className='page-title'>
                        <span><img src={logo} alt="logo" /></span>
                        <span>Limited Stock</span>
                        <span className="badge badge-soft-secondary">0</span> 
                    </h1>
                    <p className='para'>The products are shown in this list which quantity is below 1</p>
                </div>
                <div className='row'>
                <div className='card'>
                    <div className='card-header border-0'>
                        <div className='card--header justify-content-end'>
                            <form >
                                <div className='input-group'>
                                    <input type="search" className='form-control' placeholder='search by id or name' />
                                    <div className='input-group-append'>
                                        <button type='submit' className='input-group-text'>Search</button>
                                    </div>
                                </div> 
                            </form>
                        </div>
                         </div>
                         <div className='table-responsive'>
                            <table className='table table-borderless table-thead-bordered '>
                               
                                    <tr className='lim-head'>
                                       <th>SL</th>
                                       <th>Product Name</th>
                                       <th>Selling Price</th>
                                       <th>Quantity</th>
                                       <th>Status</th>
                                       <th>Action</th>
                                    </tr>
                                <div className='sorry'> 
                                    <img src={sorry} alt="sorry" />
                                    <p>No Data To Show</p>
                                </div>
                            </table>
                         </div>
                    </div>
                </div>
            </div>
    </>
  )
}
