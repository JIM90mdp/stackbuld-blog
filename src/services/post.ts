"use client";
import { PageType, IdType } from "../util/types";

// export function getPosts({ page }: { page: PageType }) {
export function getPosts() {
  // return fetch(`https://dummyapi.io/data/v1/user?page=${page}&limit=10`, {
  return fetch(`https://dummyapi.io/data/v1/post?limit=10`, {
    headers: {
      "app-id": "6522d3514ba3c86cc33fce72",
    },
  })
    .then(async (res) => {
      if (!res.ok) {
        console.error("Error en la petición:", res.status, res.statusText);
        throw new Error("Error en la petición");
      }
      // console.log("res getPosts:", res.json())
      return await res.json();
    })
    .catch((error) => {
      console.error("Error en la función getPosts:", error);
      throw error;
    });
}

export function getPostsById({ id }: { id: IdType }) {
  console.log("Id from getPostsById: ", id);
  return fetch(`https://dummyapi.io/data/v1/post/${id}`, {
    headers: {
      "app-id": "6522d3514ba3c86cc33fce72",
    },
  })
    .then(async (res) => {
      if (!res.ok) {
        console.error("Error en la petición:", res.status, res.statusText);
        throw new Error("Error en la petición");
      }
      // console.log("res :", res)
      return await res.json();
    })
    .catch((error) => {
      console.error("Error en la función getPosts:", error);
      throw error;
    });
}
