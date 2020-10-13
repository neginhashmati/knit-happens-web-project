<template>
    <div class="about">
    <h1>About us</h1>
    <p>Knit Happens is created by a group of students at the Software Engineering and Management bachelor's program at the University of Gothenburg, Sweden.</p>
    <p>This website is a part of the course DIT341 - Web and Mobile Development, taught by Dr. Philipp Leitner.</p>
    <p>The idea for this website came from one member's passion for knitting, and all member's love for staying organized.</p>
    <br>
    <h2>Our team</h2>
    <b-row align-h="center">
      <br>
        <b-col cols="12" sm="2" md="2">
          <h3>Dominique Deramat</h3>
          <img src="../assets/dom-avatar.jpeg" alt="doms avatar">
          <p>About Dominique:</p>
          <h3>Shonaigh Douglas</h3>
          <img src="../assets/sho-avatar.png" alt="shos avatar">
          <p>About Shonaigh:</p>
          <h3>Negin Hashmati</h3>
          <img src="../assets/negin-avatar.png" alt="negins avatar">
          <p>About Negin:</p>
        </b-col>
    </b-row>
    </div>
</template>

<script>
export default {
  name: 'about'
}
</script>

<style scoped>
img {
  width: 200px;
  max-width: 100%;
  height: auto;
}
</style>
