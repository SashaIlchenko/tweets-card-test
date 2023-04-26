import axios from "axios";

const BASE_URL = 'https://64422c0676540ce22585d104.mockapi.io/users';
const limitPerPage = 3;
export async function getAllUsers() {
    const response = await axios.get(`${BASE_URL}`);
    return response.data;
}
export async function getUsers(page = 1) {
    const response = await axios.get(`${BASE_URL}?page=${page}&limit=${limitPerPage}`);
    return response.data;
}

export async function updateUsers(id, followers) {
    const response = await axios.put(`${BASE_URL}/${id}`, {
        followers,
    })
    return response.data;
}

