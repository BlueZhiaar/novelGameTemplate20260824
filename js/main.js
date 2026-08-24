"use strict";

import { testGameState } from "./tools/testStates/testGameState.js";
import { messageArea } from "./tools/testFunctions/controlHtmlElements.js";
import { clearButton } from "./tools/testFunctions/controlHtmlElements.js";
import { setScene } from "./tools/testFunctions/controlHtmlElements.js";
import { makeButton } from "./tools/testFunctions/controlHtmlElements.js";
import { Scene } from "./storyStrings/testStory.js";
import { SCENES_ARRAY } from "./storyStrings/testStory.js";
import { sumMorarity } from "./tools/testFunctions/controlMorality.js";
import { testGameStateClass } from "./tools/testStates/testGameState.js";
import { clearScene } from "./tools/testFunctions/controlHtmlElements.js";
import { LAST_SCENE_ARRAY } from "./storyStrings/testStory.js";

const firstTestGameStateClass = new testGameStateClass;

//インスタンスを更新する関数
function changeMorality(sum_mora){
    firstTestGameStateClass.morality=firstTestGameStateClass.morality+sum_mora;
    console.log(`主人公のmorality:${firstTestGameStateClass.morality}`);
}


  // --- シーン1: 最初の運命の出会い ---
function sceneEncounter() {
  clearScene();
  clearButton();

  // 状態の更新
  testGameState.morality = 0;


  // 改行などで連結して1回だけ呼ぶ
setScene(SCENES_ARRAY[0].ststring);
  

 // 次の行動ボタンを生成（クリックしたらシーン2へ進む）
  makeButton("なにか食べたい","button","nanikatabetai","selectButtonArea",()=>{changeMorality(1),secondScene()});

  makeButton("明るい","button","akarui","selectButtonArea",()=>{changeMorality(5),secondScene()});

  makeButton("暗い","button","kurai","selectButtonArea",()=>{changeMorality(2),secondScene()});
  
}

sceneEncounter();

// --- シーン2: 話しかけた場合 ---
function secondScene() {
  clearScene();
  clearButton();

  // 改行などで連結して1回だけ呼ぶ
setScene(SCENES_ARRAY[1].ststring);

// 次の行動ボタンを生成（クリックしたらシーン2へ進む）
  makeButton("美味しそう","button","nanikatabetai","selectButtonArea",()=>{changeMorality(1),thridScene()});

  makeButton("仲間にする","button","akarui","selectButtonArea",()=>{changeMorality(10),thridScene()});

  makeButton("見なかったことにする","button","kurai","selectButtonArea",()=>{changeMorality(3),thridScene()});
  


}

function thridScene(){
 clearScene();
  clearButton();

  // 改行などで連結して1回だけ呼ぶ
setScene(SCENES_ARRAY[2].ststring);

// 次の行動ボタンを生成（クリックしたらシーン2へ進む）
  makeButton("美味しそう","button","nanikatabetai","selectButtonArea",()=>{changeMorality(1),lastScene()});

  makeButton("仲間にする","button","akarui","selectButtonArea",()=>{changeMorality(10),lastScene()});

  makeButton("見なかったことにする","button","kurai","selectButtonArea",()=>{changeMorality(3),lastScene()});
}

function lastScene(){
 clearScene();
  clearButton();

  console.log(firstTestGameStateClass.morality);

  if(firstTestGameStateClass.morality>20){
    setScene(LAST_SCENE_ARRAY[2].ststring);
  }else if(firstTestGameStateClass.morality>6){
setScene(LAST_SCENE_ARRAY[1].ststring);
  }else{
    setScene(LAST_SCENE_ARRAY[0].ststring);
  }


}







 

