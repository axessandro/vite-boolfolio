<script>
import axios from 'axios';
import ProjectCard from './ProjectCard.vue';

export default {
  name: 'AppMain',
  data(){
    return{
      projects: [],
      baseUrl: 'http://127.0.0.1:8000/',
    }
  },
  components:{
    ProjectCard
  },
  created() {
    this.getProjects();
  },
  methods:{
    getProjects(){
      axios.get("http://127.0.0.1:8000/api/projects").then(resp =>{
        this.projects = resp.data.results;
        console.log(this.projects)
      });
    }
  }
}
</script>

<template>
<div class="container mt-4">
    <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-6 g-4" v-for="project in projects" :key="project.id">
            <!-- card -->
            <ProjectCard :project="project"/>
            <!-- card -->
        </div>
    </div>
</div>
</template>

<style lang="scss">

</style>