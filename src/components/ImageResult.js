import React from 'react';
import './styles/Search.css'

const ImageResult = ({name}) => {

    const img = `https://source.unsplash.com/800x600/?${name}`

    return (
        <div className="main_div">
            <div className="main_div_first_half">
                <h3>Try To Work Hard</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, voluptatum. Nam recusandae dignissimos culpa dolores reprehenderit tenetur soluta ab suscipit iste unde quidem, iusto placeat aspernatur perferendis, vel odio accusamus?
                </p>
                <div className="main_button">
                    <p className="button">Click Me</p>
                </div>
                
            </div>
            <div>
                <img className="image_container" src={img} alt="imagesplash" />
            </div>
        </div>
    )
}

export default ImageResult;
