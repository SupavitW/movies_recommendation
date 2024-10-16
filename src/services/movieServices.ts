import axios from "axios";
import * as dotenv from "dotenv";

dotenv.config();
const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = process.env.API_KEY;

export default class TmdbService {
    static searchMovies = async (query: string) => {
        try {
            const response = await axios.get(`${BASE_URL}/search/movie`, {
                params: {
                    api_key: API_KEY,
                    query: query,
                },
            });
            return response.data.results;
        } catch (error) {
            throw new Error(`TMDB service error: ${error}`);
        }
    };

    static getMovieDetails = async (movieId: number) => {
        try {
            const response = await axios.get(`${BASE_URL}/movie/${movieId}`, {
                params: {
                    api_key: API_KEY,
                },
            });
            return response.data;
        } catch (error) {
            throw new Error(`TMDB service error: ${error}`);
        }
    };

    static getPopularMovies = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/movie/popular`, {
                params: {
                    api_key: API_KEY,
                },
            });
            return response.data.results;
        } catch (error) {
            throw new Error(`TMDB service error: ${error}`);
        }
    };
}
