import axios from "../axios";

export const golf = {
    add: async (name: String, score: Number) => {
        let response = await axios.post('/golfAdd', {
            name: name, //Todd
            score: Number(score) //[101, 121, 105, 111, 115, 108]
        });
        return response.data;
    },
    get: async (id: String) => {
        let response = await axios.get('/golfRead?name=' + id);
        return response.data;
    },
    getIds: async (id: String) => {
        let response = await axios.get('/golfItems?name=' + id);
        return response.data;
    }
}
