const mongoose = require('mongoose');

const linkShortenerSchema = mongoose.Schema(
  {
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    link: {
      type: String,
      required: true,
    },
    createdBy: {
      type: String,
      default: ' ',
    },
  },
  {
    timestamps: true,
  }
);


/**
 * @typedef LinkShortener
 */
const LinkShortener = mongoose.model('LinkShortener', linkShortenerSchema);

module.exports = LinkShortener;