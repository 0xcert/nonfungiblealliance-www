<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">

        <div class="modal-header">
          <slot name="header">
            <button class="modal-default-button" @click="$emit('close')">
              <img src="/images/icon-close.svg" alt="Close">
            </button>
          </slot>
        </div>

        <div class="modal-body">
          <slot name="body">
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  margin: 0px auto;
  background-color: rgba($primary, 0.9);
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
  width: 100%;
  color: $white;
  text-align: center;

  @include breakpoint(medium)  {
    max-width: 600px
  }
}

.modal-header h3 {
  margin-top: 0;
}

.modal-body {
  margin: 20px 0;
  padding: 20px 30px;

  p {
    font-size: 18px;
  }

  .privacy {
    text-align: left;
  }
}

.modal-default-button {
  float: right;
  padding: 15px;
  cursor: pointer;

  &:focus {
    outline: none;
  }
}

</style>