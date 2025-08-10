import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {localStorageUtils} from './localStorage.js';

const initialState = {
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

export const fetchAllEmployees = createAsyncThunk(
  'employees/fetchAllEmployees',
  async (_, {getState, rejectWithValue}) => {
    try {
      const state = getState();

      // Comment out for fetching data from .json file again
      // eslint-disable-next-line no-undef
      if (state.employees.allEmployees.length > 0) {
        return {
          employees: state.employees.allEmployees,
          totalItems: state.employees.totalItems,
          totalPages: state.employees.totalPages,
        };
      }

      const response = await fetch('/assets/data/employees.json');
      if (!response.ok) {
        throw new Error('Failed to fetch employees');
      }

      const allEmployees = await response.json();

      return {
        employees: allEmployees,
        totalItems: allEmployees.length,
        totalPages: Math.ceil(allEmployees.length / 10),
      };
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : 'Unknown error'
      );
    }
  }
);

export const getEmployeeById = createAsyncThunk(
  'employees/getEmployeeById',
  async (id, {rejectWithValue}) => {
    try {
      const response = await fetch('/assets/data/employees.json');
      if (!response.ok) {
        throw new Error('Failed to fetch employees');
      }

      const allEmployees = await response.json();
      const employee = allEmployees.find((emp) => emp.id === id);

      if (!employee) {
        throw new Error('Employee not found');
      }

      return employee;
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : 'Unknown error'
      );
    }
  }
);

export const changePage = createAsyncThunk(
  'employees/changePage',
  async (page, {getState, rejectWithValue}) => {
    try {
      const state = getState();
      const {allEmployees, itemsPerPage, searchQuery, filteredEmployees} =
        state.employees;

      const employeesToPaginate =
        searchQuery.trim() && filteredEmployees.length > 0
          ? filteredEmployees
          : allEmployees;

      const startIndex = (page - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const currentEmployees = employeesToPaginate.slice(startIndex, endIndex);

      return {
        currentEmployees,
        currentPage: page,
        totalItems: employeesToPaginate.length,
        totalPages: Math.max(
          1,
          Math.ceil(employeesToPaginate.length / itemsPerPage)
        ),
      };
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : 'Unknown error'
      );
    }
  }
);

export const searchEmployees = createAsyncThunk(
  'employees/searchEmployees',
  async (searchQuery, {getState, rejectWithValue}) => {
    try {
      const state = getState();
      const {allEmployees, itemsPerPage} = state.employees;

      if (!searchQuery.trim()) {
        const startIndex = 0;
        const endIndex = itemsPerPage;
        const currentEmployees = allEmployees.slice(startIndex, endIndex);

        return {
          searchQuery: '',
          filteredEmployees: [],
          currentEmployees,
          currentPage: 1,
          totalItems: allEmployees.length,
          totalPages: Math.ceil(allEmployees.length / itemsPerPage),
          isSearching: false,
        };
      }

      const query = searchQuery.toLowerCase();
      const filteredEmployees = allEmployees.filter(
        (employee) =>
          employee.firstName.toLowerCase().includes(query) ||
          employee.lastName.toLowerCase().includes(query) ||
          employee.email.toLowerCase().includes(query) ||
          employee.department.toLowerCase().includes(query) ||
          employee.position.toLowerCase().includes(query)
      );

      const startIndex = 0;
      const endIndex = Math.min(itemsPerPage, filteredEmployees.length);
      const currentEmployees = filteredEmployees.slice(startIndex, endIndex);

      return {
        searchQuery,
        filteredEmployees,
        currentEmployees,
        currentPage: 1,
        totalItems: filteredEmployees.length,
        totalPages: Math.max(
          1,
          Math.ceil(filteredEmployees.length / itemsPerPage)
        ),
        isSearching: true,
      };
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : 'Unknown error'
      );
    }
  }
);

const employeeSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    clearEmployees: (state) => {
      state.allEmployees = [];
      state.currentEmployees = [];
      state.selectedEmployee = null;
      state.currentPage = 1;
      state.totalPages = 0;
      state.totalItems = 0;
      state.searchQuery = '';
      state.filteredEmployees = [];
      state.isSearching = false;
    },
    clearSelectedEmployee: (state) => {
      state.selectedEmployee = null;
    },
    addEmployee: (state, action) => {
      state.allEmployees.push(action.payload);

      if (state.isSearching) {
        const query = state.searchQuery.toLowerCase();
        state.filteredEmployees = state.allEmployees.filter(
          (employee) =>
            employee.firstName.toLowerCase().includes(query) ||
            employee.lastName.toLowerCase().includes(query) ||
            employee.email.toLowerCase().includes(query) ||
            employee.department.toLowerCase().includes(query) ||
            employee.position.toLowerCase().includes(query)
        );
        state.totalItems = state.filteredEmployees.length;
        state.totalPages = Math.ceil(state.totalItems / state.itemsPerPage);

        const startIndex = (state.currentPage - 1) * state.itemsPerPage;
        const endIndex = startIndex + state.itemsPerPage;
        state.currentEmployees = state.filteredEmployees.slice(
          startIndex,
          endIndex
        );
      } else {
        state.totalItems = state.allEmployees.length;
        state.totalPages = Math.ceil(state.totalItems / state.itemsPerPage);

        const startIndex = (state.currentPage - 1) * state.itemsPerPage;
        const endIndex = startIndex + state.itemsPerPage;
        state.currentEmployees = state.allEmployees.slice(startIndex, endIndex);
      }

      if (typeof window !== 'undefined') {
        const currentState = {
          employees: state,
        };
        localStorageUtils.saveState(currentState);
      }
    },
    updateEmployee: (state, action) => {
      const index = state.allEmployees.findIndex(
        (emp) => emp.id === action.payload.id
      );
      if (index !== -1) {
        state.allEmployees[index] = action.payload;

        if (state.isSearching) {
          const query = state.searchQuery.toLowerCase();
          state.filteredEmployees = state.allEmployees.filter(
            (employee) =>
              employee.firstName.toLowerCase().includes(query) ||
              employee.lastName.toLowerCase().includes(query) ||
              employee.email.toLowerCase().includes(query) ||
              employee.department.toLowerCase().includes(query) ||
              employee.position.toLowerCase().includes(query)
          );

          const startIndex = (state.currentPage - 1) * state.itemsPerPage;
          const endIndex = startIndex + state.itemsPerPage;
          state.currentEmployees = state.filteredEmployees.slice(
            startIndex,
            endIndex
          );
        } else {
          const startIndex = (state.currentPage - 1) * state.itemsPerPage;
          const endIndex = startIndex + state.itemsPerPage;
          state.currentEmployees = state.allEmployees.slice(
            startIndex,
            endIndex
          );
        }
      }
    },
    deleteEmployee: (state, action) => {
      state.allEmployees = state.allEmployees.filter(
        (emp) => emp.id !== action.payload
      );

      if (state.isSearching) {
        const query = state.searchQuery.toLowerCase();
        state.filteredEmployees = state.allEmployees.filter(
          (employee) =>
            employee.firstName.toLowerCase().includes(query) ||
            employee.lastName.toLowerCase().includes(query) ||
            employee.email.toLowerCase().includes(query) ||
            employee.department.toLowerCase().includes(query) ||
            employee.position.toLowerCase().includes(query)
        );
        state.totalItems = state.filteredEmployees.length;
        state.totalPages = Math.ceil(state.totalItems / state.itemsPerPage);

        if (state.currentPage > state.totalPages && state.totalPages > 0) {
          state.currentPage = state.totalPages;
        }

        const startIndex = (state.currentPage - 1) * state.itemsPerPage;
        const endIndex = startIndex + state.itemsPerPage;
        state.currentEmployees = state.filteredEmployees.slice(
          startIndex,
          endIndex
        );
      } else {
        state.totalItems = state.allEmployees.length;
        state.totalPages = Math.ceil(state.totalItems / state.itemsPerPage);

        if (state.currentPage > state.totalPages && state.totalPages > 0) {
          state.currentPage = state.totalPages;
        }

        const startIndex = (state.currentPage - 1) * state.itemsPerPage;
        const endIndex = startIndex + state.itemsPerPage;
        state.currentEmployees = state.allEmployees.slice(startIndex, endIndex);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllEmployees.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllEmployees.fulfilled, (state, action) => {
        state.loading = false;
        state.allEmployees = action.payload.employees;
        state.totalItems = action.payload.totalItems;
        state.totalPages = action.payload.totalPages;

        state.currentPage = 1;
        const startIndex = 0;
        const endIndex = state.itemsPerPage;
        state.currentEmployees = action.payload.employees.slice(
          startIndex,
          endIndex
        );
      })
      .addCase(fetchAllEmployees.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getEmployeeById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getEmployeeById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedEmployee = action.payload;
      })
      .addCase(getEmployeeById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(changePage.fulfilled, (state, action) => {
        state.currentEmployees = action.payload.currentEmployees;
        state.currentPage = action.payload.currentPage;
        state.totalItems = action.payload.totalItems;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(searchEmployees.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchEmployees.fulfilled, (state, action) => {
        state.loading = false;
        state.searchQuery = action.payload.searchQuery;
        state.filteredEmployees = action.payload.filteredEmployees;
        state.currentEmployees = action.payload.currentEmployees;
        state.currentPage = action.payload.currentPage;
        state.totalItems = action.payload.totalItems;
        state.totalPages = action.payload.totalPages;
        state.isSearching = action.payload.isSearching;
      })
      .addCase(searchEmployees.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {
  clearEmployees,
  clearSelectedEmployee,
  addEmployee,
  updateEmployee,
  deleteEmployee,
} = employeeSlice.actions;
export default employeeSlice.reducer;
