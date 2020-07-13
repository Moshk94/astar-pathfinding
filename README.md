My own implementation on the A star pathfinding. When the algorithm cannot find a path - the algorithim will start breaking walls to get to the target location.

___
#### Inputs - World, Start Node, End Node

 - World must be a nested array - 0 indicates valid tiles
 - Start/End node - must be a 2x1 array where the first value is the Y co-rodinates and the second value is the X co-ordinates - e.g [y,x]. (0,0) is on the top left of the world.

#### Output
A nested array with co-ordinates to the end path. The first value is the Y co-rodinates and the second value is the X co-ordinates - e.g [y,x].
___
**Minfied size - 1.53kb** | **Full size - 5.26kb**

___
References: [https://www.raywenderlich.com/3016-introduction-to-a-pathfinding](https://www.raywenderlich.com/3016-introduction-to-a-pathfinding)
