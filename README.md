# :zap: Javascript CSS Flex

Wes Bos Youtube Tutorial: [Flexbox + JavaScript Image Gallery — #JavaScript30 5/30](https://www.youtube.com/watch?v=9eif30i26jg&list=PLu8EoSxDXHP6CGK4YVJhL_VWetA865GOH&index=5).

*** Note: to open web links in a new window use: _ctrl+click on link_**

## :page_facing_up:Table of contents

* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## :books: General info

* Tutorial Code to practise using css flex-box to display images and text.

## :camera: Screenshots

![Example screenshot](./img/flex.png).

## :signal_strength: Technologies

* [Javascript v1.9 ECMA-262 ECMAScript 2018](http://www.ecma-international.org/publications/standards/Ecma-262.htm)

## :floppy_disk: Setup

* Open index.html in browser. If any code is changed the browser needs to be refreshed.

## :computer: Code Examples

* toggle css class to open-active when panel selected.

```javascript
function toggleActive(e) {
  console.log('property name: ', e.propertyName); // returns flex-grow, font-size, transform
  if(e.propertyName.includes('flex')) { // to work with all browsers, incl firefox
     this.classList.toggle('open-active');
  }
}
```

## :cool: Features

*  Panels resize as they are clicked to take up equal widths.

## :clipboard: Status & To-Do List

* Status: Working.
* To-Do: Nothing.

## :clap: Inspiration

* Wes Bos Youtube Tutorial: [Flexbox + JavaScript Image Gallery — #JavaScript30 5/30](https://www.youtube.com/watch?v=9eif30i26jg&list=PLu8EoSxDXHP6CGK4YVJhL_VWetA865GOH&index=5).

## :envelope: Contact

* Repo created by [ABateman](https://www.andrewbateman.org) - you are welcome to [send me a message](https://andrewbateman.org/contact)
