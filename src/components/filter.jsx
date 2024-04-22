/* eslint-disable react-hooks/rules-of-hooks */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';

const Filter = ()=> {
    const [input, setInput] = useState('');
    const [reciperes, setReciperes] = useState([]);
    const [error, setError] = useState('');

    const url = 'https://api.api-ninjas.com/v1/recipe?query=' + input;
    const options = {
        method: 'GET',
        headers: {
            'X-Api-Key': 'B5GKSjoGS/XKkCZhg5ajhg==Mlnb2nnIVCe8qKLh'
        },
    };
    const handleSearch = async (e) =>{   
        e.preventDefault();
        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const result = await response.json();
            setReciperes(result);
            // console.log(result);
            if(!result.length){
                setError('Oops recipe not available!');
            }
        } catch (error) {
            // console.error('Error fetching data:', error);
            setError('Oops recipe not available!' + error);
        }
    }
    return (
        <div>
            <div className='form'>
                <input type="text" placeholder='Search Recipe...' value={input} onChange={(event)=>{setInput(event.target.value)}} />
                <button onClick={handleSearch}>Search</button>
            </div>
            <h2>{error}</h2>
            <section className='result'>
                {reciperes && reciperes.map((res, index) => (
                    <div key={index} className='result-box'>
                       <h2>{res.title}</h2>
                       <h3>{res.ingredients.split('|')}</h3>
                       <p>{res.instructions}</p>
                       <span>{res.servings}</span>
                    </div>
                    
                ))}
            </section>
        </div>
    );
}

export default Filter;