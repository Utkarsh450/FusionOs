window.addEventListener("DOMContentLoaded", () => {
  let weather = document.querySelector(".fixed h1");
  let time = document.querySelector(".time .time1");
  let today = document.querySelector(".time .time2");
  let hiddenIcons = document.querySelector(".hidden1 img");
  let battery = document.querySelector(".icons .battery");
  let body = document.querySelector("body");
  let desk = document.querySelector(".desk")
  let icon1 = document.querySelector(".desk .icon1");
  let icon2 = document.querySelector(".desk .icon2");
  let icon5 = document.querySelector(".desk .icon5");
  let icon4 = document.querySelector(".desk .icon4");
  let start = document.querySelector(".start img");
  let sidebar = document.querySelector(".sidebar h1")
  let sidebar1 = document.querySelector(".sidebar1")
  let sidetime = document.querySelector(".sidebar1 .sidetime")
  let sideweather = document.querySelector(".sidebar1 .sideweather")
  let sideduration = document.querySelector(".sidebar1 .sideduration")
  let volume = document.querySelector(".volume")
  let wifi = document.querySelector(".wifi")
  let battery1 = document.querySelector(".battery1")
  let overlay = document.querySelector(".overlay")
  let brightness = document.querySelector(".brightness")
  let interface = document.querySelector(".tab")
  let mac1 = document.querySelector(".mac1");
  let mac2 = document.querySelector(".mac2");
  let mac3 = document.querySelector(".mac3");
  let folder = document.querySelector(".folder")
  let mac4 = document.querySelector(".mac4");
  let mac5 = document.querySelector(".mac5");
  let mac6 = document.querySelector(".mac6");
  let hacking = document.querySelector(".hacking");
  let mac7 = document.querySelector(".hacking .mac7");
  let mac8 = document.querySelector(".hacking .mac8");
  let mac9 = document.querySelector(".hacking .mac9");
  let mac10 = document.querySelector(".notes .mac10");
  let mac11 = document.querySelector(".notes .mac11");
  let mac12 = document.querySelector(".notes .mac12");
  let notes = document.querySelector(".notes");
  let date1 = document.querySelector(".date1");
  let folders = document.querySelector(".folders")
  let btn11 = document.querySelector(".btn11");
let btn12 = document.querySelector(".btn12");
let btn13 = document.querySelector(".btn13");
let main = document.querySelector(".main")
let loader = document.querySelector(".loader")
          let i = 0;
                let k = 1;
  function gsap() {
    Draggable.create(icon1, {
      // trigger: childDiv, // Drag handle
      type: "x,y",
      inertia: true,
      edgeResistance: 0.85,
    });
    Draggable.create(icon2, {
      // trigger: childDiv, // Drag handle
      type: "x,y",
      inertia: true,
      edgeResistance: 0.85,
    });
    Draggable.create(icon4, {
      // trigger: childDiv, // Drag handle
      type: "x,y",
      inertia: true,
      edgeResistance: 0.85,
    });
     Draggable.create(folder, {
      // trigger: childDiv, // Drag handle
      type: "x,y",
      inertia: true,
      edgeResistance: 0.85,
    });


  Draggable.create(interface, {
      // trigger: childDiv, // Drag handle
      type: "x,y",
      inertia: true,
      edgeResistance: 0.85,
    });

    Draggable.create(hacking, {
      // trigger: childDiv, // Drag handle
      type: "x,y",
      inertia: true,
      edgeResistance: 0.85,
    });
     Draggable.create(notes, {
      // trigger: childDiv, // Drag handle
      type: "x,y",
      inertia: true,
      edgeResistance: 0.85,
    });
     Draggable.create(folders, {
      // trigger: childDiv, // Drag handle
      type: "x,y",
      inertia: true,
      edgeResistance: 0.85,
    });
    
  }
  function weatherAPI() {
    fetch(
      "https://api.weatherapi.com/v1/current.json?key=913ac1e049cb4380972113059252006&q=Noida&aqi=no"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("Weather data:", data.current.condition.text);
        weather.innerHTML = `🌤️ ${data.current.temp_c}°C`;
      })
      .catch((err) => {
        console.log("Weather API fetch failed:", err);
      });
  }
  function time1() {
    // Update time
    const date = new Date();
    if (time && today) {
      time.innerHTML = `${String(date.getHours()).padStart(2, "0")}:${String(
        date.getMinutes()
      ).padStart(2, "0")}`;
      today.innerHTML = `${date.getDate()}-${
        date.getMonth() + 1
      }-${date.getFullYear()}`;
    }
  }
  function hiddenIcons1() {
    let ans = 0;
    let div;

    hiddenIcons.addEventListener("click", function () {
      if (ans === 0) {
        div = document.createElement("div");
        div.classList.add(
          "w-32",
          "h-36",
          "absolute",
          "top-[42rem]",
          "z-[999]",
          "right-44",
          "bg-zinc-700",
          "transition-all",
          "rounded-md",
          "scale-[85%]",
          "flex",
          "flex-wrap",
          "gap-2",
          "items-center",
          "justify-evenly",
          "p-2"
        );

        // Example icons (replace src with your icons or use font icons)
        const icons = [
          "https://cdn-icons-png.flaticon.com/128/3524/3524659.png", // settings icon
          "https://cdn-icons-png.flaticon.com/128/1077/1077035.png", // user icon
          "https://cdn-icons-png.flaticon.com/128/1828/1828490.png", // logout icon
          "https://cdn-icons-png.flaticon.com/128/1828/1828490.png", // logout icon
          "https://cdn-icons-png.flaticon.com/128/1828/1828490.png", // logout icon
          "https://cdn-icons-png.flaticon.com/128/1828/1828490.png", // logout icon
          "https://cdn-icons-png.flaticon.com/128/1828/1828490.png", // logout icon
        ];

        icons.forEach((src) => {
          let img = document.createElement("img");
          img.src = src;
          img.classList.add(
            "w-6",
            "h-6",
            "cursor-pointer",
            "shrink-0",
            "hover:scale-110",
            "transition"
          );
          div.appendChild(img);
        });

        document.body.appendChild(div);
        ans = 1;
        console.log("shown");
      } else {
        div.remove(); // Remove the div
        ans = 0;
        console.log("hidden");
      }
    });
  }
  function ShowBattery() {
    let Battery = window.navigator.getBattery().then((data) => {
      console.log(data);
      battery.title = (data.level * 100).toFixed(1) + "%";
    });
  }
  function contextMenu() {
    let div1;
    let startDiv;
    let shown = false;

    body.addEventListener("contextmenu", function (dets) {
      dets.preventDefault();

      // Remove old menu if already shown
      if (shown === true) {
        document.body.removeChild(div1);
        shown = false;
      }

      // Create the main context menu box
      div1 = document.createElement("div");
      div1.classList.add(
        "w-52",
        "h-64",
        "bg-zinc-700/60",
        "rounded-md",
        "absolute",
        "backdrop-blur-md",
        "p-2",
        "z-50",
        "text-white",
        "shadow-lg",
        "space-y-1"
      );
      div1.style.top = `${dets.clientY}px`;
      div1.style.left = `${dets.clientX}px`;

      let div2 = document.createElement("div");
      let div3 = document.createElement("div");
      let div4 = document.createElement("div");
      let div5 = document.createElement("div");
      let div6 = document.createElement("div");
      let div8 = document.createElement("div");

      [div2, div3, div4, div5, div6, div8].forEach((div) => {
        div.classList.add(
          "text-white",
          "text-lg",
          "w-full",
          "hover:bg-zinc-600",
          "cursor-pointer",
          "rounded"
        );
      });
     let customWallpaper = [
  {
    image: "https://512pixels.net/wp-content/uploads/2025/06/13-Ventura-Dark-thumb.jpg"
  },
  {
    image: "https://512pixels.net/wp-content/uploads/2025/06/12-Dark-thumbnail.jpg"
  },
  {
    image: "https://wallpapercave.com/wp/wp9775257.jpg"
  },
   {
    image: "https://applescoop.org/image/wallpapers/mac/elegance-hd-tree-leaves-close-up-plants-nature-8k-top-best-free-download-wallpapers-for-macbook-pro-air-and-microsoft-windows-pcs-desktop-4k-07-12-2024-1733638179-hd-wallpaper.webp"
  },
  {
    image: "./Windows-11-Dark-Blue-4K-Wallpaper-768x432-png-Picsart-AiImageEnhancer.webp"
  },
];

      div8.innerText = "🎮 View";
      div3.innerText = "🖥️ Wallpaper";
      div2.innerText = "🔄 Refresh";
      div4.innerText = "📁 New";
      div5.innerText = "⚙️ Terminal";
      div6.innerText = "❌ Close";
      div1.appendChild(div8);
      div1.appendChild(div2);
      div1.appendChild(div3);
      div1.appendChild(div4);
      div1.appendChild(div5);
      div1.appendChild(div6);

      div2.addEventListener("click", function () {
        window.location.reload();
      });
      div3.addEventListener("click", function(){
        console.log(customWallpaper.length);
        
        main.style.backgroundImage = `url(${customWallpaper[i].image})`
        i = i + 1;
        if( i> customWallpaper.length-1)
          i = 0;
      })
      let newfolder;
      div4.addEventListener("click", function(){
        newfolder = document.createElement('div')
        newfolder.classList.add("name","w-12", "h-12","text-center","cursor-pointer","shrink-0","hover:bg-zinc-500/50","hover:scale-110")
        // newfolder.textContent = "Folder 1"
        let childdiv = document.createElement("div")
        childdiv.textContent = `folder${i}`
        i = i + 1;
        let img = document.createElement("img")
        img.setAttribute("src","https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/11113cc80977b7c9417ce4fb349cbd35_low_res_Folder_Common.png")
        newfolder.appendChild(img)
        newfolder.appendChild(childdiv)
        desk.appendChild(newfolder)
        Draggable.create(newfolder, {
      // trigger: childDiv, // Drag handle
      type: "x,y",
      inertia: true,
      edgeResistance: 0.85,
    });
        newfolder.addEventListener("click", function(){
          folders.style.top = `${Math.random() * 23}rem`;
              folders.style.left = `${Math.random() * 38}rem`;
        folders.style.display = "block"
        btn11.addEventListener("click", function () {
    folders.style.display = "none";
  });

  btn13.addEventListener("click", function () {
    folders.style.top = "0";
    folders.style.left = "0";
    folders.style.width = "100vw";
    folders.style.zIndex = "1000";
    icon2.style.display = "block";
    folders.style.height = "100vh";
    folders.classList.remove("rounded-xl");
  });

  btn12.addEventListener("click", function () {
    folders.style.top = "15rem"
    folders.style.left = "23rem"
    folders.style.width = "45rem"
    folders.style.height = "35rem"
    icon2.style.display = "block";
    folders.classList.add("rounded-xl");
  });
      })
      })

      div5.addEventListener("click", function(){

        hacking.style.display = "block"
        mac7.addEventListener("click", function () {
    hacking.style.display = "none";
    icon4.style.display = "block"
  });
   mac8.addEventListener("click", function () {
    hacking.style.top = `${Math.random() * 24}rem`;
    hacking.style.left = `${Math.random() * 48}rem`;
    hacking.style.width = "46rem";
    icon4.style.display = "block";
    hacking.style.height = "26rem";
    hacking.classList.add("rounded-xl");
  }
)
  mac9.addEventListener("click", function () {
     hacking.style.top = "0";
    hacking.style.left = "0";
    hacking.style.width = "100vw";
    hacking.style.zIndex = "1000";
    icon4.style.display = "none";
    hacking.style.height = "100vh";
    hacking.classList.remove("rounded-xl");
  }
)
      })
      div6.addEventListener("click", function () {
        document.body.removeChild(div1);
        shown = false;
      });

      // Append to body
      document.body.appendChild(div1);
      shown = true;
    });

    body.addEventListener("click", function () {
      if (shown && div1) {
    body.removeChild(div1);
    shown = false;
    }
  })
  }
  function Start() {
    start.addEventListener("click", function () {
      // Remove old start menu if exists
      const oldStart = document.getElementById("start-menu");
      if (oldStart) oldStart.remove();

      // Create Start Menu container
      startDiv = document.createElement("div");
      startDiv.id = "start-menu";
      startDiv.className = `
    fixed bottom-20 left-44 w-[30rem] h-[36rem]
    bg-zinc-900/70 text-white rounded-2xl p-4
    shadow-2xl backdrop-blur-lg z-50
  `;

      // Top: Search bar
      const searchBar = document.createElement("input");
      searchBar.className =
        "w-full p-2 rounded-md bg-zinc-800 text-white placeholder:text-zinc-400 mb-4";
      searchBar.placeholder = "Search for apps, settings, and documents";
      startDiv.appendChild(searchBar);

      // Apps with emoji icons (replace emojis with actual icons/images as needed)
      const apps = [
        { name: "Edge", icon: "🌐" },
        { name: "Word", icon: "📝" },
        { name: "Excel", icon: "📊" },
        { name: "PowerPoint", icon: "📽️" },
        { name: "Mail", icon: "✉️" },
        { name: "Calendar", icon: "📅" },
        { name: "Store", icon: "🛒" },
        { name: "Photos", icon: "🖼️" },
        { name: "My Dell", icon: "💻" },
        { name: "Settings", icon: "⚙️" },
        { name: "OneNote", icon: "📓" },
        { name: "Calculator", icon: "🧮" },
        { name: "Clock", icon: "⏰" },
        { name: "Notepad", icon: "📄" },
        { name: "Paint", icon: "🎨" },
        { name: "Explorer", icon: "📁" },
        { name: "Films & TV", icon: "🎬" },
        { name: "Assist", icon: "🧑‍💻" },
      ];

      // Pinned section
      const pinnedSection = document.createElement("div");
      pinnedSection.innerHTML = `
    <h2 class="text-md font-semibold mb-2">Pinned</h2>
    <div class="grid grid-cols-6 gap-4 mb-4 text-center text-xs">
      ${apps
        .map(
          (app) => `
        <div class="flex flex-col items-center">
          <div class="w-10 h-10 bg-zinc-700 rounded-lg flex items-center justify-center text-lg">
            ${app.icon}
          </div>
          <span class="mt-1">${app.name}</span>
        </div>
      `
        )
        .join("")}
    </div>
  `;
      startDiv.appendChild(pinnedSection);

      // Recommended section
      const recommendedFiles = [
        "vanilla-js-projects.md",
        "index.html",
        "Windows-11-Wallpaper.png",
        "postman-icon.png",
        "Screenshot.png",
      ];

      const recommendedSection = document.createElement("div");
      recommendedSection.innerHTML = `
    <h2 class="text-md font-semibold mb-2">Recommended</h2>
    <div class="space-y-2 text-sm">
      ${recommendedFiles
        .map(
          (item) => `
        <div class="flex items-center justify-between">
          <span>${item}</span>
          <span class="text-zinc-400 text-xs">9h ago</span>
        </div>
      `
        )
        .join("")}
    </div>
  `;
      startDiv.appendChild(recommendedSection);

      // Footer
      const footer = document.createElement("div");
      footer.className =
        "absolute bottom-4 left-4 right-4 flex justify-between items-center text-sm text-zinc-300";
      footer.innerHTML = `
    <div class="flex items-center gap-2">
      <div class="w-6 h-6 rounded-full bg-zinc-600"></div>
      <span>Anukriti Barnwal</span>
    </div>
    <button class="text-lg">&#x23FB;</button>
  `;
      startDiv.appendChild(footer);

      // Append to body
      document.body.appendChild(startDiv);
    });

    start.addEventListener("dblclick", function () {
      body.removeChild(startDiv);
    });
  }
   function side(){
  sidebar.addEventListener("mouseover", () => {
  sidebar1.classList.remove("opacity-0", "-translate-x-64", "pointer-events-none");
  sidebar1.classList.add("opacity-100", "translate-x-0", "pointer-events-auto");
});

sidebar1.addEventListener("mouseleave", () => {
  sidebar1.classList.remove("opacity-100", "translate-x-0", "pointer-events-auto");
  sidebar1.classList.add("opacity-0", "-translate-x-64", "pointer-events-none");
});

fetch(
      "https://api.weatherapi.com/v1/current.json?key=913ac1e049cb4380972113059252006&q=Noida&aqi=no"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("Weather data:", data.current.temp_c);
        sideweather.innerHTML = `🌤️ ${data.current.temp_c}°C`;
      })
      .catch((err) => {
        console.log("Weather API fetch failed:", err);
      });
      let date = new Date();      

      sidetime.textContent = `${date.getDate()}`
    }

    function wifiButtons(){
      volume.addEventListener("click", function(){
      wifi.classList.remove("opacity-0", "translate-y-96")
      wifi.classList.add("opacity-100", "translate-y-[-4.5rem]")
    })

    volume.addEventListener("dblclick", function(){
      wifi.classList.remove('opacity-100', "translate-y-96")
      wifi.classList.add('opacity-0', "translate-y-0]")
    })

    window.navigator.getBattery().then((data)=>{ console.log(data.level*100+"%")
      battery1.textContent = ((data.level*100).toFixed(0))+"%"

    }
    )

    brightness.addEventListener("input", function(){
      console.log(overlay);
      overlay.style.backgroundColor = `rgba(0,0,0,${(85 - brightness.value)/100})`
      
    })
    }
  // let isMaximized = false;

  function icons(){ 
    icon1.addEventListener("click", function(){
      interface.style.display = "block";
      interface.style.top = `${Math.random()*24}rem`
      interface.style.left = `${Math.random()*48}rem`
        // isMaximized = false;
    })

    icon2.addEventListener("click", function(){
      folder.style.display = "block";
      folder.style.top = `${Math.random()*24}rem`
      folder.style.left = `${Math.random()*48}rem`
      // isMaximized = false;
    })

    mac1.addEventListener("click", function(){
      interface.style.display = "none";
      icon1.style.display = "block"
    })

   mac3.addEventListener("click", function () {
    interface.style.top = "0";
    interface.style.left = "0";
    interface.style.width = "100vw";
    interface.style.zIndex = "1000";
    icon1.style.display = "none";
    interface.style.height = "100vh";
    interface.classList.remove("rounded-xl");
    // isMaximized = true;
    // isMaximized = true;
 })
 mac2.addEventListener("click", function () {
    // Reset to a default size or random again if you want
    interface.style.top = `${Math.random() * 24}rem`;
    interface.style.left = `${Math.random() * 48}rem`;
    interface.style.width = "46rem";
    icon1.style.display = "block";
    interface.style.height = "26rem";
    interface.classList.add("rounded-xl");
    isMaximized = false;
  })

  mac4.addEventListener("click", function () {
          folder.style.display = "none";
          icon2.style.display = "block"
  }
)
  mac5.addEventListener("click", function () {
     folder.style.top = `${Math.random() * 24}rem`;
    folder.style.left = `${Math.random() * 48}rem`;
    folder.style.width = "46rem";
    icon2.style.display = "block";
    folder.style.height = "26rem";
    folder.classList.add("rounded-xl");
  }
)

  mac6.addEventListener("click", function () {
     folder.style.top = "0";
    folder.style.left = "0";
    folder.style.width = "100vw";
    folder.style.zIndex = "1000";
    icon2.style.display = "none";
    folder.style.height = "100vh";
    folder.classList.remove("rounded-xl");
  }
)

  mac7.addEventListener("click", function () {
    hacking.style.display = "none";
    icon4.style.display = "block"
  });

  icon4.addEventListener("click", function () {
    hacking.style.display = "block";
    hacking.style.top = `${Math.random() * 24}rem`;
    hacking.style.left = `${Math.random() * 48}rem`;
  })

  icon5.addEventListener("click", function () {
    notes.style.display = "block";
    notes.style.top = `${Math.random() * 24}rem`;
    notes.style.left = `${Math.random() * 48}rem`;
  })
  mac8.addEventListener("click", function () {
    hacking.style.top = `${Math.random() * 24}rem`;
    hacking.style.left = `${Math.random() * 48}rem`;
    hacking.style.width = "46rem";
    icon4.style.display = "block";
    hacking.style.height = "26rem";
    hacking.classList.add("rounded-xl");
  }
)
  mac9.addEventListener("click", function () {
     hacking.style.top = "0";
    hacking.style.left = "0";
    hacking.style.width = "100vw";
    hacking.style.zIndex = "1000";
    icon4.style.display = "none";
    hacking.style.height = "100vh";
    hacking.classList.remove("rounded-xl");
  }
)

    mac10.addEventListener("click", function () {
    notes.style.display = "none";
    icon5.style.display = "block"
    }
  )

  mac11.addEventListener("click", function () {
    notes.style.top = `${Math.random() * 24}rem`;
    notes.style.left = `${Math.random() * 48}rem`;
    notes.style.width = "46rem";
    icon5.style.display = "block";
    notes.style.height = "26rem";
    notes.classList.add("rounded-xl");
  })

  mac12.addEventListener("click", function () {
    notes.style.top = "0";
    notes.style.left = "0";
    notes.style.width = "100vw";
    notes.style.zIndex = "1000";
    icon5.style.display = "none";
    notes.style.height = "100vh";
    notes.classList.remove("rounded-xl");
  })

  let date = new Date();
  date1.textContent = `Last Login: ${date}`
  
}

window.addEventListener("load", function(){
  setTimeout(()=>{
    loader.style.display = "none";
    main.classList.remove("hidden")

  },5000)

})
  gsap();
  weatherAPI();
  time1();
  hiddenIcons1();
  ShowBattery();
  contextMenu();
  Start();
  side();
  wifiButtons();
  icons();
});


