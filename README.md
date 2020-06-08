My own implementation on the A star pathfinding. When the algorithm cannot find a path - the algorithim will start breaking walls to get to the target location.

___
#### Inputs - World, Start Node,  End node

 - World must be a nested array - 0 indicates valid tiles
 - Start/End node - must be a 1x2 array where the first value is the Y co-rodinates and the second value is the X co-ordinates. (0,0) is on the top left of the world.

#### Output
An array with co-ordinates to the end path. Each co-ordinate is an object with the **f**,**g** and **h** score, **x** and **y** co-ordinates, **id** and **parent id**
___
**Minfied size - 1.68kb** | **Full size - 6.12kb**

___
References: [https://www.raywenderlich.com/3016-introduction-to-a-pathfinding](https://www.raywenderlich.com/3016-introduction-to-a-pathfinding)
