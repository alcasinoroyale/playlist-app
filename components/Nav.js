import Link from 'next/link';

const Nav = () => (
  <nav>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/about">
      <a>About</a>
    </Link>
    <Link href="/signup">
      <a>Signup</a>
    </Link>
    <Link href="/login">
      <a>Login</a>
    </Link>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: sans-serif;
      }
      nav {
        text-align: center;
        background-color: #333;
        height: 50px;
      }
      nav a {
        color: #f5f5f5;
        text-decoration: none;
        font-size: 14px;
        padding: 30px;
        text-transform: uppercase;
      }
      nav a:hover {
        color: #ffffff;
        font-weight: bold;
      }
      `}
    </style>
  </nav>
);

export default Nav;
