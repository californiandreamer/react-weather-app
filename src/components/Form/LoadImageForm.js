import React from 'react'
import cls from './LoadImageForm.module.css'
import Img from '../../assets/images/avatar.jpg'

const LoadImageForm = () => {
    return(
        <div className={cls.account__inner}>
            <img 
                className={cls.account__img} 
                src={Img} />
            <input className={cls.upload_avatar} type="file" name="loadAvatar" />
            <div className={cls.upload__text}>Click to change image</div>
        </div>
    )
}

export default LoadImageForm