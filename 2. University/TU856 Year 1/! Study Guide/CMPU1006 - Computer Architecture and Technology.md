Okay, I need to create a study guide for these exam questions. Let me start by breaking down each part of the question and figuring out what the key concepts are. 

First, looking at Question 1, which is compulsory. Part (a) is about the stored program concept in von Neumann architecture. I remember that von Neumann's idea was about storing both data and instructions in the same memory. But I need to elaborate on the background and main principles. Maybe I should mention who von Neumann was and how his architecture differs from earlier models like Harvard. Also, the main principles would include things like the fetch-decode-execute cycle, memory addressability, and the structure of the CPU.

Part (b) asks for four memory types associated with the CPU or motherboard and memory addressing. The memory types could be registers, cache, RAM, and ROM. But wait, are there others like flash memory or maybe virtual memory? I need to check. Then, memory addressing—each memory location has a unique address, the CPU uses address bus to specify location, and how addressing modes work (like direct, indirect). Maybe also the role of the memory controller.

Part (c) is about binary numbers and their structure in computers. So binary represents all data as 0s and 1s. Structure-wise, bits, bytes, words. Also, how different data types are encoded: integers (two's complement), floats (IEEE 754), characters (ASCII, Unicode). Maybe mention binary in logic gates and circuits.

Part (d) asks which bus connects major components in a PC, probably the system bus or front-side bus. Characteristics might include that it's divided into data, address, and control buses. Speed, width (32-bit, 64-bit), and role in communication between CPU, memory, and I/O devices.

Moving to Question 2. Part (a) is about historic contributions. Schickard invented an early mechanical calculator. Leibniz improved with the stepped reckoner and binary system. Babbage designed the Analytical Engine, which was programmable. Need to elaborate on each person's contributions and their impact.

Part (b) on ICs and microprocessors. Start with the invention of ICs by Jack Kilby and Robert Noyce, then move to how they evolved into microprocessors with Intel 4004. Moore's Law, integration levels (SSI, MSI, LSI, VLSI), and how microprocessors led to personal computers.

Part (c) main principle of electrical circuit. Closed loop allowing electron flow, components like resistors, capacitors. Relate to digital functionality through binary states (voltage levels), logic gates (AND, OR, NOT) forming circuits for processing.

Question 3. Part (a) comparing serial and parallel buses. Serial sends one bit at a time (USB, SATA), parallel multiple bits (IDE, PCI). Advantage of serial: less interference, higher speed over long distances. Maybe mention clock skew issues in parallel.

Part (b) packet vs circuit switching. Circuit establishes dedicated path (old phone systems), packet sends data in chunks with headers. Routers use routing tables to forward packets to destinations, possibly through different paths.

Part (c) client-server network. Clients request services, servers provide them (web server and browser example). Technologies include HTTP, DNS, databases. Example: a company's internal network with file servers and employee computers as clients.

Question 4. Part (a) OS functions: process management, memory management, file management, device management. Kernel is the core handling these, interacts directly with hardware.

Part (b) Open vs closed source. Open allows code modification (Linux), closed is proprietary (Windows). Application software examples: OpenOffice vs Microsoft Office.

Part (c) Database characteristics: structured data, DBMS provides CRUD operations, ACID properties, security, concurrency control. DBMS features like query languages (SQL), data modeling.

Now, for each of these, I need to outline study steps: understand core concepts, memorize key points, practice explaining them, use examples. Maybe create flashcards for terms, diagrams for architectures, timelines for historical developments. For answering, follow structured formats: definitions, explanations, examples, comparisons as required. Time management during the exam is important too, especially since Question 1 is compulsory and then two others. Allocate time based on marks: 40 marks for Q1 (maybe 40 minutes), 30 each for others (30 minutes each), totaling 100 minutes, leaving 20 for review.

Need to ensure clarity and completeness in answers. For example, in von Neumann architecture, mention the five components: ALU, control unit, memory, input/output. Stored program concept's impact on flexibility and programmability. For memory addressing, talk about physical vs virtual addresses, address space.

Potential pitfalls: mixing up different memory types, confusing serial vs parallel advantages, not providing enough detail on historical figures. To avoid, focus on distinct features and practice concise explanations.

Use textbooks, lecture notes, online resources like IEEE papers for historical info. Practice past papers if available. Group study to discuss and reinforce concepts.

### Study Guide for CMPU1006 Computer Architecture and Technology Exam

#### Question 1 (Compulsory)  
**1(a) Stored Program Concept (von Neumann Architecture)**  
**Core Concepts:**  
- **Background**: Developed by John von Neumann in 1945, this architecture unified data and instructions in the same memory, replacing earlier designs like Harvard architecture (separate memory for data/instructions).  
- **Main Principles**:  
  1. **Single Memory Store**: Both data and instructions are stored in the same memory.  
  2. **Sequential Execution**: Follows the **fetch-decode-execute cycle**.  
  3. **Components**: CPU (ALU, Control Unit), Memory, I/O Systems.  
  4. **Addressability**: Each memory location has a unique address.  

**How to Answer**:  
- Start with von Neumann’s role in computing history.  
- Contrast with Harvard architecture.  
- Explain the principles and their impact (e.g., program flexibility).  

---

**1(b) Memory Types & Memory Addressing**  
**Core Concepts**:  
- **Memory Types**:  
  1. **Registers** (fastest, inside CPU).  
  2. **Cache** (L1/L2/L3, speeds up CPU access).  
  3. **RAM** (volatile, temporary storage).  
  4. **ROM** (non-volatile, firmware storage).  
- **Memory Addressing**:  
  - Assigns unique addresses to memory locations.  
  - CPU uses **address bus** to specify locations.  
  - Addressing modes: Direct, indirect, indexed.  

**How to Answer**:  
- List memory types with brief descriptions.  
- Define addressing (physical vs. virtual) and its role in data retrieval.  

---

**1(c) Binary Numbers & Structure**  
**Core Concepts**:  
- **Binary Basics**: Represents data as 0s/1s (bits).  
- **Structure**:  
  - **Bits → Bytes → Words** (e.g., 32-bit word).  
  - **Data Encoding**:  
    - Integers: Two’s complement.  
    - Text: ASCII/Unicode.  
    - Instructions: Opcode + operands.  

**How to Answer**:  
- Explain binary as the foundation of digital systems.  
- Describe hierarchical structure and encoding examples.  

---

**1(d) System Bus Characteristics**  
**Core Concepts**:  
- **System Bus** (Front-Side Bus in older systems): Connects CPU, memory, and I/O.  
- **Characteristics**:  
  1. **Data Bus**: Bidirectional, carries data (width affects speed).  
  2. **Address Bus**: Unidirectional, specifies memory locations.  
  3. **Control Bus**: Manages operations (e.g., read/write signals).  

**How to Answer**:  
- Name the system bus and describe its three components.  
- Discuss bus width/speed impact on performance.  

---

#### Question 2  
**2(a) Historic Contributions**  
**Core Concepts**:  
- **Schickard**: Invented the first mechanical calculator (1623).  
- **Leibniz**: Improved calculators (stepped reckoner), binary system.  
- **Babbage**: Designed the Analytical Engine (programmable via punch cards).  

**How to Answer**:  
- Link each inventor to their innovation and its computing significance.  

---

**2(b) Integrated Circuits & Microprocessors**  
**Core Concepts**:  
- **ICs**: Miniaturized circuits (Jack Kilby/Robert Noyce, 1958).  
- **Evolution**: SSI → MSI → LSI → VLSI → microprocessors (Intel 4004, 1971).  
- **Impact**: Enabled personal computers (Moore’s Law).  

**How to Answer**:  
- Timeline from ICs to microprocessors, emphasizing miniaturization.  

---

**2(c) Electrical Circuits & Digital Functionality**  
**Core Concepts**:  
- **Circuit Principle**: Closed loop with voltage source, conductors, load.  
- **Digital Functionality**: Binary states (high/low voltage = 1/0).  
- **Logic Gates**: AND, OR, NOT form combinational/sequential circuits.  

**How to Answer**:  
- Relate circuit basics to binary logic and gate operations.  

---

#### Question 3  
**3(a) Serial vs. Parallel Buses**  
**Core Concepts**:  
- **Serial** (USB, SATA): Single data lane, less interference, long-distance efficiency.  
- **Parallel** (IDE, PCI): Multiple lanes, prone to skew, shorter range.  
- **Key Advantage**: Serial’s scalability (e.g., USB 3.0 speed).  

**How to Answer**:  
- Compare speed, interference, and use cases.  

---

**3(b) Packet vs. Circuit Switching**  
**Core Concepts**:  
- **Circuit Switching**: Dedicated path (e.g., landline calls).  
- **Packet Switching**: Data split into packets (e.g., internet).  
- **Router Role**: Uses routing tables to forward packets dynamically.  

**How to Answer**:  
- Contrast reliability vs. efficiency.  
- Explain router functionality with headers/destinations.  

---

**3(c) Client-Server Networks**  
**Core Concepts**:  
- **Arrangement**: Clients request services (browsers), servers provide (web servers).  
- **Technologies**: HTTP, DNS, load balancers.  
- **Example**: Email system (client: Outlook, server: Exchange).  

**How to Answer**:  
- Describe architecture and provide a real-world example.  

---

#### Question 4  
**4(a) OS Functions & Kernel**  
**Core Concepts**:  
- **OS Functions**: Process scheduling, memory allocation, file systems, security.  
- **Kernel**: Core component managing hardware interaction and system calls.  

**How to Answer**:  
- List functions and define kernel’s role in resource management.  

---

**4(b) Open vs. Closed Source Software**  
**Core Concepts**:  
- **Open Source**: Public code (Linux, Apache).  
- **Closed Source**: Proprietary (Windows, Adobe).  
- **Application Software**: Tools for end-users (e.g., LibreOffice vs. Microsoft Office).  

**How to Answer**:  
- Compare licensing, customization, and examples.  

---

**4(c) Databases & DBMS**  
**Core Concepts**:  
- **Database**: Structured data storage (tables, relationships).  
- **DBMS Features**: ACID compliance, querying (SQL), concurrency control.  

**How to Answer**:  
- Define databases and list DBMS functionalities (security, backup).  

---

### Study Tips:  
1. **Flashcards**: For terms like “von Neumann architecture” or “packet switching.”  
2. **Diagrams**: Draw memory hierarchies, bus structures, and client-server models.  
3. **Timelines**: Historic developments (Schickard → Babbage → ICs).  
4. **Practice Essays**: Time yourself answering questions in 10–15 minutes.  
5. **Peer Review**: Discuss answers with classmates to fill knowledge gaps.  

**Exam Strategy**:  
- Allocate **40 minutes** to Question 1, **30 minutes each** to others.  
- Start with compulsory Q1, then prioritize strongest topics.  
- Use bullet points and examples to maximize clarity and marks.  

Good luck! 🚀