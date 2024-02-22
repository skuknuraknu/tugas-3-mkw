<!-- eslint-disable prettier/prettier -->
<template>
  <div>
    <div id="Overview" class="overview-area">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="overview-content">
            <div class="card">
              <!-- <span class="sub-title"
                >Selamat Belajar & Jangan Lupa Berdo'a</span
              > -->
              <center>
                <h1>E-Modul Siklus</h1>
                <h1>Hidrology</h1>
                <br />
                <h2>Periode 2023-2024</h2>
              </center>
            </div>
          </div>
          <RouterLink to="/login">
            <div class="d-grid">
              <CButton color="success">Registration</CButton>
            </div>
          </RouterLink>
          <RouterLink to="/pretest">
            <div class="d-grid">
              <CButton color="success">Pretest</CButton>
            </div>
          </RouterLink>
          <RouterLink to="/overview">
            <div class="d-grid">
              <CButton color="success">Selamat Belajar</CButton>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
    <Futer />
  </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
import Futer from '@/components/Layouts/Footer.vue'

export default {
  name: 'AppTampilan',
  components: {
    Futer,
  },
  data() {
    return {
      time: 0,
    }
  },
}
</script>