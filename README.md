# express-ps

I tested out my endpoints by using Postman. 

Body JSON: 

### problems 1-4
{"array": [1, 2, 6, 3]} 

### /sort
{"array": [1, 2, 6, 3], "ascending": true}   -> 1, 2, 3, 6
{"array": [1, 2, 6, 3], "ascending": false}  -> 6, 3, 2, 1

### /target
{"array": [1, 2, 6, 3], "target": 8} -> true
{"array": [1, 2, 6, 3], "target": 6} -> false 
