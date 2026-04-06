---
layout: default
title: "Compare Capabilities"
description: "See how Claude's capabilities translate across professional roles — side by side."
---

<div class="compare-page">

  <header class="compare-header">
    <div class="container">
      <a href="{{ site.baseurl }}/" class="back-link">&larr; All roles</a>
      <h1>Compare Capabilities Across Roles</h1>
      <p class="compare-description">
        The same underlying Claude capability, described in two professional
        vocabularies. Select any capability to see both perspectives.
      </p>
    </div>
  </header>

  <div class="compare-body container">

    {% comment %}
      Build a lookup of all capabilities from all roles, keyed by capability id.
      For each unique id, collect each role's entry.
    {% endcomment %}

    {% assign all_roles = site.roles | sort: "order" %}

    {% comment %}Collect all unique capability IDs in encounter order{% endcomment %}
    {% assign seen_ids = "" | split: "" %}
    {% for role in all_roles %}
      {% for cap in role.capabilities %}
        {% unless seen_ids contains cap.id %}
          {% assign seen_ids = seen_ids | push: cap.id %}
        {% endunless %}
      {% endfor %}
    {% endfor %}

    {% comment %}
      Group IDs: shared (appear in 2+ roles) vs role-specific (appear in 1 role only)
    {% endcomment %}
    {% assign shared_ids = "" | split: "" %}
    {% assign solo_ids   = "" | split: "" %}

    {% for cap_id in seen_ids %}
      {% assign count = 0 %}
      {% for role in all_roles %}
        {% for cap in role.capabilities %}
          {% if cap.id == cap_id %}
            {% assign count = count | plus: 1 %}
          {% endif %}
        {% endfor %}
      {% endfor %}
      {% if count >= 2 %}
        {% assign shared_ids = shared_ids | push: cap_id %}
      {% else %}
        {% assign solo_ids = solo_ids | push: cap_id %}
      {% endif %}
    {% endfor %}

    {% comment %}--- Shared capabilities section ---{% endcomment %}
    {% if shared_ids.size > 0 %}
      <p class="compare-section-heading">Capabilities that appear across multiple roles</p>

      {% for cap_id in shared_ids %}
        {% comment %}Find the first role that has this cap to get a display title{% endcomment %}
        {% assign display_title = "" %}
        {% for role in all_roles %}
          {% for cap in role.capabilities %}
            {% if cap.id == cap_id and display_title == "" %}
              {% assign display_title = cap.title %}
            {% endif %}
          {% endfor %}
        {% endfor %}

        <details class="compare-capability">
          <summary class="compare-capability-summary">
            <span class="compare-capability-title">{{ display_title }}</span>
            <span class="compare-capability-roles">
              {% assign role_names = "" | split: "" %}
              {% for role in all_roles %}
                {% for cap in role.capabilities %}
                  {% if cap.id == cap_id %}
                    {% assign role_names = role_names | push: role.role_short %}
                  {% endif %}
                {% endfor %}
              {% endfor %}
              {{ role_names | join: " &middot; " }}
            </span>
            <span class="compare-expand-icon" aria-hidden="true">&#9660;</span>
          </summary>

          <div class="compare-panels">
            {% for role in all_roles %}
              {% assign matched_cap = nil %}
              {% for cap in role.capabilities %}
                {% if cap.id == cap_id %}
                  {% assign matched_cap = cap %}
                {% endif %}
              {% endfor %}

              <div class="compare-panel" style="--accent: {{ role.accent_color }}">
                <p class="compare-panel-role">{{ role.role_short }}</p>
                {% if matched_cap %}
                  <p class="compare-panel-title">{{ matched_cap.title }}</p>
                  <p class="compare-panel-description">{{ matched_cap.role_description }}</p>
                  <a href="{{ site.baseurl }}{{ role.url }}#{{ cap_id }}" class="compare-panel-link">
                    Full entry on {{ role.role_short }} page &rarr;
                  </a>
                {% else %}
                  <p class="compare-panel-missing">Not yet documented for this role.</p>
                {% endif %}
              </div>
            {% endfor %}
          </div>
        </details>
      {% endfor %}
    {% endif %}

    {% comment %}--- Role-specific capabilities section ---{% endcomment %}
    {% if solo_ids.size > 0 %}
      <p class="compare-section-heading">Role-specific capabilities</p>

      {% for cap_id in solo_ids %}
        {% assign display_title = "" %}
        {% assign display_role  = nil %}
        {% assign display_cap   = nil %}
        {% for role in all_roles %}
          {% for cap in role.capabilities %}
            {% if cap.id == cap_id %}
              {% assign display_title = cap.title %}
              {% assign display_role  = role %}
              {% assign display_cap   = cap %}
            {% endif %}
          {% endfor %}
        {% endfor %}

        <details class="compare-capability">
          <summary class="compare-capability-summary">
            <span class="compare-capability-title">{{ display_title }}</span>
            <span class="compare-capability-roles">{{ display_role.role_short }} only</span>
            <span class="compare-expand-icon" aria-hidden="true">&#9660;</span>
          </summary>

          <div class="compare-panels">
            {% for role in all_roles %}
              <div class="compare-panel" style="--accent: {{ role.accent_color }}">
                <p class="compare-panel-role">{{ role.role_short }}</p>
                {% if role.role_id == display_role.role_id %}
                  <p class="compare-panel-title">{{ display_cap.title }}</p>
                  <p class="compare-panel-description">{{ display_cap.role_description }}</p>
                  <a href="{{ site.baseurl }}{{ role.url }}#{{ cap_id }}" class="compare-panel-link">
                    Full entry on {{ role.role_short }} page &rarr;
                  </a>
                {% else %}
                  <p class="compare-panel-missing">Not yet documented for this role.</p>
                {% endif %}
              </div>
            {% endfor %}
          </div>
        </details>
      {% endfor %}
    {% endif %}

  </div>
</div>
