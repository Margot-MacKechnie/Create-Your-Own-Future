export const getGlobalData = () => {
  const name = process.env.Create_Your_Own_Future
    ? decodeURI(process.env.Create_Your_Own_Future)
    : 'Margot MacKechnie';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'First Post';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : 'All rights reserved.';

  return {
    name,
    blogTitle,
    footerText,
  };
};
