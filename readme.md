1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
Ans: getElementById and getElementsByClassName এর মধ্যে ৩টি প্রধান পার্থক্য  নিচে দেয়া হলোঃ
১। getElementById 'id' attribute দিয়ে  খোঁজা লাগে এবং
 getElementsByClassName 'class' attribute দিয়ে  খোঁজা লাগে । 

২। getElementById একটি একক element object সরাসরি return দেয় । 
getElementsByClassName একটি HTMLCollection return দেয় ।

৩। getElementById এর কোনো element না থাকলে, তাহলে null ফেরত আসে
getElementsByClassName এর কোনো element না থাকলে, তাহলে একটি খালি HTMLCollection ফেরত আসে ।

querySelector and querySelectorAll এর মধ্যে ৩টি প্রধান পার্থক্য  নিচে দেয়া হলোঃ
১। querySelector, CSS selector-এর সাথে মিলে এমন শুধুমাত্র প্রথম element-টি খুঁজে বের করে।
querySelectorAll, CSS selector-এর সাথে মিলে এমন সব element খুঁজে বের করে।

২। querySelector একটি একক element object সরাসরি return দেয় । 
querySelectorAll একটি NodeList ফেরত দেয় ।

৩। querySelector এর কোনো matching element না থাকলে, তাহলে null ফেরত আসে
querySelectorAll  যদি কোনো matching element না পাওয়া যায়, তাহলে এটি একটি খালি NodeList ফেরত দেয় । 


2. How do you **create and insert a new element into the DOM**?
Ans:    Create: নতুন eliment তৈরি করতে document.createElement() ব্যবহার করব। 
        bracket এর মধ্যে 'HTML tag name' দিব ।
        Insert: Insert করতে Parent eliment এর সাথে appendChild() বা অন্য উপায়ে  ব্যবহার করে নতুন eliment টি DOM এ Insert করব । 

3. What is **Event Bubbling** and how does it work?
Ans: Event Bubbling হলো DOM এর একটি প্রক্রিয়া যেখান একটি event ঘটলে সেই event টি প্রথমে target element এ কাজ করে, তারপর ধারাবাহিকভাবে তার parent eliment গুলোর দিকে উঠতে থাকে, Parent তারপর Grandparent এলিমেন্ট এইভাবে সবচেয়ে বড় এলিমেন্ট (যেমন: document বা window) পর্যন্ত পৌঁছায় ।  এটি অনেকটা জলের মধ্যে বুদবুদ ওঠার মতো, যেখানে বুদবুদটি নিচ থেকে উপরের দিকে উঠতে থাকে। যখন একটি HTML এলিমেন্টের উপর কোনো ইভেন্ট (যেমন: 'click') ঘটান, তখন সেই ইভেন্টটি প্রথমে ওই নির্দিষ্ট eliment এ থাকা event handler সক্রিয় করে । এরপর, event টি ওই এলিমেন্টের parent element এ যায়। যদি সেই প্যারেন্ট এলিমেন্টে কোনো event handler যুক্ত থাকে, তবে সেটিও সক্রিয় হয়, এভাবে উপরে উঠতে থাকে । 


4. What is **Event Delegation** in JavaScript? Why is it useful?
Ans: Event Delegation হলো একটি মাত্র event listener ব্যবহার করে অনেকগুলো child element এর event handle করার প্রক্রিয়া । 
Event Delegation এর কয়েকটি প্রয়োজনীয়তা হলোঃ
১। memory সাশ্রয় করে । 
২। code সংক্ষিপ্ত হয় ।
৩। ব্রাউজারের কাজের চাপ অনেক কমিয়ে পারফরম্যান্সকে অনেক উন্নত করা সম্ভব ।
৪। Dynamic Elements এর জন্য আলাদা করে নতুন এলিমেন্টগুলোর জন্য event listener অ্যাড করতে হবে না ।


5. What is the difference between **preventDefault() and stopPropagation()** methods?
Ans: preventDefault() এবং stopPropagation() এর মধ্যে প্রধান পার্থক্য হলো ঃ 
event এর default যে behavior আছে, তাকে বন্ধ করে দেয় অর্থাৎ ব্রাউজার কোনো নির্দিষ্ট event এর  জন্য যে স্বাভাবিক কাজ করে, preventDefault() সেটিকে বাধা দেয় । 
অপরদিকে, stopPropagation() কোনো event কে DOM tree-তে আর ছড়িয়ে পড়তে (propagate করতে) দেয় না । ফলে, event bubbling, capturing বন্ধ হয়ে যায় । 