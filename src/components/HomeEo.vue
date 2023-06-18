<template> 
<div class="common-layout">
    
    <div class="navigation-container">
    <!-- 娱乐 -->
    <el-card class="navigation-card" header="川师" >
      <el-row :gutter="20">
        <el-col :span="8" v-for="(btn, index) in entertainmentButtons" :key="index">
          <el-button @click="goTo(btn.path)"  :style="{ backgroundColor: 'rgba(128, 128, 128, 0.5)', borderColor: 'rgba(128, 128, 128, 0.5)' }">{{btn.name}}</el-button>
        </el-col>
        
      </el-row>
      <el-button icon="el-icon-plus"  circle @click="openDialog('entertainment')" >+</el-button>
    </el-card>

    <!-- 社区 -->
    <el-card class="navigation-card" header="书">
      <el-row :gutter="20">
        <el-col :span="8" v-for="(btn, index) in communityButtons" :key="index">
          <el-button @click="goTo(btn.path)">{{btn.name}}</el-button>
        </el-col>
      </el-row>
    </el-card>

    <!-- 图片 -->
    <el-card class="navigation-card" header="影">
      <el-row :gutter="20">
        <el-col :span="8" v-for="(btn, index) in picturesButtons" :key="index">
          <el-button @click="goTo(btn.path)">{{btn.name}}</el-button>
        </el-col>
      </el-row>
    </el-card>


    <el-dialog title="添加新页面" v-model="newPageDialogVisible">
      <el-form ref="newPageForm" :model="newPageForm" label-width="100px">
        <el-form-item label="页面名称">
          <el-input v-model="name" placeholder="Please input"></el-input>
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

.navigation-card {
  width: 30%;
  margin: 20px;
}

@media screen and (max-width: 992px) {
  .navigation-card {
    width: 100%;
  }
}
.navigation-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.navigation-card {
  width: 30%;
  margin: 20px;
}

@media screen and (max-width: 992px) {
  .navigation-card {
    width: 100%;
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
        { path: "https://www.educoder.net/", name: "头歌" },
        { path: "https://pintia.cn/", name: "PTA" },
        { path: "https://changjiang.yuketang.cn/", name: "雨课堂" },
        { path: "https://www.educoder.net/", name: "头歌" },
        { path: "https://www.educoder.net/", name: "头歌" },
        { path: "https://www.educoder.net/", name: "头歌" },
        { path: "https://www.educoder.net/", name: "头歌" },
      ],
      communityButtons: [
        { path: "/community/page1.html", name: "社区1" },
        { path: "/community/page2.html", name: "社区2" },
        { path: "/community/page3.html", name: "社区3" },
      ],
      picturesButtons: [
        { path: "/pictures/page1.html", name: "图片1" },
        { path: "/pictures/page2.html", name: "图片2" },
        { path: "/pictures/page3.html", name: "图片3" },
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