import styles from "./header.module.css";
import { useNavigate } from "react-router-dom";
import { MouseEvent } from "react";
import { ROOT_PATH } from "../../../utils/urls.ts";

interface HeaderProps {
  headerTitle: string;
  backButton?: boolean;
}

export const Header = ({ backButton = false, headerTitle }: HeaderProps) => {
  const navigate = useNavigate();
  const handleNavigation = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    return navigate(ROOT_PATH);
  };
  return (
    <div className={styles.headerContainer}>
      <header className={styles.header}>
        {backButton && (
          <nav className={styles.nav}>
            <a
              href="#"
              aria-label={"Click to go back to the Dashboard page"}
              className={styles.backButton}
              onClick={handleNavigation}
            >
              {"<"} Back
            </a>
          </nav>
        )}
        <h1>{headerTitle}</h1>
      </header>
    </div>
  );
};
