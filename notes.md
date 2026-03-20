# PUSH -21/03/26
__=>this cp features welcome text and Nebula background__
* Added note.md
* Added guidelines
* new index.html code
* new main.js code
* new style.css code

# index.html
=> _the Skeleton (the bones)_
|__PHRASE__|__MEANING__|
|-|-|
|__1. <html>__|_Document Type Declaration_|
|=> It tells the web browser that this file is an HTML5 document so it renders the page correctly.|
|__2. <head>__||
|=>|
|__3. <div>__|-|
|=>|
|__4. <h1>__|-|
|=>|
|__5. <meta__|_Metadata (Information about data_|
|=> These tags provide "behind the scenes" info like character encoding or screen scaling for mobile devices.|
|__6. <title>__|-|
|=>|
|__7. <link__|_Relationship Link_|
|=> It connects your HTML to external resources, specifically your CSS stylesheet in this case|
|__8. rel__|-|
|=>|
|__9. href__|-|
|=>|
|__10. <body>__|-|
|=>|
|__11. lang__|-|
|=>|
|__12. charset__|-|
|=>|
|__13. name__|-|
|=>|
|__14. id__|_Identifier_|
|=> A unique name given to an element (like welcome-text) so CSS and JS can find and target it specifically.|
|__15. script__|_Script Container_|
|=> It points the browser to your JavaScript file, telling it to start running the logic once the HTML is loaded.|
|__16. src__|-|
|=>|


# main.js
=> _the Brain (the timing and decisions)_
|__PHRASE__|__MEANING__|
|-|-|
|__1. window.onload__|_Event Handler_|
|=> A trigger that says: "Wait until every image and line of code is loaded before starting the animation."|
|__2. ()__|-|
|=>|
|__3. = >__|-|
|=>|
|__4. {}__|-|
|=>|
|__5. setTimeout__|_Timer Function_|
|=> The "Director" of the sequence. It tells the browser to delay an action for a specific number of milliseconds (1000ms = 1s).|
|__6. const__|_Constant Variable_|
|=> Creates a "container" for an object (like your text element) that won't be reassigned, making your code stable.|
|__7. document__|-|
|=>|
|__8. textElement__|-|
|=>|
|__9. innerText__|_Interior Text Content_|
|=> This is the property used to change the words inside an HTML tag. It's how "Welcome" becomes "Reach for the stars.|
|__10. classList__|_Element Class Manager_|
|=> It allows JS to add or remove CSS classes. It acts like a light switch to turn your animations on and off.|
|__11. className__|-|
|=> |
|__12. .add__|-|
|=> |
|__13. .remove__|_Remove a CSS Class_|
|=> The opposite of.add(). It takes away the "active" styling (like fading the text out) so the next message can prepare to show up.|
|__14. .getElementById__|-|
|=> |
|__15. function__|-|
|=> |
|__16. runPhraseSequence__|-|
|=> |
|__17. newText__|-|
|=> |
|__18. startTime__|-|
|=> |
|__19. setTimeout value__|-|
|=> |


# style.css
=> _the Skin/Clothes (the look and movement)_
|__PHRASE__|__MEANING__|
|-|-|
|__1. :root__|_Global Variable Root_|
|=> A special CSS selector used to store Variables (like colors) that you want to use throughout the entire file.|
|__2. body__|-|
|=>|
|__3. #welcome-text__|-|
|=>|
|__4. .animate-in__|-|
|=>|
|__5. background-color__|-|
|=>|
|__6. margin__|-|
|=>|
|__7. overflow__|-|
|=>|
|__8. display__|-|
|=>|
|__9. justify-content__|-|
|=>|
|__10. align-items__|-|
|=>|
|__11. height__|-|
|=>|
|__12. font-family__|-|
|=>|
|__13. text-align__|-|
|=>|
|__14. font-size__|-|
|=>|
|__15. color__|-|
|=>|
|__16. font-weight__|-|
|=>|
|__17. letter-spacing__|-|
|=>|
|__18. opacity__|_Transparency Level_|
|=> Controls how "see-through" an object is (0) is invisible, 1 is fully solid). It creates the fade effect.|
|__19. transform__|_Shape/Position Modifier_|
|=> Allows you to move, rotate, or scale an element without affecting the layout of other elements.|
|__20. transition__|_Animation Timing_|
|=> It defines the speed and feel of a change. It tells the browser: "Don't snap to the new state; glide there over X seconds."|
|__21. var__|-|
|=>|
