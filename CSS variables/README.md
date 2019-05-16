HTML tag label
    This is a tag usually used with form. When you just use form elements like input, textarea etc,
    there is no way tell the user what the title of field corresponds to.

    Adding a lable to input field ensures that it maps the label to the input, ex
    <label for='same_id'>Name</label>
    <input id='same_id' type='text' name='name'>

    Now thw lable is mapped to the input element with the id equal to the for attribute of lable.
    So when you click on label, the cursor is directly appears in the input box.

DOM manipulation
1. Select all inputs under a div with class 'control'
   const inputs = document.querySelectorAll('.controls input');

2. Select full html code and modify its CSS variable,
   document.documentElement.setProperty(`--base`, this.value + suffix); //--base is th variable

CSS variables
  See the style.css