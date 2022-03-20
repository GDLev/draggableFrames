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


function df_create(options) {
  const obj = options;
  const spawn = document.getElementById('df_spawnArea');
  obj.name = "default";

  try {
      document.getElementById('df_spawnArea').innerHTML = "";
  } catch {}
  try {
    var check_element = document.getElementById('df_spawnArea');
    if (check_element == null) {
      df_error()
    }
  } catch {
      df_error()
  }
  if (!obj.title || !obj.content) {
    console.log("not enough arguments! Read this to learn more: https://github.com/GDLev/draggableFrames#MissingArguments")
  } else {
    if (!obj.theme) {
      obj.theme = "light"
    }
    var add_content = "";
    var header_additional = "";
    if (obj.rounded == true) {
      add_content = add_content + "df_rounded";
      header_additional = header_additional + "df_rounded";
    }
    if (!obj.icon) {
      gdragElement = `<div id="df_draggable" class="df_${obj.theme} df_${obj.name} ${add_content}" style="color:${obj.content_color};background:${obj.bg_color};width:${obj.width};height:${obj.height}; top: 50%;left: 50%;-moz-transform: translateX(-50%) translateY(-50%);-webkit-transform: translateX(-50%) translateY(-50%);transform: translateX(-50%) translateY(-50%);">
      <div id="df_header" class="df_${obj.name} ${header_additional}" style="color:${obj.header_color};background_color:${obj.bg_header};">${obj.title}<span class="df_option df_${obj.name}" onclick="df_close('df_${obj.name}');">✖</span></div>
      <p>${obj.content}</p>
      </div>`
    } else {
      gdragElement = `<div id="df_draggable" class="df_${obj.theme} df_${obj.name} ${add_content}" style="color:${obj.content_color};background:${obj.bg_color};width:${obj.width};height:${obj.height}; top: 50%;left: 50%;-moz-transform: translateX(-50%) translateY(-50%);-webkit-transform: translateX(-50%) translateY(-50%);transform: translateX(-50%) translateY(-50%);">
      <div id="df_header" class="df_${obj.name} ${header_additional}" style="color:${obj.header_color};background_color:${obj.bg_header};">${obj.title}<span class="df_option df_${obj.name}" onclick="df_close('df_${obj.name}');">✖</span></div>
      <p><img src='${obj.icon}' width='30px;' class="df_${obj.name} df_icon"><span style='float:right; margin-right:10px;'>${obj.content}</span></p>
      </div>`
    }
    spawn.innerHTML = spawn.innerHTML + gdragElement;
  }
}
function df_close(object) {
  var get_object = document.getElementsByClassName(object)[0];
  var get_header = document.getElementsByClassName(object)[1];
  var get_span = document.getElementsByClassName(object)[2];
  var get_icon = document.getElementsByClassName(object)[3];
  var spawnArea = document.getElementById('df_spawnArea');
  get_object.style.transition = "0.2s";
  get_object.style.background = "rgba(0,0,0,0)";
  get_object.style.color = "rgba(0,0,0,0)";
  get_header.style.transition = "0.2s";
  get_header.style.background = "rgba(0,0,0,0)";
  get_header.style.color = "rgba(0,0,0,0)";
  get_span.style.transition = "0.2s";
  get_span.style.background = "rgba(0,0,0,0)";
  get_span.style.color = "rgba(0,0,0,0)";
  get_icon.style.transition = "0.2s";
  get_icon.style.opacity = "0";
  setTimeout(() => {
    spawnArea.innerHTML = "";
}, 200);
}
function df_error() {
  document.body.innerHTML = document.body.innerHTML + `<div id="df_draggable" class="df_dark df_error df_shadow" style="top: 50%;left: 50%;-moz-transform: translateX(-50%) translateY(-50%);-webkit-transform: translateX(-50%) translateY(-50%);transform: translateX(-50%) translateY(-50%);"><div id="df_header" class="df_error" style="color:#526DD1;">Frame loading Error<span class="df_option df_error" onclick="df_close('df_error');">✖</span></div><p><img src='assets/danger.png' width='30px;' class="df_error df_icon"><span style='float:right; margin-right:10px;'>The code does not include the div element "spawnArea"<br>If you are a web administrator read docs<br><a href="https://github.com/GDLev/draggableFrames#Usage">https://github.com/GDLev/draggableFrames#Usage</a></span></div>`
}


