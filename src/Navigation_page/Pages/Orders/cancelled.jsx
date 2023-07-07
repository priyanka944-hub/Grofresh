import React from 'react'
import { useState } from 'react';
import Badge from 'react-bootstrap/Badge';
import './all.css'
import Footer from '../../footer/footer';
const Cancelled = () => {
   
   

  return (
    <>
    <div className='all'>
      <div className='head-container'>
           <div><img src='https://grofresh-admin.6amtech.com/public/assets/admin/img/all_orders.png' alt=""/></div>
           <div>Cancelled Orders</div>
           <div><h6><Badge bg="light" text='dark'>3</Badge></h6></div>

           

      </div>
      
    {/* container of different section */}
    <div className='card-cover-one'>
    <div className='card-cover'>
    <div className='card'>

    <div className='card-header'>
      <div className='form-bold w-100 mb-2'>Select Date Range</div>
      <form className='pt-3'>
    <div className='row g-3 g-sm-4 g-md-3 g-lg-4'>
        <div className='col-sm-6 col-md-4 col-lg-2'>
            <select className='custom-select custom-select-sm text-capitalize min-h-45px'>
                <option disabled>---Select Branch---</option>
                <option value="all">All Branch</option>
                <option value="1">Main</option>
                <option value="10">Second Branch</option>
                <option value="11">Third Branch</option>
                <option value="12">Dhaka</option>
                <option value="13">Farmgate</option>
            </select>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
        <div className="input-date-group">
 <label className="input-label" for="start_date">Start Date</label>
 <label className="input-date">
 <input type="date" id="start_date" name="start_date" className='js-flatpickr form-control flatpickr-custom min-h-45px flatpickr-input'  placeholder="yy-mm-dd"/>
</label>
        </div>
        
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
       <div className="input-date-group">
       <label className="input-label" for="end_date">End Date</label>
      <label className="input-date">
      <input type="text" className='js-flatpickr form-control flatpickr-custom min-h-45px flatpickr-input' id="end_date" name="end_date" placeholder="yy-mm-dd" />
      </label>
      </div>
        </div>
        <div className="col-sm-6 col-md-12 col-lg-4 __btn-row btn-row">
        <a href="#" id className="btn w-100 btn--reset min-h-45px">Clear</a>
        <button type="submit" id="show_filter_data" className="btn w-100 btn--primary min-h-45px">Show data</button>
</div>
    </div>
     </form>
    </div>

     

    </div>

{/* details of all screens in small div tags */}


{/* table part */}

<div className="card-body p-20px">
<div className="order-top">
<div className="card--header">
<form action="" method="GET" className='col-12 col-sm-12 col-md-6 col-lg-6 search_form'>
<div className="input-group">
<input id="datatableSearch_" type="search" name="search" className="form-control" placeholder="Ex : Search by ID  order or payment status" aria-label="Search" value="" required="" autocomplete="off"/>
<div className="input-group-append">
<button type="submit" className="input-group-text">
Search
</button>
</div>
</div>
</form>

<div className="hs-unfold mr-2">
<a className="js-hs-unfold-invoker btn btn-sm btn-outline-primary-2 dropdown-toggle min-height-40" href="javascript">
<i className="tio-download-to mr-1"></i> Export
</a>
<div id="usersExportDropdown" className="hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-sm-right hs-unfold-hidden hs-unfold-content-initialized hs-unfold-css-animation animated" data-hs-target-height="98.7125" data-hs-unfold-content="" data-hs-unfold-content-animation-in="slideInUp" data-hs-unfold-content-animation-out="fadeOut">
<span className="dropdown-header">Download
Options</span>
<a id="export-excel" className="dropdown-item" href="https://grofresh-admin.6amtech.com/admin/orders/export/all">
<img className="avatar avatar-xss avatar-4by3 mr-2" src="https://grofresh-admin.6amtech.com/public/assets/admin/svg/components/excel.svg" alt="Image Description"/>
Excel
</a>
</div>
</div>

</div>
</div>

<div className="table-responsive datatable-custom">
<table className="table table-hover table-borderless table-thead-bordered table-nowrap table-align-middle card-table" >
<thead className="thead-light">
<tr>
<th className="">
SL
</th>
<th className="table-column-pl-0">Order ID</th>
<th>Delivery Date</th>
<th>Time Slot</th>
<th>Customer</th>
<th>Branch</th>
<th>Total amount</th>
<th>
<div className="text-center">
Order Status
</div>
</th>
<th>
<div className="text-center">
Order Type
</div>
</th>
<th>
<div className="text-center">
Action
</div>
</th>
</tr>
</thead>
<tbody id="set-rows">
<tr className="status-pending className-all">
<td className="">
1
</td>
<td className="table-column-pl-0">
<a href="https://grofresh-admin.6amtech.com/admin/orders/details/100042">100042</a>
</td>
<td>27 Mar 2023</td>
<td>
<span>10:30:00 AM - 11:30:00 AM</span>
</td>
<td>
<div>
<a className="text-body text-capitalize font-medium" href="https://grofresh-admin.6amtech.com/admin/customer/view/15">New Test User</a>
</div>
<div className="text-sm">
<a href="Tel:+8801621720000">+8801621720000</a>
</div>
</td>
<td>
<label className="badge badge-soft-primary">Dhaka</label>
</td>
<td>
<div className="mw-90">
<div>
806.58$
</div>
<span className="text-danger">
Unpaid
</span>
</div>
</td>
<td className="text-capitalize text-center">
<span className="badge badge-soft-info">
Pending
</span>
</td>
<td className="text-capitalize text-center">
<span className="badge badge-soft-success">
Delivery
</span>
</td>
<td>
<div className="action_icon btn--container justify-content-center">
<a className="action-btn btn-primary btn-outline-primary" href="#"><i class="bi bi-eye"></i></a>
<a className="action-btn btn-outline-primary-2" target="_blank" href="#">
<i class="bi bi-file-break"></i>
</a>
</div>
</td>
</tr>
</tbody>
</table>
</div>

</div>


{/* pagination */}
<div className="card-footer border-0">

<div className="d-flex justify-content-center justify-content-sm-end">
<nav>
<ul className="pagination">
<li className="page-item disabled" aria-disabled="true" aria-label="« Previous">
<span className="page-link" aria-hidden="true">‹</span>
</li>
<li className="page-item active" aria-current="page"><span class="page-link">1</span></li>
<li className="page-item"><a className="page-link" href="#">2</a></li>
<li className="page-item"><a className="page-link" href="#">3</a></li>
<li className="page-item">
<a className="page-link" href="#" rel="next" aria-label="Next »">›</a>
</li>
</ul>
</nav>
</div>

</div>
     </div>
</div>

    </div>
    <Footer/>
    </>
  )
}

export default Cancelled
