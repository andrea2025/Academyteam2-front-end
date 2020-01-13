<template>
  <div>
    <input type="file" id="file" />
    <label for="file" class="btn-1">
      <i>+</i>&nbsp;&nbsp;&nbsp; Upload CV
    </label>
  </div>
</template>
<script>
export default {
  name: "fileUpload"
};
</script>
<style scoped>
[type="file"] {
  height: 0;
  overflow: hidden;
  width: 0;
}

[type="file"] + label {
  border: 1.5px dotted #2b3c4e;
  width: 100%;

  border-radius: 5px;
  color: #2b3c4e;
  cursor: pointer;
  display: inline-block;
  font-family: Avenir;
  font-size: 16px;
  line-height: 22px;

  margin-bottom: 1rem;
  outline: none;
  padding: 1em;
  position: relative;
  transition: all 0.3s;
  vertical-align: middle;
}
i {
  font-size: 20px;
  color: #2b3c4e;
  font-weight: 900;
}
</style>