import React from 'react';
import useCart from '../../../../Hooks/useCart';

const MyCart = () => {
    const[isLoading,refetch,cart]=useCart();
    let data=cart;
    console.log(cart);
    const sum = cart.reduce(function(total, item) {
    return item.price+total;
      },0); 
      console.log(sum);
    return (
        <div className='mx-auto'>
            <div className='flex justify-between'>
                <div>
                    Items: {cart.length}
                </div>
                <div>
                    Total Price: {sum}
                </div>
            </div>
        <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                Item
              </th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Remove</th>
          
            </tr>
          </thead>
          <tbody >
          
        
        
               { cart.map((index,row)=>{
         
                    <tr>
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src="/tailwind-css-component-profile-4@56w.png" alt="Avatar Tailwind CSS Component" />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">Marjy Ferencz</div>
                          <div className="text-sm opacity-50">Russia</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      Rowe-Schoen
                      <br/>
                      <span className="badge badge-ghost badge-sm">Office Assistant I</span>
                    </td>
                    <td>Crimson</td>
                    <th>
                      <button className="btn btn-ghost btn-xs">details</button>
                    </th>
                  </tr>


                })
           
           
            }
          </tbody>
     
       
          
        </table>
      </div>
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