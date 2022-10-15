const express = require("express")
const {getAllrating} = require("../controller/rating_controller")
const router = express.Router()
/**
 * @swagger
 * components:
 *   schemas:
 *     rating:
 *       type: object
 *       required:
 *         - ratingNo
 *         - ratingName
 *       properties:
 *         ratingNo:
 *           type: integer
 *           description: ratingNo
 *         ratingName:
 *           type: string
 *           description: password
 *       example:
 *         ratingNo: 5
 *         ratingName: high
 *        
 *
 */

/**
 * @swagger
 * /api/v1/getAllrating:
 *   get:
 *     summary: get All rating
 *     tags: [rating]
 *     responses:
 *       200:
 *         description: get All rating
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/rating'
 */
router.route("/getAllrating").get(getAllrating)


module.exports = router

