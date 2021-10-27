{% for member in data.PC %}
{%- if role == member.Role %}<span style="display: inline-block; width: 25%;">{{ member.First }} {{ member.Given }}</span>{% endif -%}
{% endfor %}
