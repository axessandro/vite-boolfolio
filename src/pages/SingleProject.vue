<script>
import axios from 'axios';
import { store } from '../store';

export default{
    name: 'SingleProject',
    data(){
        return{
            store,
            project: {}
        }
    },
    created(){
        const slug = this.$route.params.slug;
        axios.get(`${this.store.apiBaseUrl}api/projects/${slug}`).then(resp => {
            if(resp.data.success){
                this.project = resp.data.project;
            } else {
                this.$router.push({name: "not-found"})
            }
        });
    }
}
</script>

<template>
    <main>
        <div class="container">
            <div class="card">
                <!-- <div class="img-wrapper">
                    <img class="card-img-top" v-if="project.img" :src="`${store.apiBaseUrl}storage/${project.img}`" alt="">
                    <div v-else class="text-center pt-4">Nessuna immagine</div>
                </div> -->

                <div class="card-body">
                    <h3 class="card-title text-center">{{ project.name }}</h3>
                    <h6 class="card-subtitle text-muted text-center">{{ project.slug }}</h6>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item bg-warning text-white d-flex justify-content-center align-items-center">
                        <a :href="`${store.gitHubUrl}/${project.slug}`" class="btn btn-dark">Open on github</a>
                    </li>
                    

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
                    <li class="list-group-item bg-dark text-white">
                        <h4 class="text-center">Description</h4>
                        <p class="card-text">{{ project.description }}</p>
                    </li>
                </ul>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@use "../style/general.scss" as *;
main{
    height: 90vh;
    .card{
            margin-top: 4rem;
            background-color: $dark-color;
            color: rgb(227, 227, 227);
            .img-wrapper{
                height: 30vh;
                display: flex;
                justify-content: center;
                img{
                    max-height: 100%;
                    width: auto;
                    border-radius: 20px;
                }
            }
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

</style>