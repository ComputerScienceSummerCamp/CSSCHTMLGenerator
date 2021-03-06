function makeTextForm(id, innerStr) {
    var label = $("<label for=" + id + ">").html(innerStr);
    $('<div class="form-group"></div>')
        .append(label)
        .append("<input id=" + id + " class=\"form-control\">")
        .appendTo('#forms');
}
function makeTextArea(id, innerStr) {
    var label = $("<label for=" + id + ">").html(innerStr);
    $('<div class="form-group"></div>')
        .append(label)
        .append("<textarea id=" + id + " class=\"form-control\" rows=\"10\"></textarea>")
        .appendTo('#forms');
}
function makeJavaTableForm() {
    var makeOneLine = function (header) {
        var tr = $('<tr></tr>');
        var columnLen = header.find('th').length;
        for (var i = 0; i < columnLen; i++) {
            tr.append('<td><input class="form-control"></td>');
        }
        return tr;
    };
    var trHeader = $('<tr></tr>')
        .append('<th>名前</th>')
        .append('<th>ID</th>')
        .append('<th>役割</th>');
    var table = $('<table id="table"></table>')
        .append(trHeader);
    for (var i = 0; i < 3; i++) {
        table.append(makeOneLine(trHeader));
    }
    $('<div class="form-group" id="table-form"></div>')
        .append(table)
        .append('<button class="btn btn-primary" id="add-oneline">１行追加</button>')
        .appendTo('#forms');
}
function range(from, to) {
    var ar = [];
    for (var i = from; i <= to; i++) {
        ar.push(i);
    }
    return ar;
}
function makeSelectForm(id, innerStr) {
    var makeSelectTag = function (_id) {
        var select = $("<select id=" + _id + " class=\"form-control\"></select>");
        var year = new Date().getFullYear();
        for (var _i = 0, _a = range(year - 1, 2046); _i < _a.length; _i++) {
            var y = _a[_i];
            if (y === year) {
                select.append("<option value=\"" + y + "\" selected>" + y + "</option>");
            }
            else {
                select.append("<option value=\"" + y + "\">" + y + "</option>");
            }
        }
        return select;
    };
    var label = $("<label for=" + id + ">").html(innerStr);
    $('<div class="form-group"></div>')
        .append(label)
        .append(makeSelectTag(id))
        .appendTo('#forms');
}
makeSelectForm('year', '今年は西暦何年？');
makeTextForm('group-name', 'グループ名');
makeTextForm('ta-name', 'TAの名前');
// makeTextForm('about-team', 'どのようなチームか');
makeTextArea('about-team', 'どのようなチームか');
makeJavaTableForm();
// カンマ区切りで入力する場合
// makeTextArea('students', '名前,ID,役割（それぞれの項目をカンマ区切りで入力してください）');
makeTextForm('game-name', '卒業制作のゲーム名');
makeTextArea('how-to-play', '操作方法');
makeTextForm('game-path', '「ゲームはこちら」で実行されるHTMLファイルのパス(相対パス)');
makeTextForm('source-path-utf8', 'ソースファイルのパス（UTF-8）');
makeTextArea('from-ta', 'インストラクターより');
makeTextForm('pict-value', 'グループ写真の添字(js1など)');
