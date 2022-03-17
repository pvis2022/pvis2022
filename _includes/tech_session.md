{% assign tech_session = site.data.sessions[session_id] %}

<h2 id="session{{session_id | plus: 1}}">{{session_period[session_id]}} - Session {{session_id | plus: 1}}: {{tech_session["session"]}}</h2>

Chair: {{tech_session["chair"]}}

{% for paper_id in tech_session["talks"] %}
<paper data-paper_id="{{paper_id}}"></paper>
{% endfor %}

{% comment %}
{% for id in tech_session["talks"] %}
{% assign paper = index[id] %}
<div class="paper"><span class="title">{{ paper["Title"] }}</span>&nbsp; 
  {% if paper["type"] == "TVCG talk" %}<span class="type type-tvcg">tvcg</span>
  {% elsif paper["type"] == "Note" %}<span class="type">note</span>
  {% elsif paper["type"] == "PPaper" %}<span class="type type-premium">paper</span>
  {% else %}<span class="type">paper</span>{% endif -%}
  <br/>
    {% for author in paper["authors"] -%}
    <span class="author">{{ author }}</span><br/>
    {% endfor %}
  <abstract paper_id="{{id}}" />
  <preview  paper_id="{{id}}" />
</div>
{% endfor %}
{% endcomment %}
