import Nav from '../components/nav'

export default function About() {
  return (
    <div>
      <Nav />
      <p>AL-Bum gives users the ability to create a randomized playlist based on the genres and artists they have chosen for a specified timeframe.</p>

      <style jsx global>{`
        body {
          background-color: #203b4f;
        }
        p {
          color: #f5f5f5;
          padding: 14px;
          width: 250px;
        }
        `}
      </style>
    </div>
  );
}
