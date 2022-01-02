import { IPost } from "../../interfaces/post.interface";

export interface CardPostProps {
  title: string;
  user: string;
  date: string;
  text: string;
  deletePost: () => void;
}
