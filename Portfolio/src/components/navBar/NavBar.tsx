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
					<button className={styles.toggleBtn} onClick={handleToggle}>
						{/* <img src={isExpanded ? prodensa : navBar} alt="Toggle Menu" /> */}
					</button>

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

					{renderNavItem(
						"/search",
						location.pathname === "/search",
						styles.iconSearch,
						"Search"
					)}

					{
						renderNavItem(
							"/listings",
							location.pathname === "/listings",
							styles.iconListings,
							"Market availability"
						)}

					{
						renderNavItem(
							"/marketAbsorption",
							location.pathname === "/marketAbsorption",
							styles.iconMarketAbsorption,
							"Market absorption"
						)}

					{/* ========================= Catálogo (submenú) ========================== */}
					<li className={styles.dropdown}>
						<button
							ref={catalogRef}
							className={`${styles.dropi} ${isExpanded && (isCatalogOpen || location.pathname.startsWith("/catalog"))
								? `${styles.activeCatalog} ${styles.active}`
								: location.pathname.startsWith("/catalog")
									? styles.active
									: ""
								}`}

							onClick={() => {
								if (!isExpanded) setIsExpanded(true);
								setIsCatalogOpen(!isCatalogOpen);
							}}
						>
							<div className={styles.iconWrapper}>
								<div className={`${styles.icon} ${styles.iconCatalog}`} />
							</div>
							{isExpanded && <span>Catalog</span>}
							{isExpanded && (
								<span className={`${styles.arrow} ${isCatalogOpen ? styles.open : ""}`}>
									<div />
								</span>
							)}
						</button>



						{/* Submenú */}
						
					</li>

					{/* ========================= Fin Catálogo (submenú) ========================== */}
					{renderNavItem(
						"/ai",
						location.pathname === "/ai",
						styles.iconAI,
						"Artificial intelligence"
					)}
				</ul>
			</nav>
		</>
	);
};

export default NavBar;
