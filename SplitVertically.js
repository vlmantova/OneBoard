/* OneBoard - full screen whiteboard with OneNote Online

Copyright (C) 2020-22 Vincenzo Mantova <v.l.mantova@leeds.ac.uk>

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.

*/

(function(){
  var D = document;

  /* Save document title */
  var T = D.title;

  /* Reset HTML */
  D.head.innerHTML = D.body.innerHTML = "";
  D.title = T;

  /* Set viewport to 100% */
  var M = D.createElement('meta');
  M.name = 'viewport';
  M.content = 'width=device-width, height=device-height, initial-scale=1';
  D.head.appendChild(M);

  /* Let <html> and <body> fill the viewport */
  var HS = D.querySelector('html').style;
  var B = D.body;
  var BS = B.style;
  HS.width = HS.height = BS.width = BS.height = '100%';
  BS.margin = BS.padding = '0';

  /* Create iframe containing current URL */
  var L = D.createElement('iframe');

  /* Build flexbox */
  BS.display = 'flex';
  var LS = L.style;
  L.src = window.location;
  LS.flex = '0 0 50%';
  LS.border = 'none';
  LS.boxSizing = 'border-box';

  /* Clone iframe L */
  var R = L.cloneNode();

  /* Set borders */
  LS.borderRight = 'solid 2px black';
  R.style.borderLeft = 'solid 2px black';

  /* Add iframes to body */
  B.appendChild(L);
  B.appendChild(R);
})();
