
export default function Confused() {
    let arr=[
        {
          "step": "1️⃣ Define Your Goal 🎯",
          "content": "Start by getting crystal clear on what you want to achieve. A vague goal like 'get fit' won’t inspire action — but 'work out 3 times a week and lose 5kg in 3 months' gives you a roadmap. Write it down, speak it aloud, and commit. Use SMART criteria: Specific, Measurable, Achievable, Relevant, and Time-bound."
        },
        {
          "step": "2️⃣ Visualize Success 🧠",
          "content": "Spend a few minutes each day visualizing the outcome. Imagine how it feels when you reach your goal — the pride, the confidence, the transformation. This activates your brain’s reticular activating system (RAS), keeping your goal top-of-mind and attracting the right actions."
        },
        {
          "step": "3️⃣ Break It Down 🧩",
          "content": "Big goals are intimidating until you break them into smaller milestones. If your goal is to run a marathon, your first mini-goal might be to run 1km without stopping. These small wins build confidence and momentum. Every mountain is climbed one step at a time."
        },
        {
          "step": "4️⃣ Make a Plan 🗺️",
          "content": "Time to build your game plan. Set deadlines, create a timeline, and identify what needs to happen first. Ask yourself: What do I need to learn? What habits must I develop or drop? What resources or support will I need? Planning turns intention into execution."
        },
        {
          "step": "5️⃣ Build Good Habits 🔁",
          "content": "Habits are your autopilot systems. If your goal is to write a book, then writing 300 words every morning becomes your power habit. Make the habit easy to start, hard to avoid, and track your streaks for accountability."
        },
        {
          "step": "6️⃣ Stay Consistent 🔥",
          "content": "Motivation gets you started, but consistency keeps you going. Even on low-energy days, do something — no matter how small. Progress isn’t always visible, but it compounds over time. Show up for your goals daily, not just when it’s convenient."
        },
        {
          "step": "7️⃣ Track Your Progress 📈",
          "content": "Create a system to log your actions — journals, spreadsheets, habit trackers, or apps. Seeing how far you've come is incredibly motivating. If you’re off track, the data shows where and why, so you can realign your efforts instead of abandoning your goal."
        },
        {
          "step": "8️⃣ Learn & Adapt 📚",
          "content": "No journey is without detours. When something doesn’t work, don’t view it as failure — view it as feedback. Ask: What can I learn from this? What needs to change in my approach? Flexibility is a strength, not a weakness. Adapt and keep moving."
        },
        {
          "step": "9️⃣ Stay Positive 💪",
          "content": "Your mindset will either fuel or fight your progress. Practice gratitude, surround yourself with positive people, and affirm your goals daily. Eliminate negative self-talk. A positive attitude won't solve everything — but a negative one can sabotage your success."
        },
        {
          "step": "🔟 Never Give Up 🚀",
          "content": "Persistence is what separates achievers from dreamers. You’ll face doubts, obstacles, and tough days — but your 'why' must be stronger than your excuses. Rest if you must, but don’t quit. Every setback is a setup for a comeback."
        }
      ]
      
  return (
      <div className="flex Confused flex-wrap gap-10 p-3 py-8 justify-center items-center flex-col md:flex-row">
    
      {/* Hero Section */}
        <h1 className="text-2xl font-bold w-[100%] flex justify-center items-center">
          Here Are 10 Steps To Achieve Your Goal:
        </h1>

        {/* Steps */}
        <div className="flex flex-wrap gap-10 p-3 py-8 justify-center items-center ">
          {arr.map((item, index) => {
        return <div key={index} className="card flex flex-col p-8 md:w-[30%] w-[80%] sm:w-[50%] gap-4 shrink md:shrink-0 border rounded-md overflow-hidden text-center  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:h-min shadow-md">
          
           
            <span className="text-xl font-bold">{item.step}</span>
            <span className="text-xl font-bold">{item.content}</span>
          </div>})}

        {/* Add remaining steps here in the same structure */}
      </div>
    </div>
  );
}