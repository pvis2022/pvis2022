---
title: 'CFP - Posters'
permalink: 'cfp/posters/'
---

{% assign data = site.data.publicity %}

To be announced soon.

<!--
# Important Dates

{% assign dates = data['Important Dates'] %}

|                         | Dates          |
| ------------------------|----------------|
{%- for date in dates %}
  {%- if date['Event Type'] == "poster" %}
| {{ date.Event }} | {{ date.Date }} |
  {%- endif %}
{%- endfor %}



# Submission

# Poster Presentation

# Contact

# Posters Co-Chairs

-->

# Chairs

{% for member in data.PC %}
  {% if member.Role == "Posters Chairs" %}
- {{ member.First }} {{ member.Given }}
  {% endif %}
{% endfor %}
