import getDimensions from '../dimensions';

const createImage = (img, alt) => {
  const {width, height} = getDimensions(img);

  return {
    type: 'embed',
    embedType: 'image',
    src: img.getAttribute('src'),
    caption: alt ? [{ content: alt, type: 'text' }] : null,
    width, height
  };
};

export default elm => {
  const tagName = elm.tagName.toLowerCase();

  if (tagName === 'figure') {
    const img = elm.getElementsByTagName('img')[0];

    if (img) {
      return createImage(img);
    }
  } else if (tagName === 'img') {
    return createImage(elm, elm.getAttribute('alt'));
  }

  return null;
};