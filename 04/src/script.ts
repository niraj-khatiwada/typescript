// Type Assertion (Type Casting)

const year = document.getElementById('year') as HTMLSpanElement

if (!(year == null)) {
  year.textContent = new Date().getFullYear().toString()
}
