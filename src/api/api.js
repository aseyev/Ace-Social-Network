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
    getUserProfile (userId) {
        console.warn ('Obsolete method. Please use profileAPI object')
        return profileAPI.getProfile(userId)
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
export const authAPI = {
    me () {
        return instance.get(`auth/me`);
    },
    login ( email, password, rememberMe = false) {
        return instance.post(`auth/login`, { email, password, rememberMe });
    },
    logout () {
        return instance.delete(`auth/login`);
    }
}

export const profileAPI = {
    
    getProfile (userId) {
        return instance.get(`profile/`+userId)
            .then( resp => resp.data );
    },
    getStatus (userId) {
        return instance.get(`profile/status/`+userId)
    },
    updateStatus (status) {
        return instance.put(`profile/status/`, {status: status})
    }
}