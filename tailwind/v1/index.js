const backgroundImage = require('./background-image');
const boxShadow = require('./box-shadow');
const colors = require('./colors');
const fontSize = require('./font-size');
const fontFamily = require('./font-family');
const screens = require('./screens');
const spacings = require('./spacings');
const blur = require('./blur');

module.exports = {
  screens: screens,
  spacing: spacings,
  extend: {
    minWidth: spacings,
    maxWidth: spacings,
    minHeight: spacings,
    maxHeight: spacings,
    boxShadow,
    backgroundImage,
  },
  fontFamily: fontFamily,
  fontSize: fontSize,
  colors: colors,
  blur: blur,
};
