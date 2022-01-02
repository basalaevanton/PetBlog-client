export interface CardPostProps {
  title: string;
  user: string;
  date: Date;
  text: string;
  deletePost: () => void;
  postIdPage: () => void;
}
