import axios, { AxiosError } from "axios";
import { authInstance } from "./utils/authInstance";

export const createPost = async (post: CreatePost) => {
  const accessToken = localStorage.getItem("Token");
    try {
      const { data } = await axios.post(`/post/create`, post, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
      });

      return data;
    } catch (error) {
      return (error as AxiosError).response;
    }
  };