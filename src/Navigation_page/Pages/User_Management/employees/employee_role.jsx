import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import logo from '../../../../assest/employee.png'
import '../../../CSS/EmployeRole.css'
import { Download,Pencil,Trash } from 'react-bootstrap-icons';

export default function EmployeeRoleSetup() {
  return (
    <>
    <div className=' Employerolesetup'> 

        <div className='page-header'>
            <h1 className='page-title'>
                <span><img src={logo} className='logo' alt="logo" /></span>
                <span>Employee Role Setup</span>
            </h1>
         </div>

        <div className='card'>
            <div className='card-body'>
                <form >
                    <div>
                    <div className='form-group'>
                        <label className='form-lable'>Role Name</label>
                        <input type="text" className='form-control text' placeholder='Ex : Store' />
                    </div>
                    </div>
                    <div className='d-flex'>
                        <h5 className='head5'>Module Permission:</h5>
                        <div className='check-item'>
                            <input type="checkbox"  className='lable'/>
                            <label className='lable'>Select All</label>
                        </div>
                    </div>
                    <div className='management'>
                        <div className='check-item'>
                            <div className='form-group form-check'>
                                <input type="checkbox" name='check' />
                                <label className='form-check-lable'>Dashboard Management</label>
                            </div>
                        </div>
                        <div className='check-item'>
                            <div className='form-group form-check'>
                                <input type="checkbox" name='check' />
                                <label className='form-check-lable'>POS Management</label>
                            </div>
                        </div>
                        <div className='check-item'>
                            <div className='form-group form-check'>
                                <input type="checkbox" name='check' />
                                <label className='form-check-lable'>Order Management</label>
                            </div>
                        </div>
                        <div className='check-item'>
                            <div className='form-group form-check'>
                                <input type="checkbox" name='check' />
                                <label className='form-check-lable'>Product Management</label>
                            </div>
                        </div>
                        <div className='check-item'>
                            <div className='form-group form-check'>
                                <input type="checkbox" name='check' />
                                <label className='form-check-lable'>Promotion Management</label>
                            </div>
                        </div>
                        <div className='check-item'>
                            <div className='form-group form-check'>
                                <input type="checkbox" name='check' />
                                <label className='form-check-lable'>Support Management</label>
                            </div>
                        </div>
                        <div className='check-item'>
                            <div className='form-group form-check'>
                                <input type="checkbox" name='check' />
                                <label className='form-check-lable'>Report Management</label>
                            </div>
                        </div>
                        <div className='check-item'>
                            <div className='form-group form-check'>
                                <input type="checkbox" name='check' />
                                <label className='form-check-lable'>User Management</label>
                            </div>
                        </div>

                        <div className='check-item'>
                            <div className='form-group form-check'>
                                <input type="checkbox" name='check' />
                                <label className='form-check-lable'>System Management</label>
                            </div>
                        </div>
                    </div>

                    <div className='col-12'>
                        <button type='reset' className='btn btn--reset'>Reset</button>
                        <button type='submit' className='btn btn--submit'>Submit</button>
                    </div>
                </form>
            </div>
        </div>

        <div className='card'>
            <div className='card-header border-0'>
                <h5 className='card-title'>Employee roles table
                <span className='badge'>4</span></h5>
                <form className='form2'>
                    <div className='input-group'>
                        <input type="search" className='form-control' placeholder='search by role name' />
                        <button className='bts1'>Search</button>  
                    </div>
                    <button className='bts'><Download/> <b>Export</b></button>
                </form>
            </div>

            <div className='card-body'>
                <div className='table-responsive'>
                    <table className='table table-borderless'>
                        <tr className='thead'><th>SL</th>
                            <th>Role Name</th>
                            <th>Modules</th>
                            <th>Status</th>
                            <th>Action</th></tr>
                            <tr>
                                <td>1</td>
                                <td>Service 1</td>
                                <td>User Management</td>
                                <td> <label className='form-check form-switch'> <input type="checkbox" className='form-check-input ' /></label></td>
                                <td > <button className='icon1'><Pencil/></button> <button className='icon2'><Trash/></button></td>
                            </tr>
                          
                    </table>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
