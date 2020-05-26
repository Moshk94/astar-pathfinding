"use strict"
function pathFind(world, startPoint, endPoint){
    var finalList = [];
    var openList = [];
    var closedList = [];
    
    var currentNode = {
        y: startPoint[0],
        x: startPoint[1],
        g: g(startPoint[0],startPoint[1]),
        h: h(startPoint[0],startPoint[1]),
        f: h(startPoint[0],startPoint[1]) + g(startPoint[0],startPoint[1]),
        parent: 0,
        id: `${startPoint[0]}${startPoint[1]}`
    };

    var finalNode = {
        id: `${endPoint[0]}${endPoint[1]}`
    }

    var startNode = {
        id: `${startPoint[0]}${startPoint[1]}`
    }

    closedList.push(currentNode);
    var runTime = 0;
    while(currentNode.id != finalNode.id){

    if(runTime >= (world.length * world[0].length)){
        var breakWallNode = [];

        if((currentNode.y - 1 >= 0) && (world[currentNode.y - 1][currentNode.x] != 0)){
            breakWallNode.push({
                y: currentNode.y - 1,
                x: currentNode.x
            });
        };

        if((currentNode.y + 1 < world.length) && (world[currentNode.y + 1][currentNode.x] != 0)){
            breakWallNode.push({
                y: currentNode.y + 1,
                x: currentNode.x
            });
        };

        if((currentNode.x + 1 < world[0].length) && (world[currentNode.y][currentNode.x + 1] != 0)){
            breakWallNode.push({
                y: currentNode.y,
                x: currentNode.x + 1
            });
        };

        if((currentNode.x - 1 >= 0) && (world[currentNode.y][currentNode.x - 1] != 0)){
            breakWallNode.push({
                y: currentNode.y,
                x: currentNode.x - 1
            })
            console.log("non Movable tile W")
        }

        var wallToBreak = randomInt(breakWallNode.length)
        world[breakWallNode[wallToBreak].y][breakWallNode[wallToBreak].x] = 0;
    };
    

        
    if((currentNode.y - 1 >= 0) && (world[currentNode.y - 1][currentNode.x] == 0)){
        if(!(closedList.some(obj => obj.id == `${currentNode.y - 1}${currentNode.x}`))){
            var northG = currentNode.g + 1;
            var northH = h(currentNode.y - 1,currentNode.x);
            var northF = northG + northH;
            openList.push({
                y: currentNode.y - 1,
                x: currentNode.x,
                g: northG,
                h: northH,
                f: northF,
                parent: `${currentNode.y}${currentNode.x}`,
                id: `${currentNode.y - 1}${currentNode.x}`
            });
        };   
    };

    if((currentNode.y + 1 < world.length) && (world[currentNode.y + 1][currentNode.x] == 0)){
        if(!(closedList.some(obj => obj.id == `${currentNode.y + 1}${currentNode.x}`))){
            var southG = currentNode.g + 1;
            var southH = h(currentNode.y + 1,currentNode.x);
            var southF = southG + southH;
            openList.push({
                y: currentNode.y + 1,
                x: currentNode.x,
                g: southG,
                h: southH,
                f: southF,
                parent: `${currentNode.y}${currentNode.x}`,
                id: `${currentNode.y + 1}${currentNode.x}`
            });
        };  
    };

    if((currentNode.x + 1 < world[0].length) && (world[currentNode.y][currentNode.x + 1] == 0)){
        if(!(closedList.some(obj => obj.id == `${currentNode.y}${currentNode.x + 1}`))){
            var eastG = currentNode.g + 1;
            var eastH = h(currentNode.y,currentNode.x + 1);
            var eastF = eastG + eastH
            openList.push({
                y: currentNode.y,
                x: currentNode.x + 1,
                g: eastG,
                h: eastH,
                f: eastF,
                parent: `${currentNode.y}${currentNode.x}`,
                id: `${currentNode.y}${currentNode.x + 1}`
            });
        };
    };

    if((currentNode.x - 1 >= 0) && (world[currentNode.y][currentNode.x - 1] == 0)){
        if(!(closedList.some(obj => obj.id == `${currentNode.y}${currentNode.x - 1}`))){
            var westG = currentNode.g + 1;
            var westH = h(currentNode.y,currentNode.x - 1);
            var westF = westG + westH;
            openList.push({
                y: currentNode.y,
                x: currentNode.x - 1,
                g: westG,
                h: westH,
                f: westF,
                parent: `${currentNode.y}${currentNode.x}`,
                id: `${currentNode.y}${currentNode.x - 1}`
            });
        };     
    };

    runTime++
    var lowestF = 0;
    var arrayLoc = 0;
    for(var i = 0; i < openList.length; i++){
        if(i == 0){
            lowestF = openList[i].f
        };
        if(openList[i].f < lowestF){
            lowestF = openList[i].f
            arrayLoc = i;
        }
        if(i == openList.length-1){
            currentNode = openList[arrayLoc]
            closedList.push(openList[arrayLoc])
            runTime = 0;
            if(arrayLoc == 0){
                openList.splice(0,1)
            }else if(arrayLoc != 0){
                openList.splice(arrayLoc,1)
            }
        }
    }

    };

    function h(nodeY, nodeX){
        var H = (Math.abs(endPoint[0]-nodeY)+Math.abs(endPoint[1]-nodeX));
        return H;
    };

    function g(nodeY, nodeX){
        var G  =  (Math.abs(startPoint[0]-nodeY)+Math.abs(startPoint[1]-nodeX)); 
        return G;
    };

    function randomInt(max){return Math.floor(Math.random() * Math.floor(max))};

    var pos = closedList.findIndex(x => x.id == finalNode.id);
    var referenceNode = closedList[pos];
    finalList.unshift(referenceNode)
    while(referenceNode.id != startNode.id){
        pos = closedList.findIndex(x => x.id == referenceNode.parent);
        referenceNode = closedList[pos];
        finalList.unshift(referenceNode)
    };
    
    return finalList;
};