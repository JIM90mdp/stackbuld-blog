'use client'
import React from 'react';
import Image from 'next/image';
// import FormatDate from '@/app/lib/formattedDate';
import { usePathname } from 'next/navigation';
import { useGetPostById } from '@/src/querys';



function FormatDate(dateString: string): string {
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

const Page = () => {
    const pathname = usePathname()
    const parts = pathname.split("/");
    const id = parts[parts.length - 1];

    const { data, isLoading, isError } = useGetPostById({ id })

    if (isLoading) return <div>Loading tasks...</div>
    if (isError || !data) return <div>There was an error, try again</div>


    return (
        data &&
        <div className="px-6 mx-auto py-9">
            <div className="max-w-md mx-auto bg-white rounded shadow-lg p-6 mb-4" key={data.id}>
                <p className="text-gray-600 text-sm mb-2">{FormatDate(data.publishDate)}</p>
                <Image
                    src={data.image}
                    alt={data.id}
                    width={200}
                    height={200}
                    priority={true}
                    className="mx-auto mb-4"
                />
                <p className="text-lg font-semibold text-gray-800 mb-2">{data.likes} Likes</p>
                <ul className="flex space-x-2">
                    {data.tags.map((tag: string) => (
                        <li key={tag} className="bg-blue-100 px-2 py-1 text-blue-600 rounded">
                            #{tag}
                        </li>
                    ))}
                </ul>
                <p className="text-gray-700 mt-4">{data.text}</p>
            </div>
            <div>

            </div>

        </div>
    );
};

export default Page;
