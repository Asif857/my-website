// --- css imports ---
import "./css/Hometab.css";
// --- end css imports ---
export default function Hometab() {
  return (
    <section id="hometab">
      <h2>Welcome to My Personal Website!</h2>
      <div className="hometab-content">
        <ul>
          <li>
            <p>
              Hi, I'm Assiph Rolant, a Computer Science student with a passion
              for technology and innovation.
            </p>
          </li>
          <li>
            <p>
              I have experience in Data Mining and QA Analysis, having worked on
              international projects at Revuze, where I contributed to the
              improvement of data quality and received recognition for my
              achievements.
            </p>
          </li>
          <li>
            <p>
              Explore the tabs to learn more about my work experience, skills,
              and projects. Feel free to reach out!
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
