/*
All the code was written by the creator - GDLev,
you can use this code for private and commercial purposes,
but do not share this code further as your own.
If you've reworked this code, you can use it for yourself and for your company/projects,
or share some of the code in patch form on various forums,
just don't forget to write that the code isn't entirely yours and provide the URL to my github profile or original project.
https://github.com/GDLev/draggableFrames

Thank you for reading
*/


function df_refresh() {
  dragfunction(document.getElementById('df_draggable'));
  setTimeout(df_refresh, 100);
}
df_refresh();

function dragfunction(object) {
  try {
    var posX = 0, posY = 0, posX_save = 0, posY_save = 0;
    if (document.getElementById("df_header")) {
      document.getElementById("df_header").onmousedown = dragstop;
    } else {
      object.onmousedown = stopdragging;
    }
    function dragstop(e) {
      e = e || window.event;
      e.preventDefault();
      posX_save = e.clientX;
      posY_save = e.clientY;
      document.onmousemove = elementchangepos;
      document.onmouseup = stopdragging;
    }
    function elementchangepos(e) {
      e = e || window.event;
      e.preventDefault();
      posX = posX_save - e.clientX;
      posY = posY_save - e.clientY;
      posX_save = e.clientX;
      posY_save = e.clientY;
      object.style.left = (object.offsetLeft - posX) + "px";
      object.style.top = (object.offsetTop - posY) + "px";
    }
    function stopdragging() {
      document.onmousemove = null;
      document.onmouseup = null;
    }
  } catch {}
} 




