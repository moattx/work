import { c as create_ssr_component, d as add_attribute, f as each, v as validate_component } from "../../chunks/ssr.js";
const logo = "/_app/immutable/assets/mosajala.C_m_EEDo.png";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <div class="bg-white" data-svelte-h="svelte-1vr64wd"><header class="absolute inset-x-0 top-0 z-50"><nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global"><div class="flex lg:flex-1 text-xl gap-4"><a href="#Contact" class="text-lg font-semibold font-Rubik leading-6 text-gray-900 hover:underline">اتصل بنا</a> <a href="#About Us" class="text-lg font-semibold leading-6 text-gray-900 hover:underline">من نحن</a></div>  <div class="flex lg:flex"><img class="h-12 w-auto"${add_attribute("src", logo, 0)} alt=""></div> </nav>  </header> <div class="relative isolate px-6 pt-14 lg:px-8"><div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true"><div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div></div> <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56"><div class="text-center"><h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">الحل لاحتياجاتك</h1> <p class="mt-6 text-lg leading-8 text-gray-600">.مهمتنا نقل افضل التكنولوجيا والمعرفه لموقعك</p> <div class="mt-10 flex items-center justify-center gap-x-6"><a href="#Contact" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">تواصل معنا</a> <a href="#About Us" class="text-sm font-semibold leading-6 text-gray-900">لمعرفه خدماتنا<span aria-hidden="true">→</span></a></div></div></div> <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true"><div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div></div></div></div>`;
});
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let observedElement;
  const items = [
    [
      "fa fa-info-circle",
      "من نحن",
      ".نحن مجموعة ملتزمون تمامًا بتقديم أفضل التطبيقات التقنية التي يقدمها هذا العالم"
    ],
    [
      "fa fa-eye",
      "رؤيتنا",
      ".أن نكون المزود الرائد للتطبيقات الموثوقة والمبتكرة والفعالة من حيث التكلفة في المملكة العربية السعودية"
    ],
    [
      "fa fa-bullseye",
      "أهدافنا",
      ".مهمتنا هي تقديم تطبيقات عالية الجودة وبأسعار معقولة"
    ]
  ];
  return ` <section id="About Us" class="flex justify-center items-center flex-col bg-gray-200 text-4xl" data-svelte-h="svelte-10k4pfd"><h1>من نحن</h1> <span>..</span></section> ${each(items, (item) => {
    return ` <div class="flex flex-col justify-center items-center box-border h-40 p-4 border-4"${add_attribute("this", observedElement, 0)}>${``} </div>`;
  })}`;
});
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section id="Contact" class="flex flex-col items-end justify-end w-screen bg-orange-200 box-border h-25 p-4 border-4 gap-4"><div class="text-4xl font-extrabold" data-svelte-h="svelte-zjpewf"><h1>تواصل معنا</h1></div> <div class="flex flex-row gap-3">${`<p data-svelte-h="svelte-15rm3r0">contact@mosajla.com.sa</p> <button class="box-border rounded-full bg-black text-orange-200" data-svelte-h="svelte-47hlb0">copy</button>`}</div> <div class="flex flex-row gap-3"><p data-svelte-h="svelte-1kzio5c">553741645</p> ${`<button class="box-border rounded-full bg-black text-orange-200" data-svelte-h="svelte-so3sng">copy</button>`}</div></section>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="flex justify-end content-center w-screen bg-black text-white" data-svelte-h="svelte-aa2lfl"><p>جميع الحقوق محفوظة ,2024, مسجلة</p> </footer>`;
});
const css = {
  code: ".wp-call-button.svelte-ta0m0t{display:block;position:fixed;text-decoration:none;z-index:9999999999;width:60px;height:60px;border-radius:50%;left:50%;margin-left:-30px;bottom:20px;background:url( data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDU5cHgiIGhlaWdodD0iNDU5cHgiIHZpZXdCb3g9IjAgMCA0NTkgNDU5IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NTkgNDU5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGc+PGcgaWQ9ImNhbGwiPjxwYXRoIHN0eWxlPSJmaWxsOiB3aGl0ZTsiIGQ9Ik05MS44LDE5OC45YzM1LjcsNzEuNCw5Ni45LDEzMC4wNSwxNjguMywxNjguM0wzMTYuMiwzMTEuMWM3LjY0OS03LjY0OSwxNy44NS0xMC4xOTksMjUuNS01LjFjMjguMDUsMTAuMiw1OC42NDksMTUuMyw5MS44LDE1LjNjMTUuMywwLDI1LjUsMTAuMiwyNS41LDI1LjV2ODYuN2MwLDE1LjMtMTAuMiwyNS41LTI1LjUsMjUuNUMxOTMuOCw0NTksMCwyNjUuMiwwLDI1LjVDMCwxMC4yLDEwLjIsMCwyNS41LDBoODkuMjVjMTUuMywwLDI1LjUsMTAuMiwyNS41LDI1LjVjMCwzMC42LDUuMSw2MS4yLDE1LjMsOTEuOGMyLjU1LDcuNjUsMCwxNy44NS01LjEsMjUuNUw5MS44LDE5OC45eiIvPjwvZz48L2c+PC9zdmc+ ) center/30px 30px no-repeat #269041 !important}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n\\timport Header from \\"./Header.svelte\\";\\n  import About from \\"./About.svelte\\"\\n  import Contact from \\"./Contact.svelte\\";\\n  import Footer from \\"./Footer.svelte\\";\\n  let mobile = false;\\n  console.log(navigator.userAgent)\\n  if (navigator.userAgent.includes(\\"iPhone\\")){\\n    mobile = true;\\n  }\\n\\n<\/script>\\n\\n\\n\\n<Header />\\n\\n<About />\\n<Contact />\\n<Footer />\\n\\n{#if mobile}\\n<a class=\\"wp-call-button\\" href=\\"tel:+966561098877\\"></a>\\n{/if}\\n\\n<style>\\n.wp-call-button {\\n\\tdisplay: block;\\n\\tposition: fixed;\\n\\ttext-decoration: none;\\n\\tz-index: 9999999999;\\n\\twidth: 60px;\\n\\theight: 60px;\\n\\tborder-radius: 50%;\\n\\t/* transform: scale(0.8); */\\n\\tleft: 50%;\\n\\tmargin-left: -30px;\\n\\tbottom: 20px;\\n\\tbackground: url( data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDU5cHgiIGhlaWdodD0iNDU5cHgiIHZpZXdCb3g9IjAgMCA0NTkgNDU5IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NTkgNDU5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGc+PGcgaWQ9ImNhbGwiPjxwYXRoIHN0eWxlPSJmaWxsOiB3aGl0ZTsiIGQ9Ik05MS44LDE5OC45YzM1LjcsNzEuNCw5Ni45LDEzMC4wNSwxNjguMywxNjguM0wzMTYuMiwzMTEuMWM3LjY0OS03LjY0OSwxNy44NS0xMC4xOTksMjUuNS01LjFjMjguMDUsMTAuMiw1OC42NDksMTUuMyw5MS44LDE1LjNjMTUuMywwLDI1LjUsMTAuMiwyNS41LDI1LjV2ODYuN2MwLDE1LjMtMTAuMiwyNS41LTI1LjUsMjUuNUMxOTMuOCw0NTksMCwyNjUuMiwwLDI1LjVDMCwxMC4yLDEwLjIsMCwyNS41LDBoODkuMjVjMTUuMywwLDI1LjUsMTAuMiwyNS41LDI1LjVjMCwzMC42LDUuMSw2MS4yLDE1LjMsOTEuOGMyLjU1LDcuNjUsMCwxNy44NS01LjEsMjUuNUw5MS44LDE5OC45eiIvPjwvZz48L2c+PC9zdmc+ ) center/30px 30px no-repeat #269041 !important;\\n}\\n</style>"],"names":[],"mappings":"AA0BA,6BAAgB,CACf,OAAO,CAAE,KAAK,CACd,QAAQ,CAAE,KAAK,CACf,eAAe,CAAE,IAAI,CACrB,OAAO,CAAE,UAAU,CACnB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,GAAG,CAElB,IAAI,CAAE,GAAG,CACT,WAAW,CAAE,KAAK,CAClB,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,y1BAAy1B,CAAC,MAAM,CAAC,IAAI,CAAC,IAAI,CAAC,SAAS,CAAC,OAAO,CAAC,UAC14B"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let mobile = false;
  console.log(navigator.userAgent);
  if (navigator.userAgent.includes("iPhone")) {
    mobile = true;
  }
  $$result.css.add(css);
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})} ${validate_component(About, "About").$$render($$result, {}, {}, {})} ${validate_component(Contact, "Contact").$$render($$result, {}, {}, {})} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})} ${mobile ? `<a class="wp-call-button svelte-ta0m0t" href="tel:+966561098877"></a>` : ``}`;
});
export {
  Page as default
};
