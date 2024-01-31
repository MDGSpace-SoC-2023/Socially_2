import Head from 'next/head';
import Poll from '../components/polls';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Poll App</title>
        <meta name="description" content="Next.js Poll App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Poll App</h1>
        <Poll />
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Your Company</p>
      </footer>
    </div>
  );
};

export default Home;
