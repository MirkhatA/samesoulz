import axios from "axios";

const baseUrl = "http://localhost:8080/api/v1"

export const login = async (user) => {
    return await axios.post(`${baseUrl}/login`, {
        email: user.email,
        password: user.password
    });
}

