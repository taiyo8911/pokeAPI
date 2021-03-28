let num =  151; //表示したい画像の数

async function callApi() {
    for (i = 1; i <= num; i++) {
        //数値を文字に変換してURLにする
        i.int;
        const res = await fetch("https://pokeapi.co/api/v2/pokemon/" + i);
        const data = await res.json();

        imageUrl = data['sprites']['back_default']

        //imgタグをHTMLに書き込む
        var sc = document.createElement('img');
        sc.src = imageUrl; //imgタグのsrc属性に追加する
        document.body.appendChild(sc);
    }
}

callApi();