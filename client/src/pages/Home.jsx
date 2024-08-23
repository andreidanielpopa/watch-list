import React, { useEffect, useState } from 'react';
import { fetchPopularTVShows } from 'services/api';
import Header from 'components/header';
import Carousel from 'components/carousel';

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
        <div className='bg-gray-800'>
            <Header />
        </div>
    );
};

export default Home;