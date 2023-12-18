# Styling Lists
 When styling links, it's important to understand how to make use of pseudo-classes to style their states effectively. It's also important to know how to style links for use in common interface features whose content varies, such as navigation menus and tabs. We'll look at both these topics in this article.

## Let's look at some links


| Prerequisites: | Objective: |
| -------------- | -------------- |
| Basic computer literacy, HTML basics (study Introduction to HTML), CSS basics (study Introduction to CSS), CSS text and font fundamentals. | To learn how to style link states, and how to use links effectively in common UI features like navigation menus. |

# Let's look at some links
We looked at how links are implemented in your HTML according to best practices in Creating hyperlinks. In this article we'll build on this knowledge, showing you the best practices for styling them.

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