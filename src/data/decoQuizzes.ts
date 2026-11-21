import { QuizQuestion } from '../types/curriculum';

export const DECO_QUIZ_QUESTIONS: QuizQuestion[] = [
  // WEEK 1 (Unit I: Structure, Functional Units, Buses, Software, Performance, Multiprocessors)
  {
    id: 'q-w1-1',
    weekNumber: 1,
    unitNumber: 1,
    question: 'Which of the following is NOT one of the five functional units of a basic digital computer?',
    options: ['Control Unit (CU)', 'Arithmetic Logic Unit (ALU)', 'Graphics Processing Unit (GPU)', 'Memory Unit'],
    correctIndex: 2,
    explanation: 'The five classic functional units are Input, Output, Memory, Arithmetic Logic Unit (ALU), and Control Unit (CU).',
    coCode: 'CO1',
    btl: 'BTL1',
    sourceTag: 'Unit I Quiz #1'
  },
  {
    id: 'q-w1-2',
    weekNumber: 1,
    unitNumber: 1,
    question: 'Which CPU register holds the memory address of the next instruction to be fetched and executed?',
    options: ['Instruction Register (IR)', 'Program Counter (PC)', 'Memory Data Register (MDR)', 'Accumulator (ACC)'],
    correctIndex: 1,
    explanation: 'The Program Counter (PC) tracks the address of the next instruction; once fetched, the instruction is loaded into the IR.',
    coCode: 'CO1',
    btl: 'BTL1',
    sourceTag: 'Quiz 01 #3'
  },
  {
    id: 'q-w1-3',
    weekNumber: 1,
    unitNumber: 1,
    question: 'Which component of the system bus is unidirectional (CPU to Memory/I/O) and determines maximum addressable memory?',
    options: ['Data Bus', 'Address Bus', 'Control Bus', 'Expansion Bus'],
    correctIndex: 1,
    explanation: 'The Address Bus is unidirectional from CPU to memory or peripherals; k address lines can uniquely address 2^k memory locations.',
    coCode: 'CO1',
    btl: 'BTL2',
    sourceTag: 'Week 1 Lecture 4'
  },
  {
    id: 'q-w1-4',
    weekNumber: 1,
    unitNumber: 1,
    question: 'What is the primary cause of the Von Neumann bottleneck?',
    options: [
      'Separate caches for instructions and data',
      'Sharing a single memory space and bus for both instructions and data',
      'Using an edge-triggered system clock',
      'Having too many general-purpose CPU registers'
    ],
    correctIndex: 1,
    explanation: 'In Von Neumann architecture, instructions and data share one memory and bus, preventing simultaneous instruction fetch and data read/write.',
    coCode: 'CO1',
    btl: 'BTL2',
    sourceTag: 'Week 1 Lecture 2'
  },
  {
    id: 'q-w1-5',
    weekNumber: 1,
    unitNumber: 1,
    question: 'What distinguishes a multiprocessor system from a multicomputer system?',
    options: [
      'Multiprocessors have distributed private memories; multicomputers share global memory',
      'Multiprocessors share a common physical memory space; multicomputers use distributed local memories',
      'Multicomputers execute only a single instruction stream',
      'Multiprocessors cannot run operating systems'
    ],
    correctIndex: 1,
    explanation: 'Multiprocessors (tightly coupled) share global memory, while multicomputers (loosely coupled clusters) communicate via message passing across private local memories.',
    coCode: 'CO1',
    btl: 'BTL2',
    sourceTag: 'Unit I Quiz #3'
  },
  {
    id: 'q-w1-6',
    weekNumber: 1,
    unitNumber: 1,
    question: 'According to the basic processor performance equation T = (N × S) / R, which change reduces program execution time T?',
    options: [
      'Increasing average cycles per instruction S',
      'Increasing dynamic instruction count N',
      'Increasing clock frequency R while keeping N and S constant',
      'Decreasing clock frequency R'
    ],
    correctIndex: 2,
    explanation: 'Execution time T is directly proportional to instruction count N and CPI (S), and inversely proportional to clock rate R.',
    coCode: 'CO1',
    btl: 'BTL3',
    sourceTag: 'Week 1 Lecture 5'
  },
  {
    id: 'q-w1-7',
    weekNumber: 1,
    unitNumber: 1,
    question: 'Which of the following is classified as system software rather than application software?',
    options: ['Spreadsheet program', 'Compiler and Operating System', 'CAD drawing suite', 'Web browser'],
    correctIndex: 1,
    explanation: 'Compilers, assemblers, loaders, and operating systems are system software that manage hardware and translate/schedule user programs.',
    coCode: 'CO1',
    btl: 'BTL2',
    sourceTag: 'Week 1 Lecture 4'
  },

  // WEEK 2 (Unit I: Number Systems, Conversions, Fixed & IEEE 754 Floating Point)
  {
    id: 'q-w2-1',
    weekNumber: 2,
    unitNumber: 1,
    question: 'Which of the following number systems is NOT positional?',
    options: ['Decimal', 'Binary', 'Roman', 'Octal'],
    correctIndex: 2,
    explanation: 'Roman numerals are non-positional/additive-subtractive, whereas Decimal, Binary, Octal, and Hexadecimal assign place weights r^i.',
    coCode: 'CO1',
    btl: 'BTL1',
    sourceTag: 'Quiz 01 #1'
  },
  {
    id: 'q-w2-2',
    weekNumber: 2,
    unitNumber: 1,
    question: 'How many bits are required to represent 256 unique binary values?',
    options: ['7 bits', '8 bits', '16 bits', '10 bits'],
    correctIndex: 1,
    explanation: 'n bits represent 2^n unique patterns; since 2^8 = 256, exactly 8 bits (1 byte) are required.',
    coCode: 'CO1',
    btl: 'BTL2',
    sourceTag: 'Quiz 01 #2'
  },
  {
    id: 'q-w2-3',
    weekNumber: 2,
    unitNumber: 1,
    question: 'What is the binary representation of the hexadecimal number (2F)₁₆?',
    options: ['00101110', '11111111', '00101111', '00001111'],
    correctIndex: 2,
    explanation: 'Convert each hex digit to 4 bits: 2 = 0010₂ and F (15) = 1111₂ → 00101111₂.',
    coCode: 'CO1',
    btl: 'BTL2',
    sourceTag: 'Quiz 01 #4'
  },
  {
    id: 'q-w2-4',
    weekNumber: 2,
    unitNumber: 1,
    question: 'Convert the decimal integer (45)₁₀ into binary and (520)₁₀ into hexadecimal.',
    options: [
      '101101₂ and 208₁₆',
      '101011₂ and 20A₁₆',
      '110101₂ and 280₁₆',
      '101101₂ and 1F8₁₆'
    ],
    correctIndex: 0,
    explanation: '45 = 32 + 8 + 4 + 1 = 101101₂. For 520 ÷ 16: 32 R 8, 32 ÷ 16 = 2 R 0, 2 ÷ 16 = 0 R 2 → 208₁₆.',
    coCode: 'CO1',
    btl: 'BTL3',
    sourceTag: 'Assignment 1 & Quiz'
  },
  {
    id: 'q-w2-5',
    weekNumber: 2,
    unitNumber: 1,
    question: 'What is the octal equivalent of (480)₁₀ and the binary equivalent of (163.875)₁₀?',
    options: [
      '740₈ and 10100011.111₂',
      '720₈ and 10100011.101₂',
      '640₈ and 10100101.111₂',
      '740₈ and 10100111.110₂'
    ],
    correctIndex: 0,
    explanation: '480 ÷ 8 = 60 R 0, 60 ÷ 8 = 7 R 4 → 740₈. 163 = 10100011₂ and 0.875 = 7/8 = .111₂.',
    coCode: 'CO1',
    btl: 'BTL3',
    sourceTag: 'Assignment 1 #1'
  },
  {
    id: 'q-w2-6',
    weekNumber: 2,
    unitNumber: 1,
    question: 'In IEEE 754 Single Precision (32-bit) floating-point format, what are the Sign, Biased Exponent (bias 127), and Mantissa fields for +12.5?',
    options: [
      'Sign=0, Exponent=10000010, Mantissa=10010000000000000000000',
      'Sign=0, Exponent=10000011, Mantissa=11001000000000000000000',
      'Sign=1, Exponent=10000010, Mantissa=10010000000000000000000',
      'Sign=0, Exponent=01111100, Mantissa=00110000000000000000000'
    ],
    correctIndex: 0,
    explanation: '+12.5 = 1100.1₂ = 1.1001 × 2³. Sign=0; Exponent = 3 + 127 = 130 = 10000010₂; Mantissa drops leading 1 → 10010...0.',
    coCode: 'CO1',
    btl: 'BTL3',
    sourceTag: 'Unit I Quiz #10'
  },
  {
    id: 'q-w2-7',
    weekNumber: 2,
    unitNumber: 1,
    question: 'How many bits are allocated to Sign, Exponent, and Mantissa in IEEE 754 Double Precision (64-bit)?',
    options: ['1, 8, and 23 bits', '1, 11, and 52 bits', '1, 10, and 53 bits', '2, 11, and 51 bits'],
    correctIndex: 1,
    explanation: 'IEEE 754 Double Precision uses 1 sign bit, 11 biased-exponent bits (bias 1023), and 52 fraction/mantissa bits.',
    coCode: 'CO1',
    btl: 'BTL1',
    sourceTag: 'Week 2 Lecture 7'
  },

  // WEEK 3 (Unit I: Complements, Signed Arithmetic, Binary Codes)
  {
    id: 'q-w3-1',
    weekNumber: 3,
    unitNumber: 1,
    question: 'What is the 8-bit signed 2’s complement representation of −15 and −18?',
    options: [
      '11110001 and 11101110',
      '11110000 and 11101101',
      '10001111 and 10010010',
      '11110011 and 11101100'
    ],
    correctIndex: 0,
    explanation: '+15 = 00001111 → invert+1 = 11110001. +18 = 00010010 → invert+1 = 11101110.',
    coCode: 'CO1',
    btl: 'BTL2',
    sourceTag: 'Unit I Quiz #6 & Quiz 01 #8'
  },
  {
    id: 'q-w3-2',
    weekNumber: 3,
    unitNumber: 1,
    question: 'What is the 1’s complement of (1001101)₂ and the 2’s complement of (11001101)₂?',
    options: [
      '0110010 and 00110011',
      '0110011 and 00110010',
      '0110010 and 00110010',
      '1001100 and 00110011'
    ],
    correctIndex: 0,
    explanation: '1’s comp flips every bit: 1001101 → 0110010. 2’s comp of 11001101: invert (00110010) + 1 = 00110011.',
    coCode: 'CO1',
    btl: 'BTL2',
    sourceTag: 'Course File SAQ #7 & Quiz #7'
  },
  {
    id: 'q-w3-3',
    weekNumber: 3,
    unitNumber: 1,
    question: 'When adding two signed 2’s complement numbers, how does hardware detect signed overflow?',
    options: [
      'Whenever the carry-out of the MSB is 1',
      'Whenever the carry-in to the sign bit differs from the carry-out of the sign bit (C_in ⊕ C_out = 1)',
      'Whenever both operands have opposite signs',
      'Whenever the result is zero'
    ],
    correctIndex: 1,
    explanation: 'Signed overflow occurs iff C_in ≠ C_out at the sign bit position (which happens when two same-sign numbers sum to an opposite sign).',
    coCode: 'CO1',
    btl: 'BTL3',
    sourceTag: 'Week 3 Lecture 13'
  },
  {
    id: 'q-w3-4',
    weekNumber: 3,
    unitNumber: 1,
    question: 'Convert Gray code 1011 to Binary, and Binary 110101 to Gray code.',
    options: [
      'Binary 1101 and Gray 101111',
      'Binary 1110 and Gray 101101',
      'Binary 1001 and Gray 110111',
      'Binary 1101 and Gray 100111'
    ],
    correctIndex: 0,
    explanation: 'Gray 1011 → B: 1, 1⊕0=1, 1⊕1=0, 0⊕1=1 → 1101₂. Binary 110101 → G: 1, 1⊕1=0, 1⊕0=1, 0⊕1=1, 1⊕0=1, 0⊕1=1 → 101111.',
    coCode: 'CO1',
    btl: 'BTL3',
    sourceTag: 'Course File SAQ #9 & Quiz 01 Bonus'
  },
  {
    id: 'q-w3-5',
    weekNumber: 3,
    unitNumber: 1,
    question: 'What is the 8421 BCD representation of decimal 345, and what is the Excess-3 code for decimal 5?',
    options: [
      '0011 0100 0101 and 1000',
      '0101 0110 1000 and 0101',
      '0011 0100 0101 and 0010',
      '0011 0101 0100 and 1000'
    ],
    correctIndex: 0,
    explanation: 'In 8421 BCD, each digit is 4 bits: 3=0011, 4=0100, 5=0101. Excess-3 adds 3: 5 + 3 = 8 = 1000₂.',
    coCode: 'CO1',
    btl: 'BTL2',
    sourceTag: 'Course File SAQ #10'
  },
  {
    id: 'q-w3-6',
    weekNumber: 3,
    unitNumber: 1,
    question: 'How many bits does standard ASCII use per character, and which binary code is self-complementing?',
    options: [
      '8 bits and 8421 BCD',
      '7 bits and Excess-3',
      '6 bits and Gray Code',
      '7 bits and 8421 BCD'
    ],
    correctIndex: 1,
    explanation: 'Standard ASCII is a 7-bit code (128 characters). Excess-3 is self-complementing because the 1’s complement of a digit’s Excess-3 code gives its 9’s complement.',
    coCode: 'CO1',
    btl: 'BTL1',
    sourceTag: 'Quiz 01 #11 & Week 3'
  },
  {
    id: 'q-w3-7',
    weekNumber: 3,
    unitNumber: 1,
    question: 'Using Hamming’s inequality 2^r ≥ m + r + 1, how many parity check bits r are required for an m = 4-bit data word?',
    options: ['2 parity bits', '3 parity bits', '4 parity bits', '5 parity bits'],
    correctIndex: 1,
    explanation: 'For m = 4: test r = 3 → 2³ = 8 ≥ 4 + 3 + 1 = 8. This forms the classic Hamming(7, 4) single-error-correcting code.',
    coCode: 'CO1',
    btl: 'BTL3',
    sourceTag: 'Week 3 Lecture 13'
  },

  // WEEK 4 (Unit II: Boolean Algebra, Logic Gates, Universal Gates)
  {
    id: 'q-w4-1',
    weekNumber: 4,
    unitNumber: 2,
    question: 'Simplify the Boolean expression A + A\'·B:',
    options: ['A·B', 'A + B', 'A\' + B', 'B'],
    correctIndex: 1,
    explanation: 'By the Redundant Literal Rule (or Distributivity: (A + A\')(A + B) = 1·(A + B)), A + A\'B simplifies directly to A + B.',
    coCode: 'CO2',
    btl: 'BTL2',
    sourceTag: 'Unit II Quiz #13'
  },
  {
    id: 'q-w4-2',
    weekNumber: 4,
    unitNumber: 2,
    question: 'State De Morgan’s First and Second Laws accurately:',
    options: [
      '(A·B)\' = A\'·B\' and (A + B)\' = A\' + B\'',
      '(A·B)\' = A\' + B\' and (A + B)\' = A\'·B\'',
      '(A·B)\' = A + B and (A + B)\' = A·B',
      'A + A·B = A and A·(A + B) = A'
    ],
    correctIndex: 1,
    explanation: 'De Morgan’s laws break the complement bar and swap AND/OR: (A·B)\' = A\' + B\' and (A + B)\' = A\'·B\'.',
    coCode: 'CO2',
    btl: 'BTL1',
    sourceTag: 'Unit II Quiz #11'
  },
  {
    id: 'q-w4-3',
    weekNumber: 4,
    unitNumber: 2,
    question: 'According to the Consensus Theorem, A·B + A\'·C + B·C simplifies to:',
    options: ['A·B + B·C', 'A·B + A\'·C', 'A\'·C + B·C', 'A + B + C'],
    correctIndex: 1,
    explanation: 'The term B·C is covered by AB (when A=1) and A\'C (when A=0), making B·C redundant: AB + A\'C + BC = AB + A\'C.',
    coCode: 'CO2',
    btl: 'BTL3',
    sourceTag: 'Week 4 Lecture 17'
  },
  {
    id: 'q-w4-4',
    weekNumber: 4,
    unitNumber: 2,
    question: 'Which pair of logic gates are universally complete (can implement any Boolean function alone)?',
    options: ['AND and OR', 'XOR and XNOR', 'NAND and NOR', 'NOT and XOR'],
    correctIndex: 2,
    explanation: 'Both NAND and NOR can each construct NOT, AND, and OR gates, making every Boolean and sequential circuit realizable with a single gate type.',
    coCode: 'CO2',
    btl: 'BTL1',
    sourceTag: 'Unit II Quiz #12'
  },
  {
    id: 'q-w4-5',
    weekNumber: 4,
    unitNumber: 2,
    question: 'What is the dual of the Boolean identity A + A\'·B = A + B?',
    options: ['A·(A\' + B) = A·B', 'A\' + A·B\' = A\' + B\'', 'A·A\' + B = A·B', 'A + B = B + A'],
    correctIndex: 0,
    explanation: 'The Principle of Duality swaps (+) ↔ (·) and 0 ↔ 1 without complementing variables: A·(A\' + B) = A·B.',
    coCode: 'CO2',
    btl: 'BTL2',
    sourceTag: 'Week 4 Lecture 17'
  },
  {
    id: 'q-w4-6',
    weekNumber: 4,
    unitNumber: 2,
    question: 'How many 2-input NAND gates are required to implement a 2-input OR gate and a 2-input XOR gate respectively?',
    options: ['2 and 3', '3 and 4', '2 and 4', '3 and 5'],
    correctIndex: 1,
    explanation: 'OR = (A\'·B\')\' requires 3 NAND gates (2 inverters + 1 NAND). XOR requires 4 NAND gates in cross-coupled configuration.',
    coCode: 'CO2',
    btl: 'BTL3',
    sourceTag: 'Week 4 Lecture 19'
  },
  {
    id: 'q-w4-7',
    weekNumber: 4,
    unitNumber: 2,
    question: 'Simplify F = (A + B)·(A + B\') using Boolean laws:',
    options: ['B', 'A', 'A + B', '1'],
    correctIndex: 1,
    explanation: 'Factor using distributive law: (A + B)(A + B\') = A + B·B\' = A + 0 = A.',
    coCode: 'CO2',
    btl: 'BTL2',
    sourceTag: 'Week 4 Lecture 19'
  },

  // WEEK 5 (Unit II: K-Maps, Adders, Flip-Flops, Counters, Decoders + Gaps)
  {
    id: 'q-w5-1',
    weekNumber: 5,
    unitNumber: 2,
    question: 'How many cells are in a 4-variable Karnaugh Map, and in what bit sequence are rows/columns labeled?',
    options: ['8 cells in binary order', '16 cells in Gray code order (00, 01, 11, 10)', '16 cells in binary order (00, 01, 10, 11)', '32 cells in Gray code order'],
    correctIndex: 1,
    explanation: 'A 4-variable K-map has 2⁴ = 16 cells, with axes labeled 00, 01, 11, 10 (Gray code) so adjacent cells differ by only 1 variable.',
    coCode: 'CO2',
    btl: 'BTL1',
    sourceTag: 'Unit II Quiz #15'
  },
  {
    id: 'q-w5-2',
    weekNumber: 5,
    unitNumber: 2,
    question: 'Minimize the 3-variable switching function F(A, B, C) = Σm(1, 3, 5, 7):',
    options: ['F = A', 'F = B', 'F = C', 'F = B + C'],
    correctIndex: 2,
    explanation: 'The minterms 001, 011, 101, 111 are all the odd rows where C = 1 regardless of A and B; grouping the quad yields F = C.',
    coCode: 'CO2',
    btl: 'BTL3',
    sourceTag: 'Week 5 K-Map Lab'
  },
  {
    id: 'q-w5-3',
    weekNumber: 5,
    unitNumber: 2,
    question: 'What are the Sum (S) and Carry-out (Cout) equations of a Full Adder with inputs A, B, and Cin?',
    options: [
      'S = A ⊕ B, Cout = A·B',
      'S = A ⊕ B ⊕ Cin, Cout = A·B + Cin·(A ⊕ B)',
      'S = A·B·Cin, Cout = A + B + Cin',
      'S = A ⊕ B ⊕ Cin, Cout = A\'·B + Bin·(A ⊕ B)\''
    ],
    correctIndex: 1,
    explanation: 'Full Adder outputs S = A ⊕ B ⊕ Cin and Cout = AB + BCin + ACin = AB + Cin(A ⊕ B).',
    coCode: 'CO2',
    btl: 'BTL2',
    sourceTag: 'Unit II Quiz #16–17 & ST-2'
  },
  {
    id: 'q-w5-4',
    weekNumber: 5,
    unitNumber: 2,
    question: 'What is the fundamental difference between a Latch and a Flip-Flop?',
    options: [
      'A latch stores 2 bits; a flip-flop stores 1 bit',
      'A latch is level-triggered (sensitive while enable is active); a flip-flop is edge-triggered on clock transitions',
      'A latch is combinational; a flip-flop is asynchronous',
      'A flip-flop has no clock input'
    ],
    correctIndex: 1,
    explanation: 'Latches pass input changes continuously while the enable level is active, whereas flip-flops sample inputs strictly on rising or falling clock edges.',
    coCode: 'CO2',
    btl: 'BTL2',
    sourceTag: 'Course File SAQ #19'
  },
  {
    id: 'q-w5-5',
    weekNumber: 5,
    unitNumber: 2,
    question: 'In a JK Flip-Flop, what happens when J = 1 and K = 1 at the active clock edge, and how is the race-around condition avoided?',
    options: [
      'Output resets to 0; avoided by adding an OR gate',
      'Output toggles (Q_next = Q\'); race-around is avoided via edge-triggering or Master-Slave JK',
      'Output enters an invalid state; avoided by setting S = R = 0',
      'Output holds previous state unchanged'
    ],
    correctIndex: 1,
    explanation: 'J=K=1 toggles the output. In level-triggered latches this causes multiple toggles per pulse (race-around), solved by Master-Slave or edge-triggered flip-flops.',
    coCode: 'CO2',
    btl: 'BTL3',
    sourceTag: 'Week 5 Lecture 26'
  },
  {
    id: 'q-w5-6',
    weekNumber: 5,
    unitNumber: 2,
    question: 'Which statement accurately describes a 3-to-8 Decoder vs. a 8-to-1 Multiplexer (Gap Topic)?',
    options: [
      'A 3-to-8 decoder activates 1 of 8 outputs per 3-bit code; an 8:1 MUX routes 1 of 8 inputs onto 1 output via 3 select lines',
      'Both convert 8 input lines into 3 binary output bits',
      'A decoder requires 8 select lines',
      'A multiplexer cannot implement Boolean functions'
    ],
    correctIndex: 0,
    explanation: 'Decoders map n binary inputs to 2^n minterm output lines, whereas Multiplexers select 1 of 2^n data inputs using n select lines.',
    coCode: 'CO2',
    btl: 'BTL2',
    sourceTag: 'Unit II Gap #3–4 & Quiz #20'
  },
  {
    id: 'q-w5-7',
    weekNumber: 5,
    unitNumber: 2,
    question: 'How many flip-flops are required to build a MOD-10 (decade) ripple counter?',
    options: ['3 flip-flops', '4 flip-flops', '5 flip-flops', '10 flip-flops'],
    correctIndex: 1,
    explanation: 'Since 2³ = 8 < 10 ≤ 2⁴ = 16, at least 4 flip-flops are required (resetting at count 1010₂).',
    coCode: 'CO2',
    btl: 'BTL3',
    sourceTag: 'Week 5 Lecture 27'
  },

  // WEEK 6 (Unit III: Multiplication/Division, ISA Formats, Addressing Modes)
  {
    id: 'q-w6-1',
    weekNumber: 6,
    unitNumber: 3,
    question: 'In Booth’s signed multiplication algorithm, what operation occurs when the bit pair (Q₀, Q₋₁) equals 10?',
    options: [
      'Add multiplicand M to AC (AC ← AC + M) then arithmetic shift right',
      'Subtract multiplicand M from AC (AC ← AC − M) then arithmetic shift right',
      'Perform arithmetic shift right only (no add/sub)',
      'Shift left AC and Q'
    ],
    correctIndex: 1,
    explanation: 'Booth rules: 10 → AC ← AC − M; 01 → AC ← AC + M; 00 or 11 → no arithmetic op; every step ends with arithmetic shift right (AC, Q, Q₋₁).',
    coCode: 'CO3',
    btl: 'BTL3',
    sourceTag: 'Week 6 Lecture 30'
  },
  {
    id: 'q-w6-2',
    weekNumber: 6,
    unitNumber: 3,
    question: 'How does Non-Restoring Division improve upon Restoring Division?',
    options: [
      'It uses floating-point arithmetic instead of shifts',
      'When A becomes negative after subtraction, it does not restore A immediately; instead it shifts left and adds M in the next cycle',
      'It eliminates the quotient register Q',
      'It only works for powers of 2'
    ],
    correctIndex: 1,
    explanation: 'Non-restoring division skips the intermediate A ← A + M restoration step when A < 0, performing A ← A + M after the next left shift (restoring only once at the end if final A < 0).',
    coCode: 'CO3',
    btl: 'BTL2',
    sourceTag: 'Unit III Quiz #22'
  },
  {
    id: 'q-w6-3',
    weekNumber: 6,
    unitNumber: 3,
    question: 'Which instruction format relies on an implicit hardware stack (using PUSH, POP, and zero operand fields for ALU ops)?',
    options: ['3-Address format', '2-Address format', '1-Address (Accumulator) format', '0-Address format'],
    correctIndex: 3,
    explanation: '0-address (stack) machines pop operands from top-of-stack and push results back, requiring no explicit operand fields in arithmetic instructions.',
    coCode: 'CO3',
    btl: 'BTL2',
    sourceTag: 'Week 6 Lecture 31'
  },
  {
    id: 'q-w6-4',
    weekNumber: 6,
    unitNumber: 3,
    question: 'In which addressing mode is the Effective Address (EA) computed as EA = X + [Ri], commonly used for array traversal?',
    options: ['Immediate Addressing', 'Direct Addressing', 'Indexed Addressing', 'Register Indirect Addressing'],
    correctIndex: 2,
    explanation: 'Indexed addressing adds an instruction-specified base offset X to the index register [Ri] to step cleanly through array elements.',
    coCode: 'CO3',
    btl: 'BTL2',
    sourceTag: 'Week 6 Lecture 32'
  },
  {
    id: 'q-w6-5',
    weekNumber: 6,
    unitNumber: 3,
    question: 'How many main memory accesses (after fetching the instruction) are needed for Indirect Addressing vs. Register Addressing?',
    options: [
      '0 for Indirect, 1 for Register',
      '2 for Indirect, 0 for Register',
      '1 for Indirect, 1 for Register',
      '2 for Indirect, 1 for Register'
    ],
    correctIndex: 1,
    explanation: 'Indirect addressing fetches the pointer from M[Addr] first and then fetches the operand from M[M[Addr]] (2 accesses). Register addressing reads directly from CPU registers (0 memory accesses).',
    coCode: 'CO3',
    btl: 'BTL3',
    sourceTag: 'Course File SAQ #22'
  },
  {
    id: 'q-w6-6',
    weekNumber: 6,
    unitNumber: 3,
    question: 'What is the role of the opcode field and the LOAD/STORE instructions in an ISA?',
    options: [
      'Opcode stores the memory address; LOAD writes registers to disk',
      'Opcode specifies the operation to execute; LOAD copies M[addr] → Register and STORE copies Register → M[addr]',
      'Opcode holds the clock frequency; STORE clears the Program Counter',
      'LOAD and STORE only operate between two CPU registers'
    ],
    correctIndex: 1,
    explanation: 'The opcode tells the control unit which operation to perform; LOAD transfers data from memory into a register, and STORE writes a register value back to memory.',
    coCode: 'CO3',
    btl: 'BTL1',
    sourceTag: 'CIE-2 SAQ #2 & Unit III Quiz #25'
  },
  {
    id: 'q-w6-7',
    weekNumber: 6,
    unitNumber: 3,
    question: 'Which addressing mode calculates the target branch address relative to the current Program Counter (EA = PC + Offset)?',
    options: ['Immediate Mode', 'PC-Relative Mode', 'Direct Mode', 'Auto-decrement Mode'],
    correctIndex: 1,
    explanation: 'PC-Relative addressing adds a signed offset to the PC, enabling compact position-independent conditional branches and loops.',
    coCode: 'CO3',
    btl: 'BTL2',
    sourceTag: 'Week 6 Lecture 32'
  },

  // WEEK 7 (Unit III: RTL, Micro-operations, Microprogrammed Control)
  {
    id: 'q-w7-1',
    weekNumber: 7,
    unitNumber: 3,
    question: 'In Register Transfer Language (RTL), what does the statement "T1: R2 ← R1" signify?',
    options: [
      'Transfer contents of R2 into R1 unconditionally',
      'If control signal T1 = 1, copy contents of R1 into R2 on the next clock edge',
      'Add R1 and R2 and store in T1',
      'Swap R1 and R2 asynchronously'
    ],
    correctIndex: 1,
    explanation: 'The colon separates the Boolean control condition T1 from the micro-operation R2 ← R1 executed at the active clock edge when T1 = 1.',
    coCode: 'CO4',
    btl: 'BTL2',
    sourceTag: 'CIE-2 SAQ #3'
  },
  {
    id: 'q-w7-2',
    weekNumber: 7,
    unitNumber: 3,
    question: 'If 4-bit signed register R = 1011 (−5), what is the result of Arithmetic Shift Right (ashr) vs. Logical Shift Right (shr)?',
    options: [
      'ashr = 0101, shr = 1101',
      'ashr = 1101 (−3), shr = 0101 (+5)',
      'ashr = 0110, shr = 1101',
      'ashr = 1110, shr = 0101'
    ],
    correctIndex: 1,
    explanation: 'Arithmetic shift right replicates the MSB sign bit (1011 → 1101, preserving negative sign), whereas logical shift right shifts in a 0 at the MSB (0101).',
    coCode: 'CO4',
    btl: 'BTL3',
    sourceTag: 'CIE-2 LAQ #1'
  },
  {
    id: 'q-w7-3',
    weekNumber: 7,
    unitNumber: 3,
    question: 'Which RTL expression correctly performs R3 ← R1 − R2 using 2’s complement arithmetic?',
    options: [
      'R3 ← R1 + R2\'',
      'R3 ← R1 + R2\' + 1',
      'R3 ← R1\' + R2',
      'R3 ← R1 ∧ R2\''
    ],
    correctIndex: 1,
    explanation: 'Subtracting R2 adds the 2’s complement of R2 (bitwise 1’s complement R2\' plus carry-in 1) to R1.',
    coCode: 'CO4',
    btl: 'BTL2',
    sourceTag: 'CIE-2 LAQ #1'
  },
  {
    id: 'q-w7-4',
    weekNumber: 7,
    unitNumber: 3,
    question: 'Which logic micro-operation is used to selectively clear (mask) bits in register R1 using a mask in R2?',
    options: ['OR (R1 ∨ R2)', 'AND (R1 ∧ R2)', 'XOR (R1 ⊕ R2)', 'Circular Shift Left (cil)'],
    correctIndex: 1,
    explanation: 'Bitwise AND preserves bits where R2 has 1s and clears (masks to 0) bits where R2 has 0s.',
    coCode: 'CO4',
    btl: 'BTL2',
    sourceTag: 'CIE-2 LAQ #1'
  },
  {
    id: 'q-w7-5',
    weekNumber: 7,
    unitNumber: 3,
    question: 'In a microprogrammed control unit, what does Control Memory store and what register holds the address of the next microinstruction?',
    options: [
      'User application programs; held by PC',
      'Microinstructions (microprograms) in ROM; addressed by the Control Address Register (CAR)',
      'Cache tags; addressed by MAR',
      'Page tables; addressed by SBR'
    ],
    correctIndex: 1,
    explanation: 'Control Memory (ROM) permanently stores the microprograms for all machine instructions, and the CAR supplies the address of the next microinstruction.',
    coCode: 'CO4',
    btl: 'BTL1',
    sourceTag: 'Unit III Quiz #29 & LAQ #2'
  },
  {
    id: 'q-w7-6',
    weekNumber: 7,
    unitNumber: 3,
    question: 'In Mano’s 20-bit microinstruction format (F1 | F2 | F3 | CD | BR | AD), how many bits are assigned to F1–F3, CD, BR, and AD?',
    options: [
      '4, 4, 4, 2, 2, 4',
      '3, 3, 3, 2, 2, 7',
      '3, 3, 3, 3, 2, 6',
      '2, 2, 2, 4, 2, 8'
    ],
    correctIndex: 1,
    explanation: 'Three 3-bit micro-operation fields (F1, F2, F3 = 9 bits), 2-bit Condition (CD), 2-bit Branch (BR), and 7-bit Address (AD) sum to 20 bits.',
    coCode: 'CO4',
    btl: 'BTL2',
    sourceTag: 'CIE-2 LAQ #2'
  },
  {
    id: 'q-w7-7',
    weekNumber: 7,
    unitNumber: 3,
    question: 'Using standard opcode mapping CAR ← 0 | opcode | 00, what decimal Control Memory address corresponds to 4-bit opcode 0010?',
    options: ['Address 2', 'Address 4', 'Address 8', 'Address 16'],
    correctIndex: 2,
    explanation: 'Prepending 0 and appending 00 yields 0 0010 00 = 0001000₂ = 8₁₀.',
    coCode: 'CO4',
    btl: 'BTL3',
    sourceTag: 'CIE-2 LAQ #2'
  },

  // WEEK 8 (Unit IV: I/O Interface, Handshaking, Priority Interrupt, DMA)
  {
    id: 'q-w8-1',
    weekNumber: 8,
    unitNumber: 4,
    question: 'How does Memory-Mapped I/O differ from Isolated I/O?',
    options: [
      'Memory-Mapped I/O uses separate IN/OUT instructions and a separate address space',
      'Memory-Mapped I/O places device registers inside the main memory address space and accesses them with regular LOAD/STORE instructions',
      'Isolated I/O does not require an I/O bus',
      'Memory-Mapped I/O can only be used with DMA'
    ],
    correctIndex: 1,
    explanation: 'Memory-mapped I/O shares the main memory address map so ordinary LOAD/STORE instructions access device registers; Isolated I/O uses separate IN/OUT opcodes.',
    coCode: 'CO5',
    btl: 'BTL2',
    sourceTag: 'Unit IV Quiz #40 & LAQ #4'
  },
  {
    id: 'q-w8-2',
    weekNumber: 8,
    unitNumber: 4,
    question: 'What is the main advantage of Asynchronous Two-Wire Handshaking over a single Strobe signal?',
    options: [
      'It requires a shared high-frequency global clock',
      'Both transmitter (Data Valid) and receiver (Data Accepted) confirm readiness, preventing data loss when speeds differ',
      'It transfers 64 words per clock edge',
      'It eliminates the data bus completely'
    ],
    correctIndex: 1,
    explanation: 'Two-wire handshaking adds an acknowledgment (Data Accepted) from the receiver so the sender knows when data has been safely latched.',
    coCode: 'CO5',
    btl: 'BTL2',
    sourceTag: 'Unit IV Quiz #34'
  },
  {
    id: 'q-w8-3',
    weekNumber: 8,
    unitNumber: 4,
    question: 'Which I/O data transfer mode keeps the CPU continuously busy polling the device READY status flag?',
    options: ['Programmed I/O', 'Interrupt-Driven I/O', 'Direct Memory Access (DMA)', 'Cycle Stealing'],
    correctIndex: 0,
    explanation: 'In Programmed I/O, the CPU runs a tight polling loop checking the status register until the peripheral becomes ready, wasting CPU cycles.',
    coCode: 'CO5',
    btl: 'BTL1',
    sourceTag: 'CIE-2 LAQ #4'
  },
  {
    id: 'q-w8-4',
    weekNumber: 8,
    unitNumber: 4,
    question: 'In Daisy-Chain Priority Interrupt hardware, how is priority determined among multiple requesting devices?',
    options: [
      'By alphabetical device name',
      'By physical position along the PI (Priority In) / PO (Priority Out) chain closest to the CPU',
      'Round-robin timer rotation',
      'By the device’s word count register'
    ],
    correctIndex: 1,
    explanation: 'In daisy chaining, the interrupt acknowledge signal passes serially from highest-priority device (closest to CPU) down the chain; the first requesting device blocks PO and places its vector on the bus.',
    coCode: 'CO5',
    btl: 'BTL2',
    sourceTag: 'Week 8 Lecture 45'
  },
  {
    id: 'q-w8-5',
    weekNumber: 8,
    unitNumber: 4,
    question: 'Which pair of control signals do the DMA Controller (DMAC) and CPU exchange to transfer bus ownership?',
    options: [
      'Strobe and Ready',
      'BR / HOLD (Bus Request) and BG / HLDA (Bus Grant)',
      'IF / ID and MEM / WB',
      'SBR and CAR'
    ],
    correctIndex: 1,
    explanation: 'The DMAC asserts Bus Request (BR/HOLD) and waits until the CPU completes its current bus cycle and returns Bus Grant (BG/HLDA).',
    coCode: 'CO5',
    btl: 'BTL2',
    sourceTag: 'CIE-2 SAQ #4'
  },
  {
    id: 'q-w8-6',
    weekNumber: 8,
    unitNumber: 4,
    question: 'Which three internal registers must the CPU initialize inside a DMA Controller before a block transfer begins?',
    options: [
      'PC, IR, and Accumulator',
      'Address Register, Word Count Register, and Control Register',
      'Tag Register, Set Register, and Word Register',
      'CAR, CDR, and SBR'
    ],
    correctIndex: 1,
    explanation: 'The CPU writes the starting memory address, number of words to transfer, and transfer direction/mode into the DMAC’s Address, Word Count, and Control registers.',
    coCode: 'CO5',
    btl: 'BTL2',
    sourceTag: 'CIE-2 SAQ #4'
  },
  {
    id: 'q-w8-7',
    weekNumber: 8,
    unitNumber: 4,
    question: 'In DMA Cycle Stealing mode, how does the DMAC use the system bus?',
    options: [
      'It locks the bus for the entire multi-megabyte block at once',
      'It transfers one word at a time by momentarily taking single bus cycles from the CPU',
      'It routes every byte through the CPU accumulator',
      'It disables main memory refresh'
    ],
    correctIndex: 1,
    explanation: 'Cycle stealing interleaves single-word DMA transfers during unused or stolen CPU bus cycles, balancing throughput without starving the CPU.',
    coCode: 'CO5',
    btl: 'BTL3',
    sourceTag: 'Week 8 Lecture 46'
  },

  // WEEK 9 (Unit IV: Memory Hierarchy, RAM/ROM, Cache Mapping)
  {
    id: 'q-w9-1',
    weekNumber: 9,
    unitNumber: 4,
    question: 'Which technology is used for CPU Cache vs. Main Memory, and why?',
    options: [
      'DRAM for Cache, SRAM for Main Memory',
      'SRAM (fast, no refresh) for Cache; DRAM (high density, lower cost, needs refresh) for Main Memory',
      'EPROM for Cache, SRAM for Main Memory',
      'Magnetic tape for Cache, DRAM for Main Memory'
    ],
    correctIndex: 1,
    explanation: 'SRAM uses 6-transistor flip-flops (~1–10 ns, expensive, ideal for cache), whereas DRAM uses 1 transistor + capacitor (~50–100 ns, cheap/dense, needs periodic refresh).',
    coCode: 'CO5',
    btl: 'BTL2',
    sourceTag: 'Quiz 01 #7 & CIE-2 LAQ #5'
  },
  {
    id: 'q-w9-2',
    weekNumber: 9,
    unitNumber: 4,
    question: 'What is the correct ordering of the Memory Hierarchy from fastest/smallest to slowest/largest?',
    options: [
      'Cache → Registers → Main Memory → Secondary Storage',
      'Registers → Cache (SRAM) → Main Memory (DRAM) → Secondary Storage (SSD/HDD) → Backup (Tape)',
      'Main Memory → Cache → Registers → Secondary Storage',
      'Registers → Secondary Storage → Cache → Main Memory'
    ],
    correctIndex: 1,
    explanation: 'Moving down Registers → Cache → Main Memory → SSD/HDD → Tape: capacity increases, cost per bit decreases, and access time increases.',
    coCode: 'CO5',
    btl: 'BTL1',
    sourceTag: 'Unit IV Quiz #35'
  },
  {
    id: 'q-w9-3',
    weekNumber: 9,
    unitNumber: 4,
    question: 'Which two principles of Locality of Reference explain why small caches achieve high hit rates?',
    options: [
      'Temporal locality (recently used items reused soon) and Spatial locality (nearby addresses accessed soon)',
      'Sequential locality and Asynchronous locality',
      'Static locality and Dynamic parity',
      'Vertical locality and Horizontal parity'
    ],
    correctIndex: 0,
    explanation: 'Loops exhibit temporal locality (re-executing instructions), while arrays and sequential code exhibit spatial locality (prefetching block neighbors).',
    coCode: 'CO5',
    btl: 'BTL2',
    sourceTag: 'CIE-2 LAQ #5'
  },
  {
    id: 'q-w9-4',
    weekNumber: 9,
    unitNumber: 4,
    question: 'Which ROM type is erased by exposure to ultraviolet (UV) light vs. electrical signals?',
    options: [
      'PROM is UV-erased; Mask ROM is electrically erased',
      'EPROM is UV-erased; EEPROM / Flash is electrically erased',
      'SRAM is UV-erased; DRAM is electrically erased',
      'EEPROM is UV-erased; EPROM is electrically erased'
    ],
    correctIndex: 1,
    explanation: 'EPROM has a quartz window for UV erasure, whereas EEPROM (and Flash) can be erased and reprogrammed electrically in-circuit.',
    coCode: 'CO5',
    btl: 'BTL1',
    sourceTag: 'Week 9 Lecture 48'
  },
  {
    id: 'q-w9-5',
    weekNumber: 9,
    unitNumber: 4,
    question: 'How does Direct Cache Mapping compare with Fully Associative Mapping in hardware cost and conflict misses?',
    options: [
      'Direct needs 1 comparator and has lowest cost, but suffers conflict misses; Associative needs 1 comparator per line and eliminates conflict misses',
      'Direct needs comparators on every line; Associative needs only 1 comparator',
      'Direct has the highest hit ratio; Associative has the lowest',
      'Both restrict a block to a single predetermined line'
    ],
    correctIndex: 0,
    explanation: 'Direct mapping checks 1 line (1 comparator) at fixed index (j mod L); Associative allows any block anywhere, requiring parallel CAM comparators on all lines.',
    coCode: 'CO5',
    btl: 'BTL3',
    sourceTag: 'CIE-2 LAQ #6'
  },
  {
    id: 'q-w9-6',
    weekNumber: 9,
    unitNumber: 4,
    question: 'What is the key difference between Write-Through and Write-Back cache write policies?',
    options: [
      'Write-Through updates both cache and main memory on every write; Write-Back updates only cache and sets a dirty bit until eviction',
      'Write-Back updates main memory immediately; Write-Through never updates main memory',
      'Write-Through works only for ROM',
      'Write-Back cannot be used with set-associative caches'
    ],
    correctIndex: 0,
    explanation: 'Write-Through keeps RAM continuously consistent at higher bus traffic cost; Write-Back defers RAM writes using a dirty bit to minimize memory bandwidth.',
    coCode: 'CO5',
    btl: 'BTL2',
    sourceTag: 'Week 9 Lecture 50'
  },
  {
    id: 'q-w9-7',
    weekNumber: 9,
    unitNumber: 4,
    question: 'In a k-way set-associative cache, what do the special cases k = 1 and k = (total cache lines) correspond to?',
    options: [
      'k = 1 is Fully Associative; k = total lines is Direct Mapped',
      'k = 1 is Direct Mapped; k = total lines is Fully Associative',
      'Both correspond to Direct Mapping',
      'k = 1 is Virtual Memory'
    ],
    correctIndex: 1,
    explanation: 'With 1 line per set (k = 1), every set is a single line (Direct Mapping); with 1 set containing all lines (k = L), any block fits anywhere (Fully Associative).',
    coCode: 'CO5',
    btl: 'BTL3',
    sourceTag: 'CIE-2 LAQ #6'
  },

  // WEEK 10 (Unit IV: Cache Calculations, Effective Access Time, Revision)
  {
    id: 'q-w10-1',
    weekNumber: 10,
    unitNumber: 4,
    question: 'A cache has hit ratio h = 0.95, cache access time t_c = 10 ns, and main memory access time t_m = 100 ns. What is the effective average access time T_avg?',
    options: ['10.5 ns', '14.5 ns', '19.5 ns', '55.0 ns'],
    correctIndex: 1,
    explanation: 'T_avg = h·t_c + (1 − h)·t_m = 0.95(10) + 0.05(100) = 9.5 + 5.0 = 14.5 ns.',
    coCode: 'CO5',
    btl: 'BTL3',
    sourceTag: 'CIE-2 SAQ #6 & LAQ #5'
  },
  {
    id: 'q-w10-2',
    weekNumber: 10,
    unitNumber: 4,
    question: 'A 64K-word main memory (16-bit address) uses 16-word blocks and a 128-line cache. How is the 16-bit address split in Fully Associative mapping?',
    options: [
      'Tag (8) + Word (8)',
      'Tag (12) + Word (4)',
      'Tag (5) + Index (7) + Word (4)',
      'Tag (6) + Set (6) + Word (4)'
    ],
    correctIndex: 1,
    explanation: 'Block size = 16 = 2⁴ → Word offset = 4 bits. Associative mapping has no line/set index, so Tag = 16 − 4 = 12 bits.',
    coCode: 'CO5',
    btl: 'BTL4',
    sourceTag: 'CIE-2 LAQ #6'
  },
  {
    id: 'q-w10-3',
    weekNumber: 10,
    unitNumber: 4,
    question: 'Using the same system (16-bit address, 16-word blocks, 128 cache lines), what is the address bit split for 2-Way Set-Associative mapping?',
    options: [
      'Tag (6) + Set (6) + Word (4)',
      'Tag (5) + Set (7) + Word (4)',
      'Tag (7) + Set (5) + Word (4)',
      'Tag (12) + Word (4)'
    ],
    correctIndex: 0,
    explanation: '2-way with 128 lines gives 128/2 = 64 sets = 2⁶ → Set = 6 bits, Word = 4 bits, Tag = 16 − 6 − 4 = 6 bits.',
    coCode: 'CO5',
    btl: 'BTL4',
    sourceTag: 'CIE-2 LAQ #6'
  },
  {
    id: 'q-w10-4',
    weekNumber: 10,
    unitNumber: 4,
    question: 'In a 64-set (2-way) set-associative cache, which set do main memory blocks 5, 69, and 133 all map to?',
    options: ['Set 0', 'Set 5', 'Set 64', 'Set 1'],
    correctIndex: 1,
    explanation: 'Block j maps to set (j mod 64): 5 mod 64 = 5, 69 mod 64 = 5, 133 mod 64 = 5. Two of them can coexist in Way 0 and Way 1 without conflict.',
    coCode: 'CO5',
    btl: 'BTL3',
    sourceTag: 'CIE-2 LAQ #6'
  },
  {
    id: 'q-w10-5',
    weekNumber: 10,
    unitNumber: 4,
    question: 'For a Direct-Mapped cache with 128 lines, 16-word blocks, and 16-bit memory addresses, how many bits form the Tag, Line, and Word fields?',
    options: [
      'Tag (5) + Line (7) + Word (4)',
      'Tag (6) + Line (6) + Word (4)',
      'Tag (4) + Line (8) + Word (4)',
      'Tag (7) + Line (5) + Word (4)'
    ],
    correctIndex: 0,
    explanation: '128 lines = 2⁷ → Line index = 7 bits, Word = 4 bits, Tag = 16 − 7 − 4 = 5 bits.',
    coCode: 'CO5',
    btl: 'BTL4',
    sourceTag: 'Week 10 Worked Problem'
  },
  {
    id: 'q-w10-6',
    weekNumber: 10,
    unitNumber: 4,
    question: 'If a cache has hit ratio h = 0.90, cache access time t_c = 5 ns, and miss penalty (additional time to fetch block from RAM) is 50 ns, what is T_avg?',
    options: ['10 ns', '9.5 ns', '14.5 ns', '5.5 ns'],
    correctIndex: 0,
    explanation: 'Here miss access time t_m = t_c + penalty = 55 ns (or T_avg = t_c + (1−h)·penalty = 5 + 0.10(50) = 10 ns).',
    coCode: 'CO5',
    btl: 'BTL5',
    sourceTag: 'Week 10 Lecture 53'
  },
  {
    id: 'q-w10-7',
    weekNumber: 10,
    unitNumber: 4,
    question: 'Which cache replacement policy evicts the block that has gone unused for the longest time?',
    options: ['FIFO (First-In, First-Out)', 'LRU (Least Recently Used)', 'Write-Through', 'Direct Mapping'],
    correctIndex: 1,
    explanation: 'LRU tracks recency of access and replaces the least recently used block in the target set, directly exploiting temporal locality.',
    coCode: 'CO5',
    btl: 'BTL2',
    sourceTag: 'Week 10 Lecture 54'
  },

  // WEEK 11 (Unit V: RISC vs CISC, Pipelining, Speedup, Pipeline Hazards)
  {
    id: 'q-w11-1',
    weekNumber: 11,
    unitNumber: 5,
    question: 'Which set of traits accurately characterizes a RISC processor compared to CISC?',
    options: [
      'Variable-length instructions, microprogrammed control, few registers',
      'Fixed-length instructions, hardwired control, Load/Store-only memory access, large register file',
      'Memory-to-memory arithmetic, slow multi-cycle decoding',
      'Higher transistor count in the control unit than CISC'
    ],
    correctIndex: 1,
    explanation: 'RISC (ARM, MIPS, RISC-V) favors simple fixed-length instructions, hardwired control, large register files, and Load/Store memory discipline.',
    coCode: 'CO6',
    btl: 'BTL2',
    sourceTag: 'CIE-2 SAQ #7 & ST-4 #1'
  },
  {
    id: 'q-w11-2',
    weekNumber: 11,
    unitNumber: 5,
    question: 'A 4-stage pipeline executes n = 100 instructions. How many clock cycles does the pipelined vs. non-pipelined processor require, and what is the speedup?',
    options: [
      '103 cycles vs. 400 cycles; Speedup ≈ 3.88',
      '100 cycles vs. 400 cycles; Speedup = 4.00',
      '104 cycles vs. 400 cycles; Speedup = 3.85',
      '400 cycles vs. 103 cycles; Speedup = 0.25'
    ],
    correctIndex: 0,
    explanation: 'Non-pipelined = n·k = 100×4 = 400 cycles. Pipelined = k + n − 1 = 4 + 100 − 1 = 103 cycles. Speedup = 400/103 ≈ 3.88.',
    coCode: 'CO6',
    btl: 'BTL3',
    sourceTag: 'CIE-2 LAQ #7'
  },
  {
    id: 'q-w11-3',
    weekNumber: 11,
    unitNumber: 5,
    question: 'How does pipelining improve processor performance?',
    options: [
      'It reduces the execution latency of a single isolated instruction',
      'It increases instruction throughput by overlapping stages of multiple instructions simultaneously',
      'It eliminates the need for clock signals',
      'It replaces SRAM caches with magnetic tape'
    ],
    correctIndex: 1,
    explanation: 'Once the pipeline is full, one instruction completes every clock cycle (higher throughput), while each individual instruction still takes k cycles (latency unchanged).',
    coCode: 'CO6',
    btl: 'BTL2',
    sourceTag: 'CIE-2 SAQ #8'
  },
  {
    id: 'q-w11-4',
    weekNumber: 11,
    unitNumber: 5,
    question: 'Consider: ADD R1, R2, R3 followed immediately by SUB R4, R1, R5 in a 5-stage pipeline. What type of hazard is this?',
    options: [
      'Structural hazard',
      'RAW (Read After Write) true data hazard',
      'WAR (Write After Read) anti-dependency',
      'Control (branch) hazard'
    ],
    correctIndex: 1,
    explanation: 'SUB attempts to read R1 before ADD has written R1 back in WB—this is a classic RAW true data dependency.',
    coCode: 'CO6',
    btl: 'BTL3',
    sourceTag: 'CIE-2 SAQ #9 & LAQ #9'
  },
  {
    id: 'q-w11-5',
    weekNumber: 11,
    unitNumber: 5,
    question: 'Even with full EX/MEM and MEM/WB data forwarding enabled, how many stall cycles remain for a Load-Use hazard (LW R1, 0(R2) → ADD R4, R1, R5)?',
    options: ['0 stall cycles', '1 stall cycle', '2 stall cycles', '3 stall cycles'],
    correctIndex: 1,
    explanation: 'Load data becomes available only after the MEM stage completes (T4), whereas ADD needs it at the start of EX (T4), requiring 1 mandatory stall cycle.',
    coCode: 'CO6',
    btl: 'BTL4',
    sourceTag: 'CIE-2 LAQ #9'
  },
  {
    id: 'q-w11-6',
    weekNumber: 11,
    unitNumber: 5,
    question: 'How do processors prevent Structural Hazards between Instruction Fetch (IF) and Memory Access (MEM) stages?',
    options: [
      'By disabling pipelining during branches',
      'By providing separate Instruction and Data caches (Harvard-style split L1 cache)',
      'By inserting 4 NOPs after every instruction',
      'By removing the WB stage'
    ],
    correctIndex: 1,
    explanation: 'Separate L1 Instruction and Data memories/caches allow IF and MEM stages to access memory concurrently in the same clock cycle without contention.',
    coCode: 'CO6',
    btl: 'BTL2',
    sourceTag: 'CIE-2 LAQ #8 & Unit V Quiz #44'
  },
  {
    id: 'q-w11-7',
    weekNumber: 11,
    unitNumber: 5,
    question: 'Which techniques mitigate Control (Instruction) Hazards caused by conditional branch instructions?',
    options: [
      'Booth recoding and Non-restoring division',
      'Branch prediction, delayed branching, and pipeline flushing',
      'Gray code and Hamming parity bits',
      'Write-through caching only'
    ],
    correctIndex: 1,
    explanation: 'Since branch outcomes are resolved in EX/MEM, hardware uses branch prediction (speculative fetch), compiler delayed-branch slots, or flushes mispredicted instructions.',
    coCode: 'CO6',
    btl: 'BTL3',
    sourceTag: 'Unit V Quiz #53 & CIE-2 LAQ #8'
  },

  // WEEK 12 (Unit V: Datapath/Control Considerations, Superscalar Operation)
  {
    id: 'q-w12-1',
    weekNumber: 12,
    unitNumber: 5,
    question: 'What is the purpose of inserting inter-stage pipeline registers (IF/ID, ID/EX, EX/MEM, MEM/WB)?',
    options: [
      'To replace main DRAM',
      'To isolate and latch each stage’s instruction, operands, ALU result, and control signals cleanly at every clock edge',
      'To hold BIOS firmware permanently',
      'To slow down the CPU clock intentionally'
    ],
    correctIndex: 1,
    explanation: 'Pipeline registers hold per-instruction data and decoded control bits between stages so five different instructions can occupy IF, ID, EX, MEM, and WB simultaneously.',
    coCode: 'CO6',
    btl: 'BTL2',
    sourceTag: 'CIE-2 LAQ #8'
  },
  {
    id: 'q-w12-2',
    weekNumber: 12,
    unitNumber: 5,
    question: 'In a 5-stage pipelined control unit, which stage generates the control signals and which signals are consumed in MEM and WB?',
    options: [
      'Decoded in WB; Branch/MemRead/MemWrite used in IF',
      'Decoded in ID; MEM consumes Branch, MemRead, MemWrite while WB consumes RegWrite, MemtoReg',
      'Decoded in EX; ALUOp used in WB',
      'Decoded in MEM; RegDst used in IF'
    ],
    correctIndex: 1,
    explanation: 'The Main Control Unit decodes the opcode once in ID and propagates EX (RegDst, ALUOp, ALUSrc), MEM (Branch, MemRead, MemWrite), and WB (RegWrite, MemtoReg) forward through pipeline registers.',
    coCode: 'CO6',
    btl: 'BTL3',
    sourceTag: 'CIE-2 LAQ #8'
  },
  {
    id: 'q-w12-3',
    weekNumber: 12,
    unitNumber: 5,
    question: 'Why must the destination register number (Rd) travel through ID/EX → EX/MEM → MEM/WB alongside the data?',
    options: [
      'So the WB stage writes the result back to the correct instruction’s destination register rather than the instruction currently in ID',
      'To compute the cache tag bits',
      'To trigger DMA bus grants',
      'To update the Program Counter'
    ],
    correctIndex: 0,
    explanation: 'By the time an instruction reaches WB, a much newer instruction is in ID; carrying Rd through the pipeline registers ensures WB targets the right register.',
    coCode: 'CO6',
    btl: 'BTL4',
    sourceTag: 'CIE-2 LAQ #8'
  },
  {
    id: 'q-w12-4',
    weekNumber: 12,
    unitNumber: 5,
    question: 'How does the register file avoid a structural/data hazard when one instruction is in WB and the third instruction after it is in ID during the same cycle?',
    options: [
      'By disabling writes completely',
      'By writing in the first half of the clock cycle and reading in the second half',
      'By stalling for 3 cycles',
      'By storing registers in secondary disk'
    ],
    correctIndex: 1,
    explanation: 'Split-cycle register file timing (write on first half-cycle, read on second half-cycle) guarantees ID reads the freshly written value with zero stall.',
    coCode: 'CO6',
    btl: 'BTL3',
    sourceTag: 'CIE-2 LAQ #9'
  },
  {
    id: 'q-w12-5',
    weekNumber: 12,
    unitNumber: 5,
    question: 'What defines a Superscalar processor?',
    options: [
      'A single-stage processor with no pipeline',
      'A CPU with multiple parallel execution pipelines capable of issuing more than one instruction per clock cycle (IPC > 1)',
      'A processor that executes only 0-address stack instructions',
      'A processor using only microprogrammed ROM without registers'
    ],
    correctIndex: 1,
    explanation: 'Superscalar processors replicate functional units (ALUs, FPUs, Load/Store) to exploit Instruction-Level Parallelism (ILP) and retire multiple instructions per clock.',
    coCode: 'CO6',
    btl: 'BTL2',
    sourceTag: 'Unit V Quiz #49, #58 & ST-4 #4'
  },
  {
    id: 'q-w12-6',
    weekNumber: 12,
    unitNumber: 5,
    question: 'Which hardware technique removes false WAR (anti) and WAW (output) data dependencies in out-of-order superscalar pipelines?',
    options: [
      'Register Renaming (mapping architectural registers to fresh physical registers)',
      'Inserting 2’s complement subtractors',
      'Using level-triggered SR latches',
      'Switching from Isolated to Memory-Mapped I/O'
    ],
    correctIndex: 0,
    explanation: 'WAR and WAW are name dependencies caused by reusing register identifiers; mapping each write to a distinct physical register removes them.',
    coCode: 'CO6',
    btl: 'BTL4',
    sourceTag: 'CIE-2 LAQ #9'
  },
  {
    id: 'q-w12-7',
    weekNumber: 12,
    unitNumber: 5,
    question: 'Which ISA characteristic most hinders efficient instruction pipelining?',
    options: [
      'Fixed-length 32-bit instructions',
      'Uniform register operand bit positions',
      'Variable-length instructions with complex multi-step memory addressing and implicit condition-code side effects',
      'Dedicated LOAD/STORE instructions'
    ],
    correctIndex: 2,
    explanation: 'Variable-length encodings and implicit side-effects complicate instruction fetch alignment, decode timing, and out-of-order hazard detection.',
    coCode: 'CO6',
    btl: 'BTL3',
    sourceTag: 'Week 12 Lecture 61'
  }
];
