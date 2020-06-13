"use strict"
function pathFind(worldMap, startPoint, endPoint){
    const clone = (items) => items.map(item => Array.isArray(item) ? clone(item) : item);
    const randomInt = (max) => Math.floor(Math.random() * Math.floor(max));

    var finalList = [];
    var openList = [];
    var closedList = [];
    var wallList = [];
    var world = clone(worldMap);
    
    var currentNode = {
        y: startPoint[0],
        x: startPoint[1],
        g: g(startPoint[0],startPoint[1]),
        id: `${startPoint[0]}${startPoint[1]}`
    };

    var finalNode = {
        id: `${endPoint[0]}${endPoint[1]}`
    };

    var startNode = {
        id: `${startPoint[0]}${startPoint[1]}`
    };

    closedList.push(currentNode);
    var runTime = 0;

    while(currentNode.id != finalNode.id){

    if(runTime >= (world.length * world[0].length)){
        var randomWallIndex = randomInt(wallList.length);
        var breakY = wallList[randomWallIndex].y;
        var breakX = wallList[randomWallIndex].x;
        world[breakY][breakX] = 0;
        openList.push(wallList[randomWallIndex]);
    };
            
    if((currentNode.y - 1 >= 0)){
        if(!(closedList.some(obj => obj.id == `${currentNode.y - 1}${currentNode.x}`))){
            var northG = currentNode.g + 1;
            var northH = h(currentNode.y - 1,currentNode.x);
            var northF = northG + northH;
            var NNodeProperty = {
                y: currentNode.y - 1,
                x: currentNode.x,
                g: northG,
                h: northH,
                f: northF,
                parent: `${currentNode.y}${currentNode.x}`,
                id: `${currentNode.y - 1}${currentNode.x}`
            }
            if((world[currentNode.y - 1][currentNode.x] == 0)){
                openList.push(NNodeProperty);
            }else if((world[currentNode.y - 1][currentNode.x] == 1)){
                if(!(wallList.some(obj => obj.id == `${currentNode.y - 1}${currentNode.x}`))){
                    wallList.push(NNodeProperty);
                };
            };           
        };   
    };

    if((currentNode.y + 1 < world.length)){
        if(!(closedList.some(obj => obj.id == `${currentNode.y + 1}${currentNode.x}`))){
            var southG = currentNode.g + 1;
            var southH = h(currentNode.y + 1,currentNode.x);
            var southF = southG + southH;
            var SNodeProperty = {
                y: currentNode.y + 1,
                x: currentNode.x,
                g: southG,
                h: southH,
                f: southF,
                parent: `${currentNode.y}${currentNode.x}`,
                id: `${currentNode.y + 1}${currentNode.x}`
            };
            if((world[currentNode.y + 1][currentNode.x] == 0)){
                openList.push(SNodeProperty);
            }else if((world[currentNode.y + 1][currentNode.x] == 1)){
                if(!(wallList.some(obj => obj.id == `${currentNode.y + 1}${currentNode.x}`))){
                    wallList.push(SNodeProperty);
                };
            };
        };  
    };

    if((currentNode.x + 1 < world[0].length)){
        if(!(closedList.some(obj => obj.id == `${currentNode.y}${currentNode.x + 1}`))){
            var eastG = currentNode.g + 1;
            var eastH = h(currentNode.y,currentNode.x + 1);
            var eastF = eastG + eastH
            var ENodeProperty = {
                y: currentNode.y,
                x: currentNode.x + 1,
                g: eastG,
                h: eastH,
                f: eastF,
                parent: `${currentNode.y}${currentNode.x}`,
                id: `${currentNode.y}${currentNode.x + 1}`
            };

            if((world[currentNode.y][currentNode.x + 1] == 0)){
                openList.push(ENodeProperty)
            }else if((world[currentNode.y][currentNode.x + 1] == 1)){
                if(!(wallList.some(obj => obj.id == `${currentNode.y}${currentNode.x + 1}`))){
                    wallList.push(ENodeProperty);
                };
            };
        };
    };

    if((currentNode.x - 1 >= 0)){
        if(!(closedList.some(obj => obj.id == `${currentNode.y}${currentNode.x - 1}`))){
            var westG = currentNode.g + 1;
            var westH = h(currentNode.y,currentNode.x - 1);
            var westF = westG + westH;
            var WNodeProperty = {
                y: currentNode.y,
                x: currentNode.x - 1,
                g: westG,
                h: westH,
                f: westF,
                parent: `${currentNode.y}${currentNode.x}`,
                id: `${currentNode.y}${currentNode.x - 1}`
            };

            if((world[currentNode.y][currentNode.x - 1] == 0)){
                openList.push(WNodeProperty);
            }else if((world[currentNode.y][currentNode.x - 1] == 1)){
                if(!(wallList.some(obj => obj.id == `${currentNode.y}${currentNode.x - 1}`))){
                    wallList.push(WNodeProperty);
                };
            };
        };     
    };

    runTime++
    var lowestF = 0;
    var arrayLoc = 0;
    for(var i = 0; i < openList.length; i++){
        if(i == 0){lowestF = openList[i].f};
        if(openList[i].f < lowestF){
            lowestF = openList[i].f
            arrayLoc = i;
        };
        if(i == openList.length-1){
            currentNode = openList[arrayLoc]
            closedList.push(openList[arrayLoc]);
            runTime = 0;
            openList.splice(arrayLoc,1);
        };
    };

    };

    var pos = closedList.findIndex(x => x.id == finalNode.id);
    var referenceNode = closedList[pos];
    finalList.unshift(referenceNode)
    while(referenceNode.id != startNode.id){
        pos = closedList.findIndex(x => x.id == referenceNode.parent);
        referenceNode = closedList[pos];
        finalList.unshift(referenceNode)
    };

    function h(nodeY, nodeX){
        return (Math.abs(endPoint[0]-nodeY)+Math.abs(endPoint[1]-nodeX));
    };

    function g(nodeY, nodeX){
        return (Math.abs(startPoint[0]-nodeY)+Math.abs(startPoint[1]-nodeX));
    };
        
    return finalList;
};