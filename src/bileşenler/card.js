import axios from "axios";
const Card = (makale) => {
  // GÖREV 5
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //   <div class="headline">{ anabaslik }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ yazarFoto }>
  //     </div>
  //     <span>{ yazarAdı } tarafından</span>
  //   </div>
  // </div>
  //
  const divCard = document.createElement('div');
  divCard.className = 'card';
  const divHeadline = document.createElement('div');
  divHeadline.className = 'headline';
  divHeadline.textContent = makale.anabaslik;
  divCard.append(divHeadline);
  const divAuthor = document.createElement('div');
  divAuthor.className = 'author';
  divCard.append(divAuthor);
  const divImgContainer = document.createElement('div');
  divImgContainer.className = 'img-container';
  divAuthor.append(divImgContainer);
  const imgYazar = document.createElement('img');
  imgYazar.src = makale.yazarFoto;
  divImgContainer.append(imgYazar);
  const spanYazar = document.createElement('span');
  spanYazar.textContent = `${makale.yazarAdi} tarafindan`;
  divAuthor.append(spanYazar);
  divCard.addEventListener('click',(event) => {
    console.log(divHeadline.textContent);
  });
  return divCard;
}

const cardEkleyici = async (secici) => {
  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //
  try {
    const secilen = document.querySelector(secici);
    const response = await axios.get('http://localhost:5001/api/makaleler');
    console.log(response)
    const makaleler = response.data.makaleler;
    for (let konu in makaleler) {
      makaleler[konu].forEach(element => secilen.append(Card(element)));
    }
  } catch (error) {
    console.log(error);
  }
}

export { Card, cardEkleyici }
