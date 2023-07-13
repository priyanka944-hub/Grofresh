import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../../CSS/Prolist.css'
import logo from '../../../assest/proli.png'
import logo1 from '../../../assest/prolist1.png'
import { Download,Pencil,Trash} from 'react-bootstrap-icons';
export default function ProductList() {
  return (
  <>
        <div className=' Productlist'>

          <div className='page-header'>
            <div className='page-title'>
              <h5>
                <span><img src={logo} alt="proli" /></span>
                <span>Product List  <span className='badge'>18</span></span>
                </h5>
            </div>
          </div>

          
            <div className='col-12'>
              <div className='card'>
                <div className='card-header border-0'>
                  <div className='card--header'> 
                  <form action="">
                    <div className='input-group'>
                      <input type="search" placeholder='search' className='form-control ' />
                      <div className='input-group-append'>
                        <button type='submit' className='input-group-text search'> Search</button></div></div></form>
                        </div>
                          <div className="dropdown">
                            <a className="btn ex dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                              <span className='ex'><Download/></span> Export</a>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                              <li><a className="dropdown-item" href="#">MS Excel</a></li>
                            </ul>
                            
                          <button className='btn1 p-2 m-1'>Limited Stocks</button>
                          <button  className='btn2 p-2 m-1'>+Add new product</button>
                          
                          
                          </div>
                          

                </div>

                <div className='table-responsive'>
                  <table className='table table-borderless table-thead-bordered'>
                    
                    <tr className='proli-head'>
                            <th>SL</th>
                            <th>Product name</th>
                            <th>Selling price</th>
                            <th className="text-center">Total sale</th>
                            <th className="text-center">Show in daily needs</th>
                            <th className="text-center">Featured</th>
                            <th className="text-center">Status</th>
                            <th className="text-center">Action</th>
                            </tr>
                  
                    <tbody> 
                      <tr>
                        <td>1</td>
                        <td><span><img className='img' src={logo1} alt="pro1" /> Corn flakes</span></td>
                        <td>600.45$</td>
                        <td>15</td>
                        <td> <label className='form-check form-switch'> <input type="checkbox" className='form-check-input input1' /></label></td>
                        <td > <label className='form-check form-switch'> <input type="checkbox" className='form-check-input input2' /></label></td>
                        <td > <label className='form-check form-switch'> <input type="checkbox" className='form-check-input input3' /></label></td>
                        <td > <button className='icon1'><Pencil/></button> <button className='icon2'><Trash/></button></td>
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
