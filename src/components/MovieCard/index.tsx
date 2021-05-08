import { HTMLAttributes } from 'react';
import s from './style.module.scss';
import { Link } from 'react-router-dom';

interface IMovieCard extends HTMLAttributes<HTMLDivElement> {
    imageCover: string;
    title: string;
    date: string;
    overview: string;
    movieId: string;
}

export const MovieCard = ({ imageCover, date, movieId, overview, title, ...props }: IMovieCard) => {

    return (
        <div className={s.card} {...props}>
            <img className={s['card__img']} src={`https://image.tmdb.org/t/p/w342/${imageCover}`} alt={title}/>
            <div className={s['card__info']}>
                <h3>{title}</h3>
                <h4>{date}</h4>
                <div className={s['card__info__textWrapper']}>
                <p>{overview}</p>
                </div>
                <Link to={`/detail/${movieId}`}>Saiba mais &gt;</Link>
            </div>
        </div>
    );
}