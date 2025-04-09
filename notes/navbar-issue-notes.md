/*
Project Notes: Navbar Rendering Issue (Mobile View)

## Description:
While building the responsive navbar for this project, I encountered a rendering issue specific to mobile view. When the hamburger icon was clicked to toggle the .nav-menu, one of the <li> elements (the "Order Online" button) was not displaying with the rest of the list. Instead, it rendered halfway up into the navbar, while the other <li> elements displayed below as intended.

## Debugging Process:
- I systematically eliminated causes like padding, z-index, and overflow properties.
- The problem persisted even after removing padding from the <li>.
- I eventually discovered that I had applied `display: flex` directly to the <li class="order-list">.

## Root Cause:
Applying `display: flex` to the <li> caused that item to break out of the normal vertical stacking behavior of .nav-menu. This became especially problematic because .nav-menu was transitioning its height from `max-height: 0` to a defined value during the toggle animation.

## Solution:
- I removed `display: flex` from the <li> itself.
- I moved the centering styles into the <a> inside the <li>, using `display: flex` and `justify-content: center` there instead.
- I also ensured all <li> elements inside .nav-menu were treated with consistent styling to preserve the intended flow.

## Key Takeaways:
- Flexbox can interfere with layout flow inside containers with animated height transitions.
- When working with collapsing menus, consistent styling across siblings (e.g., <li>) is crucial.
- Sometimes a child element can be styled directly without needing to alter its parent.
- Carefully isolating the problem by removing styles one-by-one is the best way to pinpoint layout bugs.

## Interview Ready Summary:
"I had a layout issue where a button in my mobile nav menu was jumping into the navbar on toggle. After debugging, I learned that `display: flex` on the <li> was interfering with the menu's transition. Moving that styling to the inner <a> fixed the issue, and taught me a lot about how flexbox interacts with layout transitions." */

## Modularization Issues
One issue that I have a difficult time resolving on my own, is to know what files I should place certain styling classes. For example, while creating the navbar, I used a combination of button styling that are used elsewhere in the project, in addition to the styling that I designed specifically for the "Order Online" button. If I were to define the styling in a universal file like style.css, vs my nav.css, I would struggle to target 