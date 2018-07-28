'use strict';

/* eslint-env node */
/* global console */

const exec = require( './exec' );

module.exports = {
	commit() {
		exec( 'git add log.out log.err' );
		exec( 'git commit -m "Status."' );
	},

	forcePush() {
		exec( 'git push --force origin status' );
	},

	getCurrentBranch() {
		return exec( 'git rev-parse --abbrev-ref HEAD' ).trim();
	}
};
