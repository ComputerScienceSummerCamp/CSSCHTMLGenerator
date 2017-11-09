function getTableStr() {
    var table = document.getElementById('table');
    var tableTag = '';
    //iが０のときは、見出し
    for (var i = 1; i < table.rows.length; i++) {
        var name_1 = table.rows[i].cells[0].firstChild.value;
        var id = table.rows[i].cells[1].firstChild.value;
        if (name_1 == "" && id == "")
            break;
        tableTag +=
            "                <tr>\n\t\t\t\t    <td>" + name_1 + "</td>\n\t\t\t\t    <td><a href=\"../../students/" + id + "/\">" + id + "</a></td>\n\t\t\t\t</tr>\n        ";
    }
    return tableTag;
}
function genHTML() {
    var year = $('#year').val();
    var groupName = $('#group-name').val();
    var taName = $('#ta-name').val();
    var aboutTeam = $('#about-team').val();
    var fromTA = $('#from-ta').val();
    var tableStr = getTableStr($('#table'));
    var htmlStr = "<!DOCTYPE HTML>\n<html lang=\"ja\">\n<head>\n\t<meta charset=\"UTF-8\">\n\t<link rel=\"stylesheet\" href=\"css/default.css\">\n\t<link href=\"css/lightbox.css\" rel=\"stylesheet\">\n\t<script\n        src=\"https://code.jquery.com/jquery-3.2.1.min.js\"\n        integrity=\"sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=\"\n        crossorigin=\"anonymous\"></script>\n\t<script src=\"js/lightbox-2.6.min.js\"></script>\n\t<title>" + groupName + "</title>\n</head>\n<body>\n\t<div id=\"wrapper\">\n\t\t<header>\n\t\t\t<h1>\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u30B5\u30A4\u30A8\u30F3\u30B9\u30B5\u30DE\u30FC\u30AD\u30E3\u30F3\u30D7 " + year + "</h1>\n\t\t</header>\n\t\t<article>\n\t\t\t<h2>" + groupName + "</h2>\n\t\t\t<dl>\n\t\t\t\t<dt>\u30B0\u30EB\u30FC\u30D7\u540D</dt>\n\t\t\t\t<dd>" + groupName + "</dd>\n\t\t\t\t<dt>TA</dt>\n\t\t\t\t<dd>" + taName + "</dd>\n\t\t\t\t<dt>\u3069\u306E\u3088\u3046\u306A\u30C1\u30FC\u30E0\u304B</dt>\n\t\t\t\t<dd>" + aboutTeam + "</dd>\n\t\t\t</dl>\n\t\t\t<h2>\u30E1\u30F3\u30D0\u30FC</h2>\n\t\t\t<table>\n\t\t\t    <tr>\n\t\t\t        <td>\u540D\u524D</td>\n\t\t\t        <td>ID</td>\n\t\t\t    </tr>\n                " + tableStr + "\n\t\t\t</table>\n\t\t\t<h2>\u30A4\u30F3\u30B9\u30C8\u30E9\u30AF\u30BF\u30FC\u3088\u308A</h2>\n\t\t\t<p>\n\t\t\t\t" + fromTA + "\n\t\t\t</p>\n\t\t\t<h2>\u30B0\u30EB\u30FC\u30D7\u5199\u771F</h2>\n\t\t\t<a rel=\"lightbox[groupphoto]\" href=\"img/g1.jpg\"><img src=\"img/g1_s.jpg\" class=\"samune\"></a>\n\t\t\t<a rel=\"lightbox[groupphoto]\" href=\"img/g2.jpg\"><img src=\"img/g2_s.jpg\" class=\"samune\"></a>\n\t\t\t<a rel=\"lightbox[groupphoto]\" href=\"img/g3.jpg\"><img src=\"img/g3_s.jpg\" class=\"samune\"></a>\n\t\t</article>\n\t\t<footer>\n\t\t<p>&copy " + year + " Computer Science Summer Camp, Aizu University, All Rights Reserved.</p>\n\t\t</footer>\n\t</div> <!-- #wrapper -->\n</body>\n</html>\n";
    //textメソッドを使う
    $('#converted').text(htmlStr);
}
function appendRow() {
    var tr = $('<tr></tr>');
    var columnLen = $('th').length;
    for (var i = 0; i < columnLen; i++) {
        $('<td></td>').append('<input class="form-control">').appendTo(tr);
    }
    $('#table').append(tr);
}
$('#add-oneline').on('click', appendRow);
$('#convert').on('click', genHTML);
