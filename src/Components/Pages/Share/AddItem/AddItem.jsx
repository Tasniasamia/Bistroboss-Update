import React from 'react';
import { useForm } from 'react-hook-form';

const AddItem = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const imagekey=import.meta.env.VITE_IMAGE_Token;
    const onSubmit = data =>{
        let  menu_image;
        console.log(data);
        let dataall=data;
        const formdata=new FormData();
        formdata.append("image",data.image[0]);
        fetch(`https://api.imgbb.com/1/upload?key=${imagekey}`,{
            method: 'POST',
            body: formdata,
           
          }
        
        ).then(res=>res.json())
        .then(data=>{console.log(data);
        
        if(data.success){

            menu_image=data?.data?.display_url;
            const addmenu={
                recipe:dataall.class_name,
                image : menu_image,
                details:dataall.Instructor_Name,
                category:dataall.Useremail
            }
            console.log("Add menu Item", addmenu);
        }})

     
    };
    // console.log()
    return (
        <div>
                   
            <div>
               <h1 className='text-5xl font-bold my-5 text-center'>Add Course Class</h1>
            </div>
            <form className='w-full'onSubmit={handleSubmit(onSubmit)}>

<div className='flex my-3'>
<div className="form-control w-full ms-3">
  <label className="label">
    <span className="label-text">Recipe*</span>
  </label>
<input type="text" placeholder="Class Name"name="class_name" className="input input-bordered w-full"  {...register("class_name", { required: true })} />

</div>
<input type="file" className="file-input file-input-bordered w-full max-w-xs"name="image"   {...register("image", { required: true })} />
</div>
<div className='flex my-3'>
<div className="form-control w-full ms-3">
  <label className="label">
    <span className="label-text">Recipe details*</span>
  </label>
<input type="text" placeholder="Instructor Name"name="Instructor_Name"className="input input-bordered w-full"   {...register("Instructor_Name", { required: true })} />

</div>
<div className="form-control w-full ms-3">
  <label className="label">
    <span className="label-text">Category*</span>
  </label>
<input type="text" placeholder="Instructor_Email"name="Useremail" className="input input-bordered w-full" {...register("Useremail", { required: true })} />

</div>
</div>
{/* <div className='flex my-3'>
<div className="form-control w-full ms-3">
  <label className="label">
    <span className="label-text">Available Seats*</span>
  </label>
<input type="text" placeholder="Available Seats"name="Available_seats" className="input input-bordered w-full" {...register("Available_seats", { required: true })}  />

</div>
<div className="form-control w-full ms-3">
  <label className="label">
    <span className="label-text">Price*</span>
  </label>
<input type="text" placeholder="Price"name="price" className="input input-bordered w-full"{...register("price", { required: true })}  />

</div>
</div> */}




<div className='text-center'>

<button className="btn btn-wide my-5 border-0">Add Class </button></div>
            </form>

        </div>
   
    );
};

export default AddItem;