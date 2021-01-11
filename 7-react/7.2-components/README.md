# 7.2: Components

React components are parts of the UI that are specified in JSX. They can be composed together to form an entire app.

The word _component_ refers to the React code syntax, but it also refers to the concept of a UI design element that repeats itself across different parts of an app. Most modern web applications, for reasons of ease-of-use and design reusability, have parts that are repeated in more than one place in a page and for multiple pages.

React allows us to specify a component and its view logic, e.g., the HTML _and_  the interactive behaviours,  inside a single piece of code. Specifically in the React system this will be a module in a file.

We can use these files/components to compose together an entire app by conditionally rendering a set of components in one case, rendering components in a loop, etc., all based on a data structure being held in the React app- most likely this will be an array of objects retrieved from the database.

## Create a Component

At its simplest, a component is a function that returns JSX. In React this is referred to as a _functional component_. The distinction is that this component has no dynamic data. We'll talk more about the differences when we see stateful components.

```jsx
function BigAnnouncement(){

    const myEl = (<div>
        <h1 className="hero-text">
            Heyyyy <span className="warning">Wow!</span>
        </h1>
        <p>
            Lorem Ipsum!!
        </p>
    </div>);

    console.log( 'myEl:', myEl );
    return myEl;
}
```

In the above example all we did is move the previous example's JSX into a function. Note that in React these component functions are declared using the function declaration and named with a capitalized word. React won't work if the function name isn't capitalized.

## Using a Component

In the complete example we reference the name of our component _**as if it was an HTML element**_.

```jsx
import React from 'react';
import { render } from 'react-dom';

function BigAnnouncement(){

    const myEl = (<div>
        <h1 className="hero-text">
            Heyyyy <span className="warning">Wow!</span>
        </h1>
        <p>
            Lorem Ipsum!!
        </p>
    </div>);

    console.log( 'myEl:', myEl );
    return myEl;
}

// create an element that React will render stuff into
const rootElement = document.createElement('div');

// put that element onto the page
document.body.appendChild(rootElement);

// have react render the JSX element into the root element.
render( <BigAnnouncement/>, rootElement);
```

## Repeating Components

In the sense that BigAnnouncement is an element itself, it can be mentioned more than once. We'll create a surrounding JSX and put BigAnnouncement inside.

```jsx
import React from 'react';
import { render } from 'react-dom';

function BigAnnouncement(){

    const myEl = (<div>
        <h1 className="hero-text">
            Heyyyy <span className="warning">Wow!</span>
        </h1>
        <p>
            Lorem Ipsum!!
        </p>
    </div>);

    console.log( 'myEl:', myEl );
    return myEl;
}

// create an element that React will render stuff into
const rootElement = document.createElement('div');

// put that element onto the page
document.body.appendChild(rootElement);

const myContainer = (<div>
    <BigAnnouncement/>
    <BigAnnouncement/>
    <BigAnnouncement/>
    <BigAnnouncement/>
</div>);

// have react render the JSX element into the root element.
render( myContainer, rootElement);
```

