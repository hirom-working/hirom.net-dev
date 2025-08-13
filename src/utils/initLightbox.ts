import SimpleLightbox from 'simple-lightbox';
import 'simple-lightbox/dist/simple-lightbox.min.css'; // simple-lightboxのCSSをインポート

export function initLightbox() {
  // Markdownで表示される画像（article img）を対象とする
  // simple-lightboxは通常 <a> タグの href を参照するため、
  // JavaScriptで動的に <a> タグを生成して画像をラップする
  const images = document.querySelectorAll('article img');
  images.forEach(img => {
    const parent = img.parentNode;
    if (parent && parent.nodeName !== 'A') { // 既に<a>タグでラップされていない場合のみ
      const a = document.createElement('a');
      a.href = img.src; // 元画像のURLをhrefに設定
      a.dataset.lightbox = 'blog-images'; // グループ化
      parent.insertBefore(a, img);
      a.appendChild(img);
    }
  });

  // Lightboxの初期化
  new SimpleLightbox('article a[data-lightbox="blog-images"]', {
    captionsData: 'alt', // alt属性をキャプションとして使用
  });
}
