//1
const students = [

  { name: "Alice", grade: 80 },

  { name: "Bob", grade: 65 },

  { name: "Charlie", grade: 90 },

];

const filterStudents = students.filter(student => student.grade > 70)
console.log(filterStudents)

//2
const products = [

  { name: "Laptop", price: 1200 },

  { name: "Smartphone", price: 800 },

  { name: "Tablet", price: 500 },

];

const filterHigherProduct = products.filter(product => product.price < 1000)
console.log(filterHigherProduct)

//3
const employees = [

  { name: "Alice", salary: 60000 },

  { name: "Bob", salary: 45000 },

  { name: "Charlie", salary: 70000 },

];

const filterEmplyoees = employees.filter(employee => employee.salary > 50000)
console.log(filterEmplyoees)

//4
const movies = [

  { title: "Inception", rating: 8.8 },

  { title: "Interstellar", rating: 8.6 },

  { title: "The Dark Knight", rating: 9.0 },

];

const filterMovies = movies.filter( movie => movie.rating > 7.0)
console.log(filterMovies)

//5
const cars = [

  { brand: "Toyota", year: 2018 },

  { brand: "Honda", year: 2019 },

  { brand: "Ford", year: 2010 },

];

const filterCars = cars.filter(car => car.year > 2024 - 6)
console.log(filterCars)

//6
const studentsList = [

  { name: "Alice", gpa: 3.8 },

  { name: "Bob", gpa: 3.2 },

  { name: "Charlie", gpa: 3.9 },

];

const filterStudentsList = studentsList.filter(student => student.gpa > 3.5)
console.log(filterStudentsList)

//7
const fruits = [

  { name: "Apple", pricePerPound: 1.5 },

  { name: "Banana", pricePerPound: 2.2 },

  { name: "Orange", pricePerPound: 1.8 },

];

const filterFruits = fruits.filter(fruit => fruit.pricePerPound < 2)
console.log(filterFruits)

//8
const employeesList = [

  { name: "Alice", employed: true },

  { name: "Bob", employed: false },

  { name: "Charlie", employed: true },

];

const filterEmployesList = employeesList.filter(employee => employee.employed === true)
console.log(filterEmployesList)


//9
const productsList = [

  { name: "Laptop", inStock: true },

  { name: "Smartphone", inStock: false },

  { name: "Tablet", inStock: true },

];

const filterProductsList = productsList.filter(product => product.inStock === true)
console.log(filterProductsList)

//10
const laptops = [

  { brand: "Dell", screenSize: 14 },

  { brand: "HP", screenSize: 15.6 },

  { brand: "Lenovo", screenSize: 13 },

  { brand: "Acer", screenSize: 17 },

];

const filterLaptops = laptops.filter(laptop => laptop.screenSize > 15.0)
console.log(filterLaptops)
