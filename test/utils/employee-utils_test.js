import {assert} from '@open-wc/testing';
import {EmployeeUtils} from '../../src/utils/employeeUtils.js';

suite('employee-utils', () => {
  let mockEmployees;

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
      {
        id: 4,
        firstName: 'Fatma',
        lastName: 'Özkan',
        employmentDate: '15/06/2019',
        birthDate: '15/06/1992',
        phone: '05995999999',
        email: 'fatma.ozkan@sourtimes.org',
        department: 'Tech',
        position: 'Junior',
      },
    ];
  });

  teardown(() => {
    mockEmployees = null;
  });

  suite('EmployeeUtils class', () => {
    test('is defined', () => {
      assert.isDefined(EmployeeUtils);
      assert.isFunction(EmployeeUtils.searchEmployees);
      assert.isFunction(EmployeeUtils.loadEmployees);
      assert.isFunction(EmployeeUtils.changePage);
      assert.isFunction(EmployeeUtils.deleteEmployee);
      assert.isFunction(EmployeeUtils.setupStoreSubscription);
      assert.isFunction(EmployeeUtils.getCurrentState);
    });

    test('searchEmployees method exists', () => {
      assert.isFunction(EmployeeUtils.searchEmployees);
    });

    test('loadEmployees method exists', () => {
      assert.isFunction(EmployeeUtils.loadEmployees);
    });

    test('changePage method exists', () => {
      assert.isFunction(EmployeeUtils.changePage);
    });

    test('deleteEmployee method exists', () => {
      assert.isFunction(EmployeeUtils.deleteEmployee);
    });

    test('setupStoreSubscription method exists', () => {
      assert.isFunction(EmployeeUtils.setupStoreSubscription);
    });

    test('getCurrentState method exists', () => {
      assert.isFunction(EmployeeUtils.getCurrentState);
    });
  });

  suite('Mock data validation', () => {
    test('mock employees have unique IDs', () => {
      const ids = mockEmployees.map((emp) => emp.id);
      const uniqueIds = new Set(ids);
      assert.equal(
        ids.length,
        uniqueIds.size,
        'All employee IDs should be unique'
      );
    });
  });
});
