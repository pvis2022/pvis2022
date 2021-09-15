---
title: 'CFP - Visualization Meets AI Workshop'
permalink: 'cfp/ai/'
---

{% assign data = site.data.publicity %}

To be announced soon.

<!--
# Important Dates

# Submission

# Poster Presentation

# Contact

-->

# Chairs

{% for member in data.PC %}
  {% if member.Role == "Visualization Meets AI Workshop Chairs" %}
- {{ member.First }} {{ member.Given }}
  {% endif %}
{% endfor %}
