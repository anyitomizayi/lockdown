import { html } from 'htm/preact';
import css from 'csz';

const styles = css`
  & {
    padding-top: 20px;
  }

  label {
    user-select: none;
  }

  input {
    margin-right: 10px;
  }

  .ld-button {
    font-weight: 700;
    display: block;
    margin-left: 10%;
    margin-right: 10%;
    width: 80%;
    border: none;
    padding: 15px;
    overflow: visible;
    background: transparent;
    background-color: #769de2;
    color: var(--ld-text);
    font-size: 16px;
    border-radius: 5px;
    font-family: 'Montserrat', sans-serif;
    margin-bottom: 20px;
    padding-left: 25px;
    padding-right: 25px;
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.3);
  }

  .ld-button:hover,
  .ld-button:active {
    background-color: #89aff3;
  }
`;

export function Settings() {
  function toggleDarkmode() {
    if (document.body.classList.contains('dark')) {
      document.body.classList.remove('dark');
      localStorage.setItem('darkmode', 'false');
    } else {
      document.body.classList.add('dark');
      localStorage.setItem('darkmode', 'true');
    }
  }

  return html`
    <div class=${styles}>
      <button onClick=${toggleDarkmode} class="ld-button">Toggle darkmode</button>
      <button class="ld-button">Install pwa</button>
      <button class="ld-button">Update app</button>
      <button class="ld-button">Allow geolocation</button>
    </div>
  `;
}
