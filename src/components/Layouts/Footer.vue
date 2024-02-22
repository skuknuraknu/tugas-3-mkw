<!-- eslint-disable prettier/prettier -->
<template>
  <footer class="footer-style-area pt-100">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-sm-6 col-lg-3">
          <div class="single-footer-widget">
            <div class="footer-logo" >
              <a :href="'#'">
                <img src="../../assets/img/logoupimerah.png" alt="Logo"  />
              </a>
              <p>
                Supporter.C is a Platform as a Service (PaaS) serving as the Digital Infrastructure at the Digital Service Division of PT Telekomunikasi Indonesia. 
              </p>
              <ul class="footer-social">
                <li>
                  <a :href="''">
                    <i class="bi-facebook" style=" padding-left: 1px"></i>
                  </a>
                </li>
                <li>
                  <a :href="''">
                    <i class="bi-twitter" style=" padding-left: 1px"></i>
                  </a>
                </li>
                <li>
                  <a :href="''">
                    <i class="bi-linkedin" style=" padding-left: 1px"></i>
                  </a>
                </li>
                <li>
                  <a :href="''">
                    <i class="bi-instagram" style=" padding-left: 1px"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-2">
          <div class="single-footer-widget ps-3">
            <h3>Supporter.C</h3>
            <ul class="quick-link">
              <li>
                <a  @click="scroll('Overview')" :href="'javascript:void(0)'">Overview</a>
              </li>
              <li>
                <a  @click="scroll('Features')" :href="'javascript:void(1)'">Features</a>
              </li>
              <li>
                <a  @click="scroll('Steps')" :href="'javascript:void(2)'">How To</a>
              </li>
              <li>
                <a  @click="scroll('Order')" :href="'javascript:void(3)'">Order</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-sm-6 col-lg-2">
          <div class="single-footer-widget ps-3">
            <h3>Company</h3>
            <ul class="quick-link">
              <li>
                <a :href="''" target="_blank">Universitas Pendidikan Indonesia</a>
              </li>
              <li>
                <a :href="''" target="_blank">About Universitas Pendidikan Indonesia</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-sm-6 col-lg-2">
          <div class="single-footer-widget ps-3">
            <h3>About Us</h3>
            <ul class="quick-link">
              <li>
                <a @click="scroll('Overview')" :href="'javascript:void(0)'">Supporter.C</a>
              </li>
              <li>
                <a :href="''" target="_blank">IndigoHub Bandung</a>
              </li>
              <li>
                <a :href="''"
                  >Jl. Gegerkalong Hilir No.47 Kota Bandung, Jawa Barat 40152</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="col-sm-6 col-lg-3">
          <div class="single-footer-widget">
            <h3>Contact Us</h3>
            <ul class="address-info">
              <li>
                <i class="bi-telephone-outbound"></i>
                <a :href="'tel:+6282228000720'">+62 822 2800 0720</a>
              </li>
              <li>
                <i class="bi-book"></i>
                <a :href="''"
                  >Helpdeskdxb@telkom.co.id</a
                >
              </li>
              <li>
                <i class="bi bi-telegram"></i>
                <a :href="''">helpdeskdb_bot</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="copyright-style-area">
        <div class="row align-items-center">
          <div class="col-lg-6 col-md-6">
            <div class="copyright-item">
              <p>
                &copy; Copyright {{ currentYear }} By <a href="#">Supporter.C</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
export default {
  name: "AppFooter",
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
  mounted() {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 100) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
    });
  },
  methods: {
  scroll(refName) {
    const element = document.getElementById(refName);
    if (element) {
      element.scrollIntoView({ top: element.offsetTop, behavior: "smooth" });
    }
  },
},

};
</script>