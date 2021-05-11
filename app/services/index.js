import axios from "axios";

const api = axios.create({baseURL:'http://10.1.1.154:8585/api/v1'});

const getLogs = async (bowl_id) => {
    const data = await api.get(`/food-logs/${bowl_id}`);
    return data;
};

export default getLogs;
