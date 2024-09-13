const mixedMessages = {
  greetingsAndWelcomes: [
    "Hello! How's your day going?",
    "Welcome! How can I assist you today?",
    "Good morning! Ready to get started?",
    "Hi there! Anything exciting happening?",
    "Greetings! What brings you here today?",
  ],

  complimentsAndEncouragement: [
    "You're doing a fantastic job!",
    "Keep pushing, you're almost there!",
    "Your dedication is inspiring!",
    "You're making great progress!",
    "You're stronger than you think!",
  ],

  funFactsAndTrivia: [
    "Did you know that honey never spoils?",
    "Random fact: Octopuses have three hearts!",
    "Bananas are berries, but strawberries aren't.",
    "The Eiffel Tower can be 15 cm taller during the summer.",
    "A group of flamingos is called a 'flamboyance'.",
  ],

  questionsAndCuriosities: [
    "If you could live anywhere in the world, where would it be?",
    "What's the most interesting book you've ever read?",
    "If you could have dinner with any historical figure, who would it be?",
    "What's something you've always wanted to learn?",
    "If you could master any skill instantly, what would it be?",
  ],

  quotesAndInspiration: [
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Believe you can and you're halfway there.",
    "Don't watch the clock; do what it does. Keep going.",
    "Your time is limited, don’t waste it living someone else’s life.",
  ],

  jokesAndHumor: [
    "Why don’t skeletons fight each other? They don’t have the guts!",
    "I'm reading a book about anti-gravity, it's impossible to put down.",
    "Why was the math book sad? It had too many problems.",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "Why can't you give Elsa a balloon? Because she’ll let it go!",
  ],

  adviceAndTips: [
    "When in doubt, take a deep breath and reevaluate.",
    "Small steps every day lead to big results over time.",
    "Stay organized and prioritize your tasks.",
    "Always ask for help when you need it; it's a strength, not a weakness.",
    "Take breaks to avoid burnout; your mind needs rest too.",
  ],

  remindersAndNotifications: [
    "Don’t forget to take breaks while working!",
    "Your meeting starts in 30 minutes.",
    "Remember to drink water and stay hydrated.",
    "You have a deadline approaching tomorrow.",
    "Time to step away from the screen for a quick walk!",
  ],

  goodbyesAndSignOffs: [
    "Take care, and have a wonderful day!",
    "Looking forward to chatting again soon!",
    "Goodbye for now, catch you later!",
    "Stay awesome, and see you next time!",
    "Have a great evening! Talk soon.",
  ],

  thoughtProvokingPrompts: [
    "What would you do if you had unlimited time and resources?",
    "How would you describe happiness in three words?",
    "If you could change one thing about the world, what would it be?",
    "What’s the most important lesson you've learned so far in life?",
    "If you could relive one day in your life, which day would it be?",
  ],
};

// funtion to get random index between 0 and (array length - 1)
// Example: randomNumber([1,2,3]) returns value between 0 and 2
const randomNumber = (arr) => Math.floor(Math.random() * arr.length);
