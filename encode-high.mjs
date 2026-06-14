import ffmpeg from 'fluent-ffmpeg';
import ffmpegStatic from 'ffmpeg-static';

ffmpeg.setFfmpegPath(ffmpegStatic);

const input = 'public/videoAccueil.mp4';
const outputMp4 = 'public/videoAccueil-high.mp4';
const outputWebm = 'public/videoAccueil-high.webm';

console.log('Starting MP4 encode...');
ffmpeg(input)
  .outputOptions([
    '-c:v libx264',
    '-crf 26',           
    '-preset fast',      
    '-vf scale=1920:1080:flags=lanczos,unsharp=5:5:1.0:5:5:0.0', // Upscale to 1080p and apply sharpening
    '-an',
    '-movflags +faststart'
  ])
  .save(outputMp4)
  .on('end', () => {
      console.log('Done MP4');
      // Encode WEBM for even better compression/quality ratio
      console.log('Starting WEBM encode...');
      ffmpeg(input)
        .outputOptions([
          '-c:v libvpx-vp9',
          '-crf 35',
          '-b:v 0',
          '-deadline realtime',
          '-cpu-used 4',
          '-vf scale=1920:1080:flags=lanczos,unsharp=5:5:1.0:5:5:0.0',
          '-an'
        ])
        .save(outputWebm)
        .on('end', () => console.log('Done WEBM'))
        .on('error', console.error);
  })
  .on('error', console.error);
