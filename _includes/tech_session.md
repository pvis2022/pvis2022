{% assign tech_session = site.data.sessions[session_id] %}

{% if hide %}
<h2 id="session{{session_id | plus: 1}}">{{session_period[session_id]}} - Session {{session_id | plus: 1}}</h2>
{% else %}
<h2 id="session{{session_id | plus: 1}}">{{session_period[session_id]}} - Session {{session_id | plus: 1}}: {{tech_session["session"]}}</h2>
{% endif %}

Chair: {{tech_session["chair"]}}

{% if hide %}
<p class="tba">Fascinating talks to be announced soon.</p>
{% endif %}

{% for id in tech_session["talks"] %}
{% assign paper = index[id] %}
{% if hide %} {% else %}
<div class="paper"><span class="paper-title">{{ paper["Title"] }}</span>&nbsp; 
  {% if paper["type"] == "TVCG talk" %}<span class="paper-type paper-type-tvcg">tvcg</span>
  {% elsif paper["type"] == "Note" %}<span class="paper-type">note</span>
  {% elsif paper["type"] == "PPaper" %}<span class="paper-type paper-type-premium">paper</span>
  {% else %}<span class="paper-type">paper</span>{% endif -%}
  <br/>
    {% for author in paper["authors"] -%}
    <span class="paper-author">{{ author }}</span><br/>
    {% endfor %}
  <abstract paper_id="{{id}}" />
</div>

{% endif %}
{% endfor %}
