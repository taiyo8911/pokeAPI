"use strict";

//表示したい画像の数
const DISPLAY_NUM = 151;

// APIから取得するデータを保存する配列
let imageUrlArray = []
let idArray = []
let enNameArray = []
let typeArray = []
// jsonファイルから取得する日本語名を保存する配列
let jaNameArray = []


async function main() {
    // APIでデータを取得する
    for (let i = 1; i < DISPLAY_NUM + 2; i++) {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon/" + String(i));
        const data = await res.json();

        // jsonデータを配列に入れていく
        imageUrlArray[i] = data['sprites']['front_default']
        idArray[i] = data['id']
        enNameArray[i] = data['name']
        typeArray[i] = data['types'][0]['type']['name']
        // jsonファイルを読み込んで、日本語の名前を取得する
        $.getJSON("name_trans.json", function (data) {
            jaNameArray[i] = data[i - 1].ja;
        });
    }

    // HTMLの作成と表示
    await generateHtml()

}


// HTMLの作成と表示する関数
function generateHtml() {
    let html = "";
    for (let i = 1; i < DISPLAY_NUM + 1; i++) {
        html += `<div><image src='${imageUrlArray[i]}'><p>${idArray[i]}</p><p>${typeArray[i]}</p><p>${enNameArray[i]}</p><p>${jaNameArray[i]}</p></div>`
    }
    // id:wrapperにHTMLを追加する
    document.getElementById('wrapper').innerHTML = html;
}


main()