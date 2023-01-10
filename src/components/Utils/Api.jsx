import axios from 'axios'


export const getReviews = () => {
    return axios
    .get('https://jcs-nc-games.onrender.com/api/reviews')
    .then((res) => {
        return res.data.review
    })
}