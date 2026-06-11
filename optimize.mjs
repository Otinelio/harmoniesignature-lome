import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const directories = ['src/images', 'public'];
const maxDimension = 1920;

async function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      await processDirectory(fullPath);
    } else if (file.match(/\.(jpg|jpeg|png)$/i)) {
      try {
        const metadata = await sharp(fullPath).metadata();
        const isLarge = metadata.width > maxDimension || metadata.height > maxDimension;
        
        // We will process if it's large or if its file size is > 500KB
        if (isLarge || stat.size > 500 * 1024) {
          console.log(`Processing ${fullPath} (Size: ${(stat.size / 1024 / 1024).toFixed(2)} MB)...`);
          
          const tempPath = fullPath + '.temp';
          
          let sharpInstance = sharp(fullPath);
          
          if (isLarge) {
            sharpInstance = sharpInstance.resize({
              width: maxDimension,
              height: maxDimension,
              fit: 'inside',
              withoutEnlargement: true
            });
          }

          if (file.match(/\.png$/i)) {
            sharpInstance = sharpInstance.png({ quality: 80, compressionLevel: 8 });
          } else {
            sharpInstance = sharpInstance.jpeg({ quality: 80, progressive: true });
          }
          
          await sharpInstance.toFile(tempPath);
          fs.renameSync(tempPath, fullPath);
          
          const newStat = fs.statSync(fullPath);
          console.log(` -> Optimized to ${(newStat.size / 1024 / 1024).toFixed(2)} MB`);
        }
      } catch (err) {
        console.error(`Error processing ${fullPath}:`, err);
      }
    }
  }
}

async function run() {
  for (const dir of directories) {
    if (fs.existsSync(dir)) {
      await processDirectory(dir);
    }
  }
  console.log('Optimization complete!');
}

run();
