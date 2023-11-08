export const sanizeContent = (content) =>
  content
    .replaceAll('&nbsp;', '')
    .replaceAll('<div>', '\n')
    .replaceAll('</div>', '')
    .replaceAll('<br>', '');
