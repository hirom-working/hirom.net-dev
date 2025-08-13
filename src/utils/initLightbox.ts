import SimpleLightbox from 'simple-lightbox';
import 'simple-lightbox/dist/simple-lightbox.min.css';

export function initLightbox() {
  console.log('initLightbox function called.'); // デバッグ用ログ

  const images = document.querySelectorAll('article img');
  console.log('Found images:', images.length); // デバッグ用ログ

  images.forEach(img => {
    const parent = img.parentNode;
    if (parent && parent.nodeName !== 'A') {
      const a = document.createElement('a');
      a.href = img.src;
      a.dataset.lightbox = 'blog-images';
      parent.insertBefore(a, img);
      a.appendChild(img);
      console.log('Wrapped image with <a> tag:', img.src); // デバッグ用ログ
    } else if (parent && parent.nodeName === 'A') {
      // 既に<a>タグでラップされている場合、hrefとdata-lightboxを設定
      (parent as HTMLAnchorElement).href = img.src;
      (parent as HTMLAnchorElement).dataset.lightbox = 'blog-images';
      console.log('Updated existing <a> tag for image:', img.src); // デバッグ用ログ
    }
  });

  // Lightboxの初期化
  try {
    new SimpleLightbox('article a[data-lightbox="blog-images"]', {
      captionsData: 'alt',
    });
    console.log('SimpleLightbox initialized successfully.'); // デバッグ用ログ
  } catch (error) {
    console.error('Error initializing SimpleLightbox:', error); // エラーログ
  }
}