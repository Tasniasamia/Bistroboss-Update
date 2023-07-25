import React from 'react';
import useCart from '../../../../Hooks/useCart';
import MyCarttable from './MyCarttable';
import useMenu from '../../../../Hooks/useMenu';
import Swal from 'sweetalert2';

const MyCart = () => {
    const[isLoading,refetch,cart]=useCart();
    const menu=useMenu();
    let data=cart;
    console.log(cart);
    const sum = cart.reduce(function(total, item) {
    return item.price+total;
      },0); 
      console.log(sum);

//delete user 
      const deletecart=(id)=>{
        fetch(`http://localhost:3650/user/${id}`,{
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


     
    return (
        <div className='w-full mx-10'>
            <div className='flex justify-between'>
                <div>
                    Items: {cart.length}
                </div>
                <div>
                    Total Price: {sum}
                </div>
            </div>


            {/* {
                cart.map(index=><p key={index._id}>Lorem ipsum dolor sit amet.</p>)
            } */}
      {/* table start */}
      <div>
  <table className='table w-full'>
    {/* head */}
    <thead >
      <tr>
        <th>
          <label>
Item          </label>
        </th>
        <th>Food</th>
        <th>Name</th>
        <th>Price</th>
        <th>Update</th>
        <th>Remove</th>
      </tr>
    </thead>
   
      {/* row 1 */}
      {/* {
        (cart.length>0)  && cart.map((index)=>{
          console.log(index); */}
          <tbody>
       {   cart.map((item,index)=> <tr key={item._id}>

<th>
  {index+1}
</th>
<td>
  <div className="flex items-center space-x-3">
    <div className="avatar">
      <div className="mask mask-squircle w-12 h-12">
        <img src={item.image} alt="Avatar Tailwind CSS Component" />
      </div>
    </div>
    
  </div>
</td>
<td>
{item.name}              
</td>
<td>{item.price}</td>
<td >Update</td>
<th onClick={()=>{deletecart(item._id)}}>
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
</div>
      {/* table end */}
      </div>
    );
};

export default MyCart;
{/* <tr key={index._id}>
<th>
{row+1}
</th>
<td>
  <div className="flex items-center space-x-3">
    <div className="avatar">
      <div className="mask mask-squircle w-12 h-12">
        <img src={index.image} alt="Avatar Tailwind CSS Component" />
      </div>
    </div>
   
  </div>
</td>
<td>
  {index.name}
  

</td>
<td>{index.price}</td>
<th>
  <button className="btn btn-ghost btn-xs">Delete</button>
</th>
</tr> */}