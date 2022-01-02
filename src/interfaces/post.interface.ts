export interface Post {
  _id: string;
  likes: number;
  date: Date;
  title: string;
  text: string;
  user: string;
}

export interface IPost extends Post {
  comments: string[];
}

export interface Comment {
  _id: string;
  likes: number;
  text: string;
  username: string;
  __v: number;
}

export interface IPostId extends Post {
  comments: Comment[];
}

export interface AddComment {
  id: string;
  text: string;
  username: string;
}
