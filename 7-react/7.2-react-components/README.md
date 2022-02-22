# 7.2: React Components

{% embed url="https://youtu.be/j28twmBdoLM" %}

## Introduction

React components are UI elements written in JSX. They can be combined to form more complex components, even entire apps. React allows us to specify both looks and logic of our frontends in component code, making React a convenient way to build interactive UIs. Typically each component has its own file.

The word "component" refers to React syntax, but also refers to the concept of a UI element repeated across an app. Most applications have repeated visual elements across multiple pages. We can think of components like "helper functions" for UIs.

We can compose apps using components using JS logic: conditionally rendering components, rendering components in a loop, etc. Typically the logic for rendering components will depend on data retrieved from the database and temporarily stored in our React app.

## Creating Components

At its simplest, a component is a function that returns JSX. In React this is referred to as a "functional component". The distinction is that this component has no dynamic data. We'll talk more about the differences when we see stateful components.

```jsx
function BigAnnouncement() {
  const myEl = (
    <div>
      <h1 className="hero-text">
        Hey <span className="warning">Wow!</span>
      </h1>
      <p>Lorem Ipsum!!</p>
    </div>
  );
  console.log('myEl:', myEl);
  return myEl;
}
```

In the above example we moved JSX from [Module 7.1: JSX Intro](../7.1-jsx-intro#jsx-with-multiple-elements) into a function. Note that component functions are declared using the `function` keyword and named with UpperCamelCase by convention. React won't work if the function name isn't in UpperCamelCase.

## Using Components

In the complete example we reference the name of our component **as if it were an HTML element**.

```jsx
import React from 'react';
import { render } from 'react-dom';

function BigAnnouncement() {
  const myEl = (
    <div>
      <h1 className="hero-text">
        Hey <span className="warning">Wow!</span>
      </h1>
      <p>Lorem Ipsum!!</p>
    </div>
  );
  console.log('myEl:', myEl);
  return myEl;
}

// Create root element to render other elements into
const rootElement = document.createElement('div');
// Append root element to document body
document.body.appendChild(rootElement);
// Render new JSX element into root element
render(<BigAnnouncement />, rootElement);
```

## Repeating Components

In the sense that `BigAnnouncement` is an element itself, it can be mentioned more than once. We'll create a surrounding JSX and put `BigAnnouncement` inside.

```jsx
import React from 'react';
import { render } from 'react-dom';

function BigAnnouncement() {
  const myEl = (
    <div>
      <h1 className="hero-text">
        Hey <span className="warning">Wow!</span>
      </h1>
      <p>Lorem Ipsum!!</p>
    </div>
  );
  console.log('myEl:', myEl);
  return myEl;
}

// Create root element to render other elements into
const rootElement = document.createElement('div');
// Append root element to document body
document.body.appendChild(rootElement);

// Create a container to store multiple BigAnnouncements
const myContainer = (
  <div>
    <BigAnnouncement />
    <BigAnnouncement />
    <BigAnnouncement />
    <BigAnnouncement />
  </div>
);

// Render new JSX element into root element
render(myContainer, rootElement);
```

### Refactoring Components

It's always a good habit to periodically refactor your code into components.

{% embed url="https://youtu.be/Istb2ufBzIE" %}

### Cleaning Up Linter Issues (Finally)

it's always good to fix warnings and linter issues, even if it works. Having too many red lines is not just annoying, but it effectively hides from you any real, legitimate problems that the linter could be reporting.

{% embed url="https://www.youtube.com/watch?v=crVq7pDj7I0" %}
