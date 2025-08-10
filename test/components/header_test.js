import {fixture, assert} from '@open-wc/testing';
import {html} from 'lit/static-html.js';
import {HeaderElement} from '../../src/components/header/header.js';

suite('header', () => {
  let defaultTemplate;
  let customLocaleTemplate;
  let el;

  setup(() => {
    defaultTemplate = html`<header-element></header-element>`;
    customLocaleTemplate = html`<header-element
      current-locale="tr"
    ></header-element>`;
  });

  teardown(() => {
    defaultTemplate = null;
    customLocaleTemplate = null;
    el = null;
  });

  test('is defined', () => {
    const el = document.createElement('header-element');
    assert.instanceOf(el, HeaderElement);
  });

  test('renders header with logo', async () => {
    el = await fixture(defaultTemplate);
    await el.updateComplete;

    const logoImage = el.shadowRoot.querySelector('.logo-image');
    const logoText = el.shadowRoot.querySelector('.logo-text');
    assert.exists(logoImage);
    assert.exists(logoText);
    assert.equal(logoText.textContent.trim(), 'ING');
  });

  test('renders navigation links', async () => {
    el = await fixture(defaultTemplate);
    await el.updateComplete;

    const links = el.shadowRoot.querySelectorAll('.link');
    assert.isTrue(links.length >= 2);
  });

  test('renders language toggle button', async () => {
    el = await fixture(defaultTemplate);
    await el.updateComplete;

    const languageButton = el.shadowRoot.querySelector('.localization');
    assert.exists(languageButton);
  });

  test('has proper header structure', async () => {
    el = await fixture(defaultTemplate);
    await el.updateComplete;

    const header = el.shadowRoot.querySelector('header');
    const leftSection = el.shadowRoot.querySelector('.left');
    const rightSection = el.shadowRoot.querySelector('.right');

    assert.exists(header);
    assert.exists(leftSection);
    assert.exists(rightSection);
  });

  test('logo has proper attributes', async () => {
    el = await fixture(defaultTemplate);
    await el.updateComplete;

    const logoImage = el.shadowRoot.querySelector('.logo-image');
    assert.exists(logoImage);
    assert.equal(logoImage.alt, 'LOGO');
  });

  test('language button has proper title', async () => {
    el = await fixture(defaultTemplate);
    await el.updateComplete;

    const languageButton = el.shadowRoot.querySelector('.localization');
    assert.exists(languageButton);
    assert.isTrue(languageButton.hasAttribute('title'));
  });

  test('renders with custom locale', async () => {
    el = await fixture(customLocaleTemplate);
    await el.updateComplete;

    const languageButton = el.shadowRoot.querySelector('.localization');
    assert.exists(languageButton);
  });

  test('maintains accessibility structure', async () => {
    el = await fixture(defaultTemplate);
    await el.updateComplete;

    const header = el.shadowRoot.querySelector('header');
    assert.exists(header);

    const hasLogo = el.shadowRoot.querySelector('.left');
    const hasNavigation = el.shadowRoot.querySelector('.right');

    assert.exists(hasLogo);
    assert.exists(hasNavigation);
  });
});
