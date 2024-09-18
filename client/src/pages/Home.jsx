import React, { useState, useEffect }  from 'react';
import Header from 'components/header';
import Carrusel from 'components/carousel';
import { fetchPopularTVShows,fetchTopRatedTVShows,fetchPopularMovies,fetchTopRatedMovies } from 'services/api';

function Home() {
    const [popularShows, setPopularShows] = useState([]);

    useEffect(() => {
        const getPopularTVShows = async () => {
        try {
            const popularShowsData = await fetchPopularTVShows();
            setPopularShows(popularShowsData);
        } catch (error) {
            console.error('Error fetching popular TV shows:', error);
        }
        };

        getPopularTVShows();
    }, []);

    const [topRatedShows, setTopRatedShows] = useState([]);
    useEffect(() => {
        const getTopRatedTVShows = async () => {
            try {
                const topRatedshowsData = await fetchTopRatedTVShows();
                setTopRatedShows(topRatedshowsData);
            } catch (error) {
                console.error('Error fetching popular TV shows:', error);
            }
            };
    
        getTopRatedTVShows();
    }, []);

    const [popularMovies, setPopularMovies] = useState([]);
    useEffect(() => {
        const getPopularMovies = async () => {
            try {
                const popularMoviesData = await fetchPopularMovies();
                setPopularMovies(popularMoviesData);
            } catch (error) {
                console.error('Error fetching popular movies:', error);
            }
            };
    
        getPopularMovies();
    }, []);

    const [topRatedMovies, setTopRatedMovies] = useState([]);
    useEffect(() => {
        const getTopRatedMovies = async () => {
            try {
                const topRatedMoviesData = await fetchTopRatedMovies();
                setTopRatedMovies(topRatedMoviesData);
            } catch (error) {
                console.error('Error fetching popular movies:', error);
            }
            };
    
        getTopRatedMovies();
    }, []);

    return (
        <div className='bg-slate-900'>
            <Header />
            <Carrusel title={"Series Mejor Valoradas"} data={topRatedShows} info={"-top-rated-shows"}/>
            <Carrusel title={"Películas Mejor Valoradas"} data={topRatedMovies} info={"-top-rated-movies"}/>
            <Carrusel title={"Series Populares"} data={popularShows} info={"-popular-shows"}/>
            <Carrusel title={"Películas Populares"} data={popularMovies} info={"-popular-movies"}/>
        </div>
    );
};

export default Home;