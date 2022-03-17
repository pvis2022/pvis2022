---
layout: page
title: 'Accepted Papers / Notes / Posters'
permalink: '/program/accepted/'
date: 2022-03-17
---

Please look at the lists of full papers and visualization notes.  Posters show up soon.

<script src="https://unpkg.com/vue@3"></script>

{% assign accepted = site.data.accepted %}

# Full Papers

<!-- https://stackoverflow.com/questions/64010560/passing-props-to-vue-root-instance-via-attributes-on-element-the-app-is-mounted -->

{% for paper in accepted["Full Papers"] %}
{% assign id = paper["Paper ID"] %}
<paper data-paper_id="{{id}}"></paper>
{% endfor %}

# Visualization Notes

{% for paper in accepted["Visualization Notes"] %}
{% assign id = paper["Paper ID"] %}
<paper data-paper_id="{{id}}"></paper>
{% endfor %}

# Posters

(To appear soon)

<script type="text/javascript" src="/pvis2022/assets/javascripts/accepted.json.js"></script>
<script type="text/javascript" src="/pvis2022/assets/javascripts/preview.json.js"></script>
<script type="text/javascript" src="/pvis2022/assets/javascripts/accepted.js"></script>
