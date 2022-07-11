const complimentBtn = document.getElementById("complimentButton");

const getCompliment = () => {
  axios.get("http://localhost:4000/api/compliment/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

complimentBtn.addEventListener("click", getCompliment);

const getFortune = () => {
  axios.get("http://localhost:4000/api/fortune/").then((res) => {
    console.log(res.data);
    alert(res.data);
  });
};
const fortuneBtn = document.getElementById("fortuneButton");
fortuneBtn.addEventListener("click", getFortune);

const colorSend = (colorObj) => {
  axios.post("http://localhost:4000/api/color/", colorObj).then((res) => {
    createColorCard(res.data);
  });
};
const colorContainer = document.getElementById("colorDiv");
const createColorCard = (data) => {
  let colorCard = document.createElement("form");
  colorCard.innerHTML = `
  <h1> name: ${data.yourName}</h1>
  <h1> color:${data.yourColor}</h1>
  `;
  colorContainer.appendChild(colorCard);
};

const colorHandler = () => {
  let nameTag = document.querySelector("#newName");
  let colorTag = document.querySelector("#newColor");
  let colorObj = {
    yourName: nameTag.value,
    yourColor: colorTag.value,
  };
  colorSend(colorObj);
  nameTag.value = "";
  colorTag.value = "";
};

const colorButton = document.getElementById("colorButton");
colorButton.addEventListener("click", colorHandler);

const getMoney = () => {
  axios.get("http://localhost:4000/api/money/").then((res) => {
    let p = document.querySelector("#baseMoney");
    p.innerHTML = `${res.data}`;
  });
};
getMoney();

const addBtn = document.getElementById("add");
const minusBtn = document.getElementById("minus");

const addMoney = (body) => {
  axios.put("http://localhost:4000/api/moneyadd/", body).then(getMoney);
};

const minusMoney = (body) => {
  axios.put("http://localhost:4000/api/moneyminus/", body).then(getMoney);
};

addBtn.addEventListener("click", addMoney);
minusBtn.addEventListener("click", minusMoney);

const showPicBtn = document.getElementById("showPic");
const deletePicBtn = document.getElementById("deletePic");

const showPic = () => {
  axios.get("http://localhost:4000/api/pic/").then((res) => {
    let picForm = document.getElementById("picForm");
    picForm.innerHTML = `<img src=${res.data}/>`;
  });
};
showPicBtn.addEventListener("click", showPic);
const deletePic = () => {
  axios.delete("http://localhost:4000/api/pic/").then((res) => {
    let picForm = document.getElementById("picForm");
    picForm.innerHTML = ``;
  });
};
deletePicBtn.addEventListener("click", deletePic);
