// eslint-disable-next-line no-unused-vars
import React from 'react';
import fooda from '../assets/food1.jpg' //Photo by <a href="https://unsplash.com/@pwign?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Anh Nguyen</a> on <a href="https://unsplash.com/photos/vegetable-and-meat-on-bowl-kcA-c3f_3FE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
import foodb from '../assets/food2.jpg' //Photo by <a href="https://unsplash.com/@miracletwentyone?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Joseph Gonzalez</a> on <a href="https://unsplash.com/photos/toast-bread-with-blueberry-on-black-plate-zcUgjyqEwe8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
import foodc from '../assets/food3.jpg'
import foodd from '../assets/food4.jpg'
import Filter from './filter';

function Begin() {
    return (
        <div>
            <div className='img-box'>
                <div className='img-container'>
                    <img src={fooda} alt="food image" />
                </div>
                <div className='img-container'>
                    <img src={foodb} alt="food image" />
                </div>
                <div className='img-container'>
                    <img src={foodc} alt="food image" />
                </div>
                <div className='img-container'>
                    <img src={foodd} alt="food image" />
                </div>
            </div>
            <Filter />
            
        </div>
    );
}

export default Begin;