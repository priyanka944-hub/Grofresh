import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './popUp.css';
import { InfoCircle } from 'react-bootstrap-icons'


export default function PopUp({closePopUp,deleteItem}) {
  return (
    <div className='pop-container' onClick={(e)=>{
        if(e.target.className==="pop-container")closePopUp();
    }}>
        <div className='popup'>
                <div className='icon'>
                <InfoCircle/>
                </div>
                <div>
                    <h2>Are You Sure</h2>
                    <p>Want to delete these</p>
                </div>
                <div className='row' onClick={(e)=>{
                  if(e.target.className==="btn-yes"){deleteItem()}
                  else{ closePopUp()} 
                }}>
                    <div className='col-5 '> <button className='btn btn-no' >No</button> </div>
                    <div className='col-5'> <button className='btn btn-yes' onClick={(e)=>{
                  if(e.target.className==="btn-yes"){deleteItem()}
                  else{ closePopUp()} 
                }} >Yes</button> </div>
                </div>
        </div>
    
    </div>
  )
}
