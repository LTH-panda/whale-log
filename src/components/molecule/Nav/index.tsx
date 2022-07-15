import Link from 'next/link';
import React from 'react';

function Nav() {
  return (
    <nav>
      <Link href="/about" passHref>
        <a href="replace">about</a>
      </Link>
    </nav>
  );
}

export default Nav;
