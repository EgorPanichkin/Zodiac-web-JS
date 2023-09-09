document.querySelector('.bt').addEventListener('click', () => {
  let dayCorrect = Number(document.querySelector('.day').value);
  let monthCorrect = document.querySelector('.month').value.toLowerCase();

  console.log(dayCorrect);
  console.log(monthCorrect);

  if ((dayCorrect >= 20 && dayCorrect <= 31 && monthCorrect === 'январь') || (monthCorrect === 'февраль' && dayCorrect <= 19)) {
    let sign = 'водолей'
    let block = document.querySelector('.image')
    block.style.backgroundImage = "url(img/aquarius.svg)";
    console.log(sign);
    document.querySelector('.out').innerHTML = 'Ваш знак зодиака ' + sign;
  } else if ((dayCorrect >= 20 && dayCorrect <= 29 && monthCorrect === 'февраль') || (monthCorrect === 'март' && dayCorrect <= 20)) {
    let sign = 'рыбы'
    let block = document.querySelector('.image')
    block.style.backgroundImage = "url(img/pisces.svg)";
    console.log(sign);
    document.querySelector('.out').innerHTML = 'Ваш знак зодиака ' + sign;
  } else if ((dayCorrect >= 21 && dayCorrect <= 31 && monthCorrect === 'март') || (monthCorrect === 'апрель' && dayCorrect <= 20)) {
    let sign = 'овен'
    let block = document.querySelector('.image')
    block.style.backgroundImage = "url(img/aries.svg)";
    console.log(sign);
    document.querySelector('.out').innerHTML = 'Ваш знак зодиака ' + sign;
  } else if ((dayCorrect >= 21 && dayCorrect <= 30 && monthCorrect === 'апрель') || (monthCorrect === 'май' && dayCorrect <= 21)) {
    let sign = 'телец'
    let block = document.querySelector('.image')
    block.style.backgroundImage = "url(img/taurus.svg)";
    console.log(sign);
    document.querySelector('.out').innerHTML = 'Ваш знак зодиака ' + sign;
  } else if ((dayCorrect >= 22 && dayCorrect <= 31 && monthCorrect === 'май') || (monthCorrect === 'июнь' && dayCorrect <= 21)) {
    let sign = 'близнецы'
    let block = document.querySelector('.image')
    block.style.backgroundImage = "url(img/gemini.svg)";
    console.log(sign);
    document.querySelector('.out').innerHTML = 'Ваш знак зодиака ' + sign;
  } else if ((dayCorrect >= 22 && dayCorrect <= 30 && monthCorrect === 'июнь') || (monthCorrect === 'июль' && dayCorrect <= 22)) {
    let sign = 'рак'
    let block = document.querySelector('.image')
    block.style.backgroundImage = "url(img/cancer.svg)";
    console.log(sign);
    document.querySelector('.out').innerHTML = 'Ваш знак зодиака ' + sign;
  } else if ((dayCorrect >= 23 && dayCorrect <= 31 && monthCorrect === 'июль') || (monthCorrect === 'август' && dayCorrect <= 21)) {
    let sign = 'лев'
    let block = document.querySelector('.image')
    block.style.backgroundImage = "url(img/leo.svg)";
    console.log(sign);
    document.querySelector('.out').innerHTML = 'Ваш знак зодиака ' + sign;
  } else if ((dayCorrect >= 22 && dayCorrect <= 31 && monthCorrect === 'август') || (monthCorrect === 'сентябрь' && dayCorrect <= 23)) {
    let sign = 'дева'
    let block = document.querySelector('.image')
    block.style.backgroundImage = "url(img/virgo.svg)";
    console.log(sign);
    document.querySelector('.out').innerHTML = 'Ваш знак зодиака ' + sign;
  } else if ((dayCorrect >= 24 && dayCorrect <= 30 && monthCorrect === 'сентябрь') || (monthCorrect === 'октябрь' && dayCorrect <= 23)) {
    let sign = 'весы'
    let block = document.querySelector('.image')
    block.style.backgroundImage = "url(img/libra.svg)";
    console.log(sign);
    document.querySelector('.out').innerHTML = 'Ваш знак зодиака ' + sign;
  } else if ((dayCorrect >= 24 && dayCorrect <= 31 && monthCorrect === 'октябрь') || (monthCorrect === 'ноябрь' && dayCorrect <= 22)) {
    let sign = 'скорпион'
    let block = document.querySelector('.image')
    block.style.backgroundImage = "url(img/scorpio.svg)";
    console.log(sign);
    document.querySelector('.out').innerHTML = 'Ваш знак зодиака ' + sign;
  } else if ((dayCorrect >= 23 && dayCorrect <= 30 && monthCorrect === 'ноябрь') || (monthCorrect === 'декабрь' && dayCorrect <= 22)) {
    let sign = 'стрелец'
    let block = document.querySelector('.image')
    block.style.backgroundImage = "url(img/sagittarius.svg)";
    console.log(sign);
    document.querySelector('.out').innerHTML = 'Ваш знак зодиака ' + sign;
  } else if ((dayCorrect >= 23 && dayCorrect <= 31 && monthCorrect === 'декабрь') || (monthCorrect === 'январь' && dayCorrect <= 20)) {
    let sign = 'козерог'
    let block = document.querySelector('.image')
    block.style.backgroundImage = "url(img/capricornus.svg)";
    console.log(sign);
    document.querySelector('.out').innerHTML = 'Ваш знак зодиака ' + sign;
  } else {
    console.error('Введите корректную дату');
    document.querySelector('.out').innerHTML = 'Введите корректую дату'
    let block = document.querySelector('.image')
    block.style.backgroundImage = "url()";
  }
})

/**
Водолей (21.01 – 19.02) январь 31
Рыбы (20.02 – 20.03) февраль 28 / 29
Овен (21.03 – 20.04) март 31
Телец (21.04 – 21.05) апрель 30
Близнецы (22.05 – 21.06) май 31
Рак (22.06 – 22.07) июнь  30
Лев (23.07 – 21.08) июль 31
Дева (22.08 – 23.09) август 31
Весы (24.09 – 23.10) сенябрь 30
Скорпион (24.10 – 22.11) октябрь 31
Стрелец (23.11 – 22.12) ноябрь 30
Козерог (23.12 – 20.01) декабрь 31
**/