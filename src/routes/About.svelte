<script>
      import { onMount } from 'svelte';

    let observedElement;
    let isVisible = false;


  onMount(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isVisible = true;
        } 
      },
      {
        threshold: 0.1, 
      }
    );

    if (observedElement) {
      observer.observe(observedElement);
    }
/*
    return () => {
      if (observedElement) {
        //observer.unobserve(observedElement);
      }
    };
    */
  });



    import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

    const items = [["info-circle",  "من نحن", ".نحن مجموعة ملتزمون تمامًا بتقديم أفضل التطبيقات التقنية التي يقدمها هذا العالم"], ["search", "رؤيتنا", ".أن نكون المزود الرائد للتطبيقات الموثوقة والمبتكرة والفعالة من حيث التكلفة في المملكة العربية السعودية"], ["bullseye", "أهدافنا", ".مهمتنا هي تقديم تطبيقات عالية الجودة وبأسعار معقولة"]]
    //const items = [["fa fa-info-circle", "TITLE", "INFO"],["fa fa-info-circle", "TITLE", "INFO"],["fa fa-info-circle", "TITLE", "INFOaaaaaa"]]
</script>

    <!--<section id="About Us" class="divbox flex flex-col items-center justify-center w-screen bg-gray-200 text-4xl">-->
    <section id="About Us" class="flex justify-center items-center flex-col bg-gray-200 text-4xl">
    <h1> من نحن </h1>
    <span> .. </span>
    </section>

    {#each items as item}
    <!--<div class="flex flex-row items-center justify-center w-screen box-border h-32 p-4 border-4">-->
    <div bind:this={observedElement}  class="flex flex-col justify-center items-center  box-border h-40 p-4 border-4">
      {#if isVisible}
        <div 	in:fly={{ delay: 0, duration: 300, x: 0, y: 200, opacity: 0.5, easing: quintOut }} class="text-center">
  <box-icon type='solid' name='{item[0]}'></box-icon>
        </div>
        <div 	transition:fly={{ delay: 0, duration: 300, y: 200, opacity: 0.5, easing: quintOut }}  class="text-center gap-1">
        <h2 class="font-semibold text-xl mb-2">{item[1]}</h2>
        <p class="text-base leading-relaxed">{item[2]}</p>
        </div>
    {/if}
    </div>
    {/each}
