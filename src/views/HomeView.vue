<template>
  <div class="home">
    <video autoplay loop muted playsinline class="vid">
      <source src="../assets/soccer_brokers.mp4" type="video/mp4">
    </video>
    </div>
 
  
</template>

<script>


</script>
<style scoped>
.vid{
  /* height: 900px!important;
  position: relative;
  max-height: 900px!important;
  min-width: 100%; */
  position: fixed;
  max-height: 800px;
  min-width: 100%;
  object-fit: fill;
}
.animation {
  width: 38ch;
  animation: typing 2s steps(40), blink .5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  /* border-right: 3px solid; */
  font-family:'Courier New', Courier, monospace;
  font-size: 2rem;
  color: black;
  margin-top: 10px;
}
.word{
  transform: translateY(-240%);
}
@keyframes typing {
  from {
    width: 0
  }
}
@keyframes blink {
  50% {
    border-color: transparent
  }
}



 
 </style>
