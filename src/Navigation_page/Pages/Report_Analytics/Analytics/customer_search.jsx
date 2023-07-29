import React from 'react'
import {BsSearch} from 'react-icons/bs';
import {FiEye} from 'react-icons/fi';
import './search.css'
const Customeranalytics = () => {
  return (
    <>
      <div className='container'>
        <div className='d-flex flex-row'>
            <div className='icon'>
              <BsSearch/>
            </div>
            <div>
                <h3>Customer Search Analytics</h3>
            </div>

        </div> 
        <div className='d-flex flex-row mt-3'>
              <div className='col-12 col-sm-6 m-1'>
                 <div className=' card'>
                    <div className='d-flex flex-row'>
                        <div>
                         <h5 className='h5'>Top 5 Customer</h5>
                        </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <div>
                          <select className='select mt-3'>
                          <option>Today</option>
                          <option>All Time</option>
                          <option>This Week</option>
                          <option>Last Week</option>
                          </select>
                        </div>
                      </div>
                      <p>According to search volume</p>
                       <p>No data available</p>
                       <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                  </div>
               </div>
            <div className='col-12 col-sm-6 m-1'>
                 <div className='card'>
                    <div className='d-flex flex-row'>
                        <div>
                         <h5 className='h5'>Top Products</h5>
                        </div>
                        <div>
                          <select className='select mt-3 option'>
                          <option>Today</option>
                          <option>All Time</option>
                          <option>This Week</option>
                          <option>Last Week</option>
                          </select>
                        </div>
                    </div>
                    <p>According to search volume</p>
                    <p>No data available</p>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                 </div>
            </div>
        </div><br/><br/>
        <div className='card'>
             <div className='card-body'>
                <div className='row icon'>
                  <div className='col-12 col-lg-2'>
                   <input type='text'
                    name='search'
                   placeholder='Search by customer info'/>
                  </div>
                  <div className='col-12 col-lg-1'>
                   <button className='search'>Search</button>
                  </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <div className='col-12 col-lg-1'>
                    <button className='div'>export</button>
                  </div>
                </div>
              </div><br/>
              <table className='table'>
                <thead className='table-success'>
                  <tr>
                    <th>SL</th>
                    <th>Customer</th>
                     <th>Search Volume</th>
                     <th>Related Categories</th>
                     <th>Related Products</th>
                     <th>Times Product Visited</th>
                     <th>Total Orders</th>
                     <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td><img class="rounded-full" src="https://grofresh-admin.6amtech.com/public/assets/admin/img/admin.png" onerror="this.src='https://grofresh-admin.6amtech.com/public/assets/admin/img/admin.png'" width={"40px"}></img> New T User 2</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>2</td>
                    <td>1</td>
                    <td><button><FiEye/>view</button></td>
                  </tr>
                </tbody>
              </table>
           </div>
     </div>
    </>
  )
}

export default Customeranalytics
