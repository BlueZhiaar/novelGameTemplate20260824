export class Scene{
    constructor(ststring){
        this.ststring=ststring;
    }
}

const scenesArray=[
    new Scene("目の前に紙が落ちています。なんと書いてありますか？"),
    new Scene("カニカマが仲間になりたそうにこちらを見ています"),
    new Scene("百年間自分の尻ポケットに入っていたハンカチが自立してこちらを見つめています"),
]

export const SCENES_ARRAY = scenesArray;

const lastSceneArray=[
    new Scene("ずばり、あなたは悪い人かもしれないかもしれない"),
    new Scene("おいそこの凡庸"),
    new Scene("天使ですか？")
]

export const LAST_SCENE_ARRAY = lastSceneArray;