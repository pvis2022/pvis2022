{% assign tech_session = site.data.sessions[session_id] %}

## Session {{session_id | plus: 1}}: {{tech_session["session"]}}

Chair: {{tech_session["chair"]}}

{% for id in tech_session["talks"] %}
{% assign paper = index[id] %}
- <span class="paper-title">{{ paper["Title"] }}</span>
  {% if paper["type"] == "TVCG talk" %}<span class="paper-type paper-type-tvcg">tvcg</span>
  {% else %}<span class="paper-type">paper</span>{% endif -%}
  <br/>
    {% for author in paper["authors"] -%}
    <span class="paper-author">{{ author }}</span><br/>
    {% endfor %}
{% endfor %}

