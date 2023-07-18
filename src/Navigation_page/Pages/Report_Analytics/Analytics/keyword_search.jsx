import React from 'react'
import {BsSearch} from 'react-icons/bs'
import './Analyticskeyword.css'

const Analyticskeyword = () => {
  return (
     <>
     <div className='container'>
        <div className='d-flex flex-row'>
            <div className='icon'>
              <BsSearch/>
            </div>
            <div>
                <h3>Keyword Search Analytics</h3>
            </div>

        </div> 
        <div className='d-flex flex-row mt-3'>
              <div className='col-12 col-sm-4 m-1'>
                 <div className=' card'>
                    <div className='d-flex flex-row'>
                        <div>
                         <h5 className='h5'>Trending Keywords</h5>
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
                       <center>No data available</center><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                  </div>
               </div>
            <div className='col-12 col-sm-8 m-1'>
                 <div className='card'>
                    <div className='d-flex flex-row'>
                        <div>
                         <h5 className='h5'>Trending Keywords</h5>
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
                    <div className='search-volume d-flex flex-column text-center'>
                       <div className='search-icon'>
                          <img src="https://grofresh-admin.6amtech.com/public/assets/admin/img/analytics_logo.png" width={"60px"} alt=""/>
                       </div>
                       <div>
                         <h4>0</h4>
                        </div>   
                        <div>
                          <p>Total Search Volume</p>
                          </div>                    
                    </div>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                 </div>
            </div>
        </div><br/><br/>
        <div className='card'>
             <div className='card-body'>
                <div className='row icon'>
                  <div className='col-12 col-lg-2'>
                   <input type='text'
                    name='search'
                   placeholder='Search by keyword'/>
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
                    <th>Keyword</th>
                     <th>Search Volume</th>
                     <th>Related Categories</th>
                     <th>Related Products</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>fish</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>fresh</td>
                    <td>1</td>
                    <td>3</td>
                    <td>4</td>
                  </tr>
                </tbody>
              </table>
           </div>
     </div>
     </>
  )
}

export default Analyticskeyword
