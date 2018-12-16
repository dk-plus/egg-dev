{% extends "base.tpl" %}

{% block content %}
  <h1>{{name}}</h1>
  <h3>author: {{author}}</h3>
  <ul>
    {% for link in urls %}
    <li><a href="{{link}}">{{link}}</a></li>
    {% endfor %}
  </ul>
{% endblock %}