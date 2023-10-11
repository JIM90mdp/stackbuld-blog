"use client";
import { IdType, TypePosts, getPostAllQuery, CreateType } from "../util/types";

export function getPosts() {
  return fetch(`https://dummyapi.io/data/v1/post`, {
    headers: {
      "app-id": "6525ebd5ddbe4364ccf70393",
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
      "app-id": "6525ebd5ddbe4364ccf70393",
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

export async function createPost({ values }: { values: CreateType }) {
  console.log("values: ", values);
  const apiKey = "6525ebd5ddbe4364ccf70393";
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
export async function deletePostById({ id }: { id: string }) {
  console.log("values: ", id);
  const apiKey = "6525ebd5ddbe4364ccf70393";
  const apiUrl = "https://dummyapi.io/data/v1";
  const endpoint = `/user/${id}`;

  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "app-id": apiKey,
    },
  };
  return fetch(apiUrl + endpoint, requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error al eliminar el post");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Post eliminado exitosamente:", data);
      return data;
    })
    .catch((error) => {
      console.error("Error al eliminar el post:", error);
    });
}
