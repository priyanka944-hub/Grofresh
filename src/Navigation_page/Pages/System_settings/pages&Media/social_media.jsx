import React from 'react'
import './socialmedia.css'
import {FaPenSquare} from 'react-icons/fa'
const Socialmedia = () => {
  return (
     <>
      <div className='container'>
         <div className='flex top'>
            <div>
            <img src="https://grofresh-admin.6amtech.com/public/assets/admin/img/social.png" class="w--26" alt="" width={"50px"}></img>
            </div>
            <div>
                <h3>Social Media Links</h3>
            </div>
         </div><br></br>
         <div className='card'>
            <div className='card-body'>
                <div className='row'>
                    <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                        <label for="states">Name</label>
                        <select className="states form-control">
                            <option>---Select---</option>
                            <option>Instagram</option>
                            <option>Facebook</option>
                            <option>Twitter</option>
                            <option>LinkedIn</option>
                            <option>Pinterest</option>
                        </select>
                    </div>
                    <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                        <label>Social Media Link</label>
                        <input type='text'
                        className='form-control'
                        name='media'
                        placeholder='Enter Social  Media Link'/>
                    </div>
                </div><br/>
                <div className='row button'>
                   <div className='col-12 col-lg-8'>

                    </div>
                    <div className='col-12 col-lg-4'>
                    <button className='reset'>Reset</button> &nbsp;&nbsp;&nbsp;
                    <button className='submit'>Submit</button>
                    </div>
                </div><br/>
            </div>
         </div><br/>
         <div className='card'>
            <div className='card-body'>
                <table className='table'>
                    <thead className='table-info'>
                        <tr>
                            <th>SL</th>
                            <th>Name</th>
                            <th>Link</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Instagram</td>
                            <td>https://www.instagram.com/</td>
                            <td> <label className='form-check form-switch'> <input type="checkbox" className='form-check-input ' checked/></label></td>
                            <td><FaPenSquare fontSize={"30px"}/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
         </div>
      </div>
     </>
  )
}

export default Socialmedia
