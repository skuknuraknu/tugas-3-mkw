<template>
  <div class="bg-light min-vh-100 d-flex flex-row align-items-center">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol :md="9" :lg="7" :xl="6">
          <CCard class="mx-4">
            <CCardBody class="p-4">
              <CForm>
                <h1>Register</h1>
                <p class="text-medium-emphasis">Create your account</p>
                <CInputGroup class="mb-3">
                  <CInputGroupText>
                    <CIcon icon="cil-user" />
                  </CInputGroupText>
                  <CFormInput placeholder="Username" autocomplete="username" />
                </CInputGroup>
                <CInputGroup class="mb-3">
                  <CInputGroupText>@</CInputGroupText>
                  <CFormInput placeholder="Email" autocomplete="email" />
                </CInputGroup>
                <CInputGroup class="mb-3">
                  <CInputGroupText>
                    <CIcon icon="cil-lock-locked" />
                  </CInputGroupText>
                  <CFormInput
                    type="password"
                    placeholder="Password"
                    autocomplete="new-password"
                  />
                </CInputGroup>
                <CInputGroup class="mb-4">
                  <CInputGroupText>
                    <CIcon icon="cil-lock-locked" />
                  </CInputGroupText>
                  <CFormInput
                    type="password"
                    placeholder="Repeat password"
                    autocomplete="new-password"
                  />
                </CInputGroup>
                <div class="d-grid">
                  <CButton color="success">Create Account</CButton>
                </div>
              </CForm>
              <br />
              <!-- untuk tulisan bawah -->

              <P class="fontregis"
                >Already have an account?
                <RouterLink to="/login">Login Here </RouterLink>
                <br />
                Not yet verified your email?
                <CButton
                  color="link"
                  class="px-0"
                  type="submit"
                  size="sm"
                  @click="
                    () => {
                      ForgotPassword = true
                    }
                  "
                  >Resend Verification</CButton
                >
              </P>
              <!-- Modal resend password -->
              <CModal
                backdrop="static"
                :visible="ForgotPassword"
                @close="
                  () => {
                    ForgotPassword = false
                  }
                "
                class="form-data"
                @submit="handleSubmitReset"
                onsubmit="return false"
              >
                <CModalHeader>
                  <CModalTitle>Insert Email</CModalTitle>
                </CModalHeader>
                <CModalBody>
                  <CInputGroup class="mb-3">
                    <CInputGroupText>
                      <CIcon icon="cil-user" />
                    </CInputGroupText>
                    <CFormInput
                      placeholder="Insert Your Email To Reverivication"
                      autocomplete="off"
                      type="text"
                      v-model="email"
                    />
                  </CInputGroup>
                </CModalBody>
                <CModalFooter>
                  <CButton
                    color="secondary"
                    @click="
                      () => {
                        ForgotPassword = false
                      }
                    "
                  >
                    Close
                  </CButton>
                  <CButton color="primary" class="px-4" type="submit"
                    >Submit</CButton
                  >
                </CModalFooter>
              </CModal>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data: () => {
    return {
      validatedCustom01: null,
      // selected: [
      //   { text: 'Please select one', disable: true },
      //   { text: 'Developer', value: '1' },
      //   { text: 'Indigo Incubator', value: '2' },
      //   { text: 'Amoba Incubator', value: '3' },
      //   { text: 'Ecosystem Telkom', value: '4' },
      //   { text: 'Dillo Members', value: '5' },
      // ],
      // username: '',
      // email: '',
      // password: '',
      // confirmation: '',
      // tribe: '',
      // numberphone: '',
      ForgotPassword: false,
      // methods: {
      //   async handleSubmit() {
      //     await axios.post('register', {
      //       selected: this.selected,
      //       username: this.username,
      //       email: this.email,
      //       password: this.password,
      //       repassword: this.repasword,
      //       tribe: this.tribe,
      //       numberphone: this.numberphone,
      //     })

      //     this.$router.push('/')
      //   },
      // },
    }
  },
}
</script>
