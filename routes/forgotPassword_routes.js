const express = require("express")
const {emailSendforUser,changePasswordforUser} = require("../controller/userForgotPassword_controller")
const router = express.Router()
/**
 * @swagger
 * components:
 *   schemas:
 *     User3:
 *       type: object
 *       required:
 *         - Email
 *       properties:
 *         Email:
 *           type: string
 *           description: admin@gmail.com
 *       example:
 *         Email: admin@gmail.com
 *        
 *
 */
/**
 * @swagger
 * /api/v1/emailSendforUser:
 *   post:
 *     summary: Email Send for forgot Password
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Admin'
 *     responses:
 *       200:
 *         description: otp send  successfull
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Admin'
 *       500:
 *         description: Some server error
 */
router.route("/emailSendforUser").post(emailSendforUser)
/**
 * @swagger
 * components:
 *   schemas:
 *     User2:
 *       type: object
 *       required:
 *         - Email
 *         - Password
 *         - otp
 *       properties:
 *         Email:
 *           type: string
 *           description: admin@gmail.com
 *         Password:
 *           type: string
 *           description: password
 *         otp:
 *           type: integer
 *           description: otp
 *       example:
 *         Email: admin@gmail.com
 *         Password: 12345
 *         otp: 9874
 *
 */
/**
 * @swagger
 * /api/v1/changePasswordforUser:
 *   post:
 *     summary: change Password for user
 *     tags: [User]
 *     properties:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User2'
 *     responses:
 *       200:
 *         description: Password Change Successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User2'
 *       500:
 *         description: Some server error
 */
router.route("/changePasswordforUser").post(changePasswordforUser)
module.exports = router
