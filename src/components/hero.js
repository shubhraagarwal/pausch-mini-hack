import styled from "styled-components";

const Styles = styled.div`
  margin-top: 11.8vh;
  .container {
    display: flex;
    width: 90vw;
  }

  .panel {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 80vh;
    border-radius: 50px;
    color: #fff;
    cursor: pointer;
    flex: 0.5;
    margin: 10px;
    position: relative;
    -webkit-transition: all 700ms ease-in;
  }

  .panel h3 {
    font-size: 24px;
    position: absolute;
    bottom: 20px;
    left: 20px;
    margin: 0;
    opacity: 0;
  }

  .panel.active {
    flex: 5;
  }

  .panel.active h3 {
    opacity: 1;
    transition: opacity 0.3s ease-in 0.4s;
  }

  @media (max-width: 480px) {
    .container {
      width: 100vw;
    }

    .panel:nth-of-type(4),
    .panel:nth-of-type(5) {
      display: none;
    }
  }
  .world {
    background-image: url("https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80");
  }
  .forest {
    background-image: url("https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80");
  }
  .beach {
    background-image: url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80");
  }
  .winter {
    background-image: url("https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80");
  }
  .clouds {
    background-image: url("https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80");
  }
`;

const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

function Hero() {
  return (
    <Styles>
      <div className="container">
        <div className="panel active world">
          <h3>Explore The World</h3>
        </div>
        <div className="panel forest">
          <h3>Wild Forest</h3>
        </div>
        <div className="panel beach">
          <h3>Sunny Beac</h3>
        </div>
        <div className="panel winter">
          <h3>City on Winter</h3>
        </div>
        <div className="panel clouds">
          <h3>Mountains - Clouds</h3>
        </div>
      </div>
    </Styles>
  );
}

export default Hero;
