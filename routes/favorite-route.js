const express = require("express");
const router = express.Router();
const FavoriteController = require("../controllers/favorite-controller");

/**
* @swagger
* /api/favorite/:
*   description: The favorites managing API
*   post:
*     summary: Add favorite
*     tags: [Favorites]
*     parameters:
*       - in: body
*         name: _id
*         type: string
*     responses:
*       200:
*         description: The list favorites
*         content:
*           application/json:
*       403:
*         description: user error
*/
router.route("/").post(FavoriteController.addFavorite)

/**
* @swagger
* /api/user/my:
*   description: The favorites managing API
*   post:
*     summary: Returns my favories
*     tags: [Favorites]
*     parameters:
*       - in: body
*         name: _id
*         type: string
*     responses:
*       200:
*         description: The list favorite
*         content:
*           application/json:
*       403:
*         description: user error
*/
router.post("/my", FavoriteController.getFavorites)

/**
* @swagger
* /api/user/delete:
*   description: The favorites managing API
*   delete:
*     summary: Delete favorite
*     tags: [Favorites]
*     parameters:
*       - in: body
*         name: _id
*         type: string
*     responses:
*       200:
*         description: The list favorite
*         content:
*           application/json:
*       403:
*         description: user error
*/
router.delete("/", FavoriteController.deleteFavorite)

/**
* @swagger
* /api/user/all:
*   description: The favorites managing API
*   delete:
*     summary: Delete all favorites
*     tags: [Favorites]
*     parameters:
*       - in: body
*         name: _id
*         type: string
*     responses:
*       200:
*         description: The list favorite
*         content:
*           application/json:
*       403:
*         description: user error
*/
router.delete("/all", FavoriteController.deleteAllFavorites)

module.exports = router;