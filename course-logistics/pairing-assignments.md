---
description: Batch 1 (Oct 2020 - Apr 2021)
---

# Pairing Assignments

## Batch 2 \(Jan-Jun 2021\)

| Formation ID | Pair 1 | Pair 2 |
| :--- | :--- | :--- |
| 0 | Ian, Michelle | Jerome, Zeph |
| 1 | Ian, Jerome | Michelle, Zeph |
| 2 | Ian, Zeph | Michelle, Jerome |

## Batch 3 \(Apr-Sep 2021\)

| Day | Pair 1 | Pair 2 | Pair 3 |
| :--- | :--- | :--- | :--- |
| Mon | Jo Porter | Sam Yiqing | Affe |
| Tue | Jo Sam | Porter Affe | Yiqing |
| Wed | Jo Yiqing | Sam Affe | Porter |
| Thu | Jo Affe | Porter Yiqing | Sam |
| Fri | Porter Sam | Yiqing Affe | Jo |

## Formation Calculation Code

Formation ID is determined by `(((weekNum - 1) * 5 + dayOfWeekNum) % 3) + 1`. `weekNum` is the week number of the course, i.e. 1-24. `dayOfWeekNum` is the day number corresponding to the day of week, i.e. 1-5.

```javascript
/* Based on: https://gist.github.com/dblock/1081513
 * For a given date, get the ISO week number
 *
 * Based on information at:
 *
 *    http://www.merlyn.demon.co.uk/weekcalc.htm#WNR
 *
 * Algorithm is to find nearest thursday, it's year
 * is the year of the week number. Then get weeks
 * between that date and the first day of that year.
 *
 * Note that dates in one year can be weeks of previous
 * or next year, overlap is up to 3 days.
 *
 * e.g. 2014/12/29 is Monday in week  1 of 2015
 *      2012/1/1   is Sunday in week 52 of 2011
 */
function getWeekNumber(d) {
    // Copy date so don't modify original
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    // Set to nearest Thursday: current date + 4 - current day number
    // Make Sunday's day number 7
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
    // Get first day of year
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
    // Calculate full weeks to nearest Thursday
    var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
    // Return array of year and week number
    return weekNo;
}

var formationCount = 3;

var daysInAWeek = 5; 

var ordinalDayOfWeek = new Date().getDay() + 1; // day of week - 1-7

var weekNum = getWeekNumber(new Date());

var formationNumber = ((weekNum * daysInAWeek + ordinalDayOfWeek) % formationCount);

console.log( formationNumber );
```

