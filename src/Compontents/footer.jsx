export default function Footer() {
  return (
    <div className="footer-container flex-col">
      <h3>Catch on Social Media</h3>
      <div className="Socials-container flex-row">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />

        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twitter/twitter-original.svg"
          alt="Twitter"
        />

        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg" />
      </div>
      <div className="credits-container flex-col">
        <h3>Made by</h3>
        <span>Sultan Bandar</span>
        <h3>Credits</h3>
        <p>All Assets belong to Vans; This is just a passion project</p>
        <span>This site is inspired by Vans.com & Asos.com</span>
      </div>
    </div>
  );
}
