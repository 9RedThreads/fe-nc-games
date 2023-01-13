import { useEffect, useState } from "react"
import { getReviews } from "../Utils/Api"
import { ReviewCard } from "./Review-card"


export const ReviewList = () => {
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [reviews, setReviews] = useState([])
    
    useEffect(() => {
        getReviews().then((response) => {
            setReviews(response)
            setIsLoading(false);
          })
          .catch((err) => {
            setIsError(true);
            setIsLoading(false);
          });
    }, [])

    if (isError) return <p>Error</p>;
    if (isLoading)  return <p>Loading...</p>;
    
    return (
        <main className="routes">
            <ul className="reviewCards" >
            {reviews.map((review) => {
                return <ReviewCard  key={review.review_id} {...review}/>
            })}
            </ul>
        </main>
    )
}