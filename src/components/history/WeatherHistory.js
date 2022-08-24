import { FaCloudRain } from 'react-icons/fa';
import './weatherhistory.css';
export const WeatherHistory = () => {
    return (
        <div className='weather-container'>
            <div className='weather-history'>
            {[1, 2, 3].map(el => {
                return (
                    <div className='history' key={el}>
                        <div className='history-text'>
                            Fri <br /> 16<sup>&deg;c</sup>
                        </div>
                        <div className='history-icon'>
                            <FaCloudRain />
                        </div>
                    </div>
                )
            })}
        </div>
            <p className='weather-para'>&copy; Last updated on 2:50 PM</p>
        </div>
    );
};