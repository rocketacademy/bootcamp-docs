# My First Node Program

We are going to shift gears to run JavaScript in a new environment.

Nodejs is a JavaScript runtime environment that runs directly on your computer and can interact diectly with your computer.

For the purposes of this course there are two important parts of the computer we want our programs to interact with. 1. The hard drive of the computer. 2. The networking hardware (that is connected to the internet).

Before we integrate these other aspects of the computer, first we are going to prove that we can run a whole complete JavaScript program directly on our computer.

## Javascript Development Console Environment

```bash
node
```

This takes you into an environment like the Dev Tools Console. Except that there are no files loaded or related to the environment.

Type `ctrl ^ c` to exit out.

## My First Node Program

Create a directory and put a single file inside.

```bash
cd a-swe1
mkdir my-first-node
cd my-first-node
touch index.js
```

Inside of index.js:
```
console.log('hello');
```

Run the program:

```bash
node index.js
```

## Command Line Programs

The environment of the command line is just a way to interface with the operating system, and to run programs.

Just like the `git` command is an application we downloaded and installed on our computers, `node index.js` is a program that we created and will run on our computers just like anything else.

## Process

### What is a process?

A process is an operating system representation of a single program. Each Chrome window is a process on your computer. Typically every single application or application part will have it's own process.

When we run our Nodejs programs they will also have their own process.

We can prove that this is true by typing `node` into the command line again. We will be able to see this program running on the computer.

Open the Task Manager (Windows) or Activity Monitor (Mac).

Look for or search for `node` and highlight the process. Type `ctrl ^ c` in the command line. The process in the Task Manager / Activity Monitor wil disappear.

### See your own Nodejs program in the Activity Monitor

Normally your JavaScript runs so fast that the won't see the process begin and end in the Activity Monitor.

We can fix this by having the program run an artifically long time.

```
var counter = 0;
while(true){
  counter = counter + 1;
}
```

Now when we run this program from the command line it will continue to run forever untile we kill it.

```
node index.js
```

Look for this process in your Activity Monitor. It should be taking up 100% of one core.

### Process Variable

In the DOM - on the other context of running JavaScript we saw before, the variables that *represented* our running environment (a browser window/tab) were the two variables `window` and `document`.

To refresh on this concept, open any page in your Chrome browser and open the Dev Tools. Type `document` and `window` in the console.

For `window` click the triangle to see the keys inside this object. What are two keys that represent the state of the window or some data about the current page?

In Nodejs we also have one variable that represents the enviroment our code is running in: `process`.

```
console.log( process );
```

```
node index.js
```

Find some relevant keys in the `process` object.
