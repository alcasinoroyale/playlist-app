import Link from 'next/link';

const Nav = () => (
  <div>
    <Link href="/">
      <a>AL-Bum</a>
    </Link>
    <Link href="/about">
      <a>About</a>
    </Link>
  </div>
);

export default Nav;
