const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const baseDir = 'C:/Users/Admin/Documents/sds/sds';
const mediaDir = path.join(baseDir, 'media');

if (!fs.existsSync(mediaDir)) {
  fs.mkdirSync(mediaDir, { recursive: true });
}

const htmlPath = path.join(baseDir, 'index.html');
const cssPath = path.join(baseDir, 'css', 'style.css');

let htmlContent = fs.readFileSync(htmlPath, 'utf8');
let cssContent = fs.readFileSync(cssPath, 'utf8');

const urlRegex = /(?:src|url)\s*=\s*['"]?(https?:\/\/[^'"\s\)]+)['"\s\)]?/gi;
let urlsToDownload = new Set();
let replacements = {};

// We know the video is already in media, so skip .mp4 just in case.
const excludeRegex = /\.mp4$/i;

function extractUrls(content) {
  let match;
  while ((match = urlRegex.exec(content)) !== null) {
      let url = match[1];
      if (!excludeRegex.test(url) && (url.includes('cdn-icons-gif.flaticon.com') || url.includes('safedriveservice.com') || url.includes('safedrivesds.com'))) {
        urlsToDownload.add(url);
      }
  }
}

extractUrls(htmlContent);
extractUrls(cssContent);

console.log(`Found ${urlsToDownload.size} unique URLs to download.`);

async function downloadFile(url) {
  return new Promise((resolve, reject) => {
    // Generate a safe local filename
    let filename = path.basename(new URL(url).pathname);
    if (!filename || filename === '/') {
       filename = 'downloaded_' + Date.now();
    }
    
    // Add extension if missing (for flaticon gifs etc)
    if (!path.extname(filename)) {
        if(url.includes('.gif')) filename += '.gif';
        else if(url.includes('.png')) filename += '.png';
        else if(url.includes('.jpg') || url.includes('.jpeg')) filename += '.jpg';
    }

    const localPath = path.join(mediaDir, filename);
    const client = url.startsWith('https') ? https : http;

    client.get(url, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        // Handle redirect
        resolve(downloadFile(response.headers.location));
        return;
      }
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to get '${url}' (${response.statusCode})`));
        return;
      }

      const file = fs.createWriteStream(localPath);
      response.pipe(file);
      file.on('finish', () => {
        file.close(() => resolve({ url, filename }));
      });
    }).on('error', (err) => {
      fs.unlink(localPath, () => {}); // Delete failed file
      reject(err);
    });
  });
}

(async function() {
    let successCount = 0;
    
    for (const url of urlsToDownload) {
       try {
           const { filename } = await downloadFile(url);
           replacements[url] = `media/${filename}`;
           console.log(`Downloaded: ${filename}`);
           successCount++;
       } catch (e) {
           console.error(`Error downloading ${url}:`, e.message);
       }
    }

    console.log(`Finished downloading ${successCount} files. Updating references...`);

    // Replace within contents
    for(const [originalUrl, relativePath] of Object.entries(replacements)) {
       // Escape special chars in URL for regex
       const escapedUrl = originalUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
       const regex = new RegExp(escapedUrl, 'g');
       htmlContent = htmlContent.replace(regex, relativePath);
       cssContent = cssContent.replace(regex, relativePath);
    }
    
    fs.writeFileSync(htmlPath, htmlContent, 'utf8');
    fs.writeFileSync(cssPath, cssContent, 'utf8');
    
    console.log("Updated index.html and style.css with local media paths.");
})();
