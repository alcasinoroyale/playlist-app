import Nav from '../components/nav'

export default function About() {
  return (
    <div>
      <Nav />
      <div className="content">
        <h2>About AL-bum</h2>
        <p>AL-Bum gives users the ability to create a randomized playlist based on the genres and artists they have chosen for a specified timeframe.</p>
        <p>Music is an immersive experience. Choose your theme of chill, upbeat, energized, and many more.</p>
      </div>
      <style jsx global>{`
        body {
          background-color: #203b4f;
        }
        .content {
          width: 300px;
          padding: 14px;
          font-size: 18px;
          color: #f5f5f5;
        }
        `}
      </style>
    </div>
  );
}
