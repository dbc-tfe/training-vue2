<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img
            src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg"
            alt=""
            width="30"
            height="24"
          />

          TRAINING VUE + BOOSTRAP
        </a>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div class="navbar-nav">
            <router-link to="/"
              ><a class="nav-link active" aria-current="page" href="#"
                >HOME</a
              ></router-link
            >
            <router-link to="/crud"
              ><a class="nav-link" href="#">CRUD</a></router-link
            >
            <router-link to="/crud_vuex"
              ><a class="nav-link" href="#">CRUD VUEX</a></router-link
            >
          </div>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<style>
</style>
