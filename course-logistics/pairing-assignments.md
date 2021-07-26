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

**1.**

**Chuan Xin, Jia En**

**Justin, Martin**

**Shen Nan, Tinaes**

**Tong Huat, Vincent**

**2.**

**Justin, Martin**

**Shen Nan, Tinaes**

**Tong Huat, Vincent**

**Chuan Xin, Jia En**

**3.**

**Martin, Shen Nan**

**Tinaes, Tong Huat**

**Vincent, Chuan Xin**

**Jia En, Justin**

**4.**

**Shen Nan, Tinaes**

**Tong Huat, Vincent**

**Chuan Xin, Jia En**

**Justin, Martin**

**5.**

**Tinaes, Tong Huat**

**Vincent, Chuan Xin**

**Jia En, Justin**

**Martin, Shen Nan**

**6.**

**Tong Huat, Vincent**

**Chuan Xin, Jia En**

**Justin, Martin**

**Shen Nan, Tinaes**  


**7.**

**Vincent, Chuan Xin**

**Jia En, Justin**

**Martin, Shen Nan**

**Tinaes, Tong Huat**

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
const studentNames = ['kai','iak'];

const DUMMY = -1;
// returns an array of round representations (array of player pairs).
// http://en.wikipedia.org/wiki/Round-robin_tournament#Scheduling_algorithm
function permutate(n, ps) { // n = num players
	const rs = []; // rs = round array
	if (!ps) {
		ps = [];
		for (let k = 1; k <= n; k += 1) {
			ps.push(k);
		}
	} else {
		ps = ps.slice();
	}
	if (n % 2 === 1) {
		ps.push(DUMMY); // so we can match algorithm for even numbers
		n += 1;
	}
	for (let j = 0; j < n - 1; j += 1) {
		rs[j] = []; // create inner match array for round j
		for (let i = 0; i < n / 2; i += 1) {
			const o = n - 1 - i;
			if (ps[i] !== DUMMY && ps[o] !== DUMMY) {
			// flip orders to ensure everyone gets roughly n/2 home matches
				const isHome = i === 0 && j % 2 === 1;
		// insert pair as a match - [ away, home ]
				rs[j].push([isHome ? ps[o] : ps[i], isHome ? ps[i] : ps[o]]);
			}
		}
	ps.splice(1, 0, ps.pop()); // permutate for next round
	}
	return rs;
};

const pairs = permutate(studentNames.length, studentNames)
console.log( pairs )

pairs.forEach((day, index) => {
  let groupNum = index+1;
  console.log(groupNum);
  day.forEach(set=>console.log(set.join(', ')));
  console.log(' ');
});
```

