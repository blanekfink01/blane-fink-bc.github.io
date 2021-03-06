////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step) {
  const vals = [];
  if (step === undefined) {
    if (start < end) {
      for (let i = start; i <= end; i++) {
        vals.push(i);
      }
    } else {
      for (let i = end; i > start; i--) {
        vals.push(i);
      }
    }
  } else {
    if (step < 0 && start < end) { //infiinite
      return [];
    }
    if (start < end) {
      for (let i = start; i <= end; i += step) {
        vals.push(i);
      }
    } else {
      for (let i = end; i >= start; i += step) {
        vals.push(i);
      }
    }
  }

  return vals;
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(arr) {
  let sum = 0
  arr.forEach(val => sum += val);
  return sum;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(arr) {
  const reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(arr) {
  const reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    arr[i] = reversed[i];
  }
  return arr;
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(arr, rest) {
  if (arr.length === 0) {
    return rest;
  } else if (rest === undefined) {
    const list = {
      value: arr.pop(),
      rest: null
    };
    return arrayToList(arr, list);
  } else {
    const list = {
      value: arr.pop(),
      rest: rest
    };
    return arrayToList(arr, list);
  }
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list, arr = []) {
  arr.push(list.value);
  if (list.rest === null) {
    return arr;
  }
  return listToArray(list.rest, arr);
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(val, list) {
  return {value: val, rest: list};
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, n) {
  if (n < 0) {
    return undefined;
  }
  if (n === 0 || list.rest === null) {
    // if on 1
    return list.value;
  }
  // if not n = 1 call function with n - 1 and list.rest
  return nth(list.rest, n - 1);
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(x, y) {
  // if not obj return comparison
  if (typeof x !== 'object' && typeof y !== 'object') {
    return x === y;
  }
  // if x or y !== an object return false
  if (typeof x !== 'object' || typeof y !== 'object') {
    return false;
  }
  let xKeys = Object.keys(x);
  let yKeys = Object.keys(y);
  if (xKeys.length !== yKeys.length) {
    return false;
  }
  for (let i = 0; i < xKeys.length; i++) {
    // determine if current key/val of xKeys is not in yKeys
    if (!yKeys.includes(xKeys[i]) || !deepEqual(x[xKeys[i]], y[yKeys[i]])) {
      return false;
    }
  }
  return true;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
