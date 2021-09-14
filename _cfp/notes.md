---
layout: page
title: 'CFP - Visualization Notes'
permalink: 'cfp/notes/'
collection: cfp
---
To be announced soon.

<!--
# Important Dates

# Submission

# Camera Ready

# Contact
-->

# Chairs

{% for member in site.data.gsheet.PC %}
  {% if member.Role == "VisNotes Chairs" %}
- {{ member.First }} {{ member.Given }}
  {% endif %}
{% endfor %}
