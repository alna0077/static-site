# Web Fonts
 In the first article of the module, we explored the basic CSS features available for styling fonts and text. In this article we will go further, exploring web fonts in detail. We'll see how to use custom fonts with your web page to allow for more varied, custom text styling.


| Prerequisites: | Objective: |
| -------------- | -------------- |
| Basic computer literacy, HTML basics (study Introduction to HTML), CSS basics (study Introduction to CSS), CSS text and font fundamentals. | To learn how to apply web fonts to a web page, using either a third party service, or by writing your own code. |

## Font families recap
As we looked at in Fundamental text and font styling, the fonts applied to your HTML can be controlled using the font-family property. This takes one or more font family names. When displaying a webpage, a browser will travel down a list of font-family values until it finds a font available on the system it is running on:

``` css
p {
  font-family: Helvetica, "Trebuchet MS", Verdana, sans-serif;
}
```

This system works well, but traditionally web developers' font choices were limited. There are only a handful of fonts that you can guarantee to be available across all common systems — the so-called Web-safe fonts. You can use the font stack to specify preferred fonts, followed by web-safe alternatives, followed by the default system font. However, this increases your workload because of the testing required to make sure that your designs work with each font.

## Web fonts

But there is an alternative that works very well. CSS allows you to specify font files, available on the web, to be downloaded along with your website as it's accessed. This means that any browser supporting this CSS feature can display the fonts you've specifically chosen. Amazing! The syntax required looks something like this:

First of all, you have a @font-face ruleset at the start of the CSS, which specifies the font file(s) to download:

``` CSS
@font-face {
  font-family: "myFont";
  src: url("myFont.woff2");
}
```
Below this you use the font family name specified inside @font-face to apply your custom font to anything you like, as normal:

``` CSS
html {
  font-family: "myFont", "Bitstream Vera Serif", serif;
}
```
The syntax does get a bit more complex than this. We'll go into more detail below.

Here are some important things to bear in mind about web fonts:

  1.  Fonts generally aren't free to use. You have to pay for them and/or follow other license conditions, such as crediting the font creator in your code (or on your site). You shouldn't steal fonts and use them without giving proper credit.
  2.  All major browsers support WOFF/WOFF2 (Web Open Font Format versions 1 and 2). Even older browsers such as IE9 (released in 2011) support the WOFF format.
  3.  WOFF2 supports the entirety of the TrueType and OpenType specifications, including variable fonts, chromatic fonts, and font collections.
  4.  The order in which you list font files is important. If you provide the browser with a list of multiple font files to download, the browser will choose the first font file it's able to use. That's why the format you list first should be the preferred format — that is, WOFF2 — with the older formats listed after that. Browsers that don't understand one format will then fall back to the next format in the list.
  5. If you need to work with legacy browsers, you should provide EOT (Embedded Open Type), TTF (TrueType Font), and SVG web fonts for download. This article explains how to use the Fontsquirrel Webfont Generator to generate the required files.


## Link states
```
 The first thing to understand is the concept of link states — different states that links can exist in. These can be styled using different pseudo-classes:

    Link: A link that has a destination (i.e., not just a named anchor), styled using the :link pseudo class.
    Visited: A link that has already been visited (exists in the browser's history), styled using the :visited pseudo class.
    Hover: A link that is hovered over by a user's mouse pointer, styled using the :hover pseudo class.
    Focus: A link that is focused (e.g., moved to by a keyboard user using the Tab key or something similar, or programmatically focused using HTMLElement.focus()) — this is styled using the :focus pseudo class.
    Active: A link that is activated (e.g., clicked on), styled using the :active pseudo class.

```
## Default styles
The example below illustrates what a link will look and behave like by default; though the CSS is enlarging and centering the text to make it stand out more. You can compare the look and behavior of the default stylings in the example with the look and behavior of other links on this page which have more CSS styles applied. Default links have the following properties:
 - Links are underlined.   
 - Unvisited links are blue.
 - Visited links are purple.
 - Hovering a link makes the mouse pointer change to a little hand icon.
 - Focused links have an outline around them — you should be able to focus on the links on this page with the keyboard by pressing the tab key. (On Mac, you'll need to use option + tab , or enable the Full Keyboard Access: All controls option by pressing Ctrl + F7 .)
- Active links are red. Try holding down the mouse button on the link as you click it.