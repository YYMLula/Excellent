 <template>
        <div id="main">
          <h1 class="header-title">答案之书</h1>
          <p class="header-description">嘿，年轻人，你的小脑袋瓜儿在想着什么呢？<br/>如果实在想不明白的话，把答案交给我吧</p>
          <div class="answerWrap" ref="answerWrap">
          </div>
          <div class="input">
              <p ref="pageLength"></p>
              <label for="num">请告诉我，你心里所想的数字是:</label>
              <input type="text" ref="num">
              <button @click="submit">确认</button>
          </div>
          <button @click="randomPage">随机翻页</button>
      </div>
    </template>
    
    <script>
    export default {
      mounted() {
        this.init();
      },
      methods: {
        init() {
          const answerWrap = this.$refs.answerWrap;
    
          const answerArr = ["你想要的答案都在这里"].concat(this.answers);
    
          this.$refs.pageLength.innerText = `现在请带着你的问题，闭上双眼，心里想一个1-${answerArr.length - 1}之间的数字`;
    
          answerArr.forEach((item, index) => {
            const answer = document.createElement("div");
            answer.classList.add("answer");
            if (index === 0) {
              answer.classList.add("cur");
            } else {
              answer.classList.add("next");
            }
            answer.innerHTML = `
                    <div class="container">${item}</div>
                    <div class="page">${index}</div>
                `;
            answerWrap.appendChild(answer);
          });
        },
        submit() {
          const num = this.$refs.num.value;
          const answerWrap = this.$refs.answerWrap;
    
          for (let i = 0, len = this.answers.length; i < len; i++) {
            if (i < num) {
              answerWrap.children[i].className = "answer prev";
            } else if (i == num) {
              answerWrap.children[i].className = "answer cur";
            } else {
              answerWrap.children[i].className = "answer next";
            }
          }
        },
        randomPage() {
          const num = Math.floor(Math.random() * this.answers.length);
          const answerWrap = this.$refs.answerWrap;
    
          for (let i = 0, len = this.answers.length; i < len; i++) {
            if (i < num) {
              answerWrap.children[i].className = "answer prev";
            } else if (i == num) {
              answerWrap.children[i].className = "answer cur";
            } else {
              answerWrap.children[i].className = "answer next";
            }
          }
        },
      },
    
      data() {
        return {
          answers:
          [
  ["别太赶了"],
  ["别想了"],
  ["不"],
  ["不然呢？"],
  ["不要抱期望"],
  ["要求不要太高"],
  ["这是必然的，不要抗拒"],
  ["不要浪费精力"],
  ["不要浪费你的时间了"],
  ["不要做得过火了"],
  ["不用担心"],
  ["车到山前必有路"],
  ["答案就在你身边"],
  ["大胆一点"],
  ["大方一点"],
  ["等等"],
  ["放轻松点，慢慢来"],
  ["管他呢"],
  ["毫无疑问"],
  ["好运将会降临"],
  ["忽略了一件显而易见的事"],
  ["换个角度想想"],
  ["会付出代价"],
  ["会感到庆幸"],
  ["会很不顺利"],
  ["会很顺利"],
  ["会后悔的"],
  ["会失去自我"],
  ["会特别顺利"],
  ["继续前进"],
  ["结果可能让人惊讶"],
  ["绝对不"],
  ["肯定的"],
  ["没错"],
  ["木已成舟"],
  ["你必须解决一些相关的问题"],
  ["不会后悔的"],
  ["不会失望的"],
["得真正地努力一下"],
["还有别的选择"],
["你将取得成功"],
["你说了算"],
["你心里已经有答案了"],
["需要合作"],
["需要冒险"],
["要主动"],
["你在开玩笑吗？"],
["你做什么都没用"],
["奇迹即将降临"],
["千万别信"],
["千万不能失败"],
["全力以赴"],
["认清现实吧"],
["三思而后行"],
["尚待时日"],
["省点力气吧"],
["时机未到"],
["听听别人怎么说"],
["听听专家的意见"],
["万一错过，就没这个机会了"],
["为什么不呢?"],
["问问你的亲人"],
["问问自己，为什么要这么干"],
["先做点别的"],
["现在还说不清"],
["现在你可以"],
["相信你的自觉"],
["相信你最初的想法"],
["想得美"],
["想想有没有机会"],
["休息一下就好了"],
["学会妥协"],
["眼光长远一点"],
["要变通"],
["要有点耐心"],
["要知足"],
["要抓住问题的关键"],
["一定会有好结果的"],
["一笑了之"],
["以后再说"],
["用尽一切办法去努力"],
["有"],
["有可能"],
["仔细想想再说"],
["再等等看"],
["障碍重重"],
["这辈子都不可能"],
["这不可取"],
["这不切实际"],
["这不值得努力"],
["这会影响你的形象"],
["这件事会很麻烦"],
["这件事你说了不算"],
["这没什么意义"],
["这取决于你的行动"],
["这是肯定的"],
["没法保证"],
["无法预测"],
["这是在浪费金钱"],
["没什么好结果"],
["值得奋斗"],
["这种事情不要告诉别人"],
["只有一次机会"],
["总所周知"],
["重新想想"],
["注意细节"],
["做最坏的打算"],
["不要纠结了"],
["毫无道理"],
["结果会让你惊喜"],
["这不是你想要的"],
["寻找机会就行"],
["不要自作多情"],
["最后一次机会"],
["顺其自然"],
["学会释然"],
["别瞎折腾了"],
["再过几年"],
["不要忽视自己的力量"],
["尽在掌握之中"],
["地点不合适"],
["不作死就不会死"],
["当局者迷"],
["另择吉日"],
["时间会证明一切"],
["并非永恒"],
["倾听你内心的声音"],
["如你所愿"],
["遇上方知有"],
["不值得"],
["见好就收"],
["你猜"],
["时机尚不成熟"],
["这难以置信"],
["与你无关"],
["放手"],
["拭目以待"],
]
,
        };
      },
    };
    </script>


<style >
/* 将原有的样式移到这里，包括 @font-face 和其他样式。此外，您还可以删去 body 样式，并确保已将样式应用在适当的元素上 */
.header-title {
  font-family: 宋体;
  font-size: 50px;
  color: azure;
  text-shadow: 2px 2px 4px #ffd700;
}

.header-description {
  font-family: 宋体;
  color: aliceblue;
  font-size: 25px;
}
@font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/lato/v24/S6u9w4BMUTPHh7USSwaPGR_p.woff2) format('woff2');
    unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/lato/v24/S6u9w4BMUTPHh7USSwiPGQ.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  /* latin-ext */
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/lato/v24/S6u9w4BMUTPHh6UVSwaPGR_p.woff2) format('woff2');
    unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
  /* latin */
  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(https://fonts.gstatic.com/s/lato/v24/S6u9w4BMUTPHh6UVSwiPGQ.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
 
  /* body {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin: 0;
      overflow: hidden;
      font-family: 'Lato', sans-serif;
  } */
  button{
      cursor: pointer;
      background-color: rgba(255, 255, 255, 0.8);
      border:1px solid #aaa;
      font-size: 14px;
      padding: 1px 10px;
      border-radius: 5px;
  }
  button:active{
      transform: scale(0.99);
  }
  /* 主界面 */
  #main{
      width: 100%;
      position: absolute;
      top: 80px;
      bottom: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-image: url('../assets/img/background2.jpg');
      background-size: cover;
  }
  
  .answerWrap{
      perspective: 1000px;
      position: relative;
      width: 550px;
      height: 350px;
      border-radius: 10px;
      background-color: rgba(255, 255, 255, 0.8);
  
  }
  .answer{
      opacity:0;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      box-shadow: 0 2px 15px rgba(0, 0, 0, 0.4);   
      border-radius: inherit;
      font-size: 1.5em;
      transition: transform 0.4s ease,opacity 0.4s ease;
  }
  .answer.prev{
      transform: translateX(-50%) rotateY(-10deg);
  }
  .answer.cur{
      opacity: 1;
      z-index: 99;
      transform: translateX(0) rotateY(0deg);
  }
  .answer.next{
      transform: translateX(50%) rotateY(10deg);
  }
  .answer .container{
      height: 90%;
      display: flex;
      align-items: center;
      justify-content: center;
  }
  .answer .page{
      text-align: center;
      font-weight: 600;
  }
  .input input{
      width: 50px;
     padding-left: 2px;
     border-radius: 5px;
     font-weight: 600;
      background-color: rgba(255, 255, 255, 0.8);
  }
  .input p, .input label{
      color: #fff;
      font-weight: 600;
  }
  span{
      color: #fff;
  }
</style>