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
      listData: [],
      tmpData: {},
    };
  },
  created() {
    if (JSON.parse(window.localStorage.getItem("list")) != null) {
      this.listData = JSON.parse(window.localStorage.getItem("list"));
    }
  },
  mounted() {
    this.modal = new Modal(document.getElementById("exampleModal"));
  },
  methods: {
    _add() {
      this.modal.show();
    },
    _save() {
      if (this.tmpData.id >= 0) {
        console.log("update");
        this.listData[this.tmpData.id].nik = this.tmpData.nik;
        this.listData[this.tmpData.id].nama = this.tmpData.nama;
        this.listData[this.tmpData.id].email = this.tmpData.email;
        this.listData[this.tmpData.id].telp = this.tmpData.telp;
      } else {
        console.log("insert");
        console.log(this.listData);
        console.log(this.tmpData);
        this.listData.push(this.tmpData);
      }

      this._setPersistent();
      this.modal.show();
      this.tmpData = {};
      this.modal.hide();
    },
    _delete(idx) {
      this.listData.splice(idx, 1);
      this._setPersistent();
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
    _setPersistent() {
      window.localStorage.setItem("list", JSON.stringify(this.listData));
    },
  },
};
</script>
