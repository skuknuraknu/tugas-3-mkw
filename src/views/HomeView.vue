<!-- eslint-disable prettier/prettier -->
<template>
  <div>
    <Navbar />
    <Overview />
    <Informasi />
    <Kegiatan />
    <Komponen />
    <features />
    <Order />
    <Futer />
  </div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
// @ is an alias to /src
import Navbar from '@/components/Layouts/Navbar.vue'
import Futer from '@/components/Layouts/Footer.vue'
import Overview from '@/components/Overview.vue'
import Features from '@/components/Features.vue'
import Informasi from '@/components/InformasiUmum.vue'
import Order from '@/components/Order.vue'
import Kegiatan from '@/components/KegiatanPembelajaran.vue'
import Komponen from '@/components/KomponenInti.vue'

export default {
  name: 'HomeView',
  components: {
    Navbar,
    Overview,
    Informasi,
    Futer,
    Features,
    Komponen,
    Kegiatan,
    Order,
  },
}
</script>
