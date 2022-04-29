import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {

    const { serviceID } = useParams();
    const [service, setService] = useState({});

    useEffect(() => {
        const url = `http://localhost:7000/service/${serviceID}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data));
    }, [])

    return (
        <div>
            <h2>Welcome to detail: {service.name}</h2>
            <div className='text-center'>
                <Link to="/checkout">
                    <button className='btn btn-primary text-center'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;