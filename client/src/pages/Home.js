import React, { useEffect, useState } from 'react';
import { fetchPopularTVShows } from '../services/api';

function Home() {
    const [shows, setShows] = useState([]);

    useEffect(() => {
    
        const getPopularTVShows = async () => {
          const showsData = await fetchPopularTVShows();
          setShows(showsData);
        };

        getPopularTVShows();
      }, []);
    
    return (
        <div>
            <h1>Home Page</h1>
            <h2>Popular TV Shows</h2>
            <ul>
                {shows.map(show => (
                <li key={show.id}>
                    <h3>{show.title}</h3>
                    <img src={show.poster_path} alt={show.title} style={{ width: '200px' }}/>
                </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;