"use client"

import React, { useState } from 'react'
import Goal from '../components/goal';
  export default function Home() {
    
      const [Quote, setQuote] = useState("An investment in knowledge pays the best interest.")
    let arr=[
        {"id": 1, "quote": "An investment in knowledge pays the best interest.", "author": "Benjamin Franklin"},
        {"id": 2, "quote": "The rich invest in time, the poor invest in money.", "author": "Warren Buffett"},
        {"id": 3, "quote": "The goal of the investor should be to make as much money as possible, without taking unnecessary risks.", "author": "Warren Buffett"},
        {"id": 4, "quote": "It’s not your salary that makes you rich, it’s your spending habits.", "author": "Charles A. Jaffe"},
        {"id": 5, "quote": "Do not save what is left after spending, but spend what is left after saving.", "author": "Warren Buffett"},
        {"id": 6, "quote": "Price is what you pay. Value is what you get.", "author": "Warren Buffett"},
        {"id": 7, "quote": "The stock market is filled with individuals who know the price of everything, but the value of nothing.", "author": "Philip Fisher"},
        {"id": 8, "quote": "In investing, what is comfortable is rarely profitable.", "author": "Robert Arnott"},
        {"id": 9, "quote": "The four most dangerous words in investing are: 'This time it’s different.'", "author": "Sir John Templeton"},
        {"id": 10, "quote": "Financial freedom is available to those who learn about it and work for it.", "author": "Robert Kiyosaki"},
        {"id": 11, "quote": "Never depend on a single income. Make investment to create a second source.", "author": "Warren Buffett"},
        {"id": 12, "quote": "Money is a terrible master but an excellent servant.", "author": "P.T. Barnum"},
        {"id": 13, "quote": "The rich invest in time, the poor invest in money.", "author": "Warren Buffett"},
        {"id": 14, "quote": "The goal of the investor should be to make as much money as possible, without taking unnecessary risks.", "author": "Warren Buffett"},
        {"id": 15, "quote": "Wealth consists not in having great possessions, but in having few wants.", "author": "Epictetus"},
        {"id": 16, "quote": "A fool and his money are soon parted.", "author": "Thomas Tusser"},
        {"id": 17, "quote": "The rich get richer, and the poor get poorer.", "author": "Robert Kiyosaki"},
        {"id": 18, "quote": "Opportunities come infrequently. When it rains gold, put out the bucket, not the thimble.", "author": "Warren Buffett"},
        {"id": 19, "quote": "Don’t work for money, make money work for you.", "author": "Robert Kiyosaki"},
        {"id": 20, "quote": "Money doesn’t grow on trees, but it does grow in banks if you know how to manage it.", "author": "Anonymous"},
        {"id": 21, "quote": "The best time to plant a tree was 20 years ago. The second best time is now.", "author": "Chinese Proverb"},
        {"id": 22, "quote": "Never rely on a single income. Make investment to create a second source.", "author": "Warren Buffett"},
        {"id": 23, "quote": "The lack of money is the root of all evil.", "author": "Mark Twain"},
        {"id": 24, "quote": "Money is a good servant but a poor master.", "author": "Francis Bacon"},
        {"id": 25, "quote": "Beware of small expenses. A small leak will sink a great ship.", "author": "Benjamin Franklin"},
        {"id": 26, "quote": "Wealth is the ability to fully experience life.", "author": "Henry David Thoreau"},
        {"id": 27, "quote": "The rich invest in time, the poor invest in money.", "author": "Warren Buffett"},
        {"id": 28, "quote": "If you live for having it all, what you have is never enough.", "author": "Vicki Robin"},
        {"id": 29, "quote": "If you want to be rich, you have to educate yourself in financial matters.", "author": "Robert Kiyosaki"},
        {"id": 30, "quote": "Money is not the only answer, but it makes a difference.", "author": "Barack Obama"},
        {"id": 31, "quote": "Invest in yourself. Your career is the engine of your wealth.", "author": "Paul Clitheroe"},
        {"id": 32, "quote": "It’s not the money you make that counts, it’s the money you keep.", "author": "Robert Kiyosaki"},
        {"id": 33, "quote": "Money grows on the tree of persistence.", "author": "Anonymous"},
        {"id": 34, "quote": "In the world of money, there is no substitute for knowledge.", "author": "Anonymous"},
        {"id": 35, "quote": "Do not save what is left after spending, but spend what is left after saving.", "author": "Warren Buffett"},
        {"id": 36, "quote": "The real measure of your wealth is how much you'd be worth if you lost all your money.", "author": "Anonymous"},
        {"id": 37, "quote": "Money cannot buy happiness, but it can buy freedom, comfort, and security.", "author": "Anonymous"},
        {"id": 38, "quote": "The only thing money gives you is the freedom of not worrying about money.", "author": "Johnny Carson"},
        {"id": 39, "quote": "Beware of small expenses. A small leak will sink a great ship.", "author": "Benjamin Franklin"},
        {"id": 40, "quote": "The only way to make money is to make it work for you.", "author": "Anonymous"},
        {"id": 41, "quote": "A budget tells us what we can’t afford, but it doesn’t keep us from buying it.", "author": "William Feather"},
        {"id": 42, "quote": "He who has a why to live can bear almost any how.", "author": "Friedrich Nietzsche"},
        {"id": 43, "quote": "If you don’t find a way to make money while you sleep, you will work until you die.", "author": "Warren Buffett"},
        {"id": 44, "quote": "Too many people spend money they haven’t earned, to buy things they don’t want, to impress people they don’t like.", "author": "Will Rogers"},
        {"id": 45, "quote": "You must gain control over your money or the lack of it will forever control you.", "author": "Dave Ramsey"},
        {"id": 46, "quote": "Money, like emotions, is something you must control to keep your life on track.", "author": "Roy T. Bennett"},
        {"id": 47, "quote": "The goal isn’t more money. The goal is living life on your terms.", "author": "Chris Brogan"},
        {"id": 48, "quote": "A penny saved is a penny earned.", "author": "Benjamin Franklin"},
        {"id": 49, "quote": "Financial freedom is available to those who learn about it and work for it.", "author": "Robert Kiyosaki"},
        {"id": 50, "quote": "Making money is art and working is art and good business is the best art.", "author": "Andy Warhol"},
        {"id": 51, "quote": "The goal of investing is not to make as much money as possible, but to make enough money to live the life you want.", "author": "Anonymous"},
        {"id": 52, "quote": "If you want to be wealthy, you need to develop the mindset of someone who is already wealthy.", "author": "Brian Tracy"},
        {"id": 53, "quote": "The lack of money is the root of all evil.", "author": "Mark Twain"},
        {"id": 54, "quote": "Wealth consists not in having great possessions, but in having few wants.", "author": "Epictetus"},
        {"id": 55, "quote": "It’s not the money you make, it’s the money you keep.", "author": "Robert Kiyosaki"},
        {"id": 56, "quote": "Time is more valuable than money. You can get more money, but you cannot get more time.", "author": "Jim Rohn"},
        {"id": 57, "quote": "Wealth is the ability to fully experience life.", "author": "Henry David Thoreau"},
        {"id": 58, "quote": "Money is a good servant but a poor master.", "author": "Francis Bacon"},
        {"id": 59, "quote": "A wise person should have money in their head, but not in their heart.", "author": "Jonathan Swift"},
        {"id": 60, "quote": "The best investment you can make is in yourself.", "author": "Warren Buffett"},
        {"id": 61, "quote": "If you want to achieve financial freedom, you must become the master of your money, not its servant.", "author": "Anonymous"},
        {"id": 62, "quote": "Money doesn’t make you happy but it helps you become happy when you make the right choices.", "author": "Anonymous"},
        {"id": 63, "quote": "The most important thing in investing is not the return you get, but the risk you take.", "author": "Anonymous"},
        {"id": 64, "quote": "Rich people don’t work for money, they make money work for them.", "author": "Robert Kiyosaki"},
        {"id": 65, "quote": "If you’re not making money while you sleep, you’re not truly wealthy.", "author": "Warren Buffett"},
        {"id": 66, "quote": "Investing is a long-term game.", "author": "Anonymous"},
        {"id": 67, "quote": "A small leak will sink a great ship.", "author": "Benjamin Franklin"},
        {"id": 68, "quote": "It’s not your salary that makes you rich, it’s your spending habits.", "author": "Charles A. Jaffe"},
        {"id": 69, "quote": "The best investment you can make is in yourself.", "author": "Warren Buffett"},
        {"id": 70, "quote": "It’s not the amount of money you make, it’s what you do with it that counts.", "author": "Anonymous"},
        {"id": 71, "quote": "The best way to predict the future is to create it.", "author": "Abraham Lincoln"},
        {"id": 72, "quote": "You’re not wealthy if you can’t take care of your family and your future.", "author": "Anonymous"},
        {"id": 73, "quote": "You must invest in your knowledge and continue to learn throughout your life.", "author": "Anonymous"},
        {"id": 74, "quote": "Wealth consists not in having great possessions, but in having few wants.", "author": "Epictetus"},
        {"id": 75, "quote": "Money often costs too much.", "author": "Ralph Waldo Emerson"},
        {"id": 76, "quote": "Wealth is the ability to fully experience life.", "author": "Henry David Thoreau"},
        {"id": 77, "quote": "Investing is a marathon, not a sprint.", "author": "Anonymous"},
        {"id": 78, "quote": "Your wealth can be created not by your salary but by your investments.", "author": "Anonymous"},
        {"id": 79, "quote": "Financial freedom is achieved by learning to control your money, rather than letting it control you.", "author": "Dave Ramsey"},
        {"id": 80, "quote": "To build wealth, you must start with the basics and then consistently invest for the long term.", "author": "Anonymous"},
        {"id": 81, "quote": "A rich man is nothing but a poor man with money.", "author": "Henry Ward Beecher"},
        {"id": 82, "quote": "You don’t have to be great to start, but you have to start to be great.", "author": "Zig Ziglar"},
        {"id": 83, "quote": "The real key to wealth is not making money, it’s keeping it.", "author": "Anonymous"},
        {"id": 84, "quote": "The most important thing is to be clear about the value you provide and focus on the long-term.", "author": "Anonymous"},
        {"id": 85, "quote": "Your income is directly related to your value.", "author": "Anonymous"},
        {"id": 86, "quote": "The key to making money is to keep learning and never stop.", "author": "Anonymous"},
        {"id": 87, "quote": "The best investment is the one you make in yourself.", "author": "Warren Buffett"},
        {"id": 88, "quote": "The key to wealth is not in accumulating, but in preserving what you have.", "author": "Anonymous"},
        {"id": 89, "quote": "Wealth isn’t just about money. It’s about having the time to enjoy life on your terms.", "author": "Anonymous"},
        {"id": 90, "quote": "Success is not how much money you make, but the difference you make in people’s lives.", "author": "Michelle Obama"},
        {"id": 91, "quote": "Your money should work for you, not the other way around.", "author": "Anonymous"},
        {"id": 92, "quote": "Saving is good, but investing is where the true wealth is built.", "author": "Anonymous"},
        {"id": 93, "quote": "It's not how much money you make, but how much you keep and how you manage it.", "author": "Anonymous"},
        {"id": 94, "quote": "In the world of money, there is no substitute for knowledge.", "author": "Anonymous"},
        {"id": 95, "quote": "Don’t wait for the perfect opportunity, create it.", "author": "Anonymous"},
        {"id": 96, "quote": "The money you save will be your financial freedom.", "author": "Anonymous"},
        {"id": 97, "quote": "Wealth is not in having a lot of money, but in having a lot of control over your time.", "author": "Anonymous"},
        {"id": 98, "quote": "The best investment you can make is in yourself.", "author": "Warren Buffett"},
        {"id": 99, "quote": "Invest in yourself first. You can never go wrong by investing in yourself.", "author": "Warren Buffett"},
        {"id": 100, "quote": "Financial success is a journey, not a destination.", "author": "Anonymous"}
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