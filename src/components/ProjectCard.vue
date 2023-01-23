<script>
export default{
    name: 'ProjectCard',
    data(){
        return{
            textMaxLength: 30
        }
    },
    props:{
        project: Object,
    },
    methods:{
        truncateText(text){
            if (text && text.lenght > this.textMaxLength) {
                return text.substr(0, this.textMaxLength)
            }
            return text
        }
    }
}
</script>

<template>
<div class="card">
    <div class="card-body">
        <h3 class="card-title">{{ project.name }}</h3>
        <div class="d-flex mb-2 justify-content-between">
            <h6 class="card-subtitle text-muted">{{ project.slug }}</h6>
            
        </div>
        <p class="card-text">{{ truncateText(project.description) }}</p>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item bg-dark text-white d-flex justify-content-between align-items-center">
            Type:
            <h6 class="card-subtitle text-warning" v-if="project.type">{{ project.type.name }}</h6>
            <h6 class="card-subtitle text-muted" v-else>Type not assigned</h6>
        </li>
        
        <li class="list-group-item bg-dark text-white d-flex justify-content-between align-items-center">
            Technologies:
            <div class="technologies">
                <span class="technology" v-for="technology in project.technologies">{{ technology.name }}</span>
            </div> 
            <span class="card-subtitle text-muted" v-if="!project.technologies.length">Not assigned</span>
        </li>

        <li class="list-group-item bg-dark text-white d-flex justify-content-center align-items-center">
            <router-link :to="{ name: 'single-project', params:{ slug: project.slug } }" class="btn btn-warning">Details</router-link>
        </li>
  </ul>
</div>
</template>

<style lang="scss">
@use "../style/general.scss" as *;
.row{
    .col-sm-12{
        .card{
            background-color: $dark-color;
            color: rgb(227, 227, 227);
            h3{
                color: $secondary-color;
            }
            .technology{
                margin-left: 10px;
                background-color: $primary-color;
                padding: 5px;
                border-radius: 10px;
                color: $dark-color;
            }
        }
    }
}
</style>