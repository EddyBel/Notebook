import { useEffect } from "react";
import { Button_Burguer } from "../common/buttons";
import { Github } from "../../components/common/svg";

export function NavBar() {
  useEffect(() => {
    watchAndHiddenNavBar();
  }, []);

  /**
   * Validates if the window scroll is up or down and if it is up it shows the navigation bar and if it is down it hides it.
   */
  const watchAndHiddenNavBar = () => {
    /** Element navigation bar */
    const navbar = document.getElementById("navbar-container");
    /** Catch the scroll event of the window. */
    let referencePosition = 0;

    // Catch the scroll event of the window.
    // Then get the current position.
    // Compares the current position with the variable designated as reference.
    // And if the current position is larger than the reference then it is going up, if not it is going down.
    // Do the corresponding operation for each step.
    // At the end it updates the reference value, with the value of the current scroll.
    window.addEventListener("scroll", () => {
      let actualPosition = document.body.getBoundingClientRect().top;

      if (actualPosition > referencePosition) navigationStyles(navbar, 0, 100);
      else navigationStyles(navbar, -120, 0);

      referencePosition = actualPosition;
    });
  };

  /**
   * Modify the navigation bar.
   * @param {Element} navbarElement Element of the dom that contains the navigation.
   */
  const navigationStyles = (navbarElement, translate = 0, opacity = 0) => {
    navbarElement.style.transform = `translateY(${translate}%)`;
    navbarElement.style.opacity = opacity;
  };

  return (
    <nav className="Navbar" id="navbar-container">
      <div className="container-button-obtions">
        <Button_Burguer />
        <h1 className="title-page">NoteBook</h1>
      </div>

      <a href="https://github.com/EddyBel" className="direction-github">
        <Github classN={"icon-github"} key="icon-github-key" />
        <h3 className="name-github">Github</h3>
      </a>
    </nav>
  );
}
