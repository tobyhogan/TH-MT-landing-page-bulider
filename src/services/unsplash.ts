import { createApi } from 'unsplash-js';

// on your node server
const unsplash = createApi({
  accessKey: import.meta.env.VITE_UNSPLASH_ACCESS_KEY,
  //...other fetch options
});

// // in the browser
// const unsplashBrowserApi = createApi({
//   apiUrl: 'https://mywebsite.com/unsplash-proxy',
//   //...other fetch options
// });

export async function searchPhotos(query: string) {
  return unsplash.search.getPhotos({ query });
}