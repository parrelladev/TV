function changeVideo(url, channelName) {
    // Decodifica a URL
    const decodedUrl = decodeURIComponent(url);
    document.getElementById('videoPlayer').src = decodedUrl;
    updateTranscription(channelName);
}

function updateTranscription(channelName) {
    document.querySelector('.title-transcription').textContent = "Assistindo: " + channelName;
}

document.getElementById('canal1').addEventListener('click', function() {
    changeVideo("//%E3%83%87-%E3%83%B3-%E3%83%83-%E3%82%AF-%E3%82%B9-%E3%83%B3-%E3%83%87-%E3%83%89-%E3%83%89-%E3%83%AB-%E3%83%9C-%E3%83%A9-%E3%83%AB%E3%82%B0%E3%83%AC%E3%83%95%E3%83%88-%E3%83%96%E3%83%A0%E3%83%95%E3%82%AF%E3%83%88%E3%83%97%E3%83%89%E3%83%A9%E3%82%A2.%E3%82%B8-1l1-%E3%82%B0.%E3%83%83-22-%E3%82%AF-11-%E3%82%B9-33-%E3%83%AB-99-%E3%83%97-75-%E3%82%BE--%E3%82%A8--%E3%83%96--%E3%82%B9-%E3%83%83.%E3%82%AF.%E3%82%B9.%E3%82%BA.%E3%82%AF.%E3%82%B8.%E3%82%B7%E3%82%B0%E3%83%8A%E3%83%AB%E3%83%91%E3%83%96%E3%83%AA%E3%82%B3-%E5%85%AC%E5%85%B1%E3%81%AE%E6%A8%99%E8%AD%98-%E3%83%90%E3%83%AC%E3%82%A6%E3%83%89%E3%83%83%E3%83%88%E3%82%AF%E3%82%A6%E3%82%B0%E3%83%88%E3%83%83%E3%83%88%E3%82%BA%E3%83%92.%E3%82%BB%E3%83%BC%E3%83%AB/player3/ch.php?canal=bandsports", "Band Sports");
});

document.getElementById('canal2').addEventListener('click', function() {
    changeVideo("//%E3%83%87-%E3%83%B3-%E3%83%83-%E3%82%AF-%E3%82%B9-%E3%83%B3-%E3%83%87-%E3%83%89-%E3%83%89-%E3%83%AB-%E3%83%9C-%E3%83%A9-%E3%83%AB%E3%82%B0%E3%83%AC%E3%83%95%E3%83%88-%E3%83%96%E3%83%A0%E3%83%95%E3%82%AF%E3%83%88%E3%83%97%E3%83%89%E3%83%A9%E3%82%A2.%E3%82%B8-1l1-%E3%82%B0.%E3%83%83-22-%E3%82%AF-11-%E3%82%B9-33-%E3%83%AB-99-%E3%83%97-75-%E3%82%BE--%E3%82%A8--%E3%83%96--%E3%82%B9-%E3%83%83.%E3%82%AF.%E3%82%B9.%E3%82%BA.%E3%82%AF.%E3%82%B8.%E3%82%B7%E3%82%B0%E3%83%8A%E3%83%AB%E3%83%91%E3%83%96%E3%83%AA%E3%82%B3-%E5%85%AC%E5%85%B1%E3%81%AE%E6%A8%99%E8%AD%98-%E3%83%90%E3%83%AC%E3%82%A6%E3%83%89%E3%83%83%E3%83%88%E3%82%AF%E3%82%A6%E3%82%B0%E3%83%88%E3%83%83%E3%83%88%E3%82%BA%E3%83%92.%E3%82%BB%E3%83%BC%E3%83%AB/player3/ch.php?canal=espn", "ESPN");
});

document.getElementById('canal3').addEventListener('click', function() {
    changeVideo("", "Premiere");
});

document.getElementById('canal4').addEventListener('click', function() {
    changeVideo("//%E3%83%87-%E3%83%B3-%E3%83%83-%E3%82%AF-%E3%82%B9-%E3%83%B3-%E3%83%87-%E3%83%89-%E3%83%89-%E3%83%AB-%E3%83%9C-%E3%83%A9-%E3%83%AB%E3%82%B0%E3%83%AC%E3%83%95%E3%83%88-%E3%83%96%E3%83%A0%E3%83%95%E3%82%AF%E3%83%88%E3%83%97%E3%83%89%E3%83%A9%E3%82%A2.%E3%82%B8-1l1-%E3%82%B0.%E3%83%83-22-%E3%82%AF-11-%E3%82%B9-33-%E3%83%AB-99-%E3%83%97-75-%E3%82%BE--%E3%82%A8--%E3%83%96--%E3%82%B9-%E3%83%83.%E3%82%AF.%E3%82%B9.%E3%82%BA.%E3%82%AF.%E3%82%B8.%E3%82%B7%E3%82%B0%E3%83%8A%E3%83%AB%E3%83%91%E3%83%96%E3%83%AA%E3%82%B3-%E5%85%AC%E5%85%B1%E3%81%AE%E6%A8%99%E8%AD%98-%E3%83%90%E3%83%AC%E3%82%A6%E3%83%89%E3%83%83%E3%83%88%E3%82%AF%E3%82%A6%E3%82%B0%E3%83%88%E3%83%83%E3%83%88%E3%82%BA%E3%83%92.%E3%82%BB%E3%83%BC%E3%83%AB/player3/ch.php?canal=sportv1", "SporTV");
});
