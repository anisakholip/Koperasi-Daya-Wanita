<template>
    <div class="container-navbar">
      <div class="nav">
        <div class="logo">
            <img class="gambar" src="/logokop.png" alt="Logo" />
            <h1>KOPERASI<br>DAYA WANITA</h1>
        </div>
        <ul class="ul-navbar">
            <li class="li-navbar">
              <a href="#" class="a-navbar">BERANDA</a>
            </li>
            <li class="li-navbar">
              <a href="#" class="a-navbar">TENTANG KAMI</a>
            </li>
            <li class="li-navbar">
              <a href="#" class="a-navbar">HUBUNGI KAMI</a>
            </li>
            <li class="li-navbar">
              <button class="li-button">
                <a href="#" class="a-navbar">LAYANAN</a>
              </button>
            </li> 
        </ul>
      </div>   
    </div>
</template>

<style lang="scss" scoped>

$container-height: 12vh;

.container-navbar {
    background-color: rgb(255, 255, 255);
    width: 100%;
    height: $container-height;
    filter: drop-shadow(0px 1px 8px rgb(48, 48, 48));
    position: fixed;
    z-index: 9999;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  padding-right: 5px;
}

.ul-navbar {
    display: flex;
    height: 77px;
    justify-content: right;
    align-items: center;
}

.li-navbar {
    list-style-type: none;
    padding: 20px;
    margin: 5px;
    color: white;
    font-size: 12px;
}

.li-button {
    background-color: #ff7d7d;
    padding: 15px;
    margin: 5px;
    border: none;
    border-radius:20px;
    color: #ffffff;
    font-size: 12px;
    cursor: pointer;

    .a-navbar {
        color: #ffffff;
    }

    &:hover {
      background-color: #EE4343;
      transition:ease-in-out 0.3s ;
    }
}

.a-navbar {
    color: rgb(0, 0, 0);
    text-decoration: none;
    font-weight: 800;
}

.logo {
  display: flex;
  justify-content: center;
  align-content: center;

  img {
      height: calc($container-height - 15px);
  }
}

.logo h1{
  font-size: 20px;
  padding-left: 8px;
  line-height: 1.3rem;
  display: flex;
  align-items: center;
}

</style>