import axios from "axios"
const apiUrl = "https://67247152493fac3cf24e3a09.mockapi.io/api/staffManagement"

export const getAllstaff = async () => {
    try {
        const response = await axios.get(apiUrl)
        return response.data
    } catch (error) {
        console.log(error.toString())
    }
}
export const getstaffbyid = async (id) => {
    try {
         const response = await axios.get(`${apiUrl}/${id}`)
        return response.data;
    }catch (error) {
        console.log(error.toString())
    }
}
export const createstaff = async (staff) => {
    try {
         const response = await axios.pot(`${apiUrl}`, staff)
        return response.data;
    }catch (error) {
        console.log(error.toString())
    }
}
export const updatestaff = async (id, staff) => {
    try {
         const response = await axios.put(`${apiUrl}/${id}`,staff)
        return response.data;
    }catch (error) {
        console.log(error.toString())
    }
}
export const deletestaff = async (id) => {
    try {
         const response = await axios.delete(`${apiUrl}/${id}`)
        return response.data;
    }catch (error) {
        console.log(error.toString())
    }
}