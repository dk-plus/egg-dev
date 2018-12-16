{% extends "base.tpl" %}

{% block content %}
  <form method="post" action="{{target}}">
    <input type="text" name="username"/>
    <input type="password" name="password"/>
    <input type="submit" value="Submit"/>
  </form>
{% endblock %}