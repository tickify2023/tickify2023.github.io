let baseUrl: string = process.env.APK_URL || "";

if (typeof window !== "undefined") {
  baseUrl = window.location.origin;
}

export default baseUrl;
