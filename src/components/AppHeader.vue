<script>
import { store } from '../store';
export default {
  name: 'AppHeader',
  data(){
    return{
        store,
        links: [
            {
                label: "Home",
                routeName: "home"
            },
            {
                label: "Projects",
                routeName: "projects"
            }
        ],
        hoverBtn: false
    }
  },
}
</script>

<template>
<nav>
    <div class="container">
        <div class="row row-cols-3">
            <div class="col d-flex align-items-center justify-content-start">
                <h1 class="py-4">MyPortfolio</h1>
            </div>

            <div class="col d-flex align-items-center justify-content-center">
                <div class="links-wrapper">
                    <!-- <a class="px-2 btn btn-warning text-dark" href="">Link</a> -->
                    <span class="mx-1" v-for="(link, index) in links" :key="index">
                        <router-link class="px-2 btn" :to="{ name: link.routeName}">{{ link.label }}</router-link>
                    </span>
                </div>
            </div>
            
            <div class="col d-flex align-items-center justify-content-end">
                <a class="mr-3 px-2 btn btn-dark text-warning" :href="store.apiBaseUrl + 'admin'">Admin view</a>
            </div>
        </div>
    </div>
</nav>
</template>

<style lang="scss">
@use "../style/general.scss" as *;

nav{
    height: 10vh;
    h1{
        color: $primary-color;
    }
    .links-wrapper{
        .btn{
            color: white;
            text-decoration: none;
            &:hover{
                background-color: $primary-color;
                color: $dark-color;
            }
        }
    }
    
}

</style>