<template> 
  <div> 
    <div class="bg-light mb-4">
      <div class="bg-secondary p-2">
        <h5 class="m-0 text-white">Filter By Keywords</h5>
      </div>
      <div class="p-2">
        <input type="text" 
          class="form-control" 
          placeholder="Type keywords here..." 
          @input="changedKeywords"
          v-model="strKeywords"
        >
      </div>
    </div>

    <div class="bg-light mb-4">
      <div class="bg-secondary p-2">
        <h5 class="m-0 text-white">Filter By Source</h5>
      </div>
      <div class="p-2 source-bar">
        <button class="btn btn-block btn-sm text-left" 
          v-for="source in sources" :key="source.id"
          @click="selectSource(source.id)"
          :class="[source.id == strSource ? 'btn-primary' : 'btn-light']"
        >{{source.name}}</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'FilterSidebar',
   
  data() {
    return {
      typingTimer: null,
      typingWait: 500,
      strKeywords: '',
      strSource: '',
      isLoading: true,
      sources: []
    }
  },

  mounted() {
    // initialize fetching sources
    this.fetchSources();
  },

  methods: {
    /*
    * Delay initializing search while the user is typing keywords
    */ 
    changedKeywords() {
      clearTimeout(this.typingTimer);
      this.typingTimer = setTimeout(() => this.applyNewKeywords(), this.typingWait); 
    },

    /*
    * When user stops typing and wait-time is over,
    * emit an event and pass the new search keywords to listener
    */ 
    applyNewKeywords() {
      this.$root.$emit('keywordsUpdated', this.strKeywords)
    },

    /*
    * Fetch sources from the server
    */ 
    fetchSources() {
      this.isLoading = true;

      axios.get(this.$store.state.newsAPI + '/source')
        .then((response)=>{ 
          this.sources = response.data.sources; 
          this.isLoading = false;
        })
    },

    /*
    * When user selects a source, emit an event and pass the new source to listener
    */ 
    selectSource(sourceId) { 
      // if the clicked source is already the current source,
      // remove it to reset the source filter to ALL source
      this.strSource = this.strSource == sourceId ? '' : sourceId;

      this.$root.$emit('sourceUpdated', this.strSource)
    }
  }
}
</script>


<style scoped> 
@media (max-width: 768px) {
  .source-bar {
    max-height: 200px;
    overflow-y: scroll;
  } 
}
</style>
