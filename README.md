# Animate.css + jQuery.appear.js

https://codepen.io/BioButterfly/pen/oRvxBE

## Usage

Add CSS Style to hide components

```html
<style>
	/* Hide Animate Section */
	.animate {visibility: hidden; opacity: 0;}
</style>
```

- - - -

Add `animate` class to the html tag you want to animate

..now add attributes: 

| Attributes | Require |
| ---------- | ---------- |
| `data-fx` | `required` |
| `data-delay` | `optional` |
| `data-speed` | `optional` |
| `data-fx-close` | `optional` |
| `data-delay-close` | `optional` |
| `data-speed-close` | `optional` |

> _**Note**: `speed` and `delay` are expressed in second. Full animations: https://github.com/daneden/animate.css#animations_

- - - -

```html
<div class="alert animate" data-fx="fadeIn" data-delay="0" data-speed="1" data-fx-close="fadeOut" data-delay-close="0" data-speed-close="0.5">Primary</div>
```

## Javascript functions

Appear Animations - `ID/Class`, `Ypos`

```javascript
thisAppearAnimation('.alert', 0);
```

Appear even if it's not on screen - `ID/Class`

```javascript
thisAnimation('.btn');
```

Appear Animate without html `delay/speed` attributes - `ID/Class`, `Ypos`, `delay`, `speed`

```javascript
thisAppearAnimation('.toast', -129, 0, 1);
```

## Usage with additional options - open/close animations

Add `data-click-state="1"` attribute

```html
<button type="button" class="btn animate" data-fx="fadeInUp" data-delay="0" data-speed="1" data-click-state="1">Primary</button>
```

Javascript

```javascript
$('.btn').on('click', function(e) {
	if($(this).attr('data-click-state') == 0) {
	    $(this).attr('data-click-state', 1);
	    thisAppearAnimation('.alert-primary', 0);
	} else {
	    $(this).attr('data-click-state', 0);
	    thisCloseAnimation('.alert-primary', 1000);
	}
});
```

## Credits
This script is based on https://github.com/daneden/animate.css and https://github.com/bas2k/jquery.appear/

&copy;2019 - https://biobutterfly.com
