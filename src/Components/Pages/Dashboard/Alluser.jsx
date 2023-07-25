import React from 'react';
import useUser from '../../../../Hooks/useUser';
import Swal from 'sweetalert2';

const Alluser = () => {
   const [isLoading,refetch,Alluser]=useUser();
   const deletecart=(id)=>{
    fetch(`http://localhost:3650/Allusers/${id}`,{
      method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      if(data.deletedCount >0){
        refetch();
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Your delete has become successfull',
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
  }
   //update user
   const updateRole=(id)=>{
    fetch(`http://localhost:3650/UserRoleUpdate/${id}`,{
        method:"PATCH",
        headers:{
            "Content-Type":"application/json"
        },

    }).then(res=>res.json())
    .then(data=>{
        console.log(data);
        if(data.modifiedCount>0){
            refetch();
            alert("Update has become SuccessFull");
        }
    })
  }
    return (
        <table className='table w-full'>
        {/* head */}
        <thead >
          <tr>
            <th>
              <label>
    Item          </label>
            </th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Remove</th>
          </tr>
        </thead>
       
          {/* row 1 */}
          {/* {
            (cart.length>0)  && cart.map((index)=>{
              console.log(index); */}
              <tbody>
           {   Alluser.map((item,index)=> <tr key={item._id}>
    
    <th>
      {index+1}
    </th>
   
    <td>
    {item.name}              
    </td>
    <td>{item.
email}</td>
    <td  onClick={()=>{updateRole(item._id)}} className='btn btn-primary'>{(item.role=="Admin")?"Admin":"User"}</td>
    <th onClick={()=>{deletecart(item._id)}} className='btn btn-primary'>
     Delete
    </th>
    </tr>)
    }
    
    
             </tbody>
    {/* //  <MyCarttable key={index._id} indexdata={index}></MyCarttable>  */}
            {/* })
          }
        */}
        
      </table>
    );
};

export default Alluser;