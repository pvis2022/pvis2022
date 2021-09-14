---
layout: page
title: 'CFP - Visual Data Storytelling Contest'
permalink: '/cfp/story/'
collection: cfp
---

{% assign data = site.data.publicity %}

To be announced soon.

<!--
# Requirements

# Submission Procedure

# Awards and Rating

# Jury

# Contact
-->

# Chairs

{% for member in data.PC %}
  {% if member.Role == "Visual Storytelling Contest Chairs" %}
- {{ member.First }} {{ member.Given }}
  {% endif %}
{% endfor %}
