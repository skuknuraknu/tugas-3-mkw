<!-- eslint-disable prettier/prettier -->
<template>
  <div id="Order" class="Order-bg pt-100 pb-70">
    <div class="container">
      <div :class="'main-section-title'">
        <span class="sub-title"># CHOOSE YOUR ASSESSMENT</span>
        <h2>Kerjakanlah Soal-Soal Berikut dengan Hati Ikhlas</h2>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-4 col-md-6">
          <div class="why-choose-us-item">
            <div class="choose-image">
              <img src="../assets/img/1_2.png" alt="image" />
            </div>
            <div class="choose-content">
              <a href="" class="choose-btn"
                >Kerjakan sekarang</a
              >
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="why-choose-us-item">
            <div class="choose-image">
              <img src="../assets/img/2_2.png" alt="image" />
            </div>
            <div class="choose-content">
              <a :href="''" :class="'choose-btn'"
                >Kerjakan sekarang</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script >
export default {
  name: "AppOrder",
  data() {
    
  },
};
</script>