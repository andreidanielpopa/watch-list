import React, { useState, useEffect }  from 'react';
import Header from 'components/header';
import CarruselSeries from 'components/carousel';
import { fetchPopularTVShows } from 'services/api';

function Home() {
    const [shows, setShows] = useState([]);

    useEffect(() => {
        const getPopularTVShows = async () => {
        try {
            const showsData = await fetchPopularTVShows();
            setShows(showsData);
        } catch (error) {
            console.error('Error fetching popular TV shows:', error);
        }
        };

        getPopularTVShows();
    }, []);

    return (
        <div className='bg-gray-800'>
            <Header />
            <CarruselSeries data={shows}/>
        </div>
    );
};

export default Home;