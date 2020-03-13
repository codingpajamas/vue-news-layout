<template> 
  <a :href="article.url" target="_blank" class="card h-100 news-card">
    <img :src="article.urlToImage" class="card-img-top" alt="" v-if="article.urlToImage">
    <img src="../assets/news.png" class="card-img-top" alt="..." v-else> 
    <div class="card-body">
      <div class="bg-white mt-n5 py-2 px-4">
        <h5 class="card-title">{{article.title}}</h5>
        <p class="text-muted clearfix">
          <span class="float-right">{{readableDate(article.publishedAt)}}</span>
          <strong>{{article.source.name}}</strong> 
        </p>
        <div class="card-text" v-html="article.description" v-if="article.description"></div>
        <div class="card-text" v-html="article.content" v-else></div>
      </div>
    </div>
  </a>
</template>

<script>

export default {
  name: 'ArticleItem',

  props: [
    'article'
  ],

  data() {
    return {

    }
  }, 

  methods: { 
    readableDate(publishDate) {
      let months = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

      let publish = new Date(publishDate)
      let formatted_date = months[publish.getMonth()] + ' ' 
                              + publish.getDate() + ', ' + ' ' 
                              + publish.getFullYear();

      return formatted_date;
      
    }
  }
}
</script>


<style scoped>

</style>
