import { IPostId } from "../../../interfaces/post.interface";
import { PostAction, PostActionTypes, PostState } from "./types";

const initialState: PostState = {
  posts: [],
  postId: {} as IPostId,
  page: 0,
  error: null,
  limit: 10,
  loading: false,
};

export const PostReducer = (
  state = initialState,
  action: PostAction
): PostState => {
  switch (action.type) {
    case PostActionTypes.FETCH_POST:
      return { ...state, loading: true };
    case PostActionTypes.FETCH_POST_SUCCESS:
      return { ...state, loading: false, posts: action.payload };
    case PostActionTypes.FETCH_POSTID_SUCCESS:
      return { ...state, loading: false, postId: action.payload };
    case PostActionTypes.FETCH_POST_ERROR:
      return { ...state, loading: false, error: action.payload };
    case PostActionTypes.SET_POST_PAGE:
      return { ...state, page: action.payload };
    case PostActionTypes.DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((item) => item._id !== action.payload),
      };
    case PostActionTypes.DELETE_COMMENT:
      return {
        ...state,
        postId: {
          ...state.postId,
          comments: state.postId.comments.filter(
            (item) => item._id !== action.payload
          ),
        },
      };
    default:
      return state;
  }
};
