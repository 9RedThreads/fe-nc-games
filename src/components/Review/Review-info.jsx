import { useEffect, useState } from "react";
import { getReviewById } from "../Utils/Api";
import { Votes } from "./ReviewVotes"

export const ReviewInfo = ({ reviewId }) => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [review, setReview] = useState(0);

  useEffect(() => {
    getReviewById(reviewId)
      .then((response) => {
        setIsLoading(false);
        setReview(response);
      })
      .catch((err) => {
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="review-info">
      <img className="rImg" src={review.review_img_url} alt={`Game`} />
      <h4 className="rPTag" >{review.title}</h4>
      <p className="rPTag" >Made by {review.designer}</p>
      <p className="rPTag" >Reviewed by {review.owner}</p>
      <Votes reviewId={reviewId} currentVotes={review.votes}/>
      <p className="rBody" >{review.review_body}</p>
    </div>
  );
};
