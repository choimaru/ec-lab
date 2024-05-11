type LoginInfo = {
  userId: string;
  userName: string;
  authority: number;
};

export const useLoginInfo = () =>
  useState<LoginInfo>('loginInfo', () => {
    return {
      userId: 'U0001',
      userName: 'yamada',
      authority: 0,
    };
  });
