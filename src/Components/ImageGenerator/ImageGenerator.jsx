import React from 'react'
import './ImageGenerator'
import defaultImage from '../Assets/defauld.png'


const ImageGenerator = () => {
  return (
    <div className='ai-image-generator'>
        <div className="heade">
            AI Image <span>Generator</span>
            <div className="img-loading">
                <div className="image"><img src={defaultImage} alt="" /></div>

            </div>
        </div>
    </div>
  )
}

export default ImageGenerator
