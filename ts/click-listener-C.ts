function getTableStr() {
    let table = document.getElementById('table');

    let tableTag = '';

    //iが０のときは、見出し
    for (let i = 1; i < table.rows.length; i++) {
        const name = table.rows[i].cells[0].firstChild.value;
        const id = table.rows[i].cells[1].firstChild.value;

        if(name == "" && id == "")
            continue;

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
    const fromTA = $('#from-ta').val().replace(/\n/g,'<br>\n');

    // カンマ区切りで入力する場合
    // let convertTableHTML = function (s) {
    //     const splited = s.split(',');
    //     const name = splited[0];
    //     const id = splited[1];
    //     const role = splited[2];
    //
    //     return `<tr>
    //         <td>${name}</td>
    //     <td><a href="../../../students/g1cp/${id}">${id}</a></td>
    //     <td>${role}</td>
    //     </tr>`
    // };
    //
    // const tableStr = $('#students').val().split("\n").map(s => convertTableHTML(s)).join("\n");
    // ここまで

    const tableStr = getTableStr();

    const pictValue = $('#pict-value').val();

    const htmlStr =
        `<!DOCTYPE HTML>
<!--
	Linear by TEMPLATED
    templated.co @templatedco
    Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
-->
<html>
<head>
    <title>Computer Science Summer Camp</title>
    <meta http-equiv="content-type" content="text/html; charset=utf-8"/>
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <link href='http://fonts.googleapis.com/css?family=Roboto:400,100,300,700,500,900' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
          integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.10.0/css/lightbox.min.css">
    <link rel="stylesheet" href="../../../css/style.css"/>
    <link rel="stylesheet" href="../../../css/group.css"/>
</head>
<body>

<header class="skelton-image no-toppage">
    <div id="nav-wrapper">
        <!-- Nav -->
        <nav id="nav">
            <ul>
                <li class="active"><a href="index.html">Homepage</a></li>
                <li><a href="../../../recruit.html">募集要項</a></li>
                <li><a href="../../../staff.html">スタッフ紹介</a></li>
                <li><a href="../../../group.html">卒業制作</a></li>
                <li><a href="../../../schedule.html">スケジュール</a></li>
                <li><a href="../../../access.html">アクセス</a></li>
            </ul>
        </nav>
    </div>
    <div class="container">

        <!-- Logo -->
        <div id="logo">
            <h1><a>${groupName}</a></h1>
            <span class="tag">Cプログラミング基礎コース</span>
        </div>
    </div>

    <!--▼▼ハンバーガーメニューここから▼▼-->
    <div class="hm_wrap">
        <input id="hm_menu" type="checkbox" name="hm_menu" class="hm_menu_check"/>
        <label for="hm_menu" class="hm_btn"></label>
        <nav class="hm_menu_wrap">
            <ul class="hm_list">
                <li class="active"><a href="index.html">Homepage</a></li>
                <li><a href="../../../recruit.html">募集要項</a></li>
                <li><a href="../../../staff.html">スタッフ紹介</a></li>
                <li><a href="../../../group.html">卒業制作</a></li>
                <li><a href="../../../schedule.html">スケジュール</a></li>
                <li><a href="../../../access.html">アクセス</a></li>
            </ul>
        </nav>
        <span style="color: white;">Computer Science Summer Camp</span>
    </div>
</header>

<!-- Main -->
<section id="main">
    <div id="content" class="container">
        <h2 style="margin: 0 auto;">グループ</h2>
        <dl class="sampleList02">
            <dt>TA</dt>
            <dd>${taName}</dd>
            <dt>どんなグループ？</dt>
            <dd>${aboutTeam}</dd>
        </dl>


        <h2>メンバー</h2>
        <table>
            <tbody>
            <tr>
                <td><strong>名前</strong></td>
                <td><strong>ID</strong></td>
                <td><strong>役割</strong></td>
            </tr>
            ${tableStr}
            </tbody>
        </table>


        <h2>インストラクターより</h2>
        ${fromTA}


        <h2>グループ写真</h2>
        <a href="../../../images/group/${pictValue}_01.JPG" data-lightbox="group"><img src="../../../images/group/${pictValue}_01.JPG" class="_photo"></a>
        <a href="../../../images/group/${pictValue}_02.JPG" data-lightbox="group"><img src="../../../images/group/${pictValue}_02.JPG" class="_photo"></a>
        <a href="../../../images/group/${pictValue}_03.JPG" data-lightbox="group"><img src="../../../images/group/${pictValue}_03.JPG" class="_photo"></a>
        <a href="../../../images/group/${pictValue}_04.JPG" data-lightbox="group"><img src="../../../images/group/${pictValue}_04.JPG" class="_photo"></a>
    </div>
</section>
<!-- /Main -->

<!-- Tweet -->
<section id="tweet" class="skelton-image">
    <p>
        "平成最後の楽しい思い出をありがとう！"
    </p>
</section>

<!-- Footer -->
<footer>
    <div class="container">
        <h2>Please take a look!</h2>
        <p>Facebookで受講風景公開中♪</p>
        <a href="https://www.facebook.com/ComputerScienceSummerCamp" target="_blank">
            <i class="fab fa-facebook-f"></i>
        </a>
    </div>
</footer>

<!-- Copyright -->
<section id="copyright">
    <div class="container">
        © 2018 Computer Science Summer Camp, Aizu University, All Rights Reserved.
    </div>
</section>
<script
        src="https://code.jquery.com/jquery-3.3.1.min.js"
        integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
        crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.10.0/js/lightbox.min.js"></script>
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