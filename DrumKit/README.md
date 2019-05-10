This is an example of drumkit from https://courses.wesbos.com/
Keep the caps local on for this to work.


CONCEPTS:
1. Get key code of the key you pressed in your keyboard
http://keycode.info/

2. Adding event listeners
   a. Keypress, keydown and keyup events
   The keydown and keyup events provide a code indicating which key is pressed, while keypress indicates which character was entered. For example, a lowercase "a" will be reported as 65 by keydown and keyup, but as 97 by keypress. An uppercase "A" is reported as 65 by all events

   Event listeners can be added on window object or on a an element.
   EX: window.addEventListner(<eventType>, Callback () {})

   b. transistionend event
   The transitionend event is fired when a CSS transition has completed. In the case where a transition is removed before completion, such as if the transition-property is removed or display is set to none, then the event will not be generated.
   https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/transitionend_event

3. Dynamically adding classes
   use classList
   ex. key.calssList.add('playing');

   There is also remove and toggle.
   https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
