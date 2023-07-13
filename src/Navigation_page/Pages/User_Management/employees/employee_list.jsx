import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './css/EmployeList.css'
import employe from '../assets/employee.png'
import person from '../assets/person.png'
import { ArrowDown,Pencil,Trash } from 'react-bootstrap-icons';

export default function EmployeList() {
  return (
    <>
            <div className='container-fluid Employeelist'>
                <div className='page-header'>
                    <h1 className='page-title'> 
                        <span > <img src={employe} className='employe' alt="employe" /></span>
                        <span>Employee List</span>
                        <span className='badge'>3</span>
                    </h1>
                </div>

                <div className='card'>
                    <div className='card-header border-0'>
                        <div className='card--header'>
                            <form >
                                <div className='input-group'>
                                <input type="search" className='form-control input' placeholder='search by name or phone or email' />
                                <div className='input-group-append'>
                                    <button type='submit' className='input-group-text search'>Search</button>
                                </div>
                                </div>
                            </form> 
                                 <div className="dropdown">
                                    <a className="btn  btn-outline-info dropdown-toggle" href="#"  data-bs-toggle="dropdown" > <span><ArrowDown/></span> Export</a>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                            <li><a className="dropdown-item" href="#">MS Excel</a></li>
                                        </ul>    
                                    <a href="#" className='btn btn-success'>+Add New Employee</a>
                                </div>
                        </div>
                    </div>
                        <div className='card-body'>
                            <div className='table-responsive'>
                                <table className='table table-borderless '>
                                <tr className='thead'>
                                        <th>SL</th>
                                        <th>Name</th>
                                        <th>Contact Info</th>
                                        <th>Role</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td><img src={person} className='person' alt="person" /> <span>Dane Martinez</span></td>
                                    <td><div><a href=""><b>employeee@gmail.com</b></a></div>
                                        <div><a href="">+8801122334455</a></div></td>
                                    <td>Product manager</td>
                                    <td className='text-center'> <label className='form-check form-switch'> <input type="checkbox" className='form-check-input ' /></label></td>
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
