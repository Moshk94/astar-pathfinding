"use strict";function pathFind(x,y,$){const h=x=>x.map(x=>Array.isArray(x)?h(x):x),i=x=>Math.floor(Math.random()*Math.floor(x));var a,s,r=[],t=[],n=[],e=[],d=h(x),f={y:y[0],x:y[1],g:(a=y[0],s=y[1],Math.abs(y[0]-a)+Math.abs(y[1]-s)),id:`${y[0]}${y[1]}`},o=`${$[0]}${$[1]}`,p=`${y[0]}${y[1]}`;n.push(f);for(var u=0;f.id!=o;){if(u>=d.length*d[0].length){var g=i(e.length),l=e[g].y,m=e[g].x;d[l][m]=0,t.push(e[g])}if(f.y-1>=0&&!n.some(x=>x.id==`${f.y-1}${f.x}`)){var v=f.g+1,M=N(f.y-1,f.x),c=v+M,b={y:f.y-1,x:f.x,g:v,h:M,f:c,parent:`${f.y}${f.x}`,id:`${f.y-1}${f.x}`};0==d[f.y-1][f.x]?t.push(b):1==d[f.y-1][f.x]&&(e.some(x=>x.id==`${f.y-1}${f.x}`)||e.push(b))}if(f.y+1<d.length&&!n.some(x=>x.id==`${f.y+1}${f.x}`)){var A=f.g+1,I=N(f.y+1,f.x),F=A+I,j={y:f.y+1,x:f.x,g:A,h:I,f:F,parent:`${f.y}${f.x}`,id:`${f.y+1}${f.x}`};0==d[f.y+1][f.x]?t.push(j):1==d[f.y+1][f.x]&&(e.some(x=>x.id==`${f.y+1}${f.x}`)||e.push(j))}if(f.x+1<d[0].length&&!n.some(x=>x.id==`${f.y}${f.x+1}`)){var k=f.g+1,q=N(f.y,f.x+1),w=k+q,z={y:f.y,x:f.x+1,g:k,h:q,f:w,parent:`${f.y}${f.x}`,id:`${f.y}${f.x+1}`};0==d[f.y][f.x+1]?t.push(z):1==d[f.y][f.x+1]&&(e.some(x=>x.id==`${f.y}${f.x+1}`)||e.push(z))}if(f.x-1>=0&&!n.some(x=>x.id==`${f.y}${f.x-1}`)){var B=f.g+1,C=N(f.y,f.x-1),D=B+C,E={y:f.y,x:f.x-1,g:B,h:C,f:D,parent:`${f.y}${f.x}`,id:`${f.y}${f.x-1}`};0==d[f.y][f.x-1]?t.push(E):1==d[f.y][f.x-1]&&(e.some(x=>x.id==`${f.y}${f.x-1}`)||e.push(E))}u++;for(var G=0,H=0,J=0;J<t.length;J++)0==J&&(G=t[J].f),t[J].f<G&&(G=t[J].f,H=J),J==t.length-1&&(f=t[H],n.push(t[H]),u=0,t.splice(H,1))}var K=n.findIndex(x=>x.id==o),L=n[K];for(r.unshift(L);L.id!=p;)K=n.findIndex(x=>x.id==L.parent),L=n[K],r.unshift(L);function N(x,y){return Math.abs($[0]-x)+Math.abs($[1]-y)}return r}