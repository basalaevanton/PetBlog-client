export interface IPost {
  _id: string;
  comments: string[];
  likes: number;
  date: string;
  title: string;
  text: string;
  user: string;
}
