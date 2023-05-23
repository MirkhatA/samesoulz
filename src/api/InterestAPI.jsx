import axios from "axios";

const baseUrl = "http://localhost:8080/api/v1";
const token = localStorage.getItem("token");

const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
};

export const getAll = async () => {
    return await axios.get(`${baseUrl}/interests`, {headers});
};

export const getUserInterests = async (username) => {
    return await axios.get(`${baseUrl}/interests/${username}`, {headers});
};

export const deleteAllInterests = async (username, interestList) => {
    return axios({
        method: "post",
        url: `${baseUrl}/interests/${username}/remove/list`,
        data: interestList,
        headers: headers
    });
}

export const addInterestList = async (username, interestList) => {
    return axios({
        method: "post",
        url: `${baseUrl}/interests/${username}/add/list`,
        data: interestList,
        headers: headers
    });
}
