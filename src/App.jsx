import Navbar from "./components/Navbar";
import { useState } from "react";
import Hometab from "./components/HomeTab.jsx";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  const [selectedPage, setSelectedPage] = useState(<Hometab />);
  const pageContent = selectedPage;

  function handleOnClick(page) {
    console.log(page.tab);
    switch (page.tab) {
      case "Hometab":
        return setSelectedPage(<Hometab />);
      case "Projects":
        return setSelectedPage(<Projects />);
      case "About":
        return setSelectedPage(<About />);
      case "Contact":
        return setSelectedPage(<Contact />);
    }
  }
  return (
    <>
      <Navbar
        tabs={["Hometab", "Projects", "About", "Contact"]}
        onClick={handleOnClick}
      />
      <main>{pageContent}</main>
    </>
  );
}
export default App;
