"use client";

import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLink {
  name: string;
  url: string;
}

interface Props {
  navLinks: NavLink[];
}

const Component: React.FC<Props> = ({ navLinks }) => {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {navLinks.map((link) => {
            return (
              <li
                key={link.url}
                className={`${styles.navItem} ${link.url === pathname ? styles.current : null}`}
              >
                <Link href={link.url} className={styles.navLink}>
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Component;
