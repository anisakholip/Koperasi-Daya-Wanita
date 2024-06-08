<template>
    <div class="container">
        <div class="container-img">
            <img src="/koperasi.jpeg" />
        </div>
        <div>
            <h1>
                Koperasi<br>Daya<br>Wanita
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, doloribus culpa ipsum quos expedita voluptatibus nam? At tenetur quia ipsa.</p>
        </div>
    </div>
</template>

<style scoped>
.container {
    background-color: #A1DD70;
    padding: 7%;
    padding-top: 10%;
    display:grid;
    grid-gap: 15px;
    grid-template-columns: 1fr 1fr;
}
.container h1{
    text-align: right;
    font-size: 70px;
    color: #F6EEC9;
    filter: drop-shadow(6px 6px 4px rgb(51, 51, 51));
}
.container p{
    text-align: right;
}
.container-img img{
    width: 100%;
    border-radius: 20px;
    filter: drop-shadow(8px 8px 4px rgb(51, 51, 51));
}

.container-img {
    margin: auto;
    text-align: right;
}

</style>