function getTableStr(students) {
    var studentsTable = students.map(function (s, index) {
        return "\n\t\t\t\t<tr>\n\t\t\t\t    <td>" + s.name + "</td>\n\t\t\t\t    <td><a href=\"../../students/" + s.id + "/\">" + s.id + "</a></td>\n\t\t\t\t    <td>" + s.role + "</td>\n\t\t\t\t</tr>\n";
    });
    return studentsTable.join("");
}
var StudentInfo = (function () {
    function StudentInfo(name, id, role, gsfPass, pictPath, title, comment) {
        this.name = name;
        this.id = id;
        this.role = role;
        this.gsfPass = gsfPass;
        this.pictPath = pictPath;
        this.title = title;
        this.comment = comment;
    }
    return StudentInfo;
}());
function range(from, to) {
    var ar = [];
    for (var i = from; i <= to; i++) {
        ar.push(i);
    }
    return ar;
}
function getWorksStr(students) {
    var studentWorks = students.map(function (s, index) {
        console.log("comment : " + s.comment);
        return "\n            <div class=\"staff\">\n                <div class=\"left\">\n                    <a href=\"" + s.pictPath + "\" data-lightbox=\"creation\"><img src=\"" + s.pictPath + "\" class=\"_photo\"></a>\n                </div>\n                <div class=\"right\">\n                  <p><b>" + s.name + "</b> - (<a href=\"" + s.gsfPass + "\">gsf\u30D5\u30A1\u30A4\u30EB</a>)</p>\n                  <p>\u30BF\u30A4\u30C8\u30EB \u300C <b><i>" + s.title + "</i></b> \u300D</p>\n                  \n                    " + s.comment.replace(/\n/g, '<br>\n') + "\n                  \n                </div>\n            </div>\n";
    });
    return studentWorks.join("");
}
function genHTML() {
    var year = $('#year').val();
    var groupName = $('#group-name').val();
    var taName = $('#ta-name').val();
    var aboutTeam = $('#about-team').val().replace(/\n/g, '<br>\n');
    var studentLen = $('.work-form').length;
    console.log(studentLen);
    var students = range(0, studentLen - 1).map(function (i, index, array) {
        var name = $("#name" + i).val();
        var id = $("#id" + i).val();
        var role = $("#role" + i).val();
        var gsfPass = $("#gsf-pass" + i).val();
        var pictPath = $("#pict-path" + i).val();
        var title = $("#title" + i).val();
        var comment = $("#comment" + i).val();
        return new StudentInfo(name, id, role, gsfPass, pictPath, title, comment);
    });
    var tableStr = getTableStr(students);
    var works = getWorksStr(students);
    var pictValue = $('#pict-value').val();
    var htmlStr = "<!DOCTYPE HTML>\n<html>\n<head>\n    <title>Computer Science Summer Camp</title>\n    <meta http-equiv=\"content-type\" content=\"text/html; charset=utf-8\"/>\n    <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\">\n    <link href='http://fonts.googleapis.com/css?family=Roboto:400,100,300,700,500,900' rel='stylesheet' type='text/css'>\n    <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.2.0/css/all.css\"\n          integrity=\"sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ\" crossorigin=\"anonymous\">\n\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.10.0/css/lightbox.min.css\">\n    <link rel=\"stylesheet\" href=\"../../../css/style.css\"/>\n    <link rel=\"stylesheet\" href=\"../../../css/group.css\"/>\n    <link rel=\"stylesheet\" href=\"../../../css/cg.css\"/>\n</head>\n<body>\n\n<header class=\"skelton-image no-toppage\">\n    <div id=\"nav-wrapper\">\n        <!-- Nav -->\n        <nav id=\"nav\">\n            <ul>\n                <li class=\"active\"><a href=\"index.html\">Homepage</a></li>\n                <li><a href=\"../../../recruit.html\">\u52DF\u96C6\u8981\u9805</a></li>\n                <li><a href=\"../../../staff.html\">\u30B9\u30BF\u30C3\u30D5\u7D39\u4ECB</a></li>\n                <li><a href=\"../../../group.html\">\u5352\u696D\u5236\u4F5C</a></li>\n                <li><a href=\"../../../schedule.html\">\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB</a></li>\n                <li><a href=\"../../../access.html\">\u30A2\u30AF\u30BB\u30B9</a></li>\n            </ul>\n        </nav>\n    </div>\n    <div class=\"container\">\n\n        <!-- Logo -->\n        <div id=\"logo\">\n            <h1><a>" + groupName + "</a></h1>\n            <span class=\"tag\">3DCG</span>\n        </div>\n    </div>\n\n    <!--\u25BC\u25BC\u30CF\u30F3\u30D0\u30FC\u30AC\u30FC\u30E1\u30CB\u30E5\u30FC\u3053\u3053\u304B\u3089\u25BC\u25BC-->\n    <div class=\"hm_wrap\">\n        <input id=\"hm_menu\" type=\"checkbox\" name=\"hm_menu\" class=\"hm_menu_check\"/>\n        <label for=\"hm_menu\" class=\"hm_btn\"></label>\n        <nav class=\"hm_menu_wrap\">\n            <ul class=\"hm_list\">\n                <li class=\"active\"><a href=\"index.html\">Homepage</a></li>\n                <li><a href=\"../../../recruit.html\">\u52DF\u96C6\u8981\u9805</a></li>\n                <li><a href=\"../../../staff.html\">\u30B9\u30BF\u30C3\u30D5\u7D39\u4ECB</a></li>\n                <li><a href=\"../../../group.html\">\u5352\u696D\u5236\u4F5C</a></li>\n                <li><a href=\"../../../schedule.html\">\u30B9\u30B1\u30B8\u30E5\u30FC\u30EB</a></li>\n                <li><a href=\"../../../access.html\">\u30A2\u30AF\u30BB\u30B9</a></li>\n            </ul>\n        </nav>\n        <span style=\"color: white;\">Computer Science Summer Camp</span>\n    </div>\n</header>\n\n<!-- Main -->\n<section id=\"main\">\n    <div id=\"content\" class=\"container\">\n        <h2 style=\"margin: 0 auto;\">\u30B0\u30EB\u30FC\u30D7</h2>\n        <dl class=\"sampleList02\">\n            <dt>TA</dt>\n            <dd>" + taName + "</dd>\n            <dt>\u3069\u3093\u306A\u30B0\u30EB\u30FC\u30D7\uFF1F</dt>\n            <dd>" + aboutTeam + "</dd>\n        </dl>\n\n\n        <h2>\u30E1\u30F3\u30D0\u30FC</h2>\n        <table>\n            <tbody>\n            <tr>\n                <td><strong>\u540D\u524D</strong></td>\n                <td><strong>ID</strong></td>\n                <td><strong>\u5F79\u5272</strong></td>\n            </tr>\n            " + tableStr + "\n            </tbody>\n        </table>\n        \n        <h2>\u5352\u696D\u5236\u4F5C</h2>\n" + works + "\n\t\t\t\n\t\t\t<h2>\u30B0\u30EB\u30FC\u30D7\u5199\u771F</h2>\n        <a href=\"../../../images/group/" + pictValue + "_01.JPG\" data-lightbox=\"group\"><img src=\"../../../images/group/" + pictValue + "_01.JPG\" class=\"_photo\"></a>\n        <a href=\"../../../images/group/" + pictValue + "_02.JPG\" data-lightbox=\"group\"><img src=\"../../../images/group/" + pictValue + "_02.JPG\" class=\"_photo\"></a>\n        <a href=\"../../../images/group/" + pictValue + "_03.JPG\" data-lightbox=\"group\"><img src=\"../../../images/group/" + pictValue + "_03.JPG\" class=\"_photo\"></a>\n        <a href=\"../../../images/group/" + pictValue + "_04.JPG\" data-lightbox=\"group\"><img src=\"../../../images/group/" + pictValue + "_04.JPG\" class=\"_photo\"></a>\n\t\t</div>\n</section>\n<!-- /Main -->\n\n<!-- Tweet -->\n<section id=\"tweet\" class=\"skelton-image\">\n    <p>\n        \"\u5E73\u6210\u6700\u5F8C\u306E\u697D\u3057\u3044\u601D\u3044\u51FA\u3092\u3042\u308A\u304C\u3068\u3046\uFF01\"\n    </p>\n</section>\n\n<!-- Footer -->\n<footer>\n    <div class=\"container\">\n        <h2>Please take a look!</h2>\n        <p>Facebook\u3067\u53D7\u8B1B\u98A8\u666F\u516C\u958B\u4E2D\u266A</p>\n        <a href=\"https://www.facebook.com/ComputerScienceSummerCamp\" target=\"_blank\">\n            <i class=\"fab fa-facebook-f\"></i>\n        </a>\n    </div>\n</footer>\n\n<!-- Copyright -->\n<section id=\"copyright\">\n    <div class=\"container\">\n        \u00A9 2018 Computer Science Summer Camp, Aizu University, All Rights Reserved.\n    </div>\n</section>\n<script\n        src=\"https://code.jquery.com/jquery-3.3.1.min.js\"\n        integrity=\"sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=\"\n        crossorigin=\"anonymous\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.10.0/js/lightbox.min.js\"></script>\n</body>\n</html>\n";
    //textメソッドを使う
    $('#converted').text(htmlStr);
}
$('#convert').on('click', genHTML);
