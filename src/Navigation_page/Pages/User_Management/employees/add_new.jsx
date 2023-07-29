import React from 'react'
import { FcManager } from 'react-icons/fc';
import { HiUser } from 'react-icons/hi';
import './addnewemployee.css';
const Addnewemployee = () => {
  return (
   <>
     <div className='container'>
       <div className='h3'> 
         <div>   
            <FcManager/>
         </div>
         <div className='icon'>
            <h3>Add New Employee</h3>
         </div>
        </div>
        <div className='card'>
            <div className='card-header h3'>
                <div>
                <HiUser/>
                </div>
                <div className='icon'>
                    <h3>General Information</h3>
                </div>
            </div>
            <div className='card-body'>
                <div className='row'>
                    <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                       <label for="FullName">Full Name</label>
                        <input type='text'
                        className='form-control'
                        name='FullName'
                        placeholder='Ex:John'/><br></br>
                         <label for="Phone">Phone</label>
                        <input type='text'
                        className='form-control'
                        name='Phone'
                        placeholder="Ex:+913949******"/>
                    </div><br></br>
                    <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                         <div className='p'>
                         <img class="initial-24" id="viewer" src="https://grofresh-admin.6amtech.com/public/assets/admin/img/upload-vertical.png" width={"500px"} alt="Employee thumbnail"></img>
                         </div>
                    </div>
                </div><br></br>
                <div className='row'>
                    <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                      <label for="Role">Role</label>
                      <select className ='Selct Customer form-control'>
                      <option>---Select---</option>
                      <option>dashboard, Order Management</option>
                      <option>Product Manager</option>
                      <option>Manager</option>
                      <option>Service1</option>
                      </select>
                    </div> <br></br>
                    <div className='col-12  col-sm-6 col-md-6 col-lg-6'>
                        <label>Employee Image <span className='text-danger'>(Ratio 1:1)</span></label>
                        <input type="file" class="form-control" name="mobile"  valueName="choose file"></input>
                    </div>                    
                </div><br></br>
                <div className='row'>
                    <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                        <label>Identity Type</label>
                        <select className='form-control'>
                            <option>Passport</option>
                            <option>Driving License</option>
                            <option>Nid</option>
                        </select><br></br>
                        <label >Identity Number</label>
                        <input type='text'
                        className='form-control'
                        name='Identity'/>
                    </div><br/><br/>
                    <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                    </div>
                </div>
            </div>
        </div><br/><br/>
        <div className='card'>
            <div className='card-header h3'>
                <div>
                <HiUser/>
                </div>
                <div className='icon'>
                    <h3>Account Information</h3>
                </div>
            </div>
            <div className='card-body'>
                <div  className='row'>
                    <div className='col-12 col-sm-4 col-md-4 col-lg-4'>
                        <label>Email</label>
                        <input type='text'
                        className='form-control'
                        name='Email'
                        placeholder='Ex:ex@gmail.com'/>
                    </div>
                    <div className='col-12 col-sm-4 col-md-4 col-lg-4'>
                        <label>Password</label>
                        <input type='text'
                        className='form-control'
                        name='Password'
                        placeholder='Ex:8+ characters'/>
                    </div>
                    <div className='col-12 col-sm-4 col-md-4 col-lg-4'>
                        <label>Confirm Password</label>
                        <input type='text'
                        className='form-control'
                        name='Confirm Password'
                        placeholder='Ex:8+Characters'/>
                    </div>
                </div>
            </div>
        </div><br></br> 
        <div className='row button'>
                <div className='col-12  col-sm-8 col-md-8 col-lg-8'>

                </div>
                <div className='col-12  col-sm-4 col-md-4 col-lg-4'>
                    <button className='reset'>Reset</button> &nbsp;&nbsp;&nbsp;
                    <button className='submit'>Submit</button>
                </div>
            </div>
     </div>
    </>
  )
}

export default Addnewemployee;
