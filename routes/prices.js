const express = require('express');
const { body, param, validationResult } = require('express-validator');
const router = express.Router();

const pricesStore = {}; // In-memory (replace with DB in real app)

router.post(
  '/',
  [
    body('productTitle').isString().notEmpty(),
    body('wowDealPrice').isString().notEmpty(),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { productTitle, wowDealPrice } = req.body;
    pricesStore[productTitle] = {
      wowDealPrice,
      createdAt: new Date(),
    };

    res.status(201).json({ message: 'Saved' });
  }
);

router.get(
  '/:productTitle',
  [param('productTitle').isString().notEmpty()],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const productTitle = req.params.productTitle;
    const record = pricesStore[productTitle];

    if (!record) {
      return res.status(404).json({ error: 'Product not found' });
    }

    const flipkartPrice = 74999; // Static stub
    const dealStr = record.wowDealPrice.replace(/[^\d]/g, '') || null;
    const wowDealPrice = dealStr ? parseInt(dealStr) : null;

    res.json({
      flipkartPrice,
      wowDealPrice: wowDealPrice ? `₹${wowDealPrice}` : null,
      productImgUri: 'https://dummyimage.com/300x300/000/fff&text=Product',
      savingsPercentage: wowDealPrice
        ? Math.round(((flipkartPrice - wowDealPrice) / flipkartPrice) * 100)
        : 0,
    });
  }
);

module.exports = router;
