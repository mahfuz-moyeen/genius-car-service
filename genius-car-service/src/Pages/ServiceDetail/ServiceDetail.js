import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/service/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

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
            <Link to="/checkout">
                <button className='btn btn-primary d-block mx-auto'>Proceed Checkout</button>
            </Link>
        </div>
    );
};

export default ServiceDetail;