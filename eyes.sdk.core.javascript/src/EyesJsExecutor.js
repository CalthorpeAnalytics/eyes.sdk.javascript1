'use strict';

/**
 * An interface for JsExecutors
 *
 * @interface
 */
class EyesJsExecutor {

    /**
     * Schedules a command to execute JavaScript in the context of the currently
     * selected frame or window. The script fragment will be executed as the body
     * of an anonymous function. If the script is provided as a function object,
     * that function will be converted to a string for injection into the target
     * window.
     *
     * @param {!(string|Function)} script The script to execute.
     * @param {...*} var_args The arguments to pass to the script.
     * @return {Promise.<T>} A promise that will resolve to the scripts return value.
     * @template T
     */
    executeScript(script, ...var_args) {}

    /**
     * Schedules a command to make the driver sleep for the given amount of time.
     *
     * @param {number} ms The amount of time, in milliseconds, to sleep.
     * @return {!Promise} A promise that will be resolved when the sleep has finished.
     */
    sleep(ms) {}

    /**
     * @return {PromiseFactory}
     */
    getPromiseFactory() {}
}

module.exports = EyesJsExecutor;
