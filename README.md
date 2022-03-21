![](screenshots/header.png)

## Usage:
* Add a div element to your web body
* Import scripts and styles
* Create your first draggable frame
```html
<head>
  <link rel="stylesheet" href="frameOptions.css">
</head>
<body>
  ... your code
  <div id="df_spawnArea"></div>
  <script src="dragContent.js"></script>
  <script src="createObject.js"></script>
  
  <script>
        df_create({
          "theme": "dark",
          "title": "Example",
          "content": "here you can put your html code<br>Good luck!<br>",
          "float": 'left',
          "icon": "assets/question.png",
          "rounded": true,
        });
    </script>
</body>
```
#### Generation options:
```js
{
    "theme": "light", // (light/dark) - frame theme
    "title": "Example", // header content
    "content": "An example", // frame content
    "icon": "assets/danger.png", // icon in front of the text (check assets folder or use own icons)
    "header_color": "blue", // header content color (hex/rgb/color)
    "content_color": "blue", // content color
    "bg_header": "blue", // custom header background
    "bg_color": "blue", // custom content background
    "width": "auto", // frame width
    "height": "auto" // frame height
}
```
the simplest way:
```js
df_create({
  "theme": "dark", // Optional
  "title": "Example",
  "content": "here you can put your html code<br>Good luck!<br>",
});
```
