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
I chose this topic because I have first-hand experience navigating its complexities, as I often accompany my mother to appointments, acting as a translator due to her poor English.

{**Personal story**}
Over the time,m y mother and I have been encountered many points of friction within the system, which I believe that SAP will be able to help solve.

## Slide 2 - Outline Issues met
{**Data silos**}
The first issue is patient data silo's. 
Patient medical histories are fragmented. In my experience, every GP and Hospital has their own database for storing a patients information. Records don't travel with them requiring them to repeat their condition multiple times during their journey. Although referral letters may contain some information, it is often not the full picture.

{**Language barrier**}
The second issue is language barriers.
According to the 2022 census in Ireland, over 2% of the population speaks poor English, unable to effectively communicate with doctors. Seemingly small, it translates to over around ~100k people in Ireland.

{**Strict scheduling hours**}
The last issue I have encountered, is that GP's often have very restrictive opening hours. Many open 6 hours a day, during weekdays only. This means that if you have an emergency out of hours, or during the weekend, you are often left waiting until the next Monday morning just to book an appointment.

{**Outro**}
Well, how do we fix this. I would like to first start with the "suite first" approach

## Slide 3 - "Suite 1st" Solution
{**Unified data**}
A suite 1st approach means moving away from hundreds of disconnected hospital databases, and instead, create a unified source for a patients medical history. By using SAP's S/4HANA Cloud database we can create a system where GP's, hospitals, and clinics are able to work together instead of apart, creating a "single source of truth".

{**Interoperability**}
This means interoperability, where when a GP enters data, it is instantly accessible through the HANA database by the Hospital, and vice verse.

{**Patient Data Travel**}
In short, a patient's data travels with them.

## Slide 4 - "AI 1st" Solution
Once the data is unified, we can implement SAP's Joule as our backbone.

{**AI Scheduling**}
- Just like how Alex scheduled this interview today, Joule can be used to manage patient bookings. This means that patients can book appointments online 24/7 seamlessly, eliminating the need to wait until the next day.

{**AI Translations**}
- For language, SAP's generative AI can offer real-time, medical-grade translations for patients like my mother. 
- This allows doctors to focus on treating patients, instead of communication. 
- This is helpful for patients who either cannot afford, or wait for an available interpreter, especially if they speak a rare language.
- Even for Mandarin Chinese, the language my mother and I speak, it is very hard to find skilled and qualified interpreter in a timely manner.

## Slide 5 - Year 1-3 Migrating from Legacy to SAP
{**Year 1**}
Year 1 will focus on building the foundations. This will include designing and implementing the system architecture, whilst also agreeing on data standards between GP's, hospitals, and clinics.

{**Year 2**}
Year 2 will focus on migrating the data from the hospitals and GP's into the HANA Cloud network. We want to ensure that patient records are clean, structured, and reliable.

{**Year 3**}
Year 3 will then focus on integration via SAP's Business Technology Platform. GP's and hospitals are securely connected through API's allowing for easy management of patient data between them.

## Slide 6 - Year 4-5 "AI first"
{**Year 4**}
Once the system is stable and trusted, we can begin to introduce Joule for our automated scheduling. Joule will allow patients to book appointments 24/7, but also help small clinics to manage during busier times of the year.

{**Year 5**}
In the final stage, year 5, we can leverage SAP's generative AI to fight language barrier. We implement real time medical-grade translation, to allow non-English speakers a way for them to describe their symptoms clearly, and for doctors to communicate their treatment.

## Slide 7 - Issues Which May Occur During Deployment
{**Data breeches and security**}
Centralized databases such as the S/4HANA are often high-value targets. Thus, it can be susceptible to attacks by bad actors. 
An example of this is the WANACRY pandemic in 2017. This was a ransomware that essentially locked computers behind a paywall, causes hundreds of thousands of computers to break, including life saving medical equipment.
However by moving to S/4HANA Cloud, we are introducing SAP's top of the line enterprise-grade security, instead of relying on local IT staff within GP's and hospitals.
S/4HANA features a method called automated patching, where the system watches itself to identity threats and deploy safety patches and hotfixes.

{**Job Security for administrative/secretary work**}
My GF works as an admin at a hospital. When I was preparing for this presentation, she was worried about her job being replaced by this AI.

I believe that this is not the case. Joule will speed up mundane and repetitive tasks such scheduling, freeing up human admins to focus on high-value tasks that AI cannot do. Such as proving help for non tech-savvy elderly patients, complex emergency cases, and proving a sense of empathy which an AI cannot replicate.

{**GDPR Patient Privacy Act **}


{**Outro**}
In conclusion, SAP's Suite 1st and AI 1st approach isn't just about upgrading software. Instead, it is about moving away from fragmented systems. 
We ensuring are ensuring that people in need of medical care such as my mother, will not be stopped either scheduling or language barriers, because the system already understands, supports, and prioritizes their care.

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
	  
