"use client"

import React, { useState } from 'react'
import Goal from '../components/goal';
  export default function Home() {
    
      const [Quote, setQuote] = useState("The only bad workout is the one that didn’t happen.")
    let arr=[
        {"id": 1, "quote": "The only bad workout is the one that didn’t happen.", "author": "Anonymous"},
        {"id": 2, "quote": "Your body can stand almost anything. It’s your mind that you have to convince.", "author": "Anonymous"},
        {"id": 3, "quote": "Exercise is a celebration of what your body can do, not a punishment for what you ate.", "author": "Anonymous"},
        {"id": 4, "quote": "The body achieves what the mind believes.", "author": "Anonymous"},
        {"id": 5, "quote": "Don’t limit your challenges. Challenge your limits.", "author": "Anonymous"},
        {"id": 6, "quote": "Fitness is not about being better than someone else. It’s about being better than you used to be.", "author": "Anonymous"},
        {"id": 7, "quote": "Success starts with self-discipline.", "author": "Anonymous"},
        {"id": 8, "quote": "The pain you feel today will be the strength you feel tomorrow.", "author": "Anonymous"},
        {"id": 9, "quote": "Take care of your body. It’s the only place you have to live.", "author": "Jim Rohn"},
        {"id": 10, "quote": "If it doesn’t challenge you, it won’t change you.", "author": "Fred Devito"},
        {"id": 11, "quote": "Strength does not come from what you can do. It comes from overcoming the things you once thought you couldn’t.", "author": "Anonymous"},
        {"id": 12, "quote": "Exercise to be fit, not skinny. Eat to nourish your body and always ignore the haters, doubters, and unhealthy examples that were once feeding you.", "author": "Anonymous"},
        {"id": 13, "quote": "You don’t have to be great to start, but you have to start to be great.", "author": "Zig Ziglar"},
        {"id": 14, "quote": "A one hour workout is 4% of your day. No excuses.", "author": "Anonymous"},
        {"id": 15, "quote": "It never gets easier. You just get stronger.", "author": "Anonymous"},
        {"id": 16, "quote": "Push yourself because no one else is going to do it for you.", "author": "Anonymous"},
        {"id": 17, "quote": "Fall in love with taking care of yourself.", "author": "Anonymous"},
        {"id": 18, "quote": "The only way to do great work is to love what you do.", "author": "Steve Jobs"},
        {"id": 19, "quote": "A healthy outside starts from the inside.", "author": "Robert Urich"},
        {"id": 20, "quote": "The difference between who you are and who you want to be is what you do.", "author": "Anonymous"},
        {"id": 21, "quote": "Excuses don’t burn calories.", "author": "Anonymous"},
        {"id": 22, "quote": "Work hard in silence, let your success be your noise.", "author": "Frank Ocean"},
        {"id": 23, "quote": "Success is the sum of small efforts, repeated day in and day out.", "author": "Robert Collier"},
        {"id": 24, "quote": "Don’t stop when you’re tired, stop when you’re done.", "author": "Anonymous"},
        {"id": 25, "quote": "Fitness is like a relationship. You can’t cheat and expect it to work.", "author": "Anonymous"},
        {"id": 26, "quote": "You don’t have to be extreme, just consistent.", "author": "Anonymous"},
        {"id": 27, "quote": "Great things never come from comfort zones.", "author": "Anonymous"},
        {"id": 28, "quote": "Take the risk or lose the chance.", "author": "Anonymous"},
        {"id": 29, "quote": "The hardest part is starting. Once you do, it gets easier.", "author": "Anonymous"},
        {"id": 30, "quote": "Exercise should be regarded as a tribute to the heart.", "author": "Gene Tunney"},
        {"id": 31, "quote": "You are one workout away from a good mood.", "author": "Anonymous"},
        {"id": 32, "quote": "Don’t wait for inspiration. Start, and then inspiration will find you.", "author": "Anonymous"},
        {"id": 33, "quote": "The only bad workout is the one that didn’t happen.", "author": "Anonymous"},
        {"id": 34, "quote": "Success starts with self-discipline.", "author": "Anonymous"},
        {"id": 35, "quote": "It’s not about perfect. It’s about effort.", "author": "Anonymous"},
        {"id": 36, "quote": "Every workout is progress, no matter how small.", "author": "Anonymous"},
        {"id": 37, "quote": "If you don’t make time for fitness now, you’ll be forced to make time for illness later.", "author": "Anonymous"},
        {"id": 38, "quote": "Believe you can and you’re halfway there.", "author": "Theodore Roosevelt"},
        {"id": 39, "quote": "The more you sweat in practice, the less you bleed in battle.", "author": "Anonymous"},
        {"id": 40, "quote": "Fitness is not about being better than someone else. It’s about being better than you used to be.", "author": "Anonymous"},
        {"id": 41, "quote": "Your mind will quit a thousand times before your body ever does. Feel the fear and do it anyway.", "author": "Anonymous"},
        {"id": 42, "quote": "When you feel like quitting, remember why you started.", "author": "Anonymous"},
        {"id": 43, "quote": "Nothing will work unless you do.", "author": "Maya Angelou"},
        {"id": 44, "quote": "The difference between try and triumph is just a little umph!", "author": "Anonymous"},
        {"id": 45, "quote": "Fit is not a destination, it’s a way of life.", "author": "Anonymous"},
        {"id": 46, "quote": "Motivation is what gets you started. Habit is what keeps you going.", "author": "Jim Ryun"},
        {"id": 47, "quote": "Don’t wish for a good body. Work for it.", "author": "Anonymous"},
        {"id": 48, "quote": "You don’t get what you wish for, you get what you work for.", "author": "Anonymous"},
        {"id": 49, "quote": "If you want something you’ve never had, you must be willing to do something you’ve never done.", "author": "Thomas Jefferson"},
        {"id": 50, "quote": "The best way to predict the future is to create it.", "author": "Abraham Lincoln"},
        {"id": 51, "quote": "It’s going to be a journey. It’s not a sprint to get in shape.", "author": "Kerri Walsh Jennings"},
        {"id": 52, "quote": "You are stronger than you think.", "author": "Anonymous"},
        {"id": 53, "quote": "No matter how slow you go, you are still lapping everyone on the couch.", "author": "Anonymous"},
        {"id": 54, "quote": "Fitness is not about being perfect. It’s about effort.", "author": "Anonymous"},
        {"id": 55, "quote": "Be stronger than your strongest excuse.", "author": "Anonymous"},
        {"id": 56, "quote": "Exercise is the key not only to physical health but to peace of mind.", "author": "Nelson Mandela"},
        {"id": 57, "quote": "If you’re tired of starting over, stop giving up.", "author": "Anonymous"},
        {"id": 58, "quote": "You are what you do, not what you say you’ll do.", "author": "Anonymous"},
        {"id": 59, "quote": "Get comfortable with being uncomfortable.", "author": "Jillian Michaels"},
        {"id": 60, "quote": "If you can’t stop thinking about it, don’t stop working for it.", "author": "Anonymous"},
        {"id": 61, "quote": "Train like a beast, look like a beauty.", "author": "Anonymous"},
        {"id": 62, "quote": "Don’t limit your challenges, challenge your limits.", "author": "Anonymous"},
        {"id": 63, "quote": "Work hard in silence, let your success be your noise.", "author": "Frank Ocean"},
        {"id": 64, "quote": "Discipline is the bridge between goals and accomplishment.", "author": "Jim Rohn"},
        {"id": 65, "quote": "Fitness is like a marriage. You can’t cheat and expect it to work.", "author": "Anonymous"},
        {"id": 66, "quote": "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.", "author": "Christian D. Larson"},
        {"id": 67, "quote": "The only time success comes before work is in the dictionary.", "author": "Vidal Sassoon"},
        {"id": 68, "quote": "Push yourself because no one else is going to do it for you.", "author": "Anonymous"},
        {"id": 69, "quote": "Pain is temporary, pride is forever.", "author": "Anonymous"},
        {"id": 70, "quote": "The harder you work for something, the greater you’ll feel when you achieve it.", "author": "Anonymous"},
        {"id": 71, "quote": "No matter how you feel, get up, dress up, show up, and never give up.", "author": "Anonymous"},
        {"id": 72, "quote": "The body achieves what the mind believes.", "author": "Anonymous"},
        {"id": 73, "quote": "You don’t have to be great to start, but you have to start to be great.", "author": "Zig Ziglar"},
        {"id": 74, "quote": "The pain you feel today will be the strength you feel tomorrow.", "author": "Anonymous"},
        {"id": 75, "quote": "Work hard in silence, let success make the noise.", "author": "Anonymous"},
        {"id": 76, "quote": "No one ever drowned in sweat.", "author": "Lou Holtz"},
        {"id": 77, "quote": "Failure is only a temporary change in direction to set you straight for your next success.", "author": "Anonymous"},
        {"id": 78, "quote": "Strength does not come from what you can do. It comes from overcoming the things you once thought you couldn’t.", "author": "Anonymous"},
        {"id": 79, "quote": "Success is the sum of small efforts, repeated day in and day out.", "author": "Robert Collier"},
        {"id": 80, "quote": "The best way to predict the future is to create it.", "author": "Abraham Lincoln"},
        {"id": 81, "quote": "You must expect great things of yourself before you can do them.", "author": "Michael Jordan"},
        {"id": 82, "quote": "You are one workout away from a good mood.", "author": "Anonymous"},
        {"id": 83, "quote": "Fitness is not about being better than someone else. It’s about being better than you used to be.", "author": "Anonymous"},
        {"id": 84, "quote": "If it doesn’t challenge you, it won’t change you.", "author": "Anonymous"},
        {"id": 85, "quote": "Start where you are. Use what you have. Do what you can.", "author": "Arthur Ashe"},
        {"id": 86, "quote": "The best way to get started is to quit talking and begin doing.", "author": "Walt Disney"},
        {"id": 87, "quote": "Fitness is not about being perfect. It’s about effort.", "author": "Anonymous"},
        {"id": 88, "quote": "Don’t quit. Suffer now and live the rest of your life as a champion.", "author": "Muhammad Ali"},
        {"id": 89, "quote": "Don’t stop when you’re tired. Stop when you’re done.", "author": "Anonymous"},
        {"id": 90, "quote": "The harder you work for something, the greater you’ll feel when you achieve it.", "author": "Anonymous"},
        {"id": 91, "quote": "Life has its ups and downs. We call them squats.", "author": "Anonymous"},
        {"id": 92, "quote": "When you feel like quitting, think about why you started.", "author": "Anonymous"},
        {"id": 93, "quote": "Fitness is not about being better than someone else. It’s about being better than you used to be.", "author": "Anonymous"},
        {"id": 94, "quote": "Don’t wish for a good body. Work for it.", "author": "Anonymous"},
        {"id": 95, "quote": "Excuses don’t burn calories.", "author": "Anonymous"},
        {"id": 96, "quote": "There is no shortcut. It takes time.", "author": "Anonymous"},
        {"id": 97, "quote": "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice, and most of all, love of what you are doing or learning to do.", "author": "Pele"},
        {"id": 98, "quote": "Your health is an investment, not an expense.", "author": "Anonymous"},
        {"id": 99, "quote": "Don’t count the days, make the days count.", "author": "Muhammad Ali"},
        {"id": 100, "quote": "Take care of your body. It’s the only place you have to live.", "author": "Jim Rohn"}
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