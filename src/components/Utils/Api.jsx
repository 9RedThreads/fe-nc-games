import axios from 'axios'


export const getReviews = () => {
    return axios
    .get('https://jcs-nc-games.onrender.com/api/reviews')
    .then((res) => {
        return res.data.review
    })
}

export const getReviewById = (id) => {
    return axios
    .get(`https://jcs-nc-games.onrender.com/api/reviews/${id}`)
    .then((res) => {
        return res.data.review
    })
}

export const getCommentById = (id) => {
    return axios
    .get(`https://jcs-nc-games.onrender.com/api/reviews/${id}/comments`)
    .then((res) => {

        return res.data.comments
    })
}

export const patchVotes = (id, vote) => {
    return axios
    .patch(`https://jcs-nc-games.onrender.com/api/reviews/${id}/`, { inc_votes: vote} )
    .then((res) => {

        return res.data.review
    })
}