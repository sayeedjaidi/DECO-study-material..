import React, { useMemo, useState } from 'react';
import { RotateCcw, ChevronLeft, ChevronRight, CheckCircle2, AlertTriangle } from 'lucide-react';
import { LabType } from '../types/curriculum';

interface InteractiveLabProps {
  labType: LabType;
}

export const InteractiveLab: React.FC<InteractiveLabProps> = ({ labType }) => {
  switch (labType) {
    case 'number-converter':
      return <NumberConverterLab />;
    case 'kmap-logic':
      return <KMapLogicLab />;
    case 'rtl-alu':
      return <RtlAluLab />;
    case 'cache-mapping':
      return <CacheMappingLab />;
    case 'pipeline-hazards':
      return <PipelineHazardLab />;
  }
};

function toTwosComplement8(n: number): string {
  const clamped = Math.max(-128, Math.min(127, Math.trunc(n)));
  const unsigned = clamped < 0 ? 256 + clamped : clamped;
  return unsigned.toString(2).padStart(8, '0');
}

function toOnesComplement8(n: number): string {
  if (n >= 0) return Math.min(127, Math.trunc(n)).toString(2).padStart(8, '0');
  const pos = Math.min(127, Math.abs(Math.trunc(n))).toString(2).padStart(8, '0');
  return pos
    .split('')
    .map((b) => (b === '0' ? '1' : '0'))
    .join('');
}

function binaryToGray(bin: string): string {
  if (!bin) return '0';
  let res = bin[0];
  for (let i = 1; i < bin.length; i++) {
    res += bin[i - 1] === bin[i] ? '0' : '1';
  }
  return res;
}

function floatToIeee754(num: number): { sign: string; exponent: string; mantissa: string; expBias: number } {
  const buffer = new ArrayBuffer(4);
  const view = new DataView(buffer);
  view.setFloat32(0, num, false);
  const bits = view.getUint32(0, false).toString(2).padStart(32, '0');
  return {
    sign: bits.slice(0, 1),
    exponent: bits.slice(1, 9),
    mantissa: bits.slice(9),
    expBias: parseInt(bits.slice(1, 9), 2)
  };
}

const NumberConverterLab: React.FC = () => {
  const [decimalInput, setDecimalInput] = useState<string>('45');
  const [floatInput, setFloatInput] = useState<string>('12.5');

  const parsedInt = useMemo(() => {
    const n = Number(decimalInput);
    return Number.isFinite(n) ? Math.max(-128, Math.min(255, Math.trunc(n))) : 0;
  }, [decimalInput]);

  const parsedFloat = useMemo(() => {
    const f = Number(floatInput);
    return Number.isFinite(f) ? f : 0;
  }, [floatInput]);

  const unsignedBin = Math.abs(parsedInt).toString(2).padStart(8, '0');
  const gray = binaryToGray(unsignedBin);
  const ones = toOnesComplement8(parsedInt);
  const twos = toTwosComplement8(parsedInt);
  const oct = Math.abs(parsedInt).toString(8);
  const hex = Math.abs(parsedInt).toString(16).toUpperCase();
  const ieee = useMemo(() => floatToIeee754(parsedFloat), [parsedFloat]);

  const presets = [45, -15, -18, 163];

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200">
        <div>
          <h4 className="text-base font-semibold text-slate-900">
            Interactive Lab: Number Systems, Complements & IEEE 754 Explorer
          </h4>
          <p className="text-sm text-slate-600">
            Inspect live radix conversions, 8-bit signed complements, Gray code, and 32-bit IEEE 754 fields.
          </p>
        </div>
        <div className="flex items-center gap-1.5">
          {presets.map((val) => (
            <button
              key={val}
              type="button"
              onClick={() => setDecimalInput(String(val))}
              className={`px-2.5 py-1.5 text-xs font-mono font-medium rounded-md border transition-colors whitespace-nowrap shrink-0 ${
                parsedInt === val
                  ? 'bg-sky-700 text-white border-sky-700'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              {val}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-4">
        <div className="lg:col-span-6 space-y-4">
          <div className="flex items-end gap-3">
            <label className="flex-1 block">
              <span className="block text-xs font-medium text-slate-600 mb-1.5">
                Integer Value (−128 to 255)
              </span>
              <input
                type="number"
                min={-128}
                max={255}
                value={decimalInput}
                onChange={(e) => setDecimalInput(e.target.value)}
                className="w-full px-3 py-2 text-sm font-mono tabular-nums bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600"
              />
            </label>
          </div>

          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
              <div className="text-xs text-slate-500 mb-1">Magnitude Binary (8-bit)</div>
              <div className="font-mono font-semibold text-slate-900 tabular-nums">{unsignedBin}</div>
            </div>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
              <div className="text-xs text-slate-500 mb-1">Gray Code (of Magnitude)</div>
              <div className="font-mono font-semibold text-sky-700 tabular-nums">{gray}</div>
            </div>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
              <div className="text-xs text-slate-500 mb-1">Octal / Hex (Magnitude)</div>
              <div className="font-mono font-semibold text-slate-900 tabular-nums">
                {oct}₈ · {hex}₁₆
              </div>
            </div>
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
              <div className="text-xs text-slate-500 mb-1">8-Bit 1’s Complement</div>
              <div className="font-mono font-semibold text-slate-900 tabular-nums">{ones}</div>
            </div>
            <div className="col-span-2 p-3 bg-sky-50/70 border border-sky-200 rounded-lg flex items-center justify-between gap-2">
              <div>
                <div className="text-xs text-sky-800 font-medium">8-Bit Signed 2’s Complement (−128 to +127)</div>
                <div className="text-xs text-slate-600 mt-0.5">
                  {parsedInt > 127 ? 'Exceeds signed 8-bit positive max (+127)' : 'Invert bits + 1 for negatives'}
                </div>
              </div>
              <div className="font-mono text-base font-semibold text-sky-900 tabular-nums">{twos}</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 space-y-4">
          <label className="block">
            <span className="block text-xs font-medium text-slate-600 mb-1.5">
              Real Number for IEEE 754 Single Precision (32-bit)
            </span>
            <input
              type="number"
              step="0.25"
              value={floatInput}
              onChange={(e) => setFloatInput(e.target.value)}
              className="w-full px-3 py-2 text-sm font-mono tabular-nums bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600"
            />
          </label>

          <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-600">
              <span>32-Bit Field Breakdown</span>
              <span className="font-mono tabular-nums">Biased Exp E = {ieee.expBias} (e = {ieee.expBias - 127})</span>
            </div>
            <div className="grid grid-cols-12 gap-2 font-mono text-xs tabular-nums">
              <div className="col-span-2 p-2 bg-white border border-slate-200 rounded text-center">
                <div className="text-slate-500 mb-1">S (1b)</div>
                <div className="font-semibold text-slate-900">{ieee.sign}</div>
              </div>
              <div className="col-span-4 p-2 bg-white border border-sky-200 rounded text-center">
                <div className="text-sky-700 mb-1">Exponent (8b)</div>
                <div className="font-semibold text-sky-900">{ieee.exponent}</div>
              </div>
              <div className="col-span-6 p-2 bg-white border border-emerald-200 rounded text-center overflow-hidden">
                <div className="text-emerald-700 mb-1">Mantissa (23b)</div>
                <div className="font-semibold text-emerald-900 truncate" title={ieee.mantissa}>
                  {ieee.mantissa}
                </div>
              </div>
            </div>
            <div className="text-xs text-slate-600 font-mono">
              Value = (−1)^{ieee.sign} × (1.{ieee.mantissa.slice(0, 6)}…)₂ × 2^({ieee.expBias} − 127)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 3-variable K-map Gray-code layout:
// Row A = 0, 1; Cols BC = 00 (m0/m4), 01 (m1/m5), 11 (m3/m7), 10 (m2/m6)
const KMAP_COLS = [
  { label: '00', b: 0, c: 0 },
  { label: '01', b: 0, c: 1 },
  { label: '11', b: 1, c: 1 },
  { label: '10', b: 1, c: 0 }
];

const KMapLogicLab: React.FC = () => {
  // Default to Σm(1,3,5,7) -> F = C
  const [minterms, setMinterms] = useState<boolean[]>([false, true, false, true, false, true, false, true]);

  const toggleMinterm = (idx: number) => {
    setMinterms((prev) => prev.map((v, i) => (i === idx ? !v : v)));
  };

  const activeIndices = useMemo(
    () => minterms.map((v, i) => (v ? i : -1)).filter((i) => i >= 0),
    [minterms]
  );

  // Exact Quine-style prime implicant cover for 3 variables
  const simplifiedSop = useMemo(() => {
    if (activeIndices.length === 0) return '0 (Always False)';
    if (activeIndices.length === 8) return '1 (Always True)';

    const checkGroup = (indices: number[]) => indices.every((idx) => minterms[idx]);

    // Check quads (4 cells -> 1 literal)
    const quads: { indices: number[]; term: string }[] = [
      { indices: [0, 1, 2, 3], term: "A'" },
      { indices: [4, 5, 6, 7], term: 'A' },
      { indices: [0, 1, 4, 5], term: "B'" },
      { indices: [2, 3, 6, 7], term: 'B' },
      { indices: [0, 2, 4, 6], term: "C'" },
      { indices: [1, 3, 5, 7], term: 'C' }
    ];

    const pairs: { indices: number[]; term: string }[] = [
      { indices: [0, 1], term: "A'B'" },
      { indices: [2, 3], term: "A'B" },
      { indices: [4, 5], term: "AB'" },
      { indices: [6, 7], term: 'AB' },
      { indices: [0, 2], term: "A'C'" },
      { indices: [1, 3], term: "A'C" },
      { indices: [4, 6], term: "AC'" },
      { indices: [5, 7], term: 'AC' },
      { indices: [0, 4], term: "B'C'" },
      { indices: [1, 5], term: "B'C" },
      { indices: [2, 6], term: "BC'" },
      { indices: [3, 7], term: 'BC' }
    ];

    const singleTerms = ["A'B'C'", "A'B'C", "A'BC'", "A'BC", "AB'C'", "AB'C", "ABC'", 'ABC'];

    const covered = new Set<number>();
    const chosenTerms: string[] = [];

    for (const q of quads) {
      if (checkGroup(q.indices) && q.indices.some((idx) => !covered.has(idx))) {
        chosenTerms.push(q.term);
        q.indices.forEach((idx) => covered.add(idx));
      }
    }
    for (const p of pairs) {
      if (checkGroup(p.indices) && p.indices.some((idx) => !covered.has(idx))) {
        chosenTerms.push(p.term);
        p.indices.forEach((idx) => covered.add(idx));
      }
    }
    for (const idx of activeIndices) {
      if (!covered.has(idx)) {
        chosenTerms.push(singleTerms[idx]);
        covered.add(idx);
      }
    }

    return chosenTerms.join(' + ');
  }, [activeIndices, minterms]);

  const applyPreset = (indices: number[]) => {
    setMinterms(Array.from({ length: 8 }, (_, i) => indices.includes(i)));
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200">
        <div>
          <h4 className="text-base font-semibold text-slate-900">
            Interactive Lab: 3-Variable Karnaugh Map & Truth Table
          </h4>
          <p className="text-sm text-slate-600">
            Click any K-map cell (Gray-ordered columns 00, 01, 11, 10) to toggle minterms and view minimal SOP.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-1.5">
          <button
            type="button"
            onClick={() => applyPreset([1, 3, 5, 7])}
            className="px-2.5 py-1.5 text-xs font-medium bg-slate-50 text-slate-700 border border-slate-200 rounded-md hover:bg-slate-100 whitespace-nowrap"
          >
            Σm(1,3,5,7)
          </button>
          <button
            type="button"
            onClick={() => applyPreset([3, 5, 6, 7])}
            className="px-2.5 py-1.5 text-xs font-medium bg-slate-50 text-slate-700 border border-slate-200 rounded-md hover:bg-slate-100 whitespace-nowrap"
          >
            FA Carry (3,5,6,7)
          </button>
          <button
            type="button"
            onClick={() => applyPreset([1, 2, 4, 7])}
            className="px-2.5 py-1.5 text-xs font-medium bg-slate-50 text-slate-700 border border-slate-200 rounded-md hover:bg-slate-100 whitespace-nowrap"
          >
            FA Sum (1,2,4,7)
          </button>
          <button
            type="button"
            onClick={() => applyPreset([])}
            className="px-2.5 py-1.5 text-xs font-medium bg-slate-50 text-slate-700 border border-slate-200 rounded-md hover:bg-slate-100 inline-flex items-center gap-1 whitespace-nowrap"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Clear
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-4">
        <div className="lg:col-span-7 space-y-4">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-center font-mono text-sm">
              <thead>
                <tr>
                  <th className="p-2 text-xs text-slate-500 font-medium border border-slate-200 bg-slate-50">
                    A \ BC
                  </th>
                  {KMAP_COLS.map((col) => (
                    <th
                      key={col.label}
                      className="p-2 text-xs font-semibold text-slate-700 border border-slate-200 bg-slate-50"
                    >
                      {col.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[0, 1].map((a) => (
                  <tr key={a}>
                    <th className="p-2 text-xs font-semibold text-slate-700 border border-slate-200 bg-slate-50 w-20">
                      A = {a}
                    </th>
                    {KMAP_COLS.map((col) => {
                      const idx = a * 4 + col.b * 2 + col.c;
                      const active = minterms[idx];
                      return (
                        <td key={idx} className="p-1 border border-slate-200">
                          <button
                            type="button"
                            onClick={() => toggleMinterm(idx)}
                            className={`w-full py-3 rounded-md transition-colors flex flex-col items-center justify-center ${
                              active
                                ? 'bg-sky-700 text-white font-semibold'
                                : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                            }`}
                          >
                            <span className="text-base tabular-nums">{active ? '1' : '0'}</span>
                            <span className={`text-[11px] ${active ? 'text-sky-100' : 'text-slate-400'}`}>
                              m{idx}
                            </span>
                          </button>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-1.5">
            <div className="text-xs text-slate-500">Canonical Minterm Expansion</div>
            <div className="font-mono text-sm text-slate-800 tabular-nums">
              F(A, B, C) = Σm({activeIndices.length > 0 ? activeIndices.join(', ') : '∅'})
            </div>
            <div className="text-xs text-slate-500 pt-2">Minimized Sum-of-Products (SOP)</div>
            <div className="font-mono text-base font-semibold text-sky-800">F = {simplifiedSop}</div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <table className="w-full text-xs font-mono border border-slate-200 rounded-lg overflow-hidden tabular-nums">
            <thead className="bg-slate-50 text-slate-600">
              <tr>
                <th className="py-1.5 px-2 border-b border-slate-200 text-left">m</th>
                <th className="py-1.5 px-2 border-b border-slate-200">A</th>
                <th className="py-1.5 px-2 border-b border-slate-200">B</th>
                <th className="py-1.5 px-2 border-b border-slate-200">C</th>
                <th className="py-1.5 px-2 border-b border-slate-200 text-right">F</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 8 }, (_, idx) => {
                const a = (idx >> 2) & 1;
                const b = (idx >> 1) & 1;
                const c = idx & 1;
                const val = minterms[idx];
                return (
                  <tr
                    key={idx}
                    onClick={() => toggleMinterm(idx)}
                    className={`cursor-pointer transition-colors ${
                      val ? 'bg-sky-50/70 text-sky-950 font-semibold' : 'bg-white text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <td className="py-1.5 px-2 border-b border-slate-100">m{idx}</td>
                    <td className="py-1.5 px-2 border-b border-slate-100 text-center">{a}</td>
                    <td className="py-1.5 px-2 border-b border-slate-100 text-center">{b}</td>
                    <td className="py-1.5 px-2 border-b border-slate-100 text-center">{c}</td>
                    <td className="py-1.5 px-2 border-b border-slate-100 text-right">{val ? '1' : '0'}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

type MicroOpType = 'ADD' | 'SUB' | 'AND' | 'OR' | 'XOR' | 'shl' | 'shr' | 'ashr' | 'cil' | 'cir';

const RtlAluLab: React.FC = () => {
  const [r1, setR1] = useState<number>(5); // 0101
  const [r2, setR2] = useState<number>(3); // 0011
  const [op, setOp] = useState<MicroOpType>('SUB');

  const bin4 = (n: number) => ((n & 0xf) >>> 0).toString(2).padStart(4, '0');
  const signed4 = (n: number) => {
    const v = n & 0xf;
    return v >= 8 ? v - 16 : v;
  };

  const result = useMemo(() => {
    const a = r1 & 0xf;
    const b = r2 & 0xf;
    let res = 0;
    let carryOut = 0;
    let carryIntoSign = 0;
    let rtl = '';
    let note = '';

    if (op === 'ADD') {
      const full = a + b;
      res = full & 0xf;
      carryOut = (full >> 4) & 1;
      carryIntoSign = (((a & 7) + (b & 7)) >> 3) & 1;
      rtl = 'R3 ← R1 + R2';
      note = `Signed interpretation: ${signed4(a)} + ${signed4(b)} = ${signed4(res)}`;
    } else if (op === 'SUB') {
      const bComp = (~b & 0xf) + 1;
      const full = a + bComp;
      res = full & 0xf;
      carryOut = (full >> 4) & 1;
      carryIntoSign = (((a & 7) + (bComp & 7)) >> 3) & 1;
      rtl = "R3 ← R1 + R2' + 1";
      note = `2's comp of R2 (${bin4(b)}) = ${bin4(bComp & 0xf)} (carry out = ${carryOut})`;
    } else if (op === 'AND') {
      res = a & b;
      rtl = 'R3 ← R1 ∧ R2';
      note = 'Bitwise mask / clear operation';
    } else if (op === 'OR') {
      res = a | b;
      rtl = 'R3 ← R1 ∨ R2';
      note = 'Bitwise selective set operation';
    } else if (op === 'XOR') {
      res = a ^ b;
      rtl = 'R3 ← R1 ⊕ R2';
      note = 'Bitwise selective complement';
    } else if (op === 'shl') {
      res = (a << 1) & 0xf;
      rtl = 'R3 ← shl R1';
      note = '0 enters LSB, MSB shifted out (×2)';
    } else if (op === 'shr') {
      res = a >>> 1;
      rtl = 'R3 ← shr R1';
      note = '0 enters MSB, LSB shifted out';
    } else if (op === 'ashr') {
      const sign = a & 0x8;
      res = ((a >>> 1) | sign) & 0xf;
      rtl = 'R3 ← ashr R1';
      note = `Preserves sign bit (${sign ? 1 : 0}); signed ${signed4(a)} → ${signed4(res)}`;
    } else if (op === 'cil') {
      res = ((a << 1) | (a >>> 3)) & 0xf;
      rtl = 'R3 ← cil R1';
      note = 'MSB wraps around into LSB (no bits lost)';
    } else {
      res = ((a >>> 1) | ((a & 1) << 3)) & 0xf;
      rtl = 'R3 ← cir R1';
      note = 'LSB wraps around into MSB (no bits lost)';
    }

    const overflow = op === 'ADD' || op === 'SUB' ? carryOut ^ carryIntoSign : 0;

    return {
      bin: bin4(res),
      unsigned: res,
      signed: signed4(res),
      carryOut,
      overflow,
      rtl,
      note
    };
  }, [r1, r2, op]);

  const ops: MicroOpType[] = ['ADD', 'SUB', 'AND', 'OR', 'XOR', 'shl', 'shr', 'ashr', 'cil', 'cir'];

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200">
        <div>
          <h4 className="text-base font-semibold text-slate-900">
            Interactive Lab: 4-Bit RTL & Shift Micro-Operation Stepper
          </h4>
          <p className="text-sm text-slate-600">
            Adjust 4-bit registers R1 and R2 and test arithmetic, logic, and shift micro-operations.
          </p>
        </div>
        <button
          type="button"
          onClick={() => {
            setR1(11); // 1011 (-5)
            setR2(3);
            setOp('ashr');
          }}
          className="px-3 py-1.5 text-xs font-medium bg-slate-50 text-slate-700 border border-slate-200 rounded-md hover:bg-slate-100 whitespace-nowrap"
        >
          Load R1 = 1011 (−5) Shift Demo
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-4">
        <div className="lg:col-span-5 space-y-4">
          <label className="block">
            <div className="flex justify-between text-xs font-medium text-slate-700 mb-1">
              <span>Register R1 (4-bit)</span>
              <span className="font-mono tabular-nums">
                {bin4(r1)}₂ ({r1} unsigned / {signed4(r1)} signed)
              </span>
            </div>
            <input
              type="range"
              min={0}
              max={15}
              value={r1}
              onChange={(e) => setR1(Number(e.target.value))}
              className="w-full accent-sky-700"
            />
          </label>

          <label className="block">
            <div className="flex justify-between text-xs font-medium text-slate-700 mb-1">
              <span>Register R2 (4-bit)</span>
              <span className="font-mono tabular-nums">
                {bin4(r2)}₂ ({r2} unsigned / {signed4(r2)} signed)
              </span>
            </div>
            <input
              type="range"
              min={0}
              max={15}
              value={r2}
              onChange={(e) => setR2(Number(e.target.value))}
              className="w-full accent-sky-700"
            />
          </label>

          <div>
            <div className="text-xs font-medium text-slate-600 mb-2">Select Micro-Operation</div>
            <div className="grid grid-cols-5 gap-1.5">
              {ops.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setOp(item)}
                  className={`py-1.5 px-2 text-xs font-mono font-medium rounded-md border transition-colors ${
                    op === item
                      ? 'bg-sky-700 text-white border-sky-700'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 p-4 bg-slate-50 border border-slate-200 rounded-lg flex flex-col justify-between gap-4">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-200">
            <div>
              <div className="text-xs text-slate-500">Active RTL Statement</div>
              <div className="font-mono text-base font-semibold text-slate-900">{result.rtl}</div>
            </div>
            {(op === 'ADD' || op === 'SUB') && (
              <div
                className={`inline-flex items-center gap-1.5 text-xs font-medium ${
                  result.overflow ? 'text-amber-700' : 'text-emerald-700'
                }`}
              >
                {result.overflow ? (
                  <>
                    <AlertTriangle className="w-4 h-4" />
                    <span>Signed Overflow V = 1 (C4 ⊕ C3)</span>
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>No Signed Overflow (V = 0)</span>
                  </>
                )}
              </div>
            )}
          </div>

          <div className="grid grid-cols-3 gap-3 font-mono text-center tabular-nums">
            <div className="p-3 bg-white border border-slate-200 rounded-md">
              <div className="text-xs text-slate-500 mb-1">R1</div>
              <div className="text-lg font-semibold text-slate-900">{bin4(r1)}</div>
            </div>
            <div className="p-3 bg-white border border-slate-200 rounded-md">
              <div className="text-xs text-slate-500 mb-1">
                {['shl', 'shr', 'ashr', 'cil', 'cir'].includes(op) ? 'Shift Op' : 'R2'}
              </div>
              <div className="text-lg font-semibold text-slate-900">
                {['shl', 'shr', 'ashr', 'cil', 'cir'].includes(op) ? op : bin4(r2)}
              </div>
            </div>
            <div className="p-3 bg-sky-50 border border-sky-200 rounded-md">
              <div className="text-xs text-sky-700 mb-1">Result R3</div>
              <div className="text-lg font-semibold text-sky-900">{result.bin}</div>
            </div>
          </div>

          <div className="text-xs text-slate-600">{result.note}</div>
        </div>
      </div>
    </div>
  );
};

const CacheMappingLab: React.FC = () => {
  const [addrBits, setAddrBits] = useState<number>(16); // 64K words
  const [blockWords, setBlockWords] = useState<number>(16);
  const [cacheLines, setCacheLines] = useState<number>(128);
  const [assoc, setAssoc] = useState<number>(2); // 1=Direct, 2=2-way, 4=4-way, 0=Associative
  const [hitRatio, setHitRatio] = useState<number>(0.95);
  const [tc, setTc] = useState<number>(10);
  const [tm, setTm] = useState<number>(100);

  const bitSplit = useMemo(() => {
    const wordBits = Math.round(Math.log2(blockWords));
    const effAssoc = assoc === 0 ? cacheLines : Math.min(assoc, cacheLines);
    const numSets = Math.max(1, Math.floor(cacheLines / effAssoc));
    const setBits = assoc === 0 ? 0 : Math.round(Math.log2(numSets));
    const tagBits = Math.max(0, addrBits - setBits - wordBits);
    return { wordBits, setBits, tagBits, numSets, comparators: effAssoc };
  }, [addrBits, blockWords, cacheLines, assoc]);

  const eat = useMemo(() => hitRatio * tc + (1 - hitRatio) * tm, [hitRatio, tc, tm]);

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200">
        <div>
          <h4 className="text-base font-semibold text-slate-900">
            Interactive Lab: Cache Address Bit-Split & Effective Access Time
          </h4>
          <p className="text-sm text-slate-600">
            Compare Direct, Set-Associative, and Fully Associative bit allocations and average access time.
          </p>
        </div>
        <button
          type="button"
          onClick={() => {
            setAddrBits(16);
            setBlockWords(16);
            setCacheLines(128);
            setAssoc(2);
            setHitRatio(0.95);
            setTc(10);
            setTm(100);
          }}
          className="px-3 py-1.5 text-xs font-medium bg-slate-50 text-slate-700 border border-slate-200 rounded-md hover:bg-slate-100 whitespace-nowrap"
        >
          Reset to CIE-2 Example
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-4">
        <div className="lg:col-span-5 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <label className="block">
              <span className="block text-xs font-medium text-slate-600 mb-1">Address Width</span>
              <select
                value={addrBits}
                onChange={(e) => setAddrBits(Number(e.target.value))}
                className="w-full px-2.5 py-2 text-sm font-mono bg-slate-50 border border-slate-200 rounded-lg"
              >
                <option value={12}>12-bit (4K words)</option>
                <option value={16}>16-bit (64K words)</option>
                <option value={20}>20-bit (1M words)</option>
                <option value={24}>24-bit (16M words)</option>
              </select>
            </label>
            <label className="block">
              <span className="block text-xs font-medium text-slate-600 mb-1">Block Size</span>
              <select
                value={blockWords}
                onChange={(e) => setBlockWords(Number(e.target.value))}
                className="w-full px-2.5 py-2 text-sm font-mono bg-slate-50 border border-slate-200 rounded-lg"
              >
                <option value={4}>4 words</option>
                <option value={8}>8 words</option>
                <option value={16}>16 words</option>
                <option value={32}>32 words</option>
              </select>
            </label>
            <label className="block">
              <span className="block text-xs font-medium text-slate-600 mb-1">Cache Lines</span>
              <select
                value={cacheLines}
                onChange={(e) => setCacheLines(Number(e.target.value))}
                className="w-full px-2.5 py-2 text-sm font-mono bg-slate-50 border border-slate-200 rounded-lg"
              >
                <option value={32}>32 lines</option>
                <option value={64}>64 lines</option>
                <option value={128}>128 lines</option>
                <option value={256}>256 lines</option>
              </select>
            </label>
            <label className="block">
              <span className="block text-xs font-medium text-slate-600 mb-1">Mapping Scheme</span>
              <select
                value={assoc}
                onChange={(e) => setAssoc(Number(e.target.value))}
                className="w-full px-2.5 py-2 text-sm font-mono bg-slate-50 border border-slate-200 rounded-lg"
              >
                <option value={1}>Direct (1-way)</option>
                <option value={2}>2-Way Set-Assoc</option>
                <option value={4}>4-Way Set-Assoc</option>
                <option value={0}>Fully Associative</option>
              </select>
            </label>
          </div>

          <div className="space-y-2.5 pt-1">
            <label className="block">
              <div className="flex justify-between text-xs text-slate-600 mb-1">
                <span>Cache Hit Ratio (h)</span>
                <span className="font-mono font-semibold text-slate-900 tabular-nums">
                  {(hitRatio * 100).toFixed(0)}% ({hitRatio.toFixed(2)})
                </span>
              </div>
              <input
                type="range"
                min={0.5}
                max={0.99}
                step={0.01}
                value={hitRatio}
                onChange={(e) => setHitRatio(Number(e.target.value))}
                className="w-full accent-sky-700"
              />
            </label>
            <div className="grid grid-cols-2 gap-3">
              <label className="block">
                <span className="block text-xs text-slate-600 mb-1">Cache Time t_c (ns)</span>
                <input
                  type="number"
                  min={1}
                  max={50}
                  value={tc}
                  onChange={(e) => setTc(Math.max(1, Number(e.target.value)))}
                  className="w-full px-2.5 py-1.5 text-sm font-mono tabular-nums bg-slate-50 border border-slate-200 rounded-lg"
                />
              </label>
              <label className="block">
                <span className="block text-xs text-slate-600 mb-1">RAM Time t_m (ns)</span>
                <input
                  type="number"
                  min={10}
                  max={500}
                  value={tm}
                  onChange={(e) => setTm(Math.max(10, Number(e.target.value)))}
                  className="w-full px-2.5 py-1.5 text-sm font-mono tabular-nums bg-slate-50 border border-slate-200 rounded-lg"
                />
              </label>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 flex flex-col justify-between gap-4 p-4 bg-slate-50 border border-slate-200 rounded-lg">
          <div>
            <div className="flex items-center justify-between text-xs text-slate-600 mb-2">
              <span>{addrBits}-Bit Physical Address Partition</span>
              <span className="font-mono tabular-nums">
                Sets: {bitSplit.numSets} · Comparators: {bitSplit.comparators}
              </span>
            </div>

            <div className="flex rounded-lg overflow-hidden border border-slate-300 font-mono text-xs tabular-nums">
              <div
                style={{ width: `${(bitSplit.tagBits / addrBits) * 100}%` }}
                className="bg-sky-700 text-white p-3 text-center min-w-[64px]"
              >
                <div className="opacity-80">TAG</div>
                <div className="text-sm font-semibold">{bitSplit.tagBits}b</div>
              </div>
              {bitSplit.setBits > 0 && (
                <div
                  style={{ width: `${(bitSplit.setBits / addrBits) * 100}%` }}
                  className="bg-amber-600 text-white p-3 text-center min-w-[64px] border-l border-white/25"
                >
                  <div className="opacity-85">{assoc === 1 ? 'LINE' : 'SET'}</div>
                  <div className="text-sm font-semibold">{bitSplit.setBits}b</div>
                </div>
              )}
              <div
                style={{ width: `${(bitSplit.wordBits / addrBits) * 100}%` }}
                className="bg-emerald-700 text-white p-3 text-center min-w-[64px] border-l border-white/25"
              >
                <div className="opacity-85">WORD</div>
                <div className="text-sm font-semibold">{bitSplit.wordBits}b</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="p-3 bg-white border border-slate-200 rounded-lg">
              <div className="text-xs text-slate-500">Effective Access Time (T_avg)</div>
              <div className="text-2xl font-mono font-semibold text-slate-900 tabular-nums mt-1">
                {eat.toFixed(2)} ns
              </div>
              <div className="text-xs font-mono text-slate-500 mt-1 tabular-nums">
                {hitRatio.toFixed(2)}×{tc} + {(1 - hitRatio).toFixed(2)}×{tm}
              </div>
            </div>
            <div className="p-3 bg-white border border-slate-200 rounded-lg">
              <div className="text-xs text-slate-500">Speedup vs. Uncached RAM</div>
              <div className="text-2xl font-mono font-semibold text-sky-700 tabular-nums mt-1">
                {(tm / eat).toFixed(2)}×
              </div>
              <div className="text-xs text-slate-500 mt-1">
                {assoc === 0
                  ? 'Zero conflict misses, high comparator cost'
                  : assoc === 1
                    ? 'Lowest hardware cost, prone to conflict misses'
                    : `${assoc} tags checked in parallel per set`}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

type HazardScenarioId = 'independent' | 'raw-stall' | 'raw-forward' | 'load-use';

interface ScenarioDef {
  id: HazardScenarioId;
  label: string;
  instructions: string[];
  grid: (string | null)[][];
  cycles: number;
  summary: string;
}

const PIPELINE_SCENARIOS: ScenarioDef[] = [
  {
    id: 'independent',
    label: 'Ideal (No Hazards)',
    instructions: ['ADD R1, R2, R3', 'SUB R4, R5, R6', 'AND R7, R8, R9', 'OR  R10, R11, R12'],
    cycles: 8,
    grid: [
      ['IF', 'ID', 'EX', 'MEM', 'WB', null, null, null],
      [null, 'IF', 'ID', 'EX', 'MEM', 'WB', null, null],
      [null, null, 'IF', 'ID', 'EX', 'MEM', 'WB', null],
      [null, null, null, 'IF', 'ID', 'EX', 'MEM', 'WB']
    ],
    summary: 'Zero dependencies: once full at T5, 1 instruction retires every cycle (k + n − 1 = 8 cycles vs. 20 unpipelined).'
  },
  {
    id: 'raw-stall',
    label: 'RAW Hazard (Stalled)',
    instructions: ['ADD R1, R2, R3', 'SUB R4, R1, R5'],
    cycles: 8,
    grid: [
      ['IF', 'ID', 'EX', 'MEM', 'WB', null, null, null],
      [null, 'IF', 'stall', 'stall', 'ID', 'EX', 'MEM', 'WB']
    ],
    summary: 'Without forwarding, SUB needs R1 at ID (T3) while ADD writes R1 in WB (T5) — requires 2 stall bubbles.'
  },
  {
    id: 'raw-forward',
    label: 'RAW + Data Forwarding',
    instructions: ['ADD R1, R2, R3', 'SUB R4, R1, R5', 'AND R6, R1, R7'],
    cycles: 7,
    grid: [
      ['IF', 'ID', 'EX', 'MEM', 'WB', null, null],
      [null, 'IF', 'ID', 'EX*', 'MEM', 'WB', null],
      [null, null, 'IF', 'ID', 'EX*', 'MEM', 'WB']
    ],
    summary: 'EX/MEM and MEM/WB bypasses route R1 directly to the ALU input (EX*) with 0 stall cycles.'
  },
  {
    id: 'load-use',
    label: 'Load-Use + Forwarding',
    instructions: ['LW  R1, 0(R2)', 'ADD R4, R1, R5'],
    cycles: 7,
    grid: [
      ['IF', 'ID', 'EX', 'MEM', 'WB', null, null],
      [null, 'IF', 'ID', 'stall', 'EX*', 'MEM', 'WB']
    ],
    summary: 'Load data is only ready after MEM (T4), so even with MEM/WB forwarding into EX*, 1 stall bubble is unavoidable.'
  }
];

const stageCellStyle = (stage: string | null) => {
  if (!stage) return 'bg-slate-50 text-transparent';
  if (stage === 'stall') return 'bg-amber-100 text-amber-900 border border-amber-300 font-semibold';
  if (stage === 'EX*') return 'bg-emerald-100 text-emerald-900 border border-emerald-400 font-semibold';
  if (stage === 'IF') return 'bg-sky-100 text-sky-900 border border-sky-200';
  if (stage === 'ID') return 'bg-indigo-100 text-indigo-900 border border-indigo-200';
  if (stage === 'EX') return 'bg-cyan-100 text-cyan-900 border border-cyan-200';
  if (stage === 'MEM') return 'bg-slate-200 text-slate-900 border border-slate-300';
  return 'bg-emerald-50 text-emerald-900 border border-emerald-200';
};

const PipelineHazardLab: React.FC = () => {
  const [scenarioId, setScenarioId] = useState<HazardScenarioId>('raw-forward');
  const [activeCycle, setActiveCycle] = useState<number>(4);

  const scenario = PIPELINE_SCENARIOS.find((s) => s.id === scenarioId) ?? PIPELINE_SCENARIOS[0];
  const clampedCycle = Math.min(activeCycle, scenario.cycles);

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200">
        <div>
          <h4 className="text-base font-semibold text-slate-900">
            Interactive Lab: 5-Stage Pipeline & Hazard Forwarding Simulator
          </h4>
          <p className="text-sm text-slate-600">
            Switch hazard modes and step through clock cycles T1–T{scenario.cycles} to inspect stage overlap and bubbles.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setActiveCycle((c) => Math.max(1, c - 1))}
            disabled={clampedCycle <= 1}
            className="p-1.5 rounded-md border border-slate-200 text-slate-700 hover:bg-slate-100 disabled:opacity-40"
            aria-label="Previous clock cycle"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="font-mono text-xs font-semibold text-slate-900 tabular-nums px-2">
            Clock T{clampedCycle} / T{scenario.cycles}
          </span>
          <button
            type="button"
            onClick={() => setActiveCycle((c) => Math.min(scenario.cycles, c + 1))}
            disabled={clampedCycle >= scenario.cycles}
            className="p-1.5 rounded-md border border-slate-200 text-slate-700 hover:bg-slate-100 disabled:opacity-40"
            aria-label="Next clock cycle"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="pt-4 space-y-4">
        <div className="flex flex-wrap gap-1.5">
          {PIPELINE_SCENARIOS.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => {
                setScenarioId(s.id);
                setActiveCycle(Math.min(4, s.cycles));
              }}
              className={`px-3 py-1.5 text-xs font-medium rounded-md border transition-colors whitespace-nowrap ${
                scenarioId === s.id
                  ? 'bg-sky-700 text-white border-sky-700'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-xs font-mono tabular-nums">
            <thead>
              <tr>
                <th className="py-2 px-3 text-left font-semibold text-slate-600 border-b border-slate-200 min-w-[150px]">
                  Instruction
                </th>
                {Array.from({ length: scenario.cycles }, (_, idx) => {
                  const t = idx + 1;
                  return (
                    <th
                      key={t}
                      onClick={() => setActiveCycle(t)}
                      className={`py-2 px-2 text-center border-b border-slate-200 cursor-pointer transition-colors ${
                        t === clampedCycle ? 'bg-sky-50 text-sky-900 font-bold' : 'text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      T{t}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {scenario.instructions.map((instr, rowIdx) => (
                <tr key={instr} className="border-b border-slate-100">
                  <td className="py-2 px-3 font-medium text-slate-900 whitespace-nowrap">{instr}</td>
                  {scenario.grid[rowIdx].map((stage, colIdx) => {
                    const cycleNum = colIdx + 1;
                    const isCurrent = cycleNum === clampedCycle;
                    return (
                      <td key={colIdx} className={`p-1 ${isCurrent ? 'bg-sky-50/70' : ''}`}>
                        <div
                          className={`py-1.5 px-1 text-center rounded text-[11px] ${
                            cycleNum <= clampedCycle ? stageCellStyle(stage) : 'bg-slate-50 text-slate-300'
                          }`}
                        >
                          {cycleNum <= clampedCycle ? stage ?? '—' : '·'}
                        </div>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs">
          <span className="text-slate-700">{scenario.summary}</span>
          <span className="font-mono text-slate-600 tabular-nums shrink-0">
            EX* = Forwarded Input · stall = NOP Bubble
          </span>
        </div>
      </div>
    </div>
  );
};
