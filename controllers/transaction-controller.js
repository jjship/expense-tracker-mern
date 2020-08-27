const Transaction = require('../models/Transaction');

// @desc    Get all transactions
// @reoute  GET  /api/v1/transactions
// @access  Public
exports.getTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.find();

    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server error',
    });
  }
};

// @desc    Add transaction
// @reoute  POST  /api/v1/transactions
// @access  Public
exports.addTransaction = async (req, res, next) => {
  try {
    const { text, amount } = req.body;

    const transaction = await Transaction.create(req.body); // accepts only fields that are in the Transaction model

    return res.status(201).json({
      success: true,
      data: transaction,
    });
  } catch (err) {
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map((val) => val.message);

      return res.status(400).json({
        success: false,
        error: messages,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: 'Server error',
      });
    }
  }
};

// @desc    Delete transaction
// @reoute  DELETE  /api/v1/transactions/:id
// @access  Public
exports.deleteTransaction = async (req, res, next) => {
  res.send('DELETE transactions');
};