import { CourseOutcome, UnitInfo, WeekModule } from '../types/curriculum';

export const COURSE_META = {
  code: 'U24EC304',
  title: 'Digital Electronics & Computer Organization',
  shortTitle: 'DECO',
  semester: 'B.E. Semester III (CSM & AIML)',
  academicYear: '2026–2027',
  faculty: 'Dr. Abdul Mateen Ahmed',
  institution: 'Lords Institute of Engineering & Technology',
  credits: 3,
  cieMarks: 40,
  seeMarks: 60,
  totalLectures: 64,
  totalWeeks: 12
};

export const COURSE_OUTCOMES: CourseOutcome[] = [
  {
    code: 'C31.1',
    unitNumbers: [1],
    description:
      'Illustrate the functional organization and operational concepts of a digital computer, and perform number system conversions and binary arithmetic operations.',
    btl: 'BTL 3 (Apply)',
    competency: '10.1 — Computer functional units, number base conversions, and binary arithmetic'
  },
  {
    code: 'C31.2',
    unitNumbers: [2],
    description:
      'Simplify Boolean expressions using algebraic techniques and Karnaugh maps, and design combinational and sequential logic circuits.',
    btl: 'BTL 6 (Create)',
    competency: '11.1 — Switching function minimization and combinational/sequential design'
  },
  {
    code: 'C31.3',
    unitNumbers: [3],
    description:
      'Apply binary arithmetic algorithms for multiplication and division, and analyze instruction sets, instruction formats, and addressing modes.',
    btl: 'BTL 4 (Analyze)',
    competency: '4.2 — Multiplication/division algorithms and ISA / addressing mode analysis'
  },
  {
    code: 'C31.4',
    unitNumbers: [3],
    description:
      'Formulate register transfer and micro-operations, and analyze the design and address sequencing of a microprogrammed control unit.',
    btl: 'BTL 4 (Analyze)',
    competency: '4.2 — Register transfer micro-operations and microprogrammed control sequencing'
  },
  {
    code: 'C31.5',
    unitNumbers: [4],
    description:
      'Analyze input-output data transfer mechanisms and evaluate memory hierarchy, cache mapping techniques, and storage systems.',
    btl: 'BTL 5 (Evaluate)',
    competency: '7.1 — I/O transfer modes, memory hierarchy, cache mapping, and storage'
  },
  {
    code: 'C31.6',
    unitNumbers: [5],
    description:
      'Differentiate between RISC and CISC architectures and analyze pipelining concepts, pipeline hazards, and superscalar execution.',
    btl: 'BTL 4 (Analyze)',
    competency: '7.1 — RISC vs. CISC comparison, pipelining, hazards, and superscalar ILP'
  }
];

export const UNITS: UnitInfo[] = [
  {
    unitNumber: 1,
    roman: 'I',
    title: 'Basic Structure of Computers & Data Representation',
    subtitle: 'Functional Units, Bus Structures, Performance, Number Systems, Complements & Binary Codes',
    coCode: 'CO1 · C31.1',
    lectureRange: 'L1 – L15',
    weeks: [1, 2, 3],
    summary:
      'Establishes how a stored-program Von Neumann computer coordinates Input, Output, Memory, ALU, and Control Unit across system buses, then masters radix conversions, IEEE 754 floating-point encoding, signed arithmetic, and error-detecting binary codes.',
    textbooks: ['Carl Hamacher (5th Ed.)', 'M. Morris Mano (3rd Ed.)', 'A. Anand Kumar']
  },
  {
    unitNumber: 2,
    roman: 'II',
    title: 'Switching Theory & Digital Logic Circuits',
    subtitle: 'Boolean Algebra, Universal Gates, K-Maps, Combinational & Sequential Circuits',
    coCode: 'CO2 · C31.2',
    lectureRange: 'L16 – L28',
    weeks: [4, 5],
    summary:
      'Covers Boolean axioms, De Morgan and Consensus reductions, canonical SOP/POS forms, 2/3/4-variable Karnaugh Maps, adders, sequential flip-flops, registers, counters, decoders, plus faculty-identified gap circuits (Subtractor, Comparator, Encoder, MUX, DEMUX).',
    textbooks: ['A. Anand Kumar (STLD)', 'M. Morris Mano (3rd Ed.)']
  },
  {
    unitNumber: 3,
    roman: 'III',
    title: 'Computer Arithmetic & Basic Processing Unit',
    subtitle: 'Booth & Division Algorithms, ISA Formats, Addressing Modes, RTL & Microprogrammed Control',
    coCode: 'CO3 · C31.3 / C31.4',
    lectureRange: 'L29 – L41',
    weeks: [6, 7],
    summary:
      'Examines signed hardware multiplication and restoring/non-restoring division, instruction formats, addressing modes, the 6-step instruction cycle, Register Transfer Language (RTL) micro-operations, and Control Memory address sequencing.',
    textbooks: ['M. Morris Mano (3rd Ed.)', 'Carl Hamacher (5th Ed.)']
  },
  {
    unitNumber: 4,
    roman: 'IV',
    title: 'Input/Output & Memory Organization',
    subtitle: 'I/O Interface, Priority Interrupt, DMA, Memory Hierarchy, RAM/ROM & Cache Mapping',
    coCode: 'CO4 · C31.5',
    lectureRange: 'L42 – L55',
    weeks: [8, 9, 10],
    summary:
      'Details peripheral interfacing, synchronous vs. asynchronous handshaking, programmed/interrupt/DMA transfers, SRAM/DRAM/ROM technologies, locality of reference, and Direct, Associative, and k-Way Set-Associative cache mapping.',
    textbooks: ['M. Morris Mano (3rd Ed.)', 'Carl Hamacher (5th Ed.)', 'William Stallings (6th Ed.)']
  },
  {
    unitNumber: 5,
    roman: 'V',
    title: 'Pipelining & RISC/CISC Architectures',
    subtitle: 'RISC vs. CISC, Pipeline Stages & Speedup, Data/Control Hazards, Forwarding & Superscalar ILP',
    coCode: 'CO5 · C31.6',
    lectureRange: 'L56 – L64',
    weeks: [11, 12],
    summary:
      'Contrasts CISC microcoded design against RISC load/store regularity, derives pipeline speedup, resolves Structural, RAW/WAR/WAW Data, and Control hazards via forwarding and prediction, and introduces superscalar instruction-level parallelism.',
    textbooks: ['Carl Hamacher (5th Ed.)', 'William Stallings (6th Ed.)', 'Murdocca & Heuring']
  }
];

export const WEEKLY_CURRICULUM: WeekModule[] = [
  {
    weekNumber: 1,
    unitNumber: 1,
    title: 'Basic Structure of Computers, Buses & Performance',
    lectureRange: 'L1 – L5',
    coCode: 'CO1',
    btlFocus: 'BTL 1 – BTL 3',
    overview:
      'Introduces the five functional units of a digital computer, Von Neumann stored-program execution, system bus lines, system vs. application software, performance metrics, and multiprocessor vs. multicomputer architectures.',
    lessons: [
      { lectureNo: 1, topic: 'Introduction to DECO: COs, POs, and PSOs', btl: 'BTL1', method: 'Chalk & Talk / PPT', reference: 'SR2, W1' },
      { lectureNo: 2, topic: 'Basic Structure of Computers Introduction & Von Neumann Model', btl: 'BTL2', method: 'Chalk & Talk / PPT', reference: 'SR2, W1' },
      { lectureNo: 3, topic: 'Five Functional Units (Input, Output, Memory, ALU, Control)', btl: 'BTL3', method: 'Chalk & Talk / PPT', reference: 'SR2, W1' },
      { lectureNo: 4, topic: 'Basic Operational Concepts (PC, MAR, MDR, IR), Bus Structures & Software', btl: 'BTL3', method: 'Chalk & Talk / PPT', reference: 'SR2, W1' },
      { lectureNo: 5, topic: 'Performance Equations, Multiprocessors & Multicomputers', btl: 'BTL3', method: 'Chalk & Talk / PPT', reference: 'SR2, W1' }
    ],
    concepts: [
      {
        id: 'w1-c1',
        weekNumber: 1,
        unitNumber: 1,
        title: 'Five Functional Units & Von Neumann Architecture',
        kicker: 'L2–L3 · Core Architecture',
        summary:
          'Every stored-program computer coordinates five hardware units over a single shared memory space holding both program instructions and operand data.',
        keyPoints: [
          'Input Unit converts external data (keyboard, sensor) into binary words; Output Unit delivers processed results.',
          'Memory Unit stores instructions and data in primary RAM (fast, volatile) and secondary storage (non-volatile).',
          'Arithmetic Logic Unit (ALU) executes arithmetic (+, −, ×, ÷) and logic (AND, OR, NOT) operations on registers.',
          'Control Unit (CU) acts as the nerve center, generating timing signals that coordinate fetch, decode, and execute.',
          'Von Neumann Bottleneck: sharing one memory bus for both instructions and data caps CPU throughput.'
        ],
        workedExample: {
          prompt: 'Trace what happens inside CPU registers when executing LOAD R1, [5000] followed by ADD R1, R2.',
          solution:
            '1) PC → MAR fetches instruction into MDR → IR. 2) CU decodes LOAD, sends 5000 to MAR, reads M[5000] into MDR → R1. 3) PC increments. 4) Next instruction adds R1 + R2 inside the ALU and latches the result into R1.'
        },
        examTip: 'Always pair Input, Output, Memory, ALU, and CU with the four operational registers: PC, IR, MAR, and MDR.'
      },
      {
        id: 'w1-c2',
        weekNumber: 1,
        unitNumber: 1,
        title: 'System Bus Structures & Software Layers',
        kicker: 'L4 · Interconnects & System Software',
        summary:
          'A system bus is a shared communication pathway connecting CPU, memory, and I/O modules, managed at runtime by system software.',
        keyPoints: [
          'Data Bus (bidirectional): carries instruction opcodes and operand words; width (e.g. 32/64 bits) sets word size.',
          'Address Bus (unidirectional from CPU): selects the target memory cell or I/O port; k lines address 2^k locations.',
          'Control Bus (bidirectional timing lines): carries Read/Write, Clock, Reset, Interrupt Request, and DMA Grant signals.',
          'System Software (OS, compiler, assembler, linker, loader) manages hardware resources; Application Software serves end-user tasks.'
        ],
        formulas: [
          { label: 'Addressable Memory Capacity', expression: 'Locations = 2^k  (for k address bus lines)' }
        ],
        examTip: 'Remember directionality: Address Bus is unidirectional (CPU → Memory/IO), while Data Bus is bidirectional.'
      },
      {
        id: 'w1-c3',
        weekNumber: 1,
        unitNumber: 1,
        title: 'Processor Performance, Multiprocessors & Multicomputers',
        kicker: 'L5 · Performance & Parallelism',
        summary:
          'Computer performance is governed by clock rate, CPI, and instruction count, while parallel scaling splits into shared-memory vs. distributed-memory topologies.',
        keyPoints: [
          'Basic Performance Equation: T = (N × S) / R, where N = dynamic instruction count, S = average cycles per instruction (CPI), R = clock rate.',
          'Throughput measures tasks completed per unit time; Latency (response time) measures start-to-finish duration of one task.',
          'Multiprocessors (tightly coupled): multiple CPUs share a single global physical memory space (UMA/NUMA).',
          'Multicomputers (loosely coupled): independent processor-memory nodes exchange messages over an interconnection network.'
        ],
        formulas: [
          { label: 'Execution Time', expression: 'T = (N × CPI) / f_clk = N × CPI × T_clk' },
          { label: 'Speedup', expression: 'Speedup(A over B) = ExecutionTime_B / ExecutionTime_A' }
        ],
        examTip: 'Distinguish Multiprocessor (shared address space) vs. Multicomputer (private local memories + message passing).'
      }
    ]
  },

  {
    weekNumber: 2,
    unitNumber: 1,
    title: 'Number Systems, Base Conversions & Floating-Point Representation',
    lectureRange: 'L6 – L10',
    coCode: 'CO1',
    btlFocus: 'BTL 2 – BTL 3',
    overview:
      'Covers positional number systems (Binary, Octal, Decimal, Hexadecimal), integer and fractional radix conversions, fixed-point scaling, and IEEE 754 single/double-precision floating-point encoding.',
    lessons: [
      { lectureNo: 6, topic: 'Data Representation: Binary Numbers & Fixed-Point Representation', btl: 'BTL2', method: 'Chalk & Talk / PPT', reference: 'SR2, W1' },
      { lectureNo: 7, topic: 'Floating-Point Representation (IEEE 754 Single & Double Precision)', btl: 'BTL3', method: 'Chalk & Talk / PPT', reference: 'SR2, W1' },
      { lectureNo: 8, topic: 'Number Base Conversions: Binary, Octal & Hexadecimal', btl: 'BTL2', method: 'Chalk & Talk / PPT', reference: 'SR2, W1' },
      { lectureNo: 9, topic: 'Worked Examples 1–5: Radix & Fractional Conversions', btl: 'BTL3', method: 'Chalk & Talk / PPT', reference: 'SR2, W1' },
      { lectureNo: 10, topic: 'Worked Examples 6–10: IEEE 754 & Cross-Base Conversions', btl: 'BTL2', method: 'Chalk & Talk / PPT', reference: 'SR2, W1' }
    ],
    concepts: [
      {
        id: 'w2-c1',
        weekNumber: 2,
        unitNumber: 1,
        title: 'Positional Number Systems & Radix Conversions',
        kicker: 'L6, L8–L10 · Base Conversion',
        summary:
          'Any positional number in base r evaluates as weighted powers of r; integer parts convert via repeated division while fractional parts convert via repeated multiplication.',
        keyPoints: [
          'Binary (base 2), Octal (base 8 = 2³ → 3 bits/digit), Decimal (base 10), Hexadecimal (base 16 = 2⁴ → 4 bits/digit).',
          'Decimal → Base r: Divide integer part by r (read remainders bottom-to-top); multiply fraction by r (read carries top-to-bottom).',
          'Binary ↔ Octal: Group 3 bits outward from the radix point; Binary ↔ Hex: Group 4 bits outward from the radix point.',
          'Unique values representable with n bits = 2ⁿ (e.g., 8 bits → 256 values, 0 to 255 unsigned).'
        ],
        workedExample: {
          prompt: 'Convert (163.875)₁₀ to Binary and (11001101.0101)₂ to Hexadecimal.',
          solution:
            '163₁₀ = 128+32+2+1 = 10100011₂. Fraction: 0.875×2 = 1.75 (1), 0.75×2 = 1.50 (1), 0.50×2 = 1.00 (1) → .111₂. Result = 10100011.111₂. For hex: 1100 1101 . 0101 → C D . 5 = (CD.5)₁₆.'
        },
        examTip: 'Always pad leading zeros on the integer left and trailing zeros on the fraction right when grouping 3-bit octal or 4-bit hex digits.',
        labType: 'number-converter'
      },
      {
        id: 'w2-c2',
        weekNumber: 2,
        unitNumber: 1,
        title: 'Fixed-Point vs. IEEE 754 Floating-Point Representation',
        kicker: 'L6–L7 · Real Number Encoding',
        summary:
          'Fixed-point locks the binary point at a fixed position, trading range for simplicity, whereas IEEE 754 floating-point normalizes numbers into Sign, Biased Exponent, and Mantissa.',
        keyPoints: [
          'IEEE 754 Single Precision (32-bit): 1-bit Sign (S) | 8-bit Biased Exponent (E = e + 127) | 23-bit Fraction/Mantissa (M) with implicit leading 1.',
          'IEEE 754 Double Precision (64-bit): 1-bit Sign | 11-bit Biased Exponent (bias = 1023) | 52-bit Mantissa.',
          'Value formula (normalized): (-1)^S × (1.M)₂ × 2^(E − bias).'
        ],
        formulas: [
          { label: 'Single Precision (32-bit)', expression: 'Value = (-1)^S × (1 + M) × 2^(E - 127)' },
          { label: 'Double Precision (64-bit)', expression: 'Value = (-1)^S × (1 + M) × 2^(E - 1023)' }
        ],
        workedExample: {
          prompt: 'Encode +12.5₁₀ in IEEE 754 Single Precision (32-bit).',
          solution:
            '+12.5₁₀ = 1100.1₂ = 1.1001₂ × 2³. Sign S = 0 (positive). Biased Exponent E = 3 + 127 = 130 = 10000010₂. Mantissa M (drop leading 1.) = 10010000000000000000000₂.'
        },
        examTip: 'Never forget to drop the implicit leading "1." before writing the 23-bit mantissa field in IEEE 754!',
        labType: 'number-converter'
      }
    ]
  },

  {
    weekNumber: 3,
    unitNumber: 1,
    title: 'Complements, Signed Arithmetic & Binary Codes',
    lectureRange: 'L11 – L15',
    coCode: 'CO1',
    btlFocus: 'BTL 2 – BTL 3',
    overview:
      'Covers r’s and (r−1)’s complements, signed number formats (Sign-Magnitude, 1’s, 2’s complement), signed overflow detection, and weighted/non-weighted/error-correcting binary codes.',
    lessons: [
      { lectureNo: 11, topic: 'Complements (1’s & 2’s) and Signed Binary Numbers', btl: 'BTL2', method: 'Chalk & Talk / PPT', reference: 'SR2, W1' },
      { lectureNo: 12, topic: 'Worked Examples 1–5: Complements & Signed Representation', btl: 'BTL2', method: 'Chalk & Talk / PPT', reference: 'SR2, W1' },
      { lectureNo: 13, topic: 'Arithmetic Addition/Subtraction & Binary Codes (BCD, Gray, Excess-3, Hamming)', btl: 'BTL3', method: 'Chalk & Talk / PPT', reference: 'SR3, W1' },
      { lectureNo: 14, topic: 'Worked Examples 1–5: Signed Subtraction & Code Conversions', btl: 'BTL2', method: 'Chalk & Talk / PPT', reference: 'SR3, W1' },
      { lectureNo: 15, topic: 'Worked Examples 6–10: Unit I Synthesis & Problem Drill', btl: 'BTL2', method: 'Chalk & Talk / PPT', reference: 'SR3, W1' }
    ],
    concepts: [
      {
        id: 'w3-c1',
        weekNumber: 3,
        unitNumber: 1,
        title: 'Complements & Signed Binary Arithmetic',
        kicker: 'L11–L13 · Arithmetic Encoding',
        summary:
          '2’s complement representation enables unified hardware addition/subtraction with a unique zero and a clean sign-bit overflow rule.',
        keyPoints: [
          '1’s Complement ((r−1)’s): invert every bit; requires end-around carry during subtraction and suffers from dual zeros (+0, −0).',
          '2’s Complement (r’s): invert all bits and add 1 (or copy bits from LSB up to the first 1, then invert the remaining higher bits).',
          'n-bit 2’s Complement Range: −2^(n−1) to +(2^(n−1) − 1), e.g., 8-bit = −128 to +127.',
          'Overflow Rule: Signed overflow occurs iff carry-into sign bit ≠ carry-out of sign bit (V = C_in ⊕ C_out).'
        ],
        formulas: [
          { label: '2’s Complement Range', expression: '[-2^(n-1), +2^(n-1) - 1]' },
          { label: 'Signed Overflow Flag', expression: 'V = C_(n) ⊕ C_(n-1)' }
        ],
        workedExample: {
          prompt: 'Represent −18 in 8-bit signed 2’s complement and compute +19 − 43.',
          solution:
            '+18 = 00010010₂ → 1’s comp = 11101101 → +1 = 11101110₂ (−18). For +19 − 43 (8-bit): +19 = 00010011, +43 = 00101011 → −43 = 11010101. Sum = 11101000₂ (negative, 2’s comp = 00011000 = 24 → −24).'
        },
        examTip: 'Adding two numbers of opposite signs can NEVER cause signed overflow; overflow only happens when two same-sign numbers yield the opposite sign.',
        labType: 'number-converter'
      },
      {
        id: 'w3-c2',
        weekNumber: 3,
        unitNumber: 1,
        title: 'Binary Codes: BCD, Excess-3, Gray Code & Hamming Error Correction',
        kicker: 'L13–L15 · Digital Coding',
        summary:
          'Digital systems encode decimal digits, shaft positions, alphanumeric characters, and error-protected words using specialized binary mappings.',
        keyPoints: [
          'Weighted Codes (8421 BCD, 2421, 5211): Each decimal digit maps to a 4-bit nibble (1010–1111 are invalid in 8421 BCD).',
          'Excess-3: Non-weighted, self-complementing code formed by adding 0011 (3) to each BCD digit.',
          'Gray Code: Non-weighted unit-distance (reflective) code where adjacent numbers differ by only 1 bit—prevents glitches in rotary encoders.',
          'Alphanumeric Codes: 7-bit ASCII (128 chars), 8-bit EBCDIC, 16-bit/variable Unicode.',
          'Hamming Code Parity Bits r for m data bits satisfy 2^r ≥ m + r + 1; single-error correction requires minimum Hamming distance D_min ≥ 3.'
        ],
        formulas: [
          { label: 'Binary → Gray', expression: 'G_(n-1) = B_(n-1),  G_i = B_(i+1) ⊕ B_i' },
          { label: 'Gray → Binary', expression: 'B_(n-1) = G_(n-1),  B_i = B_(i+1) ⊕ G_i' },
          { label: 'Hamming Check Bits', expression: '2^r ≥ m + r + 1' }
        ],
        workedExample: {
          prompt: 'Convert binary 110101 to Gray code, and find check bits needed for 4-bit data.',
          solution:
            'Binary 110101 → G5=1, G4=1⊕1=0, G3=1⊕0=1, G2=0⊕1=1, G1=1⊕0=1, G0=0⊕1=1 → Gray 101111. For m=4 data bits, 2^r ≥ 4 + r + 1 → r=3 satisfies 8 ≥ 8 (Hamming(7,4)).'
        },
        examTip: 'Remember Excess-3 is self-complementing (its 9’s complement equals its bitwise 1’s complement), and Gray code changes exactly 1 bit per step.'
      }
    ]
  },

  {
    weekNumber: 4,
    unitNumber: 2,
    title: 'Boolean Algebra, Logic Gates & Universal Gate Implementations',
    lectureRange: 'L16 – L19',
    coCode: 'CO2',
    btlFocus: 'BTL 2 – BTL 3',
    overview:
      'Establishes switching algebra laws (De Morgan, Absorption, Consensus, Duality), basic and derived logic gates, universal gate proofs (NAND/NOR), and algebraic simplification.',
    lessons: [
      { lectureNo: 16, topic: 'Switching Theory & Digital Logic Circuits Introduction', btl: 'BTL2', method: 'Chalk & Talk / PPT', reference: 'SR3, W1' },
      { lectureNo: 17, topic: 'Boolean Algebra Laws, Duality & Switching Functions', btl: 'BTL3', method: 'Chalk & Talk / PPT', reference: 'SR3, W1' },
      { lectureNo: 18, topic: 'Basic Logic Functions & Gates (AND, OR, NOT, XOR, XNOR)', btl: 'BTL2', method: 'Chalk & Talk / PPT', reference: 'SR3, W1' },
      { lectureNo: 19, topic: 'Universal Logic Gates (NAND & NOR) & Reducing Boolean Expressions', btl: 'BTL2', method: 'Chalk & Talk / PPT', reference: 'SR3, W1' }
    ],
    concepts: [
      {
        id: 'w4-c1',
        weekNumber: 4,
        unitNumber: 2,
        title: 'Boolean Axioms, De Morgan’s Laws & Consensus Theorem',
        kicker: 'L16–L17 · Switching Algebra',
        summary:
          'Algebraic identities reduce literal counts and gate depth before hardware synthesis; every theorem has a dual obtained by swapping (+ ↔ ·) and (0 ↔ 1).',
        keyPoints: [
          'Absorption Law: A + A·B = A and A·(A + B) = A.',
          'Redundant Literal Rule: A + A\'·B = A + B and A·(A\' + B) = A·B.',
          'De Morgan’s Theorems: (A·B)\' = A\' + B\' and (A + B)\' = A\'·B\'.',
          'Consensus Theorem: A·B + A\'·C + B·C = A·B + A\'·C (the B·C term is redundant).',
          'Distributive Law over OR: A + B·C = (A + B)·(A + C) — unique to Boolean algebra, not ordinary arithmetic.'
        ],
        formulas: [
          { label: 'De Morgan First & Second', expression: '(AB)\' = A\' + B\'   |   (A + B)\' = A\'B\'' },
          { label: 'Consensus Theorem', expression: 'AB + A\'C + BC = AB + A\'C' },
          { label: 'Redundant Literal', expression: 'A + A\'B = A + B' }
        ],
        workedExample: {
          prompt: 'Simplify F = AB + A\'C + BC + AB\' algebraically.',
          solution:
            'By Consensus, drop BC → AB + A\'C + AB\'. Factor A from AB + AB\' = A(B + B\') = A(1) = A. Now F = A + A\'C. By Redundant Literal Rule, A + A\'C = A + C.'
        },
        examTip: 'Always check for A + A\'B = A + B and Consensus AB + A\'C + BC before expanding into minterms.'
      },
      {
        id: 'w4-c2',
        weekNumber: 4,
        unitNumber: 2,
        title: 'Basic, Derived & Universal Logic Gates (NAND / NOR)',
        kicker: 'L18–L19 · Gate Synthesis',
        summary:
          'AND, OR, NOT form a complete basis; XOR/XNOR test inequality/equality; NAND and NOR are individually universal gates capable of building any logic network.',
        keyPoints: [
          'XOR (A ⊕ B = A\'B + AB\'): outputs 1 when inputs differ (odd-parity detector).',
          'XNOR ((A ⊕ B)\' = AB + A\'B\'): outputs 1 when inputs match (1-bit equality comparator).',
          'NAND Universality: NOT = (A·A)\'; AND = ((AB)\')\' (2 NANDs); OR = (A\'·B\')\' (3 NANDs).',
          'NOR Universality: NOT = (A+A)\'; OR = ((A+B)\')\' (2 NORs); AND = (A\'+B\')\' (3 NORs).',
          'Two-level AND-OR (SOP) converts directly to NAND-NAND; two-level OR-AND (POS) converts directly to NOR-NOR.'
        ],
        workedExample: {
          prompt: 'How many 2-input NAND gates are needed to realize XOR (A ⊕ B)?',
          solution:
            'Using optimal cross-coupled NAND structure: G1 = (A·B)\', G2 = (A·G1)\', G3 = (B·G1)\', Y = (G2·G3)\' = A ⊕ B. Total = 4 NAND gates (versus 5 NOR gates for XOR).'
        },
        examTip: 'Memorize NAND gate counts: NOT=1, AND=2, OR=3, XOR=4; for NOR: NOT=1, OR=2, AND=3, XNOR=4, XOR=5.'
      }
    ]
  },

  {
    weekNumber: 5,
    unitNumber: 2,
    title: 'K-Maps, Combinational & Sequential Circuits + Gap Topics',
    lectureRange: 'L20 – L28',
    coCode: 'CO2',
    btlFocus: 'BTL 2 – BTL 6',
    milestone: 'Surprise Test 1 (after 1.5 Units)',
    overview:
      'Covers canonical SOP/POS forms, 2/3/4-variable Karnaugh Map minimization, Half/Full Adders, Flip-Flops, Shift Registers, Counters, Decoders, and the 5 faculty-identified Beyond-Syllabus Gap Circuits.',
    lessons: [
      { lectureNo: 20, topic: 'SOP, POS Forms & K-Maps (2, 3, and 4 Variable)', btl: 'BTL3', method: 'Chalk & Talk / PPT', reference: 'SR3, W1' },
      { lectureNo: 21, topic: 'K-Map Minimization Examples 1–5', btl: 'BTL2', method: 'Chalk & Talk / PPT', reference: 'SR3, W1' },
      { lectureNo: 22, topic: 'K-Map Minimization Examples 6–10 (incl. Don’t Cares)', btl: 'BTL2', method: 'Chalk & Talk / PPT, V1', reference: 'SR3, W1, V1' },
      { lectureNo: 23, topic: 'Combinational Circuits — Half Adder', btl: 'BTL2', method: 'Chalk & Talk / PPT', reference: 'SR3, W1' },
      { lectureNo: 24, topic: 'Combinational Circuits — Full Adder & Ripple Carry', btl: 'BTL3', method: 'Chalk & Talk / PPT', reference: 'SR3, W1' },
      { lectureNo: 25, topic: 'Surprise Test – 1 Assessment', btl: 'BTL2', method: 'Written Test', reference: 'Unit I & II' },
      { lectureNo: 26, topic: 'Sequential Circuits — Latches, Flip-Flops (SR, D, JK, T) & Registers', btl: 'BTL2', method: 'Chalk & Talk / PPT', reference: 'SR2, W1' },
      { lectureNo: 27, topic: 'Shift Registers & Binary Counters (Async/Sync)', btl: 'BTL3', method: 'Chalk & Talk / PPT', reference: 'SR2, W1' },
      { lectureNo: 28, topic: 'Decoders + Gap Topics (Subtractor, Comparator, Encoder, MUX, DEMUX)', btl: 'BTL2', method: 'Chalk & Talk / Lab Demo', reference: 'SR2, Mano' }
    ],
    concepts: [
      {
        id: 'w5-c1',
        weekNumber: 5,
        unitNumber: 2,
        title: 'SOP/POS Canonical Forms & Karnaugh Map Minimization',
        kicker: 'L20–L22 · Logic Minimization',
        summary:
          'Canonical minterms (Σm) and maxterms (ΠM) map onto Gray-ordered K-map grids (00, 01, 11, 10) where adjacent power-of-2 groups eliminate literals.',
        keyPoints: [
          'Minterm m_i = M_i\' (complement of maxterm); for n variables, absent minterms form the maxterm indices.',
          'Gray-code axis ordering (00, 01, 11, 10) ensures wrapping adjacency across opposite edges and corners.',
          'Group 1s in powers of 2 (1, 2, 4, 8, 16) for minimal SOP; group 0s for minimal POS.',
          'Don’t Care conditions (d / X) may be treated as 1s (SOP) or 0s (POS) only when they enlarge an Essential Prime Implicant (EPI).'
        ],
        workedExample: {
          prompt: 'Minimize F(A,B,C) = Σm(1, 2, 7) vs. F(A,B,C) = Σm(1, 3, 5, 7).',
          solution:
            'For Σm(1, 2, 7): cells 001, 010, 111 have no adjacent 1s → F = A\'B\'C + A\'BC\' + ABC. For Σm(1, 3, 5, 7): all four odd minterms form a quad where C = 1 → F = C.'
        },
        examTip: 'Always double-check column order 00, 01, 11, 10 (NOT 10 before 11!) and encircle Essential Prime Implicants first.',
        labType: 'kmap-logic'
      },
      {
        id: 'w5-c2',
        weekNumber: 5,
        unitNumber: 2,
        title: 'Half Adder, Full Adder & Combinational vs. Sequential Logic',
        kicker: 'L23–L24 · Arithmetic Building Blocks',
        summary:
          'Half and Full Adders form the datapath core of binary addition and 2’s complement subtraction.',
        keyPoints: [
          'Half Adder (2 inputs A, B): Sum S = A ⊕ B; Carry C = A·B.',
          'Full Adder (3 inputs A, B, C_in): Sum S = A ⊕ B ⊕ C_in; Carry C_out = A·B + C_in·(A ⊕ B) = AB + BC_in + AC_in.',
          'A Full Adder is built from 2 Half Adders + 1 OR gate; chaining n Full Adders forms an n-bit Ripple-Carry Adder.',
          'Combinational output = f(present inputs only); Sequential output = f(present inputs, stored state).'
        ],
        formulas: [
          { label: 'Half Adder', expression: 'S = A ⊕ B   |   C = A·B' },
          { label: 'Full Adder', expression: 'S = A ⊕ B ⊕ Cin   |   Cout = AB + Cin(A ⊕ B)' }
        ],
        examTip: 'A 3-input majority circuit ("outputs 1 when more 1s than 0s", i.e. Σm(3,5,6,7)) has the exact same equation as Full Adder Cout!'
      },
      {
        id: 'w5-c3',
        weekNumber: 5,
        unitNumber: 2,
        title: 'Flip-Flops, Shift Registers, Counters & Decoders',
        kicker: 'L26–L28 · Sequential Elements',
        summary:
          'Edge-triggered flip-flops store 1 bit cleanly without latch transparency, assembling into shift registers, binary counters, and n-to-2ⁿ decoders.',
        keyPoints: [
          'SR Flip-Flop: S=1, R=1 is forbidden; D Flip-Flop (Q_next = D) avoids invalid state; T Flip-Flop (Q_next = T ⊕ Q) divides clock frequency by 2.',
          'JK Flip-Flop: Q_next = JQ\' + K\'Q; J=K=1 toggles output. Master-Slave JK prevents the race-around condition.',
          'Shift Registers: SISO, SIPO, PISO, PIPO; n-bit serial shift takes n clocks to load.',
          'Counters: Ripple (asynchronous) vs. Synchronous; n flip-flops give MOD-2ⁿ states (e.g., 3 flip-flops → MOD-8, 000–111).',
          'n-to-2ⁿ Decoder activates exactly one output line per binary input (e.g., 3-to-8 decoder generates all 8 minterms).'
        ],
        formulas: [
          { label: 'JK Characteristic', expression: 'Q(t+1) = JQ\' + K\'Q' },
          { label: 'Modulus Bound', expression: 'MOD ≤ 2^n  (with n flip-flops)' }
        ],
        examTip: 'Remember: a Latch is level-triggered (transparent while Enable=1), whereas a Flip-Flop is edge-triggered (rising/falling clock).'
      },
      {
        id: 'w5-c4',
        weekNumber: 5,
        unitNumber: 2,
        title: 'Beyond-Syllabus Gaps: Subtractor, Comparator, Encoder, MUX & DEMUX',
        kicker: 'Faculty Gap Topics · CO2 Extension',
        summary:
          'Five essential combinational blocks identified by faculty as syllabus gaps—frequently tested in Viva, Assignments, and University exams.',
        keyPoints: [
          'Half/Full Subtractor: Half Subtractor Diff = A ⊕ B, Borrow = A\'·B; Full Subtractor Diff = A ⊕ B ⊕ Bin, Bout = A\'B + Bin(A ⊕ B)\'.',
          'Magnitude Comparator: Compares A and B to assert A>B, A=B (via XNORs), or A<B.',
          'Encoder / Priority Encoder: 2ⁿ inputs → n binary outputs (inverse of decoder); priority encoder resolves simultaneous active keys (e.g., keyboards).',
          'Multiplexer (MUX, 2ⁿ:1): Data selector using n select lines to route 1 of 2ⁿ inputs to Y (can implement any n+1 variable Boolean function).',
          'Demultiplexer (DEMUX, 1:2ⁿ): Data distributor routing 1 input to 1 of 2ⁿ outputs selected by n select lines.'
        ],
        formulas: [
          { label: 'Half Subtractor', expression: 'D = A ⊕ B   |   Bout = A\'·B' },
          { label: '2:1 MUX Output', expression: 'Y = S\'·I0 + S·I1' }
        ],
        examTip: 'Assignment 1 Q4 explicitly asks: "What is a multiplexer? Give applications" (data routing, parallel-to-serial conversion, Boolean function synthesis).'
      }
    ]
  },

  {
    weekNumber: 6,
    unitNumber: 3,
    title: 'Computer Arithmetic Algorithms, ISA Formats & Addressing Modes',
    lectureRange: 'L29 – L35',
    coCode: 'CO3',
    btlFocus: 'BTL 2 – BTL 3',
    milestone: 'CIE-1 Preparation & Unit I–III Doubt Clearance',
    overview:
      'Covers hardware multiplication (Booth’s signed algorithm), Restoring and Non-Restoring division, 0/1/2/3-address instruction formats, addressing modes, and the 6-step instruction cycle.',
    lessons: [
      { lectureNo: 29, topic: 'Computer Arithmetic & Basic Processing Unit Introduction', btl: 'BTL2', method: 'Chalk & Talk / PPT', reference: 'SR2, W1' },
      { lectureNo: 30, topic: 'Multiplication (Booth’s) & Division (Restoring / Non-Restoring) Algorithms', btl: 'BTL3', method: 'Chalk & Talk / PPT', reference: 'SR2, W1' },
      { lectureNo: 31, topic: 'Instruction Set Architecture (ISA) & Instruction Formats (0,1,2,3-Addr)', btl: 'BTL2', method: 'Chalk & Talk / PPT', reference: 'SR2, W1' },
      { lectureNo: 32, topic: 'Addressing Modes & Basic Machine Instructions (LOAD/STORE/ALU/Branch)', btl: 'BTL2', method: 'Chalk & Talk / PPT', reference: 'SR2, W5' },
      { lectureNo: 33, topic: 'CIE-1 Question Bank Problem Solving', btl: 'BTL3', method: 'Tutorial / QB', reference: 'Course QB' },
      { lectureNo: 34, topic: 'Unit I–III Mid-Term Revision', btl: 'BTL2', method: 'Revision Session', reference: 'SR2' },
      { lectureNo: 35, topic: 'Doubts Clearance & Instruction Cycle Walkthrough', btl: 'BTL2', method: 'Interactive Q&A', reference: 'SR2' }
    ],
    concepts: [
      {
        id: 'w6-c1',
        weekNumber: 6,
        unitNumber: 3,
        title: 'Booth’s Multiplication & Restoring vs. Non-Restoring Division',
        kicker: 'L30 · Hardware Arithmetic',
        summary:
          'Booth’s algorithm multiplies signed 2’s complement numbers uniformly without sign-correction steps; Non-Restoring division eliminates remainder restoration overhead.',
        keyPoints: [
          'Booth’s Bit-Pair Rule on (Q₀, Q₋₁): 10 → AC ← AC − M; 01 → AC ← AC + M; 00 or 11 → no arithmetic op; then Arithmetic Shift Right (AC, Q, Q₋₁).',
          'Restoring Division: Shift left (A, Q); A ← A − M; if A < 0, set Q₀ = 0 and restore A ← A + M; else Q₀ = 1.',
          'Non-Restoring Division: If A ≥ 0, shift left AQ then A ← A − M; if A < 0, shift left AQ then A ← A + M. Set Q₀ = 1 if new A ≥ 0 else 0. Restore A ← A + M only once at the very end if final A < 0.'
        ],
        workedExample: {
          prompt: 'Trace Booth’s rule for multiplying (−3) × (+2) in 4 bits (M = 1101, −M = 0011, Q = 0010, Q₋₁ = 0).',
          solution:
            'Init AC=0000, Q=0010, Q₋₁=0. Step1 (0,0): ashr → 0000 0001 0. Step2 (1,0): AC ← 0000+0011=0011, ashr → 0001 1000 1. Step3 (0,1): AC ← 0001+1101=1110, ashr → 1111 0100 0. Step4 (0,0): ashr → 1111 1010 0. Result AC|Q = 11111010₂ = −6.'
        },
        examTip: 'Remember Booth uses ARITHMETIC shift right (preserving sign bit of AC), whereas division uses LOGICAL shift left of (A, Q).'
      },
      {
        id: 'w6-c2',
        weekNumber: 6,
        unitNumber: 3,
        title: 'Instruction Formats & Addressing Modes',
        kicker: 'L31–L32 · Instruction Set Design',
        summary:
          'Instruction formats balance code density against hardware decoding speed, while addressing modes compute the Effective Address (EA) of operands flexibly.',
        keyPoints: [
          'Formats: 3-Address (ADD R1, R2, R3 — short program, long instruction), 2-Address (ADD R1, R2), 1-Address (Accumulator: ADD X), 0-Address (Stack: ADD).',
          'Immediate: Operand is embedded directly in instruction (e.g. MOV R1, #5).',
          'Direct: EA = Address field (1 memory access); Indirect: EA = M[Address] (2 memory accesses).',
          'Register: Operand inside CPU register (0 memory accesses); Register Indirect: EA = [Ri].',
          'Indexed (EA = X + [Ri]), Base-Displacement (EA = Base + Offset), PC-Relative (EA = PC + Offset, used for branches).'
        ],
        workedExample: {
          prompt: 'Compute Y = (A + B) × (C + D) in 3-address vs. 0-address (stack) format.',
          solution:
            '3-Addr: ADD R1,A,B; ADD R2,C,D; MUL Y,R1,R2 (3 instructions). Stack (0-Addr): PUSH A; PUSH B; ADD; PUSH C; PUSH D; ADD; MUL; POP Y (8 instructions).'
        },
        examTip: 'Memorize the 6-step Instruction Cycle: Fetch → Decode → Fetch Operands → Execute → Write Back → Update PC.'
      }
    ]
  },

  {
    weekNumber: 7,
    unitNumber: 3,
    title: 'Register Transfer Language (RTL) & Microprogrammed Control',
    lectureRange: 'L36 – L41',
    coCode: 'CO3 / CO4',
    btlFocus: 'BTL 2 – BTL 3',
    milestone: 'Surprise Test 2 (After Unit III)',
    overview:
      'Formalizes register transfers over common buses, arithmetic/logic/shift micro-operations, 20-bit microinstruction structure, and Control Memory address sequencing vs. hardwired control.',
    lessons: [
      { lectureNo: 36, topic: 'Register Transfer Language & Common Bus System', btl: 'BTL2', method: 'Chalk & Talk / PPT', reference: 'SR2, W1' },
      { lectureNo: 37, topic: 'Register Transfer & Control Function Notation (T: R2 ← R1)', btl: 'BTL3', method: 'Chalk & Talk / PPT', reference: 'SR2, W1' },
      { lectureNo: 38, topic: 'Arithmetic, Logic & Shift Micro-operations (shl, shr, ashr, cil, cir)', btl: 'BTL2', method: 'Chalk & Talk / PPT', reference: 'SR2, W1' },
      { lectureNo: 39, topic: 'Microprogrammed Control: Control Memory (ROM), CAR & Address Sequencing', btl: 'BTL2', method: 'Chalk & Talk / PPT', reference: 'SR2, W1' },
      { lectureNo: 40, topic: 'Microprogram Example 1 (Fetch Routine & Opcode Mapping)', btl: 'BTL3', method: 'Chalk & Talk / PPT', reference: 'SR2, W1' },
      { lectureNo: 41, topic: 'Microprogram Example 2 & Hardwired vs. Microprogrammed Control', btl: 'BTL2', method: 'Chalk & Talk / PPT', reference: 'SR2, W1' }
    ],
    concepts: [
      {
        id: 'w7-c1',
        weekNumber: 7,
        unitNumber: 3,
        title: 'RTL & Arithmetic, Logic, and Shift Micro-Operations',
        kicker: 'L36–L38 · Micro-Operations',
        summary:
          'RTL specifies elementary 1-clock register actions; arithmetic, bitwise logic, and shift micro-operations manipulate register contents over a shared common bus.',
        keyPoints: [
          'RTL Syntax: T1: R2 ← R1 means transfer R1 to R2 on clock edge when control condition T1 = 1; Memory read is DR ← M[AR].',
          'Arithmetic Micro-ops: Add (R3 ← R1 + R2), Subtract via 2’s comp (R3 ← R1 + R2\' + 1), Increment (R1 ← R1 + 1), Decrement (R1 ← R1 − 1).',
          'Logic Micro-ops (bitwise): AND (R1 ∧ R2 masks/clears bits), OR (R1 ∨ R2 sets bits), XOR (R1 ⊕ R2 toggles/compares bits), NOT (R1\').',
          'Shift Micro-ops on R = 1011 (−5 in 4-bit signed): shl → 0110 (×2), shr → 0101, ashr → 1101 (preserves sign bit = −3), cil → 0111, cir → 1101.'
        ],
        formulas: [
          { label: '2’s Comp Subtraction RTL', expression: 'R3 ← R1 + R2\' + 1' },
          { label: 'Bitwise Mask / Set / Toggle', expression: 'AND (∧)  |  OR (∨)  |  XOR (⊕)' }
        ],
        examTip: 'Always preserve the MSB sign bit in arithmetic shift right (ashr), whereas circular shifts (cil/cir) lose zero bits.',
        labType: 'rtl-alu'
      },
      {
        id: 'w7-c2',
        weekNumber: 7,
        unitNumber: 3,
        title: 'Microprogrammed Control Unit & Address Sequencing',
        kicker: 'L39–L41 · Control Design',
        summary:
          'Stores microprograms in a Control Memory (ROM) indexed by CAR; next-address logic selects sequential, branch, mapped, or subroutine return addresses.',
        keyPoints: [
          'Components: Control Memory (ROM), Control Address Register (CAR), Control Data Register (CDR), Next-Address Sequencer, Subroutine Register (SBR).',
          '20-bit Microinstruction Format: F1 (3b) | F2 (3b) | F3 (3b) micro-op fields | CD (2b condition) | BR (2b branch) | AD (7b address).',
          'Address Sequencing Modes: Increment (CAR ← CAR + 1), Branch (CAR ← AD), Conditional Branch, Opcode Mapping (CAR ← 0 | opcode | 00), Call/Return (SBR ← CAR + 1).',
          'Hardwired Control (fixed gates, fast, hard to modify) vs. Microprogrammed Control (ROM, flexible, ideal for complex CISC ISAs).'
        ],
        workedExample: {
          prompt: 'Map a 4-bit opcode 0010 into a 7-bit Control Memory address using CAR ← 0 | opcode | 00.',
          solution:
            'Prepend 0 and append 00 → 0 0010 00 = 0001000₂ = decimal address 8 in Control Memory, allowing 4 microinstructions (addresses 8–11) per machine opcode.'
        },
        examTip: 'Know the exact 20-bit Mano microinstruction layout (3+3+3+2+2+7 = 20 bits) and the 4 ways CAR gets its next address.'
      }
    ]
  },

  {
    weekNumber: 8,
    unitNumber: 4,
    title: 'I/O Organization, Handshaking, Priority Interrupt & DMA',
    lectureRange: 'L42 – L47',
    coCode: 'CO4 / CO5',
    btlFocus: 'BTL 2 – BTL 3',
    milestone: 'Surprise Test 2 Written Evaluation',
    overview:
      'Explains peripheral interfaces, Isolated vs. Memory-Mapped I/O, synchronous vs. asynchronous handshaking, Programmed/Interrupt-Driven I/O, Daisy-Chain priority, and Direct Memory Access (DMA).',
    lessons: [
      { lectureNo: 42, topic: 'Input/Output Organization Introduction', btl: 'BTL2', method: 'Chalk & Talk / PPT', reference: 'SR2, W1' },
      { lectureNo: 43, topic: 'Peripheral Devices & I/O Interface Module (Isolated vs. Memory-Mapped)', btl: 'BTL3', method: 'Chalk & Talk / PPT', reference: 'SR2, W1' },
      { lectureNo: 44, topic: 'Asynchronous vs. Synchronous Data Transfer (Strobe & Handshaking)', btl: 'BTL2', method: 'Chalk & Talk / PPT', reference: 'SR2, W1' },
      { lectureNo: 45, topic: 'Modes of Transfer & Priority Interrupt (Daisy Chain / Polling)', btl: 'BTL2', method: 'Chalk & Talk / PPT', reference: 'SR2, W1' },
      { lectureNo: 46, topic: 'Direct Memory Access (DMAC, BR/BG, Burst & Cycle Stealing)', btl: 'BTL3', method: 'Chalk & Talk / PPT', reference: 'SR2, W1' },
      { lectureNo: 47, topic: 'Surprise Test 2 Assessment & Review', btl: 'BTL2', method: 'Written Test', reference: 'Unit III & IV' }
    ],
    concepts: [
      {
        id: 'w8-c1',
        weekNumber: 8,
        unitNumber: 4,
        title: 'I/O Interface, Addressing & Asynchronous Handshaking',
        kicker: 'L42–L44 · Peripheral Interfacing',
        summary:
          'I/O interfaces reconcile speed, voltage, and format mismatches between electromechanical peripherals and the CPU bus.',
        keyPoints: [
          'Interface Components: Data Register (buffer), Status Register (READY/BUSY/ERR), Control Register, and Address Decoder.',
          'Isolated I/O: Separate I/O address space accessed via dedicated IN/OUT instructions and an IO/M control line.',
          'Memory-Mapped I/O: Device registers share the main memory address space; CPU uses standard LOAD/STORE instructions.',
          'Synchronous transfer shares a common clock; Asynchronous transfer uses Strobe or two-wire Handshaking (Data Valid + Data Accepted).'
        ],
        examTip: 'Two-wire handshaking prevents data loss when transmitter and receiver run at mismatched or variable speeds.'
      },
      {
        id: 'w8-c2',
        weekNumber: 8,
        unitNumber: 4,
        title: 'Modes of Transfer, Priority Interrupt & Direct Memory Access (DMA)',
        kicker: 'L45–L46 · Data Transfer Control',
        summary:
          'Moving from CPU polling to interrupts and finally DMA progressively reduces CPU overhead for bulk block transfers.',
        keyPoints: [
          'Programmed I/O: CPU continuously polls the READY flag, wasting cycles.',
          'Interrupt-Driven I/O: Device asserts IRQ when ready; CPU suspends, runs an Interrupt Service Routine (ISR), then resumes.',
          'Priority Interrupt: Daisy-chain hardware (PI/PO lines ordered highest to lowest priority) or parallel priority encoder resolves simultaneous IRQs.',
          'DMA Transfer: CPU loads DMAC Address Register, Word Count Register, and R/W Control. DMAC asserts BR/HOLD; CPU grants BG/HLDA, and DMAC transfers words directly I/O ↔ Memory (Burst or Cycle Stealing) before interrupting on Count = 0.'
        ],
        workedExample: {
          prompt: 'Trace how a DMA controller moves a 4 KB disk block without per-word CPU intervention.',
          solution:
            '1) CPU writes start memory address + word count (e.g., 1024 words) + READ into DMAC. 2) Disk asserts DMA Req → DMAC sends BR/HOLD to CPU. 3) CPU finishes bus cycle and asserts BG/HLDA. 4) DMAC transfers all 1024 words directly to DRAM, incrementing Address and decrementing Count. 5) At Count = 0, DMAC drops BR and interrupts CPU.'
        },
        examTip: 'Always list the 3 internal DMAC registers (Address, Word Count, Control) and the 2 handshake signals (BR/HOLD, BG/HLDA).'
      }
    ]
  },

  {
    weekNumber: 9,
    unitNumber: 4,
    title: 'Memory Hierarchy, RAM/ROM, Cache Mapping & Secondary Storage',
    lectureRange: 'L48 – L51',
    coCode: 'CO4 / CO5',
    btlFocus: 'BTL 2 – BTL 3',
    overview:
      'Covers SRAM/DRAM/ROM memory technologies, the 5-tier memory hierarchy, locality of reference, cache mapping principles, write policies, and magnetic/solid-state secondary storage.',
    lessons: [
      { lectureNo: 48, topic: 'Concept of Memory, RAM (SRAM/DRAM) & ROM (PROM/EPROM/EEPROM)', btl: 'BTL2', method: 'Chalk & Talk / PPT', reference: 'SR2, W1' },
      { lectureNo: 49, topic: 'Memory Hierarchy & Locality of Reference (Temporal & Spatial)', btl: 'BTL3', method: 'Chalk & Talk / PPT', reference: 'SR2, W1' },
      { lectureNo: 50, topic: 'Cache Memory & Mapping (Direct, Associative, Set-Associative)', btl: 'BTL2', method: 'Chalk & Talk / PPT', reference: 'SR2, W1' },
      { lectureNo: 51, topic: 'Secondary Storage Organization (HDD, SSD, Optical/Tape)', btl: 'BTL2', method: 'Chalk & Talk / PPT', reference: 'SR2, W1' }
    ],
    concepts: [
      {
        id: 'w9-c1',
        weekNumber: 9,
        unitNumber: 4,
        title: 'RAM vs. ROM & The 5-Tier Memory Hierarchy',
        kicker: 'L48–L49 · Memory Technologies',
        summary:
          'No single memory technology offers infinite capacity, sub-nanosecond speed, and low cost simultaneously—hierarchy exploits locality of reference to approximate all three.',
        keyPoints: [
          'SRAM (6-transistor flip-flop cell): fast (~1–10 ns), no refresh needed, used in L1/L2/L3 Cache; expensive.',
          'DRAM (1-transistor + capacitor): dense, cheaper, requires periodic refresh, used in Main Memory (~50–100 ns).',
          'ROM (non-volatile firmware): Mask ROM, PROM (one-time), EPROM (UV-erasable), EEPROM / Flash (electrically erasable).',
          'Hierarchy (Fastest/Costliest/Smallest → Slowest/Cheapest/Largest): Registers → Cache (SRAM) → Main Memory (DRAM) → Secondary (SSD/HDD) → Backup (Tape/Optical).',
          'Locality of Reference: Temporal (recently accessed items are reused soon, e.g., loop variables) and Spatial (nearby addresses are accessed soon, e.g., array elements).'
        ],
        examTip: 'Remember SRAM = Cache (static flip-flops, no refresh), DRAM = Main RAM (capacitor leaks charge, needs refresh).'
      },
      {
        id: 'w9-c2',
        weekNumber: 9,
        unitNumber: 4,
        title: 'Cache Mapping Schemes & Write/Replacement Policies',
        kicker: 'L50 · Cache Architecture',
        summary:
          'Mapping functions place main memory blocks into limited cache lines and partition physical addresses into Tag, Index/Set, and Word Offset fields.',
        keyPoints: [
          'Direct Mapping: Block j maps exclusively to line (j mod L). Address = Tag | Line | Word. Uses 1 comparator; lowest cost, highest conflict misses.',
          'Associative Mapping: Block can reside in any line. Address = Tag | Word. Requires 1 comparator per line (CAM); zero conflict misses, costly hardware.',
          'k-Way Set-Associative: Cache grouped into S = L/k sets; block j maps to set (j mod S) and fits in any of its k ways. Address = Tag | Set | Word; uses k comparators.',
          'Replacement Policies (on full set/cache): LRU (Least Recently Used), FIFO, Random.',
          'Write Policies: Write-Through (updates cache + main memory immediately) vs. Write-Back (updates cache only, marks dirty bit, writes RAM on eviction).'
        ],
        formulas: [
          { label: 'Effective Access Time', expression: 'T_avg = h · t_c + (1 - h) · t_m' },
          { label: 'Direct Line Index', expression: 'Line = BlockNo mod (Total Cache Lines)' }
        ],
        examTip: 'Special cases: Set-Associative with k = 1 equals Direct Mapping; with k = Total Lines equals Fully Associative.',
        labType: 'cache-mapping'
      }
    ]
  },

  {
    weekNumber: 10,
    unitNumber: 4,
    title: 'Cache Mapping Worked Problems, Access Time & Unit IV Revision',
    lectureRange: 'L52 – L55',
    coCode: 'CO4 / CO5',
    btlFocus: 'BTL 3 – BTL 5',
    overview:
      'Applies address bit-splitting calculations, conflict miss analysis, and effective memory access time (EAT) evaluation across worked exam problems and Unit IV doubt clearance.',
    lessons: [
      { lectureNo: 52, topic: 'Cache Mapping & Bit-Split Worked Examples 1–5', btl: 'BTL3', method: 'Chalk & Talk / PPT', reference: 'SR2, W1' },
      { lectureNo: 53, topic: 'Effective Access Time & Hierarchy Worked Examples 6–10', btl: 'BTL2', method: 'Chalk & Talk / PPT', reference: 'SR2, W1' },
      { lectureNo: 54, topic: 'Unit IV Comprehensive Revision', btl: 'BTL3', method: 'Revision Session', reference: 'SR2' },
      { lectureNo: 55, topic: 'Doubts and Answers Discussion (CIE-2 Prep)', btl: 'BTL3', method: 'Chalk & Talk', reference: 'Course QB' }
    ],
    concepts: [
      {
        id: 'w10-c1',
        weekNumber: 10,
        unitNumber: 4,
        title: 'Address Bit-Splitting & Effective Access Time Calculations',
        kicker: 'L52–L53 · Quantitative Evaluation',
        summary:
          'Every cache address-split problem starts from three powers of 2: total main memory words (address width), block size (word offset bits), and lines/sets (index/set bits).',
        keyPoints: [
          'Step 1: Address Width W = log₂(Main Memory Words).',
          'Step 2: Word Offset bits = log₂(Words per Block).',
          'Step 3: Direct Index bits = log₂(Cache Lines); Set-Associative Set bits = log₂(Cache Lines / k); Associative Index bits = 0.',
          'Step 4: Tag bits = W − (Index or Set bits) − Word Offset bits.'
        ],
        formulas: [
          { label: 'Tag Bit Width', expression: 'Tag = log2(MemWords) - log2(Sets) - log2(BlockWords)' },
          { label: 'EAT with Miss Penalty', expression: 'T_avg = h · t_c + (1 - h) · (t_c + t_penalty)' }
        ],
        workedExample: {
          prompt:
            'Given 64K-word memory (16-bit address), 16-word blocks, and 128-line cache: compute bit splits for Direct, Associative, and 2-way Set-Associative, plus T_avg if h = 0.95, t_c = 10 ns, t_m = 100 ns.',
          solution:
            'Word offset = log₂(16) = 4 bits. Direct (128 lines = 2⁷): Tag(5) + Line(7) + Word(4). Associative: Tag(12) + Word(4). 2-way Set-Assoc (64 sets = 2⁶): Tag(6) + Set(6) + Word(4). T_avg = 0.95(10) + 0.05(100) = 9.5 + 5.0 = 14.5 ns.'
        },
        examTip: 'Always verify that Tag + Set/Line + Word bits sum strictly to the total CPU address width!',
        labType: 'cache-mapping'
      }
    ]
  },

  {
    weekNumber: 11,
    unitNumber: 5,
    title: 'RISC vs. CISC Architectures, Pipelining & Pipeline Hazards',
    lectureRange: 'L56 – L60',
    coCode: 'CO5 / CO6',
    btlFocus: 'BTL 2 – BTL 4',
    overview:
      'Contrasts CISC and RISC design philosophies, introduces overlapped instruction pipelining and speedup math, and classifies Structural, Data (RAW/WAR/WAW), and Control/Instruction hazards.',
    lessons: [
      { lectureNo: 56, topic: 'Reduced Instruction Set Computer (RISC) Introduction', btl: 'BTL2', method: 'Chalk & Talk / PPT', reference: 'SR2, W1' },
      { lectureNo: 57, topic: 'CISC Characteristics & Design Trade-offs', btl: 'BTL3', method: 'Chalk & Talk / PPT', reference: 'SR2, W1' },
      { lectureNo: 58, topic: 'RISC Characteristics & Load/Store Regularity', btl: 'BTL2', method: 'Chalk & Talk / PPT', reference: 'SR2, W1' },
      { lectureNo: 59, topic: 'Pipelining: Basic Concepts, Throughput & Speedup', btl: 'BTL2', method: 'Chalk & Talk / PPT', reference: 'SR2, W1' },
      { lectureNo: 60, topic: 'Data Hazards (RAW/WAR/WAW) & Instruction/Control Hazards', btl: 'BTL3', method: 'Chalk & Talk / PPT', reference: 'SR2, W1' }
    ],
    concepts: [
      {
        id: 'w11-c1',
        weekNumber: 11,
        unitNumber: 5,
        title: 'RISC vs. CISC Architectural Characteristics',
        kicker: 'L56–L58 · Processor Philosophy',
        summary:
          'RISC trades compact binary size for fixed-length single-cycle instructions and large register files that streamline deep pipelining.',
        keyPoints: [
          'RISC (ARM, MIPS, RISC-V): small simple fixed-length instructions, hardwired control, few addressing modes, Load/Store-only memory access, large register file, 1 instruction/clock target.',
          'CISC (Intel x86, VAX): large complex variable-length instructions, microprogrammed ROM control, many addressing modes, memory-to-memory ALU ops, compact code size.',
          'RISC uses fewer control-unit transistors and avoids multi-cycle microcode decoding, enabling predictable pipeline stages.'
        ],
        examTip: 'In comparisons, highlight 6 crisp axes: Instruction Length, Control Unit, Memory Access, Registers, Addressing Modes, and Pipelining Ease.'
      },
      {
        id: 'w11-c2',
        weekNumber: 11,
        unitNumber: 5,
        title: 'Pipelining Fundamentals & Speedup Analysis',
        kicker: 'L59 · Overlapped Execution',
        summary:
          'Pipelining divides instruction execution into k independent stages separated by pipeline registers, boosting instruction throughput without reducing single-instruction latency.',
        keyPoints: [
          'Typical 5-Stage Pipeline: IF (Instruction Fetch), ID (Instruction Decode & Reg Read), EX (Execute / ALU), MEM (Memory Access), WB (Write Back).',
          'For k stages and n instructions: Non-pipelined = n × k cycles; Pipelined = (k + n − 1) cycles.',
          'Speedup S = (n · k) / (k + n − 1), approaching ideal k as n → ∞.',
          'Ideal speedup is limited by hazards, unequal stage delays (clock period ≥ slowest stage + latch overhead), and pipeline fill/drain time.'
        ],
        formulas: [
          { label: 'Pipelined Clock Cycles', expression: 'Cycles_pipe = k + n - 1' },
          { label: 'Pipeline Speedup', expression: 'S = (n · k) / (k + n - 1)  →  k as n → ∞' }
        ],
        workedExample: {
          prompt: 'Calculate speedup for k = 4 stages and n = 100 instructions at 10 ns clock.',
          solution:
            'Non-pipelined = 100 × 4 = 400 cycles (4000 ns). Pipelined = 4 + 100 − 1 = 103 cycles (1030 ns). Speedup S = 400 / 103 ≈ 3.88 (close to ideal 4).'
        },
        examTip: 'Always state clearly: pipelining increases THROUGHPUT (instructions/sec), NOT individual instruction latency.',
        labType: 'pipeline-hazards'
      },
      {
        id: 'w11-c3',
        weekNumber: 11,
        unitNumber: 5,
        title: 'Pipeline Hazards: Structural, Data & Control',
        kicker: 'L60 · Hazard Mitigation',
        summary:
          'Hazards occur when the next instruction cannot execute in the following clock cycle due to hardware contention, operand dependencies, or unresolved branches.',
        keyPoints: [
          'Structural Hazard: hardware resource conflict (solved by separate I-Cache and D-Cache).',
          'Data Hazards: RAW (Read After Write — true dependency, occurs in in-order pipelines), WAR (anti-dependency), and WAW (output dependency).',
          'Resolving RAW: Stalling (2 bubbles without forwarding), Data Forwarding/Bypassing (EX/MEM → ALU removes ALU→ALU stalls), Load-Use hazard still requires 1 stall even with forwarding.',
          'Control (Instruction) Hazards: caused by branches/jumps whose outcome is resolved in EX/MEM; mitigated via Branch Prediction, Delayed Branching, or Pipeline Flush.'
        ],
        workedExample: {
          prompt: 'Analyze ADD R1, R2, R3 followed by SUB R4, R1, R5 with and without forwarding.',
          solution:
            'Without forwarding: ADD writes R1 in WB (T5), SUB reads R1 in ID (T3) → 2 stall bubbles required. With EX/MEM forwarding: ADD produces R1 at end of EX (T3) and bypasses directly into SUB’s EX stage (T4) → 0 stalls.'
        },
        examTip: 'Remember: LW R1, 0(R2) followed by ADD R4, R1, R5 ALWAYS needs 1 stall cycle even with full forwarding because load data arrives after MEM.',
        labType: 'pipeline-hazards'
      }
    ]
  },

  {
    weekNumber: 12,
    unitNumber: 5,
    title: 'Datapath & Control Considerations, Superscalar Operation & Final Review',
    lectureRange: 'L61 – L64',
    coCode: 'CO5 / CO6',
    btlFocus: 'BTL 2 – BTL 4',
    milestone: 'Surprise Test 3 / 4 & CIE-2 Examination',
    overview:
      'Examines how ISA design impacts pipelines, pipeline register state propagation (IF/ID, ID/EX, EX/MEM, MEM/WB), forwarding/hazard units, superscalar ILP execution, and comprehensive course review.',
    lessons: [
      { lectureNo: 61, topic: 'Influence on Instruction Sets, Pipelined Datapath & Control Considerations', btl: 'BTL2', method: 'Chalk & Talk / PPT', reference: 'SR2, W1' },
      { lectureNo: 62, topic: 'Superscalar Operation & Instruction-Level Parallelism (ILP)', btl: 'BTL2', method: 'Chalk & Talk / PPT', reference: 'SR2, W1' },
      { lectureNo: 63, topic: 'Unit V & Full-Syllabus Revision', btl: 'BTL2', method: 'Revision Session', reference: 'All Units' },
      { lectureNo: 64, topic: 'CIE-2 & SEE Doubts and Answers Discussion', btl: 'BTL2', method: 'Interactive Q&A', reference: 'CIE-2 QB' }
    ],
    concepts: [
      {
        id: 'w12-c1',
        weekNumber: 12,
        unitNumber: 5,
        title: 'ISA Influence, Pipelined Datapath & Control Propagation',
        kicker: 'L61 · Datapath & Control',
        summary:
          'Inter-stage pipeline registers preserve operands and decoded control signals across clock boundaries while dedicated forwarding and hazard units guard execution.',
        keyPoints: [
          'ISA Influence: Fixed-length instructions with uniform register fields simplify decode; side-effects and condition codes complicate out-of-order/pipelined execution.',
          'Four Pipeline Registers: IF/ID, ID/EX, EX/MEM, MEM/WB hold instructions, PC+4, operands, ALU results, and destination Rd index.',
          'Control Propagation: Main Control decodes once in ID and forwards EX signals (RegDst, ALUOp, ALUSrc), MEM signals (Branch, MemRead, MemWrite), and WB signals (RegWrite, MemtoReg) alongside data.',
          'Register File timing: writes in first half of clock cycle, reads in second half to eliminate 3-instruction-apart WB/ID hazards.'
        ],
        examTip: 'Always note that the destination register number (Rd) MUST travel alongside the instruction through ID/EX → EX/MEM → MEM/WB so WB writes the correct register.'
      },
      {
        id: 'w12-c2',
        weekNumber: 12,
        unitNumber: 5,
        title: 'Superscalar Operation & Instruction-Level Parallelism (ILP)',
        kicker: 'L62 · Multi-Issue Execution',
        summary:
          'Superscalar processors push past the 1 instruction/clock scalar pipeline barrier by fetching, dispatching, and retiring multiple independent instructions per cycle.',
        keyPoints: [
          'Scalar Pipeline ideal IPC = 1.0; Superscalar Pipeline issues >1 instruction per clock cycle (IPC > 1) using parallel execution pipelines (multiple ALUs, FPU, Load/Store unit).',
          'Instruction-Level Parallelism (ILP): degree of independent instructions available to execute concurrently.',
          'Hardware Dispatch & Register Renaming eliminate false WAR/WAW dependencies during dynamic out-of-order scheduling while committing results in-order.'
        ],
        formulas: [
          { label: 'Superscalar Throughput', expression: 'IPC > 1  (Cycles Per Instruction CPI < 1)' }
        ],
        examTip: 'Contrast Pipelining (overlaps stages of sequential instructions, max IPC = 1) vs. Superscalar (replicates pipelines to issue multiple instructions per clock, IPC > 1).',
        labType: 'pipeline-hazards'
      }
    ]
  }
];
