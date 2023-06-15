<template>
    <div>
        <el-input v-model="searchQuery" placeholder="请输入搜索内容" @keydown.enter="performSearch"></el-input>

  
      <el-checkbox-group v-model="selectedWebsites">
        <el-checkbox label="Website1">网站1</el-checkbox>
        <el-checkbox label="Website2">网站2</el-checkbox>
        <!-- 在这里添加其他网站的复选框 -->
      </el-checkbox-group>
  
      <el-button type="primary" @click="performSearch">搜索</el-button>
    </div>
  </template>
<script>
export default {
  data() {
    return {
      searchQuery: "",
      selectedWebsites: []
    };
  },

//   methods: {
//   async performSearch() {
//     if (this.searchQuery === "") {
//       alert("请输入搜索内容");
//       return;
//     }

//     if (this.selectedWebsites.length === 0) {
//       alert("请选择要搜索的网站");
//       return;
//     }

//     for (let website of this.selectedWebsites) {
//       let url = "";
//       if (website === "Website1") {
        
        
//         url = `https://search.bilibili.com/all?keyword=${encodeURIComponent(this.searchQuery)}`;
//         } else if (website === "Website2") {
//           url = `https://ddys.art/?s=${encodeURIComponent(this.searchQuery)}&post_type=post`;
//         }
//       // 在这里为其他网站添加相应的URL生成规则

//       if (url) {
//         window.open(url, "_blank");
//         await this.sleep(500); // 暂停 500 毫秒
//       }
//     }
//   },
//   sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }
// }


methods: {
  performSearch() {
    if (this.searchQuery === "") {
      alert("请输入搜索内容");
      return;
    }

    if (this.selectedWebsites.length === 0) {
      alert("请选择要搜索的网站");
      return;
    }

    for (let website of this.selectedWebsites) {
      let url = "";
      if (website === "Website1") {
        url = `https://search.bilibili.com/all?keyword=${encodeURIComponent(this.searchQuery)}`;
        } else if (website === "Website2") {
          url = `https://ddys.art/?s=${encodeURIComponent(this.searchQuery)}&post_type=post`;
        }
      // 在这里为其他网站添加相应的URL生成规则

      if (url) {
        this.openWindow(url);
      }
    }
  },
  openWindow(url) {
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}


//   methods: {
//     performSearch() {
//       if (this.searchQuery === "") {
//         alert("请输入搜索内容");
//         return;
//       }

//       if (this.selectedWebsites.length === 0) {
//         alert("请选择要搜索的网站");
//         return;
//       }

//       this.selectedWebsites.forEach(website => {
//         let url = "";
//         if (website === "Website1") {
//           url = `https://www.bilibili.com/search?q=${encodeURIComponent(this.searchQuery)}`;
//         } else if (website === "Website2") {
//           url = `https://ddys.art/?s=${encodeURIComponent(this.searchQuery)}&post_type=post`;
//         }
//         // 在这里为其他网站添加相应的URL生成规则

//         if (url) {
//           window.open(url, "_blank");
//         }
//       });
//     }
//   }
};
</script>
  