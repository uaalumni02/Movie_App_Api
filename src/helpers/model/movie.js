const isValidMovie = (movie) => {
    const regExp = /^([A-Za-z]+[,.]?[ ]?|[A-Za-z]+['-]?)+$/i
    return regExp.test(movie)
  };

  const isValidRating = (rating) => {
    const regExp = /^[a-zA-Z0-9.-]+$/i
    return regExp.test(rating)
  };
  const isValidYear = (year) => {
    const regExp = /^\d{4}$/i
    return regExp.test(year)
  };

  export {
    isValidMovie,
    isValidRating,
    isValidYear
  }