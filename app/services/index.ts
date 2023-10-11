"use client";
import { IdType, TypePosts, getPostAllQuery, CreateType } from "../util/types";
// const { DUMMYAPI} = process.env;

// export function getPosts({ page = 1}: { page: PageType }) {
export function getPosts() {
  // console.log("Get Posts page", page && page)
  return fetch(`https://dummyapi.io/data/v1/post`, {
    // return fetch(`https://dummyapi.io/data/v1/user?page=${page}&limit=10`, {
    headers: {
      "app-id": "65259d8be7ba55716e5b2d4d",
    },
  })
    .then(async (res) => {
      if (!res.ok) {
        console.error("Error en la petición:", res.status, res.statusText);
        throw new Error("Error en la petición");
      }
      return (await res.json()) as getPostAllQuery;
    })
    .catch((error) => {
      console.error("Error en la función getPosts:", error);
      throw error;
    });
}

export function getPostById({ id }: { id: IdType }) {
  console.log("Get Post by Id", id && id);
  console.log("Id from getPostsById: ", id);
  return fetch(`https://dummyapi.io/data/v1/post/${id}`, {
    headers: {
      "app-id": "65259d8be7ba55716e5b2d4d",
    },
  })
    .then(async (res) => {
      if (!res.ok) {
        console.error("Error en la petición:", res.status, res.statusText);
        throw new Error("Error en la petición");
      }
      return (await res.json()) as TypePosts;
    })
    .catch((error) => {
      console.error("Error en la función getPosts:", error);
      throw error;
    });
}

export async function createPost( {values} : { values: CreateType }) {
  console.log("values: ", values)
  const apiKey = "65259d8be7ba55716e5b2d4d";
  const apiUrl = "https://dummyapi.io/data/v1";
  const endpoint = "/post/create";

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "app-id": apiKey,
    },
    body: JSON.stringify(values),
  };
  return fetch(apiUrl + endpoint, requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error al crear el post");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Post creado exitosamente:", data);
      return data as TypePosts;
    })
    .catch((error) => {
      console.error("Error al crear el post:", error);
    });
}
