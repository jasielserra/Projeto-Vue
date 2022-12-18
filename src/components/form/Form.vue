<template>
  <h2> Meu Formulário: </h2>
  <form action="">
    <div>
       <InputText/>
    </div>
    <div>
       <InputText/>
    </div>
    <div>
       <Submit/>
    </div>
  </form>
</template>
<script>
import InputText from "@/components/form/InputText";
import Submit from "@/components/form/Submit";

export default {
  name: "Form",
  components:{
    InputText,
    Submit
  }
}
</script>

