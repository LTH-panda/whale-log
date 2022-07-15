import Link from 'next/link';
import React from 'react';

function Logo() {
  return (
    <Link href="/" passHref>
      <a href="replace" className="text-3xl text-blue-400 font-suitHeavy ">
        Whale
      </a>
    </Link>
  );
}

export default Logo;
