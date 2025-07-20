<template>
  <h1>Hello World</h1>
  <ul>
    <friend-details></friend-details>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Thoman",
          number: "123 123",
          email: "manuel@localhost.com",
        },
        {
          id: "Sam",
          name: "Samuel Thoman",
          number: "123 123",
          email: "samuel@localhost.com",
        },
      ],
    };
  },
};
</script>

<style></style>
