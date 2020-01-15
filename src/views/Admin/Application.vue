<template>
  <div class="container">
    <div>
      <SideBar class="side-bar" />
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
}

h1 {
  font-style: normal;
  font-weight: 300;
}

.div-form {
  margin: auto;
  width: 70%;
  padding: 0 0 2em 0;
  position: relative;
}

.side-bar {
  /* position: relative;
  top: 0;
  left: 0; */
  height: 100%;
  padding: 0 0 2em 0;
}

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