import { SearchResult } from './components/searchresult/SearchResult';
import { SearchInput } from './components/searchInput/SearchInput';
import { SearchScreen } from './screen/display/SearchScreen';
import { WeatherHistory } from './components/history/WeatherHistory';
import { useState } from 'react';
import { SearchLoading } from './components/loading/SearchLoading';
import './App.css';
import axios from 'axios';

function App() {

  const [searchResult, setSearchResult] = useState({
    loading: false,
    data: {},
    error: ''
  })

  const [searchTerm, setSearchTerm] = useState('')

  const searchTermHandler = async () => {
    const API_KEY = '21101f82076c292d6e6fffccb41e89d7';
    // const CORS = 'https://cors-anywhere.herokuapp.com';
    const API_URL = `https://openweathermap.org/data/2.5/weather?q=${searchTerm}&units=metric&APPID=${API_KEY}`;

    setSearchResult({ ...searchResult, loading: true })

    try {
      const res = await axios.get(API_URL);

      setSearchResult({ ...searchResult, data: res, loading: false })
    } catch (err) {
      setSearchResult({ ...searchResult, error: err, loading: false })
    }
  }

  return (
    <div className="App">
      <SearchScreen>
        <SearchInput onChange={setSearchTerm} searchTermHandler={searchTermHandler} />
        {
          searchResult.loading ? <SearchLoading />
            : (searchResult.error ? (<div className='error-container'>Lorem ipsum dolor sit amet Error...</div>) :
              (<>
                <SearchResult />
                <WeatherHistory />
              </>))}
      </SearchScreen>
    </div>
  );
}

export default App;
