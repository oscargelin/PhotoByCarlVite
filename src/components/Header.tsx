import { useState, useEffect, useRef } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuClosed, setIsMenuClosed] = useState<boolean>(true);

  const menuRef = useRef<HTMLUListElement | null>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
      setIsMenuClosed(true);
    }
  };

  useEffect(() => {
    const handler = (e: MouseEvent) => handleClickOutside(e);

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  const handleToggleMenu = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation();
    setIsMenuClosed((prev) => !prev);
  };

  return (
    <header>
      <Link to={"/"}>
        <h1>PhotoByCarl</h1>
      </Link>
      <div>
        <nav>
          <div
            className={styles.mobileMenuContainer}
            onMouseDown={(e) => handleToggleMenu(e)}
          >
            <div
              className={
                isMenuClosed
                  ? styles.mobileMenuLine
                  : styles.mobileMenuClosedTopLine
              }
            ></div>
            <div
              className={
                isMenuClosed
                  ? styles.mobileMenuLine
                  : styles.mobileMenuClosedMiddleLine
              }
            ></div>
            <div
              className={
                isMenuClosed
                  ? styles.mobileMenuLine
                  : styles.mobileMenuClosedLastLine
              }
            ></div>
          </div>
          <ul
            ref={menuRef}
            className={isMenuClosed ? styles.menuIsClosed : styles.navMenu}
          >
            <h2>
              <Link to="/" className={styles.navMenuLogo}>
                PhotoByCarl &trade;
              </Link>
            </h2>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
              <ul className={styles.galleryMenuList}>
                <li>
                  <li>
                    <Link
                      to="/gallery/cars"
                      className={styles.galleryMenuListItem}
                    >
                      Cars
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/gallery/people"
                      className={styles.galleryMenuListItem}
                    >
                      People
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/gallery/outdoors"
                      className={styles.galleryMenuListItem}
                    >
                      Outdoors
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/gallery/random"
                      className={styles.galleryMenuListItem}
                    >
                      Random
                    </Link>
                  </li>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
