<html>
  <head>
    <title>Blog</title>
    <link rel="stylesheet" href="/public/css/index.css" />
  </head>
  <body>
    <h1>{{title}}</h1>
    <h2>hi! {{name}}</h2>
    <form method="post" action='/user'>
      <input name="username"/>
      <input type="submit" value="Submit"/>
    </form>
    <script src="/public/js/index.js"></script>
  </body>
</html>