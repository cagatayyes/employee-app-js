import {assert} from '@open-wc/testing';
import employeeReducer, {
  addEmployee,
  updateEmployee,
  deleteEmployee,
  clearEmployees,
  clearSelectedEmployee,
} from '../../src/store/employeeSlice.js';

suite('employee-slice', () => {
  let initialState;
  let mockEmployee;
  let newEmployee;

  setup(() => {
    initialState = {
      allEmployees: [],
      currentEmployees: [],
      selectedEmployee: null,
      loading: false,
      error: null,
      currentPage: 1,
      totalPages: 0,
      itemsPerPage: 10,
      totalItems: 0,
      searchQuery: '',
      filteredEmployees: [],
      isSearching: false,
    };

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

    newEmployee = {
      id: 2,
      firstName: 'Ahmet',
      lastName: 'Yılmaz',
      email: 'ahmet.yilmaz@sourtimes.org',
      department: 'Analytics',
      position: 'Junior',
      phone: '05995999999',
      birthDate: '23/09/1990',
      employmentDate: '23/09/2022',
    };
  });

  teardown(() => {
    initialState = null;
    mockEmployee = null;
    newEmployee = null;
  });

  suite('initial state', () => {
    test('returns initial state', () => {
      const state = employeeReducer(undefined, {type: 'unknown'});
      console.log('state', state);
      console.log('initialState', initialState);
      assert.deepEqual(state, initialState);
    });
  });

  suite('addEmployee', () => {
    test('adds new employee to state', () => {
      const action = addEmployee(mockEmployee);
      const newState = employeeReducer(initialState, action);

      assert.equal(newState.allEmployees.length, 1);
      assert.deepEqual(newState.allEmployees[0], mockEmployee);
    });

    test('adds employee to existing list', () => {
      const existingState = {
        ...initialState,
        allEmployees: [mockEmployee],
      };

      const action = addEmployee(newEmployee);
      const newState = employeeReducer(existingState, action);

      assert.equal(newState.allEmployees.length, 2);
      assert.deepEqual(newState.allEmployees[1], newEmployee);
    });
  });

  suite('updateEmployee', () => {
    test('updates existing employee', () => {
      const existingState = {
        ...initialState,
        allEmployees: [mockEmployee],
      };

      const updatedEmployee = {
        ...mockEmployee,
        firstName: 'Ahmet',
        lastName: 'Yılmaz',
      };

      const action = updateEmployee(updatedEmployee);
      const newState = employeeReducer(existingState, action);

      assert.equal(newState.allEmployees.length, 1);
      assert.equal(newState.allEmployees[0].lastName, 'Yılmaz');
    });
  });

  suite('deleteEmployee', () => {
    test('removes employee from state', () => {
      const existingState = {
        ...initialState,
        allEmployees: [mockEmployee],
      };

      const action = deleteEmployee(1);
      const newState = employeeReducer(existingState, action);

      assert.equal(newState.allEmployees.length, 0);
    });
  });

  suite('clearEmployees', () => {
    test('clears all employees', () => {
      const existingState = {
        ...initialState,
        allEmployees: [mockEmployee],
        currentEmployees: [mockEmployee],
      };

      const action = clearEmployees();
      const newState = employeeReducer(existingState, action);

      assert.equal(newState.allEmployees.length, 0);
      assert.equal(newState.currentEmployees.length, 0);
    });
  });

  suite('clearSelectedEmployee', () => {
    test('clears selected employee', () => {
      const existingState = {
        ...initialState,
        selectedEmployee: mockEmployee,
      };

      const action = clearSelectedEmployee();
      const newState = employeeReducer(existingState, action);

      assert.isNull(newState.selectedEmployee);
    });
  });
});
