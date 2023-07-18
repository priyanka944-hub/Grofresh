import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import expens from '../../../assest/exp.png'
import exp1 from '../../../assest/exp1.svg'
import exp2 from '../../../assest/exp2.svg'
import exp3 from '../../../assest/exp3.svg'
import { Download} from 'react-bootstrap-icons';
import '../../CSS/Expense.css'
export default function Expenses() {
  return (
    <>
    <div className='Expense'>
        <div className='page-header'>
            <h1 className='page-title'>
                <span><img src={expens} className='expen' alt="" /></span>
                <span>Expense Report</span>
            </h1>
        </div>

        <div className='card'>
            <div className='card-body'>
                 <div className="dropdown">
                                <button className="btn  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                   This year
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a className="dropdown-item" href="#">This Month</a></li>
                                    <li><a className="dropdown-item" href="#">This Week</a></li>
                                    <li><a className="dropdown-item" href="#">Custom Date</a></li>
                                </ul>
                    </div>
                    <button className='btn clear'>clear</button>
                    <button className='btn show'>Show Data</button>

            </div>
       </div>

            <div className='row'>
                <div className='col-md-4'>

                    <div className='shadow'>
                        <span><h2><img src={exp1} alt="" />
                        20.00$ </h2>
                        </span>
                        <small>Total Expense</small>
                    </div>
                    <div className='shadow'>
                        <span><h2><img src={exp2} alt="" />  20.00$ </h2></span>
                        <small>extra discount</small>
                    </div>
                    <div className='shadow'>
                        <span><h2><img src={exp2} alt="" /> 0.00$</h2></span>
                        <small>Free Delivary</small>
                    </div>
                    <div className='shadow'>
                        <span><h2><img src={exp3} alt="" /> 0.00$</h2></span>
                        <small>Free Delivary</small>
                    </div>

                </div>
                <div className='col-md-7 card graph'>
                    <h3>Graph</h3>
                </div>
            </div>

            <div className='card trans'>
                <div className='card-header border-0'>                    
                    <div className='row'>
                        <div className='col-md-6'>
                        <h5 className='card-title'>
                        <span> Total Transcations</span>
                        <span className='badge'>1</span>
                    </h5>
                        </div>
                        <div className='col-md-5'>
                        <div className='input-group'>
                                <input type="search" className='form-control search' placeholder='search by id or name'/>
                                <div className='input-group-append'>
                                    <button type='submit' className='input-group-text'>Search</button>
                                </div>
                                
                            </div>
                            
                        </div>
                        <div className='col-md-1'>
                        <button className='bts exp'><Download/> <b>Export</b></button>
                        </div>
                    </div>
                   
                </div>

                <div className='card-body table-responsive'>
                    <table className='table table-borderless '>
                        <tr className='exphead'>
                            <th> SL</th>
                            <th> Order Date</th>
                            <th> Order ID</th>
                            <th> Expense Amount</th>
                            <th> Expense Type</th>
                        </tr>

                        <tr>
                            <td> 01</td>
                            <td> 21 May 2023</td>
                            <td> 100044</td>
                            <td> 20.00$</td>
                            <td > <span className='orange text-center'>Extra Discount</span></td>
                        </tr>
                    </table>

                </div>
            </div>
    </div>
    
    
    </>
  )
}
