import bcrypt from "bcrypt";
import TmdbService from "../services/movieServices";

export const passwordHash = async (password: string, saltRounds: number) => {
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  } catch (error) {
    throw new Error("Hashing Password Error");
  }
};

export const comparePassword = async (password: string, hash: string) => {
  try {
    const match = await bcrypt.compare(password, hash);
    return match;
  } catch (error) {
    throw new Error("Compare Password Error");
  }
};

// Declare interfcae to represent genre object
interface Genre {
  id: number;
  name: string;
}

export const recommendMovies = async (userGenres: Array<string>) => {
  try {
    // Get list of genres id
    const genres = await TmdbService.getGenres();
    if (!genres) {
      throw new Error("Failed to fetch genres");
    }

    // Filter genres based on user's preferred genres
    const genreIds = genres
      .filter((genre: Genre) => userGenres.includes(genre.name))
      .map((genre: Genre) => genre.id);

    // Discover movies base on genres id
    let movies = await TmdbService.discoverMoviesByGenres(genreIds);
    // sort the movies by popularity
    movies.sort((a: any, b: any) => b.popularity - a.popularity);
    return movies;
  } catch (error) {
    throw new Error("Recommendation Error");
  }
};
