import { DateRangeParams, ImageData, ListData, PageParams } from '@/ts/types';


export type DataUser = {
  id: number;
  createdAt: string;
  fullName: string;
  email: string;
  phone: string;
  address: string;
  gender: number;
  status: number;
  type: number;
  images: {
    avatar?: ImageData;
  };
};

export type UserListParams = PageParams &
  DateRangeParams &
  Partial<
    Pick<DataUser, 'id' | 'fullName'>
  >;

export type BodyUpdateUser = Partial<
  Pick<DataUser, 'fullName' > & {
    password: string;
    images: {
      avatar?: string;
    };
  }
>;

export type DataUserListQuery = ListData<DataUser>;
