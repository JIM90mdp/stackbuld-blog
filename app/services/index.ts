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
        console.error("Fetch error from getPosts", res.status, res.statusText);
        throw new Error("Error en la petición");
      }
      return (await res.json()) as getPostAllQuery;
    })
    .catch((error) => {
      console.error("Fetch error from getPosts:", error);
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
        console.error("Fetch error from getPostById", res.status, res.statusText);
        throw new Error("Fetch error from getPostById");
      }
      return (await res.json()) as TypePosts;
    })
    .catch((error) => {
      console.error("Fetch error from getPostById:", error);
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
        throw new Error("Fetch error from createPost");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Successfully Post created:", data);
      return data as TypePosts;
    })
    .catch((error) => {
      console.error("Fetch error from createPost:", error);
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
        throw new Error("Fetch error from deletePostById");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Successfully Post: ", data);
      return data;
    })
    .catch((error) => {
      console.error("Fetch error from deletePostById:", error);
    });
}

export async function getUserById({ id }: { id: string }) {
  console.log("values: ", id);
  const apiKey = "6525ebd5ddbe4364ccf70393";
  const apiUrl = "https://dummyapi.io/data/v1";
  const endpoint = `user/${id}/post`;

  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "app-id": apiKey,
    },
  };
  return fetch(apiUrl + endpoint, requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Fetch error from getUserById");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Successfully fetch to getUserById ", data);
      return data as TypePosts;
    })
    .catch((error) => {
      console.error("Fetch error from getUserById", error);
    });
}
