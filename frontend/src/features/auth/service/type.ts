export type LoginValues = {
  username: string;
  password: string;
};

export type ResponseLogin = {
  code: number;
  success: boolean;
  data: {
    user: {
      id: number;
      email: string;
      fullName: string;
      phoneNumber: string;
      gender: number;
      status: number;
      createdAt: string;
      updatedAt: string;
    };
    token: string,
    expiresIn: string;
  };
  msg: string;
};
