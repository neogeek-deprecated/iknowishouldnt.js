#I Know I Shouldn't

This micro-library _does_ modify the prototype of both String and Array. However it does so with non-enumerable methods.

##String.prototype.format

Returns a formatted string.

| Character | Type |
| --------- | ---- |
| s | String |
| i | Integer |
| f | Float |

```javascript
'rgba(%i, %i, %i, %f)'.format(255, 0, 0, 0.5);
````

```javascript
'Hello %s'.format('World!');
````

##Array.prototype.chunk

Split an array into smaller chunks.

```javascript
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].chunk(2);
````
