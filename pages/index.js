import Head from 'next/head'
import Nav from '../components/Nav';

const Index = () => (
  <div>
    <Head>
      <title>ALbum</title>
    </Head>

    <Nav />

    <h1>Welcome to ALbum</h1>

    <div className="music-box">
      <h3>Create a Playlist</h3>
      <h3>Search Genres</h3>
      <h3>Discover Artists</h3>
    </div>

    <style jsx global>{`
        body {
          background-color: #203b4f;
          font-family: sans-serif;
        }
        h1 {
          color: #f5f5f5;
          text-align: center;
        }
        .music-box h3 {
          color: #f5f5f5;
        }
    `}</style>
  </div>
);



export default Index;
