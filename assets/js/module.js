/**
 * @license MIT
 * @fileoverview All module functions
 * @copyright Yeswanth Sai Inturi 2024 All rights reserved
 * @author Yeswanth Sai Inturi <yeswanthsai.inturi@gmail.com>
 >
 */

"use strict";

export const weekDayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

/**
 *
 * @param {number} dataUnix Unix date in seconds
 * @param {number} timezone Timezone shift for UTC in seconds
 * @returns {string} Date String. formate: "Sunday 10, Jan"
 */

export const getData = function (dataUnix, timezone) {
  const date = new Date((dataUnix + timezone) * 1000);
  const weekDayName = weekDayNames[date.getUTCDay()];
  const monthName = monthNames[date.getUTCMonth()];

  return `${weekDayName} ${date.getUTCDate()}, ${monthName}`;
};

/**
 *
 * @param {number} timeUnix Unix date in seconds
 * @param {number} timezone TimeZone shift from UTC in sec
 * @returns {string} Time String. format: "HH AM/PM"
 */

export const getTime = function (timeUnix, timezone) {
  const date = new Date((timeUnix + timezone) * 1000);
  const hours = date.getUTCHours();
  const period = hours >= 12 ? "PM" : "AM";

  return `${hours % 12 || 12} ${period}`;
};

/**
 *
 * @param {number} mps Meter Per seconds
 * @returns {number} Kilometer per hours
 */
export const mpsToKmph = function (mps) {
  return (mps * 3.6).toFixed(2);
};
