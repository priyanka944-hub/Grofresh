import React from 'react'
import './flashsale.css';
import {FcFlashOn} from 'react-icons/fc'
import {FaPenSquare} from 'react-icons/fa'
import {AiFillDelete} from 'react-icons/ai'
const Flashsale = () => {
  return (
    <>
     <div className='container'>
       <div className='div'> 
          <div className='top'>   
            <FcFlashOn/>
          </div>
          <div>
            <h3>Flash Sale</h3>
          </div>
       </div>
       <div className='card'>
         <div className='card-body'>
            <div className='row'>
                <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                    <label>Title</label>
                    <input type='text'
                    className='form-control'
                    name='title'
                    placeholder='Enter title'/><br/>
                    <label>Start Date</label>
                    <input type='date'
                    className='form-control'
                    name="dob"/><br/>
                    <label>End Date</label>
                    <input type='date'
                    className='form-control'
                    name="dob"/>
                </div>
                  <div className='col-12  col-lg-4 left'>
                    <center><label>Image<span className='text-danger'> * ( Ratio 3:1 )</span></label></center><br/>
                        <label>
                        <input type='file' name='image'    className="" accept='.jpg,.png, .jpeg, .gif, .bmp, .tif, .tiff|image/*' hidden="file"/>
                        <img className='label' src='https://grofresh-admin.6amtech.com/public/assets/admin/img/upload-vertical.png' width={"400px"}></img>
                        </label>
                   </div>
            </div>
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
        <div className='card'>
            <div className='card-header background'>
               <div className='div'>
                  <div>
                    <h5>Flash Sale List</h5>
                  </div>&nbsp;&nbsp;
                  <div className='badge badge'>
                    <h6 className=' text-danger'>1</h6>
                  </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <div>
                    <input type='search' name='search' placeholder='Search by flash same title'/>
                  </div>
                  <div>
                    <button className='search'>Search</button>
                  </div>
               </div>
            </div>
            <div className='card-body'>   
              <table className='table table-stripped'>
                <thead>
                  <tr>
                    <th>SL</th>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Duration</th>
                    <th>Status</th>
                    <th>Publish</th>
                    <th>Active Product</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td><img class="img-vertical-150" src="https://grofresh-admin.6amtech.com/storage/app/public/offer/2023-03-25-641e7bbc07bc1.png" onerror="this.src='https://grofresh-admin.6amtech.com/public/assets/admin/img/160x160/img2.jpg'" width={"100px"}></img></td>
                    <td>New flash sale</td>
                    <td>25-Mar-23 - 31-Dec-23	</td>
                    <td>Active</td>
                    <td> <label className='form-check form-switch'> <input type="checkbox" className='form-check-input ' checked/></label></td>
                    <td>2</td>
                    <td><button className='btn'>Add Product</button></td>
                    <td style={{fontSize:"20px"}}><FaPenSquare/>
                            <AiFillDelete/></td>
                  </tr>
                </tbody>
              </table>
            </div>
        </div>
     </div>
    </>
  )
}

export default Flashsale
