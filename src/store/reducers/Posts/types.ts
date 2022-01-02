import { IPost, IPostId } from "../../../interfaces/post.interface";

export interface PostState {
  posts: IPost[];
  postId: IPostId;
  loading: boolean;
  error: null | string;
  page: number;
  limit: number;
}

export enum PostActionTypes {
  FETCH_POST = "FETCH_POST",
  FETCH_POST_SUCCESS = "FETCH_POST_SUCCESS",
  FETCH_POSTID_SUCCESS = "FETCH_POSTID_SUCCESS",
  FETCH_POST_ERROR = "FETCH_POST_ERROR",
  SET_POST_PAGE = "SET_POST_PAGE",
  DELETE_POST = "DELETE_POST",
  DELETE_COMMENT = "DELETE_COMMENT",
}
interface FetchPostAction {
  type: PostActionTypes.FETCH_POST;
}
interface FetchPostSuccessAction {
  type: PostActionTypes.FETCH_POST_SUCCESS;
  payload: IPost[];
}

interface FetchPostErrorAction {
  type: PostActionTypes.FETCH_POST_ERROR;
  payload: string;
}
interface SetPostPage {
  type: PostActionTypes.SET_POST_PAGE;
  payload: number;
}

interface FetchPostIdSuccessAction {
  type: PostActionTypes.FETCH_POSTID_SUCCESS;
  payload: IPostId;
}
interface DeletePostAction {
  type: PostActionTypes.DELETE_POST;
  payload: string;
}
interface DeleteCommentAction {
  type: PostActionTypes.DELETE_COMMENT;
  payload: string;
}

export type PostAction =
  | FetchPostAction
  | FetchPostErrorAction
  | FetchPostSuccessAction
  | SetPostPage
  | FetchPostIdSuccessAction
  | DeletePostAction
  | DeleteCommentAction;
