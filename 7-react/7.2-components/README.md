# 7.2: Components

## Introduction

React components are UI elements written in JSX. They can be combined to form more complex components, even entire apps. React allows us to specify both looks and logic of our frontends in component code, making React a convenient way to build interactive UIs. Typically each component has its own file.

The word "component" refers to React syntax, but also refers to the concept of a UI element repeated across an app. Most applications have repeated visual elements across multiple pages. We can think of components like "helper functions" for UIs.

We can compose apps using components using JS logic: conditionally rendering components, rendering components in a loop, etc. Typically the logic for rendering components will depend on data retrieved from the database and temporarily stored in our React app.

## Creating Components

At its simplest, a component is a function that returns JSX. In React this is referred to as a _functional component_. The distinction is that this component has no dynamic data. We'll talk more about the differences when we see stateful components.

```jsx
function BigAnnouncement() {
  const myEl = (
    <div>
      <h1 className="hero-text">
        Heyyyy <span className="warning">Wow!</span>
      </h1>
      <p>Lorem Ipsum!!</p>
    </div>
  );
  console.log('myEl:', myEl);
  return myEl;
}
```

In the above example all we did is move the previous example's JSX into a function. Note that in React these component functions are declared using the function declaration and named with a capitalized word. React won't work if the function name isn't capitalized.

## Using Components

In the complete example we reference the name of our component _**as if it was an HTML element**_.

```jsx
import React from 'react';
import { render } from 'react-dom';

function BigAnnouncement() {
  const myEl = (
    <div>
      <h1 className="hero-text">
        Heyyyy <span className="warning">Wow!</span>
      </h1>
      <p>Lorem Ipsum!!</p>
    </div>
  );

  console.log('myEl:', myEl);
  return myEl;
}

// create an element that React will render stuff into
const rootElement = document.createElement('div');

// put that element onto the page
document.body.appendChild(rootElement);

// have react render the JSX element into the root element.
render(<BigAnnouncement />, rootElement);
```

## Repeating Components

In the sense that BigAnnouncement is an element itself, it can be mentioned more than once. We'll create a surrounding JSX and put BigAnnouncement inside.

```jsx
import React from 'react';
import { render } from 'react-dom';

function BigAnnouncement() {
  const myEl = (
    <div>
      <h1 className="hero-text">
        Heyyyy <span className="warning">Wow!</span>
      </h1>
      <p>Lorem Ipsum!!</p>
    </div>
  );

  console.log('myEl:', myEl);
  return myEl;
}

// create an element that React will render stuff into
const rootElement = document.createElement('div');

// put that element onto the page
document.body.appendChild(rootElement);

const myContainer = (
  <div>
    <BigAnnouncement />
    <BigAnnouncement />
    <BigAnnouncement />
    <BigAnnouncement />
  </div>
);

// have react render the JSX element into the root element.
render(myContainer, rootElement);
```

