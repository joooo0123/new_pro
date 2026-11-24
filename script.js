// تأثيرات مشتركة للموقع
const heartsLayer = document.querySelector('.floating-hearts');
if (heartsLayer) {
  const symbols = ['♥','♡','✦','♥'];
  for (let i=0;i<18;i++) {
    const heart=document.createElement('span');
    heart.className='heart'; heart.textContent=symbols[i%symbols.length];
    heart.style.left=Math.random()*100+'%';
    heart.style.fontSize=(12+Math.random()*20)+'px';
    heart.style.animationDuration=(8+Math.random()*10)+'s';
    heart.style.animationDelay=(-Math.random()*15)+'s';
    heartsLayer.appendChild(heart);
  }
}

// شاشة البداية: زري الاختيار متصلين بالصفحات التالية، وزر رفض الطلب يجري في الشاشة.
if (document.body.dataset.page === 'home') {
  const noBtn=document.getElementById('noBtn');
  const yesBtn=document.getElementById('yesBtn');
  const feedback=document.getElementById('homeFeedback');
  let dodges=0;
  noBtn.classList.add('no-dodge');
  const dodge=()=>{
    const rect=noBtn.getBoundingClientRect();
    if (getComputedStyle(noBtn).position !== 'fixed') {
      noBtn.style.position='fixed';
      noBtn.style.left=`${rect.left}px`;
      noBtn.style.top=`${rect.top}px`;
      noBtn.style.margin='0';
      noBtn.style.zIndex='20';
    }

    const margin=16;
    const maxLeft=Math.max(margin,window.innerWidth-rect.width-margin);
    const maxTop=Math.max(margin,window.innerHeight-rect.height-margin);
    noBtn.style.left=`${margin+Math.random()*Math.max(0,maxLeft-margin)}px`;
    noBtn.style.top=`${margin+Math.random()*Math.max(0,maxTop-margin)}px`;
    dodges++;
    const laughs=['يعني متاكده؟','متاكده؟','هنبات هنا النهاردة','جربي تاني'];
    feedback.textContent=laughs[Math.min(dodges-1,laughs.length-1)];
  };
  noBtn.addEventListener('pointerenter',dodge);
  noBtn.addEventListener('touchstart',(event)=>{event.preventDefault();dodge();},{passive:false});
  noBtn.addEventListener('click',()=>{
    feedback.textContent='ولا يهمك  خدي وقتك وقدري ترجعي وقت ما تحبي.';
    noBtn.style.position='';
    noBtn.style.left='';
    noBtn.style.top='';
    noBtn.style.margin='';
    noBtn.style.zIndex='';
    noBtn.style.transform='none';
  });
  yesBtn.addEventListener('click',()=>{ window.location.href='letter.html'; });

  const audio=document.getElementById('bgMusic');
  const toggle=document.getElementById('musicToggle');
  const setPlaying=playing=>{toggle.textContent=playing?'❚❚ إيقاف الموسيقى':'▶ تشغيل الأغنية';};
  const startMusic=async()=>{
    try{await audio.play();setPlaying(true);feedback.textContent='الأغنية شغالة دلوقتي، ودي هدية على راحة قلبك 🎵';}
    catch(e){setPlaying(false);}
  };
  startMusic();
  ['pointerdown','keydown'].forEach(type=>window.addEventListener(type,()=>{if(audio.paused)startMusic();},{once:true,passive:true}));
  toggle.addEventListener('click',async()=>{
    try {
      if(audio.paused){await audio.play();setPlaying(true);}
      else {audio.pause();setPlaying(false);}
    } catch(e) { feedback.textContent='المتصفح منع التشغيل التلقائي، دوسي على زر التشغيل مرة كمان.'; }
  });
}

// رسالة بتظهر حرف حرف - عدّل النص براحتك.
if (document.body.dataset.page === 'letter') {
  const message=`أنا عايز أقولك إني متضايق منك جامد قوي حرفيًا، بس ما علينا يعني.\n\nكنت بتقوليلي إني حاسس إنك مش مهتمة ومش عايز أشوفك، وأنا عايز أقولك إنك دلوقتي باعتي؟ وأنا عارف... بس هبعتلك الـWebsite ده رد ليكي.\n\nأنا لو مش عايزك أووي كده زي ما في دماغك، ههتم ليكِ وأشوف إنك مبتعمليش كذا ومبتعمليش كذا. فكري فيها، أنا لسه زي ما أنا ويمكن متعلق بيكي أكتر من أي مرة، بس مش ببين.\n\nوفي حاجات كتير مينفعش أقولها بقولها قدام. أنا مش باقي على حد، إنتي عندي خط أحمر والله، بس إنتي مش واخدة بالك من حاجة وبتقوليلي إنك عايزة نرجع ساعه الرساله.\n\nبس أنا فعلاً زي ما أنا، وكنت بعرفك كل حاجة عني ومازلت لو صغيرة حصلت بقولها قبل الكبيرة.\n\nبس إنتي أنا بقالي فترة بعرف حاجات مش منك من ناس تانية، وببقى مستنيها منك، بس بسكت عشان مببقاش عارف أقول إيه. وعارف إنك متضايقة مني وزعلانة ساعات الريك رغم إني اتأسفت كتير واتكلمت كتير.\n\nبس فعلاً أنا مش بيبقى قصدي إني أقول كلام كتير، بجد بيبقى كله تراكمات، وساعتها كنتي إنتي بتقوليلي إني بكبر المشكلة رغم إني فعلاً مش بعمل كده.\n\nأنا ببيها ببهتم زيادة وإنتي مش بتاخدي بالك، فبتحسي إنها كبرت، بس يمكن مش عارف أوصلها لكِ.\n\nبس صدقيني إن إحساس وحش. عايزك بعد ما تقراي الرسالة دي تعديلي، وتكوني موعدةيني ما تتأسفيش ولا حاجة.\n\nأنا عامل ده كله عشان أفرحك، وعايز أقولك حاجة... وحشتك. أنا بحبك اوي اوي اوي، وبموت فيكي وبعشقك وبدمنك يا روحي.\n\nربنا يخليكي ليا وما يحرمناش منك، يا غليّة المال، يا رب.\n\nوهبعتلك بوسة بس في الريك، وحقك عليا لو شايلة مني، وأنا آسف.`;
  const target=document.getElementById('typedMessage');
  let i=0;
  const timer=setInterval(()=>{target.textContent+=message[i]||'';i++;if(i>=message.length)clearInterval(timer);},32);
}

// صندوق الهدية
if (document.body.dataset.page === 'surprise') {
  const gift=document.getElementById('giftBtn');
  const message=document.getElementById('giftMessage');
  const next=document.getElementById('nextAfterGift');
  let opened=false;
  gift.addEventListener('click',()=>{
    if(opened)return; opened=true;
    gift.classList.add('open'); gift.querySelector('span').textContent='🎉';
    message.textContent='كنت عايز اقولك انتي الناس يا اغلي الناس بحبك اوي عمتا، ودي هدية صغيرة ليكي. 💖';
    next.classList.remove('hidden');
    for(let i=0;i<18;i++){
      const bit=document.createElement('span');bit.className='heart';bit.textContent=['💗','✨','🌸'][i%3];
      bit.style.left=(20+Math.random()*60)+'%';bit.style.bottom='15%';bit.style.animationDuration=(2+Math.random()*2)+'s';
      heartsLayer?.appendChild(bit);
    }
  });
}

// النهاية: الاختياران واضحان ومحترمان
if (document.body.dataset.page === 'final') {
  document.getElementById('talkBtn').addEventListener('click',()=>{
    document.getElementById('finalReply').textContent='هكون مبسوط إننا نتكلم بهدوء. قوليلي الوقت اللي يناسبك، وأنا هسمعك. 💗';
  });
  document.getElementById('timeBtn').addEventListener('click',()=>{
    document.getElementById('finalReply').textContent='أكيد، خدي كل الوقت اللي محتاجاه. مش مطلوب منك أي رد دلوقتي. 🌷';
  });
}