---
layout: page
title: 'CFP - Visualization Notes'
permalink: 'cfp/notes/'
collection: cfp
---

{% assign data = site.data.publicity %}

To be announced soon.

<!--
# Important Dates

# Submission

# Camera Ready

# Contact
-->

# Chairs

{% for member in data.PC %}
  {% if member.Role == "VisNotes Chairs" %}
- {{ member.First }} {{ member.Given }}
  {% endif %}
{% endfor %}
