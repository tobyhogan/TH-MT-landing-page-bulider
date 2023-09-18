import type { Photos } from "unsplash-js/dist/methods/search/types/response";
import type { Orientation } from "unsplash-js";
import supabase from "@/supabaseClient";

export async function searchPhotos(query: string, page?: number, orientation?: Orientation): Promise<Photos> {
    const { data, error } = await supabase.rpc("search_images", {
        filter: query,
        page: page || 1,
        orientation: orientation
    }).single();

    if (error) {
        console.error(error);
        throw error;
    }

    // This is the correct type
    const photos = data as unknown as Photos;

    if (photos.results.length === 0) {
        alert("No images for " + query + " found");
    }

    return photos;
}