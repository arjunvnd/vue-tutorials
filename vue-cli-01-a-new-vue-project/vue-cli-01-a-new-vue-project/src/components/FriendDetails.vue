<template>
  <li>
    {{ friend.name }}
    <button @click="handleShowDetailsClick">Show Details</button>
    <ul v-if="showDetails">
      <li>
        {{ friend.number }}
      </li>
      <li>
        {{ friend.email }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  data() {
    return {
      friend: {
        id: "manuel",
        name: "Manuel Thoman",
        number: "123 123",
        email: "manuel@localhost.com",
      },
      showDetails: false,
    };
  },
  methods: {
    handleShowDetailsClick() {
      this.showDetails = !this.showDetails;
    },
  },
};
</script>

<style></style>
