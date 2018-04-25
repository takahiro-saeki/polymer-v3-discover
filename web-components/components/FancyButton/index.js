import {html, render} from 'lit-html';

export default class FancyButton extends HTMLElement {
  static get observedAttributes() {
    return ['title']; 
  }
  
  constructor() {
    super();
    this.shadow = this.attachShadow({mode: 'open'})
  }
  
  attributeChangedCallback(attr, oldValue, newValue) {
    if (attr === 'title') {
      this.renderTemplate(newValue)
    }
  }
  
  renderTemplate(title = 'default') {
    const dom = html`
      <div>
        <div>sample</div>
        <button>${title}</button>
      </div>
    `
    render(dom, this.shadow)
  }
  
  connectedCallback() {
    this.renderTemplate()
    setTimeout(() => this.renderTemplate('changed'), 3000)
  }
}