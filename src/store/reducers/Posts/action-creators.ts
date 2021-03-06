import { Dispatch } from "redux";
import axios from "axios";

import { PostAction, PostActionTypes } from "./types";
import { AddComment, Comment } from "../../../interfaces/post.interface";
import { API } from "../../../helpers/api";

export const fetchPosts = (page: number, limit: number) => {
  return async (dispatch: Dispatch<PostAction>) => {
    try {
      dispatch({ type: PostActionTypes.FETCH_POST });
      const response = await axios.get(`${API.HOST}posts`, {
        params: { offset: page, count: limit },
      });
      setTimeout(() => {
        dispatch({
          type: PostActionTypes.FETCH_POST_SUCCESS,
          payload: response.data,
        });
      }, 500);
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

export const fetchPostID = (id: any) => {
  return async (dispatch: Dispatch<PostAction>) => {
    try {
      dispatch({ type: PostActionTypes.FETCH_POST });
      const response = await axios.get(`${API.HOST}posts/${id}`);
      setTimeout(() => {
        dispatch({
          type: PostActionTypes.FETCH_POSTID_SUCCESS,
          payload: response.data,
        });
      }, 500);
    } catch (e) {
      dispatch({
        type: PostActionTypes.FETCH_POST_ERROR,
        payload: "Произошла ошибка при загрузке поста",
      });
    }
  };
};

export const deletePost = (id: string) => {
  return async (dispatch: Dispatch<PostAction>) => {
    try {
      dispatch({ type: PostActionTypes.DELETE_POST, payload: id });
      await axios.delete(`${API.HOST}posts/${id}`);
    } catch (e) {
      dispatch({
        type: PostActionTypes.FETCH_POST_ERROR,
        payload: "Произошла ошибка при удалении поста",
      });
    }
  };
};

export const addComment = ({ username, text, id }: AddComment) => {
  return async (dispatch: Dispatch<PostAction>) => {
    try {
      const formData = {
        username: username,
        text: text,
        postId: id,
      };
      await axios.post(`${API.HOST}comments`, formData);

      dispatch({ type: PostActionTypes.FETCH_POST });
      const response = await axios.get(`${API.HOST}posts/${id}`);

      dispatch({
        type: PostActionTypes.FETCH_POSTID_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: PostActionTypes.FETCH_POST_ERROR,
        payload: "Произошла ошибка при отправе комментария",
      });
    }
  };
};

export const deleteComment = (id: string) => {
  return async (dispatch: Dispatch<PostAction>) => {
    try {
      dispatch({ type: PostActionTypes.DELETE_COMMENT, payload: id });
      await axios.delete(`${API.HOST}comments/${id}`);
    } catch (e) {
      dispatch({
        type: PostActionTypes.FETCH_POST_ERROR,
        payload: "Произошла ошибка при удаление комментария",
      });
    }
  };
};
