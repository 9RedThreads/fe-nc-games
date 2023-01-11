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

if (comments.length === 0) return <li className='cBox' >No comments</li>

    return (
        <ul className="cBox" >
            {comments.map((comment)=> {
               return  <li key={comment.comment_id} className='comment' >
                    <header>{comment.author}</header>
                    <p>{comment.votes}</p>
                    <p>{comment.created_at}</p>
                    <p>{comment.body}</p>
                </li>
            })}
        </ul>
    )
}