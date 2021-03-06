// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(arr) {
  // i can use reduce to put all the values into a new array and if the current element is an array i can use array.concat the element
  // to add it to the array properly perhaps
  return arr.reduce((memo, val) => {
    if (Array.isArray(val)) {
      // if it's an array concat
      return memo.concat(val);
    } else {
      memo.push(val);
      return memo;
    }
  }, []);
  
}


// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(num, func, func2, codeBlock) {
  // console.log('num', num, 'func', func, 'func2', func2, 'code', codeBlock)
  // num 3 
  // func n => n > 0 // stop condition
  // func2 n => n - 1 // iteration
  // codeBlock // value => console.log('value is ' + value) // function that does soething to code
  for (let i = num; func(i); i = func2(i)) {
    codeBlock(i);
  }

  
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(arr, func) {
  let everyVal = true;
  for (let i = 0; i < arr.length; i++) {
    if (!func(arr[i])) {
      everyVal = false;
    }
  }
  return everyVal;
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(str) {
  let count = {'ltr': 0, 'rtl': 0}
  str.split('').forEach(char => {
    if (characterScript(char.codePointAt(0)) === null) {
      return;
    }
    if (characterScript(char.codePointAt(0)).direction === 'ltr') {
      count['ltr']++;
    } else if (characterScript(char.codePointAt(0)).direction === 'rtl') {
      count['rtl']++;
    }
  });
  return count.ltr > count.rtl ? 'ltr' : 'rtl';
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
