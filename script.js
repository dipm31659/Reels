//   get the data
let users = [
  {
    profilePic: "https://images.unsplash.com/photo-1621784563330-caee0b138a00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fG1vZGVsfGVufDB8fDB8fHww",
    displayPic: "https://images.unsplash.com/photo-1615212814093-f56085658024?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fG1vZGVsfGVufDB8fDB8fHww",
    pendingMessage: 4,
    location: "Delhi, India",
    name: "Debita",
    age: 21,
    intersets: [{
      icon: `<span class="material-symbols-outlined">draw</span>`,
      interest: "writing",
    }, {
      icon: `<span class="material-symbols-outlined">music_note</span>`,
      interest: "music",
    },],
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, sit dignissimos, consequatur sunt!",
    isFriend: null,
  },
  {
    profilePic: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWx8ZW58MHx8MHx8fDA%3D",
    displayPic: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vZGVsfGVufDB8fDB8fHww",
    pendingMessage: 2,
    location: "Shanghai, China",
    name: "harshita",
    age: 19,
    intersets: [{
      icon: `<span class="material-symbols-outlined">draw</span>`,
      interest: "writing",
    }, {
      icon: `<span class="material-symbols-outlined">music_note</span>`,
      interest: "music",
    },],
    bio: " amet consectetur Beatae, sit dignissimos, adipisicing Lorem ipsum dolor sit consequatur sunt!",
    isFriend: null,
  },
  {
    profilePic: "https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fG1vZGVsfGVufDB8fDB8fHww",
    displayPic: "https://images.unsplash.com/photo-1503104834685-7205e8607eb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fG1vZGVsfGVufDB8fDB8fHww",
    pendingMessage: 9,
    location: "Canada, USA",
    name: "Suzuka",
    age: 24,
    intersets: [{
      icon: `<span class="material-symbols-outlined">draw</span>`,
      interest: "writing",
    }, {
      icon: `<span class="material-symbols-outlined">music_note</span>`,
      interest: "music",
    },],
    bio: "Beatae, sit dignissimos, consequatur sunt! Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    isFriend: null,
  },
  {
    profilePic: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vZGVsfGVufDB8fDB8fHww",
    displayPic: "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fG1vZGVsfGVufDB8fDB8fHww",
    pendingMessage: 6,
    location: "Kolkata, India",
    name: "Victoria",
    age: 22,
    intersets: [{
      icon: `<span class="material-symbols-outlined">draw</span>`,
      interest: "writing",
    }, {
      icon: `<span class="material-symbols-outlined">music_note</span>`,
      interest: "music",
    },],
    bio: "Beatae, sit dignissimos Lorem ipsum consectetur adipisicing elit. consequatur sunt! dolor sit amet",
    isFriend: null,
  },
];

function select(elem) {
  return document.querySelector(elem);
}

function setData(idx) {
  select(".profile img").src = users[idx].profilePic;
  select(".badge h5").textContent = users[idx].pendingMessage;
  select(".location h3").textContent = users[idx].location;
  select(".name h1:nth-child(1)").textContent = users[idx].name;
  select(".name h1:nth-child(2)").textContent = users[idx].age;
  select(".bio p").textContent = users[idx].bio;

  let clutter = "";
  users[idx].intersets.forEach((interest) => {
    clutter += `<div class="tag flex items-center px-2.5 py-1.5 gap-1 bg-white/30 rounded-full text-white">
    ${interest.icon} <h3 class="text-xl capitalize">${interest.interest}</h3>
  </div>`
  });
  select(".tags").innerHTML = clutter;

}

let current = 0;
(function setInitial() {
  select(".main-card img").src = users[current].displayPic;
  select(".incoming-card img").src = users[current + 1]?.displayPic;
  
  setData(current);

  current = 2;
})();



let isAnimated = false;
function imageChange() {
  if (!isAnimated) {
    isAnimated = true;
    let tl = gsap.timeline({
      onComplete: function () {
        isAnimated = false;
        let main = select(".main-card");
        let incoming = select(".incoming-card");

        incoming.classList.remove("z-[2]");
        incoming.classList.add("z-[3]");
        incoming.classList.remove("incoming-card");

        main.classList.remove("z-[3]");
        main.classList.add("z-[2]");
        gsap.set(main, {
          scale: 1,
          opacity: 1,
        })

        if (current === users.length) current = 0;
        select(".main-card img").src = users[current].displayPic;
        current++;
        main.classList.remove("main-card");
        incoming.classList.add("main-card");
        main.classList.add("incoming-card");

      }
    });

    tl.to(".main-card", {
      scale: 1.1,
      opacity: 0,
      ease: Circ,
      duration: .9
    }, "a")
    .from(".incoming-card", {
      scale: .9,
      opacity: 0,
      ease: Circ,
      duration: .9
    }, "a")
  }
};


let reject = select(".reject");
let accept = select(".accept");

reject.addEventListener("click", function () {
  imageChange();
  setData(current-1);
  gsap.from(".details .element", {
    y: "100%",
    opacity: 0,
    stagger: .1,
    ease: Circ,
    duration: 1
  })
});

accept.addEventListener("click", function () {
  imageChange();
  setData(current-1);
  gsap.from(".details .element", {
    y: "100%",
    opacity: 0,
    stagger: .1,
    ease: Circ,
    duration: 1
  })
});


(function containerCreator() {
  document.querySelectorAll(".element")
  .forEach((elem) => {
    let div = document.createElement("div");
    div.classList.add(`${elem.classList[1]}container`, 'overflow-hidden');
    div.appendChild(elem);
    select(".details").appendChild(div);
  })
})();

