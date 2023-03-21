<template>
  <div>
    <div class="page-header page-header-small">
      <parallax class="page-header-image" style="background-image: url('img/sanh.jpg')">
      </parallax>
      <div class="content-center">
        <div class="container">
          <h1 class="title">BOOKING</h1>
          <div class="text-center">
            <a href="#pablo" class="btn btn-primary btn-icon btn-round">
              <i class="fab fa-facebook-square"></i>
            </a>
            <a href="#pablo" class="btn btn-primary btn-icon btn-round">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#pablo" class="btn btn-primary btn-icon btn-round">
              <i class="fab fa-google-plus"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="">
      <div class="row">
        <div class="col-md-2">
          <DatePicker v-model="nhanPhong" placeholder="Ngày nhận">
          </DatePicker>
        </div>
        <div class="col-md-2">
          <DatePicker v-model="traPhong" placeholder="Ngày trả">
          </DatePicker>
        </div>
        <div class="col-md-2">
          <select v-model="selected" class="mx-input">
            <option disabled value="">Please select one</option>
          </select>
        </div>
        <div class="col-md-2">
          <div class="mx-input">
            Số phòng
            <div class="">
              <button @click="changeNumberRoom(-1)" class="button">
                <i class="now-ui-icons arrows-1_minimal-left icon iconChangeNumber"></i>
              </button>
              {{ numberRoom }}
              <button @click="changeNumberRoom(+1)" class="button">
                <i class="now-ui-icons arrows-1_minimal-right iconChangeNumber"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-2">
          <div class="mx-input">
            Người lớn
            <div class="">
              <button @click="changeNumberAdult(-1)" class="button">
                <i class="now-ui-icons arrows-1_minimal-left iconChangeNumber"></i>
              </button>
              {{ numberAdult }}
              <button @click="changeNumberAdult(+1)" class="button">
                <i class="now-ui-icons arrows-1_minimal-right iconChangeNumber"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-2">
          <div class="mx-input">
            Trẻ em
            <div class="">
              <button @click="changeNumberChildren(-1)" class="button">
                <i class="now-ui-icons arrows-1_minimal-left iconChangeNumber"></i>
              </button>
              {{ numberChildren }}
              <button @click="changeNumberChildren(+1)" class="button">
                <i class="now-ui-icons arrows-1_minimal-right iconChangeNumber"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button>
          Đặt phòng
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
export default {
  components: {
    DatePicker
  },
  data() {
    return {
      numberRoom: 0,
      numberAdult: 1,
      numberChildren: 0,
      traPhong: null,
      nhanPhong: null,
      selected: null
    };
  },
  methods: {
    changeNumberAdult(peopleChange) {
      console.log(this.numberAdult);
      this.numberAdult = parseInt(this.numberAdult) + peopleChange;
      if (this.numberAdult < 1) {
        this.numberAdult = 1;
      }
    },
    changeNumberChildren(peopleChange) {
      this.numberChildren = parseInt(this.numberChildren) + peopleChange;
      if (this.numberChildren < 0) {
        this.numberChildren = 0;
      }
    },
    changeNumberRoom(roomChange) {
      this.numberRoom = parseInt(this.numberRoom) + roomChange;
      if (this.numberRoom < 0) {
        this.numberRoom = 0;
      }
    },
    replaceInput(event) {
      if (!/\d/.test(event.key)) {
        event.preventDefault();
      }
    },
  },
}
</script>
<style lang="scss">
.mx-input {
  width: 210px;
  height: 100px;
}
.col-md-2 {
  text-align: center;
  padding: 0px 0px !important;
}
.button {
  border: none;
  background-color: #ffff;
}
</style>
