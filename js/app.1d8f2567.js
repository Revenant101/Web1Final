(function(){var a={8013:function(a,e,n){n(4114),function(){const a=!0===window.matchMedia("(prefers-reduced-motion: reduce)")||!0===window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(a)return;const e=document.createElement("div");let n=32,s=32,o=0,d=0,t=0,g=0,l=null,c=0;const i=20,p={idle:[[-3,-3]],alert:[[-7,-3]],scratchSelf:[[-5,0],[-6,0],[-7,0]],scratchWallN:[[0,0],[0,-1]],scratchWallS:[[-7,-1],[-6,-2]],scratchWallE:[[-2,-2],[-2,-3]],scratchWallW:[[-4,0],[-4,-1]],tired:[[-3,-2]],sleeping:[[-2,0],[-2,-1]],N:[[-1,-2],[-1,-3]],NE:[[0,-2],[0,-3]],E:[[-3,0],[-3,-1]],SE:[[-5,-1],[-5,-2]],S:[[-6,-3],[-7,-2]],SW:[[-5,-3],[-6,-1]],W:[[-4,-2],[-4,-3]],NW:[[-1,0],[-1,-1]]};function r(){e.id="oneko",e.ariaHidden=!0,e.style.width="32px",e.style.height="32px",e.style.position="fixed",e.style.pointerEvents="none",e.style.imageRendering="pixelated",e.style.left=n-16+"px",e.style.top=s-16+"px",e.style.zIndex=2147483647;let a="/rainbowCat.gif";e.style.backgroundSize="contain";const t=document.currentScript;t&&t.dataset.cat&&(a=t.dataset.cat),e.style.backgroundImage=`url(${a})`,document.body.appendChild(e),document.addEventListener("mousemove",(function(a){o=a.clientX,d=a.clientY})),window.requestAnimationFrame(m)}let h;function m(a){e.isConnected&&(h||(h=a),a-h>100&&(h=a,j()),window.requestAnimationFrame(m))}function u(a,n){const s=p[a][n%p[a].length];e.style.backgroundPosition=`${32*s[0]}px ${32*s[1]}px`}function f(){l=null,c=0}function _(){if(g+=1,g>10&&0==Math.floor(200*Math.random())&&null==l){let a=["sleeping","scratchSelf"];n<32&&a.push("scratchWallW"),s<32&&a.push("scratchWallN"),n>window.innerWidth-32&&a.push("scratchWallE"),s>window.innerHeight-32&&a.push("scratchWallS"),l=a[Math.floor(Math.random()*a.length)]}switch(l){case"sleeping":if(c<8){u("tired",0);break}u("sleeping",Math.floor(c/4)),c>192&&f();break;case"scratchWallN":case"scratchWallS":case"scratchWallE":case"scratchWallW":case"scratchSelf":u(l,c),c>9&&f();break;default:return void u("idle",0)}c+=1}function j(){t+=1;const a=n-o,p=s-d,r=Math.sqrt(a**2+p**2);if(r<10)return void _();if(l=null,c=0,g>1)return u("alert",0),g=Math.min(g,7),void(g-=1);let h;h=p/r>.5?"N":"",h+=p/r<-.5?"S":"",h+=a/r>.5?"W":"",h+=a/r<-.5?"E":"",u(h,t),n-=a/r*i,s-=p/r*i,n=Math.min(Math.max(16,n),window.innerWidth-16),s=Math.min(Math.max(16,s),window.innerHeight-16),e.style.left=n-16+"px",e.style.top=s-16+"px"}r()}()},3736:function(a,e,n){"use strict";var s=n(5130),o=n(6768);function d(a,e,n,s,d,t){const g=(0,o.g2)("router-link"),l=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.Lk)("nav",null,[(0,o.bF)(g,{to:"/"},{default:(0,o.k6)((()=>e[0]||(e[0]=[(0,o.eW)("Games")]))),_:1}),e[4]||(e[4]=(0,o.eW)(" | ")),(0,o.bF)(g,{to:"/test"},{default:(0,o.k6)((()=>e[1]||(e[1]=[(0,o.eW)("League of Legends")]))),_:1}),e[5]||(e[5]=(0,o.eW)(" | ")),(0,o.bF)(g,{to:"/catTest"},{default:(0,o.k6)((()=>e[2]||(e[2]=[(0,o.eW)("Cats")]))),_:1}),e[6]||(e[6]=(0,o.eW)(" | ")),(0,o.bF)(g,{to:"/rainbowCat"},{default:(0,o.k6)((()=>e[3]||(e[3]=[(0,o.eW)("Secret Rainbow Cat")]))),_:1})]),(0,o.bF)(l)],64)}var t=n(8013),g=n.n(t),l=n(1241);const c=(0,l.A)(g(),[["render",d]]);var i=c,p=n(1387),r=n(4232);const h={id:"app"},m={key:0},u={key:1},f={key:2},_={class:"images"},j=["src"];function k(a,e,n,d,t,g){return(0,o.uX)(),(0,o.CE)("div",h,[e[12]||(e[12]=(0,o.Lk)("h1",null,"Cat Facts and Breeds",-1)),(0,o.Lk)("div",null,[e[6]||(e[6]=(0,o.Lk)("label",{for:"facts-number"},"Number of Cat Facts:",-1)),(0,o.bo)((0,o.Lk)("input",{type:"number","onUpdate:modelValue":e[0]||(e[0]=a=>t.factsCount=a),id:"facts-number"},null,512),[[s.Jo,t.factsCount]]),(0,o.Lk)("button",{onClick:e[1]||(e[1]=(...a)=>g.getCatFacts&&g.getCatFacts(...a))},"Get Cat Facts")]),t.catFacts.length?((0,o.uX)(),(0,o.CE)("div",m,[e[7]||(e[7]=(0,o.Lk)("h2",null,"Cat Facts",-1)),(0,o.Lk)("ul",null,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(t.catFacts,((a,e)=>((0,o.uX)(),(0,o.CE)("li",{key:e},(0,r.v_)(a.text),1)))),128))])])):(0,o.Q3)("",!0),(0,o.Lk)("div",null,[e[8]||(e[8]=(0,o.Lk)("label",{for:"breeds-number"},"Number of Cat Breeds:",-1)),(0,o.bo)((0,o.Lk)("input",{type:"number","onUpdate:modelValue":e[2]||(e[2]=a=>t.breedsCount=a),id:"breeds-number"},null,512),[[s.Jo,t.breedsCount]]),(0,o.Lk)("button",{onClick:e[3]||(e[3]=(...a)=>g.getCatBreeds&&g.getCatBreeds(...a))},"Get Cat Breeds")]),t.catBreeds.length?((0,o.uX)(),(0,o.CE)("div",u,[e[9]||(e[9]=(0,o.Lk)("h2",null,"Cat Breeds",-1)),(0,o.Lk)("ul",null,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(t.catBreeds,((a,e)=>((0,o.uX)(),(0,o.CE)("li",{key:e},(0,r.v_)(a),1)))),128))])])):(0,o.Q3)("",!0),(0,o.Lk)("div",null,[e[10]||(e[10]=(0,o.Lk)("label",{for:"breed-search"},"Enter Cat Breed or Search Term:",-1)),(0,o.bo)((0,o.Lk)("input",{type:"text","onUpdate:modelValue":e[4]||(e[4]=a=>t.breedSearchQuery=a),id:"breed-search"},null,512),[[s.Jo,t.breedSearchQuery]]),(0,o.Lk)("button",{onClick:e[5]||(e[5]=(...a)=>g.getCatBreedImages&&g.getCatBreedImages(...a))},"Search Cat Breed Images")]),t.catBreedImages.length?((0,o.uX)(),(0,o.CE)("div",f,[e[11]||(e[11]=(0,o.Lk)("h2",null,"Cat Breed Images",-1)),(0,o.Lk)("div",_,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(t.catBreedImages,((a,e)=>((0,o.uX)(),(0,o.CE)("img",{key:e,src:a.urls.small,alt:"Cat breed image"},null,8,j)))),128))])])):(0,o.Q3)("",!0)])}n(1454);var v=n(4373),b={data(){return{factsCount:1,breedsCount:1,catFacts:[],catBreeds:[],breedSearchQuery:"",catBreedImages:[]}},methods:{async getCatFacts(){try{const a=await v.A.get(`https://catfact.ninja/facts?limit=${this.factsCount}`);a.data&&Array.isArray(a.data.data)?this.catFacts=a.data.data:console.error("Unexpected response structure:",a)}catch(a){console.error("Error fetching cat facts:",a)}},async getCatBreeds(){try{const a=await v.A.get("https://api.thecatapi.com/v1/breeds");if(a.data&&Array.isArray(a.data)){const e=a.data,n=e.sort((()=>Math.random()-.5));this.catBreeds=n.slice(0,this.breedsCount).map((a=>a.name))}else console.error("Unexpected response structure:",a)}catch(a){console.error("Error fetching cat breeds:",a)}},async getCatBreedImages(){const a=this.breedSearchQuery.trim();if(a)try{const e=await v.A.get(`https://api.unsplash.com/photos?query=${a}&client_id=YOUR_UNSPLASH_API_KEY`);this.catBreedImages=e.data}catch(e){console.error("Error fetching cat breed images:",e)}else alert("Please enter a search term.")}}};const y=(0,l.A)(b,[["render",k]]);var C=y;const L={class:""},S={key:0,class:"wrapper"},w={class:"lookup"},F={class:"image-container-lookup"},E=["src","alt"],B={key:1,class:"no-image"};function A(a,e,n,d,t,g){return(0,o.uX)(),(0,o.CE)(o.FK,null,[e[4]||(e[4]=(0,o.Fv)('<h1 data-v-1bd0ad76>My Favorite Champions</h1><div class="mainDiv" data-v-1bd0ad76><div class="favorite" data-v-1bd0ad76><div class="wrapper" data-v-1bd0ad76><div class="image-container" data-v-1bd0ad76><img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Twitch_4.jpg" alt="" data-v-1bd0ad76></div><div class="image-container" data-v-1bd0ad76><img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Draven_20.jpg" alt="" data-v-1bd0ad76></div></div></div></div><div class="mainDiv" data-v-1bd0ad76><div class="favorite" data-v-1bd0ad76><div class="wrapper" data-v-1bd0ad76><div class="image-container" data-v-1bd0ad76><img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Teemo_27.jpg" alt="" data-v-1bd0ad76></div><div class="image-container" data-v-1bd0ad76><img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Smolder_0.jpg" alt="" data-v-1bd0ad76></div></div></div></div>',3)),(0,o.Lk)("div",L,[e[3]||(e[3]=(0,o.Lk)("h1",null,"Champion Splash Art Lookup",-1)),(0,o.bo)((0,o.Lk)("input",{"onUpdate:modelValue":e[0]||(e[0]=a=>t.championName=a),placeholder:"Enter a champion name",onKeyup:e[1]||(e[1]=(0,s.jR)(((...a)=>g.updateImage&&g.updateImage(...a)),["enter"]))},null,544),[[s.Jo,t.championName]]),t.imageUrl?((0,o.uX)(),(0,o.CE)("div",S,[(0,o.Lk)("div",w,[(0,o.Lk)("div",F,[(0,o.Lk)("img",{src:t.imageUrl,alt:t.championName},null,8,E)])])])):((0,o.uX)(),(0,o.CE)("div",B,e[2]||(e[2]=[(0,o.Lk)("p",null,"No image found. Please enter a valid champion name.",-1)])))]),e[5]||(e[5]=(0,o.Lk)("body",{class:"page2"},[(0,o.Lk)("div",{class:"bg1"}),(0,o.Lk)("div",{class:"bg1 bg2"}),(0,o.Lk)("div",{class:"bg1 bg3"})],-1))],64)}var K={name:"ChampionImageLookup",data(){return{championName:"",imageUrl:"",champions:{Aatrox:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg",Ahri:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg",Akali:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_0.jpg",Akshan:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akshan_0.jpg",Alistar:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_0.jpg",Ambessa:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ambessa_0.jpg",Amumu:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_0.jpg",Anivia:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_0.jpg",Annie:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_0.jpg",Aphelios:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aphelios_0.jpg",Ashe:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_0.jpg",AurelionSol:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/AurelionSol_0.jpg",Aurora:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aurora_0.jpg",Azir:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Azir_0.jpg",Bard:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Bard_0.jpg",Belveth:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Belveth_0.jpg",Blitzcrank:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Blitzcrank_0.jpg",Brand:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Brand_0.jpg",Braum:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Braum_0.jpg",Briar:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Briar_0.jpg",Caitlyn:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_0.jpg",Camille:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Camille_0.jpg",Cassiopeia:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Cassiopeia_0.jpg",Chogath:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Chogath_0.jpg",Corki:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Corki_0.jpg",Darius:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_0.jpg",Diana:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Diana_0.jpg",Draven:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Draven_0.jpg",DrMundo:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/DrMundo_0.jpg",Ekko:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ekko_0.jpg",Elise:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Elise_0.jpg",Evelynn:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Evelynn_0.jpg",Ezreal:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ezreal_0.jpg",Fiddlesticks:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Fiddlesticks_0.jpg",Fiora:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Fiora_0.jpg",Fizz:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Fizz_0.jpg",Galio:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Galio_0.jpg",Gangplank:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gangplank_0.jpg",Garen:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Garen_0.jpg",Gnar:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gnar_0.jpg",Gragas:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gragas_0.jpg",Graves:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Graves_0.jpg",Gwen:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gwen_0.jpg",Hecarim:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Hecarim_0.jpg",Heimerdinger:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Heimerdinger_0.jpg",Hwei:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Hwei_0.jpg",Illaoi:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Illaoi_0.jpg",Irelia:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Irelia_0.jpg",Ivern:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ivern_0.jpg",Janna:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Janna_0.jpg",JarvanIV:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/JarvanIV_0.jpg",Jax:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jax_0.jpg",Jayce:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jayce_0.jpg",Jhin:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jhin_0.jpg",Jinx:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jinx_0.jpg",Kaisa:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kaisa_0.jpg",Kalista:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kalista_0.jpg",Karma:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Karma_0.jpg",Karthus:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Karthus_0.jpg",Kassadin:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kassadin_0.jpg",Katarina:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Katarina_0.jpg",Kayle:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kayle_0.jpg",Kayn:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kayn_0.jpg",Kennen:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kennen_0.jpg",Khazix:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Khazix_0.jpg",Kindred:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kindred_0.jpg",Kled:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kled_0.jpg",KogMaw:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/KogMaw_0.jpg",KSante:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/KSante_0.jpg",Leblanc:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Leblanc_0.jpg",LeeSin:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/LeeSin_0.jpg",Leona:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Leona_0.jpg",Lillia:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lillia_0.jpg",Lissandra:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lissandra_0.jpg",Lucian:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lucian_0.jpg",Lulu:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lulu_0.jpg",Lux:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_0.jpg",Malphite:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Malphite_0.jpg",Malzahar:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Malzahar_0.jpg",Maokai:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Maokai_0.jpg",MasterYi:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/MasterYi_0.jpg",Milio:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Milio_0.jpg",MissFortune:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/MissFortune_0.jpg",MonkeyKing:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/MonkeyKing_0.jpg",Mordekaiser:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Mordekaiser_0.jpg",Morgana:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Morgana_0.jpg",Naafiri:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Naafiri_0.jpg",Nami:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nami_0.jpg",Nasus:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nasus_0.jpg",Nautilus:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nautilus_0.jpg",Neeko:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Neeko_0.jpg",Nidalee:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nidalee_0.jpg",Nilah:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nilah_0.jpg",Nocturne:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nocturne_0.jpg",Nunu:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nunu_0.jpg",Olaf:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Olaf_0.jpg",Orianna:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Orianna_0.jpg",Ornn:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ornn_0.jpg",Pantheon:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Pantheon_0.jpg",Poppy:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Poppy_0.jpg",Pyke:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Pyke_0.jpg",Qiyana:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Qiyana_0.jpg",Quinn:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Quinn_0.jpg",Rakan:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rakan_0.jpg",Rammus:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rammus_0.jpg",RekSai:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/RekSai_0.jpg",Rell:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rell_0.jpg",Renata:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Renata_0.jpg",Renekton:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Renekton_0.jpg",Rengar:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rengar_0.jpg",Riven:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Riven_0.jpg",Rumble:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rumble_0.jpg",Ryze:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ryze_0.jpg",Samira:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Samira_0.jpg",Sejuani:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sejuani_0.jpg",Senna:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Senna_0.jpg",Seraphine:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Seraphine_0.jpg",Sett:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sett_0.jpg",Shaco:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Shaco_0.jpg",Shen:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Shen_0.jpg",Shyvana:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Shyvana_0.jpg",Singed:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Singed_0.jpg",Sion:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sion_0.jpg",Sivir:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sivir_0.jpg",Skarner:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Skarner_0.jpg",Smolder:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Smolder_0.jpg",Sona:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sona_0.jpg",Soraka:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Soraka_0.jpg",Swain:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Swain_0.jpg",Sylas:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sylas_0.jpg",Syndra:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Syndra_0.jpg",TahmKench:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/TahmKench_0.jpg",Taliyah:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Taliyah_0.jpg",Talon:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Talon_0.jpg",Taric:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Taric_0.jpg",Teemo:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Teemo_0.jpg",Thresh:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Thresh_0.jpg",Tristana:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Tristana_0.jpg",Trundle:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Trundle_0.jpg",Tryndamere:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Tryndamere_0.jpg",TwistedFate:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/TwistedFate_0.jpg",Twitch:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Twitch_0.jpg",Udyr:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Udyr_0.jpg",Urgot:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Urgot_0.jpg",Varus:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Varus_0.jpg",Vayne:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Vayne_0.jpg",Veigar:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Veigar_0.jpg",Velkoz:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Velkoz_0.jpg",Vex:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Vex_0.jpg",Vi:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Vi_0.jpg",Viego:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Viego_0.jpg",Viktor:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Viktor_0.jpg",Vladimir:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Vladimir_0.jpg",Volibear:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Volibear_0.jpg",Warwick:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Warwick_0.jpg",Xayah:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Xayah_0.jpg",Xerath:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Xerath_0.jpg",XinZhao:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/XinZhao_0.jpg",Yasuo:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg",Yone:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yone_0.jpg",Yorick:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yorick_0.jpg",Yuumi:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yuumi_0.jpg",Zac:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zac_0.jpg",Zed:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_0.jpg",Zeri:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zeri_0.jpg",Ziggs:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ziggs_0.jpg",Zilean:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zilean_0.jpg",Zoe:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zoe_0.jpg",Zyra:"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zyra_0.jpg"}}},methods:{updateImage(){this.imageUrl=this.champions[this.championName]||""}}};const M=(0,l.A)(K,[["render",A],["__scopeId","data-v-1bd0ad76"]]);var X=M;const x={id:"app"},I={class:"board"},T=["onClick"],N={key:0,class:"status"},W={key:1,class:"status"};function V(a,e,n,s,d,t){return(0,o.uX)(),(0,o.CE)(o.FK,null,[e[1]||(e[1]=(0,o.Lk)("div",{class:"about"},[(0,o.Lk)("h1",null,"Tic-Tac-Toe")],-1)),(0,o.Lk)("div",x,[(0,o.Lk)("div",I,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(d.board,((a,e)=>((0,o.uX)(),(0,o.CE)("div",{key:e,class:"cell",onClick:a=>t.makeMove(e)},[(0,o.Lk)("span",{class:(0,r.C4)({"x-piece":"X"===a,"o-piece":"O"===a})},(0,r.v_)(a),3)],8,T)))),128))]),d.winner?((0,o.uX)(),(0,o.CE)("p",N,(0,r.v_)(d.winner)+" wins!",1)):t.isBoardFull()?((0,o.uX)(),(0,o.CE)("p",W,"It's a draw!")):(0,o.Q3)("",!0),(0,o.Lk)("button",{onClick:e[0]||(e[0]=(...a)=>t.resetGame&&t.resetGame(...a)),class:"reset-btn"},"Reset Game")]),e[2]||(e[2]=(0,o.Lk)("body",{class:"page2"},[(0,o.Lk)("div",{class:"bg1"}),(0,o.Lk)("div",{class:"bg1 bg2"}),(0,o.Lk)("div",{class:"bg1 bg3"})],-1))],64)}n(8992),n(3215);var R={data(){return{board:Array(9).fill(null),currentPlayer:"X",winner:null}},methods:{makeMove(a){this.board[a]||this.winner||(this.board[a]=this.currentPlayer,this.checkWin(this.currentPlayer)?this.winner=this.currentPlayer:this.currentPlayer="X"===this.currentPlayer?"O":"X")},checkWin(a){const e=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];return e.some((e=>e.every((e=>this.board[e]===a))))},isBoardFull(){return this.board.every((a=>null!==a))},resetGame(){this.board=Array(9).fill(null),this.currentPlayer="X",this.winner=null}}};const G=(0,l.A)(R,[["render",V]]);var O=G;const P={class:"container"},z={class:"cat-facts-container"},J={class:"input-container"},U={key:0,class:"facts-container"},Z={class:"fact-list"},Q={class:"cat-breeds-container"},D={class:"input-container"},Y={key:0,class:"breeds-container"},H={class:"breed-list"};function $(a,e,n,d,t,g){return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.Lk)("div",P,[(0,o.Lk)("div",z,[e[5]||(e[5]=(0,o.Lk)("h1",{class:"title"},"Cat Facts",-1)),(0,o.Lk)("div",J,[e[4]||(e[4]=(0,o.Lk)("label",{for:"numFacts",class:"input-label"},"Enter the number of cat facts you would like:",-1)),(0,o.bo)((0,o.Lk)("input",{type:"number",id:"numFacts","onUpdate:modelValue":e[0]||(e[0]=a=>t.numFacts=a),min:"1",max:"100",class:"input-field",placeholder:"Enter a number"},null,512),[[s.Jo,t.numFacts]]),(0,o.Lk)("button",{onClick:e[1]||(e[1]=(...a)=>g.getCatFacts&&g.getCatFacts(...a)),class:"get-facts-btn"},"Get Facts")]),t.catFacts.length>0?((0,o.uX)(),(0,o.CE)("div",U,[(0,o.Lk)("ul",Z,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(t.catFacts,((a,e)=>((0,o.uX)(),(0,o.CE)("li",{key:e,class:"fact-item"},(0,r.v_)(a),1)))),128))])])):(0,o.Q3)("",!0)]),(0,o.Lk)("div",Q,[e[7]||(e[7]=(0,o.Lk)("h1",{class:"title"},"Cat Breeds",-1)),(0,o.Lk)("div",D,[e[6]||(e[6]=(0,o.Lk)("label",{for:"numBreeds",class:"input-label"},"Enter the number of cat breeds you would like:",-1)),(0,o.bo)((0,o.Lk)("input",{type:"number",id:"numBreeds","onUpdate:modelValue":e[2]||(e[2]=a=>t.numBreeds=a),min:"1",max:"100",class:"input-field",placeholder:"Enter a number"},null,512),[[s.Jo,t.numBreeds]]),(0,o.Lk)("button",{onClick:e[3]||(e[3]=(...a)=>g.getCatBreeds&&g.getCatBreeds(...a)),class:"get-breeds-btn"},"Get Breeds")]),t.catBreeds.length>0?((0,o.uX)(),(0,o.CE)("div",Y,[(0,o.Lk)("ul",H,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(t.catBreeds,((a,e)=>((0,o.uX)(),(0,o.CE)("li",{key:e,class:"breed-item"},(0,r.v_)(a.name)+" - "+(0,r.v_)(a.origin),1)))),128))])])):(0,o.Q3)("",!0)])]),e[8]||(e[8]=(0,o.Lk)("body",{class:"page2"},[(0,o.Lk)("div",{class:"bg1"}),(0,o.Lk)("div",{class:"bg1 bg2"}),(0,o.Lk)("div",{class:"bg1 bg3"})],-1))],64)}n(4114);var q={data(){return{numFacts:1,catFacts:[],numBreeds:1,catBreeds:[]}},methods:{async getCatFacts(){this.catFacts=[];try{for(let a=0;a<this.numFacts;a++){const a=await v.A.get("https://catfact.ninja/fact");this.catFacts.push(a.data.fact)}}catch(a){console.error("Error fetching cat facts:",a)}},async getCatBreeds(){this.catBreeds=[];try{const a=await v.A.get("https://api.thecatapi.com/v1/breeds"),e=a.data;for(let n=0;n<this.numBreeds;n++){const a=e[Math.floor(Math.random()*e.length)];this.catBreeds.push(a)}}catch(a){console.error("Error fetching cat breeds:",a)}}}};const aa=(0,l.A)(q,[["render",$],["__scopeId","data-v-3ec04996"]]);var ea=aa;const na={class:"wrap sendRainBack"};function sa(a,e,n,s,d,t){return(0,o.uX)(),(0,o.CE)(o.FK,null,[e[0]||(e[0]=(0,o.Lk)("body",{class:"page2 sendDiagonalBack"},[(0,o.Lk)("div",{class:"bg1"}),(0,o.Lk)("div",{class:"bg1 bg2"}),(0,o.Lk)("div",{class:"bg1 bg3"})],-1)),(0,o.Lk)("div",na,[((0,o.uX)(),(0,o.CE)(o.FK,null,(0,o.pI)(144,(a=>(0,o.Lk)("div",{key:a,class:"c"}))),64))]),e[1]||(e[1]=(0,o.Lk)("div",null,[(0,o.Lk)("img",{src:"rainbowCat.gif",alt:""}),(0,o.Lk)("img",{src:"rainbowCat.gif",alt:""})],-1)),e[2]||(e[2]=(0,o.Lk)("div",null,[(0,o.Lk)("img",{src:"rainbowCat.gif",alt:""}),(0,o.Lk)("img",{src:"rainbowCat.gif",alt:""})],-1))],64)}var oa={name:"DivWrapper"};const da=(0,l.A)(oa,[["render",sa],["__scopeId","data-v-28b96dd2"]]);var ta=da;const ga=[{path:"/home",name:"home",component:C},{path:"/",name:"about",component:O},{path:"/test",name:"test",component:X},{path:"/catTest",name:"catTest",component:ea},{path:"/rainbowCat",name:"rainbowCat",component:ta}],la=(0,p.aE)({history:(0,p.LA)("/Web1Final/"),routes:ga});var ca=la;(0,s.Ef)(i).use(ca).mount("#app")}},e={};function n(s){var o=e[s];if(void 0!==o)return o.exports;var d=e[s]={exports:{}};return a[s].call(d.exports,d,d.exports,n),d.exports}n.m=a,function(){var a=[];n.O=function(e,s,o,d){if(!s){var t=1/0;for(i=0;i<a.length;i++){s=a[i][0],o=a[i][1],d=a[i][2];for(var g=!0,l=0;l<s.length;l++)(!1&d||t>=d)&&Object.keys(n.O).every((function(a){return n.O[a](s[l])}))?s.splice(l--,1):(g=!1,d<t&&(t=d));if(g){a.splice(i--,1);var c=o();void 0!==c&&(e=c)}}return e}d=d||0;for(var i=a.length;i>0&&a[i-1][2]>d;i--)a[i]=a[i-1];a[i]=[s,o,d]}}(),function(){n.n=function(a){var e=a&&a.__esModule?function(){return a["default"]}:function(){return a};return n.d(e,{a:e}),e}}(),function(){n.d=function(a,e){for(var s in e)n.o(e,s)&&!n.o(a,s)&&Object.defineProperty(a,s,{enumerable:!0,get:e[s]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){n.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)}}(),function(){n.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})}}(),function(){var a={524:0};n.O.j=function(e){return 0===a[e]};var e=function(e,s){var o,d,t=s[0],g=s[1],l=s[2],c=0;if(t.some((function(e){return 0!==a[e]}))){for(o in g)n.o(g,o)&&(n.m[o]=g[o]);if(l)var i=l(n)}for(e&&e(s);c<t.length;c++)d=t[c],n.o(a,d)&&a[d]&&a[d][0](),a[d]=0;return n.O(i)},s=self["webpackChunkproject_final"]=self["webpackChunkproject_final"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=n.O(void 0,[504],(function(){return n(3736)}));s=n.O(s)})();
//# sourceMappingURL=app.1d8f2567.js.map