// Create a class for the element
class NumpadBtnComponent extends HTMLDivElement {
    constructor() {
        // Always call super first in constructor
        super();
        const shadow = this.attachShadow({mode: 'open'});

        const style = document.createElement('style');
        style.innerHTML = `
        :host(div) {
            display: inline-block;
            border: 1px solid #ddd;
            border-radius: 1px;
            width: 80px;
            text-align: center;
            padding: 10px;
            margin: 10px 4px 10px 0;
            cursor: pointer;
            background-color: #f9f9f9;
            transition: border-color .2s ease-in-out, background-color .2s, box-shadow .2s;
        }
        
        :host(div):hover {
            background-color: #f1f1f1;
            -webkit-box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.2);
            box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.2);
            border-color: #bbb;
        }

        :host(div):active {
            font-weight: bold;
        }`;
        shadow.appendChild(style);

        const slot = document.createElement('slot');
        shadow.appendChild(slot);

    }
    connectedCallback() {
        this.addEventListener("click", this.onclick);
    }
    disconnectedCallback() {
        this.removeEventListener("click", this.onclick);
    }

    onclick() {
        const calcDisplay = document.getElementById('calc-display');
        if(this.innerText === 'C'){
            calcDisplay.setAttribute("value", "");
            return;
        }

        const existingDisplay = calcDisplay.getAttribute("value");
        calcDisplay.setAttribute("value", `${existingDisplay}${this.innerText}`);

    }
}

// Define the new element
customElements.define('numpad-btn-component', NumpadBtnComponent, {extends: 'div'});
