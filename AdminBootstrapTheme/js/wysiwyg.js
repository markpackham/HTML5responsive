/*
We get this from     <script src="https://cdn.ckeditor.com/4.7.3/standard/ckeditor.js"></script>
in the html pages
Found here https://cdn.ckeditor.com/
 */

CKEDITOR.replace('editor1');


/*Show current year in Copyright */
var date = new Date();
var year = date.getFullYear();
document.getElementById("theYear").innerHTML = year;