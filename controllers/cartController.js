exports.addToCart = async (req, res) => {
    const { user_id, product_id, quantity } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO cart (user_id, product_id, quantity) VALUES ($1, $2, $3) RETURNING *',
            [user_id, product_id, quantity]
        );
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error adding to cart:', error);
        res.status(500).json({ error: 'Failed to add to cart' });
    }
};
