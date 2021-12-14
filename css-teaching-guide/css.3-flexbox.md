# CSS.3: Flexbox

## Overview

This lesson will be do demonstrate how we can achieve moving the elements via flexbox

## Pre-Class Material

### Flexbox

The HTML starter code

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link rel="stylesheet" href="style.css" />
		<title>Flexbox</title>
	</head>
	<body>
		<!-- 
            1. Move the box to the right of the screen

                1.1 Using the margin property

                1.2 Using the absolute property

                1.3 Using the flex property

            2. Move the box to the bottom left of the screen

            3. Move the box to the bottom right of the screen
         -->
		<div class="box"></div>
	</body>
</html>

```

The CSS starter code

```css
html,
body {
	height: 100%;
}

body {
	background-color: pink;
}

.box {
	width: 200px;
	height: 200px;
	background-color: red;
}

```

#### Move box to the right

Margin Example

```css
.box {
	width: 200px;
	height: 200px;
	background-color: red;
	margin-left: auto;
}
```

Position Example

```css
.box {
	width: 200px;
	height: 200px;
	background-color: red;
	position: absolute;
	right: 0;
}
```

Flex Example

```css
body {
	background-color: pink;
	display: flex;
	justify-content: flex-end;
}
```

#### Move box to the bottom left

Flex Example

```css
body {
	background-color: pink;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
}
```

#### Move box to the bottom right

Flex Example

```css
body {
        background-color: pink;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;
}
```
