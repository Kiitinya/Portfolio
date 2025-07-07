import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./NavBar.module.css";




import { useRef } from "react";


const NavBar: React.FC = () => {
    const location = useLocation();

    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const [isClosing, setIsClosing] = useState<boolean>(false);
    const [isCatalogOpen, setIsCatalogOpen] = useState<boolean>(false);
    const navRef = useRef<HTMLUListElement>(null);
    const [highlightTop, setHighlightTop] = useState<number | null>(null);
    const catalogRef = useRef<HTMLButtonElement>(null);


    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    useEffect(() => {
        const onResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);


    const handleToggle = () => {
        if (isExpanded) {
            // 🚀 Siempre cierra el catálogo primero
            setIsCatalogOpen(false);

            // Inicia animación de cierre
            setIsClosing(true);
            setTimeout(() => {
                setIsExpanded(false);
                setIsClosing(false);
            }, 0);
        } else {
            setIsExpanded(true);
        }
    };

    // Cierra el menú al cambiar de ruta
    useEffect(() => {
        if (isExpanded) {
            setIsExpanded(true);
            setIsClosing(true);
            setTimeout(() => {
                setIsExpanded(false);
                setIsClosing(false);
            }, 0);
        }
    }, [location.pathname]);

    // Cierra el catálogo si el menú principal se colapsa
    useEffect(() => {
        if (!isExpanded) {
            setIsCatalogOpen(false);
        }
    }, [isExpanded]);

    useEffect(() => {
        if (!isExpanded && navRef.current) {
            const activeElement = navRef.current.querySelector(`.${styles.active}`);

            if (activeElement) {
                const parentLi = activeElement.closest('li');
                if (parentLi) {
                    setHighlightTop((parentLi as HTMLElement).offsetTop);
                } else {
                    setHighlightTop((activeElement as HTMLElement).offsetTop);
                }
            }
        }
    }, [location.pathname, isExpanded]);

    const renderNavItem = (
        to: string,
        isActive: boolean,
        iconClass: string,
        label: string
    ) => (
        <li>
            <Link to={to} className={isActive ? styles.active : ""}>
                <div className={styles.iconWrapper}>
                    <div className={`${styles.icon} ${iconClass}`} />
                </div>

                {isExpanded && <span>{label}</span>}
            </Link>
        </li>
    );

    return (
        <>
            {(isExpanded || isClosing) && (
                <div className={styles.overlay} onClick={handleToggle} />
            )}
            {isMobile && !isExpanded && !isClosing && (
                <button
                    className={styles.mobileHamburger}
                    onClick={handleToggle}
                >
                    {/* <img src={hamburgerIcon} alt="Menú" /> */}
                </button>
            )}

            <nav className={`${styles.navbar} ${isExpanded ? styles.expanded : isClosing ? styles.closing : styles.collapsed}`}>
                <div className={styles.navBarHeader}>


                    {isExpanded && (
                        <button className={styles.closeBtn} onClick={handleToggle}>
                            {/* <img src={left} alt="Collapse menu" className={styles.arrowIcon} /> */}
                        </button>
                    )}
                </div>

                {/* 🎯 Highlight redondo blanco */}
                {!isExpanded && highlightTop !== null && (
                    <div className={styles.highlight} style={{ top: `${highlightTop}px` }} />
                )}

                <ul ref={navRef}>

                    {!isExpanded && (
                        <button
                            className={styles.collapseToggleButton}
                            onClick={handleToggle}
                        >
                            {/* <img src={right} alt="Expand menu" className={styles.arrowIcon} /> */}
                        </button>
                    )}

                    <div style={{ marginTop: "10%" }}></div>

                    {renderNavItem(
                        "/home",
                        location.pathname === "/home",
                        styles.iconSearch,
                        "Home"
                    )}

                    {
                        renderNavItem(
                            "/projects",
                            location.pathname === "/projects",
                            styles.iconListings,
                            "Projects"
                        )}

                    {
                        renderNavItem(
                            "/workingCareer",
                            location.pathname === "/workingCareer",
                            styles.iconMarketAbsorption,
                            "Working Career"
                        )}

                    {renderNavItem(
                        "/certificates",
                        location.pathname === "/certificates",
                        styles.iconAI,
                        "Certificates"
                    )}
                </ul>
            </nav>
        </>
    );
};

export default NavBar;
