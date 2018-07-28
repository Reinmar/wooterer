'use strict';

/* eslint-env node */
/* global console */

const sh = require( 'shelljs' );

module.exports = function exec( command ) {
	sh.config.silent = true;

	const ret = sh.exec( command );

	if ( ret.code ) {
		if ( ret.stdout ) {
			console.error( ret.stdout );
		}

		if ( ret.stderr ) {
			console.error( ret.stderr );
		}

		return;
	}

	if ( ret.stderr ) {
		console.error( ret.stderr );
	}

	return ret.stdout;
};
