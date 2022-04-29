import { useEffect, useState } from "react";


const UseServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:7000/service')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return [services, setServices]
};

export default UseServices;