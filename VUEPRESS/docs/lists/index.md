---
title: Styling Lists
description: Lists behave like any other text for the most part, but there are some CSS properties specific to lists that you need to know about, as well as some best practices to consider. This article explains all.
---

# A simple list example
To begin with, let's look at a simple list example. Throughout this article, we'll look at unordered, ordered, and description lists — all have styling features that are similar, as well as some that are particular to themselves. The unstyled example is available on GitHub (check out the source code too.)

## The HTML for our list example looks like so:
```
 <h2>Shopping (unordered) list</h2> 

<p>
  Paragraph for reference, paragraph for reference, paragraph for reference,
  paragraph for reference, paragraph for reference, paragraph for reference.
</p>


<ul>
  <li>Hummus</li>
  <li>Pita</li>
  <li>Green salad</li>
  <li>Halloumi</li>
</ul>

<h2>Recipe (ordered) list</h2>

<p>
  Paragraph for reference, paragraph for reference, paragraph for reference,
  paragraph for reference, paragraph for reference, paragraph for reference.
</p>

<ol>
  <li>Toast pita, leave to cool, then slice down the edge.</li>
  <li>
    Fry the halloumi in a shallow, non-stick pan, until browned on both sides.
  </li>
  <li>Wash and chop the salad.</li>
  <li>Fill pita with salad, hummus, and fried halloumi.</li>
</ol>

<h2>Ingredient description list</h2>

<p>
  Paragraph for reference, paragraph for reference, paragraph for reference,
  paragraph for reference, paragraph for reference, paragraph for reference.
</p>

<dl>
  <dt>Hummus</dt>
  <dd>
    A thick dip/sauce generally made from chick peas blended with tahini, lemon
    juice, salt, garlic, and other ingredients.
  </dd>
  <dt>Pita</dt>
  <dd>A soft, slightly leavened flatbread.</dd>
  <dt>Halloumi</dt>
  <dd>
    A semi-hard, unripened, brined cheese with a higher-than-usual melting
    point, usually made from goat/sheep milk.
  </dd>
  <dt>Green salad</dt>
  <dd>That green healthy stuff that many of us just use to garnish kebabs.</dd>
</dl>
```
## Developer Ipsum

## Instalation
1. Install VuePress locally
```
npm install -D vuepress@next
```

2. Add these scripts to package.json
```
"scripts": {
  "docs:dev": "vuepress dev docs",
  "docs:build": "vuepress build docs"
}
```

3. Add the `default`, `temp` and `cache` to .gitignore file
```
echo 'node_modules' >> .gitignore
echo '.temp' >> .gitignore
echo '.cache' >> .gitignore
```

4. Create the `docs` folder
5. Inside `docs` folder, create a new .md file
> index.md

5. Start the development server
```
npm run docs:dev
```

## Basic configuration
1. Create a `.vuepress` folder inside the `docs`

2. Inside .vuepress, create the config.js file using the default theme
```
import { defaultTheme } from 'vuepress'

export default {
    lang: 'en-CA',
    title: 'Hello VuePress',
    description: 'Just playing around',
    theme: defaultTheme({
        // default theme config
        navbar: [
          {
              text: 'Home',
              link: '/',
          }
        ],
    }),
}
```
## Content
### Files and routes
1. In the `docs` folder, create a new folder with a new md file for your site
> docs/guide/index.md
```
# Here the 'Guide' page
## Developer Ipsum
- The trouble with programmers is that you can never tell what a programmer is doing until it’s too late. (Seymour Cray)
- That’s what’s cool about working with computers. They don’t argue, they remember everything, and they don’t drink all your beer. (Paul Leary) 
```

2. In the config.js, define the navbar link
```
{
  text: 'Guide',
  link: '/guide',
},
```
3. Inside the `theme:defaultTheme({})` option, define the logo. Place the image.svg in the `.vuepress/public` folder structure.
```
logo: '/images/iconmonstr-carousel-filled.svg',
```
### Frontmatter

1. In the /contact.md, override title and description of current page via frontmatter
```
---
title: Contact title page
description: Description of the contact page
---

# Contact Us

We'd love to hear from you! Here's how you can reach us...

## Get in Touch

- **Email**: [contact@example.com](mailto:contact@example.com)
- **Phone**: +1 (555) 123-4567
- **Address**: 123 VuePress St., Code City, 12345

## Social Media

- [Follow us on Twitter](https://twitter.com/)
- [Like us on Facebook](https://facebook.com/)
- [Connect with us on LinkedIn](https://linkedin.com/)

```
2. In the /index.md, define the following home options
```
---
home: true
heroImage: '/images/iconmonstr-carousel-filled.svg'
heroText: Hero text
tagline: description here...
actions:
  - text: Get Started
    link: /guide/
    type: primary
  - text: Introduction
    link: /guide/
    type: secondary
features:
- title: Feature 1 Title
  details: Feature 1 Description
- title: Feature 2 Title
  details: Feature 2 Description
- title: Feature 3 Title
  details: Feature 3 Description
footer: Here my footer
---
```

## Layout
1. Create the `layout` folder inside the `.vuepress` folder
2. Crate a layout component file
> layout/CustomLayout.vue
```
<template>
    <div class="container">
      <header>
        <h1>Layout's header</h1>
      </header>
      <main>
        <Content /> <!-- built-in component where the content of your Markdown files will be injected.  -->
        <!-- <HelloVue /> -->
      </main>
      <footer>
        <p>&copy; {{ currentYear }} My VuePress Site</p>
      </footer>
    </div>
  </template>
  
  <script>
  //import HelloVue from "../components/HelloVue.vue"
  export default {
    // components: {HelloVue},
    computed: {
      currentYear() {
        return new Date().getFullYear();
      },
    },
  }
  </script>
  
  <style scoped>
  .container {
    max-width: 800px;
    margin: 0 auto;
  }
  h1, footer{
    text-align: center;
  }
  </style>
  
```

3. Create the client config file and register the layout
> docs/.vuepress/client.ts
```
import { defineClientConfig } from '@vuepress/client'
import CustomLayout from './layouts/CustomLayout.vue'

export default defineClientConfig({
  layouts: {
    CustomLayout,
  },
})
```
4. In the guide/index.md, call the layout using the layout option in the frontmatter
```
---
title: Using a layout
layout: CustomLayout
---
```

## Component
1. Create `components` folder inside the `.vuepress` folder
1. Create the `HelloVue.vue` component
```
<template>
    <div>
        <h2>Hello from the 'HelloVue' component</h2>
    </div>
</template>

<script>
    export default{ }
</script>

<style>
</style>
```
2. In the CustomLayout.vue, uncomment the component `<HelloVue />`
