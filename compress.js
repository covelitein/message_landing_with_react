import fs from 'fs'
import sharp from 'sharp'
import path from 'path'
import ttf2woff2 from 'ttf2woff2'

const inputDir = './src/assets/inputDir'
const outputDir = "./src/assets/outputDIr";
const targetWidth = 200; // Desired width in pixels
const targetHeight = 200; // Desired height in pixels

const ttfInputDir = './src/assets/Fonts'
const woffOutputDir = './src/assets/woffOutput'


// fs.readdir(ttfInputDir, (err, files) => {
//   if (err) {
//     console.error("Error reading input directory:", err);
//     return;
//   }

//   files.forEach((file) => {
//     const fontPath = path.join(ttfInputDir, file);

//     fs.readFile(fontPath, (err, fontBuffer) => {
//       if (err) {
//         console.error("Error reading font file:", err);
//         return;
//       }

//       const woff2Buffer = ttf2woff2(fontBuffer);
//       const outputFile = path.join(
//         woffOutputDir,
//         file.replace(".ttf", ".woff2")
//       );

//       fs.writeFile(outputFile, woff2Buffer, (err) => {
//         if (err) {
//           console.error("Error writing compressed font file:", err);
//           return;
//         }

//         console.log(`Successfully compressed ${file}`);
//       });
//     });
//   });
// });


fs.readdir(inputDir, (err, files) => {
  if (err) {
    console.error("Error reading input directory:", err);
    return;
  }

  files.forEach((file) => {
    const inputFile = path.join(inputDir, file);
    const outputFile = path.join(outputDir, file.replace(/\.[^.]+$/, ".webp"));

    sharp(inputFile)
      .resize(targetWidth, targetHeight, {
        fit: 'inside',
        withoutEnlargement: true,
      })
      .webp({ quality: 80 })
      .toFile(outputFile, (err) => {
        if (err) {
          console.error("Error compressing photo:", inputFile, err);
        } else {
          console.log("Compressed photo saved:", outputFile);
        }
      });
  });
});