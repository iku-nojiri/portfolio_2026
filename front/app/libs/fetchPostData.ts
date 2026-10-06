const config = {
  wpHost:
    process.env.NODE_ENV === "development" || process.env.NODE_ENV === "test"
      ? "http://localhost:8080"
      : "https://test.com",
  apiEntryPoint: "wp-json/wp/v2",
  param: "?_embed"
};

export async function fetchPostData(postType: string) {
  const url = [config.wpHost, config.apiEntryPoint, postType + config.param].join("/");

  const response = await fetch(url);

  if (!response.ok) throw new Error(`HTTP error / status: ${response.status}`);

  return response.json();
}