


const cars = [
    { id: 1, model: 'Tesla Model 3', manufacturer: 'Tesla', price: 40000 },
    { id: 2, model: 'Ford Mustang', manufacturer: 'Ford', price: 55000 },
    { id: 3, model: 'Chevrolet Camaro', manufacturer: 'Chevrolet', price: 45000 },
    { id: 4, model: 'Toyota Corolla', manufacturer: 'Toyota', price: 20000 },
    { id: 5, model: 'Honda Civic', manufacturer: 'Honda', price: 25000 },
];


// Print all car models.

cars.filter((a)=>console.log(a.model))

// Find all cars priced above 30000.

cars.filter((a)=>a.price>30000?console.log(a.model):"")

// Get a list of manufacturers of cars priced below 30000.

cars.filter((a)=>a.price<30000?console.log(a.manufacturer):"")

// Count the total number of cars manufactured by Tesla.

let count=cars.filter((a)=>a.manufacturer=="Tesla"?a:"")
console.log(count.length);
