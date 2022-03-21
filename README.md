![](screenshots/header.png)

## About the Project:
Have you ever wanted to create quick and easy to generate draggable frames in html?
With these scripts, you can do it even without knowing html
If you want to support me just give me a star or give me a follow and do not remove signatures from scripts

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
df_create({
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
})
```
#### the simplest way:
```js
df_create({
  "theme": "dark", // Optional
  "title": "Example",
  "content": "here you can put your html code<br>Good luck!<br>",
});
```

## What I plan to do:
* Ability to open several frames at once
* More themes and buttons
* More animations
* code optimization

I'm open to ideas. if you have any idea, write me a message on [discord](https://dicord.com/639174051373383730) or write suggestion on the open thread under this project
