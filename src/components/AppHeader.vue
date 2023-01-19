<script>
export default {
  name: 'AppHeader',
  data(){
    return{
        baseUrl: 'http://127.0.0.1:8000/'
    }
  }
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
                    <a class="px-2 btn btn-warning text-dark" href="">Link</a>
                    <a class="px-2" href="">Link</a>
                </div>
            </div>
            
            <div class="col d-flex align-items-center justify-content-end">
                <a class="mr-3 px-2 btn btn-dark text-warning" href="'${baseUrl}' + 'admin'">Admin view</a>

            </div>
        </div>
    </div>
</nav>
</template>

<style lang="scss">
@use "../style/general.scss" as *;

nav{
    background-color: $dark-color;
    h1{
        color: $primary-color;
    }
    .links-wrapper{
        a{
            color: white;
            text-decoration: none;
        }
    }
    
}

</style>