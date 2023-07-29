import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import pro1 from '../../../assest/pro1.png'
import '../../CSS/ProAtt.css'
import { Search ,Pencil,Trash} from 'react-bootstrap-icons';

export default function ProductAttribute() {
  return (
    <>
    <div className='Productattribute'>
        <div className='header-pro'>
            <h1 className='title'><span><img src={pro1} alt="logo1" /></span> <span>Attribute Setup</span></h1>
        </div>
        <div className='card'>
            <div className='card-header border-0 '>
                <div className='card--header'>
                    <h5 className='card-title'> Attribute Table <span className='badge'>1</span></h5>     
                    <form action="">
                        <div className='input-group'>
                            <input type="search"  className='form-control' placeholder='Search' aria-label='search'/>
                            <div className='input-group-append'> <button type='submit' className='input-group-text p-3'><Search/></button></div>
                            <button className='btn m-1'> +Add Attribute</button> </div>
                          </form>
                 </div>
            </div>

            <div className='table-responsive'>
                <table className='table table-borderless table-thead-border'>
                   
                            <tr className='prod-head'>
                            <th>SL</th>
                            <th>Name</th>
                            <th class="text-center">Action</th>
                            </tr>
                   
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Size</td>
                            <td > 
                                    <button className='icon1'><Pencil/></button> <button className='icon2'><Trash/></button>
                                    </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    </>
    
  )
}

