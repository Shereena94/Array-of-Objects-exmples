


const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', price: 300 },
    { id: 2, title: '1984', author: 'George Orwell', price: 200 },
    { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee', price: 400 },
    { id: 4, title: 'Moby Dick', author: 'Herman Melville', price: 150 },
    { id: 5, title: 'War and Peace', author: 'Leo Tolstoy', price: 600 },
];
// 1.Print all book titles.

books.forEach((a)=>console.log(a["title"]));


// 2.Find all books priced above 300.

books.forEach((a)=>a.price>300?console.log(a["title"]):"");

// 3.Get a list of authors of books priced below 250.

books.filter((a)=>a.price<250?console.log(a['author']):"")


// 4.count the total no of book priced above 200

let totalNo=books.filter((a)=>a.price>200?a:"")
console.log(totalNo.length)