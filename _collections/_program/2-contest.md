---
layout: page
title: 'Visual Data Storytelling Contest Shortlist'
permalink: '/program/contest/'
---

2022 IEEE PacificVis Visual Data Storytelling Contest accepts video, data comic or infographic that uses visualization to communicate a narrative, a message or a series of insights. This year we received 10 submissions, which were reviewed by [7 judges]({{ site.baseurl }}/cfp/story/#jury), and ultimately 4 works were shortlisted. The winners will be announced during PacificVis 2022.


<!-- To view all shortlisted entries, please visit the Storytelling Contest Showcase on Vimeo. -->

<span class="notice">Sortlisted entries to appear soon.</span>

<script src="https://unpkg.com/vue@3"></script>
<script type="text/javascript" src="{{ site.baseurl }}/assets/javascripts/accepted.js"></script>

{% assign accepted = site.data.accepted %}

# Visual Data Storytelling Contest

{% assign id = 1 %}

{% for paper in accepted["Visual Data Storytelling Contest"] %}
## {{ id }}. <span class="contest-title">{{ paper["Title"] }}</span>

<span class="notice">(Video to appear soon.)</span>

{% for author in paper["authors"] -%}
<span class="paper-author">{{ author }}</span><br/>
{% endfor %}

**Abstract**: {{ paper["Abstract.1"] }}

{% assign id = id | plus: 1 %}
{% endfor %}

<!-- script type="text/javascript" src="{{ site.baseurl }}/assets/javascripts/accepted.js"></script -->
