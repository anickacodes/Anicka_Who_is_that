import {useState} from "react";
import "../styles/Home.css";
import ghLogo from "../data/github-mark.png";
import bookImage from "../data/book-cover.png";

const Home = () => {
  const [showHome, setShowHome] = useState(false);

  const items = [
    {
      id: "gh",
      href: "https://github.com/anickacodes",
      text: "Anicka Codes",
      hoverText: "Visit My GitHub!",
      icon: ghLogo,
    },
    {
      id: "ig",
      href: "https://www.instagram.com/clnstylez_/",
      text: "Nicki Styles",
      hoverText: "Follow Me on Instagram!",
      icon: "src/data/cnl.jpeg",
    },
    {
      id: "lt",
      href: "https://linktr.ee/Nickistylez",
      text: "Bellisima",
      hoverText: "Check Out My Linktree!",
    },
  ];

  const handleMouseEnter = (e, hoverText) => {
    e.target.textContent = hoverText;
  };

  const handleMouseLeave = (e, originalText) => {
    e.target.textContent = originalText;
  };

  if (!showHome) {
    // Render "book" view
    return (
      <div className="book_container" onClick={() => setShowHome(true)}>
        <img src={bookImage} alt="Book Cover" className="book_image" />
        <h3>Ready to judge?</h3>
      </div>
    );
  }

  // Render "Home" view
  return (
    <div className="home_container">
      <ul>
        {items.map((item) => (
          <a id={item.id} href={item.href} key={item.id}>
            <li
              onMouseEnter={(e) => handleMouseEnter(e, item.hoverText)}
              onMouseLeave={(e) => handleMouseLeave(e, item.text)}
            >
              {item.text} {item.icon && <img src={item.icon} alt="icon" />}
            </li>
          </a>
        ))}
      </ul>
      <sub>
        <i>Enrich Me, Empower Me, Educate Me ©️</i>
      </sub>
    </div>
  );
};

export default Home;
