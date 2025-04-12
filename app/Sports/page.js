"use client"

import React, { useState } from 'react'
import Goal from '../components/goal';
  export default function Home() {
    
      const [Quote, setQuote] = useState("The more difficult the victory, the greater the happiness in winning.")
    let arr=[
        {"id": 1, "quote": "The more difficult the victory, the greater the happiness in winning.", "author": "Pele"},
        {"id": 2, "quote": "Winning isn’t everything, but wanting to win is.", "author": "Vince Lombardi"},
        {"id": 3, "quote": "You miss 100% of the shots you don’t take.", "author": "Wayne Gretzky"},
        {"id": 4, "quote": "It’s not whether you get knocked down, it’s whether you get up.", "author": "Vince Lombardi"},
        {"id": 5, "quote": "I’ve missed more than 9,000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game-winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.", "author": "Michael Jordan"},
        {"id": 6, "quote": "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do.", "author": "Pele"},
        {"id": 7, "quote": "Do not let what you cannot do interfere with what you can do.", "author": "John Wooden"},
        {"id": 8, "quote": "You can’t win unless you learn how to lose.", "author": "Kareem Abdul-Jabbar"},
        {"id": 9, "quote": "Hard work beats talent when talent doesn’t work hard.", "author": "Tim Notke"},
        {"id": 10, "quote": "I am the greatest, I said that even before I knew I was.", "author": "Muhammad Ali"},
        {"id": 11, "quote": "The only way to prove that you’re a good sport is to lose.", "author": "Ernie Banks"},
        {"id": 12, "quote": "It’s not whether you get knocked down, it’s whether you get up.", "author": "Vince Lombardi"},
        {"id": 13, "quote": "Sports are the greatest thing in the world, but they are only a part of life.", "author": "Rick Pitino"},
        {"id": 14, "quote": "The difference between a good player and a great player is the ability to overcome failure.", "author": "Anonymous"},
        {"id": 15, "quote": "The harder you work, the harder it is to surrender.", "author": "Vince Lombardi"},
        {"id": 16, "quote": "The only way to do great work is to love what you do.", "author": "Steve Jobs"},
        {"id": 17, "quote": "A champion is afraid of losing. Everyone else is afraid of winning.", "author": "Billie Jean King"},
        {"id": 18, "quote": "It's not whether you win or lose, it's how you play the game.", "author": "Grantland Rice"},
        {"id": 19, "quote": "A true champion can adapt to anything.", "author": "Anonymous"},
        {"id": 20, "quote": "I never dreamed about success. I worked for it.", "author": "Estée Lauder"},
        {"id": 21, "quote": "There may be people that have more talent than you, but there’s no excuse for anyone to work harder than you do.", "author": "Derrick Jeter"},
        {"id": 22, "quote": "It’s not the will to win that matters, everyone has that. It’s the will to prepare to win that matters.", "author": "Paul “Bear” Bryant"},
        {"id": 23, "quote": "The only limit to our realization of tomorrow will be our doubts of today.", "author": "Franklin D. Roosevelt"},
        {"id": 24, "quote": "There are no shortcuts to any place worth going.", "author": "Beverly Sills"},
        {"id": 25, "quote": "To be successful, you have to be willing to do what others won’t.", "author": "Anonymous"},
        {"id": 26, "quote": "The greatest test of courage on the earth is to bear defeat without losing heart.", "author": "Robert Green Ingersoll"},
        {"id": 27, "quote": "Winning means you’re willing to go longer, work harder, and give more than anyone else.", "author": "Vince Lombardi"},
        {"id": 28, "quote": "The only thing that can stop you from fulfilling your dreams is you.", "author": "Anonymous"},
        {"id": 29, "quote": "Don’t count the days, make the days count.", "author": "Muhammad Ali"},
        {"id": 30, "quote": "Champions keep playing until they get it right.", "author": "Billie Jean King"},
        {"id": 31, "quote": "Everything is practice.", "author": "Pele"},
        {"id": 32, "quote": "Success is the sum of small efforts, repeated day in and day out.", "author": "Robert Collier"},
        {"id": 33, "quote": "The will to win is important, but the will to prepare is vital.", "author": "Joe Paterno"},
        {"id": 34, "quote": "It's not the size of the dog in the fight, it's the size of the fight in the dog.", "author": "Mark Twain"},
        {"id": 35, "quote": "You’ve got to get up every morning with determination if you’re going to go to bed with satisfaction.", "author": "George Lorimer"},
        {"id": 36, "quote": "Winning takes precedence over all. There’s no gray area. No almosts.", "author": "Kobe Bryant"},
        {"id": 37, "quote": "Do you know what my favorite part of the game is? The opportunity to play.", "author": "Mike Singletary"},
        {"id": 38, "quote": "Success is how high you bounce when you hit bottom.", "author": "George S. Patton"},
        {"id": 39, "quote": "Great things come from hard work and perseverance. No excuses.", "author": "Kobe Bryant"},
        {"id": 40, "quote": "Pain is temporary. Quitting lasts forever.", "author": "Lance Armstrong"},
        {"id": 41, "quote": "You must expect great things of yourself before you can do them.", "author": "Michael Jordan"},
        {"id": 42, "quote": "The only way to succeed is to take risks.", "author": "Anonymous"},
        {"id": 43, "quote": "There are no traffic jams along the extra mile.", "author": "Roger Staubach"},
        {"id": 44, "quote": "When you win, say nothing. When you lose, say less.", "author": "Paul Brown"},
        {"id": 45, "quote": "Life is 10% what happens to you and 90% how you respond to it.", "author": "Charles R. Swindoll"},
        {"id": 46, "quote": "You have to expect things of yourself before you can do them.", "author": "Michael Jordan"},
        {"id": 47, "quote": "Talent is never enough. With few exceptions, the best players are the hardest workers.", "author": "Magic Johnson"},
        {"id": 48, "quote": "Sportsmanship is the same as love of mankind.", "author": "Eric Liddell"},
        {"id": 49, "quote": "The more you sweat in practice, the less you bleed in battle.", "author": "Anonymous"},
        {"id": 50, "quote": "A great player is not someone who can do everything, but someone who makes his team better.", "author": "Kareem Abdul-Jabbar"},
        {"id": 51, "quote": "To give anything less than your best is to sacrifice the gift.", "author": "Steve Prefontaine"},
        {"id": 52, "quote": "The road to success is always under construction.", "author": "Lily Tomlin"},
        {"id": 53, "quote": "It’s not whether you win or lose, but how you play the game.", "author": "Grantland Rice"},
        {"id": 54, "quote": "Hard work is the key to success.", "author": "Anonymous"},
        {"id": 55, "quote": "Success is the result of preparation, hard work, and learning from failure.", "author": "Colin Powell"},
        {"id": 56, "quote": "A winner is a dreamer who never gives up.", "author": "Nelson Mandela"},
        {"id": 57, "quote": "Winning means you’re willing to go longer, work harder, and give more than anyone else.", "author": "Vince Lombardi"},
        {"id": 58, "quote": "Good things come to those who work hard and never give up.", "author": "Anonymous"},
        {"id": 59, "quote": "Never give up. Failure and rejection are only the first step to succeeding.", "author": "Jim Valvano"},
        {"id": 60, "quote": "You are never a loser until you quit trying.", "author": "Mike Ditka"},
        {"id": 61, "quote": "The only place success comes before work is in the dictionary.", "author": "Vince Lombardi"},
        {"id": 62, "quote": "You’re never a loser until you quit trying.", "author": "Mike Ditka"},
        {"id": 63, "quote": "Winning isn’t everything, but it’s a lot more fun than losing.", "author": "Anonymous"},
        {"id": 64, "quote": "Success is not final, failure is not fatal: It is the courage to continue that counts.", "author": "Winston Churchill"},
        {"id": 65, "quote": "It’s not the size of the dog in the fight, it’s the size of the fight in the dog.", "author": "Mark Twain"},
        {"id": 66, "quote": "The only way to prove that you’re a good sport is to lose.", "author": "Ernie Banks"},
        {"id": 67, "quote": "Every champion was once a contender who refused to give up.", "author": "Rocky Balboa"},
        {"id": 68, "quote": "The harder the battle, the sweeter the victory.", "author": "Les Brown"},
        {"id": 69, "quote": "You can’t put a limit on anything. The more you dream, the farther you get.", "author": "Michael Phelps"},
        {"id": 70, "quote": "Life is like a sport: You must practice every day to get better.", "author": "Anonymous"},
        {"id": 71, "quote": "You don’t have to be great to start, but you have to start to be great.", "author": "Zig Ziglar"},
        {"id": 72, "quote": "Success in sports comes when you have a deep passion for the game and you’re willing to work hard to develop the necessary skills.", "author": "Anonymous"},
        {"id": 73, "quote": "The best way to predict your future is to create it.", "author": "Abraham Lincoln"},
        {"id": 74, "quote": "No matter how many mistakes you make or how slow you progress, you are still way ahead of everyone who isn’t trying.", "author": "Tony Robbins"},
        {"id": 75, "quote": "A champion is someone who gets up when he can’t.", "author": "Jack Dempsey"},
        {"id": 76, "quote": "The only time success comes before work is in the dictionary.", "author": "Vince Lombardi"},
        {"id": 77, "quote": "Pain is temporary. Quitting lasts forever.", "author": "Lance Armstrong"},
        {"id": 78, "quote": "A team is only as strong as its weakest player.", "author": "Anonymous"},
        {"id": 79, "quote": "Don’t give up. Don’t ever give up.", "author": "Jim Valvano"},
        {"id": 80, "quote": "To succeed in sports, you must master the art of overcoming failure.", "author": "Anonymous"},
        {"id": 81, "quote": "The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack in will.", "author": "Vince Lombardi"},
        {"id": 82, "quote": "The only way to do great work is to love what you do.", "author": "Steve Jobs"},
        {"id": 83, "quote": "It’s hard to beat a person who never gives up.", "author": "Babe Ruth"},
        {"id": 84, "quote": "Do not count the days. Make the days count.", "author": "Muhammad Ali"},
        {"id": 85, "quote": "Victory is won not in miles, but in inches.", "author": "Louis L’Amour"},
        {"id": 86, "quote": "Set your goals high, and don’t stop till you get there.", "author": "Bo Jackson"},
        {"id": 87, "quote": "It’s not about being the best, but being better than you were yesterday.", "author": "Anonymous"},
        {"id": 88, "quote": "If you fail to prepare, you’re prepared to fail.", "author": "Mark Spitz"},
        {"id": 89, "quote": "A winner is someone who never stops trying.", "author": "Anonymous"},
        {"id": 90, "quote": "Talent wins games, but teamwork and intelligence win championships.", "author": "Michael Jordan"},
        {"id": 91, "quote": "You don’t have to be great to start, but you have to start to be great.", "author": "Zig Ziglar"},
        {"id": 92, "quote": "Never let the fear of striking out keep you from playing the game.", "author": "Babe Ruth"},
        {"id": 93, "quote": "A champion is someone who gets up when he can’t.", "author": "Jack Dempsey"},
        {"id": 94, "quote": "No matter how slow you go, you are still lapping everyone on the couch.", "author": "Anonymous"},
        {"id": 95, "quote": "Success is how high you bounce when you hit bottom.", "author": "George S. Patton"},
        {"id": 96, "quote": "The harder you work, the harder it is to surrender.", "author": "Vince Lombardi"},
        {"id": 97, "quote": "A champion is afraid of losing. Everyone else is afraid of winning.", "author": "Billie Jean King"},
        {"id": 98, "quote": "You miss 100% of the shots you don’t take.", "author": "Wayne Gretzky"},
        {"id": 99, "quote": "Success is the sum of small efforts, repeated day in and day out.", "author": "Robert Collier"},
        {"id": 100, "quote": "The only way to prove that you’re a good sport is to lose.", "author": "Ernie Banks"}
      ]
      
      
      
      setInterval(() => {
        if(Quote){
            let ind=Math.floor(Math.random() *100)
            setQuote(arr[ind].quote)
        }
        else{
            setQuote(arr[1].quote)
        }
      }, 60000);
    return (
      <div>
        <main>
        <div className="w-screen p-10 py-16 my-8 yaan flex justify-center items-center sm:text-3xl text-2xl font-bold h-[250px] border herosection shadow-md hover:shadow-lg">
       
       {Quote}
      </div>
<Goal/>
        </main>
      </div>
    );
  }