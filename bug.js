function foo(a, b) {
  if (a === null || b === null) {
    return null; // Handle null values
  }
  return a + b; // Potential error if a or b is not a number
}