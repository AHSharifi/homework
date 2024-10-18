document.addEventListener("DOMContentLoaded", () => {
  // ----------- Skills List Array -----------
  const skills = [
    { name: "HTML & Css", skill: "97%" },
    { name: "Js", skill: "91%" },
    { name: "PHP", skill: "63%" },
    { name: "React", skill: "87%" },
    { name: "React Native", skill: "56%" },
    { name: "Laravel", skill: "63%" },
  ];

  // ----------- Projects List Array -----------
  const projects = [
    {
      name: "Login Panel",
      link: "https://github.com/AHSharifi/login-panel",
      dis: "A beautiful login panel to show your website professional...",
      author: "ahsharifi",
      authorImage: "https://avatars.githubusercontent.com/u/143296865?v=4",
      langs: [
        { name: "HTML", width: "13.5%" },
        { name: "Css", width: "15.1%" },
        { name: "JavaScript", width: "71.4%" },
      ],
    },
    {
      name: "Project1",
      link: "https://github.com/AHSharifi/project1",
      dis: "A simple and beautiful HTML & Css website theme...",
      author: "ahsharifi",
      authorImage: "https://avatars.githubusercontent.com/u/143296865?v=4",
      langs: [
        { name: "HTML", width: "67.9%" },
        { name: "Css", width: "32.1%" },
      ],
    },
  ];
  // get projects class from html document
  const projects_div = document.getElementsByClassName("projects__box")[0];
  // make <a> tag for each object in project list array
  projects.forEach((project) => {
    let langNames = "";
    let langFill = "";
    // make language name and language fill for each language in projects list array
    project.langs.forEach((lang) => {
      langNames += `<div><p class="circle ${lang.name}"></p>${lang.name} : ${lang.width}</div>`;
      langFill += `<div class="lang__fill ${lang.name}" style="width: ${lang.width}"></div>`;
    });

    const text = `
            <a href="${project.link}" title="${project.name}">
              <h3>${project.name}</h3>
              <p class="dis">${project.dis}</p>
              <div>
                <div class="lang__box">
                  ${langFill}
                </div>
                <div class="lang__name">
                  ${langNames}  
                </div>
              </div>
              <div class="author">
                <img src="${project.authorImage}" alt="${project.author} image" />
                <p class="author__name">${project.author}</p>
              </div>
            </a>
          `;
    // put text in project div in html document
    projects_div.innerHTML += text;
  });
  // get skills class from html document
  const skills_div = document.getElementsByClassName("skills__box")[0];
  // make <div> tag for each object we have in skills list array
  skills.forEach((skill) => {
    const text = `
            <div>
                <h2>${skill.name}</h2>
              <div class="box">
                <div class="fill" data-skill="${skill.skill}"><p>${skill.skill}</p></div>
              </div>
            </div>
          `;
    // put text in skills div in html document
    skills_div.innerHTML += text;
  });
  // get all elements have "fill" class
  const fills = document.querySelectorAll(".fill");
  // for each fill classes set width
  fills.forEach((fill) => {
    // get data-skill attribute from fill div ( you can see in line 79 )
    const fillWidth = fill.getAttribute("data-skill");
    // after 100ms do this function
    setTimeout(() => {
      // all fill class get width that we set in "data-skill" attribute
      fill.style.width = fillWidth;
    }, 100);
  });
});
