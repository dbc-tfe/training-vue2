<template>
  <div class="home container mb-3">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">No</th>
          <th scope="col">Nik</th>
          <th scope="col">Nama</th>
          <th scope="col">Email</th>
          <th scope="col">Telp</th>
          <th scope="col">Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, i) in listData" :key="i">
          <th scope="row">{{ i + 1 }}</th>
          <td>{{ data.nik }}</td>
          <td>{{ data.nama }}</td>
          <td>{{ data.email }}</td>
          <td>{{ data.telp }}</td>
          <td>
            <div class="btn-group" role="group">
              <button type="button" class="btn btn-warning" @click="_edit(i)">
                Edit
              </button>
              <button type="button" class="btn btn-danger" @click="_delete(i)">
                Delete
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Home",
  computed: {
    listData() {
      return this.$store.state.listData;
    },
  },
};
</script>
