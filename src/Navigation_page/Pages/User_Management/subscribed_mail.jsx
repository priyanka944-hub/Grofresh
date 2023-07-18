import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import logo from '../assets/subscriber.png'
import './css/Subscribed.css'
export default function SubscribedEmails() {
  return (
   <>
   <div className=' Subscribedemails'>
    <div className='page-header'>
        <h1 className='page-title'>
            <span><img src={logo} className='logo' alt="logo" /></span>
            <span>Subscribed Customers</span>
            <span className='badge'>9</span>
        </h1>
    </div>

    <div className='card'>
        <div className='card-header border-0'>
            <div className='card--header '>
                <form>
                <div className='input-group'>
                    <input type="search" className='form-control search'  placeholder='Search email address'/>
                    <div className='input-group-append'>
                    <button type='submit' className='input-group-text'> Search</button>
                </div> 
                </div>
                
                </form>
            </div>
        </div> 


        <div className='table-responsive'>
            <table className='table table-hover table-borderless '>
                <tr className='thead-light'><th>SL</th>
                    <th>Email</th>
                    <th>Subscribed At</th>
                </tr>

                    <tr>
                    <td> 1</td>
                    <td><a href="#">6amtech@gmail.com</a></td>
                    <td>2022/12/09 </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td><a href="#">tester@gmail.com</a></td>
                        <td>2022/12/09 </td>
                    </tr>
                    <tr>
                    <td>3 </td>
                    <td><a href="#">mobarak@gmail.com</a></td>
                    <td>2022/12/09 </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td><a href="#">test@gmail.com</a></td>
                        <td>2022/12/09 </td>
                    </tr>
            </table>
        </div>
    </div>
   </div>
   </>
  )
}
