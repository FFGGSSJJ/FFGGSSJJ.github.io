const template = document.createElement('template');

template.innerHTML = `
<div class="sidebar">
<div class="container sidebar-sticky">
  <div class="sidebar-about">
    
    <p>
    <img src="picture/myself.jpeg" alt="myself" width="300px" height="300px">
    <!-- <b>In Olympic National Park</b> -->
    </p>

    <!-- name -->
    <h1> Guanshujie Fu </h1>
    <b>(He/Him)</b>
    <a class="sidebar-nav-item" href="./name.html">my name?</a>
    
    <hr>
    <!-- emails -->
    fuguan@ethz.ch
    guanshujie.fu@ch.abb.com
    <hr>

    <!-- links -->
    <a href="https://www.linkedin.com/in/guanshujiefu/">@LinkedIn</a>
    <div></div>
    <a href="https://github.com/FFGGSSJJ">@GitHub</a>
    <div></div>
    <a href="./docs/resume.pdf">@Resume(2024.12)</a>
    <hr>

  </div>

  <!-- navigation -->
  <nav class="sidebar-nav">
    <a class="sidebar-nav-item" href="index.html">Home</a>
    <a class="sidebar-nav-item" href="./research.html">Research&Project</a>
    <a class="sidebar-nav-item" href="./experiences.html">Experiences</a>
    <a class="sidebar-nav-item" href="./publication.html">Publications</a>
    <a class="sidebar-nav-item" href="./misc.html">Miscellaneous</a>
    <a class="sidebar-nav-item" href="./contact.html">Contact</a>
  </nav>
</div>
</div>
`;

document.body.appendChild(template.content);