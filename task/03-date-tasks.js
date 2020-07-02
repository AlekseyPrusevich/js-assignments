'use strict';

/********************************************************************************************
 *                                                                                          *
 * Plese read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates#Date_object
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date    *
 *                                                                                          *
 ********************************************************************************************/


/**
 * Parses a rfc2822 string date representation into date value
 * For rfc2822 date specification refer to : http://tools.ietf.org/html/rfc2822#page-14
 *
 * @param {string} value
 * @return {date}
 *
 * @example:
 *    'December 17, 1995 03:24:00'    => Date()
 *    'Tue, 26 Jan 2016 13:48:02 GMT' => Date()
 *    'Sun, 17 May 1998 03:00:00 GMT+01' => Date()
 */
function parseDataFromRfc2822(value) {
   return Date.parse(value);

   //throw new Error('Not implemented');
}

/**
 * Parses an ISO 8601 string date representation into date value
 * For ISO 8601 date specification refer to : https://en.wikipedia.org/wiki/ISO_8601
 *
 * @param {string} value
 * @return {date}
 *
 * @example :
 *    '2016-01-19T16:07:37+00:00'    => Date()
 *    '2016-01-19T08:07:37Z' => Date()
 */
function parseDataFromIso8601(value) {
   return Date.parse(value);

   //throw new Error('Not implemented');
}


/**
 * Returns true if specified date is leap year and false otherwise
 * Please find algorithm here: https://en.wikipedia.org/wiki/Leap_year#Algorithm
 *
 * @param {date} date
 * @return {bool}
 *
 * @example :
 *    Date(1900,1,1)    => false
 *    Date(2000,1,1)    => true
 *    Date(2001,1,1)    => false
 *    Date(2012,1,1)    => true
 *    Date(2015,1,1)    => false
 */
function isLeapYear(date) {
   let year = date.getFullYear();

   return (+year % 4 != 0) ? false :
          (+year % 100 != 0) ? true :
          (+year % 400 != 0) ? false : true;

   //throw new Error('Not implemented');
}


/**
 * Returns the string represention of the timespan between two dates.
 * The format of output string is "HH:mm:ss.sss"
 *
 * @param {date} startDate
 * @param {date} endDate
 * @return {string}
 *
 * @example:
 *    Date(2000,1,1,10,0,0),  Date(2000,1,1,11,0,0)   => "01:00:00.000"
 *    Date(2000,1,1,10,0,0),  Date(2000,1,1,10,30,0)       => "00:30:00.000"
 *    Date(2000,1,1,10,0,0),  Date(2000,1,1,10,0,20)        => "00:00:20.000"
 *    Date(2000,1,1,10,0,0),  Date(2000,1,1,10,0,0,250)     => "00:00:00.250"
 *    Date(2000,1,1,10,0,0),  Date(2000,1,1,15,20,10,453)   => "05:20:10.453"
 */
function timeSpanToString(startDate, endDate) {

   let dateDif = endDate - startDate;
   let date = new Date();

   let hour = Math.floor(dateDif / 3.6e6);
   let min = Math.floor((dateDif - hour * 3.6e6) / 6e4);
   let sec = Math.floor((dateDif - hour * 3.6e6 - min * 6e4) / 1e3);
   let ms = dateDif - hour * 3.6e6 - min * 6e4 - sec * 1e3;
/*
   date.setHours(Math.floor(dateDif / 3.6e6));
   date.setMinutes(Math.floor((dateDif % 3.6e6) / 6e4));
   date.setSegeconds(Math.floor((dateDif % 3.6e6 % 6e4) / 1e3));
   date.setMilliseconds(dateDif % 3.6e6 % 6e4 % 1e3);
*/
   return ('0' + hour).slice(-2) + ':' + ('0' + min).slice(-2) + ':' + ('0' + sec).slice(-2) + '.' + (ms + '00').slice(0, 3);
}


/**
 * Returns the angle (in radians) between the hands of an analog clock for the specified Greenwich time.
 * If you have problem with solution please read: https://en.wikipedia.org/wiki/Clock_angle_problem
 * 
 * @param {date} date
 * @return {number}
 *
 * @example:
 * 
 *    Date.UTC(2016,2,5, 0, 0) => 0
 *    Date.UTC(2016,3,5, 3, 0) => Math.PI/2
 *    Date.UTC(2016,3,5,18, 0) => Math.PI
 *    Date.UTC(2016,3,5,21, 0) => Math.PI/2
 */
function angleBetweenClockHands(date) {

   /*
   let minuteDegree = 0;
   let hourDegree = 0;

   let newDate = new Date(date);

   minuteDegree = newDate.getUTCMinutes () * (360 / 60);
   minuteDegree != 0 ? hourDegree = newDate.getUTCHours() * (360 / 12) + ((360 / 12) / (60 / minuteDegree)) : hourDegree = newDate.getUTCHours() * (360 / 12);

   return Math.sin(Math.abs(minuteDegree - hourDegree));
   */
   /*
   let degree = 0.5 * (60 * date.getUTCHours() - 11 *  date.getUTCHours());
   let totalDegree = degree > 180 ? 360 - degree : degree;
   return Math.PI/180 * totalDegree;
   */
   throw new Error('Not implemented');
}



module.exports = {
    parseDataFromRfc2822: parseDataFromRfc2822,
    parseDataFromIso8601: parseDataFromIso8601,
    isLeapYear: isLeapYear,
    timeSpanToString: timeSpanToString,
    angleBetweenClockHands: angleBetweenClockHands
};
