# Disk Storage

Store things on your computer that will be there later.

## Accessing different parts of the computer

![](../.gitbook/assets/my-document-2-2.jpg)

| Component | What we use it for | Time | Relative Distance |  | x Times Slower Than |
| :--- | :--- | :--- | :--- | :--- | :--- |
| RAM Memory | var x = 0; | 0.0000001 seconds | 1 km  | Your office. | ~ |
| SSD Hard Drive | Databases, files on the computer. | 0.00015 seconds | 150,000km | Halfway to the moon. | 10³ |
| LAN Network | Networked DB access from a computer nearby. | 0.15 seconds | 150,000,000km | Twice the distance to Mars. | 10⁸ |
| 4G Mobile Network | Downloading something on a mobile device. \(30 mbps\) | 1 second | 1,000,000,000km | Not quite to Saturn. | 10⁹ |

## Disk Access 

```javascript
var fs = require('fs');

const whenFileIsRead = (error, content) => {
   console.log( content );
};

fs.readFile(filename, whenFileIsRead);
```

