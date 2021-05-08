import React, { useLayoutEffect, useState } from 'react';
import { MovieCard } from '../../MovieCard';
import tmdbApi from '../../services/tmdbApi';
import { formatDateBR } from '../../utils/formatters';
import s from './style.module.scss';

export interface IMoviesListResponse {
    results: IMovie[];
}

export interface IMovie {
    id: number;
    poster_path: string;
    overview: string;
    release_date: string;
    title: string;
}

const Home: React.FC = () => {

    const [movieList, setMovieList] = useState<IMoviesListResponse>();

    useLayoutEffect(() => {
        tmdbApi.get(`/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
            .then(res => setMovieList(res.data));
    }, []);

    return (
        <div className={s.main}>
            <h1 className={s['main__title']}>Lista de Filmes</h1>
            <div className={s['main__list']}>
                {movieList && movieList?.results.length! > 0 && (
                    movieList.results.map(movie => (
                        <MovieCard 
                            key={movie.id} 
                            date={formatDateBR(movie.release_date)} 
                            imageCover={movie.poster_path} 
                            movieId={movie.id.toString()} 
                            overview={movie.overview} 
                            title={movie.title} 
                        />
                    ))
                )}
            </div>
        </div>
    );
}

export default Home;