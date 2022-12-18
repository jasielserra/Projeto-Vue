<template>
  <div>
    <p v-if="esta_trabalhando">Estou trabalhando no momento.</p>
    <p v-else>Estou em busca de novas oportunidades</p>
    <p>Utilizo as seguintes tecnologias:</p>
    <ul>
      <li>Python</li>
      <li>Django Framework</li>
      <li>Vue-JS</li>
    </ul>
    <p v-show="mostrar_email">Mande uma mensagem para: {{email}}</p>
  </div>
</template>

<script>
export default {
  name: "Info",
  data(){
    return {
      esta_trabalhando: true,
      mostrar_email:false,
      email: 'jasiel_serra@hotmail.com'
    }
  }
}
</script>
