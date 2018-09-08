function getTableStr(students: StudentInfo[]): string {
    const studentsTable: string[] = students.map(function (s, index) {
        return `
				<tr>
				    <td>${s.name}</td>
				    <td><a href="../../students/${s.id}/">${s.id}</a></td>
				    <td>${s.role}</td>
				</tr>
`;
    });

    return studentsTable.join("");
}

class StudentInfo {
    constructor(
        public name,
        public id,
        public role,
        public gsfPass,
        public pictPath,
        public title,
        public comment
    ) {}
}

function range(from: number, to: number): number[] {
    const ar: number[] = [];
    for (let i: number = from; i <= to; i++) {
        ar.push(i)
    }
    return ar;
}

function getWorksStr(students: StudentInfo[]){
    const studentWorks: string[] = students.map(function (s, index) {
        console.log("comment : " + s.comment);
        return `
            <div class="staff">
                <div class="left">
                    <a href="${s.pictPath}" data-lightbox="creation"><img src="${s.pictPath}" class="_photo"></a>
                </div>
                <div class="right">
                  <p><b>${s.name}</b> - (<a href="${s.gsfPass}">gsfファイル</a>)</p>
                  <p>タイトル 「 <b><i>${s.title}</i></b> 」</p>
                  
                    ${s.comment.replace(/\n/g,'<br>\n')}
                  
                </div>
            </div>
`;
    });

    return studentWorks.join("");
}

function genHTML() {
    const year = $('#year').val();
    const groupName = $('#group-name').val();
    const taName = $('#ta-name').val();
    const aboutTeam = $('#about-team').val().replace(/\n/g,'<br>\n');

    const studentLen: number = $('.work-form').length;

    console.log(studentLen);

    const students: StudentInfo[] =
        range(0, studentLen - 1).map(function (i, index, array) {
            const name = $(`#name${i}`).val();
            const id = $(`#id${i}`).val();
            const role = $(`#role${i}`).val();
            const gsfPass = $(`#gsf-pass${i}`).val();
            const pictPath = $(`#pict-path${i}`).val();
            const title = $(`#title${i}`).val();
            const comment = $(`#comment${i}`).val();

            return new StudentInfo(name, id, role,gsfPass, pictPath,title, comment)
    });


    const tableStr: string = getTableStr(students);
    const works: string = getWorksStr(students);

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
    <link rel="stylesheet" href="../../../css/cg.css"/>
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
            <span class="tag">3DCG</span>
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
        
        <h2>卒業制作</h2>
${works}
			
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

$('#convert').on('click', genHTML);