---
layout: page
title: 'Accepted Papers / Notes / Posters'
permalink: '/program/accepted/'
---

{% include hide.md %}

{% assign accepted = site.data.accepted %}
{% assign youtube = site.data.youtube.index %}

{{ youtube }}

# Full Papers

{% for paper in accepted["Full Papers"] %}
{% assign id = paper["Paper ID"] %}
<div class="paper"><span class="title">{{ paper["Title"] }}</span>&nbsp; 
  {% if paper["type"] == "TVCG talk" %}<span class="type type-tvcg">tvcg</span>
  {% elsif paper["type"] == "Note" %}<span class="type">note</span>
  {% elsif paper["type"] == "PPaper" %}<span class="type type-premium">paper</span>
  {% else %}<span class="type">paper</span>{% endif -%}
  <ul>
    {% for author in paper["authors"] -%}
    <li class="author">{{ author }}</li>
    {% endfor %}
  </ul>
  <abstract paper_id="{{id}}"></abstract>
  <preview  paper_id="{{id}}"></preview>
</div>

{% endfor %}

# Visualization Notes

{% for paper in accepted["Visualization Notes"] %}
- <span class="title">{{ paper["Title"] }}</span>
  <span class="type">note</span>
  <br/>
    {% for author in paper["authors"] -%}
    <span class="author">{{ author }}</span><br/>
    {% endfor %}
{% endfor %}

<div id="posters"></div>

<script src="https://unpkg.com/vue@3"></script>
<script type="text/javascript" src="/pvis2022/assets/javascripts/accepted.json.js"></script>
<script type="text/javascript" src="/pvis2022/assets/javascripts/preview.json.js"></script>
<script type="text/javascript" src="/pvis2022/assets/javascripts/accepted.js"></script>
