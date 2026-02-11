// form周りの型を定義している

export type FormState = {
  name: string;
  email: string;
  password: string;
};

export interface errorsMessage {
  password?: string;
  name?: string;
  email?: string;
}

export interface registerType {
  success: boolean;
  errors?: errorsMessage;
}
