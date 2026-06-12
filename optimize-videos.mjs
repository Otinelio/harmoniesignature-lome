import fs from 'fs';
import path from 'path';
import ffmpeg from 'fluent-ffmpeg';
import ffmpegStatic from 'ffmpeg-static';

ffmpeg.setFfmpegPath(ffmpegStatic);

const videos = [
  'src/images/spa/spaDeo/SpaDeo1.mp4',
  'src/images/spa/spaDeo/SpaDeo2.mp4',
  'src/images/spa/spaDeo/SpaDeo3.mp4'
];

async function processVideo(videoPath) {
  const dir = path.dirname(videoPath);
  const ext = path.extname(videoPath);
  const baseName = path.basename(videoPath, ext);
  
  const posterPath = path.join(dir, `${baseName}-poster.jpg`);
  const tempVideoPath = path.join(dir, `${baseName}-temp.mp4`);

  console.log(`Processing ${videoPath}...`);

  // 1. Extract Poster
  await new Promise((resolve, reject) => {
    ffmpeg(videoPath)
      .screenshots({
        timestamps: [0.5],
        filename: `${baseName}-poster.jpg`,
        folder: dir,
        size: '640x?'
      })
      .on('end', resolve)
      .on('error', reject);
  });
  console.log(`Created poster: ${posterPath}`);

  // 2. Compress Video
  await new Promise((resolve, reject) => {
    ffmpeg(videoPath)
      .outputOptions([
        '-vcodec libx264',
        '-crf 28',        // Good balance between quality and size
        '-preset fast',   // Faster encoding
        '-vf scale=-2:480', // Scale to 480p height, preserving aspect ratio
        '-an',            // Remove audio (it's muted anyway)
        '-movflags +faststart' // Optimize for web playback
      ])
      .save(tempVideoPath)
      .on('end', () => {
        // Replace original with compressed
        fs.renameSync(tempVideoPath, videoPath);
        resolve();
      })
      .on('error', reject);
  });
  console.log(`Compressed video: ${videoPath}`);
}

async function run() {
  for (const video of videos) {
    if (fs.existsSync(video)) {
      try {
        await processVideo(video);
      } catch (err) {
        console.error(`Error processing ${video}:`, err);
      }
    } else {
      console.log(`File not found: ${video}`);
    }
  }
  console.log('Video optimization complete!');
}

run();
