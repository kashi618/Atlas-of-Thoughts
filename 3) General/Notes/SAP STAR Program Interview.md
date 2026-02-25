# Presentation
## Things to look up
- SAP S/4HANA
- Alex

## Proposition (My argument)
- One source of truth
- Proactive (learns)
- Language/translation

## Funnies
- I read in the emails, that "Alex" was used to schedule this interview. Just as Alex streamlined my interview, SAP's AI 1st approach can streamline a patient's journey from GP to a doctor or specialized consultant

### Issues (Problems which can be solved)
**Fragmented**
- Patient data "silo-ed" across many hospitals and GP's
  - Need to explain situation to every hospital and GP

## Opposition (What I will be asked)
- AI risks
- Data privacy risks
- Why SAP?
- Server crash/downtime?
  - WannaCry 2.0? (2017)

# Script
## Slide 1 - Introduction & Reason for Hospitality
{**Introduction**}
Hi I'm Neil Jiang, and I am a student at TUD studying computer science.

{**Reason for presentation**}
I'm presenting on how SAP's suite-first and AI-first approach can be used to improve the Irish public healthcare system over the next 5 years.

{**Reason for choice**}
I chose this topic because I have first-hand experience navigating its complexities. I accompany my mother to her appointments, and act as a translator due to her poor English.

{**Personal story**}
Over the time, I have been encountered many points of friction within the system, which I believe that SAP will be able to help solve.

## Slide 2 - Outline Issues met
{**Data silos**}
The first issue is patient data silo's. 
Patient medical histories are fragmented, in my experience, every GP and Hospital has their own system for storing a patients information. Records don't travel with them requiring them to repeat their condition multiple times during their journey. 
Although referral letters may contain some information, it is often not the full picture.

{**Language barrier**}
The second issue is language barriers.
According to the 2022 census in Ireland, over 2% of the population speaks poor English, unable to effectively communicate with doctors. Seemingly small, it translates to over around ~100k people in Ireland.

{**Strict scheduling hours**}
The last issue I have encountered, is that GP's and clinics often have very restrictive opening hours. Many open 6 hours a day, during weekdays only. This means that if you have an emergency out of hours, or during the weekend, you are often left waiting until the next Monday morning just to book an appointment.

{**Outro**}
Well, how do we fix this. I would like to being with the "suite first" approach

## Slide 3 - "Suite 1st" Solution
{**Unified data**}
A suite 1st approach means moving away from disconnected hospital databases, and creating effectively a unified source for a patients medical history. By using SAP's S/4HANA Cloud, we can create a system where GP's, hospitals, and clinics are able to work together instead of apart, creating a "single source of truth".

{**Interoperability**}
This means interoperability, where when a GP enters data, it is instantly accessible through the HANA database by the Hospital, and vice verse.

{**Patient Data Travel**}
In short, a patient's data travels with them.

## Slide 4 - "AI 1st" Solution
Once the data is unified, we can implement SAP's Joule as our backbone.

{**AI Scheduling**}
Just like how Alex scheduled this interview today, Joule can be used to manage patient bookings. This means that patients can book appointments online 24/7 seamlessly, eliminating the need to wait until the next available day.

{**AI Translations**}
For language, SAP's generative AI can offer real-time, medical-grade translations for patients like my mother. 
This allows doctors to focus on treating patients, instead of communication. 
This is helpful for patients who cannot afford, or wait for an available interpreter.
Even for Mandarin Chinese, the language my mother and I speak, it is very hard to find skilled and qualified interpreter in a timely manner.

## Slide 5 - Year 1-3 Migrating from Legacy to SAP
{**Year 1**}
Year 1 will focus on building the foundations. This includes designing and implementing the system architecture, whilst also agreeing on data standards between the GP's, hospitals, and clinics.

{**Year 2**}
Year 2 will focus on migrating the data from the hospitals and GP's into the HANA Cloud network. We want to ensure that patient records are clean, structured, and reliable.

{**Year 3**}
Year 3 will focus on integration via SAP's Business Technology Platform. GP's and hospitals are securely connected through API's allowing for easy management of patient data between them.

## Slide 6 - Year 4-5 "AI first"
{**Year 4**}
Once the system is stable and trusted, we can begin to introduce Joule for our automated scheduling. Joule will allow patients to book appointments 24/7, but also help small clinics to manage during busier times of the year.

{**Year 5**}
In the final stage, year 5, we can leverage SAP's generative AI to fight the language barrier. By implementing fast, reliable, medical-grade translations, we give non-English speakers a way for them to describe their symptoms in their native language, and for doctors to communicate their treatment to them.

## Slide 7 - Issues Which May Occur During Deployment
During the switch over to this new system, a few issues will come up.

{**Data breeches and security**}
The first is data breaches and security. Due to the online nature of our database, it can be susceptible to attacks and breaches.

An example of this is the WANNACRY pandemic in 2017. This was a ransomware that locked computers behind a paywall, causes hundreds of thousands of computers to break, including life saving medical equipment.

However with S/4HANA Cloud, instead of relying on local IT staff within GP's and hospitals, it uses SAP's top of the line enterprise-grade security. Patient data will be encrypted during transit and storage, and decrypted during access.

\*S/4HANA features a method called automated patching, where the system watches itself to identity threats and deploy safety patches and hotfixes.

{**Job Security for administrative/secretary work**}
The second is job security. My GF actually works as an admin at a hospital, so when I was preparing for this presentation, she was worried about her job being replaced.

However I believe that this is not the case. Instead, Joule will speed up mundane and repetitive tasks such scheduling, freeing up human admins such as herself, to focus on high-value tasks that AI cannot do. Such as providing help for non tech-savvy elderly patients, complex emergency cases, and for proving a sense of empathy that AI just cannot replicate.

{**GDPR Patient Privacy Act**}
Now, GDPR states you should only collect data for a specific, stated purpose.
Therefore we can implement a purpose-based access system, where it automatically hides patient information depending on who's accessing it. An admin needs only access to your contact information, whilst a doctor will need access to your entire medical history.
Also, due to the nature of the cloud database, we can also offer the option for patients to request and delete their data anytime they want.

{**Outro**}
In conclusion, SAP's Suite 1st and AI 1st approach isn't just about upgrading software. Instead, it is about moving away from fragmented systems. 
We ensuring are ensuring that people in need of medical care such as my mother, will not be stopped either by scheduling or language barriers, because the system already understands, supports, and prioritizes their care.

Thank you for listening, and I hope you found it interesting



# Interview
Hi, I'm Neil Jiang.
- 18
- Computer Science (TU856)

Hobbies:
- Learning about Linux infrastructure
- Tinkering with my Linux operating system

C Memory Management - Garbage Collector
- Low level language
- Playing with fire
	- one wrong line of code = death ish
	  
## The "Difficult Customer" (Top Bun Experience)
I don't deal with many customers, as the front office people take them. 
- Often felt pressures when making burgers
- One time mistake forgot the patty
- From that day, learned to take a step back when pressured
- Calm yourself and clear your mind
- The more pressure there is, the more you need to control yourself

## Someone not pulling weight in group project
- There have been times
- Often caused by them not understanding the project, laziness, dont feel welcomed
- To mitigatev, put yourself in their shoes
- Try to split work up evenly and clearly

## Why TUD?
- Hands on modules
- Work placement in 3rd year

## Why Computer Science?
- I love working with computers
- Watched alot of computer building videos
- Built many computers
- Khan academy coding course
- Configuring and fixing
- Learning
- Vast industry

## Questions for Alan
- What work does STAR intern typically learn and do
- How is the work/study balance
- What kind of projects typically worked
- If i was successful, are there any advice you would give.
  Considering
- You have hired many STAR interns. Are there any that caught your eye? Whether its their technical skills, projects, or personality traitas
- Im a big advocate for the transparancy and philosophy behind Linux' design. I love open source software, so i was wondering how much exposure interns get with linux based systems, and cloud infrastyructure
- Concering the mentorship

**S/4HANA features a method called automated patching, where the system watches itself to identity threats and deploy safety patches and hotfixes.**

work in AI

**Git usage in website and arch**
**Teamwork**
**Working under pressure** The more pressure, the more you need to slow down