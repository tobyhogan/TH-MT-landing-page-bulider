import { createApi } from "unsplash-js";
import type { ApiResponse } from "unsplash-js/dist/helpers/response";
import type { Photos } from "unsplash-js/dist/methods/search/types/response";
import supabase from "@/supabaseClient";

// on your node server
// const unsplash = createApi({
//     accessKey: import.meta.env.VITE_UNSPLASH_ACCESS_KEY,
//     // ...other fetch options
// });

// // in the browser
// const unsplashBrowserApi = createApi({
//   apiUrl: 'https://mywebsite.com/unsplash-proxy',
//   //...other fetch options
// });

export async function searchPhotos(query: string): Promise<Photos> {
    const { data, error } = await supabase.rpc("search_images", {
        filter: query,
    }).single();

    if (error) {
        console.error(error);
        throw error;
    }

    // This is the correct type
    const photos = data as unknown as Photos;

    return photos;
}
