<template>
  <div class="about">
    <h1>About us</h1>
    <p>Knit Happens is created by a group of students at the Software Engineering and Management bachelor's program at the University of Gothenburg, Sweden.</p>
    <p>This website is a part of the course DIT341 - Web and Mobile Development, taught by Dr. Philipp Leitner.</p>
    <p>The idea for this website came from one member's passion for knitting, and all member's love for staying organized.</p>
    <br>
    <h2>Our team</h2>
    <b-container fluid>
    <b-row align-h="center">
      <b-col cols="12" sm="6" md="4">
        <h3>Dominique Deramat</h3>
        <img src="../assets/dom-avatar.jpeg" fluid alt="doms avatar">
        <p>About Dominique:</p>
      </b-col>
      <b-col cols="12" sm="6" md="4">
        <h3>Shonaigh Douglas</h3>
        <img src="../assets/sho-avatar.png" fluid alt="shos avatar">
        <p>About Shonaigh:</p>
      </b-col>
      <b-col cols="12" sm="6" md="4">
        <h3>Negin Hashmati</h3>
        <img src="../assets/negin-avatar.png" fluid alt="negins avatar">
        <p>About Negin:</p>
      </b-col>
    </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'about'
}
</script>

<style scoped>
img {
  max-width: 100%;
  height: auto;
}

p {
  font-size: 16px;
}
</style>
