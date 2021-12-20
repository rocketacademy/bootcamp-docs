# CSS.4: Responsive Design

## Overview

This lesson dives deeper into responsive design and answers the age old question of mobile first or desktop first.

Answer: It depends...

## Pre-Class Material

### HTML

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link rel="stylesheet" href="style.css" />
		<title>Responsive Design</title>
	</head>
	<body>
		<h1>I am responsive design</h1>
	</body>
</html>
```

Demo how adding the `meta` tag helps with the mobile view by removing it and adding it back again

Demo the difference when changing the `width=device-width` to `width=500`

### CSS

```css
@media only screen and (min-width: 768px) {
	h1 {
		color: black;
	}
}
```

Demo how media queries work

Discuss how we can have two ways of doing it

1. Use media queries after designing in **mobile view**
2. Use media queries after designing in **desktop view**

Demo one use case of this

* When a website is only optimised for desktop so you could do a `display: none`

### Instagram

Ask everyone to visit [https://www.instagram.com/instagram/?hl=en](https://www.instagram.com/instagram/?hl=en) on a chrome browser

Open the dev tools and show that they also added the `meta` tag

Make a joke about how FB changed their name because of this tag (i'm kidding please don't)

Ask them if they are able to zoom in

Demo on your HTML above how to prevent a user from zooming in by adding `maximum-scale=1`

## Further Reading

[https://www.w3schools.com/cssref/css3\_pr\_mediaquery.asp](https://www.w3schools.com/cssref/css3\_pr\_mediaquery.asp)
