<template> 
<div class="common-layout">
    
  <div class="navigation-container">
    <!-- 学科 -->
    <el-card class="navigation-card" header="学科学习" >
      <el-row :gutter="20">
        <el-col :span="8" v-for="(btn, index) in entertainmentButtons" :key="index">
          <el-button @click="goTo(btn.path)">{{btn.name}}</el-button>
        </el-col>
        
      </el-row>
      <el-button icon="el-icon-plus"  circle @click="openDialog('entertainment')" >添加+</el-button>
    </el-card>

    <!-- 电子书 -->
    <el-card class="navigation-card" header="电子书">
      <el-row :gutter="20">
        <el-col :span="8" v-for="(btn, index) in communityButtons" :key="index">
          <el-button @click="goTo(btn.path)">{{btn.name}}</el-button>
        </el-col>
      </el-row>
      <el-button icon="el-icon-plus"  circle @click="openDialog('community')" >添加+</el-button>
    </el-card>

    <!-- 影视 -->
    <el-card class="navigation-card" header="音乐">
      <el-row :gutter="20">
        <el-col :span="8" v-for="(btn, index) in picturesButtons" :key="index">
          <el-button @click="goTo(btn.path)">{{btn.name}}</el-button>
        </el-col>
      </el-row>
      <el-button icon="el-icon-plus"  circle @click="openDialog('pictures')" >添加+</el-button>
    </el-card>

    <!-- one -->
    <el-card class="navigation-card" header="购物" >
      <el-row :gutter="20">
        <el-col :span="8" v-for="(btn, index) in oneButtons" :key="index">
          <el-button @click="goTo(btn.path)">{{btn.name}}</el-button>
        </el-col>
        
      </el-row>
      <el-button icon="el-icon-plus"  circle @click="openDialog('one')" >添加+</el-button>
    </el-card>

    <!-- two -->
    <el-card class="navigation-card" header="影视" >
      <el-row :gutter="20">
        <el-col :span="8" v-for="(btn, index) in twoButtons" :key="index">
          <el-button @click="goTo(btn.path)">{{btn.name}}</el-button>
        </el-col>
        
      </el-row>
      <el-button icon="el-icon-plus"  circle @click="openDialog('two')" >添加+</el-button>
    </el-card>

    <!-- three -->
    <el-card class="navigation-card" header="待定" >
      <el-row :gutter="20">
        <el-col :span="8" v-for="(btn, index) in threeButtons" :key="index">
          <el-button @click="goTo(btn.path)">{{btn.name}}</el-button>
        </el-col>
        
      </el-row>
      <el-button icon="el-icon-plus"  circle @click="openDialog('three')" >添加+</el-button>
    </el-card>

    <el-dialog title="添加新页面" v-model="newPageDialogVisible">
      <el-form ref="newPageForm" :model="newPageForm" label-width="100px">
        <el-form-item label="页面名称">
          <el-input v-model="name" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="页面链接">
          <el-input v-model="path"></el-input>
        </el-form-item>
      </el-form>
      <template v-slot:footer>
        <el-button @click="newPageDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="addNewPage">确认</el-button>
      </template>
</el-dialog>


  </div>


  </div>
          
  </template>
  
  <style scoped>
  .yu {
                  width: 30%;
                  height: 400px;
                  margin-top: 40px;
                  text-align: center;
              }
  
              .btn p {
                  
                  margin-top: 5px;
              }
  
              .btn p button {
                  width: 31.5%;
                  height: 50px;
                  background-color: #3c413e;
                  opacity: 0.6;
                  border: 0;
                  color: white;
                  float: left;
                  margin-top: 5px;
                  margin-right: 5px;
              }
  
              .inp {
                  width: 400px;
                  height: 40px;
                  margin-top: 20px;
                  position: relative;
                  border: 1px gainsboro solid;
              }
  
              .inp button {
                  position: absolute;
                  height: 40px;
                  border: 0;
              }
              .navigation-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.el-button {
  margin-top: 10px;
  margin-bottom: 10px;
  height: 80px;
  width:100px;
  background-color: rgba(36, 36, 37, 0.3);
  color: rgb(3, 3, 3);
  font-size: 20px;
  font-weight: 900;
  border: none;
}

.navigation-card {
  width: 30%;
  height: 25%;
  margin: 100px 20px 20px 20px;
  background-color: rgba(233, 209, 222, 0.1);
  border: none;
}

.navigation-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}


@media screen and (max-width: 992px) {
  .navigation-card {
    width: 99%;
  }
}.image {
  width: 100%;
  display: block;
}


  </style>
  
  <script>
  import {reactive,toRefs,ref} from 'vue'
export default {
    setup(){
        const name=ref('')
        const path=ref('')
        const state =reactive({
            entertainmentButtons: [
        { path: "https://www.zhihuishu.com", name: "智慧树" },
        { path: "https://pintia.cn/", name: "PTA" },
        { path: "https://changjiang.yuketang.cn/", name: "雨课堂" },


      ],
      communityButtons: [
        { path: "https://lib.sicnu.edu.cn/index", name: "川师图书馆" },
        { path: "https://www.dushu.com", name: "读书网" },
        { path: "https://new.shuge.org/", name: "书格" },
      ],
      picturesButtons: [
        { path: "https://www.kugou.com/", name: "酷狗音乐" },
        { path: "https://y.qq.com/", name: "QQ音乐" },
        { path: "https://music.163.com/", name: "网易云音乐" },
      ],
      oneButtons: [
        { path: "https://www.tmall.com/", name: "天猫" },
        { path: "https://www.jd.com/", name: "京东" },
        { path: "https://www.amazon.cn/", name: "亚马逊" },
      ],
      twoButtons: [
        { path: "https://www.iqiyi.com/", name: "爱奇艺" },
        { path: "https://v.qq.com/", name: "腾讯视频" },
        { path: "https://youku.com/", name: "优酷" },
      ],
      threeButtons: [
        { path: "/pictures/page2.html", name: "待定" },
      ],
      newPageDialogVisible: false,
      newPageForm: {
        name: "",
        path: ""
      },
      currentTheme: ""
   
        });

        const openDialog = (theme) => {
      state.currentTheme = theme;
      state.newPageDialogVisible = true;
    };

    const addNewPage = () => {
      const newButton = {
        name: name.value,
        path: path.value,
      };
      if (state.currentTheme === "entertainment") {
    state.entertainmentButtons.push(newButton);
  } else if (state.currentTheme === "community") {
    state.communityButtons.push(newButton);
  } else if (state.currentTheme === "pictures") {
    state.picturesButtons.push(newButton);
  }else if (state.currentTheme === "one") {
    state.oneButtons.push(newButton);
  }else if (state.currentTheme === "two") {
    state.twoButtons.push(newButton);
  }else if (state.currentTheme === "three") {
    state.threeButtons.push(newButton);
  }
     // 重置表单
     name.value = "";
     path.value = "";

      // 关闭对话框
      state.newPageDialogVisible = false;
    };

    const goTo = (path) => {
      //window.location.href = path;
      window.open(path, '_blank');
    };

    return {
      ...toRefs(state),
      openDialog,
      addNewPage,
      goTo,
        name,
        path
    };
    },
  
};
</script>