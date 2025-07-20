<template>
  <form ref="friendForm" @submit.prevent="addNewFriend">
    <label for="name">Name</label>
    <input type="text" name="name" />
    <label for="phone">Phone</label>
    <input type="text" name="phone" />
    <label for="email">Email</label>
    <input type="text" name="email" />
    <button type="submit">Add new friend</button>
  </form>
</template>

<script>
export default {
  emits: ["add-new-friend"],
  methods: {
    addNewFriend(e) {
      const formEl = e.target;
      const formData = new FormData(formEl);

      const newFriend = Object.fromEntries(formData);
      this.$emit("add-new-friend", newFriend);
      this.$refs.friendForm.reset();
    },
  },
};
</script>

<style></style>
