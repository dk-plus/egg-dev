{% extends "base.tpl" %}

{% block content %}
<div>
  {% for article in list %}
  <div>
    <h3>{{article.title}}</h3>
    <span>{{article.author}}</span>
    <span>{{article.date}}</span>
    <p>{{article.shorts}}</p>
  </div>
  {% endfor %}
</div>
{% endblock %}