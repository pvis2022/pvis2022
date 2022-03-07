---
layout: page
title: 'Accepted Papers / Notes / Posters'
permalink: '/program/accepted/'
---

<script src="https://unpkg.com/vue@3"></script>
<script type="text/javascript" src="{{ site.baseurl }}/assets/javascripts/talks_data.js"></script>

{% assign talks = site.data.talks_data %}

# Full Papers

{% for paper in talks["Full Papers"] %}
- <span class="paper-title">{{ paper["Title"] }}</span>
  {%- comment %} {% if paper["type"] == "TVCG" %}<span class="paper-type paper-type-tvcg">tvcg</span> {% endif -%} {% endcomment %}
  <span class="paper-type">paper</span>
  <br/>
    {% for author in paper["authors"] -%}
    <span class="paper-author">{{ author }}</span><br/>
    {% endfor %}
{% endfor %}

# Visualization Notes

{% for paper in talks["Visualization Notes"] %}
- <span class="paper-title">{{ paper["Title"] }}</span>
  <span class="paper-type">note</span>
  <br/>
    {% for author in paper["authors"] -%}
    <span class="paper-author">{{ author }}</span><br/>
    {% endfor %}
{% endfor %}

<div id="posters"></div>

<!-- script type="text/javascript" src="{{ site.baseurl }}/assets/javascripts/talks.js"></script -->
