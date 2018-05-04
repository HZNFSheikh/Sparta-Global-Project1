function showOverlap(event, ui)
{

console.log("collision");
debugger;
var collisions = $("#pacman2").collision(".coin",{ relative: "collider", as:"<div/>"});

  }

  $(function(){
$(".draggable").each(function(){$(this).draggable({containment:"#world"});});
$(".draggable").each(function(){$(this).bind("dragstart", showOverlap);})
$(".draggable").each(function(){$(this).bind("dragstop", showOverlap);})
$(".draggable").each(function(){$(this).bind("drag", showOverlap);})

});
