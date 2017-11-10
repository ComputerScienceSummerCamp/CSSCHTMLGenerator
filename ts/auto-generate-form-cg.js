function makeTextForm(id, innerStr) {
    var label = $("<label for=" + id + ">").html(innerStr);
    $('<div class="form-group"></div>')
        .append(label)
        .append("<input id=" + id + " class=\"form-control\">")
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
    var label = $("<label for=${id}>").html(innerStr);
    $('<div class="form-group"></div>')
        .append(label)
        .append(makeSelectTag(id))
        .appendTo('#forms');
}
function makeWorkForm(i) {
    var makeInputForm = function (id, contents) {
        var label = $("<label for=" + id + i + ">").html(contents);
        return $('<div class="form-group"></div>')
            .append(label)
            .append("<input class=\"form-control\" id=" + id + i + ">");
    };
    var makeTextArea = function (id, contents) {
        var label = $("<label for=" + id + i + ">").html(contents);
        return $('<div class="form-group"></div>')
            .append(label)
            .append("<textarea rows=\"4\" class=\"form-control\" id=" + id + i + "></textarea>");
    };
    var name = makeInputForm('name', '受講生の名前');
    var id = makeInputForm('id', 'ID');
    var role = makeInputForm('role', '役割');
    var gsfPass = makeInputForm('gsf-pass', 'gsfファイルのパス');
    var title = makeInputForm('title', 'タイトル');
    var comment = makeTextArea('comment', 'インストラクターからのコメント');
    return $('<div class="work-form"></div>')
        .append(name)
        .append(id)
        .append(role)
        .append(gsfPass)
        .append(title)
        .append(comment);
}
function makeWorks() {
    var works = $('<div class="form-group" id="works"></div>');
    var worksForm = $('<div class="form-group" id="works-form"></div>');
    for (var i = 0; i < 3; i++) {
        worksForm.append(makeWorkForm(i));
    }
    works
        .append(worksForm)
        .append('<button class="btn btn-primary" id="add-oneline">１名追加</button>')
        .appendTo('#forms');
}
function appendOne() {
    $('#works-form').append(makeWorkForm());
}
makeSelectForm('year', '今年は西暦何年？');
makeTextForm('group-name', 'グループ名');
makeTextForm('ta-name', 'TAの名前');
makeWorks();
$('#add-oneline').on('click', appendOne);
