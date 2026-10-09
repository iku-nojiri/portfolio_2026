import type { NewsPost } from "../types/NewsPost.type";
import { BlogPost } from "../types/BlogPost.type";
import { WorksPost } from "../types/WorksPost.type";
import { formatDate } from "@/app/libs/formatDate";
import { truncateText } from "./truncateText";

export const postDataAdapter = {
  newsPost: (post: NewsPost) => {
    return {
      slug: post.slug,
      category: post._embedded["wp:term"][0][0].name,
      date: formatDate(post.date),
      title: post.acf.title,
      img: post.acf.img,
      lead: truncateText(post.acf.text_01, 75),
      contents: [
        post.acf.text_01,
        post.acf.text_02,
        post.acf.text_03,
      ]
    };
  },
  blogPost: (post: BlogPost) => {
    return {
      category: post._embedded["wp:term"][0][0].name,
      date: formatDate(post.date),
      title: post.acf.title,
      lead: truncateText(post.acf.lead, 75),
      href: post.acf.url
    };
  },
  worksPost: (post: WorksPost) => {
    return {
      slug: post.slug,
      techStack: post._embedded["wp:term"][0].map((term) => term.name),
      date: formatDate(post.date),
      title: post.acf.title,
      category: post.acf.category,
      img: post.acf.img,
      lead: truncateText(post.acf.overview, 75),
      overview: post.acf.overview,
      approach: post.acf.approach,
      period: post.acf.period,
      role: post.acf.role,
      href: post.acf.url,
    };
  }
}