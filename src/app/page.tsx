const Home = async ({ searchParams }: { searchParams: { id: string } }) => {
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${searchParams.id}`
  ).then((response) => response.json());

  return <div className="text-center pt-5">{data.title}</div>;
};

export default Home;
