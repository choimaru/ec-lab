export type Message = {
  required: {
    userCd: string;
    userName: string;
    kana: string;
    email: string;
    password: string;
  };
};

export const messages: Message = {
  required: {
    userCd: 'ユーザーコードを入力してください。',
    userName: '氏名を入力してください。',
    kana: 'ふりがなを入力してください。',
    email: 'メールアドレスを入力してください。',
    password: 'パスワードを入力してください。',
  },
};
