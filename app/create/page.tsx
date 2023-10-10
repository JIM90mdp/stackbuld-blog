'use client'
import React, { useState } from 'react'
// import { createPost } from '@/src/services'


const Page = () => {


    const [errorState, setErrorState] = useState({
        error: false,
    });

    const [hiddenState, setHiddenState] = useState(true);
    const hiddenClass = hiddenState ? "hidden" : "";

    const [postForm, setPostForm] = useState({
        image: "",
        likes: 1,
        tags: ["asd","asdd"],
        text: "",
        publishDate: "",
        owner: "",
    });

    const handleButton = () => {
        setHiddenState(!hiddenState);
    };

    const handleClearPost = () => {
        setPostForm({
            image: "",
            likes: 1,
            tags: ["asd","asdd"],
            text: "",
            publishDate: "",
            owner: "",
        });
    };

    // const handleChange = (e) => {
    //     setPostForm({
    //         ...postForm,
    //         [e.target.name]: e.target.value,
    //     })
    // }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPostForm((postForm) => ({
            ...postForm,
            [e.target.name]: e.target.value,
        }));
    };

    // const createPost = useCreatePost();

    const handleSubmit = () => { 
        // createPost()
    };

    return (
        <div>
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