"use strict";function pathFind(a,b,c){function d(a,b){var d=Math.abs(c[0]-a)+Math.abs(c[1]-b);return d}function e(a,c){var d=Math.abs(b[0]-a)+Math.abs(b[1]-c);return d}function f(a){return Math.floor(Math.random()*Math.floor(a))}var g=[],h=[],j=[],k={y:b[0],x:b[1],g:e(b[0],b[1]),h:d(b[0],b[1]),f:d(b[0],b[1])+e(b[0],b[1]),parent:0,id:`${b[0]}${b[1]}`},l={id:`${c[0]}${c[1]}`},m={id:`${b[0]}${b[1]}`};j.push(k);for(var n=0;k.id!=l.id;){if(n>=a.length*a[0].length){var o=[];0<=k.y-1&&0!=a[k.y-1][k.x]&&o.push({y:k.y-1,x:k.x});k.y+1<a.length&&0!=a[k.y+1][k.x]&&o.push({y:k.y+1,x:k.x});k.x+1<a[0].length&&0!=a[k.y][k.x+1]&&o.push({y:k.y,x:k.x+1});0<=k.x-1&&0!=a[k.y][k.x-1]&&(o.push({y:k.y,x:k.x-1}),console.log("non Movable tile W"));var p=f(o.length);a[o[p].y][o[p].x]=0}if(0<=k.y-1&&0==a[k.y-1][k.x]&&!j.some(a=>`${k.y-1}${k.x}`==a.id)){var q=k.g+1,r=d(k.y-1,k.x);h.push({y:k.y-1,x:k.x,g:q,h:r,f:q+r,parent:`${k.y}${k.x}`,id:`${k.y-1}${k.x}`})}if(k.y+1<a.length&&0==a[k.y+1][k.x]&&!j.some(a=>`${k.y+1}${k.x}`==a.id)){var s=k.g+1,t=d(k.y+1,k.x);h.push({y:k.y+1,x:k.x,g:s,h:t,f:s+t,parent:`${k.y}${k.x}`,id:`${k.y+1}${k.x}`})}if(k.x+1<a[0].length&&0==a[k.y][k.x+1]&&!j.some(a=>`${k.y}${k.x+1}`==a.id)){var u=k.g+1,v=d(k.y,k.x+1);h.push({y:k.y,x:k.x+1,g:u,h:v,f:u+v,parent:`${k.y}${k.x}`,id:`${k.y}${k.x+1}`})}if(0<=k.x-1&&0==a[k.y][k.x-1]&&!j.some(a=>`${k.y}${k.x-1}`==a.id)){var w=k.g+1,x=d(k.y,k.x-1);h.push({y:k.y,x:k.x-1,g:w,h:x,f:w+x,parent:`${k.y}${k.x}`,id:`${k.y}${k.x-1}`})}n++;for(var y=0,z=0,A=0;A<h.length;A++)0==A&&(y=h[A].f),h[A].f<y&&(y=h[A].f,z=A),A==h.length-1&&(k=h[z],j.push(h[z]),n=0,0==z?h.splice(0,1):0!=z&&h.splice(z,1))}var B=j.findIndex(a=>a.id==l.id),C=j[B];for(g.unshift(C);C.id!=m.id;)B=j.findIndex(a=>a.id==C.parent),C=j[B],g.unshift(C);return g}