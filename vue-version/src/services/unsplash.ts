import type { Photos } from "unsplash-js/dist/methods/search/types/response";
import supabase from "@/supabaseClient";

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
