import React from 'react';
import './sendnotifications.css';
import {IoMdNotifications} from 'react-icons/io'
import {BsToggleOn} from  'react-icons/bs'
import {FaPenSquare} from 'react-icons/fa'
import {AiFillDelete} from 'react-icons/ai'
const Sendnotifications = () => {
  return (
    <>
    <div className='container '>
       <div className='h3'>
         <div >
            <IoMdNotifications/>
         </div>
          <div className='icon' >
            <h3>Send Push Notification</h3>
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
                        placeholder='Ex:New Notifications'/><br/>
                    
                        <label>Description</label>
                        <textarea class="form-control" name="message" rows="4" data-rule="required" data-msg="Please write something for us" placeholder="Ex:Max 250 Words"></textarea>
                     </div>
                     <div className='col-12  col-lg-4 left'>
                    <center><label>Notification Banner<span className='text-danger'> * ( Ratio 3:1 )</span></label></center><br/>
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
        </div><br/><br/>
        <div className='card '>
           <div className='card-header header'>
               <div className='div'>
                  <div>
                    <h5>Notifications Table </h5>
                  </div>&nbsp;&nbsp;
                  <div className='badge'>
                    <h6 className=' text-danger'>2</h6>
                  </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <div>
                    <input type='search' name='search' placeholder='Search'/>
                  </div>
                  <div>
                    <button className='search'>Search</button>
                  </div>
               </div>
           </div>
           <div className='card-body'>
                <table className='table'>
                    <thead className='table-success'>
                        <tr>
                            <th>SL</th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td><img class="img-vertical-150" onerror="this.src='https://grofresh-admin.6amtech.com/public/assets/admin/img/160x160/img2.jpg'" src="https://grofresh-admin.6amtech.com/storage/app/public/notification/2023-03-25-641e7b874e35d.png" width={"150px"}></img></td>
                            <td className='top'>Test Notification</td>
                            <td>New Notification for test. ...</td>
                            <td style={{fontSize:"20px"}}> <label className= 'form-check form-switch bottom top' > <input type="checkbox"  className='form-check-input ' checked/></label></td>
                            <td style={{fontSize:"20px"}}><FaPenSquare/>
                            <AiFillDelete/></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td><img class="img-vertical-150" onerror="this.src='https://grofresh-admin.6amtech.com/public/assets/admin/img/160x160/img2.jpg'" src="https://grofresh-admin.6amtech.com/storage/app/public/notification/2021-07-06-60e49a46c933d.png" width={"70px"}></img></td>
                            <td>Test 1</td>
                            <td>abcd</td>
                            <td style={{ fontSize:"20px" }}> <label className='form-check form-switch'> <input type="checkbox" className='form-check-input ' checked/></label></td>
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

export default Sendnotifications
