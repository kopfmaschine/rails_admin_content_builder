// get image of position
function getImageOfPosition(position, e) {
  switch(position) {
    case 'left':
    case 'right':
      return e.image.left_or_right.url;

    case 'center':
      return e.image.center.url;
  }
}
