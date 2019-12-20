import Nav from '../components/nav'

export default function Signup() {
  return (
    <div>
      <Nav />
      <h2>Create an Account</h2>
      <form>
        <h3>Username</h3>
        <p><input type="text" name="name" /></p>
        <h3>Password</h3>
        <p><input type="password" name="password" /></p>
        <button type="submit" value="Submit">Sign Up</button>
      </form>
      <style jsx global>{`
        body {
          background-color: #203b4f;
        }
        h2 {
          color: #f5f5f5;
          padding: 14px;
          width: 250px;
        }
        form {
          margin: 20px;
          color: #f5f5f5;
        }
        `}
      </style>
    </div>
  );
}
