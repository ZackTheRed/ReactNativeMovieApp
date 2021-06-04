const API_TOKEN = "81696b031f85bb51014b5d84bfb78a80";
export function getFilmsFromApiWithSearchedText (text, page) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text + "&page=" + page
    return fetch(url)
      .then((response) => response.json())
      .catch((error) => console.error(error))

  }

export function getImageFromApi (name) {
    return 'https://image.tmdb.org/t/p/w300' + name
  }