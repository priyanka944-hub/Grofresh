import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import coupons from '../../../assest/coupon.png'
import '../../CSS/Coupons.css'
export default function Coupons() {
  return (
   <>
            <div className='Coupons'>  
                <div className='page-header'>
                    <h1 className='page-title'>
                        <span> <img src={coupons} alt="coupons"  className='coupons'/></span>
                        <span>Copouns Setup</span>
                    </h1>
                </div>

                <div className='card'>
                    <div className='card-body'>
                        <form>
                            <div className='row'>
                                <div className='col-4 sm-col-6' >
                                    <div className='form-group'>
                                        <label className='input-label'>Coupon Type</label>
                                        <select className='form-control'>
                                            <option value="default">Default</option>
                                            <option value="first">First order</option>
                                            <option value="free">Free Delivary</option>
                                            <option value="customer"> Customer Wise</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='col-4 sm-col-6'>
                                    <div className='form-group'>
                                        <label className='input-label'>Coupon title</label>
                                        <input type="text" className='form-control' placeholder='New Coupon' />
                                    </div>
                                </div>
                                <div className='col-4 sm-col-6'>
                                    <div className='form-group'>
                                        <div className='d-flex justify-content-between'>
                                            <label className='input-label'> Coupon Code</label>
                                            <a href="#">Generate Code</a>
                                            </div>
                                            <input type="text" className='form-control' placeholder="Xiqn6aLM"/>
                                    </div> 
                                </div>
                                <div className='col-4 sm-col-6'>
                                    <div className='form-group'> 
                                    <label className='input-label'>Limmit for same User</label>
                                    <input type="text" className='form-control' placeholder='Ex:10' />
                                    </div>
                                </div>
                                <div className='col-4 sm-col-6'>
                                    <div className='form-group'>
                                        <label className='input-label'>Discount Type</label>
                                        <select className='form-control'>
                                                <option value="percent">Percent</option>
                                                <option value="amount">Amount</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='col-4 sm-col-6'>
                                    <div className='form-group'>
                                        <label className='input-label'>Discount Amount</label>
                                        <input type="text" className='form-control' placeholder='0' />
                                    </div>
                                </div>

                                <div className='col-4 sm-col-6'>
                                    <div className='form-group'>
                                        <label htmlFor="">Minimum Purchase</label>
                                        <input type="text" className='form-control' placeholder='0' />
                                    </div>
                                </div>
                                <div className='col-4 sm-col-6'>
                                <div className='form-group'>
                                        <label htmlFor="">Maximum Purchase</label>
                                        <input type="text" className='form-control' placeholder='0' />
                                    </div>
                                </div>
                                <div className='col-4 sm-col-6'>
                                    <div className='form-group'>
                                        <label htmlFor="">Start Date</label>
                                        <input type="date" className='form-control' />
                                    </div>
                                </div>
                                <div className='col-4 sm-col-6'>
                                <div className='form-group'>
                                        <label htmlFor="">Expiry Date</label>
                                        <input type="date" className='form-control' />
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className='d-flex justify-content-end'>
                            <button type='reset' className='btn btn-reset'>Reset</button>
                            <button type='submit' className='btn btn-submit'>Submit</button>
                        </div>
                    </div>
                </div>


                <div className='card'>
                    <div className='card-header border-0'>
                        <h5 className='card--header'>
                            <span>Coupon Table <span className='badge'>5</span></span>
                            
                        </h5>
                        <form action="">
                            <div className='input-group'>
                                <input type="search" className='form-control' placeholder='search by id or name'/>
                                <div className='input-group-append'>
                                    <button type='submit' className='input-group-text'>Search</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className='card-body'>
                        <div className='table-responsive'>
                            <table className='table table-borderless'>
                                <tr className='thead'>
                                    <th>SL</th>
                                    <th>Coupon</th>
                                    <th> Coupon type</th>
                                    <th> Discount Type</th>
                                    <th> Duration</th>
                                    <th>User Limit</th>
                                    <th>Status </th>
                                    <th>Action</th>
                                </tr>
                            </table>
                        </div>
                    </div>

                </div>

            </div>
   </>
  )
}
