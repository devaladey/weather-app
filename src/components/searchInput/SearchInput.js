import { FaSearch } from 'react-icons/fa';
import './serachInput.css';
export const SearchInput = ({onChange, searchTermHandler}) => {
    return (
        <div className='serach-container'>
            <input type='text' placeholder='Enter City' onChange={e=> onChange(e.target.value)} className='search-input' />
            <button type='button' className='search-btn' onClick={searchTermHandler}><FaSearch /></button>
        </div>

    );
};