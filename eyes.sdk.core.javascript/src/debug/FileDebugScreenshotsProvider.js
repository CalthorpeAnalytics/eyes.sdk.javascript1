'use strict';

const dateformat = require('dateformat');

const DebugScreenshotsProvider = require('./DebugScreenshotsProvider');

const DATE_FORMAT = "yyyy_mm_dd_HH_MM_ss_l";

/**
 * A debug screenshot provider for saving screenshots to file.
 */
class FileDebugScreenshotsProvider extends DebugScreenshotsProvider {

    /**
     * @param {MutableImage} image
     * @param {String} suffix
     * @return {Promise}
     */
    save(image, suffix) {
        const filename = this._path + this._prefix + this.getFormattedTimeStamp() + "_" + suffix + ".png";
        return image.save(filename.replace(' ', '_'));
    }

    // noinspection JSMethodCanBeStatic
    /**
     * @return {Promise}
     */
    getFormattedTimeStamp() {
        return dateformat(new Date(), DATE_FORMAT);
    }
}

module.exports = FileDebugScreenshotsProvider;
