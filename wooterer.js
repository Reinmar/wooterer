'use strict';

/* eslint-env node */
/* global console */

const isRPI = require( 'os' ).hostname() == 'raspberrypi.local';
const rpio = require( 'rpio' );

if ( isRPI ) {
	rpio.open( 18, rpio.OUTPUT, rpio.LOW );
}

module.exports = {
	start() {
		if ( !isRPI ) {
			console.log( '[DEBUG] WOOTERER STARTED' );
			return;
		}

		rpio.write( 18, rpio.HIGH );
	},

	stop() {
		if ( !isRPI ) {
			console.log( '[DEBUG] WOOTERER STOPED' );
			return;
		}

		rpio.write( 18, rpio.LOW );
	}
};
