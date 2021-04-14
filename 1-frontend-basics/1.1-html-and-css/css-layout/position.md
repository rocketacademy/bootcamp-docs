# Position

When describing the functionality of elements with display we are discussing what happens when we fill elements with a certain amount of contents \(text, images, other boxes, etc.\), and then we let CSS lay out those boxes according to predetermined rules.

There are some more rare cases when, instead of allowing CSS to lay out those boxes according to size and rules, we want to have a higher degree of control over where those boxes get placed.

This level of control is the `position` style. This style overrides any natural display layout behaviour in favor of more specific instructions of where to put a box.

### Position Fixed

```
p{
    position:fixed;
}
```

### Setting Positions

```
p{
    position:fixed;
    top:300px;
}
```

### Position Relative

```
p{
    position:relative;
    top:6px;
    left:6px;
}
```

### Position Absolute

```
p{
    position:absolute;
    top:6px;
    left:6px;
}
```

### Position Relative / Absolute

```
.card{
    position:relative;
}

.icon{
    position:absolute;
    top:6px;
    left:6px;
}
```



