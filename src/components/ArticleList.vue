<template> 
  <div> 
    <div class="row mb-5" v-if="isLoading">
      <div class="col-md-12 text-center">
        <img src="../assets/load.gif" width="50" height="50" alt="...">
      </div>
    </div>
    
    <div v-else>
      <div class="row row-cols-1 row-cols-lg-2" v-if="articles.length"> 
        <div class="col mb-4" v-for="article in articles" :key="article.id">
          <ArticleItem :article="article"></ArticleItem>
        </div>
      </div>

      <div v-else>
        <div class="row">
          <div class="col-md-12 text-center py-5">
            No news found
            <span v-if="filters.q"> for "{{filters.q}}"</span>
            <span v-if="filters.sources"> from "{{filters.sources}}"</span>
          </div>
        </div>  
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <paginate
          :pageCount="totalPages"
          :clickHandler="changePage"
          :prevText="'Prev'"
          :nextText="'Next'"
          :containerClass="'pagination justify-content-center'"
          :pageClass="'page-item'"
          :prevClass="'page-item'"
          :nextClass="'page-item'"
          :nextLinkClass="'page-link'"
          :prevLinkClass="'page-link'"
          :pageLinkClass="'page-link'">
        </paginate>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import ArticleItem from '@/components/ArticleItem.vue'

export default {
  name: 'ArticleList',
  components: {
    ArticleItem
  },
  data() {
    return {
      articles: [],
      isLoading: true,
      filters: {
        pageSize: 10,
        pageNum: 1,
        sources: '',
        q: ''
      },
      totalPages: 0
    }
  },

  mounted() {
    // initialize fetching articles
    this.fetchArticles();

    // when user search, capture the keywords and update filter
    // and re-fetch articles from the server with updated filter
    this.$root.$on('keywordsUpdated', (strKeywords) => { 
        this.filters.q = strKeywords;
        this.filters.pageNum = 1;
        this.fetchArticles();
    });

    // when user selects source, capture the source and update filter
    // and re-fetch articles from the server with updated filter
    this.$root.$on('sourceUpdated', (strSource) => { 
        this.filters.sources = strSource;
        this.filters.pageNum = 1;
        this.fetchArticles();
    });
  },

  methods: {
    /*
    * Fetch articles from the server
    */ 
    fetchArticles() {
      this.isLoading = true;

      // display top of page when updating content
      window.scrollTo(0,0);

      axios.get(this.$store.state.newsAPI, { params: this.filters })
        .then((response)=>{ 
          this.articles = response.data.articles;

          // due to my DEVELOPER ACCOUNT, maximum total is 100 results
          let totalResults = response.data.totalResults > 100 ? 100 : response.data.totalResults;
          this.totalPages = Math.ceil(totalResults / this.filters.pageSize);  

          this.isLoading = false;
        })
    },

    /*
    * When page was clicked, update page filter 
    * and re-fetch articles from the server with updated filter
    */ 
    changePage(pageNum) {
      this.filters.pageNum = pageNum;
      this.fetchArticles();
    }
  }
}
</script>


<style scoped>

</style>
