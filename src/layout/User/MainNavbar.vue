<template>
  <navbar position="fixed" type="primary" :transparent="transparent" :color-on-scroll="colorOnScroll"
    menu-classes="ml-auto">
    <template>
      <router-link v-popover:popover1 class="navbar-brand" to="/">
        Booking Hotel
      </router-link>
      <el-popover ref="popover1" popper-class="popover" placement="bottom" width="200" trigger="hover">
        <div class="popover-body">
          Designed by NhungMT
        </div>
      </el-popover>
    </template>
    <template slot="navbar-menu">
      <li class="nav-item">
        <a class="nav-link" href="/">
          <i class="now-ui-icons shopping_shop"></i>
          <p>TRANG CHỦ</p>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/booking">
          <i class="now-ui-icons education_paper"></i>
          <p>Booking</p>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/service">
          <i class="now-ui-icons shopping_tag-content"></i>
          <p>DỊCH VỤ</p>
        </a>
      </li>
      <drop-down tag="li" title="MENU" icon="now-ui-icons design_bullet-list-67" class="nav-item">
        <nav-link to="/history">
          <i class="now-ui-icons shopping_cart-simple"></i> History
        </nav-link>
        <nav-link to="/login">
          <i class="now-ui-icons users_circle-08"></i> Login
        </nav-link>
        <nav-link to="/profile">
          <i class="now-ui-icons users_single-02"></i> Profile
        </nav-link>
      </drop-down>

      <li class="nav-item">
        <a class="nav-link" rel="tooltip" title="Follow us on Twitter" data-placement="bottom" href="" target="_blank">
          <i class="fab fa-twitter"></i>
          <p class="d-lg-none d-xl-none">Twitter</p>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" rel="tooltip" title="Like us on Facebook" data-placement="bottom"
          href="https://www.facebook.com/phuonguyen.1606" target="_blank">
          <i class="fab fa-facebook-square"></i>
          <p class="d-lg-none d-xl-none">Facebook</p>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" rel="tooltip" title="Follow us on Instagram" data-placement="bottom"
          href="https://www.instagram.com/" target="_blank">
          <i class="fab fa-instagram"></i>
          <p class="d-lg-none d-xl-none">Instagram</p>
        </a>
      </li>
    </template>
  </navbar>
</template>

<script>
import { DropDown, Navbar, NavLink } from '@/components';
import { Popover } from 'element-ui';
export default {
  name: 'main-navbar',
  props: {
    transparent: Boolean,
    colorOnScroll: Number
  },
  components: {
    DropDown,
    Navbar,
    NavLink,
    [Popover.name]: Popover
  }
};
</script>

<style scoped></style>
