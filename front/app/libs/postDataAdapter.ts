import type { NewsPost } from "../types/NewsPost.type";
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
}