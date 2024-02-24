document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll(".tab");
    const tabContent = document.getElementById("tab-content");
    
    const tabData = {
      tab1: "Content for tab 1",
      tab2: "Content for tab 2",
      tab3: "Content for tab 3"
    };
  
  
    if (tabs.length > 0) {
      tabs.forEach(tab => {
        tab.addEventListener("click", function() {
        
          tabs.forEach(t => t.classList.remove("active"));
          
         
          this.classList.add("active");
          
          const tabId = this.getAttribute("data-tab");
          const content = tabData[tabId];
          
          if (content) {
         
            tabContent.innerHTML = content;
          } else {
            console.error(`Content for tab ${tabId} not found.`);
          }
        });
      });
    
      tabs[0].click();
    } else {
      console.error("No tabs found.");
    }
  });
  