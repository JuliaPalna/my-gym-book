module.exports = (res, error) => {
    return res.status(error.status || 500).json({
        error: true,
        message: error.message || 'Unknown error',
    });
};
