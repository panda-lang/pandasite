<template lang="pug">
    .supporter-block.px-4.py-1
        .bg-grey
            p.py-4.px-5
                | {{ prefix }} 
                span.px-3 {{ supporter.user }} 
                span.font-bold {{ '$' + supporter.amount.toFixed(2) }} 
</template>

<script>
export default {
  name: 'Supporter',
  props: ['supporter', 'prefix']
}
</script>
