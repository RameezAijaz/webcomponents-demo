// Create a class for the element
class EqualBtnComponent extends HTMLDivElement {
    constructor() {
        // Always call super first in constructor
        super();
        const shadow = this.attachShadow({mode: 'open'});

        const style = document.createElement('style');
        style.innerHTML = `
        :host(div) {
            display: inline-block;
            border: 1px solid #3079ED;
            border-radius: 1px;
            width: 17%;
            text-align: center;
            padding: 127px 10px;
            margin: 10px 6px 10px 0;
            vertical-align: top;
            cursor: pointer;
            color: #FFF;
            background-color: #4d90fe;
            transition: all .2s ease-in-out;
        }

        :host(div):hover {
            background-color: #307CF9;
            -webkit-box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.2);
            box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.2);
            border-color: #1857BB;
        }

        :host(div):active {
            font-weight: bold;
        }`;
        shadow.appendChild(style);

        shadow.append("=");

    }
    connectedCallback() {
        this.addEventListener("click", this.onclick);
    }
    disconnectedCallback() {
        this.removeEventListener("click", this.onclick);
    }

    onclick() {
        const calcDisplay = document.getElementById('calc-display');
        const currentValue = calcDisplay.getAttribute("value");
        if(!currentValue)
            return;

        try{
            // Avoid using eval in a real project, its extremely dangerous. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#never_use_eval!
            const evaluated = eval(currentValue.replace('×','*').replace('÷','/'));
            calcDisplay.setAttribute("value", evaluated);
        }
        catch (e) {
            //do nothing
            console.log(e);
        }

    }
}

// Define the new element
customElements.define('equal-btn-component', EqualBtnComponent, {extends: 'div'});
