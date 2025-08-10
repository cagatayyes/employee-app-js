import {assert} from '@open-wc/testing';
import {localStorageUtils} from '../../src/store/localStorage.js';

suite('local-storage', () => {
  const testKey = 'employee-app-state';
  const testData = {
    employees: [
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
    ],
  };

  setup(() => {
    localStorage.clear();
  });

  teardown(() => {
    localStorage.clear();
  });

  suite('loadState', () => {
    test('loads state from localStorage', () => {
      localStorage.setItem(testKey, JSON.stringify(testData));
      const loadedData = localStorageUtils.loadState();
      assert.deepEqual(loadedData, testData);
    });

    test('returns undefined when no state exists', () => {
      const loadedData = localStorageUtils.loadState();
      assert.isUndefined(loadedData);
    });

    test('handles invalid JSON data', () => {
      localStorage.setItem(testKey, 'invalid-json');
      const loadedData = localStorageUtils.loadState();
      assert.isUndefined(loadedData);
    });
  });

  suite('clearState', () => {
    test('clears state from localStorage', () => {
      localStorage.setItem(testKey, JSON.stringify(testData));
      localStorageUtils.clearState();

      const savedData = localStorage.getItem(testKey);
      assert.isNull(savedData);
    });

    test('does nothing when no state exists', () => {
      localStorageUtils.clearState();
      assert.isTrue(true);
    });
  });

  suite('hasState', () => {
    test('returns true when state exists', () => {
      localStorage.setItem(testKey, JSON.stringify(testData));
      assert.isTrue(localStorageUtils.hasState());
    });

    test('returns false when no state exists', () => {
      assert.isFalse(localStorageUtils.hasState());
    });
  });

  suite('error handling', () => {
    test('handles localStorage errors gracefully', () => {
      const originalSetItem = localStorage.setItem;
      localStorage.setItem = () => {
        throw new Error('Storage quota exceeded');
      };

      assert.doesNotThrow(() => {
        localStorageUtils.saveState(testData);
      });

      localStorage.setItem = originalSetItem;
    });
  });
});
