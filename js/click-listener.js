function getTableStr() {
    let table = document.getElementById('table');

    let tableTag = '';

    //iが０のときは、見出し
    for (let i = 1; i < table.rows.length; i++) {
        tableTag += '\t\t\t\t<tr>\n';

        const name = table.rows[i].cells[0].firstChild.value;
        const id = table.rows[i].cells[1].firstChild.value;
        const role = table.rows[i].cells[2].firstChild.value;

        tableTag += `\t\t\t\t\t<td>${name}</td>\n`;
        tableTag += `\t\t\t\t\t<td><a href="../../students/${id}/">${id}</a></td>\n`;
        tableTag += `\t\t\t\t\t<td>${role}</td>\n`;

        tableTag += '\t\t\t\t<tr>\n'
    }

    return tableTag;
}

function genHTML() {
    const year = $('#year').val();
    const groupName = $('#group-name').val();
    const taName = $('#ta-name').val();
    const aboutTeam = $('#about-team').val();
    const gameName = $('#game-name').val();
    const howToPlay = $('#how-to-play').val();
    const sourcePassJIS = $('#source-pass-jis').val();
    const sourcePassUTF8 = $('#source-pass-utf8').val();
    const jarPassJIS = $('#jar-pass-jis').val();
    const jarPassUTF8 = $('#jar-pass-utf8').val();
    const fromTA = $('#from-ta').val();

    const tableStr = getTableStr($('#table'));

    const htmlStr = '<!DOCTYPE HTML>\n ' +
        '<html lang="ja">\n' +
        '<head>\n' +
        '\t<meta charset="UTF-8">\n' +
        '\t<link rel="stylesheet" href="css/default.css">\n' +
        '\t<link href="css/lightbox.css" rel="stylesheet">\n' +
        '\t<script\n' +
        '        src="https://code.jquery.com/jquery-3.2.1.min.js"\n' +
        '        integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="\n' +
        '        crossorigin="anonymous"></script>\n' +
        '\t<script src="js/lightbox-2.6.min.js"></script>\n' +
        '\t<title>' + groupName + '</title>\n' +
        '</head>\n' +
        '<body>\n' +
        '\t<div id="wrapper">\n' +
        '\t\t<header>\n' +
        '\t\t\t<h1>コンピュータサイエンスサマーキャンプ ' + year + '</h1>\n' +
        '\t\t</header>\n' +
        '\t\t<article>\n' +
        '\t\t\t<h2>' + groupName + '</h2>\n' +
        '\t\t\t<dl>\n' +
        '\t\t\t\t<dt>グループ名</dt>\n' +
        '\t\t\t\t<dd> ' + groupName + '</dd>\n' +
        '\t\t\t\t<dt>TA</dt>\n' +
        '\t\t\t\t<dd>' + taName + '</dd>\n' +
        '\t\t\t\t<dt>どのようなチームか</dt>\n' +
        '\t\t\t\t<dd>' + aboutTeam + '</dd>\n' +
        '\t\t\t</dl>\n' +
        '\t\t\t<h2>メンバー</h2>\n' +
        '\t\t\t<table>\n' +
        '\t\t\t\t<tr>\n' +
        '\t\t\t\t\t<td>名前</td>\n' +
        '\t\t\t\t\t<td>ID</td>\n' +
        '\t\t\t\t\t<td>役割</td>\n' +
        '\t\t\t\t</tr>\n' +
        tableStr +
        '\t\t\t</table>\n' +
        '\t\t\t<h2>卒業制作</h2>\n' +
        '\t\t\t<h3>' + gameName + '</h3>\n' +
        '\n' +
        '\t\t\t<h4>操作方法</h4>\n' +
        '\t\t\t<p>\n' +
        '\t\t\t\t' + howToPlay + '\n' +
        '\t\t\t</p>\n' +
        '\t\t\t<h4>ソースファイル</h4>\n' +
        '\t\t\t<p><a href="' + sourcePassJIS + '">Windows版（Shift-JIS）</a>　<a href="' + sourcePassUTF8 + '">UNIX版（UTF-8）</a></p>\n' +
        '\t\t\t<h4>JARファイル</h4>\n' +
        '\t\t\t<p><a href="' + jarPassJIS + '">Windows版（Shift-JIS）</a>　<a href="' + jarPassUTF8 + '">UNIX版（UTF-8）</a></p>\n' +
        '\t\t\t<h4>オープニング</h4>\n' +
        '\t\t\t<a rel="lightbox[opening]" href="img/op1.jpg"><img src="img/op1_s.jpg" class="samune"></a>\n' +
        '\t\t\t<a rel="lightbox[opening]" href="img/op2.jpg"><img src="img/op2_s.jpg" class="samune"></a>\n' +
        '\t\t\t<h4>エンディング</h4>\n' +
        '\t\t\t<a rel="lightbox" href="img/ed.jpg"><img src="img/ed_s.jpg" class="samune"></a>\n' +
        '\t\t\t<h4>スクリーンショット</h4>\n' +
        '\t\t\t<a rel="lightbox[screenshot]" href="img/s1.jpg"><img src="img/s1_s.jpg" class="samune"></a>\n' +
        '\t\t\t<a rel="lightbox[screenshot]" href="img/s2.jpg"><img src="img/s2_s.jpg" class="samune"></a>\n' +
        '\t\t\t<a rel="lightbox[screenshot]" href="img/s3.jpg"><img src="img/s3_s.jpg" class="samune"></a>\n' +
        '\t\t\t<h2>インストラクターより</h2>\n' +
        '\t\t\t<p>\n' +
        '\t\t\t\t' + fromTA + '\n' +
        '\t\t\t</p>\n' +
        '\t\t\t<h2>グループ写真</h2>\n' +
        '\t\t\t<a rel="lightbox[groupphoto]" href="img/g1.jpg"><img src="img/g1_s.jpg" class="samune"></a>\n' +
        '\t\t\t<a rel="lightbox[groupphoto]" href="img/g2.jpg"><img src="img/g2_s.jpg" class="samune"></a>\n' +
        '\t\t\t<a rel="lightbox[groupphoto]" href="img/g3.jpg"><img src="img/g3_s.jpg" class="samune"></a>\n' +
        '\t\t</article>\n' +
        '\t\t<footer>\n' +
        '\t\t<p>&copy ' + year + ' Computer Science Summer Camp, Aizu University, All Rights Reserved.</p>\n' +
        '\t\t</footer>\n' +
        '\t</div> <!-- #wrapper -->\n' +
        '</body>\n' +
        '</html>';

    //textメソッドを使う
    $('#converted').text(htmlStr);
}

function appendRow() {
    let tr = $('<tr></tr>');

    for (let i = 0; i < 3; i++) {
        $('<td></td>').append('<input class="form-control">').appendTo(tr);
    }

    $('#table').append(tr);
}

$('#add-oneline').on('click', appendRow);

$('#convert').on('click', genHTML);