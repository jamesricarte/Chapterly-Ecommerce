const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors( {origin: 'http://localhost:5173'} ));

app.get('/products', (req, res) => {
    const products = [
        {
            _id: "672a01f1f51ec3222f497028",
            name: "Ego Is the Enemy",
            author: "Ryan Holiday",
            price: 25.5,
            genre: "Self-help",
        },
        {
            _id: "672a02c2f51ec3222f497036",
            name: "The Subtle Art of Not Giving a F*ck",
            author: "Mark Manson",
            price: 89.99,
            genre: "Nonfiction, Self-help",
        },
        {
            _id: "672a0302f51ec3222f49703a",
            name: "The 48 Laws of Power",
            author: "Robert Greene",
            price: 32.49,
            genre: "Self-help",
        },
        {
            _id: "672a0352f51ec3222f49703e",
            name: "The Daily Stoic",
            author: "Ryan Holiday",
            price: 23.22,
            genre: "Self-help",
        }
    ];

    res.json(products);
});

app.listen(3000, () => {
    console.log('Server running at port: 3000');
    console.log('http://localhost:3000');
});
