import { useEffect, useState } from 'react';
import axios from 'axios';

const menuKeys = {
    popular: '?list=most_pop_movies',
    upcoming: '/x/upcoming?',
    topBoxOffice: '?list=top_boxoffice_200',
    topRated: '?list=top_rated_english_250',
};

const useFetchMovies = (selection = 'popular', genre = '', page = 1) => {
    const [movies, setMovies] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                setIsLoading(true);
                const response = await axios(
                    `https://moviesdatabase.p.rapidapi.com/titles${
                        menuKeys[selection]
                    }${
                        genre && '&genre=' + genre
                    }&limit=15&page=${page}&sort=year.decr`,
                    {
                        headers: {
                            'X-RapidAPI-Key':
                                'c9a4a889ccmsh7c8d71db655e1ecp1a142fjsn69881049a273',
                            'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
                        },
                    }
                );
                setMovies(response.data);
            } catch (error) {
                setErrors(error);
                console.log(error);
            } finally {
                setTimeout(() => {
                    setIsLoading(false);
                }, 4000);
            }
        };
        fetchMovies();
    }, [selection, genre, page]);
    return { movies, isLoading, errors };
};

export default useFetchMovies;
