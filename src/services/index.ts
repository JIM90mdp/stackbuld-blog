"use client";
import { IdType, TypePosts, getPostAllQuery } from "../util/types";

// export function getPosts({ page = 1}: { page: PageType }) {
export function getPosts() {
  // console.log("Get Posts page", page && page)
  return fetch(`https://dummyapi.io/data/v1/post`, {
    // return fetch(`https://dummyapi.io/data/v1/user?page=${page}&limit=10`, {
    headers: {
      "app-id": "6522d3514ba3c86cc33fce72",
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
      "app-id": "6522d3514ba3c86cc33fce72",
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

export function createPost() {
  const apiKey = "6522d3514ba3c86cc33fce72"; // Reemplaza con tu clave de API DummyAPI
  const apiUrl = "https://dummyapi.io/data/v1";
  const endpoint = "/post/create";

  const postData = {
    image: "https://img.dummyapi.io/photo-1500879747858-bb1845b61beb.jpg",
    likes: 242,
    tags: ["dog", "animal", "golden retriever"],
    text: "Dog in a forest at sunset dog in forest with sun r...",
    publishDate: "2020-05-22T22:27:12.912Z",
    owner: "60d0fe4f5311236168a109d4",
  };

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "app-id": apiKey,
    },
    body: JSON.stringify(postData),
  };

  fetch(apiUrl + endpoint, requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error al crear el post");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Post creado exitosamente:", data);
      return data;
    })
    .catch((error) => {
      console.error("Error al crear el post:", error);
    });
}
