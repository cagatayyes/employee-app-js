import {fixture, assert} from '@open-wc/testing';
import {html} from 'lit/static-html.js';
import {EmployeeList} from '../../src/components/employee-list/employee-list.js';

suite('employee-list', () => {
  let mockEmployees;
  let el;

  setup(() => {
    mockEmployees = [
      {
        id: 1,
        firstName: 'Ahmet',
        lastName: 'Yılmaz',
        employmentDate: '23/09/2022',
        birthDate: '23/09/1990',
        phone: '05995999999',
        email: 'ahmet.yilmaz@sourtimes.org',
        department: 'Analytics',
        position: 'Junior',
      },
      {
        id: 2,
        firstName: 'Mehmet',
        lastName: 'Kaya',
        employmentDate: '01/03/2020',
        birthDate: '01/03/1985',
        phone: '05995999999',
        email: 'mehmet.kaya@sourtimes.org',
        department: 'Tech',
        position: 'Medior',
      },
      {
        id: 3,
        firstName: 'Ayşe',
        lastName: 'Demir',
        employmentDate: '10/01/2014',
        birthDate: '10/01/1988',
        phone: '05995999999',
        email: 'ayse.demir@sourtimes.org',
        department: 'Analytics',
        position: 'Medior',
      },
    ];
  });

  teardown(() => {
    mockEmployees = null;
    el = null;
  });

  test('is defined', () => {
    const el = document.createElement('employee-list');
    assert.instanceOf(el, EmployeeList);
  });

  test('renders empty state when no employees', async () => {
    el = await fixture(html`<employee-list></employee-list>`);
    await el.updateComplete;

    const emptyState = el.shadowRoot.querySelector('.empty-state');
    assert.exists(emptyState);
    assert.include(emptyState.textContent, 'No employees found');
  });

  test('renders loading state when loading', async () => {
    el = await fixture(html`<employee-list loading></employee-list>`);
    await el.updateComplete;

    const loadingContainer = el.shadowRoot.querySelector('.loading-container');
    assert.exists(loadingContainer);
    assert.include(loadingContainer.textContent, 'Loading employees...');
  });

  test('renders error state when error occurs', async () => {
    el = await fixture(
      html`<employee-list error="Failed to load employees"></employee-list>`
    );
    await el.updateComplete;

    const errorContainer = el.shadowRoot.querySelector('.error-container');
    assert.exists(errorContainer);
    assert.include(errorContainer.textContent, 'Failed to load employees');
  });

  test('renders employee table when employees exist', async () => {
    el = await fixture(
      html`<employee-list .employees=${mockEmployees}></employee-list>`
    );
    await el.updateComplete;

    const table = el.shadowRoot.querySelector('.employee-table');
    assert.exists(table);

    const rows = table.querySelectorAll('tbody tr');
    assert.equal(rows.length, 3);
  });

  test('displays correct employee data in table', async () => {
    el = await fixture(
      html`<employee-list .employees=${mockEmployees}></employee-list>`
    );
    await el.updateComplete;

    const firstRow = el.shadowRoot.querySelector('tbody tr');
    const cells = firstRow.querySelectorAll('td');

    assert.include(cells[1].textContent, 'Ahmet');
    assert.include(cells[2].textContent, 'Yılmaz');
    assert.include(cells[3].textContent, '23/09/2022');
    assert.include(cells[4].textContent, '23/09/1990');
    assert.include(cells[5].textContent, '05995999999');
    assert.include(cells[6].textContent, 'ahmet.yilmaz@sourtimes.org');
    assert.include(cells[7].textContent, 'Analytics');
    assert.include(cells[8].textContent, 'Junior');
  });

  test('handles employee selection', async () => {
    el = await fixture(
      html`<employee-list .employees=${mockEmployees}></employee-list>`
    );
    await el.updateComplete;

    const firstCheckbox = el.shadowRoot.querySelector(
      'tbody tr input[type="checkbox"]'
    );
    firstCheckbox.click();

    assert.isTrue(el.selectedEmployees.has(1));
    assert.equal(el.selectedEmployees.size, 1);
  });

  test('handles select all functionality', async () => {
    el = await fixture(
      html`<employee-list .employees=${mockEmployees}></employee-list>`
    );
    await el.updateComplete;

    const selectAllCheckbox = el.shadowRoot.querySelector(
      'thead input[type="checkbox"]'
    );

    selectAllCheckbox.click();
    assert.isTrue(el.selectAllChecked);
    assert.equal(el.selectedEmployees.size, 3);

    selectAllCheckbox.click();
    assert.isFalse(el.selectAllChecked);
    assert.equal(el.selectedEmployees.size, 0);
  });

  test('shows bulk actions when employees are selected', async () => {
    el = await fixture(
      html`<employee-list .employees=${mockEmployees}></employee-list>`
    );
    await el.updateComplete;

    let bulkButtons = el.shadowRoot.querySelector('.bulk-buttons');
    assert.notExists(bulkButtons);

    const firstCheckbox = el.shadowRoot.querySelector(
      'tbody tr input[type="checkbox"]'
    );
    firstCheckbox.click();
    await el.updateComplete;

    bulkButtons = el.shadowRoot.querySelector('.bulk-buttons');
    assert.exists(bulkButtons);
  });

  test('handles single employee edit', async () => {
    el = await fixture(
      html`<employee-list .employees=${mockEmployees}></employee-list>`
    );
    await el.updateComplete;

    const editLink = el.shadowRoot.querySelector('tbody tr a');
    assert.exists(editLink);
    assert.equal(editLink.getAttribute('href'), '/edit/1');
  });

  test('handles employee deletion confirmation', async () => {
    el = await fixture(
      html`<employee-list .employees=${mockEmployees}></employee-list>`
    );
    await el.updateComplete;

    const deleteButton = el.shadowRoot.querySelector('tbody tr span');
    deleteButton.click();

    assert.isTrue(el.showDeletePopup);
    assert.deepEqual(el.employeeToDelete, mockEmployees[0]);
  });

  test('handles multi-edit with single selection', async () => {
    el = await fixture(
      html`<employee-list .employees=${mockEmployees}></employee-list>`
    );
    await el.updateComplete;

    const firstCheckbox = el.shadowRoot.querySelector(
      'tbody tr input[type="checkbox"]'
    );
    firstCheckbox.click();
    await el.updateComplete;

    const editButton = el.shadowRoot.querySelector(
      '.bulk-buttons button-element[label="Edit"]'
    );
    editButton.click();

    assert.isFalse(el.showEditErrorPopup);
  });

  test('shows edit error when multiple employees selected for edit', async () => {
    el = await fixture(
      html`<employee-list .employees=${mockEmployees}></employee-list>`
    );
    await el.updateComplete;

    const checkboxes = el.shadowRoot.querySelectorAll(
      'tbody tr input[type="checkbox"]'
    );
    checkboxes[0].click();
    checkboxes[1].click();
    await el.updateComplete;

    const editButton = el.shadowRoot.querySelector(
      '.bulk-buttons button-element[label="Edit"]'
    );
    editButton.click();

    assert.isTrue(el.showEditErrorPopup);
  });

  test('handles multi-delete confirmation', async () => {
    el = await fixture(
      html`<employee-list .employees=${mockEmployees}></employee-list>`
    );
    await el.updateComplete;

    const checkboxes = el.shadowRoot.querySelectorAll(
      'tbody tr input[type="checkbox"]'
    );
    checkboxes[0].click();
    checkboxes[1].click();
    await el.updateComplete;

    const deleteButton = el.shadowRoot.querySelector(
      '.bulk-buttons button-element[label="Delete"]'
    );
    deleteButton.click();

    assert.isTrue(el.showMultiDeletePopup);
  });

  test('includes pagination component', async () => {
    el = await fixture(
      html`<employee-list .employees=${mockEmployees}></employee-list>`
    );
    await el.updateComplete;

    const pagination = el.shadowRoot.querySelector('pagination-element');
    assert.exists(pagination);
  });

  test('has correct static properties defined', () => {
    const el = document.createElement('employee-list');
    const properties = el.constructor.properties;

    assert.property(properties, 'employees');
    assert.property(properties, 'loading');
    assert.property(properties, 'error');
    assert.property(properties, 'currentPage');
    assert.property(properties, 'totalPages');
    assert.property(properties, 'totalItems');
    assert.property(properties, 'itemsPerPage');
    assert.property(properties, 'searchQuery');
    assert.property(properties, 'showDeletePopup');
    assert.property(properties, 'employeeToDelete');
    assert.property(properties, 'selectedEmployees');
    assert.property(properties, 'showMultiDeletePopup');
    assert.property(properties, 'showEditErrorPopup');
    assert.property(properties, 'selectAllChecked');
    assert.property(properties, 'isSearching');
    assert.property(properties, 'currentLocale');
  });

  test('properties have correct types', () => {
    const el = document.createElement('employee-list');
    const properties = el.constructor.properties;

    assert.equal(properties.employees.type, Array);
    assert.equal(properties.loading.type, Boolean);
    assert.equal(properties.error.type, String);
    assert.equal(properties.currentPage.type, Number);
    assert.equal(properties.totalPages.type, Number);
    assert.equal(properties.totalItems.type, Number);
    assert.equal(properties.itemsPerPage.type, Number);
    assert.equal(properties.searchQuery.type, String);
    assert.equal(properties.showDeletePopup.type, Boolean);
    assert.equal(properties.employeeToDelete.type, Object);
    assert.equal(properties.selectedEmployees.type, Object);
    assert.equal(properties.showMultiDeletePopup.type, Boolean);
    assert.equal(properties.showEditErrorPopup.type, Boolean);
    assert.equal(properties.selectAllChecked.type, Boolean);
    assert.equal(properties.isSearching.type, Boolean);
    assert.equal(properties.currentLocale.type, Boolean);
  });

  test('properties have correct default values', async () => {
    el = await fixture(html`<employee-list></employee-list>`);

    assert.deepEqual(el.employees, []);
    assert.isFalse(el.loading);
    assert.isNull(el.error);
    assert.equal(el.currentPage, 1);
    assert.equal(el.totalPages, 0);
    assert.equal(el.totalItems, 0);
    assert.equal(el.itemsPerPage, 10);
    assert.equal(el.searchQuery, '');
    assert.isFalse(el.showDeletePopup);
    assert.isNull(el.employeeToDelete);
    assert.instanceOf(el.selectedEmployees, Set);
    assert.equal(el.selectedEmployees.size, 0);
    assert.isFalse(el.showMultiDeletePopup);
    assert.isFalse(el.showEditErrorPopup);
    assert.isFalse(el.selectAllChecked);
    assert.isFalse(el.isSearching);
  });

  test('searchQuery setter and getter work correctly', async () => {
    el = await fixture(html`<employee-list></employee-list>`);

    el.searchQuery = 'new search term';
    assert.equal(el.searchQuery, 'new search term');

    el.searchQuery = undefined;
    assert.equal(el.searchQuery, '');

    el.searchQuery = null;
    assert.equal(el.searchQuery, '');
  });

  test('handleEmployeeSelect adds and removes employees correctly', async () => {
    el = await fixture(html`<employee-list></employee-list>`);

    el.handleEmployeeSelect(1);
    assert.isTrue(el.selectedEmployees.has(1));
    assert.equal(el.selectedEmployees.size, 1);

    el.handleEmployeeSelect(1);
    assert.isFalse(el.selectedEmployees.has(1));
    assert.equal(el.selectedEmployees.size, 0);
  });

  test('handleSelectAll updates selectAllChecked correctly', async () => {
    el = await fixture(html`<employee-list></employee-list>`);

    assert.isFalse(el.selectAllChecked);

    el.handleSelectAll();
    assert.isTrue(el.selectAllChecked);

    el.handleSelectAll();
    assert.isFalse(el.selectAllChecked);
  });

  test('handleSelectAll updates selectedEmployees correctly', async () => {
    el = await fixture(html`<employee-list></employee-list>`);
    el.employees = mockEmployees;

    el.handleSelectAll();
    assert.equal(el.selectedEmployees.size, 3);
    assert.isTrue(el.selectedEmployees.has(1));
    assert.isTrue(el.selectedEmployees.has(2));
    assert.isTrue(el.selectedEmployees.has(3));

    el.handleSelectAll();
    assert.equal(el.selectedEmployees.size, 0);
  });

  test('handleMultiEdit shows error for multiple selection', async () => {
    el = await fixture(html`<employee-list></employee-list>`);
    el.employees = mockEmployees;

    el.selectedEmployees.add(1);
    el.selectedEmployees.add(2);

    el.handleMultiEdit();
    assert.isTrue(el.showEditErrorPopup);
  });

  test('handleMultiEdit allows single selection', async () => {
    el = await fixture(html`<employee-list></employee-list>`);
    el.employees = mockEmployees;

    el.selectedEmployees.add(1);

    el.handleMultiEdit();
    assert.isFalse(el.showEditErrorPopup);
  });

  test('handleMultiDelete shows popup when employees selected', async () => {
    el = await fixture(html`<employee-list></employee-list>`);

    el.selectedEmployees.add(1);
    el.selectedEmployees.add(2);

    el.handleMultiDelete();
    assert.isTrue(el.showMultiDeletePopup);
  });

  test('handleMultiDelete does not show popup when no employees selected', async () => {
    el = await fixture(html`<employee-list></employee-list>`);

    el.handleMultiDelete();
    assert.isFalse(el.showMultiDeletePopup);
  });

  test('popup elements are rendered with correct properties', async () => {
    el = await fixture(
      html`<employee-list .employees=${mockEmployees}></employee-list>`
    );
    await el.updateComplete;

    const popups = el.shadowRoot.querySelectorAll('popup-element');
    assert.equal(popups.length, 3);
  });

  test('table headers are correctly displayed', async () => {
    el = await fixture(
      html`<employee-list .employees=${mockEmployees}></employee-list>`
    );
    await el.updateComplete;

    const headers = el.shadowRoot.querySelectorAll('thead th');
    assert.equal(headers.length, 10);

    const expectedHeaders = [
      '',
      'First Name',
      'Last Name',
      'Date of Employment',
      'Date of Birth',
      'Phone',
      'Email',
      'Department',
      'Position',
      'Actions',
    ];

    headers.forEach((header, index) => {
      if (index > 0) {
        assert.include(header.textContent, expectedHeaders[index]);
      }
    });
  });

  test('employee selection updates selectAllChecked state', async () => {
    el = await fixture(
      html`<employee-list .employees=${mockEmployees}></employee-list>`
    );
    await el.updateComplete;

    assert.isFalse(el.selectAllChecked);

    const checkboxes = el.shadowRoot.querySelectorAll(
      'tbody tr input[type="checkbox"]'
    );
    checkboxes.forEach((checkbox) => checkbox.click());

    assert.isTrue(el.selectAllChecked);
  });

  test('partial selection does not check selectAll', async () => {
    el = await fixture(
      html`<employee-list .employees=${mockEmployees}></employee-list>`
    );
    await el.updateComplete;

    const firstCheckbox = el.shadowRoot.querySelector(
      'tbody tr input[type="checkbox"]'
    );
    firstCheckbox.click();

    assert.isFalse(el.selectAllChecked);
  });
});
