import { visit } from 'unist-util-visit';
import { h } from 'hastscript';

export function rehypeWrapImagesWithLink() {
  return (tree) => {
    console.log('rehypeWrapImagesWithLink plugin started.'); // デバッグ用ログ
    visit(tree, 'element', (node, index, parent) => {
      if (node.tagName === 'img') {
        console.log('Found img tag:', node.properties.src); // デバッグ用ログ
        if (parent && parent.tagName !== 'a') {
          const originalSrc = node.properties.src;
          if (originalSrc) {
            const linkNode = h('a', { href: originalSrc, dataLightbox: 'blog-images' }, [node]);
            parent.children.splice(index, 1, linkNode);
            console.log('Wrapped img tag with <a>:', originalSrc); // デバッグ用ログ
          }
        } else {
          console.log('Img tag already wrapped or no parent:', node.properties.src); // デバッグ用ログ
        }
      }
    });
    console.log('rehypeWrapImagesWithLink plugin finished.'); // デバッグ用ログ
  };
}