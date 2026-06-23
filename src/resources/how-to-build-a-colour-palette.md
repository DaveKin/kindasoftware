---
layout: layouts/guide.njk
title: "How to build a colour palette for your brand"
description: "A practical, no-nonsense guide to building a colour palette that's cohesive, accessible, and easy to apply across your product."
date: 2026-06-23
relatedTool: distil
---

A good colour palette does a lot of quiet work. It makes a product feel
considered, keeps screens legible, and saves you from re-deciding the same
thing on every new page. Here's a simple way to build one you can actually use.

## Start from something real

Abstract colour pickers are a trap — it's hard to judge a hue in isolation.
Start from an image you already like: a photograph, an illustration, a piece of
packaging. Pull the colours that recur, and you'll get a palette that feels
natural because it came from something that already worked.

## Pick a small, deliberate set

You need fewer colours than you think:

- **One primary** — your brand colour, used sparingly for emphasis and calls to action.
- **One or two neutrals** — for backgrounds, text, and borders.
- **One accent** — optional, for highlights and secondary actions.

Resist the urge to add more. A tight palette is what makes a product look
coherent; a sprawling one is what makes it look like a ransom note.

## Check contrast before you commit

Every text-on-background pairing should meet at least WCAG AA contrast
(4.5:1 for body text). Decide this early — retrofitting contrast after the
design is built is far more painful than choosing accessible colours up front.

## Export it in a form you'll actually reuse

A palette is only useful if it lives somewhere you can apply it: CSS variables,
design tokens, or your UI kit. Define it once, name each colour by role
(not by hue), and reference those names everywhere.

## Let a tool do the extraction

Pulling colours from an image by eye is slow and imprecise. This is exactly
what [Distil](/distil/) is for — give it up to five images and it builds a
palette you can export straight into your UI kit or theme.
