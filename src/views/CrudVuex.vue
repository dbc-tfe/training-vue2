<template>
  <div class="home container mt-3">
    <button type="button" class="btn btn-primary" @click="_add()">
      Tambah
    </button>
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

    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Form Input</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-12">
                <label class="form-label">Nik</label>
                <input class="form-control" v-model="tmpData.nik" />
              </div>
              <div class="col-md-12">
                <label class="form-label">Nama</label>
                <input class="form-control" v-model="tmpData.nama" />
              </div>
              <div class="col-md-12">
                <label class="form-label">Email</label>
                <input class="form-control" v-model="tmpData.email" />
              </div>
              <div class="col-md-12">
                <label class="form-label">No Telp</label>
                <input class="form-control" v-model="tmpData.telp" />
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Batal
            </button>
            <button type="button" class="btn btn-primary" @click="_save()">
              Simpan
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from "bootstrap";
// let myModal = new Bootstrap.Modal(document.getElementById("exampleModal"));
export default {
  name: "Home",
  data() {
    return {
      modal: null,
      tmpData: {},
      // listData: [],
    };
  },
  mounted() {
    this.modal = new Modal(document.getElementById("exampleModal"));
  },
  created() {
    // this._getData();
  },
  methods: {
    _add() {
      this.modal.show();
    },
    _save() {
      if (this.tmpData.id >= 0) {
        this.$store.dispatch("updateData", this.tmpData);
      } else {
        this.$store.dispatch("addData", this.tmpData);
      }
      this.modal.show();
      this.tmpData = {};
      this.modal.hide();
    },
    _delete(idx) {
      this.$store.dispatch("deleteData", idx);
    },
    _edit(idx) {
      this.modal.show();
      this.tmpData = {
        id: idx,
        nik: this.listData[idx].nik,
        nama: this.listData[idx].nama,
        email: this.listData[idx].email,
        telp: this.listData[idx].telp,
      };
    },
    // _getData() {
    //   return this.$store.state.listData;
    // },
  },
  computed: {
    listData() {
      return this.$store.state.listData;
    },
  },
};
</script>
