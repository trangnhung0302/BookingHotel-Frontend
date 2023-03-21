<template>
  <div class="page-header clear-filter login-container-page" filter-color="">
    <div
      class="page-header-image"
      style="background-image: url('img/loginn.jpg');"
    >
    </div>
    <div class="content">
      <div class="container">
        <div class="col-md-5 ml-auto mr-auto">
          <card type="login" plain>
            <div slot="header" class="logo-container">
              <img v-lazy="'img/now-logo.png'" alt="" />
            </div>

            <fg-input
              v-model="username"
              class="no-border input-lg"
              addon-left-icon="now-ui-icons users_circle-08"
              placeholder="Username"
              :errors="errors['username']"
            >
            </fg-input>

            <fg-input
              v-model="password"
              type="password"
              class="no-border input-lg"
              addon-left-icon="now-ui-icons text_caps-small"
              placeholder="Password"
              :errors="errors['password']"
            >
            </fg-input>

            <template slot="raw-content">
              <div class="card-footer text-center mt-0">
                <button
                  class="btn btn-primary btn-round btn-lg btn-block"
                  @click="onSubmit()"
                  >Login
                </button>
              </div>
              <div class="pull-left">
                <h6>
                  <a href="/register" class="link footer-link">Create Account</a>
                </h6>
              </div>
              <div class="pull-right">
                <h6>
                  <a href="#pablo" class="link footer-link">Need Help?</a>
                </h6>
              </div>
            </template>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Card, Button, FormGroupInput } from '@/components';
import Validator from '../validator'
export default {
  name: 'login-page',
  bodyClass: 'login-page',
  components: {
    Card,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  },
  data() {
    return {
      username: null,
      password: null,
      errors: [],
    }
  },
  methods: {
    onSubmit() {
      this.validate();
      console.log(this.errors);
      console.log(this.errors['password']);
      if (Object.keys(this.errors).length) return;

      console.log(this.username);
      console.log(this.password);
    },
    validate() {
      const validator = new Validator();
      validator.checkMaxLength('username', this.username, 255, 'Username');
      validator.checkMinLength('username', this.username, 6, 'Username');

      validator.checkMaxLength('password', this.password, 255, 'Password');
      validator.checkMinLength('password', this.password, 6, 'Password');

      this.errors = validator.errors;
    }
  },
};
</script>
<style scoped>
.login-container-page {
  min-height: 92vh !important;
}
</style>
