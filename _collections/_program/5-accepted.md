---
layout: page
title: 'Accepted Papers / Notes / Posters'
permalink: '/program/accepted/'
---

<script src="https://unpkg.com/vue@3"></script>
<script type="text/javascript" src="{{ site.baseurl }}/assets/javascripts/accepted.js"></script>

{% assign accepted = site.data.accepted %}

# Full Papers

{% for paper in accepted["Full Papers"] %}
- <span class="paper-title">{{ paper["Title"] }}</span>
  {% if paper["type"] == "PPaper" %}<span class="paper-type paper-type-premium">paper</span>
  {%- elsif paper["type"] == "Paper" %} <span class="paper-type">paper</span> {% endif -%}
  <br/>
    {% for author in paper["authors"] -%}
    <span class="paper-author">{{ author }}</span><br/>
    {% endfor %}
{% endfor %}

# Visualization Notes

{% for paper in accepted["Visualization Notes"] %}
- <span class="paper-title">{{ paper["Title"] }}</span>
  <span class="paper-type">note</span>
  <br/>
    {% for author in paper["authors"] -%}
    <span class="paper-author">{{ author }}</span><br/>
    {% endfor %}
{% endfor %}

<div id="posters"></div>

<!-- script type="text/javascript" src="{{ site.baseurl }}/assets/javascripts/accepted.js"></script -->
