import React from 'react';
import UseServices from '../../hooks/UseServices';

const ManageServices = () => {
    const [services, setServices] = UseServices();

    const handleDelete = id => {
        const proceed = window.confirm('Are you Sure??');
        if (proceed) {
            const url = `http://localhost:7000/service/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining);
                })
        }
    }

    return (
        <div className='container w-50 mx-auto'>
            <h2>Manage Your Services</h2>
            {
                services.map(service => <div key={service._id}>
                    <h4>{service.name} <button onClick={() => handleDelete(service._id)}>X</button></h4>

                </div>)
            }
        </div>
    );
};

export default ManageServices;