import { visit } from 'unist-util-visit';
import { h } from 'hastscript';

export function rehypeWrapImagesWithLink() {
  return (tree) => {
    visit(tree, 'element', (node, index, parent) => {
      if (node.tagName === 'img' && parent && parent.tagName !== 'a') {
        // imgタグが既にaタグでラップされていない場合のみ処理
        const originalSrc = node.properties.src;
        if (originalSrc) {
          const linkNode = h('a', { href: originalSrc, dataLightbox: 'blog-images' }, [node]);
          parent.children.splice(index, 1, linkNode);
        }
      }
    });
  };
}
