import {Link} from 'react-router-dom'

export const ReviewCard = (review) => {

    return (
        <Link to={`/tickle122/${review.review_id}`} className={'Links'}>
        <li className="card">
            <h3>{review.title}</h3>
            <img src={review.review_img_url} alt={`Image of ${review.title}`} className='CardPic'/>
            <p>Price:{review.votes}</p>
        </li>
        </Link>
    )
}