function toggleMenu(){
    const menu=document.querySelector(".menu-links");
    const icon=document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
   function showsidebar(event){
     const sidebar=document.querySelector(".sidebar");
    sidebar.style.right="0";
    if(event){
      event.preventDefault();
    }
  }
   function sideclose(){
     const sidebar=document.querySelector(".sidebar");
     sidebar.style.right="-300px";
   }
  //  const sidebar=document.querySelector(".sidebar");
  //    function remove(){
  //     const g=document.querySelector("#touch");
      
  //   g.style.right="-300px";
  //    }
