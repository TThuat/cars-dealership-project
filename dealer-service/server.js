const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

const dealers = {
    1: [
        { dealer: "Dealer A", price: 1200 },
        { dealer: "Dealer B", price: 1150 }
    ],
    2: [
        { dealer: "Dealer C", price: 800 },
        { dealer: "Dealer D", price: 850 }
    ],
    3: [
        { dealer: "Dealer E", price: 600 }
    ]
};

app.get('/dealers/:productId', (req, res) => {
    const productId = req.params.productId;
    res.json(dealers[productId] || []);
});

app.listen(8080, () => {
    console.log('Server running on port 8080');
});