import React from "react";
import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}
const ListGroup = ({ items, heading, onSelectItem }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      //Example case of 'conditionalRendering'
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;

/*
-Pending Exercises with ListGroup:
  - Make it draggable (i.e making it a 'drag and drop')
  - You can add badges/icons/toggle switches/progress bars at each step etc.. also to the options in the list
  - In the above code, instead of 'item' you can use 'reactNode' and pass other html elements
  - you can add 'hover','expandible/collapsible' affects to the above listGroup
  - you can add 'activeItems' in the prop - so that only active items from the list can be showed as content in the listGroup
-------------------------------------------------------------------------------------------------------
Q1. What are various cases in which listGroup is used in websites???

🔹 Navigation Menus
Sidebar navigation (especially in admin dashboards).

Vertical tab lists to switch content sections.

🔹 User Interfaces
Task or to-do lists (e.g., Trello-like apps).

Notification or message lists.

Contact or user lists in chat apps.

Comment or reply threads.

🔹 Content Displays
List of articles or blog posts (with thumbnails, titles, and brief info).

FAQs (each question as a list item).

Search results (like product listings, job listings, etc.).

🔹 Interactive Features
Selectable or checkable items (with active or disabled states).

Drag-and-drop reordering of items.

Expandable/collapsible list items using JavaScript.

🔹 Grouped Data Presentation
Grouped filters or categories (e.g., price range, brands in e-commerce).

Settings or preferences menu (with toggle switches).

Step-wise process flows (like checkout progress steps).

🔹 Mobile Applications (Web View)
Bottom sheet menu options.

Profile settings in a list format.

Clickable options with icons (e.g., in WhatsApp settings).

🔹 Miscellaneous
Leaderboard or ranking display.

Timeline or history of actions.

List of files or attachments.
-------------------------------------------------------------------------------------------------------
Q2: Below is important cheatsheet for mastering the short-hand bootstrap utility classes
Bootstrap provides a comprehensive set of utility classes for quickly styling and positioning elements without writing custom CSS. Here is a cheat sheet covering some of the most commonly used utility classes:
1. Spacing (Margin & Padding):
Syntax:
{property}{sides}-{size} or {property}{sides}-{breakpoint}-{size}
property: m (margin), p (padding)
sides: t (top), b (bottom), s (start/left), e (end/right), x (left & right), y (top & bottom), a (all sides)
size: 0 to 5 (increments of 0.25rem), auto (for horizontal centering with mx-auto)
Examples:
mt-3: margin-top: 1rem
px-4: padding-left & padding-right: 1.5rem
mb-sm-2: margin-bottom: 0.5rem on small screens and up
2. Display:
Syntax:
d-{value} or d-{breakpoint}-{value}
value: none, inline, inline-block, block, grid, table, table-cell, table-row, flex, inline-flex
Examples:
d-none: Hides an element
d-md-block: Displays as block on medium screens and up
d-flex: Enables Flexbox layout
3. Flexbox:
Containers:
d-flex, d-inline-flex
flex-row, flex-row-reverse, flex-column, flex-column-reverse
justify-content-start, justify-content-end, justify-content-center, justify-content-between, justify-content-around
align-items-start, align-items-end, align-items-center, align-items-baseline, align-items-stretch
align-content-start, align-content-end, align-content-center, align-content-between, align-content-around, align-content-stretch
Items:
flex-grow-1, flex-shrink-1
order-1 to order-5
align-self-start, align-self-end, align-self-center, align-self-baseline, align-self-stretch
4. Borders:
Syntax: border, border-{side}, border-{color}, border-{size}
Examples:
border: Adds a border to all sides
border-top: Adds a top border
border-primary: Adds a primary-colored border
border-0: Removes all borders
5. Colors & Backgrounds:
Text colors:
text-primary, text-secondary, text-success, text-danger, text-warning, text-info, text-light, text-dark, text-muted, text-white
Background colors:
bg-primary, bg-secondary, bg-success, bg-danger, bg-warning, bg-info, bg-light, bg-dark, bg-white, bg-transparent 
6. Text Alignment & Transformation:
Alignment: text-start, text-center, text-end, text-{breakpoint}-start
Transformation: text-lowercase, text-uppercase, text-capitalize
Wrapping & Overflow: text-wrap, text-nowrap, text-truncate
7. Visibility:
visible: Makes an element visible
invisible: Makes an element invisible while still occupying space
8. Sizing:
Width: w-25, w-50, w-75, w-100, mw-100 (max-width)
Height: h-25, h-50, h-75, h-100, mh-100 (max-height)
9. Position:
position-static, position-relative, position-absolute, position-fixed, position-sticky
top-0, start-0, bottom-0, end-0 (for absolute/fixed positioning)
This is a selection of commonly used utility classes. Bootstrap offers many more for specific use cases, which can be explored in the official Bootstrap documentation.

NOTE (on Reference): You can find more details of the above short-hand utility classes in 'Utilities' section on docs of Bootstrap documentation
--------------------------------------------------------------------------------------------------------------
Q3. Component abstraction way of setting 'active' state is shown below (Source:chatGPT)
For a cleaner codebase, abstract the logic:
const ListItem = ({ item, isActive, onClick }) => (
  <li
    className={`list-group-item ${isActive ? "active" : ""}`}
    onClick={() => onClick(item.id)}
  >
    {item.label}
  </li>
);

Use it like:
{items.map(item => (
  <ListItem
    key={item.id}
    item={item}
    isActive={activeId === item.id}
    onClick={setActiveId}
  />
))}
----------------------------------------------------------------------------------------------------
*/
