function makeTextForm(id: string, innerStr: string) {
    const label = $(`<label for=${id}>`).html(innerStr);

    $('<div class="form-group"></div>')
        .append(label)
        .append(`<input id=${id} class="form-control">`)
        .appendTo('#forms');

}

function makeTextArea(id: string, innerStr: string) {
    const label = $(`<label for=${id}>`).html(innerStr);

    $('<div class="form-group"></div>')
        .append(label)
        .append(`<textarea id=${id} class="form-control" rows="10"></textarea>`)
        .appendTo('#forms');

}

function range(from: number, to: number) {
    const ar: number[] = [];
    for (let i: number = from; i <= to; i++) {
        ar.push(i)
    }
    return ar;
}

function makeSelectForm(id: string, innerStr: string) {
    let makeSelectTag = function (_id: string) {
        const select = $(`<select id=${_id} class="form-control"></select>`);
        const year: number = new Date().getFullYear();

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

function makeWorkForm(i :number) {

    const makeInputForm = function (id: string, contents: string) {
        const label = $(`<label for=${id}${i}>`).html(contents);
        return $('<div class="form-group"></div>')
                    .append(label)
                    .append(`<input class="form-control" id=${id}${i}>`)
    };

    const makeTextArea = function (id: string, contents: string) {
        const label = $(`<label for=${id}${i}>`).html(contents);
        return $('<div class="form-group"></div>')
            .append(label)
            .append(`<textarea rows="4" class="form-control" id=${id}${i}></textarea>`)
    };

    const name = makeInputForm('name', '受講生の名前');
    const id = makeInputForm('id', 'ID');
    const role = makeInputForm('role', '役割');
    const gsfPass = makeInputForm('gsf-pass', 'gsfファイルのパス');
    const pictPath = makeInputForm('pict-path', 'サムネイル画像のパス');
    const title = makeInputForm('title', 'タイトル');
    const comment = makeTextArea('comment', 'インストラクターからのコメント');

    return $('<div class="work-form"></div>')
        .append(name)
        .append(id)
        .append(role)
        .append(gsfPass)
        .append(pictPath)
        .append(title)
        .append(comment)
}

let index = 0;
function makeWorks() {
    const works = $('<div class="form-group" id="works"></div>');
    const worksForm = $('<div class="form-group" id="works-form"></div>');

    for(let i=0; i < 3; i++){
        worksForm.append(makeWorkForm(i));
        index = i;
    }

    works
        .append(worksForm)
        .append('<button class="btn btn-primary" id="add-oneline">１名追加</button>')
        .appendTo('#forms')
}

function appendOne() {
    index++;
    $('#works-form').append(makeWorkForm(index));
}

makeSelectForm('year', '今年は西暦何年？');

makeTextForm('group-name', 'グループ名');
makeTextForm('ta-name', 'TAの名前');
makeTextArea('about-team', 'どんなグループ？');


makeWorks();
$('#add-oneline').on('click', appendOne);

makeTextForm('pict-value', 'グループ写真の添字(3dcg1など)');
