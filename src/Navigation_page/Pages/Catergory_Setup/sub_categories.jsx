import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {  MenuApp, Pencil, Search, Trash } from 'react-bootstrap-icons';
import '../../CSS/SubCategories.css'
export default function SubCategories() {

    const tableData=[
        {id:1, img:"Meat and Fish", name:"Tofu and meat alternatives",status:"", icon1:<Pencil/>,icon2:<Trash/>},
        {id:2, img:"Meat and Fish", name:"Dried Fish",status:"", icon1:<Pencil/>,icon2:<Trash/>},
        {id:3, img:"Meat and Fish", name:"Fresh Fish",status:"", icon1:<Pencil/>,icon2:<Trash/>},
        {id:4, img:"Fruits and Vegetables", name:"Meat",status:"", icon1:<Pencil/>,icon2:<Trash/>},
        {id:5, img:"Meat and Fish", name:"Fresh Vegetables",status:"", icon1:<Pencil/>,icon2:<Trash/>},
        {id:6, img:"Fruits and Vegetables", name:"Fresh Fruits",status:"", icon1:<Pencil/>,icon2:<Trash/>},
        {id:7, img:"Fruits and Vegetables", name:"Tofu and meat alternatives",status:"", icon1:<Pencil/>,icon2:<Trash/>},
    ]

    const [value,setValue]=useState('')

    const [dataSource,setDataSource]=useState(tableData);
    const [tableFilter,setTableFilter]=useState([])


    const filterData=(e)=>{
        if(e.target.value!=''){
            setValue(e.target.value)
            const filterTable= dataSource.filter(o=>Object.keys(o).some(k=>
                String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
            ))
            setTableFilter([...filterTable])
        }else{
            setValue(e.target.value)
            setDataSource([...dataSource])
        }
    }
  return ( 
    
    <>
            <div className='subcategories'>

                <div className='row'>
                    <h1 className='col-3 fs-7 head'><span><MenuApp/></span><span>Sub Category Setup</span></h1>
                </div>
            
            <div className='row'>
                {/* cardbody */}
                    <div className='card'>
                        <div className='card-body'>           
                            <form class="row g-3">
                                       
                                        <div className="col-md-6">

                                            <label htmlFor="inputEmail4" className="form-label">Sub Category Name (EN)</label>
                                            <input type="email" className="form-control" id="inputEmail4" placeholder="New Sub Category" />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="inputPassword4" className="form-label">Main Category *</label>
                                           
                                            <input type="text" className="form-control" id="inputPassword4" placeholder='Fruits and  vegetables' />
                                        </div>
                                        

                                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                    <button className="btn btn-secondary btn-lg me-md-2 " type="button">reset</button>
                                    <button className="btn btn-success btn-lg " type="button">Submit</button>
                                    </div>
                            </form>
                        </div>
                    </div>
                 </div>

                <div className='col-12'>
                    <div className="card">
                        <div className='card-header'>
                            <div className='card--header'>
                                <h5 className='card-title'> Category details</h5>
                           <form>
                            <div className='input-group'> <input type="search" className='form-control' aria-label='Search' placeholder='search by name' value={value} onChange={filterData}/>
                            <span className='tio-input-search '><Search/></span>
                            <div class="input-group-append">
                                <button type="submit" class="input-group-text" fdprocessedid="maarpr"> Search</button>
                                </div>
                            </div>
                           </form>
                           </div>
                        </div>
                        <div className='table-responsive datatable-custom'>
                            <table className='table table-borderless table-thead-bordered table-nowrap table-align-middle card-table'>
                            
                                        <tr class="sub-head">
                                        <th class="text-center">SL</th>
                                        <th>Category image</th>
                                        <th>Name</th>
                                        <th>Status</th>
                                        <th class="text-center">Action</th>
                                        </tr>

                                       <tbody>
                                       {value.length>0 ? tableFilter.map((data)=>{
                                        return(
                                            <tr>
                                        <td>{data.id}</td>
                                        <td >{data.img}</td>
                                        <td>{data.name}</td>
                                        <td>{data.status}</td>
                                        <td><button className='icon1'>{data.icon1}</button><button className='icon2'>{data.icon2}</button></td>
                                    </tr>
                                        )
                                    }):
                                    dataSource.map((data)=>{
                                        return(
                                            <tr>
                                        <td>{data.id}</td>
                                        <td >{data.img}</td>
                                        <td>{data.name}</td>
                                        <td>{data.status}</td>
                                        <td><button className='icon1'>{data.icon1}</button><button className='icon2'>{data.icon2}</button></td>
                                    </tr>
                                        )
                                    })
                                    }
                                        
                                        </tbody> 
                            
                            
                            </table>
                        </div>
                        
                    </div>
                    
                </div>

        </div>
</>
  )
}
