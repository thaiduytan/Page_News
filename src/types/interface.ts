export {};
// https://bobbyhadz.com/blog/typescript-make-types-global#declare-global-types-in-typescript

declare global {
  interface ITrackTop {
    _id: string;
    title: string;
    description: string;
    category?: string;
    imgUrl?: string;
    trackUrl?: string;
    countLike?: number;
    countPlay?: number;
    duration?: number;
    uploader?: {
      _id: string;
      email?: string;
      name: string;
      role?: string;
      type?: string;
    };
    isDeleted?: false;
    createdAt?: string;
    updatedAt?: string;
  }
  interface IRequest {
    url: string;
    method?: string;
    body?: { [key: string]: any };
    queryParams?: any;
    useCredentials?: boolean;
    headers?: any;
    nextOption?: any;
  }

  // interface IBackendRes<T> {
  //   error?: string | string[];
  //   message: string;
  //   statusCode: number | string;
  //   data?: T;
  // }

  // interface IBackendRes<T> {
  //   error?: string | string[];
  //   message: string;
  //   statusCode: number | string;
  //   data?: T;
  // }

  interface IModelPaginate<T> {
    meta: {
      current: number;
      pageSize: number;
      pages: number;
      total: number;
    };
    result: T[];
  }

  interface IPlayTrack extends ITrackTop {
    isPlaying: boolean;
  }
  interface ITrackContext {
    currentTrack: IPlayTrack;
    setCurrentTrack: (v: IPlayTrack) => void;
  }

  // new
  interface IBackendRes<T> {
    error?: string | string[];
    data?: T;
  }

  interface INewHeadline {
    id: string;
    source: string;
    timestamp: number;
    text: string;
  }

  interface IMinorType {
    type: string;
    name: string;
    auth_code: string;
    icon_id: number;
    fixed_page: boolean;
  }
  interface IMajorType {
    type: string;
    name: string;
    auth_code: string;
    icon_id: 10;
    minor_type: IMinorType[];
  }

  interface ICategorys {
    name: string;
    major_type: IMajorType[];
  }
}
