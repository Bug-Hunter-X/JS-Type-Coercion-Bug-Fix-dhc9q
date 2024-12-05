function foo(a, b) {
  if (a === null || b === null) {
    return null; // Handle null values
  }
  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN; // Or throw an error: throw new Error('Inputs must be numbers');
  }
  return a + b; // Safe addition
}

// Example usage
console.log(foo(5, 3));     // Output: 8
console.log(foo(5, '3'));   // Output: NaN (or throws an error)
console.log(foo(null, 3));  // Output: null
console.log(foo('hello', 3)); // Output: NaN (or throws an error) 