import axios from "axios";

const handleError = (error) => {
  alert(error);
  console.error(error);
  return error;
};

export const getGallery = async () => {
  try {
    const res = await axios.get("/gallery");
    return res.data;
  } catch (error) {
    return handleError(error);
  }
};

export const likeGalleryItem = async (id, refreshState) => {
  try {
    await axios.put(`/gallery/like/${id}`);
    await refreshState();
  } catch (error) {
    return handleError(error);
  }
};
