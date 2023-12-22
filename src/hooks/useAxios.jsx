import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://task-sync-server.vercel.app'
})

const useAxios = () => {
    return axiosPublic;
};

export default useAxios;