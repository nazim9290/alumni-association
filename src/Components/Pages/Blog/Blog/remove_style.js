/*
  Remove inline style="..."
  Preserve hidden content.
  Call the function like this:
    var all = document.getElementsByTagName('*');
    remove_style(all);
  Note: Selecting all elements in the page via a
  wildcard query could be slow, depending on how
  many elements are in the page. You could use a
  smaller set of elements to be more performant:
    var set = document.getElementById('foo').getElementsByTagName('bar');
    remove_style(set);
*/

function remove_style(list) {
  "use strict";

  // Presentational attributes.
  var attr = [
    "align",
    "background",
    "bgcolor",
    "border",
    "cellpadding",
    "cellspacing",
    "color",
    "face",
    "height",
    "hspace",
    "marginheight",
    "marginwidth",
    "noshade",
    "nowrap",
    "valign",
    "vspace",
    "width",
    "vlink",
    "alink",
    "text",
    "link",
    "frame",
    "frameborder",
    "clear",
    "scrolling",
    "style",
  ];

  // Used later.
  var attr_len = attr.length;
  var i = list.length;

  // Defined in loop.
  var j;
  var is_hidden;

  // Loop through node list.
  while (i--) {
    is_hidden = list[i].style.display === "none";

    // Decrement `j` in next loop.
    j = attr_len;

    // Loop through attribute list.
    while (j--) {
      list[i].removeAttribute(attr[j]);
    }

    /*
      Re-hide display:none elements,
      so they can be toggled via JS.
    */
    if (is_hidden) {
      list[i].style.display = "none";
    }
  }
}
export default remove_style;
