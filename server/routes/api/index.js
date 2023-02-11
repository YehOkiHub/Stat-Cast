const router = require('express').Router();
const statsRoutes = require('./statRoutes');
const teamRoutes = require('./teamRoutes');
const shopRoutes = require('./shopRoutes');

router.use('/stats', statsRoutes);
router.use('/team', teamRoutes);
router.use('/shop', shopRoutes);

module.exports = router;


