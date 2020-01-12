<template>
  <div class="container">
    <div class="side-bar">
      <SideBar />
    </div>

    <div class="div-form">
      <!-- Page title -->
      <h1>Create Application</h1>

      <div>
        <div class="flex">
          <div>
            <FileUpload />
          </div>
          <div class="form-group">
            <label>Link</label>
            <input class="form-control" type="url" />
          </div>
        </div>

        <div class="flex">
          <div class="form-group">
            <label>Application closure date</label>
            <input class="form-control" type="date" placeholder="dd/mm/yy" />
          </div>
          <div class="form-group">
            <label>Batch ID</label>
            <input class="form-control" type="text" />
          </div>
        </div>

        <div class="form-group">
          <label>Instructions</label>
          <input class="form-control text-area" type="text" />
        </div>
      </div>

      <div id="btn">
        <button type="submit" class="btn">Submit</button>
      </div>
    </div>
  </div>
</template>
<script>
import SideBar from "../../components/SideBar";
import FileUpload from "../../components/FileUpload";

export default {
  name: "Application",
  components: {
    SideBar,
    FileUpload
  }
};
</script>
<style scoped>
.container {
  display: flex;
  align-items: center;
  padding: 0;
  min-height: 100vh;
  min-width: 100vw;
}

h1 {
  font-weight: 400;
}

.div-form {
  padding-bottom: 10em;
  margin: 0 auto;
  width: 76%;
  /* position: relative; */
}

/* .side-bar {
  position: relative;
  top: 0;
  left: 0;
} */

.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#btn {
  text-align: center;
}

.btn {
  width: 40%;
  color: white;
}

button {
  background: #2b3c4e;
  border: none;
}

.text-area {
  height: 8em;
}

.flex > div {
  width: calc(50% - 4em);
}

@media screen and (max-width: 600px) {
}
</style>