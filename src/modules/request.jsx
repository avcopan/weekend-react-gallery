import axios from "axios";

const handleError = (error) => {
  alert(error);
  console.error(error);
  return error;
};

export const getGallery = async () => {
  try {
    const res = await axios.get("/gallery");
    const gallery = res.data.sort((a, b) => a.id - b.id);
    return gallery;
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
