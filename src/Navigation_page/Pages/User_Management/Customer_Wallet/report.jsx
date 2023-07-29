import React from 'react'

import { FiFilter } from "react-icons/fi";
import './report.css';
const Report = () => {
  return (
        <>
        <div className='container'> 
           <div className='heading'>
                <div>
                 <img src="https://grofresh-admin.6amtech.com/public/assets/admin/img/wallet.png" width={"35px"} alt="public"></img>
                </div>&nbsp;&nbsp;&nbsp;
                <span><h4><b>Customer Wallet Report</b></h4></span>
           </div><br></br>
           <div className='card'>
              <div className='card-header filter heading'>
                 <div>
                  <FiFilter/>
                 </div>&nbsp;&nbsp;
                 <span><h5>Filter Option</h5></span>

               </div>
               <div className='card-body'> 
                 <div className='row'>
                     <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                        <label for="Dob"></label>
                         <input type='date'
                         name='date'
                         className='form-control'/>
                     </div>
                     <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                        <label for="Dob"></label>
                         <input type='date'
                         name='date'
                         className='form-control'/>
                     </div>
                 </div><br></br>
                 <div className="row">
                    <div className='col-12 col-sm-6 col-md-6 col-lg-6'> 
                      <select className ='Selct Customer form-control'>
                      <option>All</option>
                      <option>Add fund by admin</option>
                      <option>Referal Order Place</option>
                      <option>Loyalty point to wallet</option>
                      <option>Order Place</option>
                      </select>
                    </div>
                    <div className='col-12 col-sm-6 col-md-6 col-lg-6'> 
                      <select className ='Selct Customer form-control'>
                      <option>Select Customer</option>
                      <option>Ashek Elahe(018797300)</option>
                      <option>Nipon Roy(0244524557)</option>
                      </select>
                    </div>
                 </div><br></br>
                 <div className='row button'>
                 <div className='col-12 col-lg-8'>

                 </div>
                 <div className='col-12 col-lg-4'>
                    <button className='reset'>Reset</button> &nbsp;&nbsp;&nbsp;
                    <button className='submit'>Submit</button>
                 </div>
              </div>
               </div>

            </div><br></br>
            <div className='row'>
                <div className='col-12 col-sm-4 col-md-4 col-lg-4 '>
                    <div className='card whole'>
                        <div className='image'>
                         <img class="resturant-icon" src="https://grofresh-admin.6amtech.com/public/assets/admin/img/dashboard/3.png" width={"50px"} alt="dashboard"></img>
                        </div>
                         <h4 className='debit'>Debit</h4>
                         <h5 className='debit'>0.00$</h5><br></br>
                    </div>
                 </div>
                <div className='col-12 col-sm-4 col-md-4 col-lg-4'>
                    <div className='card whole1'>
                        <div className='image'>
                        <img class="resturant-icon" src="https://grofresh-admin.6amtech.com/public/assets/admin/img/dashboard/4.png"  alt="dashboard"></img>
                        </div>
                         <h4 className='debit'>Credit</h4>
                         <h5 className='debit'>1,440.00$</h5><br></br>
                    </div>
                </div>
                 <div className='col-12 col-sm-4 col-md-4 col-lg-4'>
                    <div className='card whole3'>
                        <div className='image'>
                        <img class="resturant-icon" src="https://grofresh-admin.6amtech.com/public/assets/admin/img/dashboard/1.png" alt="dashboard"></img>
                        </div>
                         <h4 className='debit'>Balance</h4>
                         <h5 className='debit'>1,440.00$</h5><br></br>
                    </div>
                </div>
            </div><br></br>
            <div className='card'>
              <div className='card-header filter'>
                 <div>
                   <i class="tio-filter-outlined"></i>
                 </div>
                 <span><h5>Transations</h5></span>
               </div>
               <div className='card-body'>
                 <div>
                    <table className='table table-stripped'>
                      <thead className='table-info'>
                        <tr>
                          <th>SI</th>
                          <th>Transaction Id</th>
                          <th>Customer</th>
                          <th>Credit</th>
                          <th>Debit</th>
                          <th>Balance</th>
                          <th>Transaction Type</th>
                          <th>Created At</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>EsadP9QMfGs8J2EPYwdoxqKBpxcTvo</td>
                          <td>New T User 2</td>
                          <td>300</td>
                          <td>0</td>
                          <td>374.00$</td>
                          <td><button className='text-success back Loyality'>Loyalty point to wallet</button></td>
                          <td>2023/03/25</td>
                        </tr>
                      </tbody>
                    </table>
                 </div>
               </div>
            </div>
            
        </div>
        </>
  )
}

export default Report;
