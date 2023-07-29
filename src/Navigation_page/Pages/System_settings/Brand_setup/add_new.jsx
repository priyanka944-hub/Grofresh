import React from 'react'
import './addnewbranch.css';
import {HiUser} from 'react-icons/hi'
import {MdLocationPin} from 'react-icons/md'
const Addnew = () => {
  return (
    <>
    <div className='container'>
        <div className='flex'>
            <div className='icon'>
            <img src="https://grofresh-admin.6amtech.com/public/assets/admin/img/add_branch.png" class="w--20" alt=""></img>
            </div>
            <div>
                <h3>Add New Branch</h3>
            </div>
        </div>
        <div className='card'>
            <div className='card-header header'>
               <div className='flex'>
                <div className='width icon'>
                    <HiUser/>
                </div>
                <div>
                    <h4>Branch Information</h4>
                </div>
               </div>
            </div>
            <div className='card-body'>
                <div className='row'>
                    <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                        <label>Branch Name</label>
                        <input type='text'
                        name='branch'
                        className='form-control'
                        placeholder='Ex:xyz branch'/>
                         <label>Address</label>
                        <textarea class="form-control" name="message" rows="4" data-rule="required" data-msg="Please write something for us" placeholder="Ex:666/888 DOHS Miyapur Bangladesh"></textarea>
                    </div>
                    <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                        <p className='img'>Branch image <span className='text-danger'>  * ( Ratio 1:1 )</span></p><br/>
                       <label className='img'>
                        <input type='file' name='image'    className="" accept='.jpg,.png, .jpeg, .gif, .bmp, .tif, .tiff|image/*' hidden="file"/>
                        <img className='label' src='https://grofresh-admin.6amtech.com/public/assets/admin/img/upload-vertical.png' width={"250px"} height={"100px"}></img>
                        </label>
                    </div>   
                </div>
                <div className='row'>
                    <div className='col-12 col-sm-4 col-md-4 col-lg-4'>
                        <label>Phone</label>
                        <input type='text'
                        className='form-control'
                        name='phone'
                        placeholder='Ex:+06085'/>
                    </div>  
                    <div className='col-12 col-sm-4 col-md-4 col-lg-4'>
                        <label>Email</label>
                        <input type='text'
                         className='form-control'
                        name='Email'
                        placeholder='Ex:example@examaple.com'/>
                    </div>                     
                    <div className='col-12 col-sm-4 col-md-4 col-lg-4'>
                        <label>Passwprd</label>
                        <input type='text'
                         className='form-control'
                        name='password'
                        placeholder='Ex:5 + character'/>
                    </div>                                     
                </div>
            </div></div><br></br>
            <div className='card'>
            <div className='card-header header'>
               <div className='flex'>
                <div className='width'>
                    <MdLocationPin/>
                </div>
                <div>
                    <h4>Branch Location</h4>
                </div>
               </div>
            </div>
            <div className='card-body'>
                <div className='row'>
                    <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
                        <label>Latitude</label>
                        <input type='text'
                        className='form-control'
                        name='latitude'
                        placeholder='Ex:23.8118428'/><br></br>
                        <label>Longitude</label>
                        <input type='text'
                        className='form-control'
                        name='longitude'
                        placeholder='Ex:90.444445'/><br/>
                        <label>Coverage(km)</label>
                        <input type='text'
                        className='form-control'
                        name='coverage'
                        placeholder='Ex:3'/>
                    </div>
                    <div className='col-12 col-sm-6  col-lg-6'>
                      <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3806.3087486765785!2d78.3818507148771!3d17.444930488044175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDI2JzQxLjgiTiA3OMKwMjMnMDIuNSJF!5e0!3m2!1sen!2sin!4v1685022198803!5m2!1sen!2sin"  style ={{width:"450px", height:"235px", border:"0px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" frameborder="0"></iframe>
                    </div>
                </div>
            </div>
        </div></div><br></br>
            
            <div className='row button'>
                <div className='col-12 col-lg-8'>

                </div>
                <div className='col-12 col-lg-4'>
                    <button className='reset'>Reset</button> &nbsp;&nbsp;&nbsp;
                    <button className='submit'>Submit</button>
                </div>
            </div>
    </>
  )
}

export default Addnew
