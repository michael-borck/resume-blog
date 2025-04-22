---
layout: splash
title: "My Resume Magazine"
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/abstract-hero.jpg
  actions:
    - label: "View Resumes"
      url: "/resumes/"
excerpt: "Welcome to a magazine-style showcase of my professional journey."
intro: 
  - excerpt: "Explore my experience, passions, and projects through this interactive magazine."

feature_row:
  - image_path: https://images.unsplash.com/photo-1499750310107-5fef28a66643
    alt: "Resume"
    title: "Resumes"
    excerpt: "Browse through my tailored resumes featuring my diverse professional experience."
    url: "/resumes/"
    btn_label: "View Resumes"
    btn_class: "btn--primary"
  - image_path: https://images.unsplash.com/photo-1521737604893-d14cc237f11d
    alt: "Projects"
    title: "Projects"
    excerpt: "Discover the projects I've built and the problems I've solved throughout my career."
    url: "/projects/cloudcore/"
    btn_label: "See Projects"
    btn_class: "btn--primary"
  - image_path: https://images.unsplash.com/photo-1533073526757-2c8ca1df9f1c
    alt: "Passions"
    title: "Personal Passions"
    excerpt: "Learn about what drives me beyond my professional work."
    url: "/passions/building-dreams-layer-by-layer/"
    btn_label: "Explore Passions"
    btn_class: "btn--primary"

feature_row2:
  - image_path: https://images.unsplash.com/photo-1524178232363-1fb2b075b655
    alt: "Teaching"
    title: "Teaching Experience"
    excerpt: "My approach to education and mentorship has been shaped by years of teaching experience across different disciplines."
    url: "/teaching/teaching-philosophy/"
    btn_label: "Learn More"
    btn_class: "btn--primary"
---

{% include feature_row id="intro" type="center" %}

## Featured Content

{% include feature_row %}

## Teaching & Mentorship

{% include feature_row id="feature_row2" type="left" %}

## Latest Articles

<div class="grid__wrapper">
  {% assign latest_posts = site.passions | concat: site.projects | sort: 'date' | reverse | slice: 0, 6 %}
  {% for post in latest_posts %}
    {% include archive-single.html type="grid" %}
  {% endfor %}
</div>