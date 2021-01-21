import Image from 'next/image'
import { useThemeContext }  from "context/newthemeContext"
import { useState } from 'react';

export const siteTitle = 'Next.js Sample Website'

export default function Layout() {

  const [isActive, setisActive] = useState(false);

  const { theme , toggleTheme } = useThemeContext();

  console.log(theme , "Layout Value")

return (
    <div className={theme.dark_mode ? 'dark-mode' : 'light-mode'}>
      <header >
      <nav className="navbar p-4" role="navigation" aria-label="main navigation" >
  <div className="navbar-brand">
    <a className="navbar-item" href="https://bulma.io">
    </a>
    <Image 
    src="/images/blogging.svg"
    alt="LOGO"
    width={50}
    height={10}
    />
    <a 
      onClick={() => { setisActive(!isActive); }} 
      role="button" className={`navbar-burger burger ${isActive ? "is-active" : ""}`}  aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className={`navbar-menu ${isActive ? "is-active" : ""}`}>
    <div className="navbar-start px-5">
      <a href={"/"} className="navbar-item">
      Home
      </a>
      <a href={`/gallery/SSR/postImages`} className="navbar-item">
      Gallery
      </a>
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <a className="button is-primary button-arrow ">
            <strong>Sign up</strong>
            <span className="icon is-small">
    <svg viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg" class="arrow-icon">
        <g class="arrow-head">
          <path d="M1 1C4.5 4 5 4.38484 5 4.5C5 4.61516 4.5 5 1 8" stroke="currentColor" stroke-width="2"/>
        </g>
        <g class="arrow-body">
          <path d="M3.5 4.5H0" stroke="currentColor" stroke-width="2"/>
        </g>
      </svg>    
    </span>
          </a>
          <a className="button is-light">
            Log in
          </a>
          <button className={"button " + (theme.dark_mode ? "is-light" : "is-dark")} onClick={() => toggleTheme()} >{ theme.dark_mode ? "Light" : "Dark"}</button>
        </div> 
      </div>
    </div>
  </div>
</nav>

          
      </header>
        
    </div>
)

}




