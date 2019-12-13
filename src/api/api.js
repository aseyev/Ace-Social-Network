import * as axios from "axios";

const instance = axios.create ({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: { "API-KEY": "eb0c046e-227c-4a33-b9d2-bd8d71c72b1d" }
})

//returns promise
export const dimychAPI = {
    getUsers( currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then( resp => resp.data );
    },
    authMe () {
        return instance.get(`auth/me`)
            .then( resp => resp.data );
    },
    getUserProfile (userId) {
        return instance.get(`profile/`+userId)
            .then( resp => resp.data );
    },
    followUser (userId) {
        return instance.post(`follow/`+userId)
            .then( resp => resp.data );
    },
    unfollowUser (userId) {
        return instance.delete(`follow/`+userId)
            .then( resp => resp.data );
    }

}