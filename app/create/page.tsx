'use client'
import React, { useState } from 'react'
import { useCreatePost } from '../querys';
import FormatDate from '../lib/formattedDate';
import Image from 'next/image';

const Page = () => {

    const [hiddenState, setHiddenState] = useState(true);
    const hiddenClass = hiddenState ? "hidden" : "";
    const handleButton = () => {
        setHiddenState(!hiddenState);
    };

    const [postForm, setPostForm] = useState({
        image: "",
        likes: 1,
        tags: ["asd", "asdd"],
        text: "",
        publishDate: "",
        owner: "",
    });

    const handleClearPost = () => {
        setPostForm({
            image: "",
            likes: 1,
            tags: ["asd", "asdd"],
            text: "",
            publishDate: "",
            owner: "",
        });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPostForm((postForm) => ({
            ...postForm,
            [e.target.name]: e.target.value,
        }));
    };

    const createPost = useCreatePost()

    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        const values = postForm
        createPost.mutate({values})
        handleClearPost()
    };

    return (
        <div>
            {createPost.data ? (
                <div className="max-w-md mx-auto bg-white rounded shadow-lg p-6 mb-4" key={createPost.data.id}>
                    <p className="text-gray-600 text-sm mb-2">{FormatDate(createPost.data.publishDate)}</p>
                    <Image
                        src={createPost.data.image}
                        alt={createPost.data.id}
                        width={200}
                        height={200}
                        priority={true}
                        className="mx-auto mb-4"
                    />
                    <p className="text-lg font-semibold text-gray-800 mb-2">{createPost.data.likes} Likes</p>
                    <ul className="flex space-x-2">
                        {createPost.data.tags.map((tag: string) => (
                            <li key={tag} className="bg-blue-100 px-2 py-1 text-blue-600 rounded">
                                #{tag}
                            </li>
                        ))}
                    </ul>
                    <p className="text-gray-700 mt-4">{createPost.data.text}</p>
                </div>
            ) : ""}
            <div className="max-w-md mx-auto">
                <button onClick={handleButton} className="m-5">Create Post</button>
                <form
                    className={`px-4 py-6 bg-white shadow-md ${hiddenClass}`}
                    onSubmit={handleSubmit}
                >
                    <div
                        key="image"
                        style={{ marginBottom: "10px" }}
                    >
                        <label className="block mb-1 font-bold" htmlFor="image">
                            Image
                        </label>
                        <input
                            className=""
                            type="text"
                            value={postForm.image}
                            name="image"
                            autoComplete="off"
                            onChange={handleChange}
                        />
                    </div>
                    <div
                        key="likes"
                        style={{ marginBottom: "10px" }}
                    >
                        <label className="block mb-1 font-bold" htmlFor="likes">
                            likes:
                        </label>
                        <input
                            className="block w-full"
                            type="range"
                            min={1}
                            max={5}
                            step={1}
                            value={postForm.likes}
                            name="likes"
                            onChange={handleChange}
                        />
                        <div>{postForm.likes}</div>
                    </div>
                    <div
                        key="PublishDate"
                        style={{ marginBottom: "10px" }}
                    >
                        <label className="block mb-1 font-bold" htmlFor="publishDate">
                            PublishDate:
                        </label>
                        <input
                            className="border rounded w-full py-2 px-3 border-gray-300"
                            type="text"
                            value={postForm.publishDate}
                            name="publishDate"
                            autoComplete="off"
                            onChange={handleChange}

                        />
                    </div>
                    <div
                        key="text"
                        style={{ marginBottom: "10px" }}
                    >
                        <label className="block mb-1 font-bold" htmlFor="text">
                            text:
                        </label>
                        <input
                            value={postForm.text}
                            type="text"
                            name="text"
                            autoComplete="off"
                            onChange={handleChange}
                        >
                        </input>
                    </div>
                    <div
                        key="Owner"
                        style={{ marginBottom: "10px" }}
                    >
                        <label className="block mb-1 font-bold" htmlFor="owner">
                            Owner:
                        </label>
                        <input
                            className="border rounded w-full py-2 px-3 border-gray-300"
                            type="text"
                            name="owner"
                            value={postForm.owner}
                            autoComplete="off"
                            onChange={handleChange}
                        />
                    </div>{" "}
                    <div
                        key="Tags"
                        style={{ marginBottom: "10px" }}
                    >
                        <label className="block mb-1 font-bold" htmlFor="tags">
                            Tags:
                        </label>
                        <input
                            type="text"
                            name="tags"
                            value="input Tags"
                            autoComplete="off"
                            onChange={handleChange}
                        >

                        </input>

                    </div>

                    <div
                        className="flex justify-end"
                        key="Create"
                        style={{ marginBottom: "10px" }}
                    >
                        <button
                            className="text-black py-2 px-4 rounded mr-2 bg-firstBg  hover:bg-firstFT transition-colors"
                            type="submit"
                        >
                            Create
                        </button>
                        <button
                            className="bg-secBg hover:bg-firstFT text-black py-2 px-4 rounded"
                            type="button"
                            onClick={handleClearPost}
                        >
                            Clear
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Page