function getTableStr() {
    var table = document.getElementById('table');
    var tableTag = '';
    //iが０のときは、見出し
    for (var i = 1; i < table.rows.length; i++) {
        var name_1 = table.rows[i].cells[0].firstChild.value;
        var id = table.rows[i].cells[1].firstChild.value;
        var role = table.rows[i].cells[2].firstChild.value;
        if (name_1 == "" && id == "")
            continue;
        tableTag +=
            "                <tr>\n\t\t\t\t    <td>" + name_1 + "</td>\n\t\t\t\t    <td><a href=\"../../students/" + id + "/\">" + id + "</a></td>\n\t\t\t\t    <td>" + role + "</td>\n\t\t\t\t</tr>\n        ";
    }
    return tableTag;
}
function genHTML() {
    var year = $('#year').val();
    var groupName = $('#group-name').val();
    var taName = $('#ta-name').val();
    var aboutTeam = $('#about-team').val();
    var gameName = $('#game-name').val();
    var howToPlay = $('#how-to-play').val();
    var sourcePassJIS = $('#source-pass-jis').val();
    var sourcePassUTF8 = $('#source-pass-utf8').val();
    var jarPassJIS = $('#jar-pass-jis').val();
    var jarPassUTF8 = $('#jar-pass-utf8').val();
    var fromTA = $('#from-ta').val();
    var tableStr = getTableStr();
    var htmlStr = "<!DOCTYPE HTML>\n<html lang=\"ja\">\n<head>\n\t<meta charset=\"UTF-8\">\n\t<link rel=\"stylesheet\" href=\"css/default.css\">\n\t<link href=\"css/lightbox.css\" rel=\"stylesheet\">\n\t<script\n        src=\"https://code.jquery.com/jquery-3.2.1.min.js\"\n        integrity=\"sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=\"\n        crossorigin=\"anonymous\"></script>\n\t<script src=\"js/lightbox-2.6.min.js\"></script>\n\t<title>" + groupName + "</title>\n</head>\n<body>\n\t<div id=\"wrapper\">\n\t\t<header>\n\t\t\t<h1>\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u30B5\u30A4\u30A8\u30F3\u30B9\u30B5\u30DE\u30FC\u30AD\u30E3\u30F3\u30D7 " + year + "</h1>\n\t\t</header>\n\t\t<article>\n\t\t\t<h2>" + groupName + "</h2>\n\t\t\t<dl>\n\t\t\t\t<dt>\u30B0\u30EB\u30FC\u30D7\u540D</dt>\n\t\t\t\t<dd>" + groupName + "</dd>\n\t\t\t\t<dt>TA</dt>\n\t\t\t\t<dd>" + taName + "</dd>\n\t\t\t\t<dt>\u3069\u306E\u3088\u3046\u306A\u30C1\u30FC\u30E0\u304B</dt>\n\t\t\t\t<dd>" + aboutTeam + "</dd>\n\t\t\t</dl>\n\t\t\t<h2>\u30E1\u30F3\u30D0\u30FC</h2>\n\t\t\t<table>\n\t\t\t    <tr>\n\t\t\t        <td>\u540D\u524D</td>\n\t\t\t        <td>ID</td>\n\t\t\t        <td>\u5F79\u5272</td>\n\t\t\t    </tr>\n                " + tableStr + "\n\t\t\t</table>\n\t\t\t<h2>\u5352\u696D\u5236\u4F5C</h2>\n\t\t\t<h3>" + gameName + "</h3>\n\t\t\t\n\t\t\t<h4>\u64CD\u4F5C\u65B9\u6CD5</h4>\n\t\t\t<p>\n\t\t\t    " + howToPlay + "\n\t\t\t</p>\n\t\t\t<h4>\u30BD\u30FC\u30B9\u30D5\u30A1\u30A4\u30EB</h4>\n\t\t\t<p><a href=\"" + sourcePassJIS + "\">Windows\u7248\uFF08Shift-JIS\uFF09</a>\u3000<a href=\"" + sourcePassUTF8 + "\">UNIX\u7248\uFF08UTF-8\uFF09</a></p>\n\t\t\t<h4>JAR\u30D5\u30A1\u30A4\u30EB</h4>\n\t\t\t<p><a href=\"" + jarPassJIS + "\">Windows\u7248\uFF08Shift-JIS\uFF09</a>\u3000<a href=\"" + jarPassUTF8 + "\">UNIX\u7248\uFF08UTF-8\uFF09</a></p>\n\t\t\t\n\t\t\t<h4>\u30AA\u30FC\u30D7\u30CB\u30F3\u30B0</h4>\n\t\t\t<a rel=\"lightbox[opening]\" href=\"img/op1.png\"><img src=\"img/op1_s.png\" class=\"samune\"></a>\n\t\t\t<a rel=\"lightbox[opening]\" href=\"img/op2.png\"><img src=\"img/op2_s.png\" class=\"samune\"></a>\n\t\t\t\n\t\t\t<h4>\u30A8\u30F3\u30C7\u30A3\u30F3\u30B0</h4>\n\t\t\t<a rel=\"lightbox\" href=\"img/ed.png\"><img src=\"img/ed_s.png\" class=\"samune\"></a>\n\t\t\t\n\t\t\t<h4>\u30B9\u30AF\u30EA\u30FC\u30F3\u30B7\u30E7\u30C3\u30C8</h4>\n\t\t\t<a rel=\"lightbox[screenshot]\" href=\"img/s1.png\"><img src=\"img/s1_s.png\" class=\"samune\"></a>\n\t\t\t<a rel=\"lightbox[screenshot]\" href=\"img/s2.png\"><img src=\"img/s2_s.png\" class=\"samune\"></a>\n\t\t\t<a rel=\"lightbox[screenshot]\" href=\"img/s3.png\"><img src=\"img/s3_s.png\" class=\"samune\"></a>\n\t\t\t\n\t\t\t<h2>\u30A4\u30F3\u30B9\u30C8\u30E9\u30AF\u30BF\u30FC\u3088\u308A</h2>\n\t\t\t<p>\n\t\t\t\t" + fromTA + "\n\t\t\t</p>\n\t\t\t<h2>\u30B0\u30EB\u30FC\u30D7\u5199\u771F</h2>\n\t\t\t<a rel=\"lightbox[groupphoto]\" href=\"img/g1.jpg\"><img src=\"img/g1_s.jpg\" class=\"samune\"></a>\n\t\t\t<a rel=\"lightbox[groupphoto]\" href=\"img/g2.jpg\"><img src=\"img/g2_s.jpg\" class=\"samune\"></a>\n\t\t\t<a rel=\"lightbox[groupphoto]\" href=\"img/g3.jpg\"><img src=\"img/g3_s.jpg\" class=\"samune\"></a>\n\t\t</article>\n\t\t<footer>\n\t\t<p>&copy " + year + " Computer Science Summer Camp, Aizu University, All Rights Reserved.</p>\n\t\t</footer>\n\t</div> <!-- #wrapper -->\n</body>\n</html>\n";
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
