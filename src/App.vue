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
            <router-link to="/crud_api"
              ><a class="nav-link" href="#">CRUD API</a></router-link
            >
          </div>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
import axios from "axios";
export default {
  created() {
    axios.defaults.baseURL = "https://3e12-103-144-209-66.ngrok.io/";
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9hcGktdnVlLmxva2FsXC9hdXRoXC9sb2dpbiIsImlhdCI6MTYzNTMxODU1NiwiZXhwIjoxNjM1MzIyMTU2LCJuYmYiOjE2MzUzMTg1NTYsImp0aSI6IklNNW9nYTNxVkkxY0dxRDciLCJzdWIiOjEsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.DUTqwuKvse2L3jVFVaKp1oA59mxVmbvqKy4pJulsvZc`;
  },
};
</script>

<style>
</style>
