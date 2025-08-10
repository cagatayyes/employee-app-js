import {fixture, assert} from '@open-wc/testing';
import {html} from 'lit/static-html.js';
import {InputElement} from '../../src/components/input/input.js';

suite('input', () => {
  let defaultTemplate;
  let labelTemplate;
  let placeholderTemplate;
  let valueTemplate;
  let nameTemplate;
  let typeTemplate;
  let errorTemplate;
  let iconTemplate;
  let accessibilityTemplate;
  let el;

  setup(() => {
    defaultTemplate = html`<input-element></input-element>`;
    labelTemplate = html`<input-element label="Email Address"></input-element>`;
    placeholderTemplate = html`<input-element
      placeholder="Enter your email"
    ></input-element>`;
    valueTemplate = html`<input-element
      value="test@example.com"
    ></input-element>`;
    nameTemplate = html`<input-element name="email"></input-element>`;
    typeTemplate = html`<input-element type="email"></input-element>`;
    errorTemplate = html`<input-element error="Invalid email"></input-element>`;
    iconTemplate = html`<input-element label="Email" icon="✓"></input-element>`;
    accessibilityTemplate = html`<input-element
      name="email"
      label="Email input"
    ></input-element>`;
  });

  teardown(() => {
    defaultTemplate = null;
    labelTemplate = null;
    placeholderTemplate = null;
    valueTemplate = null;
    nameTemplate = null;
    typeTemplate = null;
    errorTemplate = null;
    iconTemplate = null;
    accessibilityTemplate = null;
    el = null;
  });

  test('is defined', () => {
    const el = document.createElement('input-element');
    assert.instanceOf(el, InputElement);
  });

  test('renders with default values', async () => {
    el = await fixture(defaultTemplate);
    await el.updateComplete;

    const input = el.shadowRoot.querySelector('input');
    assert.exists(input);
    assert.equal(input.type, 'text');
    assert.equal(input.placeholder, '');
    assert.equal(input.value, '');
    assert.equal(input.name, '');
  });

  test('renders with label', async () => {
    el = await fixture(labelTemplate);
    await el.updateComplete;

    const label = el.shadowRoot.querySelector('.label');
    assert.exists(label);
    assert.equal(label.textContent.trim(), 'Email Address');
  });

  test('renders with placeholder', async () => {
    el = await fixture(placeholderTemplate);
    await el.updateComplete;

    const input = el.shadowRoot.querySelector('input');
    assert.exists(input);
    assert.equal(input.placeholder, 'Enter your email');
  });

  test('renders with value', async () => {
    el = await fixture(valueTemplate);
    await el.updateComplete;

    const input = el.shadowRoot.querySelector('input');
    assert.exists(input);
    assert.equal(input.value, 'test@example.com');
  });

  test('renders with name', async () => {
    el = await fixture(nameTemplate);
    await el.updateComplete;

    const input = el.shadowRoot.querySelector('input');
    assert.exists(input);
    assert.equal(input.name, 'email');
  });

  test('renders with type', async () => {
    el = await fixture(typeTemplate);
    await el.updateComplete;

    const input = el.shadowRoot.querySelector('input');
    assert.exists(input);
    assert.equal(input.type, 'email');
  });

  test('dispatches change event', async () => {
    el = await fixture(defaultTemplate);
    await el.updateComplete;

    let eventFired = false;
    el.addEventListener('value-changed', () => {
      eventFired = true;
    });

    const input = el.shadowRoot.querySelector('input');
    input.value = 'new value';
    input.dispatchEvent(new Event('change'));

    assert.isTrue(eventFired);
  });

  test('shows error state', async () => {
    el = await fixture(errorTemplate);
    await el.updateComplete;

    const errorMessage = el.shadowRoot.querySelector('.error-message');
    assert.exists(errorMessage);
    assert.equal(errorMessage.textContent.trim(), 'Invalid email');
  });

  test('shows icon when provided', async () => {
    el = await fixture(iconTemplate);
    await el.updateComplete;

    const icon = el.shadowRoot.querySelector('.icon');
    assert.exists(icon);
    assert.equal(icon.textContent.trim(), '✓');
  });

  test('applies error class to input', async () => {
    el = await fixture(errorTemplate);
    await el.updateComplete;

    const input = el.shadowRoot.querySelector('input');
    assert.exists(input);
    assert.isTrue(input.classList.contains('error'));
  });

  test('maintains accessibility attributes', async () => {
    el = await fixture(accessibilityTemplate);
    await el.updateComplete;

    const input = el.shadowRoot.querySelector('input');
    const label = el.shadowRoot.querySelector('.label');
    assert.exists(input);
    assert.exists(label);
    assert.equal(label.textContent.trim(), 'Email input');
  });
});
