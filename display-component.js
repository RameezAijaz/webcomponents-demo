// Create a class for the element
class DisplayComponent extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
        const shadow = this.attachShadow({mode: 'open'});

        const style = document.createElement('style');
        style.innerHTML = `div {
            border: 1px solid #ddd;
            border-radius: 1px;
            height: 60px;
            padding-right: 15px;
            padding-top: 10px;
            text-align: right;
            margin-right: 6px;
            font-size: 2.5rem;
            overflow-x: auto;
            transition: all .2s ease-in-out;
        }

        div:hover {
            border: 1px solid #bbb;
            -webkit-box-shadow: inset 0px 1px 4px 0px rgba(0, 0, 0, 0.2);
            box-shadow: inset 0px 1px 4px 0px rgba(0, 0, 0, 0.2);
        }`;
        shadow.appendChild(style);
        const div = document.createElement('div');
        div.innerText=this.value;
        div.id="display";
        shadow.appendChild(div);
    }
    static get observedAttributes() {
        return ['value'];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
    }
    get value() {
        return this.getAttribute("value");
    }

    render() {
        this.shadowRoot.querySelector('#display').innerHTML=this.value;
    }
}

// Define the new element
customElements.define('display-component', DisplayComponent);
