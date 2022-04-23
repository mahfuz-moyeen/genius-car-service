import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        const url = `http://localhost:5000/service`
        fetch(url,{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>console.log(result))
    };

    return (
        <div>
            <h1 className='text-center text-info my-4'>Add service</h1>
            <div className='container w-50'>
                <form
                    className='d-flex flex-column'
                    onSubmit={handleSubmit(onSubmit)
                    }>
                    <input className='my-3 rounded-3' placeholder='Name' type='text' {...register("name", { required: true, maxLength: 20 })} />
                    <input className='my-3 rounded-3' placeholder='Price' type='number' {...register("price", { required: true })} />
                    <input className='my-3 rounded-3' placeholder='Image Url' type='text' {...register("img", { required: true })} />
                    <textarea className='my-3 rounded-3' placeholder='Description' type='text' {...register("description", { required: true })} />
                    <input className='btn btn-info d-block mx-auto' type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddService;