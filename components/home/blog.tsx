import { Link } from "@heroui/react";
import NextLink from "next/link";
import { Icon } from "@iconify/react/dist/offline";
import arrowRightIcon from "@iconify/icons-solar/arrow-right-linear";
import { allBlogPosts } from "contentlayer2/generated";
import { compareDesc } from "date-fns";

import { BlogPostList } from "@/components/blog-post";
import { __DEV__, __PREVIEW__ } from "@/utils";

const isDraftVisible = __DEV__ || __PREVIEW__;

const AnchorIcon = () => {
  return (
    <Icon
      aria-hidden="true"
      className="outline-none transition-transform group-hover:translate-x-0.5 [&>path]:stroke-[2px]"
      icon={arrowRightIcon}
      width={16}
    />
  );
};

export default function Blog() {
  let posts = allBlogPosts
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
    ?.filter((post) => {
      if (post.draft && !isDraftVisible) {
        return false;
      }

      return true;
    });
  posts = posts.slice(0, 3);
  return (
    <div className="w-full lg:px-16 mt-12">
      <div className="text-center">
        <h1 className="mb-2 font-bold text-4xl">最新博客</h1>
        <Link
          as={NextLink}
          className="font-semibold"
          href="/blog"
          size="lg"
          underline="hover"
          color="primary"
          isBlock
          showAnchorIcon
          anchorIcon={<AnchorIcon />}
        >
          更多
        </Link>
      </div>
      <BlogPostList posts={posts} />
    </div>
  );
}
