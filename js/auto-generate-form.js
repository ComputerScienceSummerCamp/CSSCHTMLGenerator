function makeTextForm(id, innerStr) {
    let label = $(`<label for=${id}>`).html(innerStr);

    $('<div class="form-group"></div>')
        .append(label)
        .append(`<input id=${id} class="form-control">`)
        .appendTo('#forms');
}

function makeTextArea(id, innerStr) {
    let label = $(`<label for=${id}>`).html(innerStr);

    $('<div class="form-group"></div>')
        .append(label)
        .append(`<textarea id=${id} class="form-control" rows="10"></textarea>`)
        .appendTo('#forms');
}

function makeSelectForm(id, innerStr) {
    let makeSelectTag = function (_id) {
        let select = $(`<select id=${_id} class="form-control"></select>`);
        let year = new Date().getFullYear();

        for (let y of range(year - 1, 2046)) {
            if (y === year) {
                select.append(`<option value="${y}" selected>${y}</option>`);
            } else {
                select.append(`<option value="${y}">${y}</option>`);
            }
        }

        return select;
    };

    let label = $(`<label for=$\{id}>`).html(innerStr);
    $('<div class="form-group"></div>')
        .append(label)
        .append(makeSelectTag(id))
        .appendTo('#forms');
}

function range(from, to) {
    const ar = [];
    for (let i = from; i <= to; i++) {
        ar.push(i)
    }
    return ar;
}

function makeTableForm() {
    let makeOneLine = function () {
        let tr = $('<tr></tr>');

        $.each((new Array(3)), function () {
            tr.append('<td><input class="form-control"></td>');
        });

        return tr;
    };

    let trHeader = $('<tr></tr>')
        .append('<th>受講生の名前</th>')
        .append('<th>ID</th>')
        .append('<th>役割</th>');


    let table = $('<table id="table"></table>')
        .append(trHeader)
        .append(makeOneLine())
        .append(makeOneLine())
        .append(makeOneLine());


    $('<div class="form-group" id="table-form"></div>')
        .append(table)
        .append('<button class="btn btn-primary" id="add-oneline">１行追加</button>')
        .appendTo('#forms');

}

makeSelectForm('year', '今年は西暦何年？');

makeTextForm('group-name', 'グループ名');
makeTextForm('ta-name', 'TAの名前');
makeTextForm('about-team', 'どのようなチームか');

makeTableForm();

makeTextForm('game-name', '卒業制作のゲーム名');
makeTextArea('how-to-play', '操作方法');

makeTextForm('source-pass-jis', 'ソースファイルのパス Windows版（Shift-JIS）');
makeTextForm('source-pass-utf8', 'ソースファイルのパス UNIX版（UTF-8）');
makeTextForm('jar-pass-jis', 'jarファイルのパス Windows版（Shift-JIS）');
makeTextForm('jar-pass-utf8', 'jarファイルのパス UNIX版（UTF-8）');

makeTextForm('from-ta', 'インストラクターより');
