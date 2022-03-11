{% assign tech_session = site.data.sessions[session_id] %}

{% if hide %}
## {{session_period[session_id]}} - Session {{session_id | plus: 1}}
{% else %}
## {{session_period[session_id]}} - Session {{session_id | plus: 1}}: {{tech_session["session"]}} {#session{{session_id | plus: 1}}}
{% endif %}

Chair: {{tech_session["chair"]}}

{% if hide %}
<p class="tba">Fascinating talks to be announced soon.</p>
{% endif %}

{% for id in tech_session["talks"] %}
{% assign paper = index[id] %}
{% if hide %} {% else %}
- <span class="paper-title">{{ paper["Title"] }}</span>
  {% if paper["type"] == "TVCG talk" %}<span class="paper-type paper-type-tvcg">tvcg</span>
  {% else %}<span class="paper-type">paper</span>{% endif -%}
  <br/>
    {% for author in paper["authors"] -%}
    <span class="paper-author">{{ author }}</span><br/>
    {% endfor %}
{% endif %}
{% endfor %}
