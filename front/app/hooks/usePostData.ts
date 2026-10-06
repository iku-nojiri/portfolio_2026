import { useEffect, useState } from "react";
import { fetchPostData } from "@/app/libs/fetchPostData";

export function usePostData<T>(postType: string) {
  const [data, setData] = useState<T[] | null>(null);

  useEffect(() => {

    (async ()=>{
      const json = await fetchPostData(postType);
      setData(json);
    })()

  }, [postType]);

  console.log(data)

  return data;
}