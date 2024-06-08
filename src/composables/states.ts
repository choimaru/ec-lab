type LoginInfo = {
  employeeId: string;
  employeeName: string;
  authority: number;
};

export const useLoginInfo = () =>
  useState<LoginInfo>('loginInfo', () => {
    return {
      employeeId: 'U999',
      employeeName: 'yamada',
      authority: 99,
    };
  });
