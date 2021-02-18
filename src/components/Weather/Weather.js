import React from 'react';
import cls from './Weather.module.css'

const Weather = props => (
  <div className={cls.container}>
  { props.city &&
    <div>
      <p>City: {props.city}</p>
      <p>Pressure: {props.pressure} bar</p>
      <p>Humidity: {props.humidity} %</p>
      <p>Sunset: {props.sunset}</p>
    </div>
  }
    <p>{props.error}</p>
    </div>
)

export default Weather;

// class Weather extends React.Component {
//   render() {
//     return (
//       <div className={cls.container}>
//         <p>{this.props.city}</p>
//         <p>{this.props.country}</p>
//         <p>{this.props.sunrise}</p>
//         <p>{this.props.sunset}</p>
//       </div>
//     )
//   }
// }

// export default Weather;