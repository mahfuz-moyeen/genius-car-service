import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useServiceDetails from '../../hook/useServiceDetails';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetails(serviceId);

    const { name, img, price, description } = service;
    return (
        <div>
            <h2 className='text-center my-4'>Welcome to detail: {name}</h2>
            <div className='text-center container my-4'>
                <div className='service d-flex p-2'>
                    <img className='w-50 rounded-3' src={img} alt="" />
                    <div>
                        <h2>{name}</h2>
                        <p>Price: {price}</p>
                        <p><small>{description}</small></p>
                    </div>
                </div>
            </div>
            <Link to={`/checkout/${serviceId}`}>
                <button className='btn btn-primary d-block mx-auto'>Proceed Checkout</button>
            </Link>
        </div>
    );
};

export default ServiceDetail;