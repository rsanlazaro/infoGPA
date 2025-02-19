var wdjspinsconfig = {
  "pins":[
  {
    "hover": "WASHINGTON DC",// Info of the popup
    "pos_X": 452,// Position on the X-Axis
    "pos_Y": 627,// Position on the Y-Axis
    "size": 0,// Size of the Pin in px
    "upColor": "#FF0000",// Default Color
    "overColor": "#FFCC00",// Hover Color
    "url": "",// Link to any webpage
    "target": "same_page",// Use "same_page", "new_page", or "none"
    "active": true //true/false to set it as Active/Inactive
  },
  {
    "hover": "LOS ANGELES",
    "pos_X": 201,
    "pos_Y": 663,
    "size": 0,
    "upColor": "#FF0000",
    "overColor": "#FFCC00",
    "url": "",
    "target": "same_page",
    "active": true
  },
  {
    "hover": "LONDON",
    "pos_X": 880,
    "pos_Y": 495,
    "size": 0,
    "upColor": "#FF0000",
    "overColor": "#FFCC00",
    "url": "",
    "target": "same_page",
    "active": true
  },
  {
    "hover": "MADRID",
    "pos_X": 863,
    "pos_Y": 614,
    "size": 0,
    "upColor": "#FF0000",
    "overColor": "#FFCC00",
    "url": "",
    "target": "same_page",
    "active": true
  },
  {
    "hover": "ROME",
    "pos_X": 967,
    "pos_Y": 588,
    "size": 0,
    "upColor": "#FF0000",
    "overColor": "#FFCC00",
    "url": "",
    "target": "same_page",
    "active": true
  },
  {
    "hover": "SHANGHAI",
    "pos_X": 1696,
    "pos_Y": 695,
    "size": 0,
    "upColor": "#FF0000",
    "overColor": "#FFCC00",
    "url": "",
    "target": "same_page",
    "active": true
  },
  {
    "hover": "MUMBAI",
    "pos_X": 1388,
    "pos_Y": 795,
    "size": 0,
    "upColor": "#FF0000",
    "overColor": "#FFCC00",
    "url": "",
    "target": "same_page",
    "active": true
  },
  {
    "hover": "TOKYO",
    "pos_X": 1803,
    "pos_Y": 662,
    "size": 0,
    "upColor": "#FF0000",
    "overColor": "#FFCC00",
    "url": "",
    "target": "same_page",
    "active": true
  },
  {
    "hover": "MEXICO CITY",
    "pos_X": 314,
    "pos_Y": 766,
    "size": 0,
    "upColor": "#FF0000",
    "overColor": "#FFCC00",
    "url": "",
    "target": "same_page",
    "active": true
  },
  {
    "hover": "SAO PAULO",
    "pos_X": 689,
    "pos_Y": 1078,
    "size": 0,
    "upColor": "#FF0000",
    "overColor": "#FFCC00",
    "url": "",
    "target": "same_page",
    "active": true
  },
  {
    "hover": "ISTANBUL",
    "pos_X": 1087,
    "pos_Y": 605,
    "size": 0,
    "upColor": "#FF0000",
    "overColor": "#FFCC00",
    "url": "",
    "target": "same_page",
    "active": true
  },
  {
    "hover": "LAGOS",
    "pos_X": 912,
    "pos_Y": 878,
    "size": 0,
    "upColor": "#FF0000",
    "overColor": "#FFCC00",
    "url": "",
    "target": "same_page",
    "active": true
  },
  {
    "hover": "CAPE TOWN",
    "pos_X": 1016,
    "pos_Y": 1178,
    "size": 0,
    "upColor": "#FF0000",
    "overColor": "#FFCC00",
    "url": "",
    "target": "same_page",
    "active": true
  },
  {
    "hover": "SYDNEY",
    "pos_X": 1784,
    "pos_Y": 1137,
    "size": 0,
    "upColor": "#FF0000",
    "overColor": "#FFCC00",
    "url": "",
    "target": "same_page",
    "active": true
  },
  {
    "hover": "BLANK",
    "pos_X": 100,
    "pos_Y": 100,
    "size": 0,
    "upColor": "#FF0000",
    "overColor": "#FFCC00",
    "url": "",
    "target": "same_page",
    "active": true
  },// Feel free to add more pins
  ]
};

// The following is the script for pins interaction DON'T EDIT !!! //
(function(){"use strict";function isTouchEnabled(){return('ontouchstart' in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0)}
document.addEventListener('DOMContentLoaded',function(){let pins_len=wdjspinsconfig.pins.length;if(pins_len>0){let xmlns="http://www.w3.org/2000/svg";let tsvgpin=document.getElementById("wdjspins");let svg_circle;for(let i=0;i<pins_len;i++){svg_circle=document.createElementNS(xmlns,"circle");svg_circle.setAttribute("cx",wdjspinsconfig.pins[i].pos_X+1);svg_circle.setAttribute("cy",wdjspinsconfig.pins[i].pos_Y+1);svg_circle.setAttribute("r",wdjspinsconfig.pins[i].size/2);svg_circle.setAttribute("fill","rgba(0, 0, 0, 0.5)");tsvgpin.appendChild(svg_circle);svg_circle=document.createElementNS(xmlns,"circle");svg_circle.setAttribute("id","wdjspins_"+i);svg_circle.setAttribute("cx",wdjspinsconfig.pins[i].pos_X);svg_circle.setAttribute("cy",wdjspinsconfig.pins[i].pos_Y);svg_circle.setAttribute("r",wdjspinsconfig.pins[i].size/2);svg_circle.setAttribute("fill",wdjspinsconfig.pins[i].upColor);svg_circle.setAttribute("stroke","#333333");svg_circle.setAttribute("stroke-width",1);tsvgpin.appendChild(svg_circle);addEvent(i)}}});function addEvent(id){const wdPin=document.getElementById("wdjspins_"+id);const wdTip=document.getElementById('wdjstip');const downColor='#595959';if(wdjspinsconfig.pins[id].active){if(isTouchEnabled()){let touchmoved;wdPin.addEventListener('touchstart',function(e){touchmoved=!1;wdTip.style.display='none';wdPin.setAttribute("fill",wdjspinsconfig.pins[id].upColor)});wdPin.addEventListener('touchmove',function(){touchmoved=!0});wdPin.addEventListener('touchend',function(e){if(!touchmoved){wdTip.style.display='none';wdPin.setAttribute("fill",wdjspinsconfig.pins[id].upColor);if(wdjspinsconfig.pins[id].target==='new_page'){window.open(wdjspinsconfig.pins[id].url)}else if(wdjspinsconfig.pins[id].target==='same_page'){window.location.href=wdjspinsconfig.pins[id].url}}})}else{wdPin.style.cursor="pointer";wdPin.addEventListener('mouseenter',function(){wdPin.setAttribute("fill",wdjspinsconfig.pins[id].overColor)});wdPin.addEventListener('mouseleave',function(){wdTip.style.display='none';wdPin.setAttribute("fill",wdjspinsconfig.pins[id].upColor)});if(wdjspinsconfig.pins[id].target!=='none'){wdPin.addEventListener('mousedown',function(){wdPin.setAttribute('fill',downColor)})}
wdPin.addEventListener('mouseup',function(){wdTip.style.display='none';wdPin.setAttribute("fill",wdjspinsconfig.pins[id].overColor);if(wdjspinsconfig.pins[id].target==='new_page'){window.open(wdjspinsconfig.pins[id].url)}else if(wdjspinsconfig.pins[id].target==='same_page'){window.location.href=wdjspinsconfig.pins[id].url}});wdPin.addEventListener('mousemove',function(e){wdTip.style.display='block';wdTip.innerHTML=wdjspinsconfig.pins[id].hover;let x=e.pageX+10,y=e.pageY+15;let wdTipWidth=wdTip.offsetWidth,wdTipHeight=wdTip.offsetHeight;x=(x+wdTipWidth>window.innerWidth+window.scrollX)?x-wdTipWidth-20:x;y=(y+wdTipHeight>window.innerHeight+window.scrollY)?window.innerHeight+window.scrollY-wdTipHeight-10:y;wdTip.style.left=x+'px';wdTip.style.top=y+'px'})}}}})()
