'use strict';

/* eslint-env node */
/* global console */

const isRPI = require( 'os' ).hostname() == 'raspberrypi';
const rpio = require( 'rpio' );

if ( isRPI ) {
	rpio.open( 12, rpio.OUTPUT, rpio.LOW );
}

module.exports = {
	start() {
		if ( !isRPI ) {
			console.log( '[DEBUG] WOOTERER STARTED' );
			return;
		}

		rpio.write( 12, rpio.HIGH );
	},

	stop() {
		if ( !isRPI ) {
			console.log( '[DEBUG] WOOTERER STOPED' );
			return;
		}

		rpio.write( 12, rpio.LOW );
	}
};
