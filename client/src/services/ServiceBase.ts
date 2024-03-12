import axios from "axios"

export const get = async <T>(url: string) => {
    return await axios.get<T>(url)
}
export const post = async <T>(url: string, data:object) => {
    return await axios.post<T>(url, data)
}

