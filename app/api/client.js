import { create } from "apisauce";

const apiClient = create({
    baseURL: "http://192.168.124.246:8000/api",
})

export default apiClient