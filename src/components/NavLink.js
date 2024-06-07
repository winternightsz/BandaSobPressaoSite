"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} className={`px-3 py-2 rounded ${isActive ? 'bg-gray-700' : 'hover:bg-gray-600'}`}>
      {children}
    </Link>
  );
};

export default NavLink;
