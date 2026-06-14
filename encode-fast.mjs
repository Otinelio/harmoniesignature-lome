import ffmpeg from 'fluent-ffmpeg';
import ffmpegStatic from 'ffmpeg-static';

ffmpeg.setFfmpegPath(ffmpegStatic);

console.log("Encoding 4K-like fast...");
ffmpeg('public/videoAccueil.mp4')
  .outputOptions([
    '-c:v libx264',
    '-crf 31',
    '-preset veryfast',
    '-vf scale=2560:1440:flags=lanczos,unsharp=5:5:1.2:5:5:0.0', // Upscale to 1440p (looks like 4K on most screens) and sharpen strongly
    '-an',
    '-movflags +faststart'
  ])
  .save('public/videoAccueil-4k.mp4')
  .on('end', () => console.log('Done MP4'))
  .on('error', console.error);
