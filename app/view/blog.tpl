<html>
  <head>
    <title>Blog</title>
    <link rel="stylesheet" href="/public/css/index.css" />
  </head>
  <body>
    <ul>
    {% for item in list %}
      <li>
        <h1>{{item.title}}</h1>
        <p>{{item.content}}</p>
        <p>{{helper.formatTime(item.time)}}</p>
        <p>{{helper.formatSize(item.size)}}</p>
      </li>
    {% endfor %}
    </ul>
    <script src="/public/js/index.js"></script>
  </body>
</html>