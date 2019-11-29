import Nav from '../components/nav'

export default function Login() {
  return (
    <div>
      <Nav />
      <h2>Login</h2>

      <style jsx global>{`
        body {
          background-color: #203b4f;
        }
        h2 {
          color: #f5f5f5;
          padding: 14px;
          width: 250px;
        }
        `}
      </style>
    </div>
  );
}
