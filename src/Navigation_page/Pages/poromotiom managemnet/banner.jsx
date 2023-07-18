import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import logo from '../../../assest/banner.png'
import '../../CSS/Banner.css'
import { ArrowDown,Pencil,Trash } from 'react-bootstrap-icons';
import upload from '../../../assest/upload-vertical.png'
import banner from '../../../assest/banner1.png'
export default function Banner(){
  return (
    <>

    <div className='Banner'>
        <div className='page-header'>
            <h1 className='page-title'>
                <span><img src={logo} className='logo' alt="logo" /></span>
                <span>Banner</span>
            </h1>
        </div>

        <div className='card'>
          <div className='card-body'>
            <div className='row '>
              <div className='col-6'>
              <div className='row form-row'>
                  <div className='col-12'>
                        <div className='form-group'>
                            <label className='input-label'>Title</label>
                            <input type="number" className='form-control  m-2' placeholder='New banner'/>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='form-group'>
                            <label className='input-label'>Item Type</label><span>*</span>
                            <select className='form-control m-2'>
                            <option value="category">Category</option>
                            <option value="product">Product</option>
                            </select>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='form-group'>
                            <label className='input-label'>Product</label><span>*</span>
                            <select className='form-control m-2'><span><ArrowDown/></span>
                            <option value="category">Banana</option>
                            <option value="product">Beef Bone In</option>
                            <option value="category">corn flakes</option>
                            <option >Cuccio SOMATOLOGY Bergamot Balancing Oil</option>
                            <option>FIJI Natural Artesian Water</option>
                            <option>Fla-Vor-Ice Popsicle Variety Pack</option>
                            <option>Fresh Chicken 2kg</option>
                            <option>Fresh Rui Fish 5kg</option>
                            <option>Green Grape</option>
                            <option >Ladies Finger</option>
                            </select>
                        </div>
                    </div>
                  </div>
                  </div>
              <div className='col-6'>
                <h5>Banner Image <small className='text-danger'>*(Ratio 3:1)</small></h5>
              <div className='image'>
                          <img src={upload} className='upload' alt="upload" />
              </div>
              </div>
              <div className='col-12 d-flex justify-content-end'>
                <button type='reset' className='btn reset'>Reset</button>
                <button type='submit' className='btn submit'>Submit</button>
              </div>
            </div>
          </div>
        </div>

        <div className='card'>
          <div className='card-header border-0 '>
            <div className='card--header '> 
              <div><h5 className='card-title'> Banner List <span className='badge'>5</span></h5></div>
              <div>
              <form>
                <div className='input-group'>
                  <input type="search" className='form-control' placeholder='search by id or name' />
                  <div className='input-group-append'>
                    <button type='submit'className='input-group-text'>Search</button>
                  </div>
                </div>
              </form>
              </div>
            </div> 
          </div>
          <div className='table-responsive'>
            <table className='table table-borderless'>
              <tr className='thead'><th>SL</th>
                  <th>Banner Image</th>
                  <th>Title</th>
                  <th>Banner Type</th>
                  <th>Status</th>
                  <th>Action</th>
              </tr>
              <tr>
                <td>1</td>
                <td><img src={banner} className='banner' alt="banner" /></td>
                <td>rwg</td>
                <td>Category:Health Care</td>
                <td><label className=' form-check form-switch '> <input type="checkbox" className='form-check-input' /></label></td>
                <td><button className='icon' ><span className='icon1'><Pencil/></span><span className='icon2'><Trash/></span></button></td>
              </tr>
            </table>
          </div>

        </div>

    </div>
    </>
  )
}
