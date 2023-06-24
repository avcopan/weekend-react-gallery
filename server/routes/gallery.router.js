const express = require("express");
const query = require("../queries/gallery.query");
const router = express.Router();
const galleryItems = require("../modules/gallery.data");

// DO NOT MODIFY THIS FILE FOR BASE MODE

router.get("/", async (_, res) => {
  try {
    gallery = await query.getGallery();
    res.status(200).send(gallery);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

router.put("/like/:id", async (req, res) => {
  const id = req.params.id;

  try {
    await query.incrementGalleryItemLikes(id);
    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

module.exports = router;
