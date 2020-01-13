<template>
  <div class="container">
    <div class="side-bar">
      <SideBar />
    </div>

    <div class="div-form">
      <!-- Page title -->
      <h1>Dashboard</h1>

      <div>
        <div class="flex">
          <div class="form-group">
            <!-- Text inside is a placeholder -->
            <p>Current Applications</p>
            <h1>233</h1>
            <p>Academy 2.0</p>
          </div>
          <div class="form-group">
            <!-- Text inside is a placeholder -->
            <p>Total Applications</p>
            <h1>4253</h1>
            <p>All entries so far</p>
          </div>
          <div class="form-group">
            <!-- Text inside is a placeholder -->
            <p>Academys</p>
            <h1>4</h1>
            <p>So far</p>
          </div>
        </div>

        <div class="flex2">
          <div class="tab">
            <div>
              <h6>History</h6>
              <p>Last Update</p>
            </div>
            <table>
              <tbody class="hoverable-tr">
                <tr id="tr">
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="form-group faint-border">
            <div>
              <h6>Create Assessment</h6>
            </div>
            <div class="content">
              <div>
                <p>Create test question for an incoming academy students</p>
              </div>
              <div>
                <button class="btn">Create Assessment</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SideBar from "../../components/SideBar";

export default {
  name: "AdminDashboard",
  components: {
    SideBar
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
  padding-bottom: 12em;
  margin: auto;
  width: 76%;
  /* position: relative; */
}

/* .side-bar {
  position: relative;
  top: 0;
  right: 4;
} */

.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

button {
  /* width: 40%; */
  background: #cecece;
  color: white;
}

.text-area {
  height: 8em;
}

.flex > div {
  width: calc(50% - 4em);
}


.flex2 {
  display: flex;
  justify-content: space-between;
}

.flex2 > div {
  padding: 1em;
}

.hoverable-tr:hover {
  background: white;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.3);
  border-radius: 0.4em;
}

.faint-border {
  border: 2px solid #ececf9;
  box-sizing: border-box;
  border-radius: 4px;
  /* padding: 1em; */
}
table {
  border-collapse: unset;
  border-spacing: 0;
} 

.tab {
  height: fit-content;
  
}

td {
  padding: 1em 2em;
}

#tr {
  border-radius: 3px;
}

#tr:hover {
  border-radius: 3px;
}

.content {
  text-align: center;
  width: 90%;
  margin: 2em auto;
}


</style>