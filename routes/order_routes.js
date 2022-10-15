const express = require("express")
const {CreateOrderDetails,deleteorderDetails,getAllorder,updateorderDetails} = require("../controller/order_controller")
const router = express.Router()
/**
 * @swagger
 * components:
 *   schemas:
 *     order:
 *       type: object
 *       required:
 *         - ProductId
 *         - OrderId
 *         - Total
 *       properties:
 *         ProductId:
 *           type: integer
 *           description: ProductId
 *         OrderId:
 *           type: integer
 *           description: OrderId
 *         Total:
 *           type: integer
 *           description: Total
 *       example:
 *         ProductId: 78945
 *         OrderId: 12345
 *         Total: 12000
 *        
 *
 */


/**
 * @swagger
 * /api/v1/CreateOrderDetails:
 *   post:
 *     summary: Create a new Order Details
 *     tags: [order]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/order'
 *     responses:
 *       200:
 *         description: Create Order Details successfull
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/order'
 *       500:
 *         description: Some server error
 */
 router.route("/CreateOrderDetails").post(CreateOrderDetails)
/**
 * @swagger
 * /api/v1/getAllorder:
 *   get:
 *     summary: get all order
 *     tags: [order]
 *     responses:
 *       200:
 *         description: get All order
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/order'
 */
 router.route("/getAllorder").get(getAllorder)
 /**
 * @swagger
 * /api/v1/deleteorderDetails/{EventId}:
 *   delete:
 *     summary: Delete an Event
 *     tags: [order]
 *     parameters:
 *         - in: path
 *           name: OrderId
 *           required: true
 *           description: OrderId is required
 *           schema:
 *              type: string
 *     responses:
 *       200:
 *         description: Order delete successfully
 *   
 */
  router.route("/deleteorderDetails/:OrderId").delete(deleteorderDetails)

  /**
  * @swagger
  * /api/v1/updateorderDetails:
  *   post:
  *     summary: update a  order
  *     tags: [order]
  *     requestBody:
  *       required: true
  *       content:
  *         application/json:
  *           schema:
  *             $ref: '#/components/schemas/order'
  *     responses:
  *       200:
  *         description: order update successfull
  *         content:
  *           application/json:
  *             schema:
  *               $ref: '#/components/schemas/order'
  *       500:
  *         description: Some server error
  */
 router.route("/updateorderDetails").post(updateorderDetails)
module.exports = router

