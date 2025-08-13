import SimpleLightbox from 'simple-lightbox';
import 'simple-lightbox/dist/simple-lightbox.min.css';

let lightboxInitialized = false; // Lightboxが初期化済みかどうかのフラグ

export function initLightbox() {
  if (lightboxInitialized) {
    console.log('SimpleLightbox already initialized. Skipping re-initialization.');
    return;
  }

  console.log('initLightbox function called.');

  const images = document.querySelectorAll('article img');
  console.log('Found images:', images.length);

  images.forEach(img => {
    const parent = img.parentNode;
    if (parent && parent.nodeName !== 'A') {
      const a = document.createElement('a');
      a.href = img.src;
      a.dataset.lightbox = 'blog-images';
      parent.insertBefore(a, img);
      a.appendChild(img);
      console.log('Wrapped image with <a> tag:', img.src);
    } else if (parent && parent.nodeName === 'A') {
      // 既に<a>タグでラップされている場合、hrefとdata-lightboxを設定
      (parent as HTMLAnchorElement).href = img.src;
      (parent as HTMLAnchorElement).dataset.lightbox = 'blog-images';
      console.log('Updated existing <a> tag for image:', img.src);
    }
  });

  try {
    new SimpleLightbox('article a[data-lightbox="blog-images"]', {
      captionsData: 'alt',
    });
    console.log('SimpleLightbox initialized successfully.');
    lightboxInitialized = true; // 初期化成功フラグを立てる
  } catch (error) {
    console.error('Error initializing SimpleLightbox:', error);
  }
}
