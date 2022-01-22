---
layout: home
title: 'PacificVis 2022'
---

{% assign data = site.data.publicity %}

The 15th IEEE Pacific Visualization Symposium will be held from April 11, 2022, through April 14. PacificVis 2022 was planned as a regular conference, then in a hybrid form. The current developments of the global and domestic health crisis made it increasingly unlikely that the physical meeting could take place. PacificVis 2022 moves to a full-online conference. We will welcome the visualization community with excitement and hospitality in a virtual format.

Visualization has become an increasingly important research area due to its wide range of applications in many disciplines. PacificVis is an IEEE sponsored international visualization symposium held in the Asia-Pacific region, with the objective to foster greater exchange between visualization researchers and practitioners, and to draw more researchers in the Asia-Pacific region to enter this rapidly growing area of research.

PacificVis is a unified visualization symposium, welcoming all areas of visualization research such as: information visualization, scientific visualization, graph and network visualization, visual analytics, and specific applications such as (but not limited to) security-, software- and bio-visualization. Authors are invited to submit original and unpublished research and application papers in all areas of visualization. We encourage papers in any new, novel, and exciting research area that pertains to visualization.

<!--
# Welcome to PacificVis 2022!

<div class="conf-chair" style="display: inline-block; width: 47%; text-align: center;">
<span class="role">General Conference Chair</span><br/>
<img src="assets/images/oc/Kazuo_Misue.jpg"
     class="circle" width="200" height="200" /><br />
<strong>Kazuo Misue</strong><br/>
University of Tsukuba
</div>

<div class="conf-chair" style="display: inline-block; width: 47%; text-align: center;">
<span class="role">Organization Chair</span><br/>
<img src="assets/images/oc/Naohisa_Sakamoto.jpg"
     class="circle" width="200" height="200" /><br />
<strong>Naohisa Sakamoto Misue</strong><br/>
Kobe University
</div>
-->

# Conference Committees

{% assign role = "" %}
{% for member in data.Organization %}
  {% if role != member.Role %}
    {% assign role = member.Role %}
<p class="oc-role">{{ member.Role }}</p>
  {% endif %}

<div style="display: inline-block; width: 32%; text-align: center;">
  {% if member.Photo == "yes" %}
<img src="assets/images/oc/{{ member.First | replace: " ", "_" }}_{{ member.Given }}.jpg"
     class="circle" width="150" height="150" /><br />
  {% else %}
<img src="assets/images/oc/nobody.jpg" width="100" height="100" /><br />
  {% endif %}
<strong>{{ member.First }} {{ member.Given }}</strong><br/>
{{ member.Affiliation }}
</div>

{% endfor %}

---

# Sponsors

<table align="center" border="0" cellpadding="0" cellspacing="0">
    <tr bordercolor="red">
        <td width="250">
           <img src="assets/images/sponser/IEEE-logo.jpg">
        </td>
        <td width="250">
           <img src="assets/images/sponser/IEEE-CS_LogoTM-black.jpg">
        </td>    
        <td height="250">
           <img src="assets/images/sponser/vgtclogo-128_128.jpg">
        </td>    
    </tr>
</table>

# Academic Sponsors

---
