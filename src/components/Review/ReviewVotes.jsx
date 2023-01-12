import { useEffect, useState } from "react";
import { patchVotes } from "../Utils/Api"

export const Votes = ({ currentVotes, reviewId }) => {
  const [vote, setVote] = useState(0)
  let totalVotes = currentVotes + vote
  let upDown = 0

  useEffect(() => {
    const timer = setTimeout(() => {
      if (vote !== 0) patchVotes(reviewId, vote)
      .then((res)=>{console.log(res)})
      .catch((err)=>{
        upDown = 0
        setVote(upDown)
        alert('Vote failed')
      })
    }, 5000);
    return () => clearTimeout(timer)
  },[vote])

function voteClicked(click){
    (upDown===click)? upDown = 0 : upDown = click 
    setVote(upDown)
  }

  return (
  <span className="rVotes">
    <p>{totalVotes}</p> 
    <button className={(vote=== 1)? "rVotesUButtonClicked":"rVotesUButton"} type="button" onClick={() => voteClicked(1)}>^</button> 
    <button className={(vote=== -1)? "rVotesDButtonClicked":"rVotesDButton"} type="button" onClick={() => voteClicked(-1)}>v</button>
  </span>
  )

  ;
};
