<script>
    import { onMount } from "svelte";
  
    let tabs = ["Home", "About", "Services", "Contact"];
    let activeTab = 0;
  
    // Dimensions for the sliding background
    let activeStyle = {
      width: "0px",
      left: "0px",
    };
  
    // Function to update the active tab and sliding background
    function setActiveTab(index, tabElement) {
      activeTab = index;
      updateSlider(tabElement);
    }
  
    function updateSlider(tabElement) {
      const rect = tabElement.getBoundingClientRect();
      activeStyle = {
        width: `${rect.width}px`,
        left: `${rect.left - tabElement.parentNode.getBoundingClientRect().left}px`,
      };
    }
  
    // Ensure slider is positioned correctly on mount
    onMount(() => {
      const initialTab = document.querySelector(".tab.active");
      if (initialTab) updateSlider(initialTab);
    });
  </script>
  
  <style>
    .tabs-container {
      position: relative;
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 100%;
      background-color: #f1f1f1;
      padding: 10px;
      overflow: hidden;
    }
  
    .tab {
      padding: 10px 20px;
      cursor: pointer;
      position: relative;
      z-index: 1;
      color: #333;
      text-align: center;
      font-weight: bold;
      transition: color 0.3s ease;
    }
  
    .tab.active {
      color: #fff;
    }
  
    .slider {
      position: absolute;
      height: 100%;
      background-color: #6200ea;
      border-radius: 5px;
      transition: all 0.3s ease;
      z-index: 0;
    }
  </style>
  
  <div class="tabs-container">
    <div
      class="slider"
      style="width: {activeStyle.width}; left: {activeStyle.left};"
    ></div>
  
    {#each tabs as tab, index}
      <div
        class="tab {index === activeTab ? 'active' : ''}"
        on:click={(e) => setActiveTab(index, e.target)}
      >
        {tab}
      </div>
    {/each}
  </div>
  