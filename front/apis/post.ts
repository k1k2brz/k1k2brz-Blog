import { AxiosError } from "axios";
import { authInstance } from "./utils/authInstance";

export const createTodo = async (post: CreatePost) => {
    try {
      const { data } = await authInstance.post(`/post/create`, post, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return data;
    } catch (error) {
      console.log(error);
      return (error as AxiosError).response;
    }
  };