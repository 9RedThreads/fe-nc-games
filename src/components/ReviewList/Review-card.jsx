export const ReviewCard = (review) => {

    return (
        <li className="card">
            <h3>{review.title}</h3>
            <img src={review.review_img_url} alt={`Image of ${review.title}`} className='CardPic'/>
            <p>Price:{review.votes}</p>
        </li>
    )
}