// =======================
// 1. 数据准备与读取
// =======================

const nickname = localStorage.getItem("nickname") || "朋友";
const userStar = localStorage.getItem("star");
const userMbti = localStorage.getItem("mbti");
const userGroup = localStorage.getItem("group"); 

const answers = [
  localStorage.getItem("q1"),
  localStorage.getItem("q2"),
  localStorage.getItem("q3"),
  localStorage.getItem("q4"),
  localStorage.getItem("q5"),
  localStorage.getItem("q6"),
  localStorage.getItem("q7"),
  localStorage.getItem("q8")
];

const validAnswers = answers.filter(d => d && d.trim() !== "");
const dayFrequency = {};
validAnswers.forEach(d => {
  dayFrequency[d] = (dayFrequency[d] || 0) + 1;
});
const totalValidQuestions = validAnswers.length;

const idolList = [
  {name:"王俊凯", star:"处女座", mbti:"INTJ", day:"丙火", group:"TFBOYS", text:"下次见面之前，照顾好自己。", image:"王俊凯.jpg"},
  {name:"王源", star:"天蝎座", mbti:"INFP", day:"庚金", group:"TFBOYS", text:"涓涓细流，浩瀚江河，全看我们如何相遇。", image:"王源.jpg"},
  {name:"易烊千玺", star:"射手座", mbti:"INFJ", day:"庚金", group:"TFBOYS", text:"重要的东西眼睛是看不到的，就像花儿一样。", image:"易烊千玺.jpg"},
  {name:"丁程鑫", star:"双鱼座", mbti:"ENFP", day:"癸水", group:"时代少年团", text:"亲爱的小孩，今天有没有哭？", image:"丁程鑫.jpg"},
  {name:"马嘉祺", star:"射手座", mbti:"INFP", day:"甲木", group:"时代少年团", text:"别追逐风，你就在风中。", image:"马嘉祺.jpg"},
  {name:"张真源", star:"白羊座", mbti:"ENFP", day:"己土", group:"时代少年团", text:"春天哪有很远，春天就在眼前。", image:"张真源.jpg"},
  {name:"宋亚轩", star:"双鱼座", mbti:"ENFP", day:"壬水", group:"时代少年团", text:"笑总不会犯错，和小宋老师一样多笑笑吧。", image:"宋亚轩.jpg"},
  {name:"贺峻霖", star:"双子座", mbti:"ENFJ", day:"乙木", group:"时代少年团", text:"看，阳光照进房间啦！", image:"贺峻霖.jpg"},
  {name:"严浩翔", star:"狮子座", mbti:"ESTJ", day:"丁火", group:"时代少年团", text:"希望天南海北的我们都万事胜意。", image:"严浩翔.jpg"},
  {name:"刘耀文", star:"白羊座", mbti:"ENFP", day:"庚金", group:"时代少年团", text:"心跳如擂鼓的声音是存在的证明。", image:"刘耀文.jpg"},
  {name:"朱志鑫", star:"天蝎座", mbti:"INFP", day:"丁火", group:"TF三代", text:"青春的时间里，要勇敢，不要遗憾。", image:"朱志鑫.jpg"},
  {name:"左航", star:"双子座", mbti:"ENFP", day:"辛金", group:"TF三代", text:"世界末日不是用来悲伤的，是用来享受的。", image:"左航.jpg"},
  {name:"童禹坤", star:"巨蟹座", mbti:"ENFP", day:"丁火", group:"TF三代", text:"因为是我，因为是你，世界上仅有的，独一无二的。", image:"童禹坤.jpg"},
  {name:"邓佳鑫", star:"狮子座", mbti:"ESFJ", day:"癸水", group:"TF三代", text:"远远望着每天的皓月，点点星辰就在眼前了。", image:"邓佳鑫.jpg"},
  {name:"余宇涵", star:"射手座", mbti:"ENFJ", day:"丁火", group:"TF三代", text:"下一次见面，依然怦然心动。", image:"余宇涵.jpg"},
  {name:"苏新皓", star:"摩羯座", mbti:"ENTJ", day:"丙火", group:"TF三代", text:"我就让爱我的人来救我吧。", image:"苏新皓.jpg"},
  {name:"张极", star:"水瓶座", mbti:"INFP", day:"戊土", group:"TF三代", text:"一起过秋天冬天然后过年吧。", image:"张极.jpg"},
  {name:"张泽禹", star:"金牛座", mbti:"ISTJ", day:"甲木", group:"TF三代", text:"长大是我们一起的一件事。", image:"张泽禹.jpg"},
  {name:"穆祉丞", star:"天蝎座", mbti:"ENTP", day:"甲木", group:"TF三代", text:"但求一刻你能倾听我。", image:"穆祉丞.jpg"},
  {name:"张峻豪", star:"巨蟹座", mbti:"ISFP", day:"乙木", group:"TF三代", text:"一切顺利。", image:"张峻豪.jpg"},
  {name:"张子墨", star:"双鱼座", mbti:"ENTP", day:"庚金", group:"TF三代", text:"答应你，少熬夜少熬夜。", image:"张子墨.jpg"},
  {name:"黄朔", star:"天秤座", mbti:"ENFP", day:"丙火", group:"TF三代", text:"即使不属于我，我也不会放手。", image:"黄朔.jpg"},
  {name:"官俊臣", star:"巨蟹座", mbti:"ISFP", day:"己土", group:"TF四代", text:"祝你像星光一样明亮璀璨呀。", image:"官俊臣.jpg"},
  {name:"张桂源", star:"金牛座", mbti:"ENFP", day:"丙火", group:"TF四代", text:"我的青春还没有散场。", image:"张桂源.jpg"},
  {name:"张函瑞", star:"天秤座", mbti:"INFJ", day:"丙火", group:"TF四代", text:"我落在了拥抱的季节，幸福会像雪花安稳靠在肩膀上。", image:"张函瑞.jpg"},
  {name:"王橹杰", star:"摩羯座", mbti:"ENFJ", day:"戊土", group:"TF四代", text:"愿幸福降临手心。", image:"王橹杰.jpg"},
  {name:"左奇函", star:"双鱼座", mbti:"ENFJ", day:"戊土", group:"TF四代", text:"其实生活很简单，过了今天就是明天啦。", image:"左奇函.jpg"},
  {name:"杨博文", star:"双子座", mbti:"INFP", day:"壬水", group:"TF四代", text:"我们一起，在新一年创造更多值得回忆的瞬间。", image:"杨博文.jpg"},
  {name:"杨涵博", star:"狮子座", mbti:"INTJ", day:"己土", group:"TF四代", text:"珍惜当下的美好，用眼睛记录下来。", image:"杨涵博.jpg"},
  {name:"张奕然", star:"处女座", mbti:"ENFP", day:"己土", group:"TF四代", text:"我们对彼此的想念一定会化作更大的力量，支撑着我。", image:"张奕然.jpg"},
  {name:"聂玮辰", star:"水瓶座", mbti:"ENFP", day:"癸水", group:"TF四代", text:"我就是奔着目标去干。", image:"聂玮辰.jpg"},
  {name:"陈思罕", star:"天蝎座", mbti:"ENTJ", day:"癸水", group:"TF四代", text:"快乐小狗驾到！werwerwer", image:"陈思罕.jpg"},
  {name:"魏子宸", star:"射手座", mbti:"INTJ", day:"甲木", group:"TF四代", text:"即使不知道前方有何事物，也要向前走。", image:"魏子宸.jpg"},
  {name:"李煜东", star:"双鱼座", mbti:"ISFP", day:"癸水", group:"TF四代", text:"我觉得自己就是自己。", image:"李煜东.jpg"},
  {name:"陈浚铭", star:"金牛座", mbti:"ENFP", day:"戊土", group:"TF四代", text:"紧张的时候，不要忘记微笑。", image:"陈浚铭.jpg"}
];

// =======================
// 2. 核心算法：纯净硬实力 + 分步排序
// =======================

const dayElements = {
  "甲木":"木", "乙木":"木",
  "丙火":"火", "丁火":"火",
  "戊土":"土", "己土":"土",
  "庚金":"金", "辛金":"金",
  "壬水":"水", "癸水":"水"
};

function getDominantUserDay() {
  if (Object.keys(dayFrequency).length === 0) return null;
  return Object.keys(dayFrequency).reduce((a, b) => dayFrequency[a] > dayFrequency[b] ? a : b);
}
const dominantUserDay = getDominantUserDay();

// 名字微扰：确保绝对不同分
function getNameMicroScore(name) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = ((hash << 5) - hash) + name.charCodeAt(i);
    hash |= 0;
  }
  const val = Math.abs(hash) % 99; 
  return (val + 1) / 10000; 
}

function getDayMatchScore(userDay, idolDay) {
  if (!userDay || !idolDay) return 60;
  const uElem = dayElements[userDay];
  const iElem = dayElements[idolDay];
  if (!uElem || !iElem) return 60;

  let score = 60;
  if (uElem === iElem) {
    score = 95;
    if (userDay === idolDay) score += 5; 
  } else {
    const generate = {"木":"火", "火":"土", "土":"金", "金":"水", "水":"木"};
    if (generate[iElem] === uElem) score = 80;
    else if (generate[uElem] === iElem) score = 70;
    else score = 60;
  }
  return score;
}

function getMbtiScore(userMbti, idolMbti) {
  if (!userMbti || !idolMbti) return 60;
  let score = 50;
  let matchCount = 0;
  for (let i = 0; i < 4; i++) {
    if (userMbti[i] === idolMbti[i]) {
      matchCount++;
      if (i === 1 || i === 2) score += 15;
      else score += 10;
    }
  }
  if (matchCount === 4) score += 10;
  return score > 100 ? 100 : score;
}

function getStarScore(userStar, idolStar) {
  if (!userStar || !idolStar) return 60;
  if (userStar === idolStar) return 95;
  
  const fireSigns = ["白羊座", "狮子座", "射手座"];
  const earthSigns = ["金牛座", "处女座", "摩羯座"];
  const airSigns = ["双子座", "天秤座", "水瓶座"];
  const waterSigns = ["巨蟹座", "天蝎座", "双鱼座"];
  
  const getGroup = (s) => {
    if(fireSigns.includes(s)) return 'fire';
    if(earthSigns.includes(s)) return 'earth';
    if(airSigns.includes(s)) return 'air';
    if(waterSigns.includes(s)) return 'water';
    return 'other';
  };
  
  if (getGroup(userStar) === getGroup(idolStar)) return 80;
  return 60;
}

function calculateScores() {
  const WEIGHT_DAY = 0.60;
  const WEIGHT_MBTI = 0.25;
  const WEIGHT_STAR = 0.15;
  
  // 【重要】初始化分数，不再包含任何团体加成
  idolList.forEach(idol => {
    idol.totalScore = 0;
    idol.tieBreaker = 0;
    idol.finalDisplayScore = 0;
    idol.details = {};
    idol.nameMicro = getNameMicroScore(idol.name);
    
    // 标记是否为用户选择的团体 (仅用于第一步筛选，不影响分数)
    idol.isFavoriteGroup = (userGroup && userGroup !== 'all' && idol.group && idol.group.includes(userGroup));
  });

  // --- 步骤 A: 日主 ---
  if (totalValidQuestions > 0) {
    idolList.forEach(idol => {
      let weightedDayScore = 0;
      for (const [userDay, count] of Object.entries(dayFrequency)) {
        const matchScore = getDayMatchScore(userDay, idol.day);
        const frequencyWeight = count / totalValidQuestions;
        weightedDayScore += matchScore * frequencyWeight;
        if (dominantUserDay && dominantUserDay === idol.day) idol.tieBreaker += 0.5;
      }
      idol.details.dayRaw = weightedDayScore;
      idol.totalScore += weightedDayScore * WEIGHT_DAY;
    });
  } else {
    idolList.forEach(idol => idol.totalScore += 60 * WEIGHT_DAY);
  }

  // --- 步骤 B: MBTI ---
  idolList.forEach(idol => {
    const mScore = getMbtiScore(userMbti, idol.mbti);
    idol.details.mbtiRaw = mScore;
    idol.totalScore += mScore * WEIGHT_MBTI;
    if (userMbti && userMbti === idol.mbti) idol.tieBreaker += 0.3;
  });

  // --- 步骤 C: 星座 ---
  idolList.forEach(idol => {
    const sScore = getStarScore(userStar, idol.star);
    idol.details.starRaw = sScore;
    idol.totalScore += sScore * WEIGHT_STAR;
    if (userStar && userStar === idol.star) idol.tieBreaker += 0.2;
  });

  // 【重要】这里不再加团体分！所有人的分数都是纯粹的匹配度。

  // =======================
  // 3. 【核心逻辑】分步排序 (Stepwise Sorting)
  // =======================
  
  // 辅助排序函数：按 (总分 + 微差 + 名字微扰) 降序
  const sortByIdolScore = (a, b) => {
    const scoreA = a.totalScore + a.tieBreaker + a.nameMicro;
    const scoreB = b.totalScore + b.tieBreaker + b.nameMicro;
    return scoreB - scoreA;
  };

  let finalRanking = [];
  let remainingIdols = [...idolList];

  // Step 1: 找出【用户 chosen 团体】中分数最高的人，强制放在第一位
  if (userGroup && userGroup !== 'all') {
    // 筛选出同团的人
    const groupMembers = remainingIdols.filter(idol => idol.isFavoriteGroup);
    
    if (groupMembers.length > 0) {
      // 在同团的人里按硬实力排序
      groupMembers.sort(sortByIdolScore);
      const topGroupMember = groupMembers[0];
      
      // 锁定为第一名
      finalRanking.push(topGroupMember);
      
      // 从剩余名单中移除这个人，避免重复
      remainingIdols = remainingIdols.filter(idol => idol.name !== topGroupMember.name);
    }
  }

  // Step 2: 剩下的所有人 (包括同团的其他人 + 其他团的人)，按硬实力全局排序
  // 因为没有团体加分，外团的高分选手现在可以公平竞争了！
  remainingIdols.sort(sortByIdolScore);
  
  // 取前4名加入榜单 (凑齐5人)
  const nextTop4 = remainingIdols.slice(0, 4);
  finalRanking = finalRanking.concat(nextTop4);

  // 如果最终不足5人，用剩下的补齐
  if (finalRanking.length < 5) {
    const rest = remainingIdols.slice(4);
    finalRanking = finalRanking.concat(rest);
  }

  // =======================
  // 4. 强制拉开分差 (Force Unique Display)
  // =======================
  finalRanking.forEach((idol, index) => {
    let rawVal = idol.totalScore + idol.tieBreaker + idol.nameMicro;
    
    if (index > 0) {
      const prevIdol = finalRanking[index - 1];
      const prevRawVal = prevIdol.totalScore + prevIdol.tieBreaker + prevIdol.nameMicro;
      
      // 防止完全同分 (浮点误差或极端巧合)
      // 注意：这里不强制 rawVal < prevRawVal，因为 Step1 插入的人可能分数确实比 Step2 的第一名低
      // 但我们要保证显示出来的百分比尽量不重复，或者至少逻辑上是唯一的
      if (Math.abs(rawVal - prevRawVal) < 0.0001) {
         rawVal = prevRawVal - 0.001;
      }
    }
    idol.finalDisplayScore = rawVal;
  });
  
  return finalRanking;
}

// =======================
// 5. 渲染与交互
// =======================

function normalizeScore(rawScore) {
  const minRaw = 55; 
  const maxRaw = 110;
  
  let ratio = (rawScore - minRaw) / (maxRaw - minRaw);
  if (ratio < 0) ratio = 0;
  if (ratio > 1) ratio = 1;
  
  const percent = Math.floor(75 + ratio * 24);
  return percent > 99 ? 99 : (percent < 75 ? 75 : percent);
}

function updateDisplay(idolData, percent) {
  document.getElementById('idolName').innerText = idolData.name;
  document.getElementById('matchScore').innerText = percent;
  
  const quoteEl = document.getElementById('idolQuote');
  quoteEl.style.opacity = 0;
  setTimeout(() => {
    quoteEl.innerText = idolData.text;
    quoteEl.style.opacity = 1;
  }, 200);

  const imgEl = document.getElementById('idolPhoto');
  const imgSrc = idolData.image.startsWith('http') ? idolData.image : `images/${idolData.image}`;
  
  imgEl.style.opacity = 0;
  imgEl.src = imgSrc;
  imgEl.onerror = function() {
    this.src = 'https://via.placeholder.com/300x300?text=No+Image'; 
  };
  imgEl.onload = function() {
    this.style.opacity = 1;
  };

  document.getElementById('tagConstellation').innerText = `⭐ ${idolData.star}`;
  document.getElementById('tagMBTI').innerText = `🧠 ${idolData.mbti}`;
  document.getElementById('tagAttribute').innerText = `🔮 ${idolData.day}`;
  const groupText = idolData.group ? `🎤 ${idolData.group}` : '';
  document.getElementById('tagAge').innerText = groupText;
}

function renderRanking(sortedList) {
  const listEl = document.getElementById('rankList');
  listEl.innerHTML = '';

  const top5 = sortedList.slice(0, 5);

  top5.forEach((idol, index) => {
    const percent = normalizeScore(idol.finalDisplayScore);
    
    const li = document.createElement('li');
    li.className = 'rank-item';
    if (index === 0) li.classList.add('active');
    
    // 标记第一名
    const isTopPick = (index === 0 && idol.isFavoriteGroup);
    const badge = isTopPick ? '<span style="font-size:10px; color:#ff6b6b; margin-left:5px;">(你的首选团体)</span>' : '';

    li.innerHTML = `
      <span class="rank-num">${index + 1}</span>
      <span class="rank-name">${idol.name}${badge}</span>
      <div class="rank-bar">
        <div class="rank-fill" style="width: 0%" data-width="${percent}%"></div>
      </div>
      <span class="rank-score">${percent}%</span>
    `;

    li.addEventListener('click', () => {
      document.querySelectorAll('.rank-item').forEach(item => item.classList.remove('active'));
      li.classList.add('active');
      updateDisplay(idol, percent);
    });

    listEl.appendChild(li);

    setTimeout(() => {
      li.querySelector('.rank-fill').style.width = `${percent}%`;
    }, 300 + index * 100);
  });
}

window.addEventListener('DOMContentLoaded', () => {
  const sortedList = calculateScores();
  
  if (sortedList.length > 0) {
    const topIdol = sortedList[0];
    const topPercent = normalizeScore(topIdol.finalDisplayScore);
    
    updateDisplay(topIdol, topPercent);
    renderRanking(sortedList);
  } else {
    document.getElementById('idolName').innerText = "数据加载失败";
    document.getElementById('idolQuote').innerText = "请重新测试";
  }
});
// 分享功能
function shareLink() {
    const url = window.location.href;
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(() => showToast("链接已复制！快发给朋友吧~"));
    } else {
        // 兼容旧浏览器
        const textArea = document.createElement("textarea");
        textArea.value = url;
        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
            showToast("链接已复制！快发给朋友吧~");
        } catch (err) {
            showToast("复制失败，请手动复制地址栏");
        }
        document.body.removeChild(textArea);
    }
}

// 显示提示
function showToast(message) {
    const toast = document.getElementById("toast");
    if(toast) {
        toast.innerText = message;
        toast.className = "toast show";
        setTimeout(() => { toast.className = toast.className.replace("show", ""); }, 3000);
    }
}