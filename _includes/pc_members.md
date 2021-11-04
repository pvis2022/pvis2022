{% assign members = data.PC | where: "Role", role %}

|                    |                    |
|--------------------|--------------------|
{% for member in members -%}
|{{ member.First }} {{ member.Given }} | {{ member.Affiliation }} |
{% endfor %}

{% comment %}
{% for member in data.PC %}
{%- if role == member.Role %}<span style="display: inline-block; width: 48%;">{{ member.First }} {{ member.Given }}, {{ member.Affiliation }}</span>{% endif -%}
{% endfor %}
{% endcomment %}
