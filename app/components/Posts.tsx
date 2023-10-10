'use client'
import Link from "next/link"
import { useGetPosts } from "@/src/querys"



export default function Posts() {

    const { data, isLoading, isError } = useGetPosts()

    // const handleDelete = (id: string) => {};

    if (isLoading) return <div>Loading tasks...</div>
    if (isError || !data) return <div>There was an error, try again</div>



    return (
        <section className="mt-6 mx-auto max-w-2xl">
            <div>
                <h2 className="text-4xl font-bold text-gray-800 dark:text-white/90 mb-4">Blog</h2>
                <ul className="w-full space-y-4">
                    {data.data?.map((post) => (
                        <Link href={`/post/${post.id}`} key={post.id}>
                            <div className="bg-white dark:bg-gray-800 shadow-md p-4 rounded-lg transition duration-300 hover:shadow-xl">
                                <h1 className="text-2xl font-semibold text-blue-600 hover:underline">
                                    {post.owner.firstName}, {post.owner.lastName}
                                </h1>
                                <span className="text-gray-500">{post.publishDate}</span>
                                <p className="text-gray-700">{post.text}</p>
                                {/* <button className="prose prose-xl" onClick={handleDelete(post.id)}>Delete Post</button> */}
                            </div>
                        </Link>
                    ))}
                </ul>
            </div>

        </section>
    )
}