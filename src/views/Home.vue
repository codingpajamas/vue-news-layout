<template> 
  <div class="container pt-5 mb-5">
    <div class="row">
      <div class="col-md-4 col-lg-3">
        <FilterSidebar></FilterSidebar>
      </div>
      <div class="col-md-8 col-lg-9">
        <ArticleList></ArticleList>
      </div> 
    </div> 
  </div>
</template>

<script>
import ArticleList from '@/components/ArticleList.vue'
import FilterSidebar from '@/components/FilterSidebar.vue'

export default {
  name: 'Home',
  components: {
    ArticleList,
    FilterSidebar
  }
}
</script>
