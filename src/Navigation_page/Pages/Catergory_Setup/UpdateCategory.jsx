import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import del from '..//../../assest/del.png'
import './updateCategory.css'

export default function UpdateCategory() {
  return (
    <>

    <div className='Update container'>
    
    <div className='row'>
                    <h2 className='col-3 fs-7 head'>
                        <span>
                            <img src="https://grofresh-admin.6amtech.com/public/assets/admin/img/category.png" alt="icon image"/>
                        </span>
                        <span>Category Update</span>
                    </h2>
                </div>

            
                <div className='row'>
                {/* cardbody */}
                    <div className='card'>
                        <div className='card-body'>
                                    <div className='del'><img className='img' src={del} alt="del" /></div>           
                            <form class="row g-3">
                                       
                                        <div className="col-md-6">

                                            <label htmlFor="inputEmail4" className="form-label">Category Name(EN)</label>
                                            <input type="email" className="form-control" id="inputEmail4" placeholder="EX:Size" />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="inputPassword4" className="form-label">Categroy Image</label>
                                            <small className="text-danger">* ( Ratio3:1 )</small>
                                            <input type="file" className="form-control" id="inputPassword4" />
                                        </div>
                                        

                                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                    <button className="btn btn-secondary btn-lg me-md-2 " type="button">reset</button>
                                    <button className="btn btn-success btn-lg " type="button">Submit</button>
                                    </div>
                            </form>
                        </div>
                    </div>
                 </div>
                 </div>
    </>
  )
}
