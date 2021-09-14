---
layout: page
title: 'CFP - Posters'
permalink: 'cfp/posters/'
collection: cfp
---

To be announced soon.

<!--
# Important Dates

# Submission

# Poster Presentation

# Contact

# Posters Co-Chairs
-->

# Chairs

{% for member in site.data.gsheet.PC %}
  {% if member.Role == "Posters Chairs" %}
- {{ member.First }} {{ member.Given }}
  {% endif %}
{% endfor %}
