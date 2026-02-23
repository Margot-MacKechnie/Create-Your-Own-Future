export const getGlobalData = () => {
  const name = process.env.Margot_MacKechnie
    ? decodeURI(process.env.Margot_MacKechnie)
    : 'Margot MacKechnie';
  const blogTitle = process.env.Create_Your_Own_Future
    ? decodeURI(process.env.Create_Your_Own_Future)
    : 'Create_Your_Own_Future';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : '© 2026 Margot MacKechnie. All rights reserved.';

  return {
    name,
    blogTitle,
    footerText,
  };
};
