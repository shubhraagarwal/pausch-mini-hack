import styled from "styled-components";

const Styles = styled.div`
  button {
    background-color: purple;
    color: #fff;
    border: 1px purple solid;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 2px;
    padding: 20px 30px;
    overflow: hidden;
    margin: 10px 0;
    position: relative;
  }

  button:focus {
    outline: none;
  }

  button .circle {
    position: absolute;
    background-color: #fff;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    animation: scale 0.5s ease-out;
  }

  @keyframes scale {
    to {
      transform: translate(-50%, -50%) scale(3);
      opacity: 0;
    }
  }
`;

const buttons = document.querySelectorAll(".ripple");

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    const x = e.clientX;
    const y = e.clientY;

    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;

    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    const circle = document.createElement("span");
    circle.classList.add("circle");
    circle.style.top = yInside + "px";
    circle.style.left = xInside + "px";

    this.appendChild(circle);

    setTimeout(() => circle.remove(), 500);
  });
});

function Button() {
  return (
    <Styles>
      <button class="ripple">Click Me</button>
    </Styles>
  );
}

export default Button;
