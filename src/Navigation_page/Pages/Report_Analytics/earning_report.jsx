import React from 'react'
import earn from '../../../assest/earning.png'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../../CSS/Earning.css'
import { CurrencyDollar, CurrencyPound } from 'react-bootstrap-icons';

export default function Earning() {
  return (
   <>
   
        <div className='Earning'>
            <div className='page-header'>
                <h1 className='page-title'>
                    <span><img src={earn} className='earn' alt="earn" /></span>
                    <span>Earning Report Overview</span>
                </h1>
                <div className='anch'>
                    <span>Admin:
                    <span className='text-primary'>Admin Pannel</span></span>
                    <span>Date: <span className='text-primary'>2023-07-01 - 2023-07-30</span></span>
                </div>
            </div>

            <div className=' card'>
                <div className='card-header border-0'>
                    <h5 className='card-title'>Show Data By Date Range</h5>
                </div>
                <div className='card-body'>
                    <form>
                        <div className='row'>
                            <div className='col-md-4'>
                                <div className='form-group'>
                                    <label className='input-label'>Start Date</label>
                                    <input type="date" className='form-control' />
                                </div>
                            </div>
                            <div className='col-md-4'>
                            <div className='form-group'>
                                    <label className='input-label'>End Date</label>
                                    <input type="date" className='form-control' />
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='form-group'>
                                <button type='submit' className='btn show'>Show</button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className='row'>
                        <div className='col-md-5 green'>

                        <span><CurrencyDollar/> <span>Total Sold</span></span>
                        <div className='text-success'>0.00$</div>
                        
                        </div>
                        <div className='col-md-5 red'>
                                    <span><CurrencyPound/><span>Total Tax</span></span>
                                    <div className='text-danger'>0.00$</div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-5 orange'>

                        <span><CurrencyDollar/><span>Total Delivary Charge</span></span>
                        <div className='text-danger'>0.00$</div>
                        
                        </div>
                        <div className='col-md-5 blue'>
                        <span><CurrencyPound/><span>Total Earning</span></span>
                        <div className='text-primary'>0.00$</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='card'>
                <div className='card-header border-0'>
                    <h5 className='card-title'>
                        <span>TOTAL SALE OF 2023:  2,140.94$</span>
                    </h5>
                </div>
            </div>
        </div>
   </>
  )
}
