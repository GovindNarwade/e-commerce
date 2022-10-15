const express = require("express")
const {CreateCategoryDetails,getAllCategory,deletecategoryDetails,updatecategoryDetails} = require("../controller/category_controller")
const router = express.Router()
/**
 * @swagger
 * components:
 *   schemas:
 *     Category:
 *       type: object
 *       required:
 *         - CategoryId
 *         - CategoryName
 *       properties:
 *         CategoryId:
 *           type: integer
 *           description: CategoryId
 *         CategoryName:
 *           type: string
 *           description: CategoryName
 *       example:
 *         CategoryId: 1234
 *         CategoryName: mens ware
 *        
 *
 */

/**
 * @swagger
 * /api/v1/getAllCategory:
 *   get:
 *     summary: get All Category
 *     tags: [Category]
 *     responses:
 *       200:
 *         description: get All Category
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/Category'
 */
router.route("/getAllCategory").get(getAllCategory)
/**
 * @swagger
 * /api/v1/CreateCategoryDetails:
 *   post:
 *     summary: Create a new Category Details 
 *     tags: [Category]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Category'
 *     responses:
 *       200:
 *         description: Create Category Details successfull
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 *       500:
 *         description: Some server error
 */
 router.route("/CreateCategoryDetails").post(CreateCategoryDetails)
 /**
 * @swagger
 * /api/v1/updatecategoryDetails:
 *   post:
 *     summary: update categoryDetails
 *     tags: [Category]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Category'
 *     responses:
 *       200:
 *         description: Category update successfull
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 *       500:
 *         description: Some server error
 */
  router.route("/updatecategoryDetails").post(updatecategoryDetails)
  /**
   * @swagger
   * /api/v1/deletecategoryDetails/{CategoryId}:
   *   delete:
   *     summary: Delete an Category
   *     tags: [Category]
   *     parameters:
   *         - in: path
   *           name: CategoryId
   *           required: true
   *           description: CategoryId is required
   *           schema:
   *              type: string
   *     responses:
   *       200:
   *         description: Category delete successfully
   *   
   */
   router.route("/deletecategoryDetails/:CategoryId").delete(deletecategoryDetails)

module.exports = router

