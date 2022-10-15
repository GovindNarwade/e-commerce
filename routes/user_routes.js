const express = require("express")
const {createUserDetails,GetAllUserDetails,deleteUserDetails,updateUserDetails} = require("../controller/user_controller")
const {Userlogin} = require("../controller/userLogin_controller")
const router = express.Router()
/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - UserId
 *         - Name
 *         - Email
 *         - Password
 *         - Gender
 *         - DOB
 *       properties:
 *         UserId:
 *           type: integer
 *           description: userId
 *         Name:
 *           type: string
 *           description: user
 *         Email:
 *           type: string
 *           description: user@gmail.com
 *         Password:
 *           type: string
 *           description: password
 *         Gender: 
 *           type: string
 *           description: password
 *         DOB:
 *           type: string
 *           description: password
 *       example:
 *         Name : jhon Deo
 *         Email: Deo@gmail.com
 *         Password: 12345
 *         Gender: Male
 *         DOB: 12-03-2005
 *        
 *
 */

/**
 * @swagger
 * /api/v1/GetAllUserDetails:
 *   get:
 *     summary: Get All User Details
 *     tags: [User]
 *     responses:
 *       200:
 *         description: Get All User Details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
router.route("/GetAllUserDetails").get(GetAllUserDetails)
/**
 * @swagger
 * /api/v1/createUserDetails:
 *   post:
 *     summary: create a new User Details
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: create a new User successfull
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Some server error
 */
 router.route("/createUserDetails").post(createUserDetails)

/**
 * @swagger
 * components:
 *   schemas:
 *     User1:
 *       type: object
 *       required:
 *         - Email
 *         - Password
 *       properties:
 *         Email:
 *           type: string
 *           description: user@gmail.com
 *         Password:
 *           type: string
 *           description: password
 *       example:
 *         Email: Deo@gmail.com
 *         Password: 12345
 *        
 *
 */
/**
 * @swagger
 * /api/v1/Userlogin:
 *   post:
 *     summary: User Login
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User1'
 *     responses:
 *       200:
 *         description:  User login  successfull
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User1'
 *       500:
 *         description: Some server error
 */
 router.route("/Userlogin").post(Userlogin)
/**
 * @swagger
 * /api/v1/deleteUserDetails/{UserId}:
 *   delete:
 *     summary: Delete an User
 *     tags: [User]
 *     parameters:
 *         - in: path
 *           name: UserId
 *           required: true
 *           description: UserId is required
 *           schema:
 *              type: string
 *     responses:
 *       200:
 *         description: User delete successfully
 *   
 */
 router.route("/deleteUserDetails/:EventId").delete(deleteUserDetails)

 /**
 * @swagger
 * /api/v1/updateUserDetails:
 *   post:
 *     summary: update a  User
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: User update successfull
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Some server error
 */
router.route("/updateUserDetails").post(updateUserDetails)
module.exports = router

