type LoginInfo = {
  userId: string;
  userName: string;
  authority: number;
};

export const useLoginInfo = () =>
  useState<LoginInfo>('loginInfo', () => {
    return {
      userId: 'U999',
      userName: 'yamada',
      authority: 0,
    };
  });
