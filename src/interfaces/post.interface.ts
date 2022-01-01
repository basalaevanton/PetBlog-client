export interface IPost {
  _id: string;
  comments: string[];
  likes: number;
  date: Date;
  title: string;
  text: string;
  user: string;
}
