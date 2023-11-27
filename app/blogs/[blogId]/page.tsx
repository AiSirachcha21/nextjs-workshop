// import { roboto_mono } from '@/app/layout';
import { getBlog } from '@/lib/api';
import { NextComponentPropsWithParams } from '@/types/next';
import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import blogImg from '../../../public/images/blog.jpg';
import blogClasses from './page.module.css';

type BlogPageParams = {
  blogId: string;
};

type BlogPageProps = NextComponentPropsWithParams<BlogPageParams>;

/**
 * `[blogId]` as the __folder name__ provides a params `object` with `blogId` as a key
 */

export default async function BlogPage({ params, searchParams }: BlogPageProps) {
  const blog = await getBlog(params.blogId);

  if (!blog) {
    notFound();
  }

  return (
    <section className="my-8 flex flex-col gap-4">
      <Link href="/blogs" className="text-link with-icon">
        <ion-icon name="arrow-back-outline"></ion-icon>
        <p>Back to blogs</p>
      </Link>
      <h1 className=" font-mono">{blog?.title}</h1>
      <div className="flex gap-2">
        <img src={blog.author.profilePictureUrl} alt="profilePictureUrl" className="w-12 aspect-square rounded-full" />
        <div>
          <p>Article by</p>
          <p>{blog.author.name}</p>
        </div>
      </div>
      {/* <img src="/images/blog.jpg" /> */}
      <Image src={blogImg} alt="blogImage" sizes="100vw" />

      <p className="font-inter">{blog?.description}</p>
      <p className={blogClasses.content} dangerouslySetInnerHTML={{ __html: blog.content }}></p>
      <div>
        <div className="bg-neutral-100 w-full p-4">
          <p className="text-sm">About the post</p>
          <p>
            Created at {dayjs(blog.createdAt).format('DD MMMM YYYY')} (approx. {dayjs(blog.createdAt).from(dayjs())})
          </p>
        </div>
      </div>
    </section>
  );
}

// export async function generateStaticParams() {
//   const blogs = await getBlogs();

//   if (blogs?.length) {
//     return blogs.map((blog, idx) => {
//       if (idx < 3) {
//         return {
//           blogId: blog.id
//         };
//       }

//       return undefined;
//     });
//   }

//   return [];
// }
