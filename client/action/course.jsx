import axios from "axios";

export async function getCourses() {
  try {
    const response = axios
      .get("http://127.0.0.1:8000/api/courses/")
      .then((res) => {
        return res.data;
      });
    return response;
  } catch (error) {
    return null;
  }
}
