document.addEventListener("DOMContentLoaded", () => {
  const skills = [
    { name: "HTML & Css", skill: "97%" },
    { name: "Js", skill: "91%" },
    { name: "PHP", skill: "63%" },
    { name: "React", skill: "87%" },
    { name: "Laravel", skill: "63%" },
    { name: "Wordpress", skill: "67%" },
    { name: "Photoshop", skill: "73%" },
  ];

  const projects = [
    {
      name: "Login Panel",
      link: "https://github.com/AHSharifi/login-panel",
      langs: [
        { name: "HTML", width: "13.5%" },
        { name: "Css", width: "15.1%" },
        { name: "JavaScript", width: "71.4%" },
      ],
    },
    {
      name: "Project1",
      link: "https://github.com/AHSharifi/project1",
      langs: [
        { name: "HTML", width: "67.9%" },
        { name: "Css", width: "32.1%" },
      ],
    },
  ];

  const projects_div = document.getElementsByClassName("projects__box")[0];
  projects.forEach((project) => {
    let langNames = "";
    let langFill = "";

    project.langs.forEach((lang) => {
      langNames += `<div><p class="circle ${lang.name}"></p>${lang.name} : ${lang.width}</div>`;
      langFill += `<div class="lang__fill ${lang.name}" style="width: ${lang.width}"></div>`;
    });

    const text = `
            <a href="${project.link}">
              <h3>${project.name}</h3>
              <div>
                <div class="lang__box">
                  ${langFill}
                </div>
               <div class="lang__name">
                  ${langNames}  
                </div>
              </div>
            </a>
          `;

    projects_div.innerHTML += text;
  });

  const skills_div = document.getElementsByClassName("skills__box")[0];
  skills.forEach((skill) => {
    const text = `
            <div>
                <h2>${skill.name}</h2>
              <div class="box">
                <div class="fill" data-skill="${skill.skill}"><p>${skill.skill}</p></div>
              </div>
            </div>
          `;
    skills_div.innerHTML += text;
  });
  const fills = document.querySelectorAll(".fill");
  fills.forEach((fill) => {
    const fillWidth = fill.getAttribute("data-skill");
    setTimeout(() => {
      fill.style.width = fillWidth;
    }, 100);
  });
});
