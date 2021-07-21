---
description: Batch 1 (Oct 2020 - Apr 2021)
---

# Pairing Assignments

## Batch 3 \(Apr-Sep 2021\)

| Day | Pair 1 | Pair 2 | Pair 3 |
| :--- | :--- | :--- | :--- |
| Mon | Jo Porter | Sam Yiqing | Effy |
| Tue | Jo Sam | Porter Effy | Yiqing |
| Wed | Jo Yiqing | Sam Effy | Porter |
| Thu | Jo Effy | Porter Yiqing | Sam |
| Fri | Porter Sam | Yiqing Effy | Jo |

## Batch 4

1. Chuan Xin, Jia En

   Hazel, Justin

   Martin, Shen Nan

   Tinaesh, Tong Huat

   Vincent

2. Jia En, Hazel

   Justin, Martin

   Shen Nan, Tinaesh

   Tong Huat, Vincent

   Chuan Xin

3. Hazel, Justin

   Martin, Shen Nan

   Tinaesh, Tong Huat

   Vincent, Chuan Xin

   Jia En

4. Justin, Martin

   Shen Nan, Tinaesh

   Tong Huat, Vincent

   Chuan Xin, Jia En

   Hazel

5. Martin, Shen Nan

   Tinaesh, Tong Huat

   Vincent, Chuan Xin

   Jia En, Hazel

   Justin

   Shen Nan, Tinaesh

   Tong Huat, Vincent

   Chuan Xin, Jia En

   Hazel, Justin

   Martin

6. Tinaesh, Tong Huat

   Vincent, Chuan Xin

   Jia En, Hazel

   Justin, Martin

   Shen Nan

7. Tong Huat, Vincent

   Chuan Xin, Jia En

   Hazel, Justin

   Martin, Shen Nan

   Tinaesh

8. Vincent, Chuan Xin

   Jia En, Hazel

   Justin, Martin

   Shen Nan, Tinaesh

   Tong Huat

   \*\*\*\*

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

var formationCount = 8;

var daysInAWeek = 5; 

var ordinalDayOfWeek = new Date().getDay() + 1; // day of week - 1-7

var weekNum = getWeekNumber(new Date());

var formationNumber = ((weekNum * daysInAWeek + ordinalDayOfWeek) % formationCount);

console.log( formationNumber );
```

```javascript
//let people = ["kai"];
let results = [];

let arranged = [...people]; 
for (let i = 0; i < people.length; i++) {
  const set = [];
  for (let j = 0; j < people.length; j+=2) {
    set.push([arranged[j],arranged[j+1]]);
  }
  const rest = arranged.splice(1);
  arranged = [...rest, ...arranged];
  results.push(set)
}

results.forEach(day => {
  day.forEach(set=>console.log(set.join(', ')));
  console.log(' ');
});
```

