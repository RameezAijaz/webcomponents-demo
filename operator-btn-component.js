// Create a class for the element
class OperatorBtnComponent extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
        const shadow = this.attachShadow({mode: 'open'});

        const style = document.createElement('style');
        style.innerHTML = `
         div {
            display: inline-block;
            border: 1px solid #bbb;
            border-radius: 1px;
            width: 80px;
            text-align: center;
            padding: 10px;
            margin: 20px 4px 10px 0;
            cursor: pointer;
            background-color: #ddd;
            transition: border-color .2s ease-in-out, background-color .2s, box-shadow .2s;
        }

        div:hover {
            background-color: #ddd;
            -webkit-box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.2);
            box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.2);
            border-color: #aaa;
        }

        div:active {
            font-weight: bold;
        }`;
        shadow.appendChild(style);


        const operatorDiv = document.createElement('div');
        const slot = document.createElement('slot');
        operatorDiv.appendChild(slot);
        shadow.appendChild(operatorDiv);

    }
    connectedCallback() {
        this.addEventListener("click", this.onclick);
    }
    disconnectedCallback() {
        this.removeEventListener("click", this.onclick);
    }

    onclick() {
        const calcDisplay = document.getElementById('calc-display');
        const existingDisplay = document.getElementById('calc-display').getAttribute("value");
        calcDisplay.setAttribute("value", `${existingDisplay}${this.innerText}`);

    }
}

// Define the new element
customElements.define('operator-btn-component', OperatorBtnComponent);
