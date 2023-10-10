import { StaticImageData } from 'next/image';
import { ReactElement } from 'react';

export type PageType = number;
export type IdType = string;

export interface TypePosts {
    id: string;
    image: string;
    likes: number;
    tags: string[];
    text: string;
    publishDate: string;
    owner: {
      id: string;
      title: string;
      firstName: string;
      lastName: string;
      picture: string;
    }
  }

  

  export type getPostAllQuery = {
    data: TypePosts[];
    limit: number;
    page: number;
    total: number;
  };