// Auto-generated data for Finance For Kidz from live application

export type CategoryId = 'earn' | 'save' | 'spend' | 'grow';
export type Difficulty = 'beginner' | 'intermediate' | 'advanced';

export interface Category {
  id: CategoryId;
  label: string;
  emoji: string;
  gradient: string;
  soft: string;
  text: string;
  description: string;
}

export interface Lesson {
  id: string;
  order: number;
  title: string;
  category: CategoryId;
  difficulty: Difficulty;
  emoji: string;
  color?: string;
  summary: string;
  content: string;
  duration_minutes: number;
  age_min: number;
  age_max: number;
}

export interface QuizQuestion {
  id: string;
  lesson_id: string;
  order: number;
  question: string;
  options: string[];
  correct_index: number;
  explanation?: string;
}

export interface Badge {
  id: string;
  label: string;
  emoji: string;
  description: string;
}

export const CATEGORIES: Record<CategoryId, Category> = {
  earn: {
    id: 'earn',
    label: "Earning",
    emoji: "💼",
    gradient: "from-amber-400 to-orange-500",
    soft: "bg-amber-100",
    text: "text-amber-700",
    description: "Discover how money is made through work, chores, and ideas."
  },
  save: {
    id: 'save',
    label: "Saving",
    emoji: "🏦",
    gradient: "from-emerald-400 to-teal-500",
    soft: "bg-emerald-100",
    text: "text-emerald-700",
    description: "Learn to keep some money for later and reach your goals."
  },
  spend: {
    id: 'spend',
    label: "Spending",
    emoji: "🛒",
    gradient: "from-sky-400 to-blue-500",
    soft: "bg-sky-100",
    text: "text-sky-700",
    description: "Make smart choices when buying things you want and need."
  },
  grow: {
    id: 'grow',
    label: "Growing",
    emoji: "🌱",
    gradient: "from-violet-400 to-purple-500",
    soft: "bg-violet-100",
    text: "text-violet-700",
    description: "Let your money work for you and grow over time."
  }
};

export const DIFFICULTY_LABELS: Record<string, string> = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced"
};

export const BADGES: Badge[] = [
  { id: "first_step", label: "First Step", emoji: "👟", description: "Complete your first lesson" },
  { id: "earn_explorer", label: "Earn Explorer", emoji: "💼", description: "Finish all Earning lessons" },
  { id: "super_saver", label: "Super Saver", emoji: "🏦", description: "Finish all Saving lessons" },
  { id: "smart_spender", label: "Smart Spender", emoji: "🛒", description: "Finish all Spending lessons" },
  { id: "growth_guru", label: "Growth Guru", emoji: "🌱", description: "Finish all Growing lessons" },
  { id: "halfway_hero", label: "Halfway Hero", emoji: "⭐", description: "Complete half of all lessons" },
  { id: "money_master", label: "Money Master", emoji: "🏆", description: "Complete every lesson" }
];

export const LESSONS: Lesson[] = [
  {
    "id": "6a9671b6443851eadcd2de90",
    "order": 1,
    "title": "Barter System as Exchange",
    "category": "spend",
    "difficulty": "beginner",
    "emoji": "🔄",
    "color": "sky",
    "summary": "Learn how people traded goods directly before money was invented.",
    "content": "## General Background\n\nLong, long ago, people didn't have money at all! If you wanted something, you had to trade (or \"barter\") something you had for something you needed — like giving eggs for milk.\n\nBut barter was tricky. You had to find someone who wanted exactly what you had, at exactly the same time. So people started using things like shells, salt, and metal to make trading easier. That's how money was born!\n\n## Tips\n\n- Money is just a tool that makes trading fair and easy.\n- Anything can act as money if everyone agrees it has value.\n- Coins and notes are much easier to carry than animals or grain!\n\n## Examples\n\n- Long ago, a farmer might trade a bag of rice for a piece of cloth.\n- Today, we use coins and notes instead of trading goats for goods.\n- In ancient trading communities, shells and salt were used as money long before paper money existed.\n\n## Fun Facts\n\n- 🐚 Cowrie shells were used as money in parts of Africa and Asia for thousands of years!\n- 🪙 Some of the very first coins were made in a place called Lydia (in modern-day Turkey) around 2,600 years ago.\n\n## Think About\n\n1. **What** did people use to trade before money existed? — Bartering, like eggs for milk.\n2. **Why** was the barter system hard to use? — You had to find someone who wanted exactly what you had, at the same time.\n3. **How** did coins make trading easier? — They were small, light, and everyone agreed on their value.\n4. **Who** decided what could be used as money? — Communities and traders agreed together on what had value.\n5. **When** did people start using coins instead of bartering? — A very long time ago, once carrying grain or animals became too inconvenient.",
    "duration_minutes": 45,
    "age_min": 10,
    "age_max": 11
  },
  {
    "id": "6a7317de25029c8b5878a6a5",
    "order": 1,
    "title": "What Is Money, Really?",
    "category": "spend",
    "difficulty": "beginner",
    "emoji": "🪙",
    "color": "sky",
    "summary": "Discover what money is, why we use it, and how it makes trading things easier.",
    "content": "## Money is a tool\n\nImagine you have a toy car and your friend has stickers. You want the stickers, and your friend wants the toy car. You swap! That's called **bartering** — trading one thing for another.\n\nBut swapping gets tricky. What if you want stickers, but your friend wants a pencil — not your car? You'd have to find someone with a pencil who wants a car... that's a lot of work!\n\n## Enter money 💰\n\n**Money** is something everyone agrees has value. Instead of swapping stuff directly, you sell your stuff for money, then use that money to buy what you want.\n\n> Think of money as a *universal trading ticket* — everyone accepts it!\n\n## What can money be?\n\nMoney has looked very different throughout history:\n\n- 🐚 **Shells** — used by people long ago\n- 🥇 **Gold and silver coins** — shiny and rare\n- 📜 **Paper bills** — easy to carry\n- 💳 **Digital money** — numbers on a screen\n\n## Why is money useful?\n\n1. **It's easy to carry** — much lighter than a goat!\n2. **Everyone accepts it** — no hunting for the perfect swap\n3. **You can save it** — keep it for later\n4. **You can measure value** — compare prices easily\n\nMoney isn't magic — it only works because we all *agree* to trust it. That trust is what makes the whole world go round!",
    "duration_minutes": 4,
    "age_min": 6,
    "age_max": 10
  },
  {
    "id": "6a9671b6443851eadcd2de91",
    "order": 2,
    "title": "Pocket Money",
    "category": "earn",
    "difficulty": "beginner",
    "emoji": "💵",
    "color": "amber",
    "summary": "Understand pocket money and how to manage the money you receive.",
    "content": "## Background\n**Pocket money** is a small amount of money you receive regularly — maybe each week — to practice managing on your own. It could come from parents for doing chores, as a gift, or from a small job. Think of it as your first chance to learn how real money works.\n\n## What you'll learn\n- Where pocket money comes from.\n- How to make it last the whole week.\n- How to split it between saving, spending, and sharing.\n\n## Examples\n- 💵 You get Rs 100 a week and decide to save Rs 30.\n- 🎁 A relative gives you Rs 50 for your birthday.\n- 🧹 You earn Rs 20 by helping wash the car.\n\n## Tips\n- Don't spend it all on day one — spread it across the week.\n- Keep some for saving before you spend anything.\n- Ask before buying something expensive.\n\n## Activity\n💰 Sort your weekly pocket money into Save, Spend, and Share.\n\n## Think about\nHow much pocket money do you get, and how do you use it?",
    "duration_minutes": 45,
    "age_min": 10,
    "age_max": 11
  },
  {
    "id": "6a7317de25029c8b5878a6a6",
    "order": 2,
    "title": "Earning Your First Coins",
    "category": "earn",
    "difficulty": "beginner",
    "emoji": "💼",
    "color": "amber",
    "summary": "Learn the many ways kids can earn money through helping out, creativity, and effort.",
    "content": "## Money doesn't grow on trees 🌳\n\nWell, sort of — but you still have to climb up and pick it! Money comes to people who **do work** or **create value** for others.\n\n## How kids can earn money\n\nHere are some ideas:\n\n- 🧹 **Chores** — helping around the house beyond what you normally do\n- 🍋 **Lemonade stand** — sell drinks on a hot day\n- 🐶 **Pet sitting** — walk a neighbor's dog or feed their cat\n- 🌱 **Yard work** — rake leaves, water plants, pull weeds\n- 🎨 **Sell crafts** — make friendship bracelets or drawings\n- 📚 **Tutoring** — help a younger kid with homework\n\n## The golden rule of earning\n\n> The more **helpful** your work is to others, the more they'll want to pay you.\n\nPeople pay for things that:\n\n1. **Save them time** (they're busy)\n2. **Solve a problem** (they need it fixed)\n3. **Make them happy** (it's fun or nice)\n\n## Effort = Reward\n\nEarning money teaches you something powerful: when you work hard and help others, good things come back to you. The coins you earn feel extra special because *you* earned them!\n\nStart small, do your best, and always be honest. That's how trust — and a good reputation — grows.",
    "duration_minutes": 5,
    "age_min": 7,
    "age_max": 12
  },
  {
    "id": "6a9671b6443851eadcd2de92",
    "order": 3,
    "title": "Spending",
    "category": "spend",
    "difficulty": "beginner",
    "emoji": "🛒",
    "color": "sky",
    "summary": "Learn smart spending habits and how to make good money choices.",
    "content": "## Background\n**Spending** means using money to buy things. Every time you buy a snack, a toy, or a ticket, you are spending. The trick is to spend **wisely** — thinking before you pay, so you don't run out of money or buy things you don't really need.\n\n## What you'll learn\n- The difference between careful and careless spending.\n- How to think before you buy.\n- Why every choice has a trade-off.\n\n## Examples\n- 🍫 You have Rs 50: buy one big chocolate now, or save for a toy later.\n- 👟 Comparing two pairs of shoes before choosing the better value.\n- 🥤 Choosing water (free) over a Rs 30 juice so you keep money for later.\n\n## Tips\n- Ask yourself: \"Do I need this, or just want it?\"\n- Wait a day before big purchases — you might change your mind.\n- Keep track of small spends; they add up fast.\n\n## Activity\n🛒 Pick items you'd buy with Rs 100 and explain why.\n\n## Think about\nWas each purchase a need or a want?",
    "duration_minutes": 45,
    "age_min": 10,
    "age_max": 11
  },
  {
    "id": "6a7317de25029c8b5878a6a7",
    "order": 3,
    "title": "The Magic of Saving",
    "category": "save",
    "difficulty": "beginner",
    "emoji": "🏦",
    "color": "emerald",
    "summary": "Saving means choosing later over now. Learn why patience makes your money grow.",
    "content": "## Want it now or later? 🤔\n\nYou have $10. You could buy candy today... or you could save it. Next week, you have $10 more. Now you can buy that toy you really wanted!\n\nThat's the magic of **saving** — choosing to wait so you can get something even better later.\n\n## Why save?\n\n- 🎯 **To reach a goal** — a bike, a game, a gift for someone\n- 🛡️ **For surprises** — what if something breaks?\n- 📈 **To grow** — saved money can earn *more* money\n- 😌 **Peace of mind** — knowing you have a cushion feels good\n\n## The three jars method 🫙\n\nA great way to save is to split your money into three jars:\n\n1. **Spend** — for small things now\n2. **Save** — for bigger things later\n3. **Share** — for helping others or donating\n\n> A good rule: try to save at least **1 out of every 3** coins you get.\n\n## Patience pays off\n\nSaving is like planting a seed. At first, nothing seems to happen. But give it time, and it grows into something amazing. Every coin you save is a step closer to your dream.\n\nThe trick? Make it a **habit**. Save a little every time you get money, even if it's tiny. Small drops fill a big bucket!",
    "duration_minutes": 5,
    "age_min": 6,
    "age_max": 11
  },
  {
    "id": "6a9671b6443851eadcd2de93",
    "order": 4,
    "title": "Sharing",
    "category": "grow",
    "difficulty": "beginner",
    "emoji": "🤝",
    "color": "violet",
    "summary": "Discover the joy of sharing money and helping others.",
    "content": "## Background\n**Sharing** means giving some of your money, things, or time to help others. It could be donating to a charity, helping a friend in need, or sharing your lunch. Sharing doesn't always mean money — your time and kindness count too.\n\n## What you'll learn\n- Why sharing matters.\n- Different ways to share (charity, helping a friend).\n- How sharing makes everyone feel good.\n\n## Examples\n- 🤝 Giving Rs 10 to a food drive.\n- 📚 Donating old storybooks you no longer read.\n- ⏰ Spending an hour helping a younger sibling with homework.\n\n## Tips\n- Share what you can afford — even a little helps.\n- Sharing time can be just as valuable as sharing money.\n- Choose causes you care about.\n\n## Activity\n🤝 Think of someone you could help and how.\n\n## Think about\nHow does sharing make you and others feel?",
    "duration_minutes": 45,
    "age_min": 10,
    "age_max": 11
  },
  {
    "id": "6a7317de25029c8b5878a6a8",
    "order": 4,
    "title": "Needs vs. Wants",
    "category": "spend",
    "difficulty": "intermediate",
    "emoji": "🛒",
    "color": "sky",
    "summary": "Learn to tell the difference between things you need and things you just want.",
    "content": "## Two kinds of wishes\n\nWhen you walk into a store, everything looks tempting! But there's a big difference between:\n\n- ✅ A **need** — something you must have to live and be healthy\n- 💭 A **want** — something that's nice, but you could live without\n\n## Let's sort them!\n\n**Needs** are things like:\n\n- 🍎 Food and water\n- 👕 Clothes\n- 🏠 A safe home\n- 💊 Medicine\n- 📖 Education\n\n**Wants** are things like:\n\n- 🍭 Candy and snacks\n- 🎮 The newest video game\n- 👟 Fancy brand-name shoes\n- 🎬 Movie tickets\n\n> Not sure? Ask yourself: *\"Could I be healthy and safe without this?\"* If yes, it's probably a want.\n\n## It's okay to want things!\n\nWanting things isn't bad! The trick is **balance**. Take care of your needs first, save some money, and *then* enjoy a want as a treat.\n\n## The smart spender's checklist\n\nBefore buying something, ask:\n\n1. Is this a need or a want?\n2. Do I really need it, or do I just want it *right now*?\n3. Could I find it cheaper somewhere else?\n4. Will I still want it next week?\n\nLearning this difference helps you make smart choices — and makes your money last longer!",
    "duration_minutes": 4,
    "age_min": 7,
    "age_max": 12
  },
  {
    "id": "6a9671b6443851eadcd2de94",
    "order": 5,
    "title": "Saving",
    "category": "save",
    "difficulty": "beginner",
    "emoji": "🐷",
    "color": "emerald",
    "summary": "Learn why saving money is important and how to start.",
    "content": "## Background\n**Saving** means keeping some money instead of spending it all right now. When you save, you put money aside for later — for something big, for emergencies, or just to feel secure. A **piggy bank** is the simplest way to start.\n\n## What you'll learn\n- Why we save.\n- How saving helps you reach goals.\n- The habit of \"pay yourself first.\"\n\n## Examples\n- 🐷 Dropping Rs 10 a week into a piggy bank.\n- 🎮 Saving for 2 months to buy a new game.\n- 🌧️ Keeping a small fund for unexpected costs.\n\n## Tips\n- Save a little every time you get money — a habit beats a big one-time effort.\n- Keep savings somewhere you won't be tempted to dip in.\n- Set a goal so saving feels purposeful.\n\n## Activity\n🐷 Set a small savings goal for this month.\n\n## Think about\nWhat would you like to save up for?",
    "duration_minutes": 45,
    "age_min": 10,
    "age_max": 11
  },
  {
    "id": "6a7317de25029c8b5878a6a9",
    "order": 5,
    "title": "Budgeting Like a Boss",
    "category": "save",
    "difficulty": "intermediate",
    "emoji": "📊",
    "color": "emerald",
    "summary": "A budget is a plan for your money. Learn to make one that actually works.",
    "content": "## What's a budget?\n\nA **budget** is simply a plan for your money. It tells each coin where to go *before* you spend it.\n\n> Think of it like a map — without one, you might wander and run out of money. With one, you reach your destination!\n\n## The simple budget\n\nLet's say you earn $30 a month. A good plan looks like this:\n\n| Category | Amount | Why |\n|----------|--------|-----|\n| 💰 Save | $12 | For big goals |\n| 🛒 Spend | $12 | On things you need and want |\n| 🎁 Share | $6 | To help others |\n\n## How to make your own budget\n\n1. **Count your money** — how much do you get, and when?\n2. **List your goals** — what do you want to save for?\n3. **Split it up** — decide how much goes to save, spend, and share\n4. **Track it** — write down what you actually spend\n5. **Adjust** — change your plan if something isn't working\n\n## The 50-30-20 trick\n\nA popular rule (even grown-ups use it!):\n\n- **50%** for needs\n- **30%** for wants\n- **20%** for saving\n\nYou don't have to follow it exactly, but it's a great starting point.\n\n## Why budgets are powerful\n\nA budget puts *you* in control. Instead of wondering where your money went, you decide ahead of time. That's what money-smart people do — and you can be one too!",
    "duration_minutes": 6,
    "age_min": 9,
    "age_max": 13
  },
  {
    "id": "6a9671b6443851eadcd2de95",
    "order": 6,
    "title": "Earning",
    "category": "earn",
    "difficulty": "beginner",
    "emoji": "💼",
    "color": "amber",
    "summary": "Explore how people earn money through work and effort.",
    "content": "## Background\n**Earning** means receiving money in exchange for work, effort, or a service. Adults earn by doing jobs, and kids can earn too — by helping at home, selling crafts, or doing small tasks for neighbors. The key idea: effort and value bring reward.\n\n## What you'll learn\n- Different ways kids and adults earn.\n- That effort brings reward.\n- Why helping others is the heart of earning.\n\n## Examples\n- 👨‍🍳 A chef earns by cooking meals people enjoy.\n- 🧹 A kid earns Rs 20 by sweeping the yard.\n- 🎨 Selling handmade greeting cards to family.\n\n## Tips\n- Look for problems you can solve — that's where earning starts.\n- Do the job well so people trust you again.\n- Earn fairly; don't overcharge.\n\n## Activity\n💼 List three jobs and how each person earns.\n\n## Think about\nHow could you earn a little money at home?",
    "duration_minutes": 45,
    "age_min": 10,
    "age_max": 11
  },
  {
    "id": "6a7317de25029c8b5878a6aa",
    "order": 6,
    "title": "How Banks Help Your Money Grow",
    "category": "grow",
    "difficulty": "intermediate",
    "emoji": "🌱",
    "color": "violet",
    "summary": "Banks aren't just for storing money — they can help it grow through interest.",
    "content": "## Where do you keep money?\n\nUnder your mattress? In a piggy bank? Those keep money *safe*, but they don't help it *grow*.\n\nA **bank** does both.\n\n## What's a bank? 🏦\n\nA bank is a safe place to keep your money. But it also does something amazing: it can give you **extra money** over time, just for keeping yours there!\n\n## The secret: Interest ✨\n\nWhen you put money in a savings account, the bank pays you a little extra called **interest**. It's like a thank-you gift for trusting them with your money.\n\n> Let's say you save $100 and the bank gives 5% interest per year. After one year, you'd have **$105** — you earned $5 just by saving!\n\n## Compound magic 🪄\n\nHere's where it gets exciting. The next year, you earn interest on your *new total* ($105), not just the original $100. So you'd earn a bit more than $5.\n\nOver many years, this snowball gets bigger and bigger. It's called **compound interest**, and Albert Einstein supposedly called it the *eighth wonder of the world*!\n\n## Why start now?\n\nThe earlier you save, the more time your money has to grow. A kid who saves $50 at age 10 could have more at age 60 than an adult who saves $500 at age 40!\n\n> Time is the secret ingredient. The earlier you start, the more powerful the magic.\n\n## What you can do\n\n1. Ask a grown-up to help you open a **savings account**\n2. Add a little money regularly\n3. Leave it there and let interest do its thing\n4. Watch it grow over the years!\n\nBanks help your money work *for* you, even while you sleep.",
    "duration_minutes": 6,
    "age_min": 9,
    "age_max": 13
  },
  {
    "id": "6a9671b6443851eadcd2de96",
    "order": 7,
    "title": "Needs vs Wants",
    "category": "spend",
    "difficulty": "beginner",
    "emoji": "🤔",
    "color": "sky",
    "summary": "Tell the difference between needs and wants when spending.",
    "content": "## Background\nA **need** is something you must have to live and stay healthy — like food, water, shelter, and clothes. A **want** is something nice to have but not essential — like a toy, a treat, or the latest gadget. Knowing the difference helps you spend smart.\n\n## What you'll learn\n- Examples of needs and wants.\n- How to choose needs first.\n- That some things can be both!\n\n## Examples\n- 🍚 Food is a need; ice cream is a want.\n- 👕 School uniform is a need; branded sneakers are a want.\n- 📱 A phone for safety may be a need; the newest model is a want.\n\n## Tips\n- Always cover needs before spending on wants.\n- Ask: \"Could I live without this?\"\n- Wants are okay — just plan for them after needs.\n\n## Activity\n🛒 Sort a shopping list into Needs and Wants.\n\n## Think about\nCan something be both a need and a want?",
    "duration_minutes": 45,
    "age_min": 10,
    "age_max": 11
  },
  {
    "id": "6a7317de25029c8b5878a6ab",
    "order": 7,
    "title": "Borrowing and Paying Back",
    "category": "grow",
    "difficulty": "advanced",
    "emoji": "📝",
    "color": "violet",
    "summary": "Loans let you use money now and pay it back later — but there's a catch.",
    "content": "## Sometimes you need money now\n\nImagine your bike breaks and you need it fixed today — but you don't have enough saved. What can you do?\n\nYou might **borrow** money from someone, promising to pay it back later.\n\n## What's a loan?\n\nA **loan** is borrowed money. You get it now, and you agree to return it later — usually with a little extra called **interest**.\n\n> Borrow $100 → pay back $110. That extra $10 is the cost of borrowing.\n\n## The good and the risky\n\n**Loans can help when:**\n- You have an emergency\n- You're buying something important (like a house or education)\n- You're sure you can pay it back on time\n\n**Loans are risky when:**\n- You borrow for things you don't really need\n- You can't pay it back\n- The interest keeps adding up\n\n## The debt trap ⚠️\n\nIf you borrow and can't pay back, the interest keeps growing. Soon you owe *more* than you borrowed, and it gets harder to escape. That's called **debt**.\n\n> Always borrow only what you can confidently repay.\n\n## Be a smart borrower\n\n1. **Ask yourself:** Do I really need this now?\n2. **Can I save up instead?** Waiting is often cheaper.\n3. **Understand the deal:** How much will I pay back in total?\n4. **Have a plan:** Know exactly how you'll repay.\n\nBorrowing isn't bad — but it's a powerful tool that should be used carefully. Responsible borrowing is a key money skill for grown-up life!",
    "duration_minutes": 6,
    "age_min": 10,
    "age_max": 14
  },
  {
    "id": "6a9671b6443851eadcd2de97",
    "order": 8,
    "title": "Budgeting",
    "category": "spend",
    "difficulty": "beginner",
    "emoji": "📋",
    "color": "sky",
    "summary": "Learn to plan how you spend and save your money each month.",
    "content": "## Background\nA **budget** is a plan for your money — deciding in advance how much to save, spend, and share. Budgets keep you on track so you don't run out of money and can still reach your goals. Even kids can budget with pocket money.\n\n## What you'll learn\n- How to build a simple budget.\n- Why budgets keep you on track.\n- The \"Save–Spend–Share\" idea.\n\n## Examples\n- 📋 Rs 100 weekly: Rs 30 save, Rs 50 spend, Rs 20 share.\n- 🎯 Budgeting Rs 200 a month to buy a bicycle in 6 months.\n- 🛒 Sticking to Rs 40 at the snack shop.\n\n## Tips\n- Budget before you spend, not after.\n- Review your budget weekly and adjust.\n- Always leave room for saving.\n\n## Activity\n📋 Plan a monthly budget for your pocket money.\n\n## Think about\nDid your budget leave room for saving?",
    "duration_minutes": 45,
    "age_min": 11,
    "age_max": 12
  },
  {
    "id": "6a7317de25029c8b5878a6ac",
    "order": 8,
    "title": "Thinking Like an Entrepreneur",
    "category": "earn",
    "difficulty": "advanced",
    "emoji": "🚀",
    "color": "amber",
    "summary": "Entrepreneurs spot problems and solve them. Learn how to turn ideas into income.",
    "content": "## What's an entrepreneur?\n\nAn **entrepreneur** is someone who starts their own business by solving a problem or meeting a need. They don't wait for opportunities — they *create* them.\n\n> An entrepreneur sees a problem and thinks: *\"How can I fix this — and maybe earn something for my effort?\"*\n\n## Spotting opportunities\n\nGood entrepreneurs are **problem-finders**. They notice things like:\n\n- 🐕 *\"My neighbor is too busy to walk their dog\"* → dog-walking service\n- 📚 *\"Kids in my class struggle with math\"* → tutoring\n- 🍪 *\"There's no snack stand at the park\"* → bake sale\n- ♻️ *\"People throw away bottles\"* → recycling collection\n\n## The simple business plan\n\nEvery business — even a kid's — answers four questions:\n\n1. **What problem am I solving?**\n2. **Who needs it solved?** (your customers)\n3. **How will I solve it?** (your product or service)\n4. **What will it cost, and what will I charge?**\n\n## Money in, money out\n\nEvery business has:\n\n- 💸 **Costs** — what you spend to run it (supplies, tools)\n- 💰 **Revenue** — what you earn from customers\n- 📈 **Profit** — what's left after costs (revenue − costs)\n\n> If you spend $5 on lemonade mix and sell cups for $20, your **profit** is $15!\n\n## Skills that help\n\n- 💡 **Creativity** — thinking of new ideas\n- 🧗 **Grit** — not giving up when it's hard\n- 🗣️ **Communication** — telling people about your idea\n- 🤝 **Honesty** — building trust with customers\n\n## Start small, dream big\n\nYou don't need a lot of money to start. Many famous businesses began in a garage or at a kitchen table. What matters is:\n\n1. Solve a real problem\n2. Treat customers well\n3. Learn from mistakes\n4. Keep improving\n\nWhat problem could *you* solve today?",
    "duration_minutes": 7,
    "age_min": 10,
    "age_max": 14
  },
  {
    "id": "6a9671b6443851eadcd2de98",
    "order": 9,
    "title": "Discounts",
    "category": "spend",
    "difficulty": "beginner",
    "emoji": "🏷️",
    "color": "sky",
    "summary": "Understand discounts and how to tell a real deal from a trick.",
    "content": "## Background\nA **discount** means paying less than the original price. Shops offer discounts during sales or festivals to attract buyers. A real discount saves you money — but some \"deals\" are tricks where the price was raised first. Learning to spot the difference keeps your money safe.\n\n## What you'll learn\n- How discounts and sales work.\n- How to check if a deal is real.\n- How to compare original vs sale price.\n\n## Examples\n- 🏷️ A Rs 500 shirt on 20% off costs Rs 400.\n- 📉 A shop raises a price to Rs 600, then \"discounts\" it to Rs 500 — not a real deal!\n- 🎉 Festival sale: buy-one-get-one-free on notebooks.\n\n## Tips\n- Always check the original price, not just the discount sign.\n- A sale is only good if you needed the item anyway.\n- Compare prices at different shops before buying.\n\n## Activity\n🏷️ Compare full price vs sale price on three items.\n\n## Think about\nIs a sale always a good deal?",
    "duration_minutes": 45,
    "age_min": 11,
    "age_max": 12
  },
  {
    "id": "6a9671b6443851eadcd2de99",
    "order": 10,
    "title": "Saving Goals",
    "category": "save",
    "difficulty": "beginner",
    "emoji": "🎯",
    "color": "emerald",
    "summary": "Set a savings goal and plan the steps to reach it.",
    "content": "## Background\nA **saving goal** is something specific you want to buy or do in the future — like a bicycle, a gift, or a trip. Setting a clear goal with a price and a deadline turns a vague wish into a plan you can actually reach.\n\n## What you'll learn\n- How to set a clear goal.\n- The steps and time needed to reach it.\n- How to track progress.\n\n## Examples\n- 🚲 Save Rs 3,000 for a bicycle in 6 months (Rs 500/month).\n- 🎁 Save Rs 200 for a Mother's Day gift.\n- 🌍 Save Rs 50 a month toward a future trip.\n\n## Tips\n- Make your goal specific — name it and price it.\n- Break a big goal into small weekly steps.\n- Celebrate milestones to stay motivated.\n\n## Activity\n🎯 Set a goal and write the steps to achieve it.\n\n## Think about\nWhat's the first step to reach your goal?",
    "duration_minutes": 45,
    "age_min": 11,
    "age_max": 12
  },
  {
    "id": "6a9671b6443851eadcd2de9a",
    "order": 11,
    "title": "Comparison Shopping",
    "category": "spend",
    "difficulty": "beginner",
    "emoji": "🔍",
    "color": "sky",
    "summary": "Compare prices across shops to find the best value.",
    "content": "## Background\n**Comparison shopping** means checking prices and features at different shops before buying. It helps you find the best value for your money instead of buying the first thing you see. With online shopping, it's easier than ever.\n\n## What you'll learn\n- How to compare price, quality, and features.\n- Why the cheapest isn't always the best.\n- How to spot the best value.\n\n## Examples\n- 📏 Two notebooks: Rs 40 (100 pages) vs Rs 60 (200 pages) — the second is better value.\n- 🖊️ Same pen at Shop A for Rs 10 and Shop B for Rs 15.\n- 🌐 Checking three websites before buying headphones.\n\n## Tips\n- Compare the **cost per use**, not just the price tag.\n- Read reviews when shopping online.\n- Don't forget to include delivery costs.\n\n## Activity\n🛒 Compare the same item at three shops and pick the best deal.\n\n## Think about\nWas the cheapest option the best value?",
    "duration_minutes": 45,
    "age_min": 11,
    "age_max": 12
  },
  {
    "id": "6a9671b6443851eadcd2de9b",
    "order": 12,
    "title": "Barter as Value Proposition",
    "category": "spend",
    "difficulty": "intermediate",
    "emoji": "⚖️",
    "color": "sky",
    "summary": "Use barter to understand the true value of goods and services.",
    "content": "## Background\nIn barter, **value** is what makes a trade fair — both sides must feel what they're getting is worth what they're giving. The \"value proposition\" is the reason each side agrees: the item they receive solves a need or brings them joy equal to what they give up.\n\n## What you'll learn\n- How value is decided in a trade.\n- Why both sides must feel the trade is fair.\n- How money measures value better than barter.\n\n## Examples\n- 🐔 A chicken is worth 10 eggs because both sides agree.\n- 🧵 A handwoven scarf trades for a large bag of rice.\n- 🪵 Timber for tools: each side gets something they can't make themselves.\n\n## Tips\n- A fair trade leaves both people happy.\n- Value depends on how much someone needs something.\n- Scarcity (rare items) increases value.\n\n## Activity\n🤝 Design a fair trade and explain why both sides agree.\n\n## Think about\nHow would you decide the value of an apple vs an orange?",
    "duration_minutes": 45,
    "age_min": 12,
    "age_max": 13
  },
  {
    "id": "6a9671b6443851eadcd2de9c",
    "order": 13,
    "title": "Bank Accounts: Deposits, Withdrawals & ATM",
    "category": "grow",
    "difficulty": "intermediate",
    "emoji": "🏦",
    "color": "violet",
    "summary": "Learn how bank accounts work — deposits, withdrawals, and ATMs.",
    "content": "## Background\nA **bank account** is a safe place to keep your money at a bank. You can **deposit** (put money in), **withdraw** (take money out), and use an **ATM** (cash machine) to access your money anytime. Banks keep your money safer than a piggy bank and may even pay you for saving.\n\n## What you'll learn\n- How deposits and withdrawals work.\n- How to use an ATM safely.\n- Why banks are safer than keeping cash at home.\n\n## Examples\n- 💵 Depositing Rs 500 into your savings account.\n- 🏧 Withdrawing Rs 200 from an ATM with your card.\n- 📊 Checking your balance on a bank app.\n\n## Tips\n- Never share your PIN with anyone.\n- Count your cash at the ATM before leaving.\n- Keep a small notebook to track deposits and withdrawals.\n\n## Activity\n🏦 Role-play opening an account and making a deposit.\n\n## Think about\nWhy is a bank safer than a piggy bank?",
    "duration_minutes": 45,
    "age_min": 12,
    "age_max": 13
  },
  {
    "id": "6a9671b6443851eadcd2de9d",
    "order": 14,
    "title": "Digital Payments",
    "category": "grow",
    "difficulty": "intermediate",
    "emoji": "📱",
    "color": "violet",
    "summary": "Explore digital payments and how to use them safely.",
    "content": "## Background\n**Digital payments** let you pay without cash — using cards, mobile wallets, or apps. Money moves electronically from your account to the seller instantly. In Nepal, apps like eSewa, Khalti, and QR payments make this easy.\n\n## What you'll learn\n- How digital payments work.\n- Types: cards, wallets, QR, online banking.\n- Safety rules for paying online.\n\n## Examples\n- 📱 Scanning a shop's QR code to pay Rs 150.\n- 💳 Tapping a card at a store terminal.\n- 🌐 Buying an e-book online with a saved card.\n\n## Tips\n- Use trusted apps only.\n- Never share OTPs or passwords.\n- Check the amount before confirming.\n\n## Activity\n📱 List three ways you could pay without cash.\n\n## Think about\nWhat's safer: cash or digital payment? Why?",
    "duration_minutes": 45,
    "age_min": 12,
    "age_max": 13
  },
  {
    "id": "6a9671b6443851eadcd2de9e",
    "order": 15,
    "title": "Assets & Liabilities",
    "category": "grow",
    "difficulty": "intermediate",
    "emoji": "📊",
    "color": "violet",
    "summary": "Tell assets from liabilities with a quiz and discussion.",
    "content": "## Background\nAn **asset** is something you **own** that has value — like savings, a bicycle, or a piggy bank. A **liability** is something you **owe** — like borrowed money. Knowing the difference tells you whether your money is growing or shrinking.\n\n## What you'll learn\n- What assets and liabilities are.\n- How they affect your money.\n- Why assets grow your wealth.\n\n## Examples\n- 🐷 Savings: an asset.\n- 🚲 A bicycle you own: an asset.\n- 💸 Rs 500 you borrowed from a friend: a liability.\n\n## Tips\n- Aim to own more assets than liabilities.\n- Borrowing creates a liability — borrow carefully.\n- Things that lose value over time aren't strong assets.\n\n## Activity\n📊 List three things you own (assets) and any money you owe (liabilities).\n\n## Think about\nAre you growing your assets or your liabilities?",
    "duration_minutes": 45,
    "age_min": 12,
    "age_max": 13
  },
  {
    "id": "6a9671b6443851eadcd2de9f",
    "order": 16,
    "title": "Interest",
    "category": "grow",
    "difficulty": "advanced",
    "emoji": "📈",
    "color": "violet",
    "summary": "Understand interest — the cost of borrowing and reward for saving.",
    "content": "## Background\n**Interest** is the extra money a bank pays you for keeping your savings with them — a reward for saving. It's also the extra money you pay when you borrow. It's usually a percentage of the amount saved or borrowed.\n\n## What you'll learn\n- How interest rewards saving.\n- How interest is charged on borrowing.\n- The idea of a percentage rate.\n\n## Examples\n- 🏦 Save Rs 1,000 at 5% interest → you earn Rs 50 a year.\n- 💳 Borrow Rs 1,000 at 10% → you pay back Rs 1,100.\n- 📈 The longer you save, the more interest you earn.\n\n## Tips\n- Saving in an interest account grows your money.\n- Borrowing costs you more than you took.\n- Higher rates mean more reward (saving) or more cost (borrowing).\n\n## Activity\n📊 Calculate interest on a Rs 500 saving at 5%.\n\n## Think about\nWould you rather earn interest or pay it?",
    "duration_minutes": 45,
    "age_min": 13,
    "age_max": 14
  },
  {
    "id": "6a9671b6443851eadcd2dea0",
    "order": 17,
    "title": "Loans",
    "category": "grow",
    "difficulty": "advanced",
    "emoji": "💳",
    "color": "violet",
    "summary": "Learn how loans work — borrowing, repayment, and responsibility.",
    "content": "## Background\nA **loan** is money you borrow and promise to pay back later, usually with extra interest. People take loans for big things like a house or education. Loans are powerful but must be repaid on time, or they become a burden.\n\n## What you'll learn\n- What a loan is and how it works.\n- Why loans include interest.\n- The responsibility of repaying.\n\n## Examples\n- 🏫 A student loan to pay for college.\n- 🏠 A home loan paid back over many years.\n- 📱 A small loan to buy a phone, paid back monthly.\n\n## Tips\n- Only borrow what you can repay.\n- Pay on time to avoid extra fees.\n- Compare interest rates before taking a loan.\n\n## Activity\n📄 Write a simple \"loan agreement\" between two friends.\n\n## Think about\nWhen is borrowing a good idea?",
    "duration_minutes": 45,
    "age_min": 13,
    "age_max": 14
  },
  {
    "id": "6a9671b6443851eadcd2dea1",
    "order": 18,
    "title": "Currency",
    "category": "spend",
    "difficulty": "advanced",
    "emoji": "💱",
    "color": "sky",
    "summary": "Understand different currencies and exchange rates.",
    "content": "## Background\n**Currency** is the type of money a country uses — like the Nepali Rupee (Rs), US Dollar ($), or Euro (€). Each country's money has its own notes, coins, and value. When you travel, you often exchange one currency for another.\n\n## What you'll learn\n- What currency is and why countries differ.\n- How exchange rates work.\n- Why the same amount can be worth different values abroad.\n\n## Examples\n- 🇳🇵 Nepal uses the Rupee (NPR).\n- 🇺🇸 The USA uses the Dollar (USD).\n- 🔄 Rs 130 might equal about $1, depending on the exchange rate.\n\n## Tips\n- Exchange rates change daily.\n- Always check the rate before exchanging money.\n- Some currencies are stronger than others.\n\n## Activity\n🌍 Find the currency and symbol of three countries.\n\n## Think about\nWhy doesn't every country use the same money?",
    "duration_minutes": 45,
    "age_min": 13,
    "age_max": 14
  },
  {
    "id": "6a9671b6443851eadcd2dea2",
    "order": 19,
    "title": "Scams",
    "category": "grow",
    "difficulty": "advanced",
    "emoji": "⚠️",
    "color": "violet",
    "summary": "Learn to spot financial scams and protect your money.",
    "content": "## Background\nA **scam** is a trick used to steal your money or information. Scammers may send fake messages, offer \"too good to be true\" deals, or pretend to be someone you trust. Learning to spot scams keeps your money and identity safe.\n\n## What you'll learn\n- Common types of scams.\n- Warning signs to watch for.\n- How to protect yourself.\n\n## Examples\n- 📱 A text saying you \"won a prize\" but asking for your bank details.\n- 🎁 A deal that's \"too good to be true.\"\n- 👤 Someone pretending to be a friend asking for money urgently.\n\n## Tips\n- Never share OTPs, PINs, or passwords.\n- If it seems too good to be true, it probably is.\n- Verify with a trusted adult before paying.\n\n## Activity\n🛡️ Spot the scam: review three messages and find the fake one.\n\n## Think about\nWhat warning sign tells you something is a scam?",
    "duration_minutes": 45,
    "age_min": 13,
    "age_max": 14
  },
  {
    "id": "6a9671b6443851eadcd2dea3",
    "order": 20,
    "title": "Good Debt vs Bad Debt",
    "category": "grow",
    "difficulty": "advanced",
    "emoji": "🪤",
    "color": "violet",
    "summary": "Spot the debt trap and tell good debt from bad debt.",
    "content": "## Background\n**Good debt** is borrowing that helps you earn or grow in the future — like a loan for education or a small business. **Bad debt** is borrowing for things that lose value or that you can't repay easily — like expensive gadgets on credit. Knowing the difference is a key money skill.\n\n## What you'll learn\n- What makes debt \"good\" or \"bad.\"\n- How borrowing can build or harm your future.\n- Why repaying on time matters.\n\n## Examples\n- 🎓 A student loan for college: good debt (you gain skills).\n- 📱 Borrowing for a luxury phone you can't afford: bad debt.\n- 🏠 A home loan for a house you'll live in: often good debt.\n\n## Tips\n- Borrow only for things that grow in value or your skills.\n- Avoid borrowing for wants you can't repay.\n- Always read the terms before borrowing.\n\n## Activity\n⚖️ Sort five borrowing situations into good and bad debt.\n\n## Think about\nCan borrowing ever help you get ahead?",
    "duration_minutes": 45,
    "age_min": 13,
    "age_max": 14
  },
  {
    "id": "6a9671b6443851eadcd2dea4",
    "order": 21,
    "title": "Compound Interest",
    "category": "grow",
    "difficulty": "advanced",
    "emoji": "📈",
    "color": "violet",
    "summary": "See how compound interest makes your money grow faster.",
    "content": "## Background\n**Compound interest** is interest earned on both your savings **and** the interest you've already earned. It makes money grow faster over time — like a snowball rolling downhill, gathering more snow. The earlier you start saving, the bigger it grows.\n\n## What you'll learn\n- How compound interest works.\n- Why time is your best friend.\n- The snowball effect of reinvesting.\n\n## Examples\n- 📈 Rs 1,000 at 10%: Year 1 → Rs 1,100; Year 2 → Rs 1,210 (interest on Rs 1,100!).\n- ❄️ Like a snowball: the longer it rolls, the bigger it grows.\n- 🕐 Saving at age 10 vs age 20 can mean double the money by age 50.\n\n## Tips\n- Start early — time multiplies your money.\n- Don't withdraw the interest; let it grow.\n- Even small amounts compound over years.\n\n## Activity\n📊 Chart Rs 100 growing at 10% for 5 years.\n\n## Think about\nWhy does starting early matter so much?",
    "duration_minutes": 45,
    "age_min": 14,
    "age_max": 15
  },
  {
    "id": "6a9671b6443851eadcd2dea5",
    "order": 22,
    "title": "Credit",
    "category": "grow",
    "difficulty": "advanced",
    "emoji": "💳",
    "color": "violet",
    "summary": "Understand credit, credit scores, and borrowing responsibly.",
    "content": "## Background\n**Credit** is the ability to borrow money now and pay it back later. A **credit score** is a rating that shows how reliable you are at repaying. Good credit helps you get loans and better interest rates; bad credit makes borrowing hard and expensive.\n\n## What you'll learn\n- What credit is and how it works.\n- What a credit score means.\n- How to build good credit.\n\n## Examples\n- 💳 A credit card lets you buy now, pay later.\n- ⭐ Paying your bill on time raises your credit score.\n- ⚠️ Missing payments lowers your score.\n\n## Tips\n- Always pay on time to build trust.\n- Keep borrowing small and manageable.\n- Check your credit record regularly as an adult.\n\n## Activity\n⭐ Make a \"credit report card\" for a pretend borrower.\n\n## Think about\nWhy do lenders care about your credit score?",
    "duration_minutes": 45,
    "age_min": 14,
    "age_max": 15
  },
  {
    "id": "6a9671b6443851eadcd2dea6",
    "order": 23,
    "title": "Business Finance",
    "category": "grow",
    "difficulty": "advanced",
    "emoji": "🏢",
    "color": "violet",
    "summary": "Learn how businesses manage money — costs, profit, and growth.",
    "content": "## Background\n**Business finance** is how a business manages its money — tracking income, expenses, profit, and costs. A business earns **profit** when its income is bigger than its costs. Understanding this helps you run any venture, even a small one like a lemonade stand.\n\n## What you'll learn\n- How businesses track money.\n- The difference between income, cost, and profit.\n- Why profit keeps a business alive.\n\n## Examples\n- 🍋 Lemonade stand: sell 10 cups at Rs 20 = Rs 200 income; costs Rs 80 → profit Rs 120.\n- 🛒 A shop buys goods for Rs 50 and sells for Rs 70.\n- 📊 A business tracks expenses to find where money goes.\n\n## Tips\n- Keep income and costs recorded separately.\n- Lower costs to raise profit.\n- A business needs profit to survive.\n\n## Activity\n📈 Calculate profit for a pretend snack stall.\n\n## Think about\nWhat happens if costs are bigger than income?",
    "duration_minutes": 45,
    "age_min": 14,
    "age_max": 15
  },
  {
    "id": "6a9671b6443851eadcd2dea7",
    "order": 24,
    "title": "Advance Tax",
    "category": "grow",
    "difficulty": "advanced",
    "emoji": "🧾",
    "color": "violet",
    "summary": "Understand advance tax and how it's paid during the year.",
    "content": "## Background\n**Tax** is a portion of money people and businesses pay to the government to fund public services like schools, roads, and hospitals. **Advance tax** means paying tax during the year as you earn, instead of all at once at the end — it spreads the cost and avoids a big bill.\n\n## What you'll learn\n- What taxes are and why we pay them.\n- How advance tax spreads payments.\n- How taxes fund public services.\n\n## Examples\n- 🏫 Taxes pay for your school and libraries.\n- 🚗 A business pays advance tax every quarter.\n- 🛣️ Road repairs are funded by tax money.\n\n## Tips\n- Paying in advance avoids a big surprise bill.\n- Keep records of income for accurate tax.\n- Tax funds services everyone shares.\n\n## Activity\n🏛️ List three public services funded by taxes.\n\n## Think about\nWhy is paying tax important for a country?",
    "duration_minutes": 45,
    "age_min": 14,
    "age_max": 15
  },
  {
    "id": "6a9671b6443851eadcd2dea8",
    "order": 25,
    "title": "Emergency Fund",
    "category": "save",
    "difficulty": "advanced",
    "emoji": "🆘",
    "color": "emerald",
    "summary": "Build an emergency fund to handle life's surprises.",
    "content": "## Background\nAn **emergency fund** is savings set aside **only** for unexpected costs — like a medical bill, a broken phone, or a sudden trip. It's your financial safety net so surprises don't become disasters. Aim for enough to cover a few months of expenses.\n\n## What you'll learn\n- Why an emergency fund matters.\n- What counts as an emergency.\n- How to build one step by step.\n\n## Examples\n- 🌧️ Rs 5,000 saved for sudden medical costs.\n- 📱 A broken laptop you must replace urgently.\n- 🏠 A family keeps 3 months of expenses saved.\n\n## Tips\n- Start small — even Rs 100 a week builds a fund.\n- Keep it separate from spending money.\n- Use it only for real emergencies, not wants.\n\n## Activity\n🛟 List three situations that would count as emergencies.\n\n## Think about\nWhy is an emergency fund like an umbrella?",
    "duration_minutes": 45,
    "age_min": 14,
    "age_max": 15
  },
  {
    "id": "6a9671b6443851eadcd2dea9",
    "order": 26,
    "title": "Earning",
    "category": "earn",
    "difficulty": "advanced",
    "emoji": "💼",
    "color": "amber",
    "summary": "Explore careers and ways to earn money as you grow up.",
    "content": "## Background\n**Earning** at an advanced level means creating value in smart ways — building skills, starting ventures, and using your strengths to generate income. The more value you create for others, the more you can earn. It's about strategy, not just effort.\n\n## What you'll learn\n- How skills increase your earning power.\n- How to turn ideas into income.\n- Why creating value for others is key.\n\n## Examples\n- 💻 A teen learns coding and builds simple websites for shops.\n- 🎨 Selling digital art online to customers worldwide.\n- 🧠 A tutor earns by teaching a subject they're great at.\n\n## Tips\n- Build rare skills people will pay for.\n- Solve a real problem for your customers.\n- Reinvest some earnings to grow your skills.\n\n## Activity\n💡 Design a small venture based on a skill you have.\n\n## Think about\nWhat skill could you grow to earn more?",
    "duration_minutes": 45,
    "age_min": 14,
    "age_max": 15
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    "id": "6a9e42d6d061749084a472de",
    "lesson_id": "6a9671b6443851eadcd2dea5",
    "order": 1,
    "question": "What is credit?",
    "options": [
      "Money you give away",
      "The ability to borrow money now and pay it back later",
      "A type of savings",
      "A gift"
    ],
    "correct_index": 1,
    "explanation": "Credit lets you buy now and pay later."
  },
  {
    "id": "6a9e42d6d061749084a472e3",
    "lesson_id": "6a9671b6443851eadcd2dea6",
    "order": 1,
    "question": "What is profit?",
    "options": [
      "Money a business loses",
      "Income minus costs",
      "A type of loan",
      "A tax"
    ],
    "correct_index": 1,
    "explanation": "Profit is what's left when income is bigger than costs."
  },
  {
    "id": "6a9e42d6d061749084a472e8",
    "lesson_id": "6a9671b6443851eadcd2dea7",
    "order": 1,
    "question": "What is tax?",
    "options": [
      "A gift to a shop",
      "Money paid to the government to fund public services",
      "A type of loan",
      "A savings account"
    ],
    "correct_index": 1,
    "explanation": "Taxes fund public services like schools and roads."
  },
  {
    "id": "6a9e42d6d061749084a472ed",
    "lesson_id": "6a9671b6443851eadcd2dea8",
    "order": 1,
    "question": "What is an emergency fund?",
    "options": [
      "Money for treats",
      "Savings set aside only for unexpected costs",
      "A loan",
      "A type of tax"
    ],
    "correct_index": 1,
    "explanation": "An emergency fund covers sudden, unexpected expenses."
  },
  {
    "id": "6a9e42d6d061749084a472f2",
    "lesson_id": "6a9671b6443851eadcd2dea9",
    "order": 1,
    "question": "What increases your earning power?",
    "options": [
      "Doing nothing",
      "Building rare skills people will pay for",
      "Hiding your talents",
      "Avoiding work"
    ],
    "correct_index": 1,
    "explanation": "Skills people value let you earn more."
  },
  {
    "id": "6a9e42d6d061749084a472bb",
    "lesson_id": "6a9671b6443851eadcd2de9e",
    "order": 1,
    "question": "What is an asset?",
    "options": [
      "Something you owe",
      "Something you own that has value",
      "A loan",
      "A bill"
    ],
    "correct_index": 1,
    "explanation": "An asset is something you own that has value."
  },
  {
    "id": "6a9e42d6d061749084a472c0",
    "lesson_id": "6a9671b6443851eadcd2de9f",
    "order": 1,
    "question": "What is interest on savings?",
    "options": [
      "A fee for saving",
      "Extra money a bank pays you for keeping savings with them",
      "A type of loan",
      "A tax"
    ],
    "correct_index": 1,
    "explanation": "Interest is a reward the bank pays you for saving."
  },
  {
    "id": "6a9e42d6d061749084a472c5",
    "lesson_id": "6a9671b6443851eadcd2dea0",
    "order": 1,
    "question": "What is a loan?",
    "options": [
      "A gift of money",
      "Money you borrow and promise to pay back, usually with interest",
      "Free money",
      "A savings account"
    ],
    "correct_index": 1,
    "explanation": "A loan is borrowed money you must repay, usually with interest."
  },
  {
    "id": "6a9e42d6d061749084a472ca",
    "lesson_id": "6a9671b6443851eadcd2dea1",
    "order": 1,
    "question": "What is currency?",
    "options": [
      "The type of money a country uses",
      "A type of loan",
      "A bank account",
      "A tax"
    ],
    "correct_index": 0,
    "explanation": "Currency is the money a country uses, like Rupees or Dollars."
  },
  {
    "id": "6a9e42d6d061749084a472cf",
    "lesson_id": "6a9671b6443851eadcd2dea2",
    "order": 1,
    "question": "What is a scam?",
    "options": [
      "A fair deal",
      "A trick used to steal your money or information",
      "A type of savings",
      "A bank account"
    ],
    "correct_index": 1,
    "explanation": "A scam is a trick to steal money or personal information."
  },
  {
    "id": "6a9e42d6d061749084a472d4",
    "lesson_id": "6a9671b6443851eadcd2dea3",
    "order": 1,
    "question": "What is 'good debt'?",
    "options": [
      "Borrowing for things that lose value",
      "Borrowing that helps you earn or grow in the future",
      "Any loan",
      "Free money"
    ],
    "correct_index": 1,
    "explanation": "Good debt helps you grow, like a loan for education."
  },
  {
    "id": "6a9e42d6d061749084a472d9",
    "lesson_id": "6a9671b6443851eadcd2dea4",
    "order": 1,
    "question": "What is compound interest?",
    "options": [
      "Interest only on your original savings",
      "Interest earned on your savings AND on the interest you've already earned",
      "A type of tax",
      "A fee"
    ],
    "correct_index": 1,
    "explanation": "Compound interest is earned on savings plus previous interest."
  },
  {
    "id": "6a9e42d6d061749084a472a7",
    "lesson_id": "6a9671b6443851eadcd2de9a",
    "order": 1,
    "question": "What is comparison shopping?",
    "options": [
      "Buying the first thing you see",
      "Checking prices and features at different shops before buying",
      "Buying everything",
      "Shopping online only"
    ],
    "correct_index": 1,
    "explanation": "It means comparing options to find the best value."
  },
  {
    "id": "6a9e42d6d061749084a472ac",
    "lesson_id": "6a9671b6443851eadcd2de9b",
    "order": 1,
    "question": "What makes a barter trade fair?",
    "options": [
      "One person wins big",
      "Both sides feel what they get is worth what they give",
      "It's free",
      "It uses coins"
    ],
    "correct_index": 1,
    "explanation": "A fair trade leaves both people happy with the exchange."
  },
  {
    "id": "6a9e42d6d061749084a472b1",
    "lesson_id": "6a9671b6443851eadcd2de9c",
    "order": 1,
    "question": "What does 'deposit' mean?",
    "options": [
      "Taking money out",
      "Putting money into your account",
      "Spending money",
      "Losing money"
    ],
    "correct_index": 1,
    "explanation": "A deposit puts money into your bank account."
  },
  {
    "id": "6a9e42d6d061749084a472b6",
    "lesson_id": "6a9671b6443851eadcd2de9d",
    "order": 1,
    "question": "What is a digital payment?",
    "options": [
      "Paying with cash only",
      "Paying without cash using cards, wallets, or apps",
      "Trading goods",
      "Paying with a check only"
    ],
    "correct_index": 1,
    "explanation": "Digital payments move money electronically — no cash needed."
  },
  {
    "id": "6a9e42d6d061749084a47293",
    "lesson_id": "6a9671b6443851eadcd2de96",
    "order": 1,
    "question": "Which of these is a need?",
    "options": [
      "Ice cream",
      "Fresh drinking water",
      "A new video game",
      "Branded sneakers"
    ],
    "correct_index": 1,
    "explanation": "Water keeps you alive and healthy — it's a need. The others are wants."
  },
  {
    "id": "6a9e42d6d061749084a47298",
    "lesson_id": "6a9671b6443851eadcd2de97",
    "order": 1,
    "question": "What is a budget?",
    "options": [
      "A type of bank",
      "A plan for your money",
      "A kind of loan",
      "A savings account"
    ],
    "correct_index": 1,
    "explanation": "A budget is a plan that decides how to save, spend, and share."
  },
  {
    "id": "6a9e42d6d061749084a4729d",
    "lesson_id": "6a9671b6443851eadcd2de98",
    "order": 1,
    "question": "What is a discount?",
    "options": [
      "Paying more than the original price",
      "Paying less than the original price",
      "Getting a free item",
      "A type of tax"
    ],
    "correct_index": 1,
    "explanation": "A discount means you pay less than the original price."
  },
  {
    "id": "6a9e42d6d061749084a472a2",
    "lesson_id": "6a9671b6443851eadcd2de99",
    "order": 1,
    "question": "What is a saving goal?",
    "options": [
      "Something you buy today",
      "Something specific you want to save for in the future",
      "A type of loan",
      "A bank account"
    ],
    "correct_index": 1,
    "explanation": "A saving goal is a specific target you save up for."
  },
  {
    "id": "6a97c3fb213c53d5928c153b",
    "lesson_id": "6a7317de25029c8b5878a6aa",
    "order": 1,
    "question": "What is the extra money the bank gives you called?",
    "options": [
      "Tax",
      "Interest",
      "Pocket money",
      "Fee"
    ],
    "correct_index": 1,
    "explanation": "Interest is the extra money banks pay you for keeping your money in their care."
  },
  {
    "id": "6a97c3f83991ae71d8215d27",
    "lesson_id": "6a9671b6443851eadcd2de95",
    "order": 1,
    "question": "What does earning money mean?",
    "options": [
      "Finding money on the street",
      "Getting money for work or help",
      "Taking money from a toy box",
      "Printing money at home"
    ],
    "correct_index": 1,
    "explanation": "Earning money is receiving payment in exchange for your effort and tasks."
  },
  {
    "id": "6a97c3f3ba4420fa198be27d",
    "lesson_id": "6a7317de25029c8b5878a6a9",
    "order": 1,
    "question": "What is the best way to describe a budget?",
    "options": [
      "A list of things you want",
      "A map for your money",
      "A way to get more money",
      "A box for toys"
    ],
    "correct_index": 1,
    "explanation": "A budget acts like a map to guide your spending so you do not run out."
  },
  {
    "id": "6a97c3efba5f9c6fe12dc15f",
    "lesson_id": "6a9671b6443851eadcd2de94",
    "order": 1,
    "question": "What does it mean to save money?",
    "options": [
      "Spending it all on candy",
      "Keeping it to use later",
      "Giving it all away",
      "Throwing it in the trash"
    ],
    "correct_index": 1,
    "explanation": "Saving means you keep money now so you can afford something bigger later."
  },
  {
    "id": "6a97c3ebe1478b93acc001be",
    "lesson_id": "6a7317de25029c8b5878a6a8",
    "order": 1,
    "question": "Which of these is definitely a NEED?",
    "options": [
      "A superhero toy",
      "A yummy chocolate bar",
      "Fresh drinking water",
      "A colorful sticker"
    ],
    "correct_index": 2,
    "explanation": "You need water to stay healthy and alive every single day."
  },
  {
    "id": "6a97c3e6c24dcb5d63a05f2d",
    "lesson_id": "6a9671b6443851eadcd2de93",
    "order": 1,
    "question": "What is the best way to describe sharing?",
    "options": [
      "Keeping all your money",
      "Giving to help others",
      "Buying toys only for yourself",
      "Hiding your piggy bank"
    ],
    "correct_index": 1,
    "explanation": "Sharing is all about giving what you have to help someone else."
  },
  {
    "id": "6a97c0f83ea413831845467b",
    "lesson_id": "6a7317de25029c8b5878a6a7",
    "order": 1,
    "question": "What is the main benefit of saving your money?",
    "options": [
      "To get rid of money quickly",
      "To buy something better later",
      "To make your pockets lighter",
      "To lose your money forever"
    ],
    "correct_index": 1,
    "explanation": "Saving allows you to hold onto money so you can afford more expensive or important items in the future."
  },
  {
    "id": "6a97c0f2d1c970c779f4da5b",
    "lesson_id": "6a9671b6443851eadcd2de92",
    "order": 1,
    "question": "What is the main difference between a 'Need' and a 'Want'?",
    "options": [
      "A need is for fun, a want is for survival",
      "A need is essential for daily life, a want is something extra you desire",
      "There is no difference between them",
      "A need is expensive, a want is cheap"
    ],
    "correct_index": 1,
    "explanation": "Needs are things required to live, while wants are items that are nice to have but not strictly necessary."
  },
  {
    "id": "6a97c0ec48e1379a8afdca9e",
    "lesson_id": "6a9671b6443851eadcd2de91",
    "order": 1,
    "question": "What is the best way to handle your pocket money?",
    "options": [
      "Spend it all the second you get it",
      "Give it all to your friends",
      "Split it into Save, Spend, and Share",
      "Hide it in your room and never look at it"
    ],
    "correct_index": 2,
    "explanation": "Splitting your money helps you keep some for fun, save for big goals, and even help others."
  },
  {
    "id": "6a97c0e7317876d7bd6c1203",
    "lesson_id": "6a7317de25029c8b5878a6a6",
    "order": 1,
    "question": "What is the best way to think about earning money?",
    "options": [
      "Finding money on the ground",
      "Creating value or being helpful to others",
      "Asking for money whenever you want",
      "Waiting for money to grow in the garden"
    ],
    "correct_index": 1,
    "explanation": "Money is a reward for the effort you put into helping people or solving their problems."
  },
  {
    "id": "6a97c0e07bc24619e08ee377",
    "lesson_id": "6a9671b6443851eadcd2de90",
    "order": 1,
    "question": "What did people use before money was invented?",
    "options": [
      "Trading goods (barter)",
      "Credit cards",
      "Mobile apps",
      "Cheques"
    ],
    "correct_index": 0,
    "explanation": "Before money existed, people traded goods and services directly — this is called barter."
  },
  {
    "id": "6a97c0dcdb0938b163e4a6f4",
    "lesson_id": "6a7317de25029c8b5878a6a5",
    "order": 1,
    "question": "What is the main problem with bartering?",
    "options": [
      "It is too expensive.",
      "It is hard to find someone who wants what you have and has what you want.",
      "It only works with food.",
      "It makes things too easy to buy."
    ],
    "correct_index": 1,
    "explanation": "Bartering requires a 'double coincidence of wants,' which is very difficult to find!"
  },
  {
    "id": "6a7317ef25029c8b5878a6d3",
    "lesson_id": "6a7317de25029c8b5878a6ab",
    "order": 1,
    "question": "What is a loan?",
    "options": [
      "Money you give away forever",
      "Money you borrow and pay back later, usually with extra",
      "A type of savings account",
      "Money the bank gives for free"
    ],
    "correct_index": 1,
    "explanation": "A loan is borrowed money — you get it now and agree to pay it back later, usually with interest added."
  },
  {
    "id": "6a7317ef25029c8b5878a6d6",
    "lesson_id": "6a7317de25029c8b5878a6ac",
    "order": 1,
    "question": "What does an entrepreneur do?",
    "options": [
      "Waits for opportunities to appear",
      "Starts a business by solving a problem",
      "Spends all their money",
      "Avoids work"
    ],
    "correct_index": 1,
    "explanation": "An entrepreneur spots problems and creates solutions — building a business around meeting a need."
  },
  {
    "id": "6a9e42d6d061749084a472df",
    "lesson_id": "6a9671b6443851eadcd2dea5",
    "order": 2,
    "question": "What is a credit score?",
    "options": [
      "A game score",
      "A rating of how reliably you repay",
      "A bank's name",
      "A type of card"
    ],
    "correct_index": 1,
    "explanation": "A credit score shows how reliable you are at repaying."
  },
  {
    "id": "6a9e42d6d061749084a472e4",
    "lesson_id": "6a9671b6443851eadcd2dea6",
    "order": 2,
    "question": "A lemonade stand sells 10 cups at Rs 20 each. Costs are Rs 80. What's the profit?",
    "options": [
      "Rs 80",
      "Rs 120",
      "Rs 200",
      "Rs 20"
    ],
    "correct_index": 1,
    "explanation": "Income Rs 200 − costs Rs 80 = Rs 120 profit."
  },
  {
    "id": "6a9e42d6d061749084a472e9",
    "lesson_id": "6a9671b6443851eadcd2dea7",
    "order": 2,
    "question": "What is advance tax?",
    "options": [
      "Tax paid all at once at year-end",
      "Tax paid during the year as you earn",
      "A refund",
      "A discount"
    ],
    "correct_index": 1,
    "explanation": "Advance tax spreads payments across the year."
  },
  {
    "id": "6a9e42d6d061749084a472ee",
    "lesson_id": "6a9671b6443851eadcd2dea8",
    "order": 2,
    "question": "Which is a real emergency?",
    "options": [
      "A new video game",
      "A sudden medical bill",
      "A friend's birthday gift",
      "A toy on sale"
    ],
    "correct_index": 1,
    "explanation": "Medical emergencies are exactly what the fund is for."
  },
  {
    "id": "6a9e42d6d061749084a472f3",
    "lesson_id": "6a9671b6443851eadcd2dea9",
    "order": 2,
    "question": "What's the key to earning at an advanced level?",
    "options": [
      "Luck only",
      "Creating value for others",
      "Taking money",
      "Waiting"
    ],
    "correct_index": 1,
    "explanation": "The more value you create, the more you can earn."
  },
  {
    "id": "6a9e42d6d061749084a472bc",
    "lesson_id": "6a9671b6443851eadcd2de9e",
    "order": 2,
    "question": "What is a liability?",
    "options": [
      "Something you own",
      "Something you owe",
      "A type of savings",
      "A salary"
    ],
    "correct_index": 1,
    "explanation": "A liability is money you owe to someone else."
  },
  {
    "id": "6a9e42d6d061749084a472c1",
    "lesson_id": "6a9671b6443851eadcd2de9f",
    "order": 2,
    "question": "If you save Rs 1,000 at 5% interest, how much do you earn in a year?",
    "options": [
      "Rs 500",
      "Rs 50",
      "Rs 5",
      "Rs 1,000"
    ],
    "correct_index": 1,
    "explanation": "5% of Rs 1,000 is Rs 50."
  },
  {
    "id": "6a9e42d6d061749084a472c6",
    "lesson_id": "6a9671b6443851eadcd2dea0",
    "order": 2,
    "question": "Why do loans include interest?",
    "options": [
      "To make them free",
      "To charge extra for the use of the money",
      "Because it's a gift",
      "To pay taxes"
    ],
    "correct_index": 1,
    "explanation": "Interest is the cost of borrowing money."
  },
  {
    "id": "6a9e42d6d061749084a472cb",
    "lesson_id": "6a9671b6443851eadcd2dea1",
    "order": 2,
    "question": "Which currency does Nepal use?",
    "options": [
      "Dollar",
      "Euro",
      "Rupee (NPR)",
      "Yen"
    ],
    "correct_index": 2,
    "explanation": "Nepal uses the Rupee (NPR)."
  },
  {
    "id": "6a9e42d6d061749084a472d0",
    "lesson_id": "6a9671b6443851eadcd2dea2",
    "order": 2,
    "question": "Which message is likely a scam?",
    "options": [
      "A receipt from a shop",
      "'You won a prize! Send your bank details.'",
      "A reminder to save",
      "A lesson quiz"
    ],
    "correct_index": 1,
    "explanation": "Messages asking for bank details for a 'prize' are scams."
  },
  {
    "id": "6a9e42d6d061749084a472d5",
    "lesson_id": "6a9671b6443851eadcd2dea3",
    "order": 2,
    "question": "Which is an example of good debt?",
    "options": [
      "A loan for a luxury phone you can't afford",
      "A student loan for college",
      "Borrowing for a treat",
      "Borrowing for a party"
    ],
    "correct_index": 1,
    "explanation": "A student loan builds skills — it's good debt."
  },
  {
    "id": "6a9e42d6d061749084a472da",
    "lesson_id": "6a9671b6443851eadcd2dea4",
    "order": 2,
    "question": "Rs 1,000 at 10%: Year 1 → Rs 1,100. Year 2 → ?",
    "options": [
      "Rs 1,100",
      "Rs 1,210",
      "Rs 1,000",
      "Rs 1,200"
    ],
    "correct_index": 1,
    "explanation": "Year 2 earns 10% on Rs 1,100 = Rs 110, so Rs 1,210."
  },
  {
    "id": "6a9e42d6d061749084a472a8",
    "lesson_id": "6a9671b6443851eadcd2de9a",
    "order": 2,
    "question": "Is the cheapest option always the best value?",
    "options": [
      "Yes, always",
      "No — you should also consider quality and how long it lasts",
      "Only for food",
      "Only online"
    ],
    "correct_index": 1,
    "explanation": "Sometimes a slightly pricier item lasts longer and is better value."
  },
  {
    "id": "6a9e42d6d061749084a472ad",
    "lesson_id": "6a9671b6443851eadcd2de9b",
    "order": 2,
    "question": "What is the 'value proposition' in a trade?",
    "options": [
      "The reason each side agrees to the trade",
      "The price in coins",
      "A discount",
      "A receipt"
    ],
    "correct_index": 0,
    "explanation": "It's the reason each side agrees — the value they receive."
  },
  {
    "id": "6a9e42d6d061749084a472b2",
    "lesson_id": "6a9671b6443851eadcd2de9c",
    "order": 2,
    "question": "What does 'withdraw' mean?",
    "options": [
      "Putting money in",
      "Taking money out of your account",
      "Saving money at home",
      "Earning interest"
    ],
    "correct_index": 1,
    "explanation": "A withdrawal takes money out of your account."
  },
  {
    "id": "6a9e42d6d061749084a472b7",
    "lesson_id": "6a9671b6443851eadcd2de9d",
    "order": 2,
    "question": "Which is an example of a digital payment?",
    "options": [
      "Handing over a Rs 100 note",
      "Scanning a shop's QR code",
      "Trading rice for cloth",
      "Giving coins"
    ],
    "correct_index": 1,
    "explanation": "Scanning a QR code pays electronically from your account."
  },
  {
    "id": "6a9e42d6d061749084a47294",
    "lesson_id": "6a9671b6443851eadcd2de96",
    "order": 2,
    "question": "What is a 'want'?",
    "options": [
      "Something you must have to live",
      "Something nice to have but not essential",
      "Something you eat every day",
      "Something free"
    ],
    "correct_index": 1,
    "explanation": "A want is nice to have but you can live without it."
  },
  {
    "id": "6a9e42d6d061749084a47299",
    "lesson_id": "6a9671b6443851eadcd2de97",
    "order": 2,
    "question": "Why is a budget useful?",
    "options": [
      "It makes money disappear",
      "It keeps you on track so you don't run out of money",
      "It buys things for you",
      "It's only for adults"
    ],
    "correct_index": 1,
    "explanation": "Budgets help you manage money and reach goals."
  },
  {
    "id": "6a9e42d6d061749084a4729e",
    "lesson_id": "6a9671b6443851eadcd2de98",
    "order": 2,
    "question": "A Rs 500 shirt is 20% off. How much does it cost?",
    "options": [
      "Rs 500",
      "Rs 400",
      "Rs 100",
      "Rs 520"
    ],
    "correct_index": 1,
    "explanation": "20% of Rs 500 is Rs 100, so the shirt costs Rs 400."
  },
  {
    "id": "6a9e42d6d061749084a472a3",
    "lesson_id": "6a9671b6443851eadcd2de99",
    "order": 2,
    "question": "What makes a goal easier to reach?",
    "options": [
      "Making it vague",
      "Making it specific with a price and deadline",
      "Keeping it a secret",
      "Making it very expensive"
    ],
    "correct_index": 1,
    "explanation": "A clear goal with a price and deadline is easier to plan for."
  },
  {
    "id": "6a97c3fb213c53d5928c153c",
    "lesson_id": "6a7317de25029c8b5878a6aa",
    "order": 2,
    "question": "Why is a bank better than a piggy bank for growing money?",
    "options": [
      "It is smaller",
      "It is made of metal",
      "It pays you interest",
      "It is easier to break"
    ],
    "correct_index": 2,
    "explanation": "A bank helps your money grow by paying you interest, while a piggy bank just stores it."
  },
  {
    "id": "6a97c3f83991ae71d8215d28",
    "lesson_id": "6a9671b6443851eadcd2de95",
    "order": 2,
    "question": "Which of these is a good way for a kid to earn money?",
    "options": [
      "Asking a friend for their lunch money",
      "Helping a neighbor with gardening",
      "Taking money from a store",
      "Waiting for money to fall from the sky"
    ],
    "correct_index": 1,
    "explanation": "Doing helpful chores for neighbors is a great way to earn money honestly."
  },
  {
    "id": "6a97c3f3ba4420fa198be27e",
    "lesson_id": "6a7317de25029c8b5878a6a9",
    "order": 2,
    "question": "When should you decide where your money goes?",
    "options": [
      "After you spend it",
      "When you run out of money",
      "Before you spend it",
      "At the end of the year"
    ],
    "correct_index": 2,
    "explanation": "Planning your spending before you use your money is the core of budgeting."
  },
  {
    "id": "6a97c3efba5f9c6fe12dc160",
    "lesson_id": "6a9671b6443851eadcd2de94",
    "order": 2,
    "question": "Why is having a savings goal helpful?",
    "options": [
      "It makes money disappear",
      "It keeps your room messy",
      "It helps you stay focused on what you want to buy",
      "It makes you spend more"
    ],
    "correct_index": 2,
    "explanation": "A goal helps you remember why you are saving your hard-earned money."
  },
  {
    "id": "6a97c3ebe1478b93acc001bf",
    "lesson_id": "6a7317de25029c8b5878a6a8",
    "order": 2,
    "question": "What should you do before buying something you really want?",
    "options": [
      "Buy it right away",
      "Ask yourself if you need it to live",
      "Ask for double the money",
      "Throw your old toys away"
    ],
    "correct_index": 1,
    "explanation": "Asking if you need it helps you decide if it is a smart purchase."
  },
  {
    "id": "6a97c3e6c24dcb5d63a05f2e",
    "lesson_id": "6a9671b6443851eadcd2de93",
    "order": 2,
    "question": "Does the amount of money matter when sharing?",
    "options": [
      "Only big amounts matter",
      "You must give all your money",
      "Even small amounts like Rs 10 help",
      "Money is never useful"
    ],
    "correct_index": 2,
    "explanation": "Every bit helps, no matter how small the amount is."
  },
  {
    "id": "6a97c0f83ea413831845467c",
    "lesson_id": "6a7317de25029c8b5878a6a7",
    "order": 2,
    "question": "If you use the 'Three Jars' method, what is the 'Share' jar for?",
    "options": [
      "Buying candy",
      "Paying for broken toys",
      "Helping others or donating",
      "Buying new video games"
    ],
    "correct_index": 2,
    "explanation": "The Share jar is specifically for helping others or giving back to your community."
  },
  {
    "id": "6a97c0f2d1c970c779f4da5c",
    "lesson_id": "6a9671b6443851eadcd2de92",
    "order": 2,
    "question": "What is a good reason to use the '24-hour rule'?",
    "options": [
      "To make sure you get the most expensive item",
      "To wait for the store to close",
      "To see if you still really want the item after waiting a day",
      "To spend your money faster"
    ],
    "correct_index": 2,
    "explanation": "Waiting helps you avoid impulse purchases by giving you time to think if you truly need the item."
  },
  {
    "id": "6a97c0ec48e1379a8afdca9f",
    "lesson_id": "6a9671b6443851eadcd2de91",
    "order": 2,
    "question": "If you want to buy something expensive, what should you do?",
    "options": [
      "Wait and save your money over a few weeks",
      "Ask your parents to buy it for you immediately",
      "Buy something cheaper instead",
      "Stop getting pocket money"
    ],
    "correct_index": 0,
    "explanation": "Saving up over time is a great way to afford things that cost more than your weekly allowance."
  },
  {
    "id": "6a97c0e7317876d7bd6c1204",
    "lesson_id": "6a7317de25029c8b5878a6a6",
    "order": 2,
    "question": "Why would a neighbor pay you to rake their leaves?",
    "options": [
      "Because it is a fun hobby for everyone",
      "Because you are saving them time and effort",
      "Because they want to give away their money",
      "Because you forced them to do it"
    ],
    "correct_index": 1,
    "explanation": "When you do a chore, you save the neighbor time and energy, which is why they are happy to pay."
  },
  {
    "id": "6a97c0e07bc24619e08ee378",
    "lesson_id": "6a9671b6443851eadcd2de90",
    "order": 2,
    "question": "What was one big problem with the barter system?",
    "options": [
      "It was too fast",
      "You needed to find someone who wanted exactly what you had",
      "It only worked with coins",
      "It was invented last year"
    ],
    "correct_index": 1,
    "explanation": "Barter only worked if both people wanted what the other person was offering."
  },
  {
    "id": "6a97c0dcdb0938b163e4a6f5",
    "lesson_id": "6a7317de25029c8b5878a6a5",
    "order": 2,
    "question": "Why is money considered a 'universal trading ticket'?",
    "options": [
      "Because it is made of paper.",
      "Because it is only for buying tickets.",
      "Because everyone agrees on its value and accepts it.",
      "Because it is very heavy."
    ],
    "correct_index": 2,
    "explanation": "Money works because we all trust and agree that it has value, making it acceptable everywhere."
  },
  {
    "id": "6a7317ef25029c8b5878a6d4",
    "lesson_id": "6a7317de25029c8b5878a6ab",
    "order": 2,
    "question": "What is the 'extra' money you pay back on a loan called?",
    "options": [
      "Principal",
      "Interest",
      "Budget",
      "Profit"
    ],
    "correct_index": 1,
    "explanation": "Interest is the extra cost of borrowing — it's what you pay on top of the money you borrowed."
  },
  {
    "id": "6a7317ef25029c8b5878a6d7",
    "lesson_id": "6a7317de25029c8b5878a6ac",
    "order": 2,
    "question": "If you spend $5 on supplies and earn $20, what's your profit?",
    "options": [
      "$5",
      "$20",
      "$15",
      "$25"
    ],
    "correct_index": 2,
    "explanation": "Profit = Revenue − Costs. So $20 − $5 = $15 profit!"
  },
  {
    "id": "6a9e42d6d061749084a472e0",
    "lesson_id": "6a9671b6443851eadcd2dea5",
    "order": 3,
    "question": "How can you build good credit?",
    "options": [
      "Miss payments",
      "Pay your bills on time",
      "Borrow as much as possible",
      "Never borrow"
    ],
    "correct_index": 1,
    "explanation": "Paying on time builds trust and a good credit score."
  },
  {
    "id": "6a9e42d6d061749084a472e5",
    "lesson_id": "6a9671b6443851eadcd2dea6",
    "order": 3,
    "question": "What happens if costs are bigger than income?",
    "options": [
      "Profit",
      "A loss",
      "Nothing",
      "Free money"
    ],
    "correct_index": 1,
    "explanation": "When costs exceed income, the business makes a loss."
  },
  {
    "id": "6a9e42d6d061749084a472ea",
    "lesson_id": "6a9671b6443851eadcd2dea7",
    "order": 3,
    "question": "What do taxes pay for?",
    "options": [
      "Private parties",
      "Public services like schools, roads, and hospitals",
      "Toys",
      "Trips abroad"
    ],
    "correct_index": 1,
    "explanation": "Taxes fund shared public services."
  },
  {
    "id": "6a9e42d6d061749084a472ef",
    "lesson_id": "6a9671b6443851eadcd2dea8",
    "order": 3,
    "question": "How can you start an emergency fund?",
    "options": [
      "Borrow money",
      "Save a small amount regularly, like Rs 100 a week",
      "Spend it all",
      "Ignore it"
    ],
    "correct_index": 1,
    "explanation": "Even small regular savings build a fund over time."
  },
  {
    "id": "6a9e42d6d061749084a472f4",
    "lesson_id": "6a9671b6443851eadcd2dea9",
    "order": 3,
    "question": "Which is an example of earning by creating value?",
    "options": [
      "Taking a friend's snack",
      "Building simple websites for shops",
      "Asking for free money",
      "Doing nothing"
    ],
    "correct_index": 1,
    "explanation": "Solving a problem for others is how you create value and earn."
  },
  {
    "id": "6a9e42d6d061749084a472b8",
    "lesson_id": "6a9671b6443851eadcd2de9d",
    "order": 3,
    "question": "What should you never share when paying online?",
    "options": [
      "Your name",
      "OTPs or passwords",
      "Your city",
      "Your age"
    ],
    "correct_index": 1,
    "explanation": "OTPs and passwords protect your money — never share them."
  },
  {
    "id": "6a9e42d6d061749084a472bd",
    "lesson_id": "6a9671b6443851eadcd2de9e",
    "order": 3,
    "question": "Which is an asset?",
    "options": [
      "Rs 500 you borrowed",
      "Your savings",
      "An unpaid bill",
      "A debt"
    ],
    "correct_index": 1,
    "explanation": "Savings are money you own — an asset."
  },
  {
    "id": "6a9e42d6d061749084a472c2",
    "lesson_id": "6a9671b6443851eadcd2de9f",
    "order": 3,
    "question": "When you borrow, interest is...",
    "options": [
      "Money you earn",
      "Extra money you pay back on top of the loan",
      "Free",
      "A gift"
    ],
    "correct_index": 1,
    "explanation": "When you borrow, you pay interest — extra money on top."
  },
  {
    "id": "6a9e42d6d061749084a472c7",
    "lesson_id": "6a9671b6443851eadcd2dea0",
    "order": 3,
    "question": "What's a common reason people take a loan?",
    "options": [
      "To buy candy",
      "To pay for big things like a house or education",
      "To get free money",
      "To avoid saving"
    ],
    "correct_index": 1,
    "explanation": "Loans help pay for big expenses like homes or education."
  },
  {
    "id": "6a9e42d6d061749084a472cc",
    "lesson_id": "6a9671b6443851eadcd2dea1",
    "order": 3,
    "question": "What is an exchange rate?",
    "options": [
      "A type of tax",
      "The value of one currency compared to another",
      "A loan rate",
      "A discount"
    ],
    "correct_index": 1,
    "explanation": "An exchange rate shows how much one currency is worth in another."
  },
  {
    "id": "6a9e42d6d061749084a472d1",
    "lesson_id": "6a9671b6443851eadcd2dea2",
    "order": 3,
    "question": "What's a warning sign of a scam?",
    "options": [
      "A clear price tag",
      "A deal that seems too good to be true",
      "A receipt",
      "A bank statement"
    ],
    "correct_index": 1,
    "explanation": "If it seems too good to be true, it probably is."
  },
  {
    "id": "6a9e42d6d061749084a472d6",
    "lesson_id": "6a9671b6443851eadcd2dea3",
    "order": 3,
    "question": "What is 'bad debt'?",
    "options": [
      "A home loan",
      "Borrowing for things that lose value or you can't repay",
      "A student loan",
      "A business loan"
    ],
    "correct_index": 1,
    "explanation": "Bad debt is borrowing for wants you can't repay."
  },
  {
    "id": "6a9e42d6d061749084a472db",
    "lesson_id": "6a9671b6443851eadcd2dea4",
    "order": 3,
    "question": "What is compound interest often compared to?",
    "options": [
      "A flat line",
      "A snowball rolling downhill, gathering more snow",
      "A closed box",
      "A single coin"
    ],
    "correct_index": 1,
    "explanation": "Like a snowball, it grows bigger the longer it rolls."
  },
  {
    "id": "6a9e42d6d061749084a472a9",
    "lesson_id": "6a9671b6443851eadcd2de9a",
    "order": 3,
    "question": "What is 'cost per use'?",
    "options": [
      "The price tag",
      "The price divided by how many times you'll use it",
      "A discount",
      "A tax"
    ],
    "correct_index": 1,
    "explanation": "Cost per use shows the real value of an item over time."
  },
  {
    "id": "6a9e42d6d061749084a472ae",
    "lesson_id": "6a9671b6443851eadcd2de9b",
    "order": 3,
    "question": "What increases the value of an item in barter?",
    "options": [
      "If everyone has it",
      "If it's rare and others want it (scarcity)",
      "If it's broken",
      "If it's heavy"
    ],
    "correct_index": 1,
    "explanation": "Scarcity — being rare and wanted — raises value."
  },
  {
    "id": "6a9e42d6d061749084a472b3",
    "lesson_id": "6a9671b6443851eadcd2de9c",
    "order": 3,
    "question": "What is an ATM used for?",
    "options": [
      "Buying food",
      "Getting cash from your account anytime",
      "Paying taxes",
      "Opening a shop"
    ],
    "correct_index": 1,
    "explanation": "An ATM is a cash machine that lets you access your money."
  },
  {
    "id": "6a9e42d6d061749084a47295",
    "lesson_id": "6a9671b6443851eadcd2de96",
    "order": 3,
    "question": "What should you spend money on first?",
    "options": [
      "Wants",
      "Needs",
      "Treats",
      "Toys"
    ],
    "correct_index": 1,
    "explanation": "Always cover needs before spending on wants."
  },
  {
    "id": "6a9e42d6d061749084a4729a",
    "lesson_id": "6a9671b6443851eadcd2de97",
    "order": 3,
    "question": "What's a common budget split?",
    "options": [
      "Save–Spend–Share",
      "Eat–Play–Sleep",
      "Run–Jump–Hide",
      "Buy–Buy–Buy"
    ],
    "correct_index": 0,
    "explanation": "A simple budget divides money into Save, Spend, and Share."
  },
  {
    "id": "6a9e42d6d061749084a4729f",
    "lesson_id": "6a9671b6443851eadcd2de98",
    "order": 3,
    "question": "How can you tell if a sale is a real deal?",
    "options": [
      "Check the discount sign only",
      "Compare the original price vs the sale price",
      "Buy it fast",
      "Ask a friend"
    ],
    "correct_index": 1,
    "explanation": "Some shops raise the price first, so always check the original price."
  },
  {
    "id": "6a9e42d6d061749084a472a4",
    "lesson_id": "6a9671b6443851eadcd2de99",
    "order": 3,
    "question": "You want a Rs 3,000 bike in 6 months. How much should you save per month?",
    "options": [
      "Rs 100",
      "Rs 500",
      "Rs 3,000",
      "Rs 6,000"
    ],
    "correct_index": 1,
    "explanation": "Rs 3,000 ÷ 6 months = Rs 500 per month."
  },
  {
    "id": "6a97c3fb213c53d5928c153d",
    "lesson_id": "6a7317de25029c8b5878a6aa",
    "order": 3,
    "question": "If you leave your money in the bank for a long time, what happens?",
    "options": [
      "It disappears",
      "It grows more",
      "It gets smaller",
      "It loses color"
    ],
    "correct_index": 1,
    "explanation": "Interest adds up over time, so the longer you save, the more money you have."
  },
  {
    "id": "6a97c3f83991ae71d8215d29",
    "lesson_id": "6a9671b6443851eadcd2de95",
    "order": 3,
    "question": "Why do people pay others for work?",
    "options": [
      "Because they have too much money",
      "To say thank you for the time and effort",
      "They want to make it messy",
      "They forgot their own chores"
    ],
    "correct_index": 1,
    "explanation": "Payment is a way to reward someone's time and hard work."
  },
  {
    "id": "6a97c3f3ba4420fa198be27f",
    "lesson_id": "6a7317de25029c8b5878a6a9",
    "order": 3,
    "question": "If you earn Rs 100 and want to save, what is the best first step?",
    "options": [
      "Buy candy immediately",
      "Give it all to a friend",
      "Plan your savings and spending",
      "Hide the money under your bed"
    ],
    "correct_index": 2,
    "explanation": "Having a plan helps you manage your money wisely."
  },
  {
    "id": "6a97c3efba5f9c6fe12dc161",
    "lesson_id": "6a9671b6443851eadcd2de94",
    "order": 3,
    "question": "Where is a good place to keep your saved money?",
    "options": [
      "In your pocket",
      "In a piggy bank or jar",
      "Under the rug",
      "In the trash can"
    ],
    "correct_index": 1,
    "explanation": "A piggy bank or jar keeps your money safe in one spot."
  },
  {
    "id": "6a97c3ebe1478b93acc001c0",
    "lesson_id": "6a7317de25029c8b5878a6a8",
    "order": 3,
    "question": "If you have 50 Rs, what is the best first step?",
    "options": [
      "Buy a toy",
      "Buy a snack for lunch",
      "Give it to a friend",
      "Hide it under your bed"
    ],
    "correct_index": 1,
    "explanation": "It is always smart to pay for your needs like food before buying toys."
  },
  {
    "id": "6a97c3e6c24dcb5d63a05f2f",
    "lesson_id": "6a9671b6443851eadcd2de93",
    "order": 3,
    "question": "Besides money, what else can you share?",
    "options": [
      "Your chores",
      "Your time and kindness",
      "Nothing else matters",
      "Your homework"
    ],
    "correct_index": 1,
    "explanation": "You can share your time, help, and kindness just as much as money."
  },
  {
    "id": "6a97c0f83ea413831845467d",
    "lesson_id": "6a7317de25029c8b5878a6a7",
    "order": 3,
    "question": "What is a good rule for how much to save?",
    "options": [
      "Save 1 out of every 3 coins",
      "Save all of your money and never spend",
      "Save only when you are rich",
      "Save nothing until you are an adult"
    ],
    "correct_index": 0,
    "explanation": "Saving 1 out of every 3 coins is a great way to balance spending, saving, and sharing."
  },
  {
    "id": "6a97c0f2d1c970c779f4da5d",
    "lesson_id": "6a9671b6443851eadcd2de92",
    "order": 3,
    "question": "If you are saving for a new bicycle, what is the best spending habit?",
    "options": [
      "Buying snacks every day at school",
      "Asking your parents for more money whenever you want",
      "Only buying what you need and saving the rest for your goal",
      "Spending all your money on toys"
    ],
    "correct_index": 2,
    "explanation": "Saving requires making smart choices to keep your money until you reach your goal."
  },
  {
    "id": "6a97c0ec48e1379a8afdcaa0",
    "lesson_id": "6a9671b6443851eadcd2de91",
    "order": 3,
    "question": "Why is it a good idea to track your spending?",
    "options": [
      "To make your notebook look pretty",
      "To see where your money is going",
      "Because it is a boring chore",
      "To show off to your teacher"
    ],
    "correct_index": 1,
    "explanation": "Tracking your spending helps you notice patterns so you can make better choices next time."
  },
  {
    "id": "6a97c0e7317876d7bd6c1205",
    "lesson_id": "6a7317de25029c8b5878a6a6",
    "order": 3,
    "question": "What is a 'reputation' when it comes to work?",
    "options": [
      "How much money you have in your bank",
      "How fast you can run",
      "What people think of your work and how much they trust you",
      "The type of clothes you wear while working"
    ],
    "correct_index": 2,
    "explanation": "A good reputation means people know you are honest, hard-working, and someone they can rely on."
  },
  {
    "id": "6a97c0e07bc24619e08ee379",
    "lesson_id": "6a9671b6443851eadcd2de90",
    "order": 3,
    "question": "Which of these were once used as money?",
    "options": [
      "Shells and salt",
      "Only paper notes",
      "Only gold bars",
      "Only mobile phones"
    ],
    "correct_index": 0,
    "explanation": "Shells, salt, and metal were all used as early forms of money before coins and notes."
  },
  {
    "id": "6a97c0dcdb0938b163e4a6f6",
    "lesson_id": "6a7317de25029c8b5878a6a5",
    "order": 3,
    "question": "Which of these is NOT a reason why money is useful?",
    "options": [
      "It is easy to carry.",
      "It is easy to save for later.",
      "It makes it hard to compare prices.",
      "Everyone accepts it as payment."
    ],
    "correct_index": 2,
    "explanation": "Money actually makes it much easier to compare the value of different items."
  },
  {
    "id": "6a7317ef25029c8b5878a6d5",
    "lesson_id": "6a7317de25029c8b5878a6ab",
    "order": 3,
    "question": "When is borrowing a bad idea?",
    "options": [
      "When you need to fix an emergency",
      "When you borrow for things you don't need and can't repay",
      "When the bank offers it",
      "When interest is low"
    ],
    "correct_index": 1,
    "explanation": "Borrowing becomes risky when you can't repay or borrow for unnecessary things — the debt keeps growing."
  },
  {
    "id": "6a7317ef25029c8b5878a6d8",
    "lesson_id": "6a7317de25029c8b5878a6ac",
    "order": 3,
    "question": "Which skill helps entrepreneurs succeed?",
    "options": [
      "Giving up quickly",
      "Ignoring customers",
      "Creativity and grit",
      "Keeping ideas secret forever"
    ],
    "correct_index": 2,
    "explanation": "Creativity helps find ideas, and grit (not giving up) helps push through the hard parts of building a business."
  },
  {
    "id": "6a9e42d6d061749084a472e1",
    "lesson_id": "6a9671b6443851eadcd2dea5",
    "order": 4,
    "question": "What lowers your credit score?",
    "options": [
      "Paying on time",
      "Missing payments",
      "Saving money",
      "Earning interest"
    ],
    "correct_index": 1,
    "explanation": "Missing payments shows you're unreliable and lowers your score."
  },
  {
    "id": "6a9e42d6d061749084a472e6",
    "lesson_id": "6a9671b6443851eadcd2dea6",
    "order": 4,
    "question": "How can a business raise profit?",
    "options": [
      "Increase costs",
      "Lower costs or raise income",
      "Stop selling",
      "Borrow more"
    ],
    "correct_index": 1,
    "explanation": "Cutting costs or boosting income increases profit."
  },
  {
    "id": "6a9e42d6d061749084a472eb",
    "lesson_id": "6a9671b6443851eadcd2dea7",
    "order": 4,
    "question": "Why pay advance tax instead of all at once?",
    "options": [
      "To avoid paying",
      "To avoid a big surprise bill at year-end",
      "To get free money",
      "It's required for kids"
    ],
    "correct_index": 1,
    "explanation": "Spreading payments avoids a large bill later."
  },
  {
    "id": "6a9e42d6d061749084a472f0",
    "lesson_id": "6a9671b6443851eadcd2dea8",
    "order": 4,
    "question": "Where should you keep your emergency fund?",
    "options": [
      "With your spending money",
      "Separate from spending money",
      "In a toy box",
      "Nowhere"
    ],
    "correct_index": 1,
    "explanation": "Keep it separate so you're not tempted to spend it."
  },
  {
    "id": "6a9e42d6d061749084a472f5",
    "lesson_id": "6a9671b6443851eadcd2dea9",
    "order": 4,
    "question": "What should you do with some of your earnings to grow?",
    "options": [
      "Spend it all",
      "Reinvest some to grow your skills",
      "Hide it",
      "Give it all away"
    ],
    "correct_index": 1,
    "explanation": "Reinvesting in skills helps you earn even more."
  },
  {
    "id": "6a9e42d6d061749084a472f7",
    "lesson_id": "6a7317de25029c8b5878a6ab",
    "order": 4,
    "question": "What does it mean to 'repay on time'?",
    "options": [
      "Pay back whenever you feel like it",
      "Pay back the loan by the agreed deadline",
      "Never pay back",
      "Pay only half"
    ],
    "correct_index": 1,
    "explanation": "Repaying on time means meeting the agreed deadline."
  },
  {
    "id": "6a9e42d6d061749084a472f9",
    "lesson_id": "6a7317de25029c8b5878a6ac",
    "order": 4,
    "question": "What does an entrepreneur need to start a venture?",
    "options": [
      "A problem to solve and a plan",
      "Lots of free time",
      "Nothing",
      "Only luck"
    ],
    "correct_index": 0,
    "explanation": "Entrepreneurs start by solving a real problem with a plan."
  },
  {
    "id": "6a9e42d6d061749084a472b9",
    "lesson_id": "6a9671b6443851eadcd2de9d",
    "order": 4,
    "question": "What should you check before confirming a digital payment?",
    "options": [
      "The color of your phone",
      "The amount you're paying",
      "The shop's name only",
      "Nothing"
    ],
    "correct_index": 1,
    "explanation": "Always verify the amount before you confirm a payment."
  },
  {
    "id": "6a9e42d6d061749084a472be",
    "lesson_id": "6a9671b6443851eadcd2de9e",
    "order": 4,
    "question": "Which is a liability?",
    "options": [
      "Your bicycle",
      "Your piggy bank",
      "Rs 500 you borrowed from a friend",
      "Your savings"
    ],
    "correct_index": 2,
    "explanation": "Money you borrowed is money you owe — a liability."
  },
  {
    "id": "6a9e42d6d061749084a472c3",
    "lesson_id": "6a9671b6443851eadcd2de9f",
    "order": 4,
    "question": "What does a higher interest rate mean for saving?",
    "options": [
      "Less reward",
      "More reward for your savings",
      "No change",
      "You lose money"
    ],
    "correct_index": 1,
    "explanation": "A higher rate means more interest earned on savings."
  },
  {
    "id": "6a9e42d6d061749084a472c8",
    "lesson_id": "6a9671b6443851eadcd2dea0",
    "order": 4,
    "question": "What happens if you don't repay a loan on time?",
    "options": [
      "Nothing",
      "Extra fees and it becomes a burden",
      "You get a reward",
      "The loan disappears"
    ],
    "correct_index": 1,
    "explanation": "Late repayment adds fees and can become a big burden."
  },
  {
    "id": "6a9e42d6d061749084a472cd",
    "lesson_id": "6a9671b6443851eadcd2dea1",
    "order": 4,
    "question": "Why doesn't every country use the same money?",
    "options": [
      "Because each country has its own currency and economy",
      "Because it's not allowed",
      "Because of a rule",
      "They do, secretly"
    ],
    "correct_index": 0,
    "explanation": "Each country chooses its own currency based on its economy."
  },
  {
    "id": "6a9e42d6d061749084a472d2",
    "lesson_id": "6a9671b6443851eadcd2dea2",
    "order": 4,
    "question": "What should you never share to stay safe?",
    "options": [
      "Your name",
      "OTPs, PINs, or passwords",
      "Your hobby",
      "Your school"
    ],
    "correct_index": 1,
    "explanation": "Sharing OTPs, PINs, or passwords lets scammers steal your money."
  },
  {
    "id": "6a9e42d6d061749084a472d7",
    "lesson_id": "6a9671b6443851eadcd2dea3",
    "order": 4,
    "question": "Which is bad debt?",
    "options": [
      "An education loan",
      "Borrowing for an expensive gadget you can't afford",
      "A home loan",
      "A small business loan"
    ],
    "correct_index": 1,
    "explanation": "Borrowing for a luxury gadget you can't repay is bad debt."
  },
  {
    "id": "6a9e42d6d061749084a472dc",
    "lesson_id": "6a9671b6443851eadcd2dea4",
    "order": 4,
    "question": "Why does starting early matter?",
    "options": [
      "It doesn't",
      "Time multiplies your money through compounding",
      "You earn less",
      "It's harder"
    ],
    "correct_index": 1,
    "explanation": "The longer your money compounds, the more it grows."
  },
  {
    "id": "6a9e42d6d061749084a472aa",
    "lesson_id": "6a9671b6443851eadcd2de9a",
    "order": 4,
    "question": "What should you check when shopping online?",
    "options": [
      "Nothing",
      "Reviews and delivery costs",
      "Only the color",
      "Only the picture"
    ],
    "correct_index": 1,
    "explanation": "Reviews and delivery costs affect the true value of a purchase."
  },
  {
    "id": "6a9e42d6d061749084a472af",
    "lesson_id": "6a9671b6443851eadcd2de9b",
    "order": 4,
    "question": "Why does money measure value better than barter?",
    "options": [
      "It's shiny",
      "Everyone agrees on its value, so trades are simpler",
      "It's heavier",
      "It can't be divided"
    ],
    "correct_index": 1,
    "explanation": "Money gives a common way to compare value easily."
  },
  {
    "id": "6a9e42d6d061749084a472b4",
    "lesson_id": "6a9671b6443851eadcd2de9c",
    "order": 4,
    "question": "Why is a bank safer than a piggy bank?",
    "options": [
      "It pays you to visit",
      "Money is protected and may earn interest",
      "It's free money",
      "It has toys"
    ],
    "correct_index": 1,
    "explanation": "Banks protect your money and can pay interest on savings."
  },
  {
    "id": "6a9e42d6d061749084a47296",
    "lesson_id": "6a9671b6443851eadcd2de96",
    "order": 4,
    "question": "Which question helps you decide if something is a need?",
    "options": [
      "'Is it colorful?'",
      "'Could I live without this?'",
      "'Is it on sale?'",
      "'Is it popular?'"
    ],
    "correct_index": 1,
    "explanation": "If you could live without it, it's probably a want."
  },
  {
    "id": "6a9e42d6d061749084a4729b",
    "lesson_id": "6a9671b6443851eadcd2de97",
    "order": 4,
    "question": "When should you budget your money?",
    "options": [
      "After spending it all",
      "Before you spend",
      "Once a year",
      "Never"
    ],
    "correct_index": 1,
    "explanation": "Plan before you spend so your money lasts."
  },
  {
    "id": "6a9e42d6d061749084a472a0",
    "lesson_id": "6a9671b6443851eadcd2de98",
    "order": 4,
    "question": "A sale is always a good deal — true or false?",
    "options": [
      "True",
      "False — only if you needed the item anyway",
      "Only on weekends",
      "Only for clothes"
    ],
    "correct_index": 1,
    "explanation": "A sale only saves money if you needed the item in the first place."
  },
  {
    "id": "6a9e42d6d061749084a472a5",
    "lesson_id": "6a9671b6443851eadcd2de99",
    "order": 4,
    "question": "How do you break a big goal into steps?",
    "options": [
      "Save it all at once",
      "Divide it into small weekly or monthly amounts",
      "Give up",
      "Borrow the money"
    ],
    "correct_index": 1,
    "explanation": "Small regular steps make a big goal reachable."
  },
  {
    "id": "6a97c3fb213c53d5928c153e",
    "lesson_id": "6a7317de25029c8b5878a6aa",
    "order": 4,
    "question": "What does a bank do with the money people deposit?",
    "options": [
      "They hide it",
      "They give it to friends",
      "They use it to help others",
      "They throw it away"
    ],
    "correct_index": 2,
    "explanation": "Banks use the money to help others, which is why they pay you interest."
  },
  {
    "id": "6a97c3f83991ae71d8215d2a",
    "lesson_id": "6a9671b6443851eadcd2de95",
    "order": 4,
    "question": "If you earn Rs 50 today and Rs 50 tomorrow, how much do you have?",
    "options": [
      "Rs 50",
      "Rs 0",
      "Rs 100",
      "Rs 150"
    ],
    "correct_index": 2,
    "explanation": "50 plus 50 equals 100."
  },
  {
    "id": "6a97c3f3ba4420fa198be280",
    "lesson_id": "6a7317de25029c8b5878a6a9",
    "order": 4,
    "question": "Why is it good to have a savings goal?",
    "options": [
      "To buy big things later",
      "To have more empty jars",
      "To stop buying snacks forever",
      "Because it is boring"
    ],
    "correct_index": 0,
    "explanation": "Saving helps you gather enough money for bigger goals."
  },
  {
    "id": "6a97c3efba5f9c6fe12dc162",
    "lesson_id": "6a9671b6443851eadcd2de94",
    "order": 4,
    "question": "If you have 100 Rs and you save 20 Rs, how much can you spend?",
    "options": [
      "120 Rs",
      "100 Rs",
      "80 Rs",
      "20 Rs"
    ],
    "correct_index": 2,
    "explanation": "If you take 20 away from 100 to save, you have 80 left to spend."
  },
  {
    "id": "6a97c3ebe1478b93acc001c1",
    "lesson_id": "6a7317de25029c8b5878a6a8",
    "order": 4,
    "question": "A 'Want' is something that is:",
    "options": [
      "Important to live",
      "Fun but not needed",
      "Always dangerous",
      "Only for grown-ups"
    ],
    "correct_index": 1,
    "explanation": "Wants are fun extras that make life nice, but we can survive without them."
  },
  {
    "id": "6a97c3e6c24dcb5d63a05f30",
    "lesson_id": "6a9671b6443851eadcd2de93",
    "order": 4,
    "question": "How does sharing usually make you feel?",
    "options": [
      "Sad",
      "Angry",
      "Good and happy",
      "Confused"
    ],
    "correct_index": 2,
    "explanation": "Helping others usually makes us feel warm and happy inside."
  },
  {
    "id": "6a97c0f83ea413831845467e",
    "lesson_id": "6a7317de25029c8b5878a6a7",
    "order": 4,
    "question": "Why is it helpful to have a picture of your goal on your savings jar?",
    "options": [
      "It makes the jar look pretty",
      "It hides the money",
      "It helps you remember what you are working toward",
      "It makes the money grow faster"
    ],
    "correct_index": 2,
    "explanation": "Keeping a visual reminder of your goal helps you stay focused and patient while you save."
  },
  {
    "id": "6a97c0f2d1c970c779f4da5e",
    "lesson_id": "6a9671b6443851eadcd2de92",
    "order": 4,
    "question": "Which of these is considered a 'Need'?",
    "options": [
      "A brand-new video game",
      "Nutritious food for lunch",
      "A collection of rare trading cards",
      "A fancy new phone case"
    ],
    "correct_index": 1,
    "explanation": "Food is essential for your health and daily life, making it a need."
  },
  {
    "id": "6a97c0ec48e1379a8afdcaa1",
    "lesson_id": "6a9671b6443851eadcd2de91",
    "order": 4,
    "question": "What is the '24-hour rule'?",
    "options": [
      "You must spend your money within 24 hours",
      "You have to wait 24 hours before buying something you want",
      "You can only save money for 24 hours",
      "You must earn money every 24 hours"
    ],
    "correct_index": 1,
    "explanation": "Waiting 24 hours helps you decide if you really want an item or if it was just a quick impulse."
  },
  {
    "id": "6a97c0e7317876d7bd6c1206",
    "lesson_id": "6a7317de25029c8b5878a6a6",
    "order": 4,
    "question": "If you want to earn money, which should you do first?",
    "options": [
      "Think of a problem you can solve or a service people need",
      "Buy a really expensive uniform",
      "Ask your friends to give you their allowance",
      "Stop doing your schoolwork"
    ],
    "correct_index": 0,
    "explanation": "Start by identifying a need, like helping with pets or chores, to see how you can be useful."
  },
  {
    "id": "6a97c0e07bc24619e08ee37a",
    "lesson_id": "6a9671b6443851eadcd2de90",
    "order": 4,
    "question": "Why did people start using coins?",
    "options": [
      "They were harder to carry",
      "They were easy to carry and everyone agreed on their value",
      "They tasted good",
      "They grew on trees"
    ],
    "correct_index": 1,
    "explanation": "Coins were small, tough, and easy to carry — much simpler than trading animals or grain."
  },
  {
    "id": "6a97c0dcdb0938b163e4a6f7",
    "lesson_id": "6a7317de25029c8b5878a6a5",
    "order": 4,
    "question": "What is a main reason that digital money works?",
    "options": [
      "Because it is made of real gold.",
      "Because we trust the systems that track the numbers.",
      "Because it is physically heavier than paper.",
      "Because it can only be used on weekends."
    ],
    "correct_index": 1,
    "explanation": "Digital money relies on trust in our banking systems and the agreement that the numbers represent value."
  },
  {
    "id": "6a9e42d6d061749084a472e2",
    "lesson_id": "6a9671b6443851eadcd2dea5",
    "order": 5,
    "question": "Why do lenders care about your credit score?",
    "options": [
      "It's fun to check",
      "It tells them if you're likely to repay",
      "It's a game",
      "It's free money"
    ],
    "correct_index": 1,
    "explanation": "Lenders use it to decide whether to lend and at what rate."
  },
  {
    "id": "6a9e42d6d061749084a472e7",
    "lesson_id": "6a9671b6443851eadcd2dea6",
    "order": 5,
    "question": "Why does a business need profit?",
    "options": [
      "It doesn't",
      "To survive and grow",
      "To pay taxes only",
      "To close down"
    ],
    "correct_index": 1,
    "explanation": "Profit keeps a business alive and lets it grow."
  },
  {
    "id": "6a9e42d6d061749084a472ec",
    "lesson_id": "6a9671b6443851eadcd2dea7",
    "order": 5,
    "question": "Why is paying tax important for a country?",
    "options": [
      "It's not",
      "It funds services everyone shares",
      "It's free money",
      "It pays for treats"
    ],
    "correct_index": 1,
    "explanation": "Taxes fund services that benefit the whole country."
  },
  {
    "id": "6a9e42d6d061749084a472f1",
    "lesson_id": "6a9671b6443851eadcd2dea8",
    "order": 5,
    "question": "Why is an emergency fund like an umbrella?",
    "options": [
      "It's waterproof",
      "It protects you when sudden storms come",
      "It's colorful",
      "It's small"
    ],
    "correct_index": 1,
    "explanation": "It shields you from unexpected financial storms."
  },
  {
    "id": "6a9e42d6d061749084a472f6",
    "lesson_id": "6a9671b6443851eadcd2dea9",
    "order": 5,
    "question": "What's a smart first step to earning more?",
    "options": [
      "Wait for luck",
      "Identify a skill you could grow",
      "Borrow money",
      "Quit everything"
    ],
    "correct_index": 1,
    "explanation": "Pick a skill to build — that's where earning starts."
  },
  {
    "id": "6a9e42d6d061749084a472f8",
    "lesson_id": "6a7317de25029c8b5878a6ab",
    "order": 5,
    "question": "Why compare interest rates before borrowing?",
    "options": [
      "It's not important",
      "A lower rate means you pay less extra money",
      "Higher rates are better",
      "Rates don't change"
    ],
    "correct_index": 1,
    "explanation": "A lower interest rate means borrowing costs less."
  },
  {
    "id": "6a9e42d6d061749084a472fa",
    "lesson_id": "6a7317de25029c8b5878a6ac",
    "order": 5,
    "question": "What's an important mindset for an entrepreneur?",
    "options": [
      "Giving up fast",
      "Learning from mistakes and trying again",
      "Avoiding all risk",
      "Waiting for perfect conditions"
    ],
    "correct_index": 1,
    "explanation": "Entrepreneurs learn from failures and keep improving."
  },
  {
    "id": "6a9e42d6d061749084a472ba",
    "lesson_id": "6a9671b6443851eadcd2de9d",
    "order": 5,
    "question": "Which apps are used for digital payments in Nepal?",
    "options": [
      "eSewa, Khalti, QR payments",
      "Only cash",
      "Only cheques",
      "Only foreign apps"
    ],
    "correct_index": 0,
    "explanation": "Apps like eSewa, Khalti, and QR payments are common in Nepal."
  },
  {
    "id": "6a9e42d6d061749084a472bf",
    "lesson_id": "6a9671b6443851eadcd2de9e",
    "order": 5,
    "question": "What's a good money habit?",
    "options": [
      "Own more liabilities than assets",
      "Own more assets than liabilities",
      "Borrow as much as possible",
      "Never save"
    ],
    "correct_index": 1,
    "explanation": "Aim to grow your assets and keep liabilities low."
  },
  {
    "id": "6a9e42d6d061749084a472c4",
    "lesson_id": "6a9671b6443851eadcd2de9f",
    "order": 5,
    "question": "Would you rather earn interest or pay it?",
    "options": [
      "Pay it",
      "Earn it — it grows your money",
      "Neither",
      "Both the same"
    ],
    "correct_index": 1,
    "explanation": "Earning interest grows your money; paying it costs you."
  },
  {
    "id": "6a9e42d6d061749084a472c9",
    "lesson_id": "6a9671b6443851eadcd2dea0",
    "order": 5,
    "question": "What's a smart rule before taking a loan?",
    "options": [
      "Borrow as much as possible",
      "Only borrow what you can repay",
      "Never read the terms",
      "Borrow for wants only"
    ],
    "correct_index": 1,
    "explanation": "Only borrow what you can comfortably repay."
  },
  {
    "id": "6a9e42d6d061749084a472ce",
    "lesson_id": "6a9671b6443851eadcd2dea1",
    "order": 5,
    "question": "What should you do before exchanging money for a trip?",
    "options": [
      "Nothing",
      "Check the exchange rate",
      "Hide your money",
      "Buy everything first"
    ],
    "correct_index": 1,
    "explanation": "Rates change daily, so check the rate before exchanging."
  },
  {
    "id": "6a9e42d6d061749084a472d3",
    "lesson_id": "6a9671b6443851eadcd2dea2",
    "order": 5,
    "question": "What should you do if a message asks for money urgently?",
    "options": [
      "Send it fast",
      "Verify with a trusted adult first",
      "Ignore your parents",
      "Share your password"
    ],
    "correct_index": 1,
    "explanation": "Always check with a trusted adult before paying."
  },
  {
    "id": "6a9e42d6d061749084a472d8",
    "lesson_id": "6a9671b6443851eadcd2dea3",
    "order": 5,
    "question": "How can borrowing ever help you?",
    "options": [
      "It never can",
      "When it helps you gain skills or an asset that grows in value",
      "By buying treats",
      "By avoiding saving"
    ],
    "correct_index": 1,
    "explanation": "Borrowing for skills or assets that grow can help you get ahead."
  },
  {
    "id": "6a9e42d6d061749084a472dd",
    "lesson_id": "6a9671b6443851eadcd2dea4",
    "order": 5,
    "question": "What should you do with interest to maximize compounding?",
    "options": [
      "Withdraw it quickly",
      "Leave it to grow",
      "Spend it each year",
      "Hide it"
    ],
    "correct_index": 1,
    "explanation": "Reinvesting interest lets it compound and grow faster."
  },
  {
    "id": "6a9e42d6d061749084a472ab",
    "lesson_id": "6a9671b6443851eadcd2de9a",
    "order": 5,
    "question": "Notebook A: Rs 40 (100 pages). Notebook B: Rs 60 (200 pages). Which is better value?",
    "options": [
      "Notebook A",
      "Notebook B",
      "Both the same",
      "Neither"
    ],
    "correct_index": 1,
    "explanation": "B gives twice the pages for only Rs 20 more — better value."
  },
  {
    "id": "6a9e42d6d061749084a472b0",
    "lesson_id": "6a9671b6443851eadcd2de9b",
    "order": 5,
    "question": "A chicken trades for 10 eggs. Why does this work?",
    "options": [
      "Both sides agree the exchange is fair",
      "It's a law",
      "It uses coins",
      "It's free"
    ],
    "correct_index": 0,
    "explanation": "Both sides agree the value is equal, so the trade is fair."
  },
  {
    "id": "6a9e42d6d061749084a472b5",
    "lesson_id": "6a9671b6443851eadcd2de9c",
    "order": 5,
    "question": "What should you NEVER do with your bank PIN?",
    "options": [
      "Memorize it",
      "Share it with anyone",
      "Type it at the ATM",
      "Keep it private"
    ],
    "correct_index": 1,
    "explanation": "Never share your PIN — it keeps your money safe."
  },
  {
    "id": "6a9e42d6d061749084a47297",
    "lesson_id": "6a9671b6443851eadcd2de96",
    "order": 5,
    "question": "Can something be both a need and a want?",
    "options": [
      "No, never",
      "Yes, for example a basic phone for safety vs the newest model",
      "Only food",
      "Only clothes"
    ],
    "correct_index": 1,
    "explanation": "A phone for safety may be a need; the newest model is a want."
  },
  {
    "id": "6a9e42d6d061749084a4729c",
    "lesson_id": "6a9671b6443851eadcd2de97",
    "order": 5,
    "question": "If you get Rs 100 and save Rs 30, how much is left to spend and share?",
    "options": [
      "Rs 30",
      "Rs 50",
      "Rs 70",
      "Rs 100"
    ],
    "correct_index": 2,
    "explanation": "Rs 100 − Rs 30 = Rs 70 left."
  },
  {
    "id": "6a9e42d6d061749084a472a1",
    "lesson_id": "6a9671b6443851eadcd2de98",
    "order": 5,
    "question": "Why do shops offer discounts?",
    "options": [
      "To lose money",
      "To attract buyers during sales or festivals",
      "To close forever",
      "To give things away"
    ],
    "correct_index": 1,
    "explanation": "Discounts attract customers, especially during sales and festivals."
  },
  {
    "id": "6a9e42d6d061749084a472a6",
    "lesson_id": "6a9671b6443851eadcd2de99",
    "order": 5,
    "question": "Why celebrate milestones?",
    "options": [
      "To spend all your savings",
      "To stay motivated",
      "To stop saving",
      "To buy a new goal"
    ],
    "correct_index": 1,
    "explanation": "Celebrating small wins keeps you motivated to keep going."
  },
  {
    "id": "6a97c3fb213c53d5928c153f",
    "lesson_id": "6a7317de25029c8b5878a6aa",
    "order": 5,
    "question": "What is the best way to make your bank savings grow fast?",
    "options": [
      "Take money out daily",
      "Never put money in",
      "Keep adding money and wait",
      "Hide the bank card"
    ],
    "correct_index": 2,
    "explanation": "Adding money regularly and letting it sit allows interest to work its magic."
  },
  {
    "id": "6a97c3f83991ae71d8215d2b",
    "lesson_id": "6a9671b6443851eadcd2de95",
    "order": 5,
    "question": "What is a smart thing to do with the money you earn?",
    "options": [
      "Throw it away",
      "Hide it under a rug",
      "Save it in a piggy bank",
      "Spend it all on candy at once"
    ],
    "correct_index": 2,
    "explanation": "Saving your earnings in a piggy bank helps you reach your future goals."
  },
  {
    "id": "6a97c3f3ba4420fa198be281",
    "lesson_id": "6a7317de25029c8b5878a6a9",
    "order": 5,
    "question": "What should you do if you have money left over after your planned spending?",
    "options": [
      "Spend it on anything",
      "Throw it away",
      "Add it to your savings",
      "Forget about it"
    ],
    "correct_index": 2,
    "explanation": "Saving extra money helps you reach your financial goals even faster!"
  },
  {
    "id": "6a97c3efba5f9c6fe12dc163",
    "lesson_id": "6a9671b6443851eadcd2de94",
    "order": 5,
    "question": "What happens when you save money over a long time?",
    "options": [
      "It becomes less",
      "You can buy more expensive things",
      "The money turns into paper",
      "You lose it all"
    ],
    "correct_index": 1,
    "explanation": "Saving little by little adds up so you can buy bigger items."
  },
  {
    "id": "6a97c3ebe1478b93acc001c2",
    "lesson_id": "6a7317de25029c8b5878a6a8",
    "order": 5,
    "question": "Why is it good to save your Rs?",
    "options": [
      "To spend it all at once",
      "To help you buy your needs later",
      "Because money is heavy",
      "To make it disappear"
    ],
    "correct_index": 1,
    "explanation": "Saving helps you make sure you have enough money when you really need something."
  },
  {
    "id": "6a97c3e6c24dcb5d63a05f31",
    "lesson_id": "6a9671b6443851eadcd2de93",
    "order": 5,
    "question": "Who should you talk to before donating your money?",
    "options": [
      "A stranger",
      "Your parents or guardians",
      "Nobody",
      "A cartoon character"
    ],
    "correct_index": 1,
    "explanation": "It is always good to talk to your parents to make sure your gift goes to the right place."
  },
  {
    "id": "6a97c0f83ea413831845467f",
    "lesson_id": "6a7317de25029c8b5878a6a7",
    "order": 5,
    "question": "What does it mean to make saving a 'habit'?",
    "options": [
      "Saving only once every five years",
      "Saving money every time you get it",
      "Buying things you don't need",
      "Borrowing money from friends"
    ],
    "correct_index": 1,
    "explanation": "A habit is something you do regularly, so saving every time you get money ensures your savings grow consistently."
  },
  {
    "id": "6a97c0f2d1c970c779f4da5f",
    "lesson_id": "6a9671b6443851eadcd2de92",
    "order": 5,
    "question": "Why is it a good idea to compare prices before buying something?",
    "options": [
      "To find the highest price available",
      "To make sure you don't spend too much money for the same product",
      "To spend more time in the shop",
      "To talk to the shopkeeper"
    ],
    "correct_index": 1,
    "explanation": "Comparing prices helps you get the best deal, leaving you with more money for other things."
  },
  {
    "id": "6a97c0ec48e1379a8afdcaa2",
    "lesson_id": "6a9671b6443851eadcd2de91",
    "order": 5,
    "question": "What does it mean to 'Share' your money?",
    "options": [
      "Buying gifts for yourself",
      "Lending money to friends without asking for it back",
      "Giving money to help a charity or someone in need",
      "Trading your money for toys"
    ],
    "correct_index": 2,
    "explanation": "Sharing is a kind way to use your money to support causes or people that are important to you."
  },
  {
    "id": "6a97c0e7317876d7bd6c1207",
    "lesson_id": "6a7317de25029c8b5878a6a6",
    "order": 5,
    "question": "Why is it important to keep your parents informed about your work?",
    "options": [
      "They want to take all your money",
      "So they can do the work for you",
      "To ensure you are safe and working for the right people",
      "It is just a rule for no reason"
    ],
    "correct_index": 2,
    "explanation": "Your parents are there to help you stay safe and make sure you are in a good situation."
  },
  {
    "id": "6a97c0e07bc24619e08ee37b",
    "lesson_id": "6a9671b6443851eadcd2de90",
    "order": 5,
    "question": "What is money, really?",
    "options": [
      "A magic object",
      "A tool that makes trading easier",
      "Something only adults can use",
      "A type of food"
    ],
    "correct_index": 1,
    "explanation": "Money is simply a tool that society uses to make exchanging goods and services simpler."
  },
  {
    "id": "6a97c0dcdb0938b163e4a6f8",
    "lesson_id": "6a7317de25029c8b5878a6a5",
    "order": 5,
    "question": "If you want to buy something expensive, what is the best strategy?",
    "options": [
      "Spend all your money on small candy immediately.",
      "Barter your toys for things you don't need.",
      "Save your money over time until you have enough.",
      "Ask a store to give it to you for free."
    ],
    "correct_index": 2,
    "explanation": "Saving allows you to accumulate enough value to reach a bigger goal later."
  }
];
