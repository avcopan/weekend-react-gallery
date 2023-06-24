const pool = require("../modules/pool");
const defaultGalleryItems = require("../modules/gallery.data");

const getGallery = async () => {
  const queryString = "SELECT * FROM gallery";

  try {
    const result = await pool.query(queryString);
    return result.rows;
  } catch (error) {
    throw new Error(error);
  }
};

const addGalleryItem = async (galleryItem) => {
  const queryString = `
    INSERT INTO gallery (path, title, description)
    VALUES ($1, $2, $3);
  `;
  const queryParams = [
    galleryItem.path,
    galleryItem.title,
    galleryItem.description,
  ];

  try {
    return pool.query(queryString, queryParams);
  } catch (error) {
    throw new Error(error);
  }
};

const incrementGalleryItemLikes = async (id) => {
  const queryString = `
    UPDATE gallery
    SET likes = likes + 1
    WHERE id = $1;
  `;
  const queryParams = [id];

  try {
    return pool.query(queryString, queryParams);
  } catch (error) {
    throw new Error(error);
  }
};

getGallery().then((gallery) => {
  if (gallery.length === 0) {
    Promise.all(defaultGalleryItems.map(addGalleryItem))
      .then(getGallery)
      .then(console.log);
  }
});

module.exports = {
  getGallery,
  addGalleryItem,
  incrementGalleryItemLikes,
};
