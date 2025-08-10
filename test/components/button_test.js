import {fixture, assert} from '@open-wc/testing';
import {html} from 'lit/static-html.js';
import {ButtonElement} from '../../src/components/button/button.js';

suite('button', () => {
  let buttonTemplate;
  let el;

  setup(() => {
    buttonTemplate = html`<button-element>Click me</button-element>`;
  });

  teardown(() => {
    buttonTemplate = null;
    el = null;
  });

  test('is defined', () => {
    const el = document.createElement('button-element');
    assert.instanceOf(el, ButtonElement);
  });

  test('renders with default values', async () => {
    el = await fixture(buttonTemplate);
    await el.updateComplete;

    const button = el.shadowRoot.querySelector('button');
    assert.exists(button);
    assert.isFalse(button.disabled);
    assert.isTrue(button.classList.contains('primary'));
  });

  test('dispatches custom click event', async () => {
    el = await fixture(buttonTemplate);
    await el.updateComplete;

    let eventFired = false;
    el.addEventListener('click', () => {
      eventFired = true;
    });

    const button = el.shadowRoot.querySelector('button');
    button.click();

    assert.isTrue(eventFired);
  });
});
