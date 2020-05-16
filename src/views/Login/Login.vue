<template>
  <div class="login">
      <form>
        <div>
          <label for="username">Username</label>
          <input type="text" v-model="username">
        </div>
        <div>
          <label for="username">Password</label>
          <input type="password" v-model="password">
        </div>
        <button @click.prevent="login">Login</button>
      </form>
  </div>
</template>

<script src="./Login.js"></script>

<style src="./Login.scss" lang="scss"></style>
