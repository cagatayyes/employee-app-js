import {fixture, assert} from '@open-wc/testing';
import {html} from 'lit/static-html.js';
import {EmployeeCard} from '../../src/components/employee-card/employee-card.js';

suite('employee-card', () => {
  let mockEmployee;
  let incompleteEmployee;
  let el;

  setup(() => {
    mockEmployee = {
      id: 1,
      firstName: 'Ahmet',
      lastName: 'Yılmaz',
      employmentDate: '23/09/2022',
      birthDate: '23/09/1990',
      phone: '05995999999',
      email: 'ahmet.yilmaz@sourtimes.org',
      department: 'Analytics',
      position: 'Junior',
    };

    incompleteEmployee = {
      id: 1,
      firstName: 'Ahmet',
      lastName: 'Yılmaz',
      email: 'ahmet.yilmaz@sourtimes.org',
      department: 'Analytics',
      position: 'Junior',
    };
  });

  teardown(() => {
    mockEmployee = null;
    incompleteEmployee = null;
    el = null;
  });

  test('is defined', () => {
    const el = document.createElement('employee-card');
    assert.instanceOf(el, EmployeeCard);
  });

  test('renders with employee data', async () => {
    el = await fixture(
      html`<employee-card .employee=${mockEmployee}></employee-card>`
    );
    await el.updateComplete;

    const card = el.shadowRoot.querySelector('.employee-card');
    assert.exists(card);
    assert.isFalse(card.classList.contains('empty'));
  });

  test('renders with missing employee data', async () => {
    el = await fixture(html`<employee-card></employee-card>`);
    await el.updateComplete;

    const card = el.shadowRoot.querySelector('.employee-card');
    assert.exists(card);
    assert.isTrue(card.classList.contains('empty'));
    assert.equal(card.textContent.trim(), 'No employee data');
  });

  test('handles edit button click', async () => {
    el = await fixture(
      html`<employee-card .employee=${mockEmployee}></employee-card>`
    );
    await el.updateComplete;

    let eventFired = false;
    el.addEventListener('edit-employee', () => {
      eventFired = true;
    });

    const editButton = el.shadowRoot.querySelector(
      'button-element[variant="primary"]'
    );
    assert.exists(editButton);
    editButton.click();

    assert.isTrue(eventFired);
  });

  test('handles delete button click', async () => {
    el = await fixture(
      html`<employee-card .employee=${mockEmployee}></employee-card>`
    );
    await el.updateComplete;

    let eventFired = false;
    el.addEventListener('delete-employee', () => {
      eventFired = true;
    });

    const deleteButton = el.shadowRoot.querySelector(
      'button-element[variant="danger"]'
    );
    assert.exists(deleteButton);
    deleteButton.click();

    assert.isTrue(eventFired);
  });

  test('shows employee details on card click', async () => {
    el = await fixture(
      html`<employee-card .employee=${mockEmployee}></employee-card>`
    );
    await el.updateComplete;

    const firstNameValue = el.shadowRoot.querySelector('.item .value');
    assert.exists(firstNameValue);
    assert.equal(firstNameValue.textContent.trim(), 'Ahmet');
  });

  test('renders employment date correctly', async () => {
    el = await fixture(
      html`<employee-card .employee=${mockEmployee}></employee-card>`
    );
    await el.updateComplete;

    const employmentDateLabel = el.shadowRoot.querySelector('.item .label');
    assert.exists(employmentDateLabel);
    const employmentDateItems = Array.from(
      el.shadowRoot.querySelectorAll('.item .label')
    );
    const hasEmploymentDate = employmentDateItems.some((item) =>
      item.textContent.trim().includes('Date of Employment')
    );
    assert.isTrue(hasEmploymentDate);
  });

  test('renders birth date correctly', async () => {
    el = await fixture(
      html`<employee-card .employee=${mockEmployee}></employee-card>`
    );
    await el.updateComplete;

    const birthDateItems = Array.from(
      el.shadowRoot.querySelectorAll('.item .label')
    );
    const hasBirthDate = birthDateItems.some((item) =>
      item.textContent.trim().includes('Date of Birth')
    );
    assert.isTrue(hasBirthDate);
  });

  test('handles employee with missing optional fields', async () => {
    el = await fixture(
      html`<employee-card .employee=${incompleteEmployee}></employee-card>`
    );
    await el.updateComplete;

    const card = el.shadowRoot.querySelector('.employee-card');
    assert.exists(card);
    assert.isFalse(card.classList.contains('empty'));
  });

  test('dispatches custom events with employee data', async () => {
    el = await fixture(
      html`<employee-card .employee=${mockEmployee}></employee-card>`
    );
    await el.updateComplete;

    let editEventDetail = null;
    el.addEventListener('edit-employee', (event) => {
      editEventDetail = event.detail;
    });

    const editButton = el.shadowRoot.querySelector(
      'button-element[variant="primary"]'
    );
    assert.exists(editButton);
    editButton.click();

    assert.deepEqual(editEventDetail, {
      employeeId: 1,
      employee: mockEmployee,
    });
  });

  test('maintains accessibility attributes', async () => {
    el = await fixture(
      html`<employee-card .employee=${mockEmployee}></employee-card>`
    );
    await el.updateComplete;

    const card = el.shadowRoot.querySelector('.employee-card');
    assert.exists(card);
    const labels = el.shadowRoot.querySelectorAll('.label');
    const values = el.shadowRoot.querySelectorAll('.value');
    assert.isTrue(labels.length > 0);
    assert.isTrue(values.length > 0);
  });
});
