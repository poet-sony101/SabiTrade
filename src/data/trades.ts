import { TradeTrack } from '@/types';

export const TRADE_TRACKS: TradeTrack[] = [
  {
    id: "work-ready-basics",
    slug: "work-ready-basics",
    title: "Work-Ready Basics",
    titlePidgin: "Basic Things Wey Every Work Need",
    category: "Business & Client Relations",
    iconName: "Briefcase",
    color: "amber",
    description: "Essential trade skills: dealing with customers, pricing your job fairly, written agreements, and building trust that brings repeat work.",
    descriptionPidgin: "Core skills for any work: how to talk to customer, price work well make you no loss money, and build name wey go make people call you again.",
    estimatedMinutes: 18,
    lessonsCount: 6,
    badgeCode: "SABI-WRK",
    lessons: [
      {
        id: "wrk-1",
        title: "Your first customer: make them come back",
        titlePidgin: "Your first customer: make dem come back",
        readTime: "3 min",
        contentEn: "In any trade, most new work comes from customers who were happy and told their friends. How you treat one customer can bring you ten more.\n\n1. Always arrive 15 minutes before the agreed time. If traffic or weather delays you, call BEFORE the appointment, not after.\n2. Respect the customer's property. Clean up any wire trimmings, fabric scraps, or grease before leaving.\n3. Never leave a job half-finished without explaining when you will return and why.\n4. Call or WhatsApp two days later to ask: 'Is everything working properly?' This simple habit turns first-time clients into lifelong patrons.",
        contentPidgin: "For any work, plenty new customers dey come from people wey dey happy and tell their friends. How you treat one customer fit bring you ten more.\n\n1. Always reach the place 15 minutes before time. If traffic hold you, call customer BEFORE the time reach, no be when time don pass.\n2. Respect the person house or shop. Sweep and clean every dirty, wire pieces, or oil before you pack your bag commot.\n3. No ever abandon work halfway without clear explanation say why you dey pause and the exact time you go return.\n4. After two days, send WhatsApp message ask am: 'Everything still dey work fine?' This single thing dey make customer hold you tight like gold.",
        keyTakeaway: "Repeat customers and word-of-mouth recommendations are worth more than any paid advertisement."
      },
      {
        id: "wrk-2",
        title: "Pricing a job without cheating yourself",
        titlePidgin: "How to price work so you no go cheat yourself",
        readTime: "3 min",
        contentEn: "Too many artisans quote low just to get the job, only to end up paying for materials out of pocket or working for peanuts.\n\nFormula for a realistic quote:\n- Cost of Parts & Materials (verified with vendors today, not last month)\n- Transport & Logistics (add 15% buffer for fuel or surge pricing)\n- Your Labor & Expertise (set an hourly or daily baseline)\n- Contingency (10% extra for unexpected complications)\n\nNever quote off the top of your head in front of a client. Say: 'Let me inspect thoroughly and send you a broken-down estimate in 20 minutes.'",
        contentPidgin: "Plenty artisans dey quickly quote cheap price because dem wan collect the work, but at the end, dem go use their own money buy parts or do free labor.\n\nHow to calculate your correct price:\n- Cost of Materials & Parts (confirm today price from market, no use last month price)\n- Transport money (add small buffer for fuel or road matter)\n- Your workmanship / labor (know how much your time and sweat cost per day)\n- Emergency allowance (10% extra if screw break or pipe stubborn)\n\nNo ever just shoot price from your mouth sharp sharp. Tell customer: 'Make I check the fault well, I go send you full breakdown on WhatsApp inside 20 minutes.'",
        keyTakeaway: "A written breakdown shows professionalism and stops customers from accusing you of padding prices."
      },
      {
        id: "wrk-3",
        title: "Being reliable: the skill nobody teaches",
        titlePidgin: "To be person wey people fit trust: the secret",
        readTime: "3 min",
        contentEn: "In the informal economy, skill is common, but reliability is rare. If you promise Thursday at 2 PM, be there Thursday at 1:45 PM.\n\n- If a replacement part is delayed, inform the customer with the new delivery date immediately.\n- Keep your phone charged and WhatsApp accessible during working hours.\n- Be honest about what you know and what you don't. It is better to bring a specialist than to damage a client's ₦500,000 inverter.",
        contentPidgin: "For street, plenty people get handwork, but person wey dey keep promise hard to find. If you talk Thursday 2 PM, make you reach there by 1:45 PM.\n\n- If market delay the original part, tell customer immediately and give am the real time.\n- Keep your phone with battery and turn on data so customer fit reach you.\n- Sabi your limit. E better make you call senior colleague help you than to blow customer ₦500,000 inverter because of pride.",
        keyTakeaway: "Your reputation for honesty and punctuality is your strongest commercial asset."
      },
      {
        id: "wrk-4",
        title: "Agreeing jobs in writing on WhatsApp",
        titlePidgin: "How to seal agreement for WhatsApp so nobody go deny",
        readTime: "3 min",
        contentEn: "Disputes happen when scope and cost live only in spoken words. Always summarize in a WhatsApp message before turning a single screw:\n\n'Hi [Name], as agreed: I will replace the iPhone 12 OLED screen and speaker mesh. Total cost: ₦42,000 (Parts: ₦32k, Labor: ₦10k). 60% deposit before purchase, balance upon testing. Delivery: Tomorrow 4 PM. Please reply YES to confirm.'\n\nWhen they reply YES, you have a timestamped contract.",
        contentPidgin: "Quarrel dey start when everything dey inside mouth without proof. Before you touch any tool, type this sample summary on WhatsApp:\n\n'Good day Chief [Name], as we agree: I go change your iPhone 12 OLED screen and speaker mesh. Total money: ₦42,000 (Parts: ₦32,000, Workmanship: ₦10,000). You go drop 60% advance make I buy the part, balance after we test am. Work go ready tomorrow 4 PM. Reply YES make I begin.'\n\nOnce dem reply YES, agreement don set!",
        keyTakeaway: "A simple WhatsApp confirmation prevents 95% of payment arguments."
      },
      {
        id: "wrk-5",
        title: "Saving and planning your money",
        titlePidgin: "Save and plan your money make business no dry",
        readTime: "3 min",
        contentEn: "Do not mix customer deposit money with your personal feeding money.\n\n- Open a separate bank account or sub-wallet strictly for business material purchases.\n- Pay yourself a consistent salary or daily wage rather than spending whatever is in your pocket.\n- Keep a replacement tool fund (at least 5% of every job's labor fee). When your multimeter or drill drops, your livelihood won't stop.",
        contentPidgin: "No ever mix money wey customer pay for materials with money wey you wan take chop lunch.\n\n- Open separate bank account or fintech wallet solely for business and parts purchase.\n- Pay yourself normal daily or weekly wage; no be any money wey enter hand you go spend finish.\n- Put at least 5% of every labor fee inside emergency tool pocket. If your tester or machine spoil tomorrow, work no go hang.",
        keyTakeaway: "Separate business money from personal money from day one."
      },
      {
        id: "wrk-6",
        title: "Handling complaints calmly and turning them around",
        titlePidgin: "How to handle customer vex calmly and win their loyalty",
        readTime: "3 min",
        contentEn: "When an angry customer calls saying 'What you fixed stopped working!', do not argue or get defensive.\n\n1. Listen without interrupting. Say: 'I hear you, and I understand why this is frustrating.'\n2. Inspect the issue within 24 hours. If it was your mistake, fix it immediately without charging an extra kobo.\n3. If it was a user error or separate issue, explain with empathy and show them the physical cause.\n4. Customers who see you stand by your warranty become your most vocal advocates.",
        contentPidgin: "When customer call with vex say 'Wetin you do don spoil again!', no shout back or start dey prove right.\n\n1. Calm down listen well. Tell am: 'Chief, I hear you, and I understand say e pain you.'\n2. Go there inside 24 hours go inspect am. If na mistake from your hand, fix am sharp sharp without charging one naira.\n3. If na customer pikin press wrong button or another wire burn, show am the problem with respect.\n4. Customer wey see say you honor your warranty go recommend you pass anybody else.",
        keyTakeaway: "A warranty honored with a smile turns an upset customer into a lifelong advocate."
      }
    ],
    quiz: [
      {
        id: "q-wrk-1",
        question: "Before purchasing parts and starting a paid job, what is the best practice?",
        options: [
          "Start working immediately and ask for money when you are completely finished",
          "Send a written breakdown on WhatsApp and get their confirmation reply",
          "Tell the customer a rough price verbally and adjust it later if parts cost more",
          "Take the customer's phone as collateral"
        ],
        correctIndex: 1,
        explanation: "A written WhatsApp summary specifying parts cost, labor, deposit, and delivery deadline prevents misunderstandings and locks in commitment."
      },
      {
        id: "q-wrk-2",
        question: "When pricing a job, which factor should ALWAYS be included beyond parts and labor?",
        options: [
          "A personal entertainment fee",
          "Transport costs plus a 10% contingency buffer for unforeseen complications",
          "A penalty charge for slow-talking clients",
          "Double the market cost of materials"
        ],
        correctIndex: 1,
        explanation: "Transport volatility and unforeseen complications (stripped screws, seized pipes) must be buffered so you don't lose money on the job."
      },
      {
        id: "q-wrk-3",
        question: "What should you do if an unforeseen delay means you will arrive 45 minutes late?",
        options: [
          "Turn off your phone and rush silently",
          "Call the customer before the scheduled time, explain honestly, and give an updated arrival time",
          "Wait until the customer calls you angrily and then apologize",
          "Reschedule for next week without notice"
        ],
        correctIndex: 1,
        explanation: "Proactive communication before the deadline demonstrates integrity and sets you apart from 90% of informal contractors."
      }
    ]
  },
  {
    id: "phone-repair",
    slug: "phone-repair",
    title: "Phone Hardware & Screen Diagnostics",
    titlePidgin: "Phone Repair: The Sabi Level",
    category: "Electronics Repair",
    iconName: "Smartphone",
    color: "rose",
    description: "Diagnose no-power, charging port faults, screen replacement, water damage first aid, and avoiding counterfeit ICs.",
    descriptionPidgin: "How to check phone wey no dey charge, replace screen without line, save phone wey fall water, and know fake spare parts.",
    estimatedMinutes: 22,
    lessonsCount: 5,
    badgeCode: "SABI-PHN",
    lessons: [
      {
        id: "phn-1",
        title: "Phone fell in water: first aid protocol",
        titlePidgin: "Phone fall inside water: wetin to do sharp sharp",
        readTime: "4 min",
        contentEn: "Water itself doesn't kill electronics—short circuits while powered and mineral corrosion do. Forget the rice myth!\n\n1. Disconnect battery immediately. Do NOT press power buttons or plug in the charger to 'see if it still works'.\n2. Strip down to motherboard, disconnect cameras and display ribbons.\n3. Submerge motherboard in 99% pure Isopropyl Alcohol (IPA) in an ultrasonic cleaner or brush gently with anti-static brush.\n4. Dry thoroughly using warm air (60-70°C) before applying DC power supply with current limiting (1.0A max) to test for short circuits.",
        contentPidgin: "No be water dey kill phone—na short circuit when current pass through wet board and rust! Forget that rice story!\n\n1. Comot battery sharp sharp. No ever press power button or plug charger say you wan 'check whether e still dey light'.\n2. Open the phone, comot motherboard, disconnect camera and screen ribbons.\n3. Wash the motherboard with 99% Isopropyl Alcohol (IPA) using soft toothbrush to clean all rust and corrosion.\n4. Blow am dry with warm blower (60-70°C) before you hook am to DC Power Supply to check whether e get short circuit.",
        keyTakeaway: "Never plug a wet device into AC charging. Isopropyl alcohol displacement saves 80% of water-damaged motherboards."
      },
      {
        id: "phn-2",
        title: "Phone not charging: check these 4 points first",
        titlePidgin: "Phone no dey charge? Check these four places first",
        readTime: "4 min",
        contentEn: "90% of charging complaints are diagnosed with a USB Current/Voltage Doctor Meter.\n\n1. Inspect port lint: 50% of loose Type-C/Lightning cables are caused by compacted pocket lint. Clean gently with fine tweezers.\n2. Current draw test: If meter shows 5V with 0.00A, the CC pin or VBUS line is broken or open-circuit.\n3. Fast charge negotiation: If voltage stays at 5V and won't negotiate 9V/12V PD, check the charging IC (PMIC) or D+/D- data lines.\n4. Cold solder on sub-board: Flex cable connecting sub-board to main board often loosens after a drop.",
        contentPidgin: "90% of charging trouble, USB Doctor meter fit reveal am inside 30 seconds.\n\n1. Check pocket dirty inside port: Plenty times, cable no dey enter because cotton dirty pack inside. Clean am carefully with small pin.\n2. Check current: If USB meter show 5V but 0.00A, e mean VBUS wire don cut or charging flex disconnect.\n3. Fast charge test: If phone only take slow current, check D+ and D- data pins or charging IC.\n4. Sub-board flex: If phone drop for floor, check the long ribbon cable wey link bottom speaker/mic board go main board.",
        keyTakeaway: "Use a USB voltage/amperage meter before prying open a phone. It tells you the fault without opening the screws."
      },
      {
        id: "phn-3",
        title: "OLED vs Incell screens: avoid customer disputes",
        titlePidgin: "OLED vs Incell screen: how to explain so customer no vex",
        readTime: "3 min",
        contentEn: "Replacing a cracked Samsung or iPhone screen with a cheap Incell display causes dimmer brightness, thick bezels, high battery drain, and non-working under-display fingerprint sensors.\n\n- Always explain the difference to the customer before buying: 'Original Refurbished/OLED is ₦45,000 (perfect fingerprint & colors); Incell copy is ₦22,000 (thicker screen, no under-display fingerprint)'.\n- Let the client choose in writing. Never put an Incell and claim it is original.",
        contentPidgin: "If you use cheap Incell screen replace Samsung or iPhone wey get OLED before, the battery go drain fast, the screen edge go thick, and fingerprint under glass no go work.\n\n- Always tell customer straight up: 'Original OLED na ₦45,000 (colors clean, fingerprint dey work); Copy Incell na ₦22,000 (colors dull small, fingerprint under screen no go work)'.\n- Let customer pick the one their pocket fit carry. No ever fix copy screen come claim say na original.",
        keyTakeaway: "Transparency about screen grades protects your reputation and prevents returns."
      },
      {
        id: "phn-4",
        title: "Safe battery replacement and swelling hazards",
        titlePidgin: "How to change phone battery safe without fire hazard",
        readTime: "3 min",
        contentEn: "Puncturing a Lithium-ion pouch battery causes catastrophic thermal runaway and fires.\n\n- NEVER use metal pry tools against the battery. Use plastic spudgers and isopropyl alcohol to soften the pull-tab adhesive.\n- If a battery is swollen ('pillow battery'), do not press it down or bend it.\n- Always test the battery's BMS output voltage with your multimeter before sealing the phone.",
        contentPidgin: "If iron tool pierce lithium battery, e go catch fire like firecracker inside your workshop!\n\n- No EVER use iron knife or screwdriver pry battery. Use plastic card and drop small IPA alcohol to soften the glue.\n- If battery don swell like bread, handle am with gentle care, no try squeeze or press am flat.\n- Test the battery voltage with multimeter (suppose dey between 3.8V and 4.2V) before you glue the phone cover.",
        keyTakeaway: "Use plastic tools and alcohol solvent for batteries. Never puncture lithium pouch cells."
      },
      {
        id: "phn-5",
        title: "Spotting fake replacement parts in the market",
        titlePidgin: "How to spot fake parts for market make dem no run you street",
        readTime: "3 min",
        contentEn: "Counterfeit ICs and refabricated batteries flood informal markets.\n\n- Check laser markings: Fake chips have uneven font thickness or chemical wash marks over sanded silicon.\n- Weigh replacement batteries: A genuine 5000mAh battery has distinct weight; cheap clones often weigh 20-30% less due to reduced cell capacity.\n- Build trusted relationships with 2 specific vendors who offer 7-day swap warranties on dead-on-arrival components.",
        contentPidgin: "Fake parts plenty for market and dem fit spoil your good name if you no shine your eye.\n\n- Look the writing on the chip: If the letters dey wipe with spit or the surface look like sandpaper scrub am, na counterfeit.\n- Weigh the battery for hand: Original 5000mAh battery heavy well-well; fake one light like paper because the chemical inside small.\n- Find two trusted shop owners for market wey dey give you testing warranty if part get factory defect.",
        keyTakeaway: "Weight and print quality expose counterfeit components before you install them."
      }
    ],
    quiz: [
      {
        id: "q-phn-1",
        question: "What is the very first and most critical action when a phone is dropped in liquid?",
        options: [
          "Plug in the fast charger to test if the screen still lights up",
          "Put the phone in a bag of uncooked white rice for 3 days",
          "Immediately disconnect the battery and never attempt to power it on",
          "Use a hot hairdryer on maximum heat against the charging port"
        ],
        correctIndex: 2,
        explanation: "Disconnecting the power source stops electrolytic corrosion and short circuits. Water only causes permanent damage when electrical current passes through it."
      },
      {
        id: "q-phn-2",
        question: "Why should you NEVER use metal tweezers or a metal knife to pry up a glued phone battery?",
        options: [
          "Because metal attracts dust",
          "Puncturing the lithium pouch creates a dangerous internal short circuit that can catch fire",
          "Metal tools void the Android operating system license",
          "It magnetizes the ear speaker"
        ],
        correctIndex: 1,
        explanation: "Puncturing lithium-ion cells exposes volatile electrolytes to air and causes rapid thermal runaway (intense chemical fire)."
      },
      {
        id: "q-phn-3",
        question: "If a customer's phone draws 5.0V but 0.00A on a USB ammeter, what does it signify?",
        options: [
          "The phone is fully charged at 100%",
          "There is an open circuit or broken VBUS connection preventing current from reaching the battery",
          "The network SIM card is expired",
          "The screen resolution is set too high"
        ],
        correctIndex: 1,
        explanation: "0.00A current draw at 5V means no power is reaching the charging circuit, commonly due to broken pins, lint blockage, or a severed flex line."
      }
    ]
  },
  {
    id: "solar-installation",
    slug: "solar-installation",
    title: "Solar & Inverter Setup",
    titlePidgin: "Solar Setup: Light Up Naija",
    category: "Renewable Energy",
    iconName: "Sun",
    color: "emerald",
    description: "Load sizing, battery bank chemistry (Gel vs LiFePO4), inverter installation, wiring safety, and earthing protection.",
    descriptionPidgin: "How to calculate house load, wire solar panels, set up inverter and lithium battery, and earth the system make thunder no strike am.",
    estimatedMinutes: 25,
    lessonsCount: 5,
    badgeCode: "SABI-SOL",
    lessons: [
      {
        id: "sol-1",
        title: "Accurate load calculation: stop burning inverters",
        titlePidgin: "How to calculate house load make inverter no blow",
        readTime: "4 min",
        contentEn: "Clients often say 'I only run a few bulbs and a TV', then plug in an electric iron, blender, or deep freezer that blows the inverter MOSFETs.\n\nStep 1: Calculate total continuous watts (e.g. 5 LED bulbs @ 10W = 50W; TV = 80W; Standing Fan = 65W; Decoder = 20W; Laptop = 65W. Total = 280W).\nStep 2: Account for inductive surge power (compressors and motors take 3x to 5x their rated power upon startup).\nStep 3: Size the inverter to operate at no more than 70% continuous capacity for longevity (for a 700W continuous load, recommend a 1.2kVA or 1.5kVA pure sine wave inverter).",
        contentPidgin: "Customer go tell you say 'Na only small bulb and TV I get', but once light go, dem go carry pressing iron or deep freezer plug am, and inverter go blow!\n\nStep 1: Write every appliance down and add their watts (e.g. 5 bulbs x 10W = 50W; Smart TV = 80W; Ox Fan = 75W; Laptop = 65W. Total = 270W).\nStep 2: Know say fridge or pumping machine dey draw 3x to 5x their normal power when dem dey start (surge current).\nStep 3: Make inverter dey run under 70% of e capacity so e go last (if house load na 700W, give customer at least 1.5kVA pure sine wave inverter).",
        keyTakeaway: "Always survey customer appliances in person. Surge loads from refrigerators and irons will instantly destroy undersized inverters."
      },
      {
        id: "sol-2",
        title: "Battery chemistry: Tubular Gel vs Lithium (LiFePO4)",
        titlePidgin: "Battery choice: Tubular Gel vs Lithium LiFePO4",
        readTime: "4 min",
        contentEn: "Explaining battery longevity saves clients from disappointment after 12 months.\n\n- Tubular/Gel Lead-Acid: Usable depth of discharge (DoD) is only 50%. A 200Ah 12V battery only provides 100Ah of real usable power. Cycles: ~800-1200 cycles (lasts 1.5 to 2.5 years).\n- Lithium Iron Phosphate (LiFePO4): Usable DoD is 85-95%. A 100Ah 12V lithium gives equivalent energy to a 200Ah lead-acid battery, charges 3x faster, weighs 70% less, and lasts 3,500+ cycles (8 to 10 years).\n- Advise clients: While Lithium costs more upfront, cost-per-cycle is 60% cheaper over 5 years.",
        contentPidgin: "Teach your customer the truth about battery make dem no blame you when battery die after one year.\n\n- Gel / Tubular Battery: You fit only use 50% of the power. 200Ah battery na only 100Ah real power you fit draw safely. E dey last 1 to 2 years before e start weak.\n- Lithium LiFePO4: You fit use 90% of the energy. 100Ah lithium battery light like feather, dey charge faster, and dey last 8 to 10 years (3,500+ cycles).\n- Tell customer: Even though Lithium cost pass Gel today, na the cheapest battery for long run because you no go buy battery again for ten years.",
        keyTakeaway: "Lead-acid only delivers 50% usable capacity; LiFePO4 delivers 90% and lasts 4x longer."
      },
      {
        id: "sol-3",
        title: "Series vs Parallel solar panel wiring",
        titlePidgin: "Panel wiring: Series vs Parallel connection",
        readTime: "4 min",
        contentEn: "Wiring panels incorrectly will either fail to activate the MPPT controller or fry its maximum input voltage (Voc).\n\n- Series Connection: Connect (+) to (-). Volts add up; Amps stay the same (e.g. two 40V, 10A panels = 80V, 10A). Used for MPPT controllers to reduce cable loss over long roof runs.\n- Parallel Connection: Connect (+) to (+) and (-) to (-). Amps add up; Volts stay the same (40V, 20A). Requires thicker DC cables.\n- CRITICAL: Never exceed the MPPT charge controller's rated Maximum Voc in cold weather.",
        contentPidgin: "If you connect panels anyhow, either the MPPT controller no go kick or the high voltage go blow the controller board.\n\n- Series Connection: Wire (+) enter (-). Voltage go increase, but Current (Amps) go remain the same (two 40V 10A panels go give 80V 10A). This one good for MPPT controller so wire no go hot.\n- Parallel Connection: Wire (+) to (+) and (-) to (-). Current go double, but Voltage remain same. This one need thick copper cable.\n- Watch out: No ever let the total Voc pass the maximum limit wey manufacturer write on top the charge controller.",
        keyTakeaway: "Series multiplies voltage; parallel multiplies amperage. Always check your controller's maximum Voc limit."
      },
      {
        id: "sol-4",
        title: "Proper DC cable sizing and breaker protection",
        titlePidgin: "Cable size and breaker: how to prevent electrical fire",
        readTime: "3 min",
        contentEn: "DC current creates continuous arcing when disconnected under load.\n\n- Never use cheap AC domestic breakers for DC battery or panel lines. Use dedicated polarized DC MCBs.\n- Low voltage means high current: A 12V 1000W inverter draws nearly 90 Amps from the battery! You need thick 25mm² or 35mm² flexible pure copper battery cables.\n- Using thin 4mm² wire on battery terminals will melt the insulation and ignite a fire within 20 minutes.",
        contentPidgin: "DC current wey battery dey supply dey create heavy spark and arc pass normal NEPA AC.\n\n- No use normal cheap AC house breaker for solar panel or battery line. Buy real DC MCB breaker.\n- Because 12V low, the current (Amps) dey very high! 12V 1000W inverter dey draw almost 90 Amps! You must use thick 25mm² or 35mm² original copper battery cable.\n- If you use small wire on top battery terminal, the wire go hot like stove and catch fire inside house.",
        keyTakeaway: "Always use genuine DC breakers and properly gauged cables on battery banks."
      },
      {
        id: "sol-5",
        title: "Earthing, lightning arrestors, and surge arrest",
        titlePidgin: "Earthing and thunder protection for solar panels",
        readTime: "3 min",
        contentEn: "A metal roof covered in aluminum solar frames is an attractive target for lightning and static buildup.\n\n- Bond all solar panel aluminum frames together using stainless steel grounding clips and 6mm² earth wire.\n- Run a dedicated earth cable down to an independent copper earth rod driven at least 2.5 meters into moist soil.\n- Install a DC Surge Protective Device (SPD) in the combiner box to divert transient atmospheric spikes before they reach the inverter.",
        contentPidgin: "Roof wey carry plenty aluminum solar panels dey attract static electricity and thunder strike.\n\n- Join all the panel aluminum metal bodies together with 6mm² earth wire and clips.\n- Run the earth wire straight go ground into original copper earth rod wey sink at least 2.5 meters inside wet ground.\n- Put DC Surge Protector (SPD) breaker inside your combiner box make thunder spike no go destroy inverter.",
        keyTakeaway: "Proper grounding protects both the client's home and your professional warranty."
      }
    ],
    quiz: [
      {
        id: "q-sol-1",
        question: "When connecting two 40V, 10A solar panels in SERIES, what is the resulting output?",
        options: [
          "40V and 20A",
          "80V and 10A",
          "80V and 20A",
          "20V and 5A"
        ],
        correctIndex: 1,
        explanation: "In a series connection, voltages add together (40V + 40V = 80V) while the current remains unchanged (10A)."
      },
      {
        id: "q-sol-2",
        question: "What is the recommended safe maximum depth of discharge (DoD) for a standard Tubular/Gel lead-acid battery to ensure decent longevity?",
        options: [
          "100% (drain it until the inverter shuts off)",
          "50% (only use half of the rated capacity)",
          "10% (stop using immediately)",
          "85%"
        ],
        correctIndex: 1,
        explanation: "Discharging lead-acid or gel batteries beyond 50% causes severe plate sulfation, cutting their operational lifespan from 2 years down to 6 months."
      },
      {
        id: "q-sol-3",
        question: "Why can you NOT use standard domestic AC breakers for DC battery disconnects?",
        options: [
          "DC breakers are painted yellow",
          "DC current doesn't cross zero voltage, causing continuous electrical arcing that AC breakers cannot extinguish safely",
          "AC breakers consume too much solar power",
          "DC breakers are required by telecom companies only"
        ],
        correctIndex: 1,
        explanation: "AC alternating current crosses zero 100 times a second, naturally extinguishing arcs. DC has constant voltage, so it requires magnetic arc chutes found only in true DC breakers."
      }
    ]
  },
  {
    id: "electrical-installation",
    slug: "electrical-installation",
    title: "Domestic Electrical Safety & Wiring",
    titlePidgin: "Light & Wire: Sabi Electrical",
    category: "Electrical Installation",
    iconName: "Zap",
    color: "blue",
    description: "Conduit wiring, distribution boards, RCD/GFCI shock protection, phase balancing, and multimeter troubleshooting.",
    descriptionPidgin: "House wiring, distribution box connection, breaker setup to prevent electric shock, and how to test live voltage safely.",
    estimatedMinutes: 20,
    lessonsCount: 4,
    badgeCode: "SABI-ELE",
    lessons: [
      {
        id: "ele-1",
        title: "Distribution board (DB) and breaker ratings",
        titlePidgin: "Distribution box: correct breaker for correct wire",
        readTime: "4 min",
        contentEn: "Matching breaker amperage to wire gauge is the fundamental rule of fire prevention.\n\n- Lighting points (1.5mm² copper wire): Use 6A or 10A Type B MCBs.\n- Socket ring/radial circuit (2.5mm² wire): Use 16A or 20A MCBs.\n- Heavy loads (Cooker unit, 2.5HP AC, 6mm² wire): Use 32A or 40A MCBs.\n- Never put a 32A breaker on a 1.5mm² lighting line! If a short circuit happens, the wire will burn to ashes inside the wall before the oversized breaker ever trips.",
        contentPidgin: "The main secret of electrical safety na to match breaker size with wire thickness.\n\n- Bulb circuit (1.5mm² wire): Use 6A or 10A breaker.\n- Normal wall sockets (2.5mm² wire): Use 16A or 20A breaker.\n- Big load like AC or water heater (4mm² or 6mm² wire): Use 32A breaker.\n- No ever put 32A breaker on top small 1.5mm² bulb wire! If fault happen, the wire go melt catch fire inside wall before the big breaker even notice.",
        keyTakeaway: "Breakers protect the wiring, not the appliance. Never oversize an MCB."
      },
      {
        id: "ele-2",
        title: "RCD / Earth Leakage: save human lives from electrocution",
        titlePidgin: "RCD / Earth Leakage breaker: how to save life from shock",
        readTime: "3 min",
        contentEn: "Standard breakers do NOT protect a person touching a live wire. Only an RCD (Residual Current Device) does.\n\n- An RCD monitors the balance between Live and Neutral. If as little as 30mA leaks to Earth (e.g. through a human being or water in a bathroom socket), it trips in under 30 milliseconds.\n- Every domestic consumer board must have a 30mA RCD covering sockets and wet areas.\n- Press the 'T' (Test) button once every quarter to ensure the mechanical spring hasn't seized.",
        contentPidgin: "Normal breaker no dey save person wey shock touch. Na only RCD (Earth Leakage) breaker fit save life.\n\n- RCD dey check current wey dey go Live and return Neutral. If even small 30mA leak enter body or enter wet floor, e go trip inside 0.03 seconds before shock fit stop heart.\n- Every modern house distribution box must get 30mA RCD for wall sockets and water areas.\n- Press the 'T' test button once in 3 months to make sure say the spring mechanism still active.",
        keyTakeaway: "A 30mA RCD trips in 30ms, preventing fatal electric shocks in residential premises."
      },
      {
        id: "ele-3",
        title: "Safe dead-circuit testing protocol",
        titlePidgin: "Safe testing: make sure wire die before you touch am",
        readTime: "3 min",
        contentEn: "Never trust an open wall switch. Follow the Safe Isolation Protocol:\n\n1. Switch off the main isolator.\n2. Lock out or tag the breaker if working in a commercial building.\n3. Test your two-pole voltage tester on a known live source to verify the tester works.\n4. Test the circuit you are working on (Live to Neutral, Live to Earth, Neutral to Earth). All must show 0V.\n5. Test your tester again on the known source to prove it didn't fail during test.",
        contentPidgin: "No ever trust switch with your bare hand. Follow this 5-step rule:\n\n1. Off the main breaker.\n2. Put sign or lock make another person no come turn am on.\n3. Test your multimeter on socket wey you know say get light make you confirm say tester dey work.\n4. Test the exact wire wey you wan touch (Live to Neutral, Live to Earth). Everything must show 0V.\n5. Test your tester back on light to be 100% sure say your meter no spoil during test.",
        keyTakeaway: "Test before touch, every single time. Assumptions kill electricians."
      },
      {
        id: "ele-4",
        title: "Troubleshooting tripping breakers systematically",
        titlePidgin: "Breaker dey trip? How to find the exact fault without stress",
        readTime: "3 min",
        contentEn: "When an MCB trips immediately upon reset, do not hold it up with your hand!\n\n1. Unplug all appliances on that circuit. Reset the breaker.\n2. If it holds, plug appliances in one by one. The one that trips the breaker has an internal earth fault or shorted element (common in kettles and old fridges).\n3. If it trips with everything unplugged, disconnect the socket faceplates along the run to inspect for pinched conductors or rodent damage.",
        contentPidgin: "If breaker trip immediately you switch am up, no try force am hold with your finger!\n\n1. Remove all plugs and chargers on that line. Try on the breaker again.\n2. If e stay, plug appliances one after another. The exact one wey cause trip get fault inside (plenty times na electric kettle or fridge coil).\n3. If e still trip even when nothing plug, open the wall sockets check whether rat bite wire or wire touch iron box.",
        keyTakeaway: "Isolate appliances first before opening walls. 80% of tripping faults are faulty appliances."
      }
    ],
    quiz: [
      {
        id: "q-ele-1",
        question: "What is the primary function of a Residual Current Device (RCD / GFCI)?",
        options: [
          "To increase incoming utility voltage during low power periods",
          "To detect tiny leakage currents (e.g. 30mA) passing through a human to earth and trip instantaneously to prevent fatal shock",
          "To measure how many units of electricity you have consumed",
          "To prevent internet cables from overheating"
        ],
        correctIndex: 1,
        explanation: "RCDs detect dangerous residual leakage currents passing outside the circuit (such as through a person's body) and cut power in milliseconds."
      },
      {
        id: "q-ele-2",
        question: "What happens if an electrician puts a 40A breaker on a thin 1.5mm² domestic lighting wire?",
        options: [
          "The lights will glow 4 times brighter",
          "In the event of an overload or short circuit, the wire can overheat and catch fire before the breaker ever trips",
          "The electric meter will spin backwards",
          "Nothing, breaker size does not matter for safety"
        ],
        correctIndex: 1,
        explanation: "Breakers are rated to protect conductors. An oversized breaker allows catastrophic overcurrent that melts insulation before tripping."
      },
      {
        id: "q-ele-3",
        question: "Before touching exposed copper conductors in a home, what is the mandatory safety step?",
        options: [
          "Touch the wire quickly with your pinky finger to feel for warmth",
          "Isolate the supply and verify dead with an approved voltage tester tested on a known source",
          "Turn off the lights in the room",
          "Pour water on the floor"
        ],
        correctIndex: 1,
        explanation: "Safe isolation testing with a verified instrument is the only reliable method to confirm a circuit is completely de-energized."
      }
    ]
  },
  {
    id: "tailoring-fashion",
    slug: "tailoring-fashion",
    title: "Tailoring & Garment Construction",
    titlePidgin: "Cut & Sew: Sabi Fashion",
    category: "Fashion & Craft",
    iconName: "Scissors",
    color: "purple",
    description: "Precise body measurements, fabric grain line alignment, industrial sewing machine maintenance, and finishing.",
    descriptionPidgin: "How to take correct body measurement, cut fabric make pattern align, maintain industrial machine, and iron neat finish.",
    estimatedMinutes: 18,
    lessonsCount: 4,
    badgeCode: "SABI-FSH",
    lessons: [
      {
        id: "fsh-1",
        title: "Taking foolproof measurements: bust, waist, hip & armhole",
        titlePidgin: "How to take correct measurement so cloth no go tight",
        readTime: "4 min",
        contentEn: "Measurement errors ruin expensive Ankara or lace before sewing even starts.\n\n- Always have the client wear the exact undergarments and shoe height they plan to wear with the final outfit.\n- Keep your index finger flat under the tape measure when measuring chest and waist to give natural breathing ease (0.5 to 1 inch ease).\n- Record the 'Nape to Waist' and 'Shoulder to Nipple' vertical lengths to ensure darts fall accurately on the natural body curves.",
        contentPidgin: "Mistake for measurement dey spoil expensive Ankara or lace before scissors even touch am.\n\n- Make sure customer wear the kind bra or shoe wey dem go wear on top the cloth on that day.\n- Put your one finger flat under the tape rule when you dey measure waist and chest so the cloth go get space to breathe.\n- Measure shoulder to nipple and back to waist make darts for front and back sit well on top body.",
        keyTakeaway: "Never pull the tape rule skin-tight. A finger under the tape ensures natural posture and comfort."
      },
      {
        id: "fsh-2",
        title: "Fabric grain, pattern matching & cutting layout",
        titlePidgin: "How to layout fabric make pattern and stripes match",
        readTime: "3 min",
        contentEn: "Cutting against the warp grain causes garments to twist around the body after the first wash.\n\n- The lengthwise grain (parallel to the selvage) has the least stretch and must run vertically down pants and shirts.\n- For patterned fabrics (stripes, checks, or prominent African print motifs), align the front panels at center-front so the pattern mirrors seamlessly across the zipper or button placket.\n- Always add 0.5-inch seam allowance for standard seams and 1.5 inches for hemlines.",
        contentPidgin: "If you cut fabric against the grain line, the dress or trousers go dey twist for leg after first wash.\n\n- The strong straight side of the cloth (selvage) must face down along the body for trousers and gowns.\n- For Ankara with bold pictures or stripes, match the front pieces for center so the pattern flow together across the buttons.\n- Always leave half-inch seam allowance for join-join and 1.5 inches for bottom fold.",
        keyTakeaway: "Respecting the fabric grain line prevents the garment from twisting or draping crookedly."
      },
      {
        id: "fsh-3",
        title: "Industrial machine maintenance & tension balance",
        titlePidgin: "Maintain your industrial machine make thread no dey break",
        readTime: "3 min",
        contentEn: "90% of bird's nests (thread bunching underneath the fabric) are NOT caused by the bobbin, but by incorrect top thread tension.\n\n- If thread bunches on the underside: The upper thread has zero tension (check if the thread jumped out of the tension disks or take-up lever).\n- If thread bunches on top: Bobbin case tension spring is too loose or screw has backed out.\n- Daily routine: Oil the machine hook race with 2 drops of clear sewing machine oil and brush out lint from feed dogs every morning.",
        contentPidgin: "90% of thread wey dey cluster under cloth no be bobbin fault, na upper thread tension!\n\n- If thread bunch for bottom: The upper thread no get tension (check whether thread comot from tension disc or needle eye).\n- If thread tight for top: Bobbin case screw loose too much.\n- Every morning: Drop two drops of clean machine oil inside shuttle hook and brush away fabric dust from feed dog teeth.",
        keyTakeaway: "Bunching on the bottom means re-thread your top tension discs. Bunching on top means check your bobbin."
      },
      {
        id: "fsh-4",
        title: "Pressing as you sew: the mark of a master tailor",
        titlePidgin: "Iron every seam as you sew: the secret of clean finish",
        readTime: "3 min",
        contentEn: "Amateur tailors wait until the entire dress is sewn before touching the iron. Professional tailors press every single seam open immediately after stitching.\n\n- Pressing sets the thread into the fibers and flattens seam bulk.\n- Use a tailor's ham or rolled towel for curved seams around the bust and hips.\n- Always use a pressing cloth over delicate synthetics to prevent shiny scorched marks.",
        contentPidgin: "Apprentice dey wait till cloth finish before dem iron am. Master tailor dey iron every single line immediately after sewing machine join am.\n\n- Ironing dey make thread settle inside cloth and make seam flat like ready-made.\n- Use rolled towel under curved seams like hip and chest make iron no press flat the natural shape.\n- Put clean cotton cloth on top soft fabric so iron no go burn am make e dey shine.",
        keyTakeaway: "Sewing is 50% cutting, 25% stitching, and 25% pressing. Press every seam as you go."
      }
    ],
    quiz: [
      {
        id: "q-fsh-1",
        question: "When thread clusters and nests in a tangled ball on the UNDERSIDE of the fabric, what is usually the real cause?",
        options: [
          "The bobbin is completely broken and must be thrown away",
          "The top thread has slipped out of the upper tension discs or take-up lever",
          "The sewing machine needle is installed backwards",
          "The fabric color is too dark"
        ],
        correctIndex: 1,
        explanation: "Tangled loops on the bottom of the fabric occur when the upper thread has insufficient tension, causing the bobbin to pull excess upper thread down into the hook."
      },
      {
        id: "q-fsh-2",
        question: "Why is it vital to cut trousers and shirts along the lengthwise fabric grain (parallel to the selvage)?",
        options: [
          "It saves cutting time",
          "The lengthwise warp grain has the least stretch and structural stability, stopping garments from twisting around legs or torso",
          "Fabric manufacturers recommend it for tax purposes",
          "It makes the fabric waterproof"
        ],
        correctIndex: 1,
        explanation: "Lengthwise grain provides structural stability and hang. Cutting off-grain causes pant legs and sleeves to twist awkwardly after wearing."
      },
      {
        id: "q-fsh-3",
        question: "What separates high-end master tailoring from amateur workmanship in garment construction?",
        options: [
          "Using the most expensive plastic buttons",
          "Pressing and opening every individual seam with an iron as you sew, rather than only ironing at the very end",
          "Sewing double seams over every stitch",
          "Only using polyester threads"
        ],
        correctIndex: 1,
        explanation: "Pressing as you sew embeds the thread, flattens seam allowances, and creates crisp, professional lines characteristic of bespoke tailoring."
      }
    ]
  }
];
