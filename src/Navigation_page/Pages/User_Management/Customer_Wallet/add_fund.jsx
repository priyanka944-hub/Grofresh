import React from 'react'
import './fund.css';
const Addfund = () => {
 

  return (
    <>
    <div className='container'>
       <div className='heading heading-icon'>
         <div>
          <img src="https://grofresh-admin.6amtech.com/public/assets/admin/img/money.png" alt="public"></img>&nbsp;&nbsp;
         </div>
          <div>
          <h4 className='h4'>Add Fund</h4>
          </div>
       </div>
        <div className='inner-container'>
           <div className='inner-heading '>
               <div className='row space'>
                   <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                    <label for="Customer">Customer</label><br></br>
                    <select className ='Selct Customer form-control'>
                    <option>Select Customer</option>
                    <option>Ashek Elahe(018797300)</option>
                    <option>Nipon Roy(0244524557)</option>
                    </select>
                   </div>
                   <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                    <label for="Amount">Amount</label><br></br>
                    <input type='text'
                    className='form-control'
                    name='Amount'/>
                   </div>
                </div><br></br>
                <div className='gap'>
                <label for="Reference">Reference(Optional)</label><br></br>
                <input type='text'
                className='form-control'
                name='Reference'/><br></br>
               </div>
               <div className='row button'>
                 <div className='col-12 col-lg-8'>

                 </div>
                 <div className='col-12 col-lg-4'>
                    <button className='Reset'>Reset</button> &nbsp;&nbsp;&nbsp;
                    <button className='Submit'>Submit</button>
                 </div>
              </div><br></br>
           </div>
        </div>
    </div>
    </>
  )
}

export default Addfund
