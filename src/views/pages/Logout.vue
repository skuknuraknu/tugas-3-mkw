<!-- <template>
  <CRow>
    <CCol>
      <CCard class="mb-4">
        <CCardHeader> Log out </CCardHeader>
        <CCardBody>
          <p>
            Documentation and examples for Bootstrap typography, including
            global settings, headings, body text, lists, and more.
          </p>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template> -->

<script>
export default {
  name: 'Logout',
  data() {
    return {
      loguout: '',
    }
  },
  mounted() {
    localStorage.clear()
    this.$router.push('/login')
  },
}
</script>
