Okay, I need to create a study guide for these exam questions. Let me go through each question and figure out what they're asking, then outline the core concepts and how to answer them. 

Starting with Question 1. Part (a) is about C-language calculations and converting results to hexadecimal. For (i), it's a bitwise AND between 0xef00 and 1 shifted left by 15. I remember that shifting 1 << 15 in 16 bits would be 0x8000. ANDing with 0xef00 (which is 1110 1111 0000 0000 in binary) would result in 0x8000. For (ii), ORing 0x28A8 and 0xD645. Converting both to binary and ORing each bit. Let me check: 0x28A8 is 0010 1000 1010 1000, and 0xD645 is 1101 0110 0100 0101. ORing gives 1111 1110 1110 1101, which is 0xFEED. 

Part (b) is about signed 8-bit overflow. -125 -5 is -130, which is outside 8-bit signed range (-128 to 127). So it wraps around. Let's compute: -125 is 10000011 in two's complement. Subtracting 5 gives 10000011 - 00000101. But subtracting in two's complement: add -5 (11111011). 10000011 + 11111011 = (1)01111110. The carry out is ignored, so result is 01111110, which is 126. Wait, that can't be right. Wait, maybe another way: -125 -5 = -130. In 8-bit, this is 256 -130 = 126. But since it's signed, 126 is positive. Wait, but 126 is 0x7E. Hmm, but the result is -130, which in 8-bit two's complement would be 126? Wait, no: two's complement for 8-bit: the range is -128 to 127. So -130 can't be represented. The calculation would be -125 is 0x83 (since 125 is 0x7D, so two's complement is 0x83). Subtract 5: 0x83 -5 = 0x7E (0x83 is -125, subtract 5 is -130, which in 8-bit is 0x7E (since 0x7E is 126, but in two's complement, that's +126, but we expect -130. Wait, this is an overflow. Because subtracting 5 from -125 (-130) is below the minimum of -128. So in two's complement, 8-bit, the result wraps around. So how does that work? Let's compute: -125 in binary is 10000011. Subtract 5 (00000101). So in two's complement subtraction is adding the negative. So 10000011 + (11111011) (which is -5 in two's complement). Adding them:

  10000011
+ 11111011
= (1)01111110 

The carry out is 1, but in 8 bits, it's 01111110, which is 126. But since we had an underflow (subtracting from a negative number leading to a positive), the result is incorrect due to overflow. So X becomes 126? Wait, but the question says X is a signed 8-bit number. So the answer is 126, which is 0x7E. 

Part (c) is about finding the minimum bits to store 0 to 8191. 8191 is 2^13 is 8192, so 8191 is 13 bits. So 13 bits. Because 2^13 = 8192, so 0 to 8191 requires 13 bits.

Part (d) roles of address bus, data bus, instruction pipeline. Address bus carries memory addresses from CPU to memory. Data bus carries data between CPU and memory. Instruction pipeline allows overlapping fetch, decode, execute stages to improve throughput.

Part (e) ASCII and serial comms. (i) 'A' is 65 in decimal. Binary is 01000001. Even parity: number of 1s is 2 (even), so parity bit is 0. (ii) Synchronous uses a clock signal, async uses start/stop bits. (iii) "HELLO WORLD" has 11 characters. Each character is 11 bits. Total bits: 11 * 11 = 121. At 9600 bps, time is 121 / 9600 seconds. Convert to microseconds: 121/9600 * 1e6 ≈ 12604.166... ≈ 12604 μs.

(f) Endianness: Big endian stores 0x12345678 as 12 34 56 78 in increasing addresses. Little endian stores as 78 56 34 12.

Question 2 involves STM32L031 I/O configuration. (a)(i) The pinMode function configures a GPIO pin as input or output. (ii) Given BitNumber=4, Mode=1. Line A shifts Mode left by 2*4=8 bits, so Mode becomes 0x100. Line B masks Port->MODER to clear bits 8-9. Then line C ORs the Mode value. So after line A: Mode is 0x100 (binary 0001 0000 0000). Line B: original MODER value (assuming initial value?) If Port->MODER is at 0x50000000, perhaps initial value is unknown, but assuming it's existing value. After line B, bits 8-9 are cleared. Then line C sets them to 1 in the MODE. So the final MODER would have bits 8-9 as 01 (since Mode is 1 shifted to 8-9). Wait, but MODER is a 32-bit register where each 2-bit field sets the mode for a pin. For pin 4, bits 8-9. Mode=1 (binary 01), so after line A, Mode is 01 shifted to bits 8-9. So after line C, Port->MODER would have those bits set to 01. 

Part (iii) Pull-up resistors: when a button is open, the input is pulled high; when pressed, it connects to ground, pulling the input low. The resistor prevents a short circuit.

Question 2(b) is about configuring LEDs and button. (i) Configure Red and Blue LEDs as outputs (Mode 1), button as input with pull-up. Use pinMode for each LED pin as output, enablePullUp for the button pin. (ii) Turn on Red LED: set the corresponding bit in ODR. (iii) Turn off Blue LED: clear the bit. (iv) Read the button pin; if pressed (input low), return 1.

Question 3: Stack operations. (a) Initial SP is 0x20000ffc. PUSH R1 (0x00000007) decrements SP by 4, stores at 0x20000ff8. Then PUSH R0 (0x6) to 0x20000ff4. Then POP R2: take from 0x20000ff4 (0x6) into R2, SP increments to 0x20000ff8. 

Part (b) The code sets R1 to 0, loads R0 with 0x40000000, then stores R1 to [R0 + 0x10], which is 0x40000010. This writes 0 to that address, perhaps controlling a peripheral register.

Question 3(c) is about a memcpy function. Lines A, B, C: Line A is a compare and branch if R2 (n) is zero. Line B loads a byte from src and stores to dest. Line C returns via LR. Calling the function would load R0 with 0x2000, R1 with 0x1000, R2 with 0x20, then BL my_memcpy. The AAPCS defines register usage and stack conventions for function calls.

Question 4(a) Arithmetic flags. (i) EORS R0,R0: sets Z (result is zero), N (if result's MSB is 0, no?), C and V cleared. Wait, EOR is XOR. If R0 is XORed with itself, result is 0. So Z=1, N=0, C and V unaffected? Or does SUBS affect flags? Wait, EORS affects flags. So yes, Z=1, N=0, C and V cleared? (ii) 0xfffffffe +2. That's 0xFFFFFFFF +1. Adding 2: 0xfffffffe + 2 = 0x100000000. Since 32-bit, it wraps to 0x0. So C flag is set (carry out), Z=1. (iii) MOVS R0,#4; SUBS R0,#8. 4-8= -4. In two's complement, 0xFFFFFFFC. N flag set, Z=0, C flag (borrow) set. (iv) 0x80000000 -2. SUBS: 0x80000000 -2 = 0x7FFFFFFE. V flag set because signed overflow (subtracting from a negative number resulting in positive). N=0, Z=0, C=1 (no borrow? Or C is inverted? Wait, in ARM, SUBS sets C=1 if no borrow, C=0 if borrow. So 0x80000000 -2: 0x80000000 is -2,147,483,648. Subtract 2: -2,147,483,650, which is not representable in 32-bit two's complement. The result is 0x7FFFFFFE (2,147,483,646). So overflow occurred (V=1), N=0 (positive), C=1 (since no borrow needed? Or borrow is when subtracting a larger number. Wait, for SUBS, C is set to NOT borrow. So if you subtract and there's no borrow, C=1. If you need to borrow, C=0. Here, subtracting 2 from 0x80000000 (which is a large positive in unsigned, but signed it's negative). Wait, in unsigned terms, 0x80000000 is 2,147,483,648. Subtracting 2 would be 2,147,483,646 (0x7FFFFFFE). So no borrow needed, so C=1. But in signed terms, this is an overflow. So V=1. So flags: N=0, Z=0, C=1, V=1.

Part (b) terms: Hardware Interrupt Request is a signal from a device to the CPU to request service. Interrupt Vector Table is a table of addresses pointing to ISRs. Interrupt Handler is the code that runs when an interrupt occurs.

Part (c) Sequence: IRQ occurs, CPU finishes current instruction, saves state, jumps to ISR via vector table, executes ISR, returns.

Question 4(d): The assembly code in Listing Q4a. The function zero_fill needs to write zeros to a memory block. Using a loop, store zeros until the count is zero. The parameters are R0 (dest) and R1 (size). So in assembly, loop: CMP R1, #0; BEQ exit; STRB R2, [R0], #1; SUBS R1, #1; B loop. Assuming R2 is preloaded with 0.

Now, creating the study guide. Each question's core concepts and how to approach them.

For Q1: Bitwise operations, signed/unsigned integers, binary/hex conversion, ASCII, parity, serial comms, endianness.

Q2: GPIO configuration, pull-up resistors, STM32 functions, writing functions to control LEDs and read buttons.

Q3: Stack operations, ARM instructions, memcpy implementation, AAPCS.

Q4: Flags, interrupts, ISRs, memory operations.

Detailed study guide would cover these topics with examples and practice problems.

### Study Guide for CMPU1019 Microprocessor Systems Exam  
**Answer 3 of 4 Questions | 2 Hours**

---

### Core Concepts & How to Answer

#### Question 1: Bitwise Operations, Data Representation, and Communication  
**Key Topics:**  
1. **Hexadecimal & Bitwise Operations**  
   - **Shifting**: `1 << 15` equals `0x8000` (16-bit).  
   - **AND/OR**: Convert hex to binary, perform bitwise operation, convert back to hex.  
   - **Example**:  
     - `0xef00 & 0x8000` → `0x8000` (masking bit 15).  
     - `0x28a8 | 0xd645` → `0xfeed` (combine bits).  

2. **Signed Integer Overflow**  
   - **8-bit signed range**: -128 to 127.  
   - **Calculation**:  
     - `-125 - 5 = -130` → wraps to `126` (due to 8-bit overflow).  

3. **Minimum Bits for Range**  
   - **Formula**: `n ≥ log₂(max_value + 1)`.  
   - **0–8191**: 13 bits (since 2¹³ = 8192).  

4. **Buses & Pipelining**  
   - **Address Bus**: Carries memory addresses.  
   - **Data Bus**: Transfers data between components.  
   - **Instruction Pipeline**: Overlaps fetch/decode/execute stages.  

5. **ASCII & Serial Communication**  
   - **Parity**: Count 1s; even parity sets bit to make total even.  
   - **Sync vs. Async**: Sync uses clock; async uses start/stop bits.  
   - **Transmission Time**: `(bits_per_char × chars) / baud_rate`.  

6. **Endianness**  
   - **Big Endian**: `0x12345678` → stored as `12 34 56 78`.  
   - **Little Endian**: Stored as `78 56 34 12`.  

---

#### Question 2: STM32 GPIO Configuration  
**Key Topics:**  
1. **GPIO Setup**  
   - **`pinMode()`**: Configures a pin as input/output.  
   - **Pull-Up Resistors**: Pull input to HIGH when switch is open; LOW when pressed.  

2. **Code Analysis**  
   - **Line A**: `Mode << (2 × BitNumber)` shifts mode bits to the correct pin position.  
   - **Line B**: Clears existing mode bits for the pin.  
   - **Line C**: Sets the new mode bits.  

3. **LED & Button Control**  
   - **Configuration**: Set LEDs as outputs (`Mode = 1`); button as input with pull-up.  
   - **LED Functions**: Use `GPIOx->ODR` to set/clear pins.  
   - **Button Check**: Read `GPIOx->IDR`; return `0` if pressed (pulled low).  

---

#### Question 3: ARM Assembly & Memory Operations  
**Key Topics:**  
1. **Stack Operations**  
   - **PUSH**: Decrements `SP`, stores register to stack.  
   - **POP**: Retrieves value from stack, increments `SP`.  

2. **Memory Access**  
   - **`LDR/STR`**: Load/store data to memory addresses.  
   - **Example**: `STR R1, [R0, #0x10]` writes `R1` to `0x40000010`.  

3. **Function Calls**  
   - **`my_memcpy`**: Copies `n` bytes from `src` to `dest` using a loop.  
   - **Calling Convention**: Use `R0`, `R1`, `R2` for parameters (AAPCS).  

4. **AAPCS**  
   - **Rules**: Registers for parameters/return values, stack alignment.  

---

#### Question 4: Interrupts & Arithmetic Flags  
**Key Topics:**  
1. **Condition Flags**  
   - **N (Negative)**: Result is negative.  
   - **Z (Zero)**: Result is zero.  
   - **C (Carry)**: Overflow in unsigned arithmetic.  
   - **V (Overflow)**: Overflow in signed arithmetic.  

2. **Interrupt Handling**  
   - **Interrupt Request (IRQ)**: Hardware signal to CPU.  
   - **Vector Table**: Addresses of interrupt handlers.  
   - **Handler Execution**: Save context, run ISR, restore context.  

3. **Memory Initialization**  
   - **`zero_fill`**: Loop to write zeros to memory using `STRB` and decrement count.  

---

### How to Prepare  
1. **Practice Bitwise Operations**: Convert hex to binary, perform AND/OR, and check results.  
2. **Signed/Unsigned Calculations**: Use two’s complement for overflow scenarios.  
3. **GPIO Code**: Write functions to configure pins and control LEDs/buttons.  
4. **Assembly Programming**: Simulate stack operations and memory copying.  
5. **Flag Analysis**: Test arithmetic operations to determine N, Z, C, V.  
6. **Interrupt Flow**: Diagram the steps from IRQ to handler completion.  

**Practice Resources**:  
- Hexadecimal calculator.  
- STM32 datasheets for GPIO registers.  
- ARM instruction set manual.  

--- 

**Good Luck!** Focus on understanding core principles and practice with sample problems. 📢