<template>
  <div class="skills">
    <h2>Mes Compétences</h2>
    <div class="skills-list">
      <div class="skill" v-for="(skill, index) in skills" :key="index">
        <h3>{{ skill.name }}</h3>
        <div class="progress-bar">
          <div class="progress" :style="{ width: skill.level }"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skills",
  data() {
    return {
      skills: [
        { name: "Vue.js", level: "90%" },
        { name: "JavaScript", level: "85%" },
        { name: "CSS", level: "80%" },
        { name: "HTML", level: "95%" },
        { name: "Git", level: "70%" }
      ]
    };
  }
};
</script>

<style scoped>
.skills {
  padding: 20px;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.skills-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.skill h3 {
  color: #34495e;
}

.progress-bar {
  background-color: #ecf0f1;
  border-radius: 5px;
  height: 10px;
  width: 100%;
}

.progress {
  background-color: #2ecc71;
  height: 100%;
  border-radius: 5px;
}
</style>
