import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './css/Productreviews.css'
import logo from '../../../assest/productreviews.png'
import img1 from '../../../assest/prolist1.png'
import img2 from '../../../assest/prolist15.png'
import img3 from '../../../assest/prolist14.png'
import { StarFill} from 'react-bootstrap-icons';
export default function ProductReviews() {
  return (
  <> 
            <div className=' Productreview'>
                <div className='page-header'>
                    <h1 className='page-title'>
                        <span><img src={logo} className='logo' alt="logo" /></span>
                        <span>Product Reviews</span>
                        <span className="badge badge-soft-secondary">9</span>
                    </h1>
                </div>
                <div className='card'>
                    <div className='card-header border-0'>
                        <div className='card--header justify-content-end'>
                            <form action="">
                                <div className='input-group'>
                                    <input type="search"  className='form-control' placeholder='Ex: Search by Id or name'/>
                                    <div className='input-group-append'>
                                    <button type='submit' className='input-group-text'>Search</button>
                                </div>
                                </div>
                                
                            </form>
                        </div>
                    </div>
                    
                <div className='table-responsive datatable-custom'>
                    <table className='table table-borderless  card-table'>
                      
                        <tr className='prod-head'>
                            <th>SL</th>
                            <th>Product name</th>
                            <th>Ratings</th>
                            <th>Customer info</th>
                            <th>Status</th>
                            </tr>
                        
                            <tr>
                                <td>1</td>
                                <td><span><img src={img1}  className='img'alt="logo" /></span><span>Corn flakes</span></td>
                                <td ><span className='rate'>3</span><span className='rate rates'><StarFill/></span>
                                <div>ok</div></td>
                                <td><div><b><a href="">New Test </a></b></div>
                                <div><a href="">+8801621720000</a></div></td>
                                <td> <label className='form-check form-switch'> <input type="checkbox" className='form-check-input ' checked/></label></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td><span><img src={img2}  className='img'alt="logo" /></span><span> Green Grapes</span></td>
                                <td ><span className='rate'>5</span><span className='rate rates'><StarFill/></span>
                                <div>The products and pricing was good. <br/>Received the products well in time.</div></td>
                                <td><div><b><a href="">Fatema Subarna </a></b></div>
                                <div><a href="">+8801885576622</a></div></td>
                                <td> <label className='form-check form-switch'> <input type="checkbox" className='form-check-input ' checked/></label></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td><span><img src={img1}  className='img'alt="logo" /></span><span>Corn flakes</span></td>
                                <td ><span className='rate'>3</span><span className='rate rates'><StarFill/></span>
                                <div>nice product</div></td>
                                <td><div><b><a href="">Fatema Subarna </a></b></div>
                                <div><a href="">+8801885576622</a></div></td>
                                <td> <label className='form-check form-switch'> <input type="checkbox" className='form-check-input ' checked/></label></td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td><span><img src={img3}  className='img'alt="logo" /></span><span>Oranges</span></td>
                                <td ><span className='rate'>5</span><span className='rate rates'><StarFill/></span>
                                <div>nice product</div></td>
                                <td><div><b><a href="">Fatema Subarna </a></b></div>
                                <div><a href="">+8801885576622</a></div></td>
                                <td> <label className='form-check form-switch'> <input type="checkbox" className='form-check-input ' checked/></label></td>
                            </tr>
                     
                    </table>
                </div>
                </div>

            </div>
  </>
  )
}
