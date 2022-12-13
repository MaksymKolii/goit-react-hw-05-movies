import Api from '../Services/apiFetcher';
export const Home = () => {
  async function getMovies() {
    const arr = await Api.fetchMostPopular();

    console.log(arr);
  }

  const array = getMovies();

  array.map(({title, id})=>{
    return console.log(title, id)

    
  })

  return (
    <main>
      <h1>Trending today</h1>

      <ul>
        {/* {array.map(({ id, title }) => {
          return <li key={id}>{title}</li>;
        })} */}
      </ul>
    </main>
  );
};
