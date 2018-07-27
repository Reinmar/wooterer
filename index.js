'use strict';

/* eslint-env node */
/* global console */

const config = require( './config' );
const wooterer = require( './wooterer' );

scheduleNext();

function scheduleNext() {
	const nextWateringTime = findNextWateringTime();

	log( `Scheduled watering at ${ nextWateringTime.toLocaleString() }.` );

	const timeout = nextWateringTime.getTime() - Date.now();

	setTimeout( startWatering, timeout );
}

function startWatering() {
	log( 'Started watering...' );

	wooterer.start();

	setTimeout( finishWatering, minutesToMSeconds( config.wateringPeriod ) );
}

function finishWatering() {
	wooterer.stop();

	log( 'Finished watering.' );

	scheduleNext();
}

function minutesToMSeconds( minutes ) {
	return minutes * 60 * 1000;
}

function log( msg ) {
	console.log( `[${ new Date().toLocaleString() }] ${ msg }` );
}

function getTimeRelativeToToday( minutesOffset, dayOffset = 0 ) {
	const midnight = new Date();

	midnight.setHours( 0 );
	midnight.setMinutes( 0 );
	midnight.setSeconds( 0 );

	const shifted = new Date();

	shifted.setTime(
		midnight.getTime() +
		minutesToMSeconds( minutesOffset ) +
		minutesToMSeconds( dayOffset * 24 * 60 )
	);

	return shifted;
}

function findNextWateringTime( dayOffset = 0 ) {
	const now = new Date();

	const nextWateringHour = config.wateringHours.find( wateringHour => {
		return getTimeRelativeToToday( wateringHour, dayOffset ).getTime() - now.getTime() > 0;
	} );

	if ( nextWateringHour ) {
		return getTimeRelativeToToday( nextWateringHour, dayOffset );
	}

	return findNextWateringTime( dayOffset + 1 );
}
