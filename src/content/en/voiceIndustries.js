// Voice AI by industry — one landing page each, at /voice-ai/<slug>.
// Slugs and aliases live in ../products.js (voiceIndustryRegistry); this file
// holds only the words. Pricing, GDPR, the demo number and the form are shared
// with the main Voice AI page.

export const voiceIndustryUi = {
  eyebrow: 'Voice AI',
  painsLabel: 'Sound familiar?',
  doesLabel: 'What the assistant does',
  callLabel: 'What a call sounds like',
  caller: 'Caller',
  assistant: 'Assistant',
  faqLabel: 'Questions from your industry',
  otherLabel: 'Also for',
  backLabel: 'Voice AI',
}

export const voiceIndustries = {
  dentist: {
    name: 'Dentists',
    meta: {
      title: 'AI phone assistant for dentists — Voice AI',
      description:
        'Never lose a patient to a call you missed mid-treatment. An AI assistant answers the practice line, books appointments in your calendar and puts emergencies through — GDPR-compliant, with a data processing agreement.',
    },
    title: 'A missed call during treatment is a missed patient.',
    lead: 'Your assistant is at the chair when the phone rings. The AI picks up, books the appointment in your calendar and puts emergencies straight through to a person.',
    pains: [
      { title: 'Calls during treatment', body: 'Nobody can pick up with gloves on. The patient gets voicemail and calls the next practice.' },
      { title: 'The same questions, every day', body: 'Opening hours, parking, “are you taking new patients?”. Time your assistant would rather spend at the chair.' },
      { title: 'Cancellations nobody sees', body: 'A cancellation at 7:45 isn’t seen until 9:00. That gap in the diary could have gone to someone else.' },
    ],
    does: [
      { title: 'Books appointments', body: 'Check-up, hygienist or a new patient: it looks in your calendar and only books what’s really free.' },
      { title: 'Moves and cancels', body: 'Patients move or cancel themselves, in the evening too. The freed-up slot opens up again straight away.' },
      { title: 'Spots emergencies', body: 'Pain, an accident, swelling: it puts the caller straight through to the practice, or gives the emergency number outside opening hours.' },
      { title: 'No medical details', body: 'It doesn’t ask about symptoms and gives no medical advice. It books the appointment; the conversation about the complaint stays with you.' },
    ],
    call: [
      { who: 'caller', text: 'Hi, I’d like to book a check-up.' },
      { who: 'assistant', text: 'Of course. Are you already a patient with us? I’ll look you up by your date of birth.' },
      { who: 'caller', text: 'Yes, 14 March 1986.' },
      { who: 'assistant', text: 'Found you. I have Tuesday at 10:30 or Thursday at 14:00. Which suits you better?' },
      { who: 'caller', text: 'Thursday.' },
      { who: 'assistant', text: 'Thursday at 14:00 with the dentist, is that right? Then I’ll book it and send you a confirmation.' },
    ],
    faq: [
      { q: 'Does it connect to my practice software?', a: 'If your calendar has an integration, it uses that. If not, we look at an alternative together, such as a separate calendar your team uses for phone bookings.' },
      { q: 'What if someone is in pain?', a: 'You decide what counts as an emergency. It then puts the caller straight through to the practice, or outside opening hours gives the emergency number you provide.' },
      { q: 'Can it register new patients?', a: 'Yes, if you want it to. It takes down name, date of birth and contact details and books a first appointment, or puts the request on a waiting list.' },
    ],
  },

  clinic: {
    name: 'Clinics & practices',
    meta: {
      title: 'AI phone assistant for clinics and practices — Voice AI',
      description:
        'For physios, skin clinics, vets and other practices: an AI assistant that answers the phone, books appointments and puts callers through when it’s needed.',
    },
    title: 'Your phone queue is your waiting room.',
    lead: 'Physio, skin clinic, vet or psychologist: the assistant answers every call, books appointments and leaves your team free to do what they’re trained for.',
    pains: [
      { title: 'The line is jammed', body: 'At 8:00 everyone calls at once. Whoever’s on hold hangs up, or calls back at the worst moment.' },
      { title: 'Front desk and treatment at once', body: 'In small practices the practitioner answers the phone. Every call interrupts a patient.' },
      { title: 'No-shows', body: 'If it isn’t easy to reschedule, people just don’t turn up. An empty hour you can’t fill any more.' },
    ],
    does: [
      { title: 'Books appointments', body: 'Intake, follow-up or a specific practitioner: it books what’s really free in your calendar.' },
      { title: 'Rescheduling without the wait', body: 'Patients reschedule themselves, day and night. Fewer no-shows, a fuller diary.' },
      { title: 'Practical questions', body: 'Insurance cover, whether a referral is needed, address and parking: answers from your own information.' },
      { title: 'Puts callers through', body: 'Unsure, urgent or something personal? It puts the caller through to your team or leaves a callback request.' },
    ],
    call: [
      { who: 'caller', text: 'I need to move my appointment tomorrow.' },
      { who: 'assistant', text: 'No problem. Could I have your name and date of birth?' },
      { who: 'caller', text: 'Sarah Miller, 2 June 1990.' },
      { who: 'assistant', text: 'I can see your appointment tomorrow at 9:00 with Mark. He also has Friday at 11:15. Shall I move it there?' },
      { who: 'caller', text: 'Yes, please.' },
      { who: 'assistant', text: 'Done: Friday at 11:15 with Mark. I’ll release tomorrow’s slot.' },
    ],
    faq: [
      { q: 'Does it work with several practitioners?', a: 'Yes. It knows your team and their calendars, and books with a particular practitioner if the patient asks for one.' },
      { q: 'Does it store medical information?', a: 'No, we set it up that way. It only asks what’s needed to book the appointment and gives no medical advice.' },
      { q: 'Can it take callback requests?', a: 'Yes. It notes who called and what about, and puts it in your inbox or system so your team can call back.' },
    ],
  },

  restaurant: {
    name: 'Restaurants',
    meta: {
      title: 'AI phone assistant for restaurants — Voice AI',
      description:
        'Take every order and booking, even in the evening rush. An AI assistant that knows your menu and puts orders straight into your till or order system.',
    },
    title: 'The phone rings in the rush. And nobody picks up.',
    lead: 'The kitchen is flat out, the floor staff are running. The assistant takes takeaway orders and bookings from your real menu and puts them straight into your system.',
    pains: [
      { title: 'Missed orders', body: 'Between 17:30 and 19:30 the phone rings most, exactly when nobody has time. Every missed call is a missed order.' },
      { title: 'Mistakes in the rush', body: 'An order half heard, an allergy forgotten. Afterwards that costs more than the order was worth.' },
      { title: 'Staff stuck on the phone', body: 'Someone from the floor is on the line instead of with your guests.' },
    ],
    does: [
      { title: 'Takes orders', body: 'Pickup or delivery, with sizes, extras and prices from your real menu. Straight into your till or order system.' },
      { title: 'Takes bookings', body: 'Checks whether there’s a table, notes the number of guests and confirms the time.' },
      { title: 'Notes allergies', body: 'It asks about them and marks them clearly on the order, so the kitchen sees them.' },
      { title: 'Stays in its lane', body: 'It only places new orders. Changing, cancelling or refunding stays with you.' },
    ],
    call: [
      { who: 'caller', text: 'I’d like to order for pickup, please.' },
      { who: 'assistant', text: 'Great! What would you like?' },
      { who: 'caller', text: 'Two margheritas and a tiramisu.' },
      { who: 'assistant', text: 'Two margheritas and a tiramisu, that’s €31.50 in total. Does anyone have an allergy?' },
      { who: 'caller', text: 'No, and I’ll come at six.' },
      { who: 'assistant', text: 'Ready at 18:00 under the name Johnson. Is that right? Then I’ll send it through to the kitchen.' },
    ],
    faq: [
      { q: 'Does it know our menu?', a: 'Yes, it reads your menu from your own system, with prices, sizes and what’s on each dish. Change the menu and it knows straight away.' },
      { q: 'What if we’re too busy to take orders?', a: 'You can set a maximum per time slot. When it’s full, it offers a later time.' },
      { q: 'Can it take payments?', a: 'It doesn’t take payment details over the phone. The customer pays on pickup, or by payment link if you like.' },
    ],
  },

  salon: {
    name: 'Hairdressers & salons',
    meta: {
      title: 'AI phone assistant for hairdressers and salons — Voice AI',
      description:
        'No more answering the phone with scissors in your hand. An AI assistant that books appointments with the right stylist, in the evening too.',
    },
    title: 'Scissors in one hand. Phone in the other?',
    lead: 'You’re in the middle of a cut when the phone rings. The assistant picks up, finds a time with the client and puts the appointment in your calendar.',
    pains: [
      { title: 'Interrupted appointments', body: 'Every time you pick up, your client is left waiting in the chair.' },
      { title: 'Voicemails nobody returns', body: 'At the end of the day there are five voicemails. Two clients have already booked somewhere else.' },
      { title: 'Booking after closing time', body: 'Lots of people call in the evening, when the salon is closed.' },
    ],
    does: [
      { title: 'Books with the right stylist', body: 'Cut, colour or a treatment: it knows how long it takes and who does it.' },
      { title: 'Moves and cancels', body: 'Clients sort it out themselves, outside opening hours too.' },
      { title: 'Prices and treatments', body: 'What balayage costs, how long a perm takes: answers from your own price list.' },
      { title: 'Confirmation', body: 'After the call the client gets a confirmation, so fewer people forget their appointment.' },
    ],
    call: [
      { who: 'caller', text: 'Can I get a haircut on Saturday?' },
      { who: 'assistant', text: 'On Saturday Lisa has a slot at 11:00, and Omar at 14:30. Do you have a preference?' },
      { who: 'caller', text: 'Lisa, at eleven.' },
      { who: 'assistant', text: 'A cut with Lisa, Saturday at 11:00. What name shall I put it under?' },
      { who: 'caller', text: 'Fatima.' },
      { who: 'assistant', text: 'You’re booked in, Fatima. You’ll get a confirmation shortly.' },
    ],
    faq: [
      { q: 'Does it work with my booking system?', a: 'If your booking system has an integration, it books straight into it. If not, we find a solution together.' },
      { q: 'Does it know how long a treatment takes?', a: 'Yes. You set the length of each treatment, and it only books times where it really fits.' },
      { q: 'Can I still answer myself?', a: 'Of course. You choose when it picks up: always, only outside opening hours, or only if you haven’t answered within a few rings.' },
    ],
  },

  garage: {
    name: 'Garages',
    meta: {
      title: 'AI phone assistant for garages — Voice AI',
      description:
        'Under a car and still reachable. An AI assistant that books MOTs and services, and tells customers whether their car is ready.',
    },
    title: 'You can’t answer the phone from under a car.',
    lead: 'Your mechanics are in the workshop. The assistant books MOTs and services, and tells customers whether their car is ready yet.',
    pains: [
      { title: 'Dirty hands, ringing phone', body: 'Answering means washing your hands and dropping what you’re doing. Or not answering.' },
      { title: '“Is my car ready yet?”', body: 'The question that comes back all day. Every time: look it up, check, call back.' },
      { title: 'Workshop planning', body: 'Bookings by phone, on a scrap of paper and in the diary soon drift apart.' },
    ],
    does: [
      { title: 'Books MOTs and services', body: 'Registration, type of service, preferred day: it books what fits in your workshop.' },
      { title: 'Gives status updates', body: 'It checks your system to see if the car is ready and tells the customer.' },
      { title: 'Notes faults', body: 'It writes down problems with the car in the customer’s own words, so your mechanic knows what to look for.' },
      { title: 'Puts callers through', body: 'Questions about a quote or a repair? It puts the caller through or leaves a callback request.' },
    ],
    call: [
      { who: 'caller', text: 'My MOT runs out next month, can I book one in?' },
      { who: 'assistant', text: 'Of course. What’s your registration?' },
      { who: 'caller', text: 'AB12 CDE.' },
      { who: 'assistant', text: 'A Volkswagen Golf, is that right? I have Wednesday the 8th at 8:30 or Monday the 13th at 13:00.' },
      { who: 'caller', text: 'Wednesday.' },
      { who: 'assistant', text: 'MOT on Wednesday the 8th at 8:30. You can drop the car off from 8:00. See you then!' },
    ],
    faq: [
      { q: 'Does it connect to my garage system?', a: 'If your system has an integration, it books straight into it and reads a car’s status from it. Otherwise we find a solution together.' },
      { q: 'Can it give prices?', a: 'Fixed prices, like an MOT or a minor service, it gives from your own price list. For repairs it leaves a callback request.' },
      { q: 'What if someone has broken down?', a: 'You decide what happens then: put them straight through, or give the number of your breakdown service.' },
    ],
  },

  'law-firm': {
    name: 'Law firms',
    meta: {
      title: 'AI phone assistant for law firms — Voice AI',
      description:
        'A professional first contact for every caller. An AI assistant that takes on new matters, books appointments and puts callers through to the right lawyer.',
    },
    title: 'Every missed caller is a case for another firm.',
    lead: 'People with a legal problem call the first firm that picks up. The assistant answers, notes the essentials and books an intake meeting.',
    pains: [
      { title: 'Lawyers in court or in meetings', body: 'The front office is busy, the lawyers can’t be reached. The new client keeps calling around.' },
      { title: 'Intakes that eat time', body: 'Working out whether a case suits your firm costs a lawyer time they can’t bill.' },
      { title: 'After office hours', body: 'A dismissal, a summons: people call when it happens to them, not when you’re open.' },
    ],
    does: [
      { title: 'Takes on new matters', body: 'It asks about the area of law and the heart of the matter, and puts it neatly into your system.' },
      { title: 'Books intakes', body: 'With the lawyer who handles that area of law, in the calendar you already use.' },
      { title: 'Puts existing clients through', body: 'It recognises ongoing matters and puts the caller through, or leaves a message for the right lawyer.' },
      { title: 'Confidential', body: 'It gives no legal advice and only asks what’s needed for the intake.' },
    ],
    call: [
      { who: 'caller', text: 'I was dismissed today and I want to know what I can do.' },
      { who: 'assistant', text: 'I’m sorry to hear that. I’d like to set up a meeting with one of our employment lawyers. Could I have your name?' },
      { who: 'caller', text: 'Peter Baker.' },
      { who: 'assistant', text: 'Ms Jones has time for a first meeting tomorrow at 10:00. Does that work for you?' },
      { who: 'caller', text: 'Yes.' },
      { who: 'assistant', text: 'You’re booked in. You’ll get an email confirmation with what to bring.' },
    ],
    faq: [
      { q: 'Does it give legal advice?', a: 'No. It takes down the gist of the question and books a meeting. The advice comes from your lawyers.' },
      { q: 'What about confidentiality?', a: 'We sign a data processing agreement, and together we set out what is stored, where and for how long.' },
      { q: 'Can it run a conflict check?', a: 'It notes the names of the other party, so your firm can run the check before the intake meeting takes place.' },
    ],
  },

  rental: {
    name: 'Rental companies',
    meta: {
      title: 'AI phone assistant for rental companies — Voice AI',
      description:
        'Availability, prices and bookings over the phone, day and night. For renting out cars, vans, tools, bikes and more.',
    },
    title: '“Is it still free this weekend?” A hundred times a week.',
    lead: 'Vans, tools, bikes or party tents: the assistant checks your system for what’s free, gives the price and records the booking.',
    pains: [
      { title: 'The same question, over and over', body: 'Availability and price. Looking it up every time, explaining it every time.' },
      { title: 'Counter and phone', body: 'While you’re helping someone collect, the next customer calls.' },
      { title: 'Weekend peaks', body: 'On Friday everyone calls at once for the weekend.' },
    ],
    does: [
      { title: 'Checks availability', body: 'It looks in your system to see what’s free on the days asked for.' },
      { title: 'Gives prices', body: 'Per day, per weekend, with deposit: from your own rates.' },
      { title: 'Takes bookings', body: 'Records the booking with name, dates and pickup time.' },
      { title: 'Explains the terms', body: 'Driving licence, deposit, mileage: answers from your own terms.' },
    ],
    call: [
      { who: 'caller', text: 'Do you still have a van free this weekend?' },
      { who: 'assistant', text: 'From Friday to Sunday I still have a 12 cubic metre van. That’s €195 for the weekend, including 300 kilometres.' },
      { who: 'caller', text: 'I’ll take it. Pickup Friday at four.' },
      { who: 'assistant', text: 'Could I have your name and phone number?' },
      { who: 'caller', text: 'Kevin Smith, 07700 900123.' },
      { who: 'assistant', text: 'You’re booked: the 12 cubic metre van, Friday 16:00 to Sunday. Bring your driving licence; the deposit is €250.' },
    ],
    faq: [
      { q: 'Does it connect to my rental system?', a: 'If your system has an integration, it checks and books straight in it. Otherwise we find a solution together.' },
      { q: 'Can it take a deposit?', a: 'It doesn’t take payment details over the phone. You can have a payment link sent after the booking, though.' },
      { q: 'What if something isn’t available?', a: 'Then it offers an alternative: another day, or something similar that is free.' },
    ],
  },
}
