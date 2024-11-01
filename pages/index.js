import Head from 'next/head'
import Nav from '../components/nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompactDisc, faMusic, faMicrophone } from '@fortawesome/free-solid-svg-icons'

const Index = () => (
  <div>
    <Head>
      <title>ALbum</title>
    </Head>

    <Nav />

    <h1>Welcome to ALbum</h1>

    <div className='music-box'>
      <a href='/playlist' className='card'>
        <h1><FontAwesomeIcon icon={faCompactDisc} /></h1>
        <h2>Create a Playlist</h2>
      </a>


      <a href='/genres' className='card'>
      <h1><FontAwesomeIcon icon={faMusic} /></h1>
        <h2>Search Genres</h2>
      </a>

      <a href='/artists' className='card'>
      <h1><FontAwesomeIcon icon={faMicrophone} /></h1>
        <h2>Discover Artists</h2>
      </a>

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
        .music-box {
          max-width: 880px;
          margin 60px auto 40px;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }
        .music-box h2 {
          color: #333;
        }
        .music-box h1 {
          color: #203b4f
        }
        .card {
          text-align: center;
          text-decoration: none;
          width: 220px;
          padding: 18px 18px 24px;
          background-color: #b89911;
          border-radius: 6px;
        }
    `}</style>
  </div>
);



export default Index;
