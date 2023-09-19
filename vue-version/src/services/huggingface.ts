import { HfInference } from "@huggingface/inference";

const inference = new HfInference(import.meta.env.VITE_HUGGINGFACE_ACCESS_TOKEN);

export async function generateText(userInput: string) {
    const model = "google/flan-t5-xxl";
    const baseInput = "Generate a good copy paragraph for the about section of a landing page. it should be only a few lines, but catch the viewers attention. with the following input: ";
    const input = baseInput + userInput;

    return await inference.textGeneration(
        {
            inputs: input,
            model: model,
        }
    );
}
