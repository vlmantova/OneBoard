# OneBoard
> Full screen whiteboard with OneNote Online

This is a minimal CSS hack that transforms OneNote Online into a full screen whiteboard with laser pointer. With the "Split Vertically" bookmarklet below, you may also present OneNote as *two* sliding whiteboards.

<p align="center">
  <img width="640" height="360" src="https://github.com/xworld21/OneBoard/raw/master/OneBoardDemo.gif">
</p>

The intended use case is to run OneBoard in "presentation mode", while you write and annotate your page on another window or another device. If you disable presentation mode, OneBoard will only hide the non-editing elements that take space on the screen. A few other settings are provided to tailor its behavior to your use case.

**BEWARE:** this is a hack that relies on ids and classes in the HTML delivered by Microsoft. Parts may break at any moment, although hopefully not very often.

### Bugs and limitations
- OneNote notebooks are hosted on the servers `*-onenote.officeapps.live.com` (regardless of the actual URL appearing in your browser). For now, the CSS only works on the `ukc-onenote.officeapps.live.com` server.
- The settings might change shape in the future. If you are not using the defaults, you should disable automatic updates for OneBoard in Stylus.

To report bugs or changes in behavior, request more servers, or suggest new functionality please file an [issue](/xworld21/OneBoard/issues) or send a [pull request](/xworld21/OneBoard/pulls).

## Installation
Install the [Stylus](https://github.com/openstyles/stylus) extension for your browser (Chrome, the new Edge, Firefox, or Opera), then open the [stylesheet](https://github.com/xworld21/OneBoard/raw/master/OneBoard.user.css) and click on "Install". After installation, your OneNote pages will appear in presentation mode with no navigation panel and no scrollbars.

To have two side-by-side sliding whiteboards, create a new bookmark called "Split Vertically" with the following URL:

```javascript
javascript:(function(){var e=document,i=e.title;e.head.innerHTML=e.body.innerHTML="",e.title=i;var t=e.createElement("meta");t.name="viewport",t.content="width=device-width, height=device-height, initial-scale=1",e.head.appendChild(t);var d=e.querySelector("html").style,a=e.body,l=a.style;d.width=d.height=l.width=l.height="100%",l.margin=l.padding="0";var n=e.createElement("iframe");l.display="flex";var r=n.style;n.src=window.location,r.flex="0 0 50%",r.border="none",r.boxSizing="border-box";var o=n.cloneNode();r.borderRight="solid 2px black",o.style.borderLeft="solid 2px black",a.appendChild(n),a.appendChild(o)})();
```

Clicking on the bookmark will split the page you are browsing into two vertical copies. You can inspect the source code of the above minified Javascript in [SplitVertically.js](SplitVertically.js).

## Usage
After installation, your OneNote pages will appear in presentation mode. If you want two whiteboards side-by-side, click on the "Split Vertically" bookmark after the notebook is open on the desired page.

To exit the presentation mode, click on the Stylus button in your browser toolbar and either disable OneBoard via the checkbox next to "iframe: OneBoard", or change its settings with the gear icon right of "iframe: OneBoard".

## Settings
There are four settings that can be adjusted depending on the use case. The default setting mimics a whiteboard, with nothing on screen apart from the page itself. In every configuration, OneBoard will hide the top OneNote header.
<dl>
  <dt><strong>Presentation mode</strong> (default: yes)</dt>
  <dd>Hide the ribbon and as many editing indicators as possible, such as the insertion caret, text selections, note container borders, and change the cursor to a laser pointer.</dd>
  <dt><strong>Hide navigation panel</strong> (default: yes)
  <dd>Permanently hide the left navigation panel. The panel can also be hidden manually via the "View" ribbon, but it reappears on window resize.</dd>
  <dt><strong>Hide scrollbars</strong> (default: yes)</dt>
  <dd>Hide the scrollbars.</dd>
  <dt><strong>Prevent horizontal scrolling</strong> (default: no)</dt>
  <dd>Prevent horizontal scrolling.<br>
    <strong>Warning.</strong> OneNote will scroll on its own when writing text near a border. This can easily happen by accident when clicking close to the border of the page, as it may create a note container that spans beyond the viewport. You may have trouble scrolling back when this option is enabled.</dd>
</dl>

## License
Distributed under the [GPL3 license](LICENSE). Copyright © 2020 Vincenzo Mantova <xworld21@users.sf.net>.