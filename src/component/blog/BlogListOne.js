import React from 'react';
import Link from 'next/link'
import { FaAngleRight } from "react-icons/fa";
import BlogData from "../../data/blog/BlogData.json";


const allBlogData = BlogData;

const BlogListOne = ({colSize, itemShow}) => {
    return (
        <>
            {allBlogData.slice(0, itemShow).map((data) => (
                <div className={`${colSize}`} key={data.id}>
                    <div className={`blog-list ${(data.id % 2  === 0) ? "border-start" : ""}`}>
                        <div className="post-thumbnail">
                            <Link href={`/blog-details/${data.id}`}>
                                <img src={`${process.env.PUBLIC_URL}/${data.thumb}`} alt="Blog Post" />
                            </Link>
                        </div>
                        <div className="post-content">
                            <h5 className="title">
                                <Link href={`/blog-details/${data.id}`}>
                                    {data.title}
                                </Link>
                            </h5>
                            <p>{data.excerpt}</p>
                            <Link href={`/blog-details/${data.id}`} className="more-btn">
                                Learn more <FaAngleRight />
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default BlogListOne;