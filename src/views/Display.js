import axios from 'axios';
import { useState, useEffect } from 'react';
import People from '../components/People';
import Planets from '../components/Planets';

const Display = props => {
    const { category, id  } = props;
    const [error, setError] = useState(false);
    const [data, setData] = useState({});


    useEffect(() => {
        console.log('yuuuh')
        axios.get(`https://swapi.dev/api/${category}/${id}`)
            .then(response => {
                console.log(response.data)
                setData(response.data);
                setError(false);
            })
            .catch(err => setError(true))
    }, [id])
    return (
        <div>
            {
            category === "people" ? 
            <People people={data}/>
            : 
            <Planets planets={data}/>
            
            }
        </div>
    )
}

export default Display