interface user {
  value: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
interface title {
  value: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
interface text {
  value: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface AddNewPostProps {
  title: title;
  user: user;
  text: text;
  onClick: () => void;
}
