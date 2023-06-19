<template>
  <div>
    <el-input
      v-model="searchQuery" placeholder="请输入搜索内容" @keydown.enter="performSearch"></el-input>
    <el-checkbox v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange">
      全选
    </el-checkbox>
    <el-checkbox-group v-model="selectedWebsites" @change="handleCheckedCitiesChange">
      <el-checkbox-button border v-for="website in websites" :key="website.name" :label="website">
        {{ website.name }}
      </el-checkbox-button>
    </el-checkbox-group>

    
    <el-checkbox v-model="checkAllBooks" :indeterminate="isIndeterminateBooks" @change="handleCheckAllChangeBooks">
      全选
    </el-checkbox>
    <el-checkbox-group v-model="selectedBookWebsites" @change="handleCheckedCitiesChangeBooks">
      <el-checkbox-button border v-for="website in bookWebsites" :key="website.name" :label="website">
        {{ website.name }}
      </el-checkbox-button>
    </el-checkbox-group>


    <el-button type="primary" @click="performSearch">搜索</el-button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const searchQuery = ref("");
    const selectedWebsites = ref([]);
    const checkAll = ref(false);
    const isIndeterminate = ref(true);

    const websites = [
    
      { name: "B站", path: "https://search.bilibili.com/all?keyword=" },
      { name: "底端影视", path: "https://ddys.art/?s=" },
      { name: "小橘子TV", path: "https://xiaojuzi.link/show/0?title=" },
      { name: "555", path: "https://55dy2.vip/vodsearch/-------------.html?wd=" },
      { name: "电影网", path: "http://s.ygdy8.com/plus/so.php?keyword=" },
      { name: "豆瓣", path: "https://www.douban.com/search?cat=1002&q=" },
      { name: "crs811", path: "http://202.115.195.254/SearchResult.aspx?keywords=" },
    ];

    
    const handleCheckAllChange = (val) => {
      selectedWebsites.value = val ? websites : [];
      isIndeterminate.value = false;
    };

    const handleCheckedCitiesChange = (value) => {
      const checkedCount = value.length;
      checkAll.value = checkedCount === websites.length;
      isIndeterminate.value = checkedCount > 0 && checkedCount < websites.length;
    };
//书
    const selectedBookWebsites = ref([]);
    const checkAllBooks = ref(false);
    const isIndeterminateBooks = ref(true);

    const bookWebsites = [
      { name: "高教书苑", path: "https://ebook.hep.com.cn/index.html#/list/search?type=1&keywords=" },
      { name: "鸠摩搜书", path: "https://www.jiumodiary.com/" },
      { name: "全国图书馆参考咨询联盟", path: "http://book.ucdrs.superlib.net/search?Field=all&channel=search&sw=" },
      { name: "中国国家图书馆", path: "http://find.nlc.cn/search/doSearch?query=&secQuery=&actualQuery=" },
      { name: "微信读书", path: "https://weread.qq.com/web/search/books?author=" },
      { name: "Z-Library", path: "https://lib-p5gnvkjvvn3iaojcz2nbxskj.resist.tel/s/" },
      // 在此处添加更多的书籍网站
    ];

    const handleCheckAllChangeBooks = (val) => {
      selectedBookWebsites.value = val ? bookWebsites : [];
      isIndeterminateBooks.value = false;
    };

    const handleCheckedCitiesChangeBooks = (value) => {
      const checkedCount = value.length;
      checkAllBooks.value = checkedCount === bookWebsites.length;
      isIndeterminateBooks.value = checkedCount > 0 && checkedCount < bookWebsites.length;
    };


    const performSearch = () => {
      if (searchQuery.value.trim() === "") {
        alert("请输入搜索内容");
        return;
      }

      if (selectedWebsites.value.length === 0 && selectedBookWebsites.value.length === 0) {
        alert("请选择要搜索的网站");
        return;
      }

      selectedWebsites.value.forEach((website) => {
        const url = `${website.path}${encodeURIComponent(searchQuery.value)}`;
        if (url) {
          window.open(url, "_blank");
        }
      });
      selectedBookWebsites.value.forEach((website) => {
        const url = `${website.path}${encodeURIComponent(searchQuery.value)}`;
        if (url) {
          window.open(url, "_blank");
        }
      });
    };

    return {
      searchQuery,
      selectedWebsites,
      performSearch,
      handleCheckAllChange,
      handleCheckedCitiesChange,
      checkAll,
      isIndeterminate,
      websites,

      selectedBookWebsites,
      checkAllBooks,
      isIndeterminateBooks,
      bookWebsites,
      handleCheckAllChangeBooks,
      handleCheckedCitiesChangeBooks,
    };
  },
};
</script>


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


// methods: {
//   performSearch() {
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
//         this.openWindow(url);
//       }
//     }
//   },
//   openWindow(url) {
//     const link = document.createElement('a');
//     link.href = url;
//     link.target = '_blank';
//     link.rel = 'noopener noreferrer';
//     link.style.display = 'none';
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   }
// }



