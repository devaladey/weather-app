import LoadingIcons from 'react-loading-icons';
import './searchLoading.css';
export const SearchLoading = () => {
    return (
        <div className='loading-container'>
            <span className='loading-icon'>
                <LoadingIcons.SpinningCircles />
            </span>
            <span className='loading-text'>
                Loading...
            </span>
        </div>
    );
};