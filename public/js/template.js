const template = document.createElement('template');

template.innerHTML = `
<div class="sidebar">
<div class="container sidebar-sticky">
  <div class="sidebar-about">
    
    <p>
    <img src="picture/myself.jpeg" alt="myself">
    <!-- <b>In Olympic National Park</b> -->
    </p>

    <!-- name -->
    <h1> Guanshujie Fu </h1>
    <b>(He/Him)</b>
    <a class="sidebar-nav-item" href="./name.html">Why such a long name?</a>
    
    <hr>
    <!-- emails -->
    gf9@illinois.edu  guanshujie.19@intl.zju.edu.cn
    <hr>

    <!-- links -->
    <a href="https://www.linkedin.com/in/guanshujiefu/">@Linkedin</a>
    <div></div>
    <a href="https://github.com/FFGGSSJJ">@Github</a>
    <div></div>
    <a href="./docs/resume.pdf">@CurriculumVitae(2022.11)</a>
    <hr>

  </div>

  <!-- navigation -->
  <nav class="sidebar-nav">
    <a class="sidebar-nav-item" href="index.html">Home</a>
    <a class="sidebar-nav-item" href="./research.html">Research&Project</a>
    <a class="sidebar-nav-item" href="./experiences.html">Experiences</a>
    <a class="sidebar-nav-item" href="./publication.html">Publications</a>
    <a class="sidebar-nav-item" href="./misc.html">Misc</a>
    <a class="sidebar-nav-item" href="./contact.html">Contact</a>
  </nav>
</div>
</div>
`;

document.body.appendChild(template.content);