// Category
export interface ICategory {
  id: number;
  attributes: ICategoryAttribute;
}

export interface ICategoryAttribute {
  Title: string;
  Slug: string;
}

export interface Ipagintaion {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface IResourceMeta {
  pagintaion: Ipagintaion;
}

export interface ICollectionResponse<T> {
  data: T;
  meta: IResourceMeta;
}

// Articles

export interface IImageData {
  // 3:19:31
  data: {
    attributes: {
      url: string;
      format: {
        small: {
          url: string;
        };
      };
    };
  };
}

export interface IAuthor {
  data: {
    attributes: {
      firstname: string;
      lastname: string;
      avatar: {
        data: {
          attributes: {
            formats: {
              thumbnail: {
                url: string;
              };
            };
          };
        };
      };
    };
  };
}
export interface IArticleAttribute {
  Title: string;
  body: string;
  Slug: string;
  Image: IImageData;
  createdAt: string;
  author: IAuthor;
  shortDescription:string;
}
export interface IArticle {
  id: number;
  attributes: IArticleAttribute;
}
