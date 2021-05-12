import axios from "axios";

const api = axios.create({baseURL:'http://f529e245b786.ngrok.io/api/v1'});

const getLogs = async (bowl_id) => {
    const data = await api.get(`/food-logs/${bowl_id}`);
    return data;
};

export default getLogs;
