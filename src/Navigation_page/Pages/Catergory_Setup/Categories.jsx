import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Pencil, Search, Trash } from 'react-bootstrap-icons';
import del from '..//../../assest/del.png'
import cat1 from '..//../../assest/cat1.png'
import cat4 from '..//../../assest/cat4.png'
import cat5 from '..//../../assest/cat5.png'
import cat6 from '..//../../assest/cat6.png'
import cat7 from '..//../../assest/cat7.png'
import '../../CSS/Categories.css'
import PopUp from './PopUp';
export default function Categories() {

    const tableDatas=[
        {id:1, img:cat1, name:"Breakfast",status:"",icon1:<Pencil/>,icon2:<Trash/>},
        {id:2, img:cat4, name:"Home Applainces",status:"",icon1:<Pencil/>,icon2:<Trash/>},
        {id:3, img:cat5, name:"Home & cleaning",status:"",icon1:<Pencil/>,icon2:<Trash/>},
        {id:4, img:cat6, name:"Beverages",status:"",icon1:<Pencil/>,icon2:<Trash/>},
        {id:5, img:cat7, name:" Cooking",status:"",icon1:<Pencil/>,icon2:<Trash/>},
        
    ]
    const [popUps,setPopUps]=useState(false)

    const [value,setValue]=useState('');
    const [dataSource,setDataSource]=useState(tableDatas)
    const [tableFilter,setTableFilter]=useState([])



    const filterData=(e)=>{
        if(e.target.value != " "){

                setValue(e.target.value)
                const filterTable=dataSource.filter(o=>Object.keys(o).some(k=>
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
      

            <div className='categories col-md-11'>

                <div className='row'>
                    <h2 className='col-3 fs-7 head'>
                        <span>
                            <img src="https://grofresh-admin.6amtech.com/public/assets/admin/img/category.png" alt="icon image"/>
                        </span>
                        <span>Category Setup</span>
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
                                        

                                    <div className="d-grid gap-2 d-md-flex justify-content-md-end ">
                                    <button className="btn btn-2 btn-lg me-md-2 " type="button">Reset</button>
                                    <button className="btn btn-1 btn-lg " type="button">Submit</button>
                                    </div>
                            </form>
                        </div>
                    </div>
                 </div>

                <div className='col-12'>
                    <div className="card">
                        <div className='card-header border-0'>
                            <div className='card--header'>
                                <h5 className='card-title'> Category details</h5>
                           <form>
                            <div className='input-group'> <input type="search" className='form-control' aria-label='Search' placeholder='search by name' value={value} onChange={filterData} />
                            <span className='tio-input-search '><Search/></span>
                            <div class="input-group-append">
                                <button type="submit" class="input-group-text" fdprocessedid="maarpr"  > Search</button>
                                </div>
                            </div>
                           </form>
                           </div>
                        </div>
                        <div className='table-responsive datatable-custom'>
                            <table className='table table-borderless table-thead-bordered table-nowrap table-align-middle card-table'>
                            
                                        <tr className='cat-head'>
                                        <th>SL</th>
                                        <th>Category image</th>
                                        <th>Name</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                        </tr>
                                    <tbody>
                           
                                    {value.length>0 ? tableFilter.map((data)=>{
                                        return(
                                            <tr>
                                        <td>{data.id}</td>
                                        <td ><img src={data.img} alt="logo" className='cat1'/></td>
                                        <td>{data.name}</td>
                                        <td>{data.status}</td>
                                        <td><button className='icon1'>{data.icon1}</button><button className='icon2' onClick={()=>setPopUps(true)}>{data.icon2}</button></td>
                                    </tr>
                                        )
                                    }):
                                    dataSource.map((data)=>{
                                        return(
                                            <tr>
                                        <td>{data.id}</td>
                                        <td ><img src={data.img} alt="logo" className='cat1'/></td>
                                        <td>{data.name}</td>
                                        <td>{data.status}</td>
                                        <td><button className='icon1'>{data.icon1}</button><button className='icon2' onClick={()=>setPopUps(true)}>{data.icon2}</button></td>
                                    </tr>
                                        )
                                    })
                                    }
                                </tbody>  
                            </table>
                        </div>
                        
                    </div>
                    
                </div>
                {popUps &&<PopUp closePopUp={()=>{setPopUps(false)}}/>}
        </div>
      


   </>
 
  )
}

