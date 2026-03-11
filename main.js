// 获取元素
const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", function() {
  const nickname = document.getElementById("nickname").value;
  const star = document.getElementById("star").value;
  const mbti = document.getElementById("mbti").value;

  if(!nickname) {
    alert("请输入昵称！");
    return;
  }

  // 存昵称、星座、MBTI
  localStorage.setItem("nickname", nickname);
  localStorage.setItem("star", star);
  localStorage.setItem("mbti", mbti);

  // 初始化每个爱豆的分数，包括星座、MBTI和八字日主
const idolList = [
  {name: "王俊凯", star:"处女座", mbti:"INTJ", dayMaster:"丙火"},
  {name: "王源", star:"天蝎座", mbti:"INFP", dayMaster:"庚金"},
  {name: "易烊千玺", star:"射手座", mbti:"INFJ", dayMaster:"庚金"},
  {name: "丁程鑫", star:"双鱼座", mbti:"ENFP", dayMaster:"癸水"},
  {name: "马嘉祺", star:"射手座", mbti:"INFP", dayMaster:"甲木"},
  {name: "张真源", star:"白羊座", mbti:"ENFP-INFP-INFJ", dayMaster:"己土"},
  {name: "宋亚轩", star:"双鱼座", mbti:"ENFP", dayMaster:"壬水"},
  {name: "贺峻霖", star:"双子座", mbti:"ENFJ", dayMaster:"乙木"},
  {name: "严浩翔", star:"狮子座", mbti:"ESTJ", dayMaster:"丁火"},
  {name: "刘耀文", star:"白羊座", mbti:"ENFP", dayMaster:"庚金"},
  {name: "朱志鑫", star:"天蝎座", mbti:"INFP", dayMaster:"丁火"},
  {name: "左航", star:"双子座", mbti:"ENFP", dayMaster:"辛金"},
  {name: "童禹坤", star:"巨蟹座", mbti:"ENFP", dayMaster:"丁火"},
  {name: "邓佳鑫", star:"狮子座", mbti:"ENFP-ESFJ", dayMaster:"癸水"},
  {name: "余宇涵", star:"射手座", mbti:"ENFJ", dayMaster:"丁火"},
  {name: "苏新皓", star:"摩羯座", mbti:"ENTJ", dayMaster:"丙火"},
  {name: "张极", star:"水瓶座", mbti:"INFP", dayMaster:"戊土"},
  {name: "张泽禹", star:"金牛座", mbti:"ISTJ", dayMaster:"甲木"},
  {name: "穆祉丞", star:"天蝎座", mbti:"ENTP", dayMaster:"甲木"},
  {name: "张峻豪", star:"巨蟹座", mbti:"ISFP-ENFP", dayMaster:"乙木"},
  {name: "张子墨", star:"双鱼座", mbti:"ENTP", dayMaster:"庚金"},
  {name: "黄朔", star:"天秤座", mbti:"ENFP", dayMaster:"丙火"},
  {name: "官俊臣", star:"巨蟹座", mbti:"ISFP", dayMaster:"己土"},
  {name: "张桂源", star:"金牛座", mbti:"ENFP", dayMaster:"丙火"},
  {name: "张函瑞", star:"天秤座", mbti:"INFJ-ESTJ", dayMaster:"丙火"},
  {name: "王橹杰", star:"摩羯座", mbti:"ENFJ", dayMaster:"戊土"},
  {name: "左奇函", star:"双鱼座", mbti:"ENFJ", dayMaster:"戊土"},
  {name: "杨博文", star:"双子座", mbti:"INFP-INTJ", dayMaster:"壬水"},
  {name: "杨涵博", star:"狮子座", mbti:"INTJ", dayMaster:"己土"},
  {name: "张奕然", star:"处女座", mbti:"ENFP", dayMaster:"己土"},
  {name: "聂玮辰", star:"水瓶座", mbti:"ENFP", dayMaster:"癸水"},
  {name: "陈思罕", star:"天蝎座", mbti:"ENTJ", dayMaster:"癸水"},
  {name: "魏子宸", star:"射手座", mbti:"INTJ", dayMaster:"甲木"},
  {name: "李煜东", star:"双鱼座", mbti:"ISFP", dayMaster:"癸水"},
  {name: "陈浚铭", star:"金牛座", mbti:"ENFP", dayMaster:"戊土"}
];

  let idolScores = {};
  idolList.forEach(idol => {
    idolScores[idol.name] = 0;

    // 星座加分
    if(starWeights[star][idol.star]) {
      idolScores[idol.name] += starWeights[star][idol.star];
    }

    // MBTI加分
    if(mbtiWeights[mbti][idol.mbti]) {
      idolScores[idol.name] += mbtiWeights[mbti][idol.mbti];
    }
  });

  localStorage.setItem("idolScores", JSON.stringify(idolScores));

  // 跳转到问题1
  window.location.href = "question1.html";
});