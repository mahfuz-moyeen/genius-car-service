import React, { Children, useEffect, useState } from 'react';
import axios from 'axios'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivet from '../../api/axiosPrivet';

const Orders = () => {
    const [user] = useAuthState(auth)
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getOrders = async () => {
            const url = `http://localhost:5000/order?email=${user.email}`

            try {
                ///// normal ///
                // const { data } = await axios.get(url, {
                //     headers: {
                //         authorization: `Bearer ${localStorage.getItem('token')}`
                //     }
                // })

                ///// axios private interceptors //
                const { data } = await axiosPrivet.get(url)
                
                setOrders(data)
            }

            catch (error) {
                if (error.response.status === 403 || error.response.status === 401) {
                    signOut(auth);
                    navigate('/login');
                }
            }
        }

        getOrders();
    }, [])



    return (
        <div>
            <h2 className='text-center text-primary my-4'>Your Orders: {orders.length}</h2>
            <div>

            </div>
        </div>
    );
};

export default Orders;