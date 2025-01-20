import {DateTime}  from "luxon";

export function getInaugurationCountdown() {
const now = DateTime.now();
  
// Set to January 20th, 2029 at 12:00 PM Eastern Time
const inauguration = DateTime.fromObject(
  { 
    year: 2029, 
    month: 1, 
    day: 20, 
    hour: 12, 
    minute: 0, 
    second: 0 
  }, 
  { 
    zone: "America/New_York" 
  }
  );

  const diff = inauguration.diff(now, ['years', 'months', 'days', 'hours', 'minutes', 'seconds']);

  return `${Math.floor(diff.years)} years
${Math.floor(diff.months)} months
${Math.floor(diff.days)} days
${Math.floor(diff.hours)} hours
${Math.floor(diff.minutes)} minutes
${Math.floor(diff.seconds)} seconds`;
}

export function getYMD() {
const now = DateTime.now();
  
// Set to January 20th, 2029 at 12:00 PM Eastern Time
const inauguration = DateTime.fromObject(
  { 
    year: 2029, 
    month: 1, 
    day: 20, 
    hour: 12, 
    minute: 0, 
    second: 0 
  }, 
  { 
    zone: "America/New_York" 
  }
  );

  const diff = inauguration.diff(now, ['years', 'months', 'days', 'hours', 'minutes', 'seconds']);
  return {
    years: Math.floor(diff.years),
    months: Math.floor(diff.months),
    days: Math.floor(diff.days),
  };
}
