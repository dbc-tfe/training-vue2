<template>
  <div class="home container mt-3">
    <loading
      :active.sync="isLoading"
      :can-cancel="true"
      :on-cancel="onCancel"
      :is-full-page="fullPage"
    ></loading>
    <h5>CRUD API</h5>
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
              <button
                type="button"
                class="btn btn-warning"
                @click="_edit(data)"
              >
                Edit
              </button>
              <button
                type="button"
                class="btn btn-danger"
                @click="_delete(data)"
              >
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
import axios from "axios";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

export default {
  name: "Home",
  components: {
    Loading,
  },
  data() {
    return {
      modal: null,
      listData: [],
      tmpData: {},
      isLoading: false,
      fullPage: true,
    };
  },
  created() {
    this._getData();
  },
  mounted() {
    this.modal = new Modal(document.getElementById("exampleModal"));
  },
  methods: {
    _add() {
      this.modal.show();
    },
    async _save() {
      try {
        this.isLoading = true;
        if (this.tmpData.id >= 0) {
          await axios.post("updateData", this.tmpData);
        } else {
          await axios.post("createData", this.tmpData);
        }
        await this._getData();
        this.modal.show();
        this.tmpData = {};
        this.modal.hide();
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
      }
    },
    async _delete(data) {
      try {
        this.isLoading = true;
        await axios.post("deleteData", { id: data.id });
        await this._getData();
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
      }
    },
    _edit(data) {
      this.modal.show();
      this.tmpData = {
        id: data.id,
        nik: data.nik,
        nama: data.nama,
        email: data.email,
        telp: data.telp,
      };
    },
    async _getData() {
      try {
        this.isLoading = true;
        const res = await axios.get("getData");
        this.listData = res.data;
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
      }
    },
  },
};
</script>
