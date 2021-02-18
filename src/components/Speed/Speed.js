import React, { useEffect, useState } from 'react'
import cls from './Speed.module.css'
import { Redirect, withRouter } from 'react-router'

const Speed = () => {
    const [speed, setSpeed] = useState()
    const [maxSpeed, setMaxSpeed] = useState()

    const getCurrentSpeed = () => {
        navigator.geolocation.watchPosition(function(position) {
            const metersSpeed = position.coords.speed
            const currentSpeed = Math.round(metersSpeed * 18 / 5)
            
            setSpeed(currentSpeed)
            
            const maxValue = Math.max(speed)
            setMaxSpeed(maxValue)
        });
    }      
    
    useEffect(() => {
        getCurrentSpeed()
    }, [speed])

    return(
        <div className={cls.speed__container}>
            <div className={cls.speed__title}>Your speed is:</div>
            <div className={cls.speed__value}>{speed || 0}</div>
            <div className={cls.speed__measure}>km/h</div>
    <div className={cls.max__speed}>Max. speed: {maxSpeed || 0} km/h</div>
        </div>
    )
}

export default withRouter(Speed)

