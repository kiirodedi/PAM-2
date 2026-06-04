import { api } from "../../../services/api";

const getImageUrl = (path, size = "w500") =>
  path ? `https://image.tmdb.org/t/p/${size}${path}` : null;

export const getPopularMovies = async (page = 1) => {
  const response = await api.get("/movie/popular", {
    params: { page, language: "pt-BR" },
  });

  return response.data.results.map((movie) => ({
    id: movie.id,
    nome: movie.title,
    ano: movie.release_date ? movie.release_date.split("-")[0] : "",
    img_capa: getImageUrl(movie.poster_path, "w500"),
    img_background: getImageUrl(movie.backdrop_path, "w780"),
    titulo: movie.title,
    titulo_original: movie.original_title,
    data_lancamento: movie.release_date,
  }));
};

export const getMovieDetails = async (movieId) => {
  const response = await api.get(`/movie/${movieId}`, {
    params: { language: "pt-BR" },
  });

  const movie = response.data;
  return {
    id: movie.id,
    titulo: movie.title,
    titulo_original: movie.original_title,
    sinopse: movie.overview,
    status: movie.status,
    adult: movie.adult,
    tagline: movie.tagline,
    tempo_execucao: movie.runtime,
    data_lancamento: movie.release_date,
    img_capa: getImageUrl(movie.poster_path, "w500"),
    img_background: getImageUrl(movie.backdrop_path, "w780"),
    generos: movie.genres || [],
    lingua_original: movie.original_language,
    nota: movie.vote_average,
    orcamento: movie.budget,
    receita: movie.revenue,
    pais_origem: movie.production_countries?.map((country) => country.name) || [],
    linguas_faladas: movie.spoken_languages?.map((lang) => ({
      iso_639_1: lang.iso_639_1,
      nome: lang.name,
    })) || [],
  };
};

export const getElencoMovie = async (movieId) => {
  const response = await api.get(`/movie/${movieId}/credits`, {
    params: { language: "pt-BR" },
  });

  return response.data.cast.map((actor) => ({
    id: actor.id,
    nome: actor.name,
    personagem: actor.character,
    imagem: getImageUrl(actor.profile_path, "w200"),
  }));
};
