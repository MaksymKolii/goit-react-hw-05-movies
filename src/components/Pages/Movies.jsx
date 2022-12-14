import Api from '../Services/apiFetcher';

export const Movies = () => {
  async function getMovies() {
    const array = await Api.fetchMoviesByName('Jack+Reacher');
    const arr = await Api.fetchMostPopular();
    const arrrr = await Api.fetchMovieDetails(555604);

    console.log('fetchMoviesByName', array);
    console.log('fetchMostPopular', arr);
    console.log('fetchMovieDetails', arrrr);
  }

  getMovies();

  return (
    <main>
      <div>986g96g9og</div>
    </main>
  );
};
