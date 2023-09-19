// Options the user could type in
const prompts = [
    ["how are you"],
    ["2023","2023 batch","2023 fees","fees 2023"],
    ["hi","hii","hai","haii","hello","good morning", "hey", "good afternoon"],
    ["cse support","support","contact support","contact","cse contact","more details","more detail","more"],
    ["cse","computer science and engineering"],
    ["fees details","fees"],
    ["dress code","dres code","dress","cse dress code","cse dress","dress code for cse","dress rules","rules for wearing dress","student apperance"],
    ["cse department","cse dept","cse started year"],
    ["number of bus","no of bus","bus","how many bus","total number of bus","total bus","total number bus"],
    ["cse hod","hod"],
    ["bus facility","bus route","bus route","bus area"],
    ["staff","staff details","staff detail"],
    ["ksrce staff"],
    ["ksr","about ksr","tell about ksr","tell me about ksr"],
    ["research"],
    ["placement","placement details"],
    ["counselling code","code"],
    ["what", "why", "how", "where", "when"],
    ["no","not sure","maybe","no thanks"],
    ["tell me about ksrce","about ksrce",],
    ["haha","ha","lol","hehe","funny","joke"],
    ["bye","thank you","see you later","byee","bye bye"],
    ["hostel menu","hostel food","food list","list of food","food"],
    ["monday"],
    ["tuesday"],
    ["wednesday"],
    ["thursday"],
    ["friday"],
    ["saturday"],
    ["sunday"],
    ["food court","canteen","shop","department store","stationary",""],
    ["location","locat","place","area","airport","railwaystation"]
  ]
  // Possible responses, in corresponding order
  const replies = [
    ["I'm Fine.. How can I help you?"],
    ["current fees for cse 2023, any queries type more  automatically given contact number"],
    ["Hii Heartily Welcome to KSRCE and CSE department"],
    ["Contact our Department , mobile number-9787866666 ,Mail ID-hodcse@ksrce.ac.in"],
    ["Department of CSE was started in the year 2001 initially with B.E Programme. With the increasing demand in Computer Science and Engineering, M.E programme was started in the year 2007. The department is recognized to offer the research programme for Ph.D. " ],
    ["CSE fees approximately 1.5L anything else contact-9787866666 , Mail id-hodcse@ksrce.ac.in"],
    ["Formal shirt and Formal pant with Proper shoe"],
    ["The Department of CSE  was started under Aarthi Educational and Charitable Trust in the year 2001 by our Founder & Chairman Dr. K. S. Rangasamy MJF., "],
    ["The K.S.R. Educational Institutions operates  more than 167 buses"],
    ["Dr.A.Rajiv Kannan is HOD of CSE department"],
    ["Nearly 100 KM  radius from the various districts – Attur, Kolathur, Vaazhapadi, Satthiyamangalam, Namakkal, Erode, Salem, Karur and Tirupur. This Bus Facilities are provided to all Students, Faculty members and Staffs of K.S.R. Educational Institutions."],
    ["There are more than 25 teaching Faculty, 4 Non-teaching Faculty in CSE Department"],
    ["More than 150 teaching faculty are working in KSRCE"],
    ["Welcome to KSREI,There are 19 INSTUTIONS in our Campus,3 ENGINEERING COLLEGE,3 School,WOMEN College,etc.."],
    ["<span class='messagespan'>visit our ksrcecse official website LINK:</span><a href='https://ksrcecse.onrender.com/src/html/research.html'>Click Me</a>"],
    ["<span class='messagespan'>visit our ksrcecse official website LINK:</span><a href='https://ksrcecse.onrender.com'>Click Me</a>"],
    ["TNEA Counselling Code= 2613"],
    ["Great question"],
    ["That's ok","I understand","What do you want to talk about?"],
    [""],
    ["Haha!","Good one!"],
    ["ThankYou For Visiting..."],
    ["Please choose and type here..<br>1.MONDAY<br>2.Tuesday<br>3.Wednesday<br>4.Thursday<br>5.Friday<br>6.Saturday<br>7.Sunday"],
    ["Monday-->(Breakfast:Bread jam,omelet,upma)<br>(Lunch:rice,pulikolambu,carrotporiyal),<br>(Dinner:Idly or Dosai)"],
    ["Tuesday(Breakfast:Noodles+Onnion Dosai)<br>afnoon:(rice,sambar(egg+chips)),<br>night:(Dosai)"],
    ["Wednesday(Breakfast:Ven Pongal+Vadai)<br>afnoon:(rice + chappati,pachipaiyurKolambu(gabbage poriyal)),<br>night:(chapatti chicken Gravy or Briyani))"],
    ["Thursday(Breakfast:Idly)<br>afnoon:(rice,pulikolambu(beetroot poriyal)),<br>night:(poori)"],
    ["Friday(Breakfast:Dosai + kesari)<br>afnoon:(rice + variety rice,Sambar(potato poriyal)),<br>night:(chapatti)"],
    ["Saturday(Breakfast:Kothumi upma or semiya +egg noodle+veg noodle)<br>afnoon:(rice,pulikolambu(any one poriyal)),<br>night:(Naan or parotta)"],
    ["Sunday(Breakfast:Roast)<br>afnoon:(rice,chickenkolambu(Any one poriyal)),<br>night:(variety rice)"],
    ["In our campus they are 5 food courts,1 department store,1 Textile shop etc..."],
    ["K.S.R. College of Engineering, Tiruchengode is situated at K.S.R. Kalvi Nagar, Tiruchengode, Tamil Nadu. The nearest railway station is Erode Junction, which is about 14 KM away from the college and the nearest airport is Salem Airport, which is about 58 KM away from the college."]
  ]
  // Random for any other user input
  const alternative = [
    "Try again",
    "I'm not listening...Try again",
    "I don't understand :/"
  ]
  // Whatever else you want :)
  const coronavirus = ["Please stay home", "Wear a mask", "Fortunately, I don't have COVID", "These are uncertain times"]
  const developers = ["Developed by Batch(2020-2024) JEYANDHANN, DEEPAK KUMAR, DHANUSH, GOPIKANNAN, GOKULSHARMA, HARIHARAN"]
