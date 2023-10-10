"use client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createPost, getPostById, getPosts } from "../services";
import { TypePosts, getPostAllQuery } from "../util/types";


export const postsKeys = {
  key: ["posts"],
  findOne: (id: string) => [...postsKeys.key, "find-one", id],
  findAll: (query: string = "") => [...postsKeys.key, "find-all", query],
  createOne: (id: string = "") => [...postsKeys.key, "find-one", id],
};


type getPostAll = {
  data: getPostAllQuery | undefined;
  isLoading: boolean;
  isError: boolean;
};
export function useGetPosts(): getPostAll {
  const { data, isLoading, isError } = useQuery({
    queryKey: postsKeys.findAll(),
    queryFn: getPosts,
  });
  return { data, isLoading, isError };
}


type getPostByIdType = {
  data: TypePosts | undefined;
  isLoading: boolean;
  isError: boolean;
};
export function useGetPostById({ id }: { id: string }): getPostByIdType {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["querypost"],
    queryFn: async () => await getPostById({ id }),
  });
  return { data, isLoading, isError };
}


// export function useRemovePostById({id}: {id: string}){

// }

// const { data, isLoading, isError} = useQuery({
//   queryKey: postsKeys.createOne(),
//   queryFn: createPost,
// });
// console.log("data from useCreatePost: ", data);
// return { data, isLoading, isError }
// }
