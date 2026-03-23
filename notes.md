# PUSH - 22/03/26
__=> updated visuals__
* Added background effects
* Updated notes.md


# TASKS


# index.html
=> _the Skeleton (the bones)_
|__PHRASE__|__ACRONYM/ABBREVIATION__|
|-|-|
|__<a>__|_Anchor_|
|=> Used on hyperlinks to tell the browser (or search engines) how to treat the destination.|
|__<area>__|_Area_|
|=> Used inside an <map> for image maps (clickable areas on a single image). It uses the same values as the <a> tag.|
|__<body>__|_Body_|
|=> contains everything the user actually sees and interacts with. Everything visible on your webpage lives here.|
|__<div>__|_Division_|
|=> It is a generic container used to group other HTML elements together. It doesn't have any specific meaning (like a "header" or "paragraph" does), so it’s mainly used for styling with CSS or layout purposes.|
|__<head>__|_Head(or the Brain)_|
|=> It contains metadata—information about the page that isn't displayed directly to the user but tells the browser and search engines how to handle the page.|
|__<html>__|_Document Type Declaration_|
|=> It tells the web browser that this file is an HTML5 document so it renders the page correctly.|
|__<h1>__|_Heading_|
|=> Browsers make them bold and larger than normal text by default. <h1> (most important) to <h6> (least important).|
|__<link__|_Relationship Link_|
|=> It defines the relationship between the current document and an external resource (usually in the <head>).|
|__<meta>__|_Metadata (Information about data)_|
|=> These tags provide "behind the scenes" info like character encoding or screen scaling for mobile devices.|
|__<p>__|_Paragraph_|
|=> Browsers add a little bit of vertical space (margin) above and below a <p> tag to separate it from other paragraphs.|
|__<title>__|_Title_|
|=> It is a required element inside the <head> of your HTML document. While it doesn't appear on the actual white space of the webpage, it is one of the most important tags for both users and search engines.|
|__class__|_Class_|
|=> is an attribute used to classify or group multiple elements together so they can share the same styling or behavior.|
|__charset__|_Character Set_|
|=> It tells the browser which "alphabet" or encoding system to use to display your text.|
|__content__|_Label Value_|
|=> it provides the actual value or the "answer" for the name you just defined. name is the "Question" and content is the "Answer."
|__id__|_Identifier_|
|=> A unique name given to an element (like welcome-text) so CSS and JS can find and target it specifically.|
|__href__|_Hypertext Reference_|
|=> It is the attribute used to specify the destination URL or the specific location that a link points to. Without an href, a link won't function as a clickable shortcut.|
|__lang__|_Language_|
|=> It is a global attribute used to declare the primary language of a webpage or a specific section of text. While it doesn't change how the page looks, it is critical for how machines "read" your site.|
|__name__|_Name/Label_|
|=> It gives a label or a "name" to the piece of metadata you are defining. It tells the browser or Google what kind of information is coming next.|
|__rel__|_Relationship_|
|=> specifies the relationship between the current document and the linked resource.|
|__script__|_Script Container_|
|=> It points the browser to your JavaScript file, telling it to start running the logic once the HTML is loaded.|
|__src__|_Source_|
|=> While href links to a resource, src embeds the resource directly into the webpage. When the browser sees a src attribute, it fetches that file and displays or executes it right there on the spot.|


# main.js
=> _the Brain (the timing and decisions)_
|__PHRASE__|__ACRONYM/ABBREVIATION__|
|-|-|
|__= >__|_Arrow_|
|=> provides a shorter way to write function expressions compared to traditional function keywords, often allowing implicit returns and omitting curly braces for single-line operations.|
|__{}__|_Braces_|
|=> Different meanings depending on utilisation.|
|__[]__|_Square Brackets_|
|=> they are the "go-to" for lists and data access.|
|__()__|_Parentheses / Parens_|
|=> they are primarily used for actions and logic control.|
|__.add__|_Add/Import_|
|=> It appends a new element with a specified value to a Set. If you try to add a value that already exists in the set, it will have no effect because sets only store unique values. It returns the Set object itself, allowing for method chaining.|
|__.getElementById__|_Fetcher_|
|=> It searches the HTML document and returns the first element that matches a specific id attribute. It returns an element object if found, or null if no element with that ID exists|
|__.remove__|_Remove_|
|=> The opposite of.add(). It removes the element it is called on from the DOM (Document Object Model).|
|__classList__|_Element Class Manager_|
|=> It allows JS to add or remove CSS classes. It acts like a light switch to turn your animations on and off.|
|__className__|_Class Name_|
|=> is a property used to get or set the HTML class attribute of an element. It is named className instead of just class because class is a reserved keyword in JavaScript used to define classes in Object-Oriented Programming. Using className avoids naming conflicts in your code.|
|__const__|_Constant Variable_|
|=> Creates a "container" for an object (like your text element) that won't be reassigned, making your code stable.|
|__document__|_Entry Point_|
|=> is your "entry point" to the web page's content. It is part of the Document Object Model (DOM), an API that represents the HTML page as a tree-like structure of objects that you can manipulate with code. |
|__function__|_Function_|
|=> a reusable block of code designed to perform a particular task. You define it once and "call" (execute) it as many times as you need. Think of it like a recipe: the function is the instructions, and calling it is actually cooking the meal.|
|__innerText__|_Interior Text Content_|
|=> This is the property used to change the words inside an HTML tag. It's how "Welcome" becomes "Reach for the stars.|
|=> |
|__newText__|-|
|=> |
|__runPhraseSequence__|-|
|=> |
|__setTimeout__|_Timer Function_|
|=> The "Director" of the sequence. It tells the browser to delay an action for a specific number of milliseconds (1000ms = 1s).|
|__setTimeout value__|-|
|=> |
|__startTime__|-|
|=> |
|__textElement__|-|
|=> |
|__window.onload__|_Event Handler_|
|=> A trigger that says: "Wait until every image and line of code is loaded before starting the animation."|
_

# style.css
=> _the Skin/Clothes (the look and movement)_
|__PHRASE__|__ACRONYM/ABBREVIATION__|
|-|-|
|__# (hashtag)__|-|
|=> |
|__.animate-in__|-|
|=> |
|__:root__|_Global Variable Root_|
|=> A special CSS selector used to store Variables (like colors) that you want to use throughout the entire file.|
|__align-items__|-|
|=> used to align elements along the cross axis (the axis perpendicular to the main layout direction) within a flex or grid container. If your items are in a row (flex-direction: row), align-items controls their vertical alignment. If they are in a column, it controls their horizontal alignment.|
|__background-color__|-|
|=>|
|__body__|-|
|=> |
|__color__|-|
|=>|
|__display__|-|
|=>|
|__font-family__|-|
|=>|
|__font-size__|-|
|=>|
|__font-weight__|-|
|=>|
|__height__|-|
|=>|
|__justify-content__|-|
|=> used to align items and distribute extra space along the main axis (the primary direction of the layout) within a flex or grid container. Alignment depends on the flex-direction. If it is row (default), justify-content aligns items horizontally. If it is column, it aligns them vertically.|
|__letter-spacing__|-|
|=>|
|__margin__|-|
|=>|
|__opacity__|_Transparency Level_|
|=> Controls how "see-through" an object is (0) is invisible, 1 is fully solid). It creates the fade effect.|
|__overflow__|-|
|=>|
|__transform__|_Shape/Position Modifier_|
|=> Allows you to move, rotate, or scale an element without affecting the layout of other elements.|
|__transition__|_Animation Timing_|
|=> It defines the speed and feel of a change. It tells the browser: "Don't snap to the new state; glide there over X seconds."|
|__text-align__|-|
|=>|
|__var__|-|
|=>|


# SI UNITS
|__UNIT__|__MEANING__|
|-|-|
|__UTF__|_Unicode Transformation Format_|
|=> It is a system that translates Unicode—the universal catalog where every character in every language is assigned a unique number—into a format that a computer can store and process as binary data (1s and 0s).|


# Types of specific properties
1. __{}__
* __Object Literals:__ They are used to define and create objects, acting as a container for key-value pairs _(e.g., const user = { name: "Alice" };)._
* __Code Blocks:__ They group multiple statements together in functions, if statements, and loops _(e.g., if (true) { console.log("Hello"); })._
* __Destructuring:__ They allow you to "unpack" properties from objects into distinct variables _(e.g., const { name } = user;)._
* __Template Literals:__ When preceded by a dollar sign (${}), they are used for string interpolation to embed expressions inside backticks.
* __JSX Expressions:__ In React/JSX, they are used to wrap JavaScript expressions within HTML-like markup.

2. __<a>__
* __rel="noopener":__ A security essential when using target="_blank". It prevents the new page from controlling the original page.
* __rel="nofollow":__ Tells Google not to "endorse" the link or pass SEO credit to it (common for ads or user comments).
* __rel="noreferrer":__ Hides your site's address from the destination site's analytics.
* __rel="author":__ Links to the author's profile or page.

3. __<area>__
* __rel="alternate":__ Points to a version of the resource in another format (like a PDF or a translation).
* __rel="external":__ Explicitly signals that clicking that specific part of the image takes the user to a different website.
* __rel="next" / rel="prev":__ Indicates that the area links to the next or previous part of a series (like a digital map or gallery).

1. __align-items__
* __stretch: Default.__ Items expand to fill the container's cross-axis height/width.
* __center:__ Items are centered along the cross axis.
* __flex-start:__ Items align to the start of the cross axis _(e.g., the top of a row)._
* __flex-end:__ Items align to the end of the cross axis _(e.g., the bottom of a row)._
* __baseline:__ Items align so their text baselines match up.

2. __background__

3. __Braces__
* __Object Literals:__ They are used to define and create objects, acting as a container for key-value pairs _(e.g., const user = { name: "Alice" };)._
* __Code Blocks:__ They group multiple statements together in functions, if statements, and loops _(e.g., if (true) { console.log("Hello"); })._
* __Destructuring:__ They allow you to "unpack" properties from objects into distinct variables _(e.g., const { name } = user;)._
* __Template Literals:__ When preceded by a dollar sign _(${})_, they are used for string interpolation to embed expressions inside backticks.
* __JSX Expressions:__ In React/JSX, they are used to wrap JavaScript expressions within HTML-like markup.

4. __Display__

5. __Document__
* __document.title:__ Gets or sets the text shown in the browser's tab.
* __document.URL:__ Returns the full address of the current page.
* __document.body:__ Provides direct access to the <body> element.
* __document.cookie:__ Used to read or write cookies for that page. 
* __document.getElementById("id"):__ Finds a specific element by its unique ID.
* __document.querySelector(".class"):__ Finds the first element that matches a CSS selector.
* __document.createElement("div"):__ Creates a brand new HTML element in memory to be added later.
* __document.write():__ A classic (though now rarely used) way to write text directly into the HTML stream.

5. __font-family__

6. __Function__
* __Function Declaration:__ The classic way.

   function sayHi(name) {
    return "Hello " + name;
  }
* __Function Expression:__ Storing a function inside a variable.

   const sayHi = function(name) {
    return "Hello " + name;
   };
* __Arrow Function (=>):__ The modern, shorter syntax

  const sayHi = (name) => "Hello " + name;

6. __justify-content__
* __flex-start:	Default.__ Items are packed toward the start of the main axis.
* __flex-end:__	Items are packed toward the end of the main axis.
* __center:__	Items are centered along the main axis.
* __space-between:__	Items are evenly distributed; the first item is at the start and the last is at the end.
* __space-around:__	Items have equal space around them (the space at the edges is half the space between items).
* __space-evenly:__	Items are distributed so that the spacing between any two items and the edges is exactly the same.

7. __href__
* __<a href="https://google.com">__	=> Links to an external website.
* __<a href="#section-1">__ => Jumps to an ID on the same page (Anchor link).
* __<link href="style.css">__ =>	Loads a CSS file or favicon.
<area>	<area href="page.html">	Defines the link for a shape in an image map.
* __<a href="mailto:hi@ex.com">__ =>	Opens the user's email client.
* __<a href="tel:+1234567">__ =>	Triggers a phone call on mobile devices.

7. __<link__
* __rel="stylesheet":__ Connects a CSS file.
* __rel="icon":__ Sets the favicon for the browser tab.
* __rel="canonical":__ Tells search engines which URL is the "master" version of the page.
* __rel="preload":__ Forces the browser to download a high-priority resource immediately.

7. __parenthesis__
* __Function Calls:__ They execute a function _(e.g., greet())._
* _Function Parameters:_ They hold the input names when defining a function _(e.g., function(name) { ... })._
* __Grouping Expressions:__ They control the order of operations in math _(e.g., (2 + 3) * 5)._
* __Control Flow:__ They are required for conditions in _if, while,_ and _for loops._

8. __overflow__

9. __src__
* __<img src="cat.jpg">__ =>	Displays the image on the page.
* __<script src="app.js">__ =>	Loads and runs a JavaScript file.
* __<iframe src="video.html">__ =>	Embeds another webpage inside the current one.
* __<video src="movie.mp4">__ =>	Loads a video file for playback.
* __<audio src="song.mp3">__ =>	Loads an audio file.