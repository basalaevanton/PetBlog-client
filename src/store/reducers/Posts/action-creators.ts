import { Dispatch } from "redux";
import axios from "axios";

import { PostAction, PostActionTypes } from "./types";

export const fetchPosts = (page: number, limit: number) => {
  return async (dispatch: Dispatch<PostAction>) => {
    try {
      dispatch({ type: PostActionTypes.FETCH_POST });
      const response = await axios.get("http://localhost:5000/posts", {
        params: { offset: page, count: limit },
      });
      // setTimeout(() => {
      dispatch({
        type: PostActionTypes.FETCH_POST_SUCCESS,
        payload: response.data,
      });
      // }, 500);
    } catch (e) {
      dispatch({
        type: PostActionTypes.FETCH_POST_ERROR,
        payload: "Произошла ошибка при загрузке списка постов",
      });
    }
  };
};
export function setTodoPage(page: number): PostAction {
  return { type: PostActionTypes.SET_POST_PAGE, payload: page };
}
