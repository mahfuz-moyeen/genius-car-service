import React from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetails from '../../../hook/useServiceDetails';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import axios from 'axios'
import { toast } from 'react-toastify';

const Checkout = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetails(serviceId);
    const [user] = useAuthState(auth);


    const handleFormSubmit = event => {
        event.preventDefault();
        const order = {
            name: user.displayName,
            email: user.email,
            phone: event.target.phone.value,
            service: service.name,
            serviceId: serviceId,
            address: event.target.address.value
        }

        axios.post('http://localhost:5000/order', order)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('your order book successfully');
                    event.target.reset();
                }
            })
    }

    // const [user,setUser] = useState({
    //     name:'moyeen',
    //     email:'moyeen@gmail.com',
    //     phone:"01700000",
    //     address: 'my home'
    // })

    // const handleChangeAdress = event => {
    //     const {address, ...rest} = user   
    //     const newAddress = event.target.value;
    //     const newData = {newAddress, ...rest}
    //     setUser(newData)
    // }

    return (
        <div className='container'>
            <h2 className='text-center my-4'>Please Checkout your booking
                <span className='text-primary'> {service.name}</span>
            </h2>
            <div>
                <form
                    onSubmit={handleFormSubmit}
                    className='d-flex flex-column w-50 mx-auto my-4'>

                    <input
                        className='rounded-3 my-2 p-2 '
                        type="text"
                        name="name"
                        defaultValue={user?.displayName}
                        placeholder="name"
                        required />

                    <input
                        className='rounded-3 my-2 p-2 '
                        type="email"
                        name="email"
                        defaultValue={user?.email}
                        placeholder="email"
                        disabled
                        required />

                    <input
                        className='rounded-3 my-2 p-2 '
                        type="email"
                        name="service"
                        defaultValue={service.name}
                        placeholder="service"
                        disabled
                        required />

                    <input
                        className='rounded-3 my-2 p-2 '
                        type="number"
                        name="phone"
                        required
                        placeholder="phone" />

                    <input
                        className='rounded-3 my-2 p-2 '
                        type="text"
                        name="address"
                        placeholder="address"
                        autoComplete='off'
                        required />


                    <input type="submit" className='btn btn-primary d-block mx-auto my-2 p-2' value="Place Order" />
                </form>
            </div>
        </div>
    );
};

export default Checkout;