import data from "./data.js";

let template = document.querySelector(".job_template");

let div = document.querySelector(".container");

data.forEach((job) => {
  let {
    company,
    location,
    position,
    postedAt,
    logo,
    contract,
    languages,
    level,
    role,
  } = job;
  let li = template.content.cloneNode(true);
  console.log(logo);
  let image = li.querySelector(".job_image");
  let jobtime = li.querySelector(".job_time");
  image.src = logo;
  jobtime.textContent = `${postedAt} | ${contract}`
  console.log(li);
  div.appendChild(li);
});
