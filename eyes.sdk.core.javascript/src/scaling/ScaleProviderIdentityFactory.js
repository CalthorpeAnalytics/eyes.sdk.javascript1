'use strict';

const ScaleProviderFactory = require('./ScaleProviderFactory');

/**
 * Factory implementation which simply returns the scale provider it is given as an argument.
 */
class ScaleProviderIdentityFactory extends ScaleProviderFactory {

    /**
     * @param {ScaleProvider} scaleProvider The {@link ScaleProvider}
     * @param {PropertyHandler} scaleProviderHandler A handler to update once a {@link ScaleProvider} instance is created.
     **/
    constructor(scaleProvider, scaleProviderHandler) {
        super(scaleProviderHandler);
        this._scaleProvider = scaleProvider;
    }

    /**
     * The implementation of getting/creating the scale provider, should be implemented by child classes.
     *
     * @param {int} imageToScaleWidth The width of the image to scale. This parameter CAN be by class implementing the factory, but this is not mandatory.
     * @return {ScaleProvider} The scale provider to be used.
     */
    getScaleProviderImpl(imageToScaleWidth) {
        return this._scaleProvider;
    }
}

module.exports = ScaleProviderIdentityFactory;
