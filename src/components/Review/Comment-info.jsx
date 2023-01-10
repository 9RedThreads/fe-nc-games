import { useEffect, useState } from "react";
import {getCommentById} from '../Utils/Api'

export const CommentInfo = ({reviewId}) => {
    const [comments, setComments] = useState([])

    useEffect(() => {
        getCommentById(reviewId)
          .then((response) => {
            console.log(response);
            setComments(response);
          })
      }, []);

    return (
        <ul className="Cbox" >
            {comments.map((comment)=> {
               return <li key={comment.comment_id} className='comment' >
                    <header>{comment.author}</header>
                    <p>{comment.votes}</p>
                    <p>{comment.created_at}</p>
                    <p>{comment.body}</p>
                </li>
            })}
        </ul>
    )
}