import { api } from "../../../services/api.js";

export const getMovies = async () => {
    const response = await api.get("/filmes");
    return response.data;
};