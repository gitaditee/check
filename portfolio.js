function toggleMenu(){
    const menu=document.querySelector(".menu-links");
    const icon=document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  function showsidebar(){
    const sidebar=document.querySelector(".sidebar");
    sidebar.style.display="flex";
  }
  function sideclose(){
    const sidebar=document.querySelector(".sidebar");
    sidebar.style.display="none";
  }
