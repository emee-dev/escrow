import { UploadedFile } from "@/app/dispute/page";
import { clsx, type ClassValue } from "clsx";
import { Flame } from "lucide-react";
import { customAlphabet } from "nanoid";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Converts an image file to a Base64-encoded data URL.
 * @param file - The image file to be converted.
 * @returns A promise that resolves to a Base64-encoded string.
 */
export const encodeImageToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      const base64Image = reader.result as string;
      resolve(base64Image);
    };

    reader.onerror = (error) => {
      reject(new Error(`Error reading file: ${error}`));
    };

    reader.readAsDataURL(file); // Read the file as a data URL
  });
};

type ImagePrompt = {
  content: {
    imageUrl: { url: string; detail: string | null };
    type: "image_url";
  };
  role: "user";
};

/**
 * Converts an array of File objects to the specified mixtral image structure.
 * @param files - An array of image files to convert to base64 and transform.
 * @returns A promise that resolves to an object with the transformed structure.
 */
export const prepareImagePrompt = async (
  detail: string | null = null,
  files: UploadedFile[]
): Promise<ImagePrompt> => {
  // Encode each file to base64 and structure it accordingly
  const content = await Promise.all(
    files.map(async (file, index) => {
      return {
        imageUrl: {
          url: file.base64,
          detail: "", // Set default as undefined
        },
        type: "image_url",
      };
    })
  );

  // Modify the first and last items in content array
  if (content.length > 0) {
    content[0].imageUrl.detail = undefined as any;

    content[content.length - 1].imageUrl.detail = detail as string;
  }

  return {
    content: content[0] as ImagePrompt["content"],
    role: "user",
  };
};

const alphabet =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export const generateId = customAlphabet(alphabet, 8); // 16 can be any length you want
