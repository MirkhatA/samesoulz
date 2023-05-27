import axios from "axios";

const baseUrl = "http://localhost:8080/api/v1";

const token = localStorage.getItem("token");
const uuid = localStorage.getItem("uuid");

const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
};

export const login = async (user) => {
    return await axios.post(`${baseUrl}/login`, {
        email: user.email,
        password: user.password,
    });
};

export const getUserData = async (username) => {
    return await axios.get(`${baseUrl}/profiles/${username}`, {
        headers,
    });
};

export const updateUser = async (user) => {
    return await axios.post(
        `${baseUrl}/profiles/update`,
        {
            age: user.age,
            bio: user.bio,
            firstName: user.firstName,
            gender: user.gender,
            lastName: user.lastName,
            location: user.location,
            username: user.username,
            uuid: uuid,
        },
        {
            headers,
        }
    );
};

export const updateProfilePicture = async (pic) => {
    return await axios.post(`${baseUrl}/images/${uuid}/add/avatar`, {
        image: pic,
    });
};

export const getRecommendedUsers = async (username) => {
    return await axios.get(`${baseUrl}/profiles/recommend/${username}`, {
        headers,
    });
};

export const sendRequestToFriend = async (targetId) => {
    return await axios.post(`${baseUrl}/profiles/send/${uuid}/to/${targetId}`,
        {},
        {headers: headers})
}

export const getIsRequestSent = async (targetId) => {
    return await axios.get(`${baseUrl}/profiles/check/request/${uuid}/${targetId}`,
        {headers:headers})
}

export const removeRequest = async (targetId) => {
    return await axios.post(`${baseUrl}/profiles/remove/request/${uuid}/to/${targetId}`,
        {},
        {headers:headers})
}
