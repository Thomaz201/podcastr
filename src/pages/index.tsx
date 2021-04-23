import axios from 'axios';

export default function Home(props) {
  return (
    <div>
      <h1>Hello World</h1>
      <p>{JSON.stringify(props.episodes)}</p>
    </div>  
  )
}

export async function getStaticProps() {
  const { data } = await axios.get('http://localhost:3333/episodes');
  console.log('response', data)

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8,
  }
}
