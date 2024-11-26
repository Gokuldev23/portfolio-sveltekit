<script>

</script>




<main class="h-full content-center">

    <div class="parent h-3/4 max-w-5xl mx-auto">
        <div class="div1 border border-white text-white content-center w-full text-center">1</div>
        <div class="div2 border border-white text-white content-center w-full text-center">2</div>
        <div class="div3 border border-white text-white content-center w-full text-center">3</div>
        <div class="div4 border border-white text-white content-center w-full text-center">4</div>
        <div class="div5 border border-white text-white content-center w-full text-center">5</div>
    </div>
        
</main>

<style>

.parent {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 8px;
}
    
.div1 {
    grid-row: span 3 / span 3;
}

.div2 {
    grid-row: span 2 / span 2;
    grid-column-start: 3;
    grid-row-start: 1;
}

.div3 {
    grid-column-start: 2;
    grid-row-start: 1;
}

.div4 {
    grid-column-start: 2;
}

.div5 {
    grid-column: span 2 / span 2;
    grid-column-start: 2;
    grid-row-start: 3;
}
        
@media (max-width: 768px) {
    .parent {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto;
      gap: 12px;
    }

    .div1 {
      grid-row: span 2/span 2;
      grid-column: auto;
    }

    .div2 {
      grid-row: auto;
      grid-column: auto;
    }

    .div3 {
      grid-row: span 2 / span 2;
      grid-column: auto;
    }

    .div4 {
      grid-row: auto;
      grid-column: auto;
    }

    .div5 {
      grid-row: auto;
      grid-column: span 2/ span 2;
    }
  }
</style>