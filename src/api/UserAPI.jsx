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

export const register = async (user) => {
    return await axios.post(`${baseUrl}/register`, {
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        password: user.password,
        username: user.username,
    })
}

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
    return await axios.post(
        `${baseUrl}/images/${uuid}/add/avatar`,
        {
            image: pic,
        },
        {
            headers: {
                'Content-Type': `multipart/form-data`,
                Authorization: `Bearer ${token}`,
            }
        });
};

export const getProfilePicture = async (uuid) => {
    return await axios.get(`${baseUrl}/images/avatar/${uuid}`, {
        headers: headers,
        responseType: "blob",
    })
}

export const deleteProfilePicture = async () => {
    return await axios.post(`${baseUrl}/images/remove/avatar/${uuid}`, {}, {
        headers: headers
    })
}

// http://localhost:8080/api/v1/images/{uuid}/add/avatar

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
        {headers: headers})
}

export const removeRequest = async (targetId) => {
    return await axios.post(`${baseUrl}/profiles/remove/request/${uuid}/to/${targetId}`,
        {},
        {headers: headers})
}

export const getAllRequests = async () => {
    return await axios.get(`${baseUrl}/profiles/requests/to/${uuid}`,
        {headers: headers})
}

export const getAllFriends = async () => {
    return await axios.get(`${baseUrl}/profiles/friends/${uuid}`,
        {headers: headers})
}

export const getAllRequestsFromMe = async () => {
    return await axios.get(`${baseUrl}/profiles/requests/from/${uuid}`,
        {headers: headers})
}

export const acceptRequest = async (targetId) => {
    return await axios.post(`${baseUrl}/profiles/accept/${uuid}/to/${targetId}`,
        {},
        {headers: headers})
}

export const deleteFriend = async (targetId) => {
    return await axios.post(`${baseUrl}/profiles/remove/friend/${uuid}/to/${targetId}`,
        {},
        {headers: headers})
}

export const rejectRequest = async (targetId) => {
    return await axios.post(`${baseUrl}/profiles/reject/request/${targetId}/to/${uuid}`,
        {},
        {headers: headers})
}
