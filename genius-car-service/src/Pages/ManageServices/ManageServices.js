import React from 'react';
import useServices from '../../hook/useServices';

const ManageServices = () => {
    const [services,setServices] = useServices();

    const handleRemove = id => {
        const proceed = window.confirm('are you sure to delete service')
        if(proceed){
            const url = `http://localhost:5000/service/${id}`
            fetch(url,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                const rest = services.filter(service=> service._id !== id)
                setServices(rest)
            })
        }
    }
    return (
        <div>
            <h1 className='text-center text-info my-4'>Manage service</h1>
            <div className='container w-50'>
                {
                    services.map(service => <div
                        className='bg-info my-3 p-3 rounded-3 d-flex justify-content-between'
                        key={service._id}>

                        <h5>{service.name}</h5>

                        <button
                            onClick={() => handleRemove(service._id)}
                            className='btn btn-danger'
                        >x</button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageServices;