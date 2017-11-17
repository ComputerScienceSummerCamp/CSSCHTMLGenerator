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
        return `
			<div class="imgleft">
				<a rel="lightbox[works]" href="../img/${s.id}.png"><img
					src="../img/${s.id}_s.png" class="samune"></a>
				<p>
					<b>${s.name}</b> - (<a href="${s.gsfPass}">gsfファイル</a>)<br>
					<b>タイトル</b>
					「${s.title}」
				</p>
				<p>
					<b>インストラクターからのコメント</b><br>
					${s.comment}
				</p>
			</div>
`;
    });

    return studentWorks.join("");
}

function genHTML() {
    const year = $('#year').val();
    const groupName = $('#group-name').val();
    const taName = $('#ta-name').val();
    
    const studentLen: number = $('.work-form').length;

    console.log(studentLen);

    const students: StudentInfo[] =
        range(0, studentLen - 1).map(function (i, index, array) {
            const name = $(`#name${i}`).val();
            const id = $(`#id${i}`).val();
            const role = $(`#role${i}`).val();
            const gsfPass = $(`#gsf-pass${i}`).val();
            const title = $(`#title${i}`).val();
            const comment = $(`#comment${i}`).val();

            return new StudentInfo(name, id, role,gsfPass, title, comment)
    });


    const tableStr: string = getTableStr(students);
    const works: string = getWorksStr(students);

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
	<style type="text/css">
                .imgleft {
                overflow: hidden;
                height: auto;
                }

                .imgleft img {
                        float: left;
                        margin: 0 15px 40px 0 !important;
                        padding: 0 !important;
                        border: 0 !important;
                }

                .imgleft p {
                        overflow: hidden;
                        height: auto;
                        font-size: small;
                }
        </style>
	
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
			</dl>
			<h2>メンバー</h2>
			<table>
			    <tr>
			        <td>名前</td>
			        <td>ID</td>
			        <td>役割</td>
			    </tr>
${tableStr}
			</table>
			
			<h2>卒業制作</h2>
${works}
			
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

$('#convert').on('click', genHTML);