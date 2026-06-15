import { supabase } from '../lib/supabase';

/**
 * Uploads an image to Supabase Storage and returns the public URL.
 * @param file The image file to upload.
 * @returns A promise that resolves with the public URL of the uploaded image.
 */
export const compressImageToBase64 = async (file: File): Promise<string> => {
  try {
    // Generate a unique filename
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
    const filePath = `${fileName}`;

    // Upload to Supabase Storage
    const { error: uploadError, data } = await supabase.storage
      .from('media')
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false
      });

    if (uploadError) {
      console.error('Upload Error:', uploadError);
      throw uploadError;
    }

    // Get public URL
    const { data: { publicUrl } } = supabase.storage
      .from('media')
      .getPublicUrl(filePath);

    return publicUrl;
  } catch (error) {
    console.error('Error uploading image to Supabase:', error);
    throw error;
  }
};
