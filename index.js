/**
 * @file mofron-layout-dev/index.js
 * @brief layout module template for developper
 * @license MIT
 */
module.exports = class extends mofron.class.Layout {
    /**
     * initialize layout
     * 
     * @param (mixed) 
     *                key-value: layout config
     * @short
     * @type private
     */
    constructor (p1) {
        try {
            super();
            this.name('xxx');  // please set module name
	    this.shortForm();  // please set short form parameter name

	    /* init config */

	    if (0 < arguments.length) {
                this.config(p1);
	    }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * layout contents
     * 
     * @param (number) target child index
     * @param (component) target component object
     * @type private
     */
    contents (idx, cmp) {
        try {
	    /* layout contents */
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
