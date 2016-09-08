---
layout: halfpage
permalink: /news/
title: Aktualności
excerpt:
languages:
- pl
---
Konferencje, warsztaty, wykłady, najnowsze przedsięwzięcia - w tej zakładce zawsze znajdziesz to czym obecnie żyje nasze Koło.

<div>
<section class="features">
{% for post in site.posts %}
	<article>
		{% if post.post_img_url != "" %}
    		<a href="{{ post.url }}" class="image"><img src="{{ post.post_img_url }}" alt="" /></a>
    	{% endif; %}
		<h3 class="major">{{ post.title }}</h3>
		{{ post.excerpt }}
		<a href="{{ post.url }}" class="special">Czytaj więcej</a>		
    </article>
{% endfor %}
</section>
</div>
