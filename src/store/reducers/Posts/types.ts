import { IPost, IPostId } from "../../../interfaces/post.interface";

export interface PostState {
  posts: IPost[];
  postId: unknown | IPostId;
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
}
interface FetchPostAction {
  type: PostActionTypes.FETCH_POST;
}
interface FetchPostSuccessAction {
  type: PostActionTypes.FETCH_POST_SUCCESS;
  payload: IPost[];
}
interface FetchPostIdSuccessAction {
  type: PostActionTypes.FETCH_POSTID_SUCCESS;
  payload: IPostId;
}
interface FetchPostErrorAction {
  type: PostActionTypes.FETCH_POST_ERROR;
  payload: string;
}
interface SetPostPage {
  type: PostActionTypes.SET_POST_PAGE;
  payload: number;
}

export type PostAction =
  | FetchPostAction
  | FetchPostErrorAction
  | FetchPostSuccessAction
  | FetchPostIdSuccessAction
  | SetPostPage;
