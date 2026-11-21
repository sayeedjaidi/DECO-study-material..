import { ExamBankItem } from '../types/curriculum';

export const DECO_EXAM_BANK: ExamBankItem[] = [
  // UNIT I
  {
    id: 'eb-u1-saq1',
    unitNumber: 1,
    type: 'SAQ',
    marks: 2,
    coCode: 'CO1',
    btl: 'BTL2',
    question: 'Give the basic operational concepts of a computer and name the key CPU registers involved.',
    answerSummary:
      'Programs reside in main memory; the CPU fetches instructions one by one using the Program Counter (PC), decodes them in the Instruction Register (IR), and executes arithmetic/logic operations via the ALU and Accumulator/General-Purpose Registers, interfacing with memory through MAR and MDR.',
    keySteps: [
      'PC (Program Counter) holds the memory address of the next instruction to fetch.',
      'MAR (Memory Address Register) receives the address to read/write; MDR (Memory Data Register) buffers the transferred word.',
      'IR (Instruction Register) holds the active instruction while the Control Unit generates timing and control signals.'
    ]
  },
  {
    id: 'eb-u1-saq2',
    unitNumber: 1,
    type: 'SAQ',
    marks: 2,
    coCode: 'CO1',
    btl: 'BTL2',
    question: 'State the difference between multiprocessors and multicomputers.',
    answerSummary:
      'Multiprocessors (tightly coupled) share a single global physical memory address space across multiple CPUs, whereas multicomputers (loosely coupled) give each node its own private local memory and communicate via message passing over a network.',
    keySteps: [
      'Memory model: Shared memory (UMA/NUMA) in multiprocessors vs distributed local memory in multicomputers.',
      'Communication: Shared variables/bus in multiprocessors vs message passing in multicomputers.',
      'Scalability: Multicomputers (clusters) scale easily to thousands of nodes without bus contention.'
    ]
  },
  {
    id: 'eb-u1-saq3',
    unitNumber: 1,
    type: 'SAQ',
    marks: 2,
    coCode: 'CO1',
    btl: 'BTL2',
    question: 'Convert (520)₁₀ to hexadecimal and (480)₁₀ to octal.',
    answerSummary: '(520)₁₀ = (208)₁₆ and (480)₁₀ = (740)₈.',
    keySteps: [
      'Hexadecimal: 520 ÷ 16 = 32 R 8; 32 ÷ 16 = 2 R 0; 2 ÷ 16 = 0 R 2 → read remainders upward: 208₁₆.',
      'Octal: 480 ÷ 8 = 60 R 0; 60 ÷ 8 = 7 R 4; 7 ÷ 8 = 0 R 7 → read remainders upward: 740₈.'
    ]
  },
  {
    id: 'eb-u1-saq4',
    unitNumber: 1,
    type: 'SAQ',
    marks: 2,
    coCode: 'CO1',
    btl: 'BTL3',
    question: 'Convert the following Gray code numbers to binary: (i) 0011 (ii) 1011.',
    answerSummary: 'Gray (0011) = Binary (0010); Gray (1011) = Binary (1101).',
    keySteps: [
      'Rule: B₃ = G₃; for lower bits, Bᵢ = Bᵢ₊₁ ⊕ Gᵢ.',
      '(i) 0011: B₃=0, B₂=0⊕0=0, B₁=0⊕1=1, B₀=1⊕1=0 → 0010₂.',
      '(ii) 1011: B₃=1, B₂=1⊕0=1, B₁=1⊕1=0, B₀=0⊕1=1 → 1101₂.'
    ]
  },
  {
    id: 'eb-u1-laq1',
    unitNumber: 1,
    type: 'LAQ',
    marks: 12,
    coCode: 'CO1',
    btl: 'BTL3',
    question:
      'Convert the following numbers to the indicated bases: (i) (7562.45)₁₀ to Octal, (ii) (1938.257)₁₀ to Hexadecimal, (iii) (175.175)₈ to Binary, (iv) (11001101.0101)₂ to Hexadecimal.',
    answerSummary:
      'Divide integer parts repeatedly by the target base and multiply fractional parts repeatedly by the target base; for base-2/8/16 conversions use 3-bit (octal) or 4-bit (hex) grouping around the radix point.',
    keySteps: [
      '(i) 7562₁₀ → 16612₈; 0.45 × 8 = 3.60, 0.60 × 8 = 4.80, 0.80 × 8 = 6.40 → (16612.3463...)₈.',
      '(ii) 1938₁₀ → 792₁₆; 0.257 × 16 = 4.112, 0.112 × 16 = 1.792, 0.792 × 16 = 12.672 (C) → (792.41C...)₁₆.',
      '(iii) (175.175)₈ → group 3 bits per digit: 001 111 101 . 001 111 101 = (1111101.001111101)₂.',
      '(iv) (1100 1101 . 0101)₂ → (CD.5)₁₆.'
    ]
  },
  {
    id: 'eb-u1-laq2',
    unitNumber: 1,
    type: 'LAQ',
    marks: 12,
    coCode: 'CO1',
    btl: 'BTL2',
    question:
      'Explain the basic structure of a digital computer (Von Neumann architecture) with its five functional units, and explain system bus structures and software types.',
    answerSummary:
      'A computer coordinates five functional units—Input, Output, Memory, Arithmetic Logic Unit (ALU), and Control Unit (CU)—connected via Data, Address, and Control buses. System software (OS, compilers, loaders) manages hardware resources, while application software solves user tasks.',
    keySteps: [
      'Input Unit converts external data/instructions to binary; Output Unit converts processed binary results for users.',
      'Memory stores both instructions and data (Von Neumann stored-program concept), creating a single CPU-Memory bus bottleneck.',
      'System Bus comprises Data Bus (bidirectional, carries word data), Address Bus (unidirectional, selects memory/IO location), and Control Bus (RD/WR, clock, interrupt, bus grant).'
    ]
  },

  // UNIT II
  {
    id: 'eb-u2-saq1',
    unitNumber: 2,
    type: 'SAQ',
    marks: 2,
    coCode: 'CO2',
    btl: 'BTL1',
    question: 'What are universal gates? Why are they called so?',
    answerSummary:
      'NAND and NOR are universal gates because every basic Boolean function (NOT, AND, OR) and any combinational or sequential logic circuit can be implemented using only NAND gates or only NOR gates.',
    keySteps: [
      'NOT from NAND: tie both inputs together → (A·A)\' = A\'.',
      'AND from NAND: invert a NAND output with another NAND → ((A·B)\')\' = A·B.',
      'OR from NAND: invert both inputs then NAND → (A\'·B\')\' = A + B (by De Morgan).'
    ]
  },
  {
    id: 'eb-u2-saq2',
    unitNumber: 2,
    type: 'SAQ',
    marks: 2,
    coCode: 'CO2',
    btl: 'BTL2',
    question: 'State and prove De Morgan’s Theorems.',
    answerSummary:
      'First Law: (A·B)\' = A\' + B\'. Second Law: (A + B)\' = A\'·B\'. Both can be verified exhaustively across all 4 input combinations (00, 01, 10, 11) via truth tables.',
    keySteps: [
      'Complement of a product equals the sum of the complements: (A·B)\' = A\' + B\'.',
      'Complement of a sum equals the product of the complements: (A + B)\' = A\'·B\'.',
      'Essential for converting SOP/AND-OR circuits into all-NAND implementations and POS/OR-AND into all-NOR.'
    ]
  },
  {
    id: 'eb-u2-saq3',
    unitNumber: 2,
    type: 'SAQ',
    marks: 2,
    coCode: 'CO2',
    btl: 'BTL2',
    question: 'Differentiate between combinational circuits and sequential circuits, and between a latch and a flip-flop.',
    answerSummary:
      'Combinational circuit outputs depend solely on present inputs (no memory/feedback), whereas sequential circuits depend on present inputs plus past state stored in memory elements. A latch is level-triggered; a flip-flop is edge-triggered (clocked).',
    keySteps: [
      'Combinational examples: Half Adder, Full Adder, Decoder, Multiplexer.',
      'Sequential examples: SR/D/JK/T Flip-Flops, Registers, Counters.',
      'Flip-flops avoid transparency hazards by sampling inputs only on rising or falling clock edges.'
    ]
  },
  {
    id: 'eb-u2-laq1',
    unitNumber: 2,
    type: 'LAQ',
    marks: 12,
    coCode: 'CO2',
    btl: 'BTL4',
    question:
      'Design and explain a Half Adder and a Full Adder circuit with truth tables, Boolean expressions, and logic diagrams.',
    answerSummary:
      'A Half Adder adds two 1-bit inputs (A, B) producing Sum = A ⊕ B and Carry = A·B. A Full Adder adds three bits (A, B, Cin) producing Sum = A ⊕ B ⊕ Cin and Cout = A·B + Cin·(A ⊕ B), which can be constructed from two Half Adders and one OR gate.',
    keySteps: [
      'Half Adder (4 rows): (0,0)→0,0; (0,1)→1,0; (1,0)→1,0; (1,1)→0,1.',
      'Full Adder (8 rows): Sum is 1 when an odd number of inputs are 1; Cout is 1 when at least two inputs are 1.',
      'Cascading n Full Adders forms an n-bit Ripple-Carry Adder; adding XOR gates controlled by mode M builds a Binary Adder-Subtractor with signed overflow V = Cn ⊕ Cn-1.'
    ]
  },
  {
    id: 'eb-u2-laq2',
    unitNumber: 2,
    type: 'LAQ',
    marks: 12,
    coCode: 'CO2',
    btl: 'BTL5',
    question:
      'Explain the working of SR, D, and JK flip-flops with characteristic tables, excitation equations, and the race-around condition.',
    answerSummary:
      'Flip-flops are bistable 1-bit storage elements triggered on clock edges. SR has an invalid state (S=1, R=1); D eliminates it via single data input (Qnext = D); JK resolves S=R=1 into toggling (Qnext = Q\').',
    keySteps: [
      'SR characteristic: Qnext = S + R\'Q (with SR = 0 constraint).',
      'D characteristic: Qnext = D (transparent data latch when clocked on edge).',
      'JK characteristic: Qnext = JQ\' + K\'Q; when J=1, K=1, output toggles.',
      'Race-around condition occurs in level-triggered JK when J=K=1 and clock pulse width t > propagation delay tp; eliminated via edge-triggering or Master-Slave JK.'
    ]
  },

  // UNIT III
  {
    id: 'eb-u3-saq1',
    unitNumber: 3,
    type: 'SAQ',
    marks: 2,
    coCode: 'CO3',
    btl: 'BTL2',
    question: 'What is the function of LOAD and STORE instructions, and what is Register Transfer Language (RTL)?',
    answerSummary:
      'LOAD copies a word from main memory into a CPU register (R1 ← M[addr]), while STORE writes a register value back to memory (M[addr] ← R1). RTL is a symbolic notation describing micro-operations between registers, e.g. T1: R2 ← R1.',
    keySteps: [
      'In Load/Store (RISC) architectures, arithmetic instructions operate only on registers; memory access uses LOAD/STORE exclusively.',
      'RTL syntax: destination ← source, prefixed with a control condition (T1:) when conditional on timing/control signals.'
    ]
  },
  {
    id: 'eb-u3-saq2',
    unitNumber: 3,
    type: 'SAQ',
    marks: 2,
    coCode: 'CO3',
    btl: 'BTL3',
    question: 'Compare Direct and Register addressing modes, and define the role of an opcode.',
    answerSummary:
      'An opcode specifies the operation to perform (e.g. ADD, LOAD). Direct addressing embeds the operand’s main memory address in the instruction (EA = Addr, 1 memory lookup), whereas Register addressing specifies a CPU register containing the operand (0 memory lookups).',
    keySteps: [
      'Direct: Slower due to memory access, address space limited by instruction field width.',
      'Register: Fastest access (inside CPU), compact specifier bits (e.g. 3–5 bits for 8–32 registers).'
    ]
  },
  {
    id: 'eb-u3-laq1',
    unitNumber: 3,
    type: 'LAQ',
    marks: 12,
    coCode: 'CO3',
    btl: 'BTL3',
    question:
      'Explain Booth’s signed multiplication algorithm and compare Restoring vs. Non-Restoring division algorithms.',
    answerSummary:
      'Booth’s algorithm multiplies signed 2’s complement integers uniformly by scanning adjacent multiplier bits (Q₀, Q₋₁): 10 triggers A ← A − M, 01 triggers A ← A + M, and 00/11 only arithmetic-shift right (ashr). Non-restoring division avoids adding M back when remainder goes negative, cutting steps.',
    keySteps: [
      'Booth setup: AC = 0, Q = multiplier, Q₋₁ = 0, M = multiplicand, SC = n.',
      'Booth transition: 10 → subtract M; 01 → add M; 00 or 11 → no add/sub; then always arithmetic shift right (AC, Q, Q₋₁).',
      'Restoring division: Shift left AQ, A ← A − M; if A < 0, Q₀ = 0 and restore A ← A + M; else Q₀ = 1.',
      'Non-restoring division: If A ≥ 0, shift left AQ and A ← A − M; if A < 0, shift left AQ and A ← A + M; set Q₀ = 1 if resulting A ≥ 0 else 0 (final step restores A ← A + M only if A < 0).'
    ]
  },
  {
    id: 'eb-u3-laq2',
    unitNumber: 3,
    type: 'LAQ',
    marks: 12,
    coCode: 'CO4',
    btl: 'BTL2',
    question:
      'What is microprogrammed control? Explain its structure, 20-bit microinstruction format, and address sequencing methods vs. hardwired control.',
    answerSummary:
      'Microprogrammed control generates CPU control signals by reading microinstructions from a Control Memory (ROM) using a Control Address Register (CAR) and sequencer, offering high flexibility at slightly lower speed than fixed-gate hardwired control.',
    keySteps: [
      '20-bit Microinstruction: F1 (3b) | F2 (3b) | F3 (3b) micro-op fields, CD (2b) condition, BR (2b) branch, AD (7b) branch address.',
      'Address sequencing modes: Increment (CAR ← CAR + 1), Branch (CAR ← AD), Conditional branch, Opcode mapping (CAR ← 0 | opcode | 00), Subroutine call/return via SBR.',
      'Hardwired vs Microprogrammed: Hardwired uses combinational/sequential logic (fast, rigid, costly to modify); Microprogrammed uses ROM (easy ISA updates, supports complex CISC instructions).'
    ]
  },

  // UNIT IV
  {
    id: 'eb-u4-saq1',
    unitNumber: 4,
    type: 'SAQ',
    marks: 2,
    coCode: 'CO5',
    btl: 'BTL1',
    question: 'What is Direct Memory Access (DMA)? Explain its significance and control signals.',
    answerSummary:
      'DMA allows a peripheral to transfer bulk blocks directly to/from main memory via a DMA Controller (DMAC) without passing every word through the CPU. The DMAC asserts BR/HOLD and waits for CPU BG/HLDA to take bus control.',
    keySteps: [
      'CPU initializes DMAC Address Register, Word Count Register, and Control/Direction Register.',
      'DMAC transfers words directly I/O ↔ Memory and interrupts the CPU only once when Word Count reaches 0.',
      'Freeing the CPU boosts overall system throughput for disk, network, and display transfers.'
    ]
  },
  {
    id: 'eb-u4-saq2',
    unitNumber: 4,
    type: 'SAQ',
    marks: 2,
    coCode: 'CO5',
    btl: 'BTL2',
    question: 'What is cache memory and why is it important? State the effective access time formula.',
    answerSummary:
      'Cache is a small, fast SRAM placed between CPU and slow DRAM main memory to exploit temporal and spatial locality of reference. Average access time is T_avg = h · t_c + (1 − h) · t_m (where t_m is miss access time or t_c + miss penalty).',
    keySteps: [
      'Example: With hit ratio h = 0.95, cache time t_c = 10 ns, main memory time t_m = 100 ns → T_avg = 0.95(10) + 0.05(100) = 14.5 ns.',
      'Hit serves a word in ~1–10 ns; a miss fetches an entire block of words from DRAM.'
    ]
  },
  {
    id: 'eb-u4-laq1',
    unitNumber: 4,
    type: 'LAQ',
    marks: 12,
    coCode: 'CO5',
    btl: 'BTL3',
    question:
      'Explain I/O interface functions, Isolated vs. Memory-Mapped I/O, and the three modes of data transfer.',
    answerSummary:
      'An I/O interface bridges slow electromechanical peripherals to the high-speed CPU bus via Data, Status, Control, and Address-decode logic. Transfers run via Programmed I/O (polling), Interrupt-Driven I/O, or DMA.',
    keySteps: [
      'Interface roles: Address decoding, speed-matching buffering, status/error flags, serial-parallel format conversion.',
      'Isolated I/O uses separate address space + IN/OUT instructions; Memory-Mapped I/O shares memory addresses + LOAD/STORE instructions.',
      'Modes: Programmed I/O keeps CPU busy polling READY; Interrupt I/O notifies CPU via IRQ only when ready; DMA moves entire blocks bypassing CPU.'
    ]
  },
  {
    id: 'eb-u4-laq2',
    unitNumber: 4,
    type: 'LAQ',
    marks: 12,
    coCode: 'CO5',
    btl: 'BTL4',
    question:
      'Explain the need for cache mapping and detail Direct, Associative, and Set-Associative mapping using a 64K-word memory (16-bit address), 16-word blocks, and 128-line cache.',
    answerSummary:
      'Because main memory (4096 blocks) is vastly larger than cache (128 lines), mapping defines block placement and tag lookup. Associative splits 16 bits into Tag(12)+Word(4); 2-way Set-Associative (64 sets) splits into Tag(6)+Set(6)+Word(4).',
    keySteps: [
      'Word offset = log₂(16) = 4 bits across all schemes.',
      'Direct Mapping (128 lines): Tag(5) + Line/Index(7) + Word(4). Only 1 comparator; lowest cost, highest conflict misses.',
      'Associative Mapping: Block goes in any line → Tag(12) + Word(4). Needs 128 parallel comparators; highest hit rate, expensive CAM.',
      '2-Way Set-Associative (128/2 = 64 sets): Tag(6) + Set(6) + Word(4). Block j maps to set (j mod 64); only 2 comparators needed.'
    ]
  },

  // UNIT V
  {
    id: 'eb-u5-saq1',
    unitNumber: 5,
    type: 'SAQ',
    marks: 2,
    coCode: 'CO6',
    btl: 'BTL2',
    question: 'List four key differences between RISC and CISC architectures.',
    answerSummary:
      'RISC uses simple fixed-length instructions, hardwired control, a large general-purpose register file, and Load/Store-only memory access (~1 cycle/instruction). CISC uses complex variable-length instructions, microprogrammed control, fewer registers, and direct memory operands.',
    keySteps: [
      'Control unit: Hardwired (RISC) vs Microprogrammed ROM (CISC).',
      'Memory access: Only LOAD/STORE (RISC) vs Any arithmetic instruction can access memory (CISC).',
      'Examples: ARM, MIPS, RISC-V (RISC) vs Intel x86, VAX (CISC).'
    ]
  },
  {
    id: 'eb-u5-saq2',
    unitNumber: 5,
    type: 'SAQ',
    marks: 2,
    coCode: 'CO6',
    btl: 'BTL2',
    question: 'What is a data hazard in pipelining? Give an example of a RAW hazard.',
    answerSummary:
      'A data hazard occurs when an instruction depends on the result of a prior in-flight instruction that has not yet written back. Example: ADD R1, R2, R3 followed immediately by SUB R4, R1, R5 causes a Read-After-Write (RAW) hazard.',
    keySteps: [
      'ADD writes R1 in WB (Cycle T5), while SUB reads R1 in ID (Cycle T3).',
      'Resolved via stalling (2 NOP bubbles), data forwarding/bypassing (EX/MEM → ALU input), or compiler instruction scheduling.'
    ]
  },
  {
    id: 'eb-u5-laq1',
    unitNumber: 5,
    type: 'LAQ',
    marks: 12,
    coCode: 'CO6',
    btl: 'BTL3',
    question:
      'Explain the basic concept of pipelining, derive its speedup formula with an example, and explain pipelined datapath and control considerations.',
    answerSummary:
      'Pipelining overlaps instruction stages (IF, ID, EX, MEM, WB) separated by pipeline registers (IF/ID, ID/EX, EX/MEM, MEM/WB). Throughput approaches 1 instruction/clock, with k + n − 1 cycles for n instructions in a k-stage pipe.',
    keySteps: [
      'Speedup S = (n · k) / (k + n − 1). For k = 4, n = 100: non-pipelined = 400 cycles, pipelined = 103 cycles → S = 400/103 ≈ 3.88.',
      'Datapath considerations: Separate Instruction and Data caches avoid structural hazards; register file writes in first half of cycle and reads in second half.',
      'Control considerations: Main Control decodes opcode in ID and passes EX (RegDst, ALUOp, ALUSrc), MEM (Branch, MemRead, MemWrite), and WB (RegWrite, MemtoReg) signals through pipeline registers.'
    ]
  },
  {
    id: 'eb-u5-laq2',
    unitNumber: 5,
    type: 'LAQ',
    marks: 12,
    coCode: 'CO6',
    btl: 'BTL4',
    question:
      'Explain Structural, Data (RAW, WAR, WAW), and Control/Instruction hazards in detail, along with hardware and software mitigation techniques and superscalar execution.',
    answerSummary:
      'Pipeline hazards prevent the next instruction from executing in its scheduled clock cycle. Data hazards (RAW, load-use) are solved by forwarding, 1-cycle stall on load-use, and scheduling; control hazards by branch prediction, delayed branching, and flushing; superscalar processors issue multiple instructions per clock via parallel execution units.',
    keySteps: [
      'RAW (true dependency): most common in-order; Forwarding eliminates ALU→ALU stalls, Load-Use still needs 1 stall cycle.',
      'WAR (anti) & WAW (output): arise in out-of-order/multi-cycle pipelines; eliminated via register renaming.',
      'Control hazards: branch outcome known in EX/MEM; mitigated via static/dynamic branch prediction, branch target buffers, or delayed branch slots.',
      'Superscalar operation: exploits Instruction-Level Parallelism (ILP) to achieve IPC > 1 using duplicated ALUs and dynamic dispatch.'
    ]
  }
];
