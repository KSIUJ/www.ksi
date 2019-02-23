---
layout: halfpage
permalink: /news/
title: Aktualności
excerpt:
languages:
- pl
---
<div>
<section class="features">
{% for post in site.posts %}
	<article>
		{% if post.post_img_url != "" %}
    		<a href="{{ post.url }}" class="image"><img src="{{ post.post_img_url }}" alt="" /></a>
    	{% endif; %}
		<h3 class="major">{{ post.date | date: "%d.%m.%Y" }}</h3>
		{{ post.excerpt | strip_html | truncatewords: 50 }}
		<a href="{{ post.url }}" class="special">Czytaj więcej</a>	
    </article>
{% endfor %}
</section>
</div>
