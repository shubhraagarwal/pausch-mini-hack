import styled from 'styled-components';

const Styles = styled.div`
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .nav {
    position: fixed;
    background-color: #222;
    top: 0;
    left: 0;
    right: 0;
    transition: all 0.3s ease-in-out;
  }

  .nav .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    transition: all 0.3s ease-in-out;
  }

  .nav ul {
    display: flex;
    list-style-type: none;
    align-items: center;
    justify-content: center;
  }

  .nav a {
    color: #fff;
    text-decoration: none;
    padding: 7px 15px;
    transition: all 0.3s ease-in-out;
  }

  .nav.active {
    background-color: #fff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  }

  .nav.active a {
    color: #000;
  }

  .nav.active .container {
    padding: 10px 0;
  }

  .nav a.current,
  .nav a:hover {
    color: #c0392b;
    font-weight: bold;
  }

`;

const nav = document.querySelector(".nav");
window.addEventListener("scroll", fixNav);

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
}


function Nav() {
  return (
    <Styles>
      <nav class="nav">
        <div class="container">
          <h1 class="logo">
            <a href="/index.html">My Website</a>
          </h1>
          <ul>
            <li>
              <a href="#" class="current">
                Home
              </a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      
    </Styles>
  );
}

export default Nav;
