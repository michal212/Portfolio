import "../../index.css";
export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <a href="https://www.facebook.com/michal.farada">
          <img className="footerIcon" src="./facebook.png"></img>
        </a>
        <a href="https://www.instagram.com/">
          <img class="footerIcon" src="./instagram.png"></img>
        </a>
        <img class="footerIcon" src="./linkedin.png"></img>
      </div>
      <div>
        <p>© 2021 Michal Farada. All rights reserved.</p>
      </div>
    </footer>
  );
}
