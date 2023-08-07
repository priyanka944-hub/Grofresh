import React from 'react'
import './list.css';
import {FaPenSquare} from 'react-icons/fa'
 import {AiFillDelete} from 'react-icons/ai'
import { useState } from 'react';

const List = () => {

  const tableData =[
       {id: 1, Branch:'', name: 'Farmgate', BranchType: 'Sub-branch', Contactinfo: 'parvej@gmail.com', icon1:<FaPenSquare />,icon2:<AiFillDelete />,
      },
      {id: 2, Branch:'', name: 'Dhaka', BranchType: 'Sub-branch', Contactinfo: 'Dhaka@gmail.com',  icon1:<FaPenSquare />,icon2:<AiFillDelete />,
      },
      {id: 3, Branch:'',   name: 'Thirdbranch', BranchType: 'Sub-branch', Contactinfo: 'demo67@gmail.com', icon1:<FaPenSquare />,icon2:<AiFillDelete />,
      },
      {id: 4,  Branch:'',   name: 'Secondbranch', BranchType: 'Sub-branch', Contactinfo: 'demo67@gmail.com',  icon1:<FaPenSquare />,icon2:<AiFillDelete />, 
      },
      {id: 5,  Branch:'',  name: 'Main', BranchType: 'Sub-branch', Contactinfo: 'test.branch@gmail.com',  icon1:<FaPenSquare />,icon2:<AiFillDelete />, 
      },
      
  ]
  const [searchText, setsearchText] = useState("");
   const[filteredTable, setfilteredTable] = useState(tableData);
  
  
 
  return (
    <>
      <div className='container'>
          <div className='flex'>
            <div className='icon'>
             <img src="https://grofresh-admin.6amtech.com/public/assets/admin/img/add_branch.png" class="w--20" alt=""></img>
             </div>
            <div>
                <h3>Branch List</h3>
            </div>&nbsp;&nbsp;
            <div className='badge icon'>
              <h5>5</h5>
            </div>
          </div><br/>
          <div className='card'>
             <div className='card-body'>
                <div className='row'>
                  <div className='col-12 col-lg-9'>

                   </div>
                  <div className='col-12 col-lg-2'>
                   <input type='text'
                   className='search-box'
                    value = {searchText}
                    onChange={(e)=>
                      {setsearchText(e.target.value)
                    }}
                   placeholder='Search by name'/>
                  </div>
                  <div className='col-12 col-lg-1'>
                    <button className='search' 
                    onClick ={()=>{ 
                      const filterTable = tableData.filter(
                        (tab) => tab.name.toLowerCase().includes(searchText.toLowerCase())
                       );
                        setfilteredTable(filterTable);
                      //  console.log(searchText);

  



                   }} 
                   >Search</button>
                  </div>
                </div>
              </div><br/>
              <table className='table'>
                <thead className='table-success'>
                  <tr>
                    <th>SL</th>
                    
                    <th>Branch</th>
                    <th>Name</th>
                     <th>BranchType</th>
                     <th>Contactinfo</th>
                     <th>Status</th>
                     <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* <tr>
                    <td>1</td>
                    <td>
                    <div className='flex'>
                      <div>
                       <img  src="https://grofresh-admin.6amtech.com/public/assets/admin/img/store-1.png" width={"50px"}></img>
                       </div>
                     <div>
                      <p>Farmgate</p>
                     </div>
                    </div>
                    </td>
                    <td>Sub Branch</td>
                    <td>parvej@gmail.com</td>
                    <td> <label className='form-check form-switch'> <input type="checkbox" className='form-check-input ' checked/></label></td>
                    <td style={{fontSize:"30px"}}><FaPenSquare/>
                            <AiFillDelete/></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>
                    <div className='flex'>
                      <div>
                       <img onerror="" src="https://grofresh-admin.6amtech.com/public/assets/admin/img/store-1.png" width={"50px"}></img>
                       </div>
                     <div>
                      <p>Dhaka</p>
                     </div>
                    </div>
                    </td>
                    <td>Sub Branch</td>
                    <td>dhaka@gmail.com</td>
                    <td> <label className='form-check form-switch'> <input type="checkbox" className='form-check-input ' checked/></label></td>
                    <td style={{fontSize:"30px"}}><FaPenSquare/>
                            <AiFillDelete/></td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>
                    <div className='flex'>
                      <div>
                       <img onerror="" src="https://grofresh-admin.6amtech.com/public/assets/admin/img/store-1.png" width={"50px"}></img>
                       </div>
                     <div>
                      <p>Third Branch</p>
                     </div>
                    </div>
                    </td>
                    <td>Sub Branch</td>
                    <td>demo67@gmail.com</td>
                    <td> <label className='form-check form-switch'> <input type="checkbox" className='form-check-input ' checked/></label></td>
                    <td style={{fontSize:"30px"}}><FaPenSquare/>
                            <AiFillDelete/></td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>
                    <div className='flex'>
                      <div>
                       <img onerror="" src="https://grofresh-admin.6amtech.com/public/assets/admin/img/store-1.png" width={"50px"}></img>
                       </div>
                     <div>
                      <p>Second Branch</p>
                     </div>
                    </div>
                    </td>
                    <td>Sub Branch</td>
                    <td>demo619@gmail.com</td>
                    <td> <label className='form-check form-switch'> <input type="checkbox" className='form-check-input ' checked/></label></td>
                    <td style={{fontSize:"30px"}}><FaPenSquare/>
                            <AiFillDelete/></td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>
                    <div className='flex'>
                      <div>
                       <img onerror="" src="https://grofresh-admin.6amtech.com/public/assets/admin/img/store-1.png" width={"50px"}></img>
                       </div>
                     <div>
                      <p>Main</p>
                     </div>
                    </div>
                    </td>
                    <td>Sub Branch</td>
                    <td>test.branch@gmail.com</td>
                    <td> <label className='form-check form-switch'> <input type="checkbox" className='form-check-input ' checked/></label></td>
                    <td style={{fontSize:"30px"}}><FaPenSquare/>
                            <AiFillDelete/></td>
                  </tr> */}
                    { filteredTable.map((data)=>{
                    return(
                      <tr>
                      
                        <td>{data.id}</td>
                        
                        <td>{data.Branch}</td>
                        <td>{data.name}</td>
                        <td>{data.BranchType}</td>
                        <td>{data.Contactinfo}</td>
                        <td>{data.Status}</td>

                        <td><button className='icon-1'>{data.icon1}</button>
                        <button className='icon-2'>{data.icon2}</button></td>
                       
                      </tr>
                    );
                  }
                  
                  )} 
                </tbody>
              </table>
           </div>
      </div>
    </>
  )
}

export default List
