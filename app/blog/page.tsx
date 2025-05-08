import {allBlogPosts} from "contentlayer2/generated";
import {compareDesc} from "date-fns";

import {BlogPostList} from "@/components/blog-post";
import {__DEV__, __PREVIEW__} from "@/utils";

const isDraftVisible = __DEV__ || __PREVIEW__;

export default function Blog() {
  const posts = allBlogPosts
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
    ?.filter((post) => {
      if (post.draft && !isDraftVisible) {
        return false;
      }

      return true;
    });

  return (
    <div className="w-full lg:px-16 mt-12">
      <div className="text-center">
        <h1 className="mb-2 font-bold text-4xl">博客</h1>
        <h5 className="text-default-500 text-lg">更多内容，等你来发现</h5>
      </div>
      <BlogPostList posts={posts} />
    </div>
  );
}
