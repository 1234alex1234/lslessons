function noName(text) {
  let maxLength = 30;
  if(typeof text === 'string') {
    text = text.trim();
    if(text.length > maxLength) {
      text = text.substring(0, maxLength) + '...';
      console.log(text);
    } else {
      console.log(text);
    }
  } else {
    console.log("Введите пожалуйста строку или хуже будет!");
  }
}

noName("                    Привет!Я очень длинный текст возможно даже длиннее 30 символов!                ");
noName("                    привет!А я не очень!               ");
noName(1);




