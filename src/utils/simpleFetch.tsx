import baseUrl from "./baseUrl";

export const staticFetch = async (route: string) => {
  try {
    const data = await fetch(route);
    return await data.json();
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const ssrFetch = async (route: string) => {
  try {
    const data = await fetch(route, { cache: "no-store" });
    return await data.json();
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const isrFetch = async (route: string, time: number) => {
  try {
    const data = await fetch(route, { next: { revalidate: time } });
    return await data.json();
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const simpleFetch = async (
  route: string,
  type: string = "static",
  time: any = ""
) => {
  const url: string = `${baseUrl}/api/${route}`;
  if (type === "static") {
    return await staticFetch(url);
  } else if (type === "ssr") {
    return await ssrFetch(url);
  } else if (type === "isr") {
    return await isrFetch(url, time);
  } else {
    return await staticFetch(url);
  }
};

export const simplePost = async (route: string, body: any) => {
  const url: string = `${baseUrl}/api/${route}`;
  try {
    const data = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      cache: "no-store",
    });
    return await data.json();
  } catch (error) {
    console.log(error);
  }
};

export const simplePut = async (route: string, body: any) => {
  const url: string = `${baseUrl}/api/${route}`;
  try {
    const data = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      cache: "no-store",
    });
    return await data.json();
  } catch (error) {
    console.log(error);
  }
};

export const simpleDelete = async (route: string) => {
  const url: string = `${baseUrl}/api/${route}`;
  try {
    const data = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });
    return await data.json();
  } catch (error) {
    console.log(error);
  }
};

export default simpleFetch;
