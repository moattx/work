<script>
	import Header from "./Header.svelte";
  import About from "./About.svelte"
  import Contact from "./Contact.svelte";
  import Footer from "./Footer.svelte";
  let mobile = false;
  console.log(navigator.userAgent)
  if (navigator.userAgent.includes("iPhone")){
    mobile = true;
  }

</script>



<Header />

<About />
<Contact />
<Footer />

{#if mobile}
<a class="wp-call-button" href="tel:+0503888898"></a>
{/if}

<style>
.wp-call-button {
	display: block;
	position: fixed;
	text-decoration: none;
	z-index: 9999999999;
	width: 60px;
	height: 60px;
	border-radius: 50%;
	/* transform: scale(0.8); */
	left: 50%;
	margin-left: -30px;
	bottom: 20px;
	background: url( data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDU5cHgiIGhlaWdodD0iNDU5cHgiIHZpZXdCb3g9IjAgMCA0NTkgNDU5IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NTkgNDU5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGc+PGcgaWQ9ImNhbGwiPjxwYXRoIHN0eWxlPSJmaWxsOiB3aGl0ZTsiIGQ9Ik05MS44LDE5OC45YzM1LjcsNzEuNCw5Ni45LDEzMC4wNSwxNjguMywxNjguM0wzMTYuMiwzMTEuMWM3LjY0OS03LjY0OSwxNy44NS0xMC4xOTksMjUuNS01LjFjMjguMDUsMTAuMiw1OC42NDksMTUuMyw5MS44LDE1LjNjMTUuMywwLDI1LjUsMTAuMiwyNS41LDI1LjV2ODYuN2MwLDE1LjMtMTAuMiwyNS41LTI1LjUsMjUuNUMxOTMuOCw0NTksMCwyNjUuMiwwLDI1LjVDMCwxMC4yLDEwLjIsMCwyNS41LDBoODkuMjVjMTUuMywwLDI1LjUsMTAuMiwyNS41LDI1LjVjMCwzMC42LDUuMSw2MS4yLDE1LjMsOTEuOGMyLjU1LDcuNjUsMCwxNy44NS01LjEsMjUuNUw5MS44LDE5OC45eiIvPjwvZz48L2c+PC9zdmc+ ) center/30px 30px no-repeat #269041 !important;
}
</style>