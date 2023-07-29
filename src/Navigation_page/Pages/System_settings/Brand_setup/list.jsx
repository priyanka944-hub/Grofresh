import React from 'react'
import './list.css';
import {FaPenSquare} from 'react-icons/fa'
import {AiFillDelete} from 'react-icons/ai'
const List = () => {
  return (
    <>
      <div className='container'>
          <div className='flex'>
            <div className='icon'>
             <img src="https://grofresh-admin.6amtech.com/public/assets/admin/img/add_branch.png" class="w--20" alt=""></img>
             </div>
            <div>
                <h3>Branch List</h3>
            </div>&nbsp;&nbsp;
            <div className='badge icon'>
              <h5>5</h5>
            </div>
          </div><br/>
          <div className='card'>
             <div className='card-body'>
                <div className='row'>
                  <div className='col-12 col-lg-9'>

                   </div>
                  <div className='col-12 col-lg-2'>
                   <input type='text'
                    name='search'
                   placeholder='Search by name'/>
                  </div>
                  <div className='col-12 col-lg-1'>
                   <button className='search'>Search</button>
                  </div>
                </div>
              </div><br/>
              <table className='table'>
                <thead className='table-success'>
                  <tr>
                    <th>SL</th>
                    <th>Branch Name</th>
                     <th>Branch Type</th>
                     <th>Contact Info</th>
                     <th>Status</th>
                     <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>
                    <div className='flex'>
                      <div>
                       <img onerror="" src="https://grofresh-admin.6amtech.com/public/assets/admin/img/store-1.png" width={"50px"}></img>
                       </div>
                     <div>
                      <p>Farmgate</p>
                     </div>
                    </div></td>
                    <td>Sub Branch</td>
                    <td>parvej@gmail.com</td>
                    <td> <label className='form-check form-switch'> <input type="checkbox" className='form-check-input ' checked/></label></td>
                    <td style={{fontSize:"30px"}}><FaPenSquare/>
                            <AiFillDelete/></td>
                  </tr>
                </tbody>
              </table>
           </div>
      </div>
    </>
  )
}

export default List
