var quotes = [
  {
    q: "Be yourself; everyone else is already taken.",
    author: "-- Oscar Wilde",
  },
  { q: "So many books, so little time.", author: "--Frank Zappa" },
  {
    q: "A room without books is like a body without a soul.",
    author: "-- Marcus Tullius Cicero",
  },
  {
    q: "You only live once, but if you do it right, once is enough.",
    author: "-- Mae West",
  },
  {
    q: "Be the change that you wish to see in the world.",
    author: "-- Mahatma Gandhi",
  },
  { q: "Be the change that you wish to see i", author: "-- Mahatma Gandhi" },
  {
    q: "In three words I can sum up everything I've learned about life: it goes on.",
    author: "-- Robert Frost",
  },
  {
    q: "If you tell the truth, you don't have to remember anything.",
    author: "-- Mark Twain ",
  },
  {
    q: "A friend is someone who knows all about you and still loves you.",
    author: "-- Elbert Hubbard ",
  },
  {
    q: "To live is the rarest thing in the world. Most people exist, that is all.",
    author: "-- Oscar Wilde ",
  },
  {
    q: "Insanity is doing the same thing, over and over again, but expecting different results.",
    author: "-- Narcotics Anonymous ",
  },
  {
    q: "It is better to be hated for what you are than to be loved for what you are not.",
    author: "-- Andre Gide, Autumn Leaves ",
  },
  {
    q: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    author: "--  Marilyn Monroe ",
  },
  {
    q: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "-- Albert Einstein ",
  },
  {
    q: "Don’t walk in front of me… I may not follow Don’t walk behind me… I may not lead Walk beside me… just be my friend",
    author: "-- Albert Camus",
  },
  {
    q: "Friendship ... is born at the moment when one man says to another , What! You too? I thought that no one but myself . . ",
    author: "-- C.S. Lewis, The Four Loves",
  },
  {
    q: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    author: "-- Ralph Waldo Emerson",
  },
  {
    q: "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.",
    author: "--  H. Jackson Brown Jr., P.S. I Love You",
  },
  {
    q: "I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when they're right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together.",
    author: "-- Marilyn Monroe",
  },
  {
    q: "Here's to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They're not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can't do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do.",
    author: "-- Steve Jobs",
  },
];
function generateQuote() {
  // var random = Math.random()
  // const random = Number.parseInt(Math.random() * generateQuote.length + 1);
  let random = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerHTML = quotes[random].q;
  document.getElementById("author").innerHTML = quotes[random].author;
}
