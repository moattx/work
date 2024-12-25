<script>
	let email_copied = false;
	let bandar_phone_copied = false;
  /*
	let abdullah_phone_copied = false;
  */

	function fallback(text) {
		var textArea = document.createElement('textarea');
		textArea.value = text;

		// Avoid scrolling to bottom
		textArea.style.top = '0';
		textArea.style.left = '0';
		textArea.style.position = 'fixed';

		document.body.appendChild(textArea);
		textArea.focus();
		textArea.select();

		document.execCommand('copy');
		document.body.removeChild(textArea);
	}
	function copy(text) {
		if (!navigator.clipboard) {
			fallback(text);
			return;
		}

		navigator.clipboard.writeText(text);
	}

	const emailClicked = async () => {
		email_copied = true;
		copy('contact@mosajla.com.sa');

		await new Promise((resolve, reject) => {
			setTimeout(resolve, 1.5 * 1000);
		});
		email_copied = false;
	};
	const bandar_phoneClicked = async () => {
		bandar_phone_copied = true;
		copy('0503888898');

		await new Promise((resolve, reject) => {
			setTimeout(resolve, 1.5 * 1000);
		});
		bandar_phone_copied = false;
	};
/*
	const abdullah_phoneClicked = async () => {
		abdullah_phone_copied = true;
		copy('0552449772');

		await new Promise((resolve, reject) => {
			setTimeout(resolve, 1.5 * 1000);
		});
		abdullah_phone_copied = false;
	};
  */
	/*
        copied = true;
            console.log("hi")
            await new Promise(r => {
                setTimeout(r, 40000);
            console.log("no")
                copied = false;
        });
        */
</script>

<section id="Contact" class="flex flex-col items-end justify-end w-screen bg-orange-200 box-border h-25 p-4 border-4 gap-4">
	<div class="text-4xl font-extrabold">
		<h1>تواصل معنا</h1>
	</div>
	<div class="flex flex-row gap-3">
    <box-icon type='solid' name='envelope'></box-icon>
		{#if email_copied}
			<p>contact@mosajla.com.sa</p>
			<button class="box-border rounded-full bg-black text-orange-200">copied</button>
		{:else}
			<p>contact@mosajla.com.sa</p>
			<button class="box-border rounded-full bg-black text-orange-200" on:click={emailClicked}>
                copy
            </button>
		{/if}
	</div>
	<div class="flex flex-row gap-3">
<box-icon type='solid' name='phone'></box-icon>
			<p>0503888898</p>
		{#if bandar_phone_copied}
			<button class="box-border rounded-full bg-black text-orange-200">copied</button>
		{:else}
			<button class="box-border rounded-full bg-black text-orange-200" on:click={bandar_phoneClicked}>
                copy
            </button>
		{/if}
        </div>

</section>
