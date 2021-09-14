---
layout: page
title: 'CFP - Visualization Meets AI Workshop'
permalink: 'cfp/ai/'
collection: cfp
---

To be announced soon.

<!--
# Important Dates

# Submission

# Poster Presentation

# Contact

-->

# Chairs

{% for member in site.data.gsheet.PC %}
  {% if member.Role == "Visualization Meets AI Workshop Chairs" %}
- {{ member.First }} {{ member.Given }}
  {% endif %}
{% endfor %}
