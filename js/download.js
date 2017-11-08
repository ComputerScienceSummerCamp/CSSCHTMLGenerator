function handleDownload(){
    const content = $('#converted').val();
    const blob = new Blob([ content ], { "type" : "text/plain" });

    if (window.navigator.msSaveBlob) {
        window.navigator.msSaveBlob(blob, "index.html");

        // msSaveOrOpenBlobの場合はファイルを保存せずに開ける
        window.navigator.msSaveOrOpenBlob(blob, "index.html");
    } else {
        document.getElementById("download").href = window.URL.createObjectURL(blob);
    }
}