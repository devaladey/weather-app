import { FaCloudRain, FaCloudSun, FaMapMarkerAlt } from 'react-icons/fa';
import './searchResult.css';
export const SearchResult = () => {
    return (
        <div className='search-result'>
            <div className='search-country'>
                <h2 className='search-country-name'>Nigeria</h2>
                <div className='search-country-location'>
                    <span className='search-country-location-icon'><FaMapMarkerAlt /></span>
                    <span className='search-country-location-value'>47, 51.9</span>
                </div>
            </div>
            <div className='search-temperature'>
                <div className='search-temperature-text'>
                    <h4>16<sup>&deg;c</sup></h4>
                    <p>Feels like 16<sup>&deg;c</sup></p>
                </div>
                <div className='search-temperature-icon'>
                    <FaCloudSun />
                    <FaCloudRain />
                </div>
            </div>
            <div className='search-cloud-state'>
                Clound State
            </div>
        </div>
    );
};