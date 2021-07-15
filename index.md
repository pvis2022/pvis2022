---
layout: home
title: 'Welcome to the 15th IEEE Pacific Visualization Symposium'
---

Welcome to the 15th IEEE Pacific Visualization Symposium!  PacificVis 2022 <!-- will --> is planned to be held during April 11, 2022 through April 14, 2022 at Tsukuba Center for Institutes, Japan.

Visualization has become an increasingly important research area due to its wide range of applications in many disciplines. PacificVis is an IEEE sponsored international visualization symposium held in the Asia-Pacific region, with the objective to foster greater exchange between visualization researchers and practitioners, and to draw more researchers in the Asia-Pacific region to enter this rapidly growing area of research.

PacificVis is a unified visualization symposium, welcoming all areas of visualization research such as: information visualization, scientific visualization, graph and network visualization, visual analytics, and specific applications such as (but not limited to) security-, software- and bio-visualization. Authors are invited to submit original and unpublished research and application papers in all areas of visualization. We encourage papers in any new, novel, and exciting research area that pertains to visualization.


# Organizing Committee Members

{% assign role = "" %}
{% for member in site.data.gsheet.Organization %}
  {% if role != member.Role %}
    {% assign role = member.Role %}
**{{ member.Role }}**
  {% endif %}
- {{ member.First }} {{ member.Given }} ({{ member.Affiliation }})
{% endfor %}

---

# Sponsors

---

# Academic Sponsors

---

# Contents

- [Call for Papers](cfp/)

- [Venue, Travel, & Accomodation](venue/)

- [Contact](contact/)
