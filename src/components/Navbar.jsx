import Navtab from "./Navtab";

import "./css/Navbar.css";

export default function Navbar({ tabs, onClick }) {
  const pageContent = tabs.map((tab) => {
    return (
      <li key={tab}>
        <Navtab tab={tab} onClick={onClick} />
      </li>
    );
  });
  return (
    <nav id="nav-bar">
      <ul>{pageContent}</ul>
    </nav>
  );
}
