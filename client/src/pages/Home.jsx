import React from 'react';
import Header from 'components/header';
import CarruselSeries from 'components/carousel';

function Home() {
    return (
        <div className='bg-gray-800'>
            <Header />
            <CarruselSeries/>
        </div>
    );
};

export default Home;