import Link from 'next/link';

const Nav = () => (
  <nav>
    <Link href="/">
      <a>AL-Bum</a>
    </Link>
    <Link href="/about">
      <a>About</a>
    </Link>

    <style jsx>{`
      :global(body) {
        font-family: sans-serif;
      }
      nav {
        text-align: center;
      }
      nav a {
        color: #f5f5f5;
        text-decoration: none;
        font-size: 14px;
        padding: 20px;
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
