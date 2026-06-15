/**
 * Compresse une image et la convertit en chaîne Base64.
 * @param file Le fichier image à compresser.
 * @param maxWidth La largeur ou hauteur maximale de l'image compressée (par défaut 800).
 * @returns Une promesse qui résout avec la chaîne Base64 de l'image compressée.
 */
export const compressImageToBase64 = (file: File, maxWidth: number = 800): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target?.result as string;
      
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > maxWidth) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          }
        } else {
          if (height > maxWidth) {
            width = Math.round((width * maxWidth) / height);
            height = maxWidth;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        
        if (!ctx) {
          reject(new Error('Impossible d\'obtenir le contexte du canvas'));
          return;
        }
        
        ctx.drawImage(img, 0, 0, width, height);
        
        // Exporte en webp pour gagner de l'espace
        const dataUrl = canvas.toDataURL('image/webp', 0.8);
        resolve(dataUrl);
      };
      
      img.onerror = (err) => reject(err);
    };
    
    reader.onerror = (err) => reject(err);
  });
};
