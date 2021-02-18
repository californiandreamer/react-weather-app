import React from 'react'
import cls from './Temperature.module.css'

const Temperature = props => (
    <div>
        {props.city &&
        <div>
            <div className={cls.container}>
                <div className={cls.temp}>{props.temp}°С</div>
            </div>
        </div>
        }
    </div>
)

// class Temperature extends React.Component {
//     render() {
//         return(
//             <div className={cls.container}>
//                 <div className={cls.temp}>{this.props.temp} °С</div>
//             </div>
//         )
//     }
// }

export default Temperature
