// @desc    Get all transactions
// @reoute  GET  /api/v1/transactions
// @access  Public
exports.getTransactions = (req, res, next) => {
  res.send('GET transactions');
};

// @desc    Add all transactions
// @reoute  POST  /api/v1/transactions
// @access  Public
exports.addTransaction = (req, res, next) => {
  res.send('POST transactions');
};

// @desc    Delete all transactions
// @reoute  DELETE  /api/v1/transactions/:id
// @access  Public
exports.deleteTransaction = (req, res, next) => {
  res.send('DELETE transactions');
};
