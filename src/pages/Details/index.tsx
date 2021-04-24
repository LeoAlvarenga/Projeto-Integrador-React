import React, { useLayoutEffect, useState } from 'react';
import { useRouteMatch } from 'react-router';
import tmdbApi from '../../services/tmdbApi';
import { formatDateBR, minutesToHours } from '../../utils/formatters';
import s from './style.module.scss';

interface IDetailsParams {
    movieid: string;
}

interface IMovieResponse {
    revenue: number;
    overview: string;
    poster_path: string;
    title: string;
    release_date: string;
    runtime: string;
}

const Details: React.FC = () => {

    const { params } = useRouteMatch<IDetailsParams>();
    const [movie, setMovie] = useState<IMovieResponse>();

    useLayoutEffect(() => {
        tmdbApi.get(`/movie/${params?.movieid}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=pt-BR`)
            .then(res => setMovie(res.data));
    }, [params?.movieid]);

    return (
        <div className={s.container}>
            {
                movie && (
                    <>
                        <img className={s['container__img']} src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`} alt="Titulo do filme" />
                        <div className={s['container__content']}>
                            <h1>{movie.title}</h1>
                            <p>{movie.overview}</p>
                            <div className={s.infoWrapper}>
                                <div className={s['infoWrapper__info']}>
                                    <span>Data de Lançamento</span>
                                    <p>{formatDateBR(movie.release_date)}</p>
                                </div>
                                <div className={s['infoWrapper__info']}>
                                    <span>Duração</span>
                                    <p>{minutesToHours(Number(movie.runtime))}</p>
                                </div>
                                <div className={s['infoWrapper__info']}>
                                    <span>Receita</span>
                                    <p>{movie.revenue.toLocaleString('pt-BR', { style: 'currency', currency: 'USD' })}</p>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
        </div>
    );
}

export default Details;