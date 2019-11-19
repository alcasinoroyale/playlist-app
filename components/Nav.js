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
        font-family: sans-serif;
        margin: 0;
      }
      nav {
        text-align: center;
        background-color: #333;
        height: 70px;
        display: flex;
        justify-content: center;
      }
      nav a {
        color: #f5f5f5;
        text-decoration: none;
        font-size: 16px;
        padding: 28px 34px;
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
