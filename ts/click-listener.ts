function getTableStr() {
    let table = document.getElementById('table');

    let tableTag = '';

    //iが０のときは、見出し
    for (let i = 1; i < table.rows.length; i++) {
        const name = table.rows[i].cells[0].firstChild.value;
        const id = table.rows[i].cells[1].firstChild.value;

        if(name == "" && id == "")
            break;

        tableTag +=
`                <tr>
				    <td>${name}</td>
				    <td><a href="../../students/${id}/">${id}</a></td>
				</tr>
        `;
    }

    return tableTag;
}

function genHTML() {
    const year = $('#year').val();
    const groupName = $('#group-name').val();
    const taName = $('#ta-name').val();
    const aboutTeam = $('#about-team').val();
    const fromTA = $('#from-ta').val();

    const tableStr = getTableStr($('#table'));

    const htmlStr =
        `<!DOCTYPE HTML>
<html lang="ja">
<head>
	<meta charset="UTF-8">
	<link rel="stylesheet" href="css/default.css">
	<link href="css/lightbox.css" rel="stylesheet">
	<script
        src="https://code.jquery.com/jquery-3.2.1.min.js"
        integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
        crossorigin="anonymous"></script>
	<script src="js/lightbox-2.6.min.js"></script>
	<title>${groupName}</title>
</head>
<body>
	<div id="wrapper">
		<header>
			<h1>コンピュータサイエンスサマーキャンプ ${year}</h1>
		</header>
		<article>
			<h2>${groupName}</h2>
			<dl>
				<dt>グループ名</dt>
				<dd>${groupName}</dd>
				<dt>TA</dt>
				<dd>${taName}</dd>
				<dt>どのようなチームか</dt>
				<dd>${aboutTeam}</dd>
			</dl>
			<h2>メンバー</h2>
			<table>
			    <tr>
			        <td>名前</td>
			        <td>ID</td>
			    </tr>
                ${tableStr}
			</table>
			<h2>インストラクターより</h2>
			<p>
				${fromTA}
			</p>
			<h2>グループ写真</h2>
			<a rel="lightbox[groupphoto]" href="img/g1.jpg"><img src="img/g1_s.jpg" class="samune"></a>
			<a rel="lightbox[groupphoto]" href="img/g2.jpg"><img src="img/g2_s.jpg" class="samune"></a>
			<a rel="lightbox[groupphoto]" href="img/g3.jpg"><img src="img/g3_s.jpg" class="samune"></a>
		</article>
		<footer>
		<p>&copy ${year} Computer Science Summer Camp, Aizu University, All Rights Reserved.</p>
		</footer>
	</div> <!-- #wrapper -->
</body>
</html>
`;

    //textメソッドを使う
    $('#converted').text(htmlStr);
}

function appendRow() {
    let tr = $('<tr></tr>');
    const columnLen: number = $('th').length;

    for (let i = 0; i < columnLen; i++) {
        $('<td></td>').append('<input class="form-control">').appendTo(tr);
    }

    $('#table').append(tr);
}

$('#add-oneline').on('click', appendRow);

$('#convert').on('click', genHTML);