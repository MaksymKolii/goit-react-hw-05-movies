import Api from '../Services/apiFetcher';

export const Movies = () => {
  async function getMovies() {
    const array = await Api.fetchMoviesByName('Jack+Reacher');
    const arr = await Api.fetchMostPopular();

    // console.log(array);
    // console.log(arr);
  }

  getMovies();

  return (
    <main>
      <div> uiru7f7c76c</div>
    </main>
  );
};
