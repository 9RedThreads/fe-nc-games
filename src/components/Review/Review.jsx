import { ReviewInfo } from './Review-info';
import { CommentInfo } from './Comment-info';
import { CommentInput } from './Input-form/Input-form';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"


export const Review = () => {
let {review_id} = useParams()


    return (
        <main>
            <ReviewInfo reviewId={review_id}/>
            <CommentInfo reviewId={review_id}/>
            {/* <CommentInput /> */}
        </main>
    )
}