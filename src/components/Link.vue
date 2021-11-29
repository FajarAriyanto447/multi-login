<template>
  <div>
    <button v-if="userRole === 'siswa'">Siswa</button>
    <button v-if="userRole === 'guru'">Guru</button>
    <button v-if="userRole === 'admin'">Admin</button>
    <div v-if="userRole === 'kepalasekolah'">
      <button>Siswa</button>
      <button>Guru</button>
      <button>Admin</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "link",
  computed: {
    userRole() {
      return JSON.parse(sessionStorage.getItem("USER_DATA")).role;
    },
  },
};
</script>
