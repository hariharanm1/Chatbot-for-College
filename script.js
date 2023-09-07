
const chatInput =document.querySelector(".chat-input textarea");
const sendChatBtn =document.querySelector(".chat-input span");
const chatbox=document.querySelector(".chatbox");
const chatbotToggler=document.querySelector(".chatbot-toggler");
const chatbotCloseBtn=document.querySelector(".close-btn");
let userMessage;
let product;

function output(input) {
  console.log("");
    let text = input.toLowerCase().replace(/[^\w\s]/gi, "").replace(/[\d]/gi, "").trim();
    text = text
      .replace(/ a /g, " ")   // 'tell me a story' -> 'tell me story'
      .replace(/i feel /g, "")
      .replace(/whats/g, "what is")
      .replace(/please /g, "")
      .replace(/ please/g, "")
      .replace(/r u/g, "are you");
    if (compare(prompts, replies, text)) { 
      // Search for exact match in `prompts`
      product = compare(prompts, replies, text);
    } else if (text.match(/thank/gi)) {
      product = "You're welcome!"
    } else if (text.match(/(corona|covid|virus)/gi)) {
      // If no match, check if message contains `coronavirus`
      product = coronavirus[Math.floor(Math.random() * coronavirus.length)];
    } else if (text.match(/(dev|developers|develope)/gi)) {
      product = developers[Math.floor(Math.random() * developers.length)];
    } else {
      // If all else fails: random alternative
      product = alternative[Math.floor(Math.random() * alternative.length)];
    }
    // console.log(product)
  }
  
  function compare(promptsArray, repliesArray, string) {
    let reply;
    let replyFound = false;
    for (let x = 0; x < promptsArray.length; x++) {
      for (let y = 0; y < promptsArray[x].length; y++) {
        if (promptsArray[x][y] === string) {
          let replies = repliesArray[x];
          reply = replies[Math.floor(Math.random() * replies.length)];
          replyFound = true;
          break;
        }
      }
      if (replyFound) {
        break;
      }
    }
    return reply;
  }
const API_KEY ="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";
const inputInitHeight=chatInput.scrollHeight;

const createChatLi=(message, className)=> {
    const chatLi =document.createElement("li");
    chatLi.classList.add("chat",className);
    let chatContent= className ==="outgoing" ?`<p></p>`:`<span class="material-symbols-outlined">smart_toy</span><p></p>`;
    chatLi.innerHTML =chatContent;
    chatLi.querySelector("p").textContent=message;
    return chatLi;
}
const generateResponse=(incomingChatLi) =>{
    const messageElement=incomingChatLi.querySelector("p");
        output(userMessage)
        messageElement.innerHTML=`${product}`;
        chatbox.scrollTo(0,chatbox.scrollHeight); 
}

const handleChat =() => {
    userMessage = chatInput.value.trim();
    if(!userMessage) return;
    chatInput.value="";
    chatInput.style.height=`${inputInitHeight}px`;

   chatbox.appendChild(createChatLi(userMessage,"outgoing"));
   chatbox.scrollTo(0,chatbox.scrollHeight);
   setTimeout(()=>{
     const incomingChatLi =(createChatLi("Thinking...","incoming"))
     chatbox.appendChild(incomingChatLi);
     chatbox.scrollTo(0,chatbox.scrollHeight);
    generateResponse(incomingChatLi);
   },1000);
}
chatInput.addEventListener("input",() =>{
    chatInput.style.height=`${inputInitHeight}px`;
    chatInput.style.height=`${chatInput.scrollHeight}px`;
});
chatInput.addEventListener("keyup",(e) =>{
    if(e.key==="Enter" && !e.shiftKey && window.innerWidth>800){
        e.preventDefault();
        // output(chatInput);
        handleChat();
      }
});




sendChatBtn.addEventListener("click",handleChat);
chatbotToggler.addEventListener("click",()=>document.body.classList.toggle("show-chatbot"));
chatbotCloseBtn.addEventListener("click",()=>document.body.classList.remove("show-chatbot"));
