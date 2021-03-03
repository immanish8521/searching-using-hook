import React, { useState } from 'react';
import ImageResult from './ImageResult';
import './styles/Search.css';

const Search = () => {

    const [img, setImg] = useState('');

    const searchFun = (e) => {
        const data = e.target.value;
        console.log(data);
        setImg(data);
    }

    return (
        <>
            <div className="user_input_container">
                <input className="input_container" value={img} onChange={searchFun} type="text" placeholder="Search for Image" />
            </div>
            {/* {
                img === "" ? null : <ImageResult name={img} />
            } */}
            <ImageResult name={img} />
        </>
    )
};

export default Search;