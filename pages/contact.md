---
title: 'Contact'
permalink: '/contact/'
---

{% include icon-facebook.html username=site.facebook_username label='Facebook' %}

{% include icon-twitter.html username=site.twitter_username label='Twitter' %}

<a href="{{ site.feed.path | default: 'feed.xml' | relative_url }}" title="Atom Feed">
<span class="icon icon--rss">{% include icon-rss.svg %}</span>
<span class="label">{{ site.data.theme.t.subscribe | default: 'Subscribe' }}</span>
